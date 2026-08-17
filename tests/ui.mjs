import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import { readFile } from 'node:fs/promises';

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
});

const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});
page.on('pageerror', (error) => errors.push(error.message));

await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });
await page.screenshot({ path: 'tmp/desktop.png', fullPage: true });
await assertFitsDesktopViewport(page, '1440x1000');

if ((await page.locator('#lot').count()) !== 1) throw new Error('LOT field is missing');
if ((await page.locator('#no-value').count()) !== 0) throw new Error('NO. field should be removed');
if ((await page.locator('.product-option').count()) !== 4) throw new Error('Expected 4 product options');
if ((await page.locator('.product-option.selected').count()) !== 1) throw new Error('Expected one default product');
if ((await page.locator('.sheet-label').count()) !== 24) throw new Error('Expected 24 labels on first page');
const firstQuantity = page.locator('.product-quantity-input[data-code="A13-050-0704"]');
if (await firstQuantity.getAttribute('max') !== '24') throw new Error('Quantity max should be 24');
if (!(await page.locator('[data-quantity-action="plus"][data-code="A13-050-0704"]').isDisabled())) throw new Error('Quantity plus should be disabled at 24');
await firstQuantity.fill('99');
if (await firstQuantity.inputValue() !== '24') throw new Error('Quantity should clamp to 24');
await page.locator('.product-option[data-product-code="A13-050-0604"] .product-select').click();
if ((await page.locator('.product-option.selected').count()) !== 1) throw new Error('A product should not be added when the sheet is full');
if (!(await page.locator('#toast').innerText()).includes('ครบ 24 ดวงแล้ว')) throw new Error('Full-sheet warning was not shown');
const paperBox = await page.locator('.a4-page').boundingBox();
const labelBoxes = await page.locator('.sheet-label').evaluateAll((labels) => labels.map((label) => {
  const box = label.getBoundingClientRect();
  return { x: box.x, y: box.y, width: box.width, height: box.height };
}));
const pageMargins = {
  left: labelBoxes[0].x - paperBox.x,
  right: paperBox.x + paperBox.width - (labelBoxes[3].x + labelBoxes[3].width),
  top: labelBoxes[0].y - paperBox.y,
  bottom: paperBox.y + paperBox.height - (labelBoxes.at(-1).y + labelBoxes.at(-1).height),
};
if (Math.min(...Object.values(pageMargins)) < 10) throw new Error(`Page margin is too small: ${JSON.stringify(pageMargins)}`);
const horizontalCutGap = Math.abs(labelBoxes[0].x + labelBoxes[0].width - labelBoxes[1].x);
const verticalCutGap = Math.abs(labelBoxes[0].y + labelBoxes[0].height - labelBoxes[4].y);
if (horizontalCutGap > 1 || verticalCutGap > 1) throw new Error(`Labels are not touching: ${horizontalCutGap}, ${verticalCutGap}`);

await page.locator('#length').fill('3.25');
await page.locator('#production-date').fill('2026-08-07');
await page.locator('#generate-lot').click();
if (await page.locator('#lot').inputValue() !== 'PL50-260807-001') throw new Error('Automatic LOT was not generated correctly');
await page.locator('#lot').fill('LOT-88');
await page.locator('.product-quantity-input[data-code="A13-050-0704"]').fill('10');
await page.locator('.product-option[data-product-code="A13-050-0404"] .product-select').click();
if ((await page.locator('.product-option.selected').count()) !== 2) throw new Error('Expected two selected products');
const secondQuantity = page.locator('.product-quantity-input[data-code="A13-050-0404"]');
if (await secondQuantity.inputValue() !== '14' || await secondQuantity.getAttribute('max') !== '14') throw new Error('Second product should use the remaining capacity of 14');
await secondQuantity.fill('99');
if (await secondQuantity.inputValue() !== '14') throw new Error('Combined quantity should not exceed 24');
if (!(await page.locator('#selected-count').innerText()).includes('24/24')) throw new Error('Shared capacity summary is incorrect');
if ((await page.locator('.sheet-label').count()) !== 24) throw new Error('Expected 24 mixed labels on first page');
const firstPageCodes = await page.locator('.sheet-label').evaluateAll((labels) => labels.map((label) => label.alt));
if (firstPageCodes.filter((alt) => alt.includes('A13-050-0704')).length !== 10) throw new Error('First product count is incorrect');
if (firstPageCodes.filter((alt) => alt.includes('A13-050-0404')).length !== 14) throw new Error('Second product count is incorrect');
const firstLabelData = await getLabelData(page.locator('.sheet-label').first());
if (!firstLabelData.text.includes('350 × 50 × 3250 mm')) throw new Error('Millimeter size conversion was not applied');
if (!firstLabelData.text.includes('จำนวน 7 เส้น')) throw new Error('First product wire count was not applied');
if (!firstLabelData.text.includes('A13-050-0704')) throw new Error('Product code was not applied');
if (!firstLabelData.text.includes('LOT : LOT-88')) throw new Error('LOT was not applied');
if (!firstLabelData.text.includes('ผลิตวันที่ : 07/08/2026')) throw new Error('Production date was not applied');
if (firstLabelData.raw.includes('NO.')) throw new Error('NO. should not appear in the sticker');
const secondProductData = await getLabelData(page.locator('.sheet-label').nth(10));
if (!secondProductData.text.includes('จำนวน 4 เส้น')) throw new Error('Second product wire count was not applied');
await page.locator('.sheet-label').nth(10).screenshot({ path: 'tmp/label-preview.png' });

await page.reload({ waitUntil: 'networkidle' });
if (await page.locator('#length').inputValue() !== '3.25') throw new Error('Saved length was not restored');
if (await page.locator('#lot').inputValue() !== 'LOT-88') throw new Error('Saved LOT was not restored');
if (await page.locator('#production-date').inputValue() !== '2026-08-07') throw new Error('Saved production date was not restored');
if ((await page.locator('.product-option.selected').count()) !== 2) throw new Error('Saved products were not restored');
if (await page.locator('.product-quantity-input[data-code="A13-050-0704"]').inputValue() !== '10') throw new Error('First saved quantity was not restored');
if (await page.locator('.product-quantity-input[data-code="A13-050-0404"]').inputValue() !== '14') throw new Error('Second saved quantity was not restored');

await page.locator('#generate-button').click();
await page.locator('#review-dialog[open]').waitFor();
await page.locator('#qr-check:not(.checking)').waitFor({ timeout: 15000 });
if (!(await page.locator('#qr-check').getAttribute('class')).includes('valid')) throw new Error('QR validation did not pass');
const reviewText = await page.locator('#review-dialog').innerText();
if (!reviewText.includes('24 ดวง · 1 หน้า')) throw new Error('Review total is incorrect');
if (!reviewText.includes('A13-050-0704') || !reviewText.includes('A13-050-0404')) throw new Error('Review products are incomplete');
await page.locator('#confirm-generate').click();
await page.locator('#file-status.ready').waitFor({ timeout: 15000 });
const download = await Promise.all([
  page.waitForEvent('download'),
  page.locator('#download-button').click(),
]);
await download[0].saveAs('tmp/test-output.pdf');
await page.screenshot({ path: 'tmp/generated.png', fullPage: true });

await page.locator('#history-button').click();
await page.locator('#history-dialog[open]').waitFor();
if ((await page.locator('.history-item').count()) !== 1) throw new Error('Generated job was not added to history');
if (!(await page.locator('.history-item').innerText()).includes('LOT-88')) throw new Error('History LOT is incorrect');
await page.locator('#history-close').click();
await page.locator('#lot').fill('CHANGED');
await page.locator('#history-button').click();
await page.locator('.history-load').click();
if (await page.locator('#lot').inputValue() !== 'LOT-88') throw new Error('History item was not restored');

await page.locator('#generate-button').click();
await page.locator('#review-dialog[open]').waitFor();
await page.locator('#qr-check:not(.checking)').waitFor({ timeout: 15000 });
if (!(await page.locator('#duplicate-lot-warning').isVisible())) throw new Error('Duplicate LOT warning was not shown');
if (!(await page.locator('#duplicate-lot-title').innerText()).includes('LOT-88')) throw new Error('Duplicate LOT warning has the wrong LOT');
if (!(await page.locator('#confirm-generate').isDisabled())) throw new Error('Duplicate LOT generation should require acknowledgement');
await page.locator('#review-dialog').screenshot({ path: 'tmp/duplicate-lot-warning.png' });
await page.locator('#duplicate-lot-confirm').check();
if (await page.locator('#confirm-generate').isDisabled()) throw new Error('Duplicate LOT acknowledgement did not enable generation');
await page.locator('#review-cancel').click();

const labelPositionBeforeOffset = await page.locator('.sheet-label').first().boundingBox();
await page.locator('#print-settings-button').click();
await page.locator('#print-offset-x').fill('2.5');
await page.locator('#print-offset-y').fill('-1.5');
await page.locator('#save-print-settings').click();
const labelPositionAfterOffset = await page.locator('.sheet-label').first().boundingBox();
if (labelPositionAfterOffset.x <= labelPositionBeforeOffset.x || labelPositionAfterOffset.y >= labelPositionBeforeOffset.y) {
  throw new Error('Print offsets were not applied to the preview');
}
await page.reload({ waitUntil: 'networkidle' });
await page.locator('#print-settings-button').click();
if (await page.locator('#print-offset-x').inputValue() !== '2.5' || await page.locator('#print-offset-y').inputValue() !== '-1.5') {
  throw new Error('Print offsets were not restored');
}
const calibrationDownload = await Promise.all([
  page.waitForEvent('download'),
  page.locator('#download-calibration').click(),
]);
await calibrationDownload[0].saveAs('tmp/calibration.pdf');
await page.locator('#print-settings-close').click();

const pdf = await PDFDocument.load(await readFile('tmp/test-output.pdf'));
if (pdf.getPageCount() !== 1) throw new Error(`Expected 1 PDF page, got ${pdf.getPageCount()}`);
const { width, height } = pdf.getPage(0).getSize();
if (Math.abs(width - 841.89) > 0.1 || Math.abs(height - 595.276) > 0.1) {
  throw new Error(`Unexpected A4 size: ${width} x ${height}`);
}

const calibrationPdf = await PDFDocument.load(await readFile('tmp/calibration.pdf'));
if (calibrationPdf.getPageCount() !== 1) {
  throw new Error(`Expected 1 calibration page, got ${calibrationPdf.getPageCount()}`);
}
const calibrationSize = calibrationPdf.getPage(0).getSize();
if (Math.abs(calibrationSize.width - 841.89) > 0.1 || Math.abs(calibrationSize.height - 595.276) > 0.1) {
  throw new Error(`Unexpected calibration A4 size: ${calibrationSize.width} x ${calibrationSize.height}`);
}

const compactDesktop = await browser.newPage({ viewport: { width: 1024, height: 768 }, deviceScaleFactor: 1 });
compactDesktop.on('pageerror', (error) => errors.push(error.message));
await compactDesktop.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await assertFitsDesktopViewport(compactDesktop, '1024x768');
await compactDesktop.locator('#print-settings-button').click();
const printSettingsFit = await compactDesktop.locator('#print-settings-dialog').evaluate((dialog) => {
  const rect = dialog.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    viewportHeight: window.innerHeight,
    overflow: dialog.scrollHeight - dialog.clientHeight,
  };
});
if (printSettingsFit.top < 0 || printSettingsFit.bottom > printSettingsFit.viewportHeight || printSettingsFit.overflow > 1) {
  throw new Error(`Print settings dialog does not fit 1024x768: ${JSON.stringify(printSettingsFit)}`);
}
await compactDesktop.screenshot({ path: 'tmp/compact-desktop.png' });
await compactDesktop.close();

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
mobile.on('pageerror', (error) => errors.push(error.message));
await mobile.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
if (overflow > 1) throw new Error(`Mobile horizontal overflow: ${overflow}px`);
await mobile.screenshot({ path: 'tmp/mobile.png', fullPage: true });

await browser.close();

if (errors.length) throw new Error(`Browser errors:\n${errors.join('\n')}`);
console.log(JSON.stringify({ template: 'sticker_revised_outlined.svg', output: '1200 DPI PDF', selectedProducts: 2, quantities: [10, 14], totalLabels: 24, size: '350 × 50 × 3250 mm', wireCounts: [7, 4], lot: 'LOT-88', pdfPages: 1, width, height, overflow, horizontalCutGap, verticalCutGap }));

async function getLabelData(locator) {
  return locator.evaluate(async (label) => {
    const raw = await fetch(label.src).then((response) => response.text());
    const documentNode = new DOMParser().parseFromString(raw, 'image/svg+xml');
    return { raw, text: documentNode.querySelector('#dynamic-label-data')?.textContent || '' };
  });
}

async function assertFitsDesktopViewport(targetPage, viewportName) {
  const metrics = await targetPage.evaluate(() => {
    const control = document.querySelector('.control-panel');
    const preview = document.querySelector('.preview-panel');
    const downloadButton = document.querySelector('#download-button').getBoundingClientRect();
    const fileStatus = document.querySelector('#file-status').getBoundingClientRect();
    return {
      documentOverflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      documentOverflowY: document.documentElement.scrollHeight - document.documentElement.clientHeight,
      controlOverflowY: control.scrollHeight - control.clientHeight,
      previewOverflowY: preview.scrollHeight - preview.clientHeight,
      downloadBottom: downloadButton.bottom,
      statusBottom: fileStatus.bottom,
      viewportHeight: window.innerHeight,
    };
  });

  if (metrics.documentOverflowX > 1 || metrics.documentOverflowY > 1) {
    throw new Error(`${viewportName} document overflow: ${JSON.stringify(metrics)}`);
  }
  if (metrics.controlOverflowY > 1 || metrics.previewOverflowY > 1) {
    throw new Error(`${viewportName} panel content is clipped: ${JSON.stringify(metrics)}`);
  }
  if (metrics.downloadBottom > metrics.viewportHeight || metrics.statusBottom > metrics.viewportHeight) {
    throw new Error(`${viewportName} actions are outside the viewport: ${JSON.stringify(metrics)}`);
  }
}
