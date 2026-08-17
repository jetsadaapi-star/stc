import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import jsQR from 'jsqr';
import sarabunRegularUrl from '@fontsource/sarabun/files/sarabun-thai-400-normal.woff2?inline';
import sarabunBoldUrl from '@fontsource/sarabun/files/sarabun-thai-700-normal.woff2?inline';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  History,
  Minus,
  PackageOpen,
  Plus,
  Printer,
  RefreshCw,
  RotateCcw,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  X,
  createElement,
} from 'lucide';
import stickerSvg from '../sticker_revised_outlined.svg?raw';
import './style.css';

const MM_TO_PT = 72 / 25.4;
const PRINT_DPI = 1200;
const A4_WIDTH_MM = 297;
const A4_HEIGHT_MM = 210;
const LABEL_WIDTH_MM = 70;
const LABEL_HEIGHT_MM = 30;
const LABEL_COLUMNS = 4;
const LABEL_ROWS = 6;
const LABELS_PER_PAGE = LABEL_COLUMNS * LABEL_ROWS;
const MAX_LABELS_PER_SHEET = LABELS_PER_PAGE;
const STORAGE_KEY = 'stc-label-studio-settings-v1';
const HISTORY_KEY = 'stc-label-studio-history-v1';
const MAX_HISTORY_ITEMS = 10;
const HORIZONTAL_MARGIN_MM = (A4_WIDTH_MM - LABEL_WIDTH_MM * LABEL_COLUMNS) / 2;
const VERTICAL_MARGIN_MM = (A4_HEIGHT_MM - LABEL_HEIGHT_MM * LABEL_ROWS) / 2;

const products = [
  { code: 'A13-050-0704', wires: 7 },
  { code: 'A13-050-0604', wires: 6 },
  { code: 'A13-050-0504', wires: 5 },
  { code: 'A13-050-0404', wires: 4 },
];

const savedSettings = loadSavedSettings();
let toastTimer;
const state = {
  selectedProductCodes: new Set(savedSettings.selectedProductCodes),
  quantityByProduct: savedSettings.quantityByProduct,
  length: savedSettings.length,
  lot: savedSettings.lot,
  productionDate: savedSettings.productionDate,
  printOffsetX: savedSettings.printOffsetX,
  printOffsetY: savedSettings.printOffsetY,
  previewPage: 0,
  labelSvgUrls: new Map(),
  pdfUrl: '',
  pdfBytes: null,
  isDirty: true,
};

document.querySelector('#app').innerHTML = `
  <header class="app-header">
    <div class="brand-mark" aria-hidden="true"><i data-lucide="package-open"></i></div>
    <div>
      <p class="eyebrow">PCC POST-TENSION</p>
      <h1>STC Label Studio</h1>
    </div>
    <div class="header-actions">
      <button class="header-icon-button" id="history-button" type="button" title="ประวัติงาน" aria-label="ประวัติงาน">
        <i data-lucide="history"></i>
      </button>
      <button class="header-icon-button" id="reset-button" type="button" title="เริ่มงานใหม่" aria-label="เริ่มงานใหม่">
        <i data-lucide="rotate-ccw"></i>
      </button>
      <button class="header-icon-button" id="print-settings-button" type="button" title="ตั้งค่าเครื่องพิมพ์" aria-label="ตั้งค่าเครื่องพิมพ์">
        <i data-lucide="sliders-horizontal"></i>
      </button>
      <span class="header-badge"><span></span>พร้อมสร้างไฟล์</span>
    </div>
  </header>

  <main class="workspace">
    <section class="control-panel" aria-labelledby="settings-title">
      <div class="section-heading">
        <div>
          <p class="step-label">ตั้งค่าฉลาก</p>
          <h2 id="settings-title">ข้อมูลสำหรับพิมพ์</h2>
        </div>
        <span class="size-badge">7 × 3 ซม.</span>
      </div>

      <section class="workflow-step" aria-labelledby="product-step-title">
        <div class="step-heading">
          <span class="step-number">1</span>
          <div>
            <h3 id="product-step-title">เลือกสินค้า</h3>
            <span id="selected-count">เลือกแล้ว 1 รายการ</span>
          </div>
        </div>
        <fieldset class="product-fieldset">
          <legend class="sr-only">เลือกสินค้าได้มากกว่าหนึ่งรายการ</legend>
          <div class="product-list" id="product-list"></div>
        </fieldset>
      </section>

      <section class="workflow-step" aria-labelledby="detail-step-title">
        <div class="step-heading">
          <span class="step-number">2</span>
          <div>
            <h3 id="detail-step-title">ระบุข้อมูลฉลาก</h3>
            <span>ขนาดบนฉลากจะแปลงจากเมตรเป็นมิลลิเมตร</span>
          </div>
        </div>
        <div class="form-grid">
          <label class="field length-field">
            <span>ความยาว</span>
            <span class="input-with-unit">
              <input id="length" type="number" min="0.001" max="99.999" step="0.01" inputmode="decimal" value="3.00" />
              <span>เมตร</span>
            </span>
          </label>

          <label class="field">
            <span>วันที่ผลิต</span>
            <input id="production-date" type="date" />
          </label>

          <label class="field">
            <span>LOT</span>
            <span class="input-with-action">
              <input id="lot" type="text" maxlength="20" value="B0001" placeholder="B0001" />
              <button id="generate-lot" type="button" title="สร้าง LOT อัตโนมัติ" aria-label="สร้าง LOT อัตโนมัติ">
                <i data-lucide="refresh-cw"></i>
              </button>
            </span>
          </label>

        </div>
      </section>

      <section class="workflow-step final-step" aria-labelledby="output-step-title">
        <div class="step-heading">
          <span class="step-number">3</span>
          <div>
            <h3 id="output-step-title">สร้างและพิมพ์</h3>
            <span id="output-summary">รวม 24 ฉลาก บนกระดาษ A4 แนวนอน</span>
          </div>
        </div>
        <div class="sheet-summary">
          <div><span>ฉลากทั้งหมด</span><strong id="label-count">24 ดวง</strong></div>
          <div><span>จำนวนหน้า</span><strong id="page-count">1 หน้า</strong></div>
          <div><span>ต่อหน้า</span><strong>24 ดวง</strong></div>
        </div>

        <button class="primary-button" id="generate-button" type="button">
          <i data-lucide="sparkles"></i>
          <span>สร้างไฟล์ PDF</span>
        </button>

        <div class="export-actions">
          <button class="secondary-button" id="print-button" type="button" disabled>
            <i data-lucide="printer"></i>
            <span>พิมพ์</span>
          </button>
          <button class="secondary-button" id="download-button" type="button" disabled>
            <i data-lucide="download"></i>
            <span>ดาวน์โหลด PDF</span>
          </button>
        </div>
      </section>
    </section>

    <section class="preview-panel" aria-labelledby="preview-title">
      <div class="preview-toolbar">
        <div>
          <p class="step-label">ตัวอย่างก่อนพิมพ์</p>
          <h2 id="preview-title">หน้ากระดาษ A4</h2>
        </div>
        <div class="page-controls">
          <button id="previous-page" type="button" title="หน้าก่อนหน้า" aria-label="หน้าก่อนหน้า">
            <i data-lucide="chevron-left"></i>
          </button>
          <span id="page-indicator">1 / 1</span>
          <button id="next-page" type="button" title="หน้าถัดไป" aria-label="หน้าถัดไป">
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
      </div>

      <div class="paper-stage">
        <div class="a4-page" id="a4-preview" aria-label="ตัวอย่างกระดาษ A4"></div>
      </div>

      <div class="file-status" id="file-status">
        <span class="status-icon"><i data-lucide="file-text"></i></span>
        <div>
          <strong>ยังไม่ได้สร้างไฟล์</strong>
          <span>PDF · 1200 DPI · A4 แนวนอน · 24 ฉลากต่อหน้า</span>
        </div>
      </div>
    </section>
  </main>

  <dialog class="review-dialog" id="review-dialog" aria-labelledby="review-title">
    <div class="review-header">
      <div>
        <p class="step-label">ตรวจสอบก่อนสร้าง</p>
        <h2 id="review-title">ยืนยันข้อมูลฉลาก</h2>
      </div>
      <button class="icon-button" id="review-close" type="button" title="ปิด" aria-label="ปิด">
        <i data-lucide="x"></i>
      </button>
    </div>
    <dl class="review-meta" id="review-meta"></dl>
    <div class="qr-check" id="qr-check" role="status"></div>
    <div class="duplicate-lot-warning" id="duplicate-lot-warning" role="alert" hidden>
      <i data-lucide="triangle-alert"></i>
      <div>
        <strong id="duplicate-lot-title"></strong>
        <span id="duplicate-lot-detail"></span>
        <label class="duplicate-lot-confirm">
          <input id="duplicate-lot-confirm" type="checkbox" />
          <span>ยืนยันว่าต้องการพิมพ์ LOT นี้ซ้ำ</span>
        </label>
      </div>
    </div>
    <div class="review-products" id="review-products"></div>
    <div class="review-actions">
      <button class="secondary-button" id="review-cancel" type="button">กลับไปแก้ไข</button>
      <button class="primary-button" id="confirm-generate" type="button">
        <i data-lucide="sparkles"></i>
        <span>ยืนยันและสร้าง PDF</span>
      </button>
    </div>
  </dialog>

  <dialog class="review-dialog print-settings-dialog" id="print-settings-dialog" aria-labelledby="print-settings-title">
    <div class="review-header">
      <div>
        <p class="step-label">ตำแหน่งงานพิมพ์</p>
        <h2 id="print-settings-title">ตั้งค่าเครื่องพิมพ์</h2>
      </div>
      <button class="icon-button" id="print-settings-close" type="button" title="ปิด" aria-label="ปิด">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="print-offset-grid">
      <label class="field">
        <span>แนวนอน</span>
        <span class="input-with-unit">
          <input id="print-offset-x" type="number" min="-5" max="5" step="0.1" inputmode="decimal" />
          <span>มม.</span>
        </span>
      </label>
      <label class="field">
        <span>แนวตั้ง</span>
        <span class="input-with-unit">
          <input id="print-offset-y" type="number" min="-5" max="5" step="0.1" inputmode="decimal" />
          <span>มม.</span>
        </span>
      </label>
    </div>
    <div class="offset-preview" aria-live="polite">
      <span id="offset-direction-x">กึ่งกลางแนวนอน</span>
      <span id="offset-direction-y">กึ่งกลางแนวตั้ง</span>
    </div>
    <button class="calibration-button" id="download-calibration" type="button">
      <i data-lucide="download"></i>
      <span>ดาวน์โหลดแผ่นทดสอบ A4</span>
    </button>
    <div class="review-actions">
      <button class="secondary-button" id="reset-offset" type="button">คืนค่ากึ่งกลาง</button>
      <button class="primary-button" id="save-print-settings" type="button">บันทึกตำแหน่ง</button>
    </div>
  </dialog>

  <dialog class="review-dialog history-dialog" id="history-dialog" aria-labelledby="history-title">
    <div class="review-header">
      <div>
        <p class="step-label">งานที่สร้างแล้ว</p>
        <h2 id="history-title">ประวัติงาน</h2>
      </div>
      <button class="icon-button" id="history-close" type="button" title="ปิด" aria-label="ปิด">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="history-list" id="history-list"></div>
  </dialog>

  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`;

const elements = {
  productList: document.querySelector('#product-list'),
  length: document.querySelector('#length'),
  lot: document.querySelector('#lot'),
  date: document.querySelector('#production-date'),
  selectedCount: document.querySelector('#selected-count'),
  labelCount: document.querySelector('#label-count'),
  outputSummary: document.querySelector('#output-summary'),
  pageCount: document.querySelector('#page-count'),
  preview: document.querySelector('#a4-preview'),
  pageIndicator: document.querySelector('#page-indicator'),
  previousPage: document.querySelector('#previous-page'),
  nextPage: document.querySelector('#next-page'),
  generate: document.querySelector('#generate-button'),
  print: document.querySelector('#print-button'),
  download: document.querySelector('#download-button'),
  fileStatus: document.querySelector('#file-status'),
  toast: document.querySelector('#toast'),
  printRoot: document.querySelector('#print-root'),
  reviewDialog: document.querySelector('#review-dialog'),
  reviewMeta: document.querySelector('#review-meta'),
  reviewProducts: document.querySelector('#review-products'),
  duplicateLotWarning: document.querySelector('#duplicate-lot-warning'),
  duplicateLotTitle: document.querySelector('#duplicate-lot-title'),
  duplicateLotDetail: document.querySelector('#duplicate-lot-detail'),
  duplicateLotConfirm: document.querySelector('#duplicate-lot-confirm'),
  confirmGenerate: document.querySelector('#confirm-generate'),
  historyDialog: document.querySelector('#history-dialog'),
  historyList: document.querySelector('#history-list'),
  qrCheck: document.querySelector('#qr-check'),
  printSettingsDialog: document.querySelector('#print-settings-dialog'),
  printOffsetX: document.querySelector('#print-offset-x'),
  printOffsetY: document.querySelector('#print-offset-y'),
};

renderProductList();
elements.length.value = String(state.length);
elements.lot.value = state.lot;
elements.date.value = state.productionDate;
wireEvents();
replaceIcons();
refreshPreview();
if (savedSettings.wasRestored) showToast('เรียกคืนงานล่าสุดแล้ว');

function renderProductList() {
  elements.productList.innerHTML = products.map((product) => {
    const maxQuantity = getProductQuantityLimit(product.code);
    return `
    <div class="product-option ${state.selectedProductCodes.has(product.code) ? 'selected' : ''}" data-product-code="${product.code}">
      <label class="product-select">
        <input type="checkbox" name="product" value="${product.code}" ${state.selectedProductCodes.has(product.code) ? 'checked' : ''} />
        <span class="product-icon"><i data-lucide="package-open"></i></span>
        <span class="product-copy">
          <span class="product-topline">
            <strong>${product.code}</strong>
            <span class="ready"><span></span>พร้อมใช้</span>
          </span>
          <span class="product-name">แผ่นพื้นลวด 4 mm. ${product.wires} เส้น (0.35×0.05 m.)</span>
        </span>
        <span class="selected-check"><i data-lucide="check"></i></span>
      </label>
      <div class="product-quantity" ${state.selectedProductCodes.has(product.code) ? '' : 'hidden'} title="จำนวนที่กำหนดได้สูงสุด ${maxQuantity} ดวง" aria-label="จำนวนฉลาก ${product.code}">
        <button type="button" data-quantity-action="minus" data-code="${product.code}" title="ลดจำนวน" aria-label="ลดจำนวน ${product.code}" ${state.quantityByProduct[product.code] <= 1 ? 'disabled' : ''}>
          <i data-lucide="minus"></i>
        </button>
        <input class="product-quantity-input" data-code="${product.code}" type="number" min="1" max="${maxQuantity}" step="1" inputmode="numeric" value="${state.quantityByProduct[product.code]}" aria-label="จำนวนฉลาก ${product.code} สูงสุด ${maxQuantity}" />
        <button type="button" data-quantity-action="plus" data-code="${product.code}" title="เพิ่มจำนวน" aria-label="เพิ่มจำนวน ${product.code}" ${state.quantityByProduct[product.code] >= maxQuantity ? 'disabled' : ''}>
          <i data-lucide="plus"></i>
        </button>
      </div>
    </div>
  `;
  }).join('');
}

function wireEvents() {
  elements.productList.addEventListener('change', (event) => {
    if (event.target.matches('.product-quantity-input')) return;
    const product = products.find((item) => item.code === event.target.value);
    if (!product) return;
    if (event.target.checked) {
      const available = MAX_LABELS_PER_SHEET - getTotalLabelCount();
      if (available <= 0) {
        showToast('ครบ 24 ดวงแล้ว กรุณาลดจำนวนสินค้าเดิมก่อน');
        renderProductList();
        replaceIcons();
        return;
      }
      state.quantityByProduct[product.code] = clamp(state.quantityByProduct[product.code], 1, available);
      state.selectedProductCodes.add(product.code);
      showToast(`สินค้า ${product.code} เพิ่มได้สูงสุด ${available} ดวง`);
    } else {
      state.selectedProductCodes.delete(product.code);
    }
    state.previewPage = 0;
    renderProductList();
    replaceIcons();
    markDirty();
    refreshPreview();
  });

  elements.productList.addEventListener('input', (event) => {
    if (!event.target.matches('.product-quantity-input')) return;
    setProductQuantity(event.target.dataset.code, event.target.value, event.target);
  });

  elements.productList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-quantity-action]');
    if (!button) return;
    const code = button.dataset.code;
    const direction = button.dataset.quantityAction === 'plus' ? 1 : -1;
    setProductQuantity(code, state.quantityByProduct[code] + direction);
  });

  elements.length.addEventListener('input', () => {
    state.length = Number(elements.length.value);
    elements.length.removeAttribute('aria-invalid');
    markDirty();
    refreshPreview();
  });

  elements.date.addEventListener('change', () => {
    state.productionDate = elements.date.value;
    elements.date.removeAttribute('aria-invalid');
    markDirty();
    refreshPreview();
  });

  elements.lot.addEventListener('input', () => {
    state.lot = elements.lot.value.trim();
    elements.lot.removeAttribute('aria-invalid');
    markDirty();
    refreshPreview();
  });

  document.querySelector('#generate-lot').addEventListener('click', generateAutomaticLot);
  document.querySelector('#history-button').addEventListener('click', openHistoryDialog);
  document.querySelector('#reset-button').addEventListener('click', resetJob);
  document.querySelector('#print-settings-button').addEventListener('click', openPrintSettings);
  document.querySelector('#print-settings-close').addEventListener('click', closePrintSettings);
  document.querySelector('#save-print-settings').addEventListener('click', savePrintSettings);
  document.querySelector('#reset-offset').addEventListener('click', resetPrintOffsets);
  document.querySelector('#download-calibration').addEventListener('click', downloadCalibrationSheet);
  elements.printSettingsDialog.addEventListener('click', (event) => {
    if (event.target === elements.printSettingsDialog) closePrintSettings();
  });
  elements.printOffsetX.addEventListener('input', updateOffsetDescription);
  elements.printOffsetY.addEventListener('input', updateOffsetDescription);
  document.querySelector('#history-close').addEventListener('click', closeHistoryDialog);
  elements.historyDialog.addEventListener('click', (event) => {
    if (event.target === elements.historyDialog) closeHistoryDialog();
  });
  elements.historyList.addEventListener('click', handleHistoryAction);

  elements.previousPage.addEventListener('click', () => changePreviewPage(-1));
  elements.nextPage.addEventListener('click', () => changePreviewPage(1));
  elements.generate.addEventListener('click', openReviewDialog);
  document.querySelector('#review-close').addEventListener('click', closeReviewDialog);
  document.querySelector('#review-cancel').addEventListener('click', closeReviewDialog);
  elements.duplicateLotConfirm.addEventListener('change', () => {
    elements.confirmGenerate.disabled = !elements.duplicateLotConfirm.checked;
  });
  elements.confirmGenerate.addEventListener('click', () => {
    closeReviewDialog();
    generatePdf();
  });
  elements.reviewDialog.addEventListener('click', (event) => {
    if (event.target === elements.reviewDialog) closeReviewDialog();
  });
  elements.download.addEventListener('click', downloadPdf);
  elements.print.addEventListener('click', printLabels);
}

function setProductQuantity(code, value, input = null) {
  const parsed = Math.round(Number(value));
  const maxQuantity = getProductQuantityLimit(code);
  state.quantityByProduct[code] = Number.isFinite(parsed) ? clamp(parsed, 1, maxQuantity) : 1;
  if (Number.isFinite(parsed) && parsed > maxQuantity) {
    showToast(`สินค้า ${code} กำหนดได้สูงสุด ${maxQuantity} ดวง`);
  }
  updateProductQuantityControls();
  state.previewPage = Math.min(state.previewPage, getPageCount() - 1);
  markDirty();
  updatePagination();
  renderA4Preview();
  renderPrintPages();
}

function updateProductQuantityControls() {
  elements.productList.querySelectorAll('.product-quantity-input').forEach((input) => {
    const code = input.dataset.code;
    const maxQuantity = getProductQuantityLimit(code);
    input.max = String(maxQuantity);
    input.value = String(state.quantityByProduct[code]);
    const quantityControl = input.closest('.product-quantity');
    quantityControl.title = `จำนวนที่กำหนดได้สูงสุด ${maxQuantity} ดวง`;
    quantityControl.querySelector('[data-quantity-action="minus"]').disabled = state.quantityByProduct[code] <= 1;
    quantityControl.querySelector('[data-quantity-action="plus"]').disabled = state.quantityByProduct[code] >= maxQuantity;
  });
}

function changePreviewPage(direction) {
  state.previewPage = clamp(state.previewPage + direction, 0, getPageCount() - 1);
  updatePagination();
  renderA4Preview();
}

function refreshPreview() {
  if (!isFormValid()) {
    clearLabelUrls();
    updatePagination();
    renderA4Preview();
    renderPrintPages();
    return;
  }

  clearLabelUrls();
  getSelectedProducts().forEach((product) => {
    state.labelSvgUrls.set(product.code, URL.createObjectURL(new Blob([buildLabelSvg(product)], { type: 'image/svg+xml' })));
  });
  updatePagination();
  renderA4Preview();
  renderPrintPages();
}

function buildLabelSvg(product) {
  const documentNode = new DOMParser().parseFromString(stickerSvg, 'image/svg+xml');
  const svg = documentNode.documentElement;
  const sizePlaceholder = documentNode.querySelector('[aria-label="350 × 50 × 3,000 mm"]');
  const wirePlaceholder = documentNode.querySelector('[aria-label="ลวดอัดแรง Ø4 mm • จำนวน ______ เส้น"]');
  const lotPlaceholder = documentNode.querySelector('[aria-label="LOT : B0001"]');
  const datePlaceholder = documentNode.querySelector('[aria-label="ผลิตวันที่ : 08/08/2026"]');

  if (!sizePlaceholder || !wirePlaceholder || !lotPlaceholder || !datePlaceholder) {
    throw new Error('Sticker template data fields were not found');
  }

  const dynamicLayer = documentNode.createElementNS('http://www.w3.org/2000/svg', 'g');
  dynamicLayer.setAttribute('id', 'dynamic-label-data');
  const parent = sizePlaceholder.parentNode;
  [sizePlaceholder, wirePlaceholder, lotPlaceholder, datePlaceholder].forEach((node) => node.remove());

  dynamicLayer.append(
    createSvgText(documentNode, {
      x: 67.3,
      y: 63.15,
      size: 5.6,
      weight: 700,
      text: `350 × 50 × ${formatLengthMillimeters(state.length)} mm`,
      label: 'ขนาดสินค้า',
    }),
    createSvgText(documentNode, {
      x: 67.26,
      y: 68.58,
      size: 3.75,
      weight: 600,
      text: `ลวดอัดแรง Ø4 mm • จำนวน ${product.wires} เส้น`,
      label: 'จำนวนเส้น',
    }),
    createSvgText(documentNode, {
      x: 148.1,
      y: 68.5,
      size: 2.8,
      weight: 700,
      anchor: 'end',
      fill: '#294d86',
      text: product.code,
      label: 'รหัสสินค้า',
    }),
    createSvgText(documentNode, {
      x: 67.43,
      y: 75.2,
      size: 3.65,
      weight: 700,
      text: `LOT : ${state.lot}`,
      label: 'LOT',
    }),
    createSvgText(documentNode, {
      x: 108.67,
      y: 75.2,
      size: 3.65,
      weight: 700,
      text: `ผลิตวันที่ : ${formatDate(state.productionDate)}`,
      label: 'วันที่ผลิต',
    }),
  );
  parent.append(dynamicLayer);

  const fontStyle = documentNode.createElementNS('http://www.w3.org/2000/svg', 'style');
  fontStyle.textContent = `
    @font-face{font-family:'Sarabun';src:url('${sarabunRegularUrl}') format('woff2');font-weight:400;font-style:normal}
    @font-face{font-family:'Sarabun';src:url('${sarabunBoldUrl}') format('woff2');font-weight:700;font-style:normal}
  `;
  (documentNode.querySelector('defs') || svg).append(fontStyle);
  return new XMLSerializer().serializeToString(documentNode);
}

function createSvgText(documentNode, { x, y, size, weight, text, label, anchor = 'start', fill = '#1f2937' }) {
  const node = documentNode.createElementNS('http://www.w3.org/2000/svg', 'text');
  node.setAttribute('x', String(x));
  node.setAttribute('y', String(y));
  node.setAttribute('fill', fill);
  node.setAttribute('font-family', "'Sarabun', Tahoma, sans-serif");
  node.setAttribute('font-size', String(size));
  node.setAttribute('font-weight', String(weight));
  node.setAttribute('text-anchor', anchor);
  node.setAttribute('aria-label', label);
  node.textContent = text;
  return node;
}

function renderA4Preview() {
  if (!isFormValid()) {
    elements.preview.innerHTML = '<div class="preview-empty">กรอกข้อมูลให้ครบ</div>';
    return;
  }

  const firstItem = state.previewPage * LABELS_PER_PAGE;
  const pageItems = getLabelItems().slice(firstItem, firstItem + LABELS_PER_PAGE);
  elements.preview.innerHTML = pageItems.map((product, index) => {
    const position = getLabelPosition(index);
    const top = (position.y / A4_HEIGHT_MM) * 100;
    const left = (position.x / A4_WIDTH_MM) * 100;
    return `<img class="sheet-label" style="top:${top}%;left:${left}%" src="${state.labelSvgUrls.get(product.code)}" alt="ฉลาก ${product.code} LOT ${escapeXml(state.lot)}" />`;
  }).join('');
}

function renderPrintPages() {
  if (!isFormValid()) {
    elements.printRoot.innerHTML = '';
    return;
  }
  const items = getLabelItems();
  elements.printRoot.innerHTML = Array.from({ length: getPageCount() }, (_, pageIndex) => {
    const pageItems = items.slice(pageIndex * LABELS_PER_PAGE, (pageIndex + 1) * LABELS_PER_PAGE);
    const labels = pageItems.map((product, index) => {
      const position = getLabelPosition(index);
      return `<img style="top:${position.y}mm;left:${position.x}mm" src="${state.labelSvgUrls.get(product.code)}" alt="" />`;
    }).join('');
    return `<section class="print-page">${labels}</section>`;
  }).join('');
}

async function openReviewDialog() {
  if (!isFormValid()) {
    showValidationMessage();
    return;
  }

  const totalLabels = getTotalLabelCount();
  elements.reviewMeta.innerHTML = `
    <div><dt>ขนาด</dt><dd>350 × 50 × ${formatLengthMillimeters(state.length)} mm</dd></div>
    <div><dt>LOT</dt><dd>${escapeXml(state.lot)}</dd></div>
    <div><dt>วันที่ผลิต</dt><dd>${formatDate(state.productionDate)}</dd></div>
    <div><dt>รวม</dt><dd>${totalLabels} ดวง · ${getPageCount()} หน้า</dd></div>
  `;
  elements.reviewProducts.innerHTML = getSelectedProducts().map((product) => `
    <div class="review-product-row">
      <span><strong>${product.code}</strong><small>${product.wires} เส้น</small></span>
      <strong>${state.quantityByProduct[product.code]} ดวง</strong>
    </div>
  `).join('');
  updateDuplicateLotWarning();
  elements.qrCheck.className = 'qr-check checking';
  elements.qrCheck.textContent = 'กำลังตรวจสอบ QR Code...';
  elements.reviewDialog.showModal();
  const qrResult = await validateQrCode(buildLabelSvg(getSelectedProducts()[0]));
  elements.qrCheck.className = `qr-check ${qrResult.valid ? 'valid' : 'warning'}`;
  elements.qrCheck.textContent = qrResult.valid
    ? 'QR Code อ่านได้ พร้อมสร้างไฟล์'
    : 'ไม่สามารถยืนยัน QR Code ได้ กรุณาตรวจตัวอย่างก่อนพิมพ์';
}

function updateDuplicateLotWarning() {
  const normalizedLot = state.lot.trim().toLocaleUpperCase('en-US');
  const duplicates = loadHistory().filter((item) => item.lot.trim().toLocaleUpperCase('en-US') === normalizedLot);
  const latest = duplicates[0];
  const isDuplicate = duplicates.length > 0;

  elements.duplicateLotWarning.hidden = !isDuplicate;
  elements.duplicateLotConfirm.checked = false;
  elements.confirmGenerate.disabled = isDuplicate;
  elements.confirmGenerate.querySelector('span').textContent = isDuplicate
    ? 'ยืนยันพิมพ์ซ้ำ'
    : 'ยืนยันและสร้าง PDF';

  if (!isDuplicate) return;
  elements.duplicateLotTitle.textContent = `พบ LOT ${state.lot} ในประวัติ ${duplicates.length} ครั้ง`;
  elements.duplicateLotDetail.textContent = `สร้างล่าสุด ${formatHistoryTimestamp(latest.createdAt)} กรุณาตรวจสอบก่อนพิมพ์ซ้ำ`;
}

function closeReviewDialog() {
  if (elements.reviewDialog.open) elements.reviewDialog.close();
}

function openPrintSettings() {
  elements.printOffsetX.value = String(state.printOffsetX);
  elements.printOffsetY.value = String(state.printOffsetY);
  updateOffsetDescription();
  elements.printSettingsDialog.showModal();
}

function closePrintSettings() {
  if (elements.printSettingsDialog.open) elements.printSettingsDialog.close();
}

function savePrintSettings() {
  state.printOffsetX = clamp(Number(elements.printOffsetX.value) || 0, -5, 5);
  state.printOffsetY = clamp(Number(elements.printOffsetY.value) || 0, -5, 5);
  persistSettings();
  markDirty();
  refreshPreview();
  closePrintSettings();
  showToast(`ชดเชยตำแหน่ง X ${formatSigned(state.printOffsetX)} มม. · Y ${formatSigned(state.printOffsetY)} มม.`);
}

function resetPrintOffsets() {
  elements.printOffsetX.value = '0';
  elements.printOffsetY.value = '0';
  updateOffsetDescription();
}

function updateOffsetDescription() {
  const x = clamp(Number(elements.printOffsetX.value) || 0, -5, 5);
  const y = clamp(Number(elements.printOffsetY.value) || 0, -5, 5);
  document.querySelector('#offset-direction-x').textContent = x === 0 ? 'กึ่งกลางแนวนอน' : `${Math.abs(x)} มม. ไปทาง${x > 0 ? 'ขวา' : 'ซ้าย'}`;
  document.querySelector('#offset-direction-y').textContent = y === 0 ? 'กึ่งกลางแนวตั้ง' : `${Math.abs(y)} มม. ไปทาง${y > 0 ? 'ล่าง' : 'บน'}`;
}

async function downloadCalibrationSheet() {
  const button = document.querySelector('#download-calibration');
  button.disabled = true;
  try {
    const pdf = await PDFDocument.create();
    const pageWidth = A4_WIDTH_MM * MM_TO_PT;
    const pageHeight = A4_HEIGHT_MM * MM_TO_PT;
    const page = pdf.addPage([pageWidth, pageHeight]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold);
    const blue = rgb(0.05, 0.32, 0.66);
    const gray = rgb(0.35, 0.4, 0.45);
    const lightGray = rgb(0.76, 0.79, 0.82);

    page.drawText('STC PRINTER CALIBRATION - A4 LANDSCAPE - PRINT AT 100%', {
      x: 12 * MM_TO_PT,
      y: pageHeight - 9 * MM_TO_PT,
      size: 9,
      font: boldFont,
      color: blue,
    });
    page.drawText('Measure the printed target shift, then enter the opposite correction in Printer Settings.', {
      x: 12 * MM_TO_PT,
      y: pageHeight - 14 * MM_TO_PT,
      size: 6.5,
      font,
      color: gray,
    });

    for (let row = 0; row < LABEL_ROWS; row += 1) {
      for (let column = 0; column < LABEL_COLUMNS; column += 1) {
        const x = (HORIZONTAL_MARGIN_MM + column * LABEL_WIDTH_MM) * MM_TO_PT;
        const top = (VERTICAL_MARGIN_MM + row * LABEL_HEIGHT_MM) * MM_TO_PT;
        const y = pageHeight - top - LABEL_HEIGHT_MM * MM_TO_PT;
        page.drawRectangle({
          x,
          y,
          width: LABEL_WIDTH_MM * MM_TO_PT,
          height: LABEL_HEIGHT_MM * MM_TO_PT,
          borderWidth: 0.35,
          borderColor: row === 0 && column === 0 ? blue : lightGray,
          borderDashArray: row === 0 && column === 0 ? undefined : [2, 2],
        });
      }
    }

    drawCalibrationTarget(page, HORIZONTAL_MARGIN_MM, VERTICAL_MARGIN_MM, blue);
    drawCalibrationTarget(page, HORIZONTAL_MARGIN_MM + LABEL_COLUMNS * LABEL_WIDTH_MM, VERTICAL_MARGIN_MM, blue);
    drawCalibrationTarget(page, HORIZONTAL_MARGIN_MM, VERTICAL_MARGIN_MM + LABEL_ROWS * LABEL_HEIGHT_MM, blue);
    drawCalibrationTarget(page, HORIZONTAL_MARGIN_MM + LABEL_COLUMNS * LABEL_WIDTH_MM, VERTICAL_MARGIN_MM + LABEL_ROWS * LABEL_HEIGHT_MM, blue);
    drawCalibrationRulers(page, font, gray, lightGray);

    const bytes = await pdf.save();
    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'STC_printer_calibration_A4.pdf';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('สร้างแผ่นทดสอบ A4 แล้ว');
  } catch (error) {
    console.error(error);
    showToast('สร้างแผ่นทดสอบไม่สำเร็จ');
  } finally {
    button.disabled = false;
  }
}

function drawCalibrationTarget(page, xMm, topMm, color) {
  const x = xMm * MM_TO_PT;
  const y = (A4_HEIGHT_MM - topMm) * MM_TO_PT;
  const arm = 4 * MM_TO_PT;
  page.drawLine({ start: { x: x - arm, y }, end: { x: x + arm, y }, thickness: 0.7, color });
  page.drawLine({ start: { x, y: y - arm }, end: { x, y: y + arm }, thickness: 0.7, color });
  page.drawCircle({ x, y, size: 1.5 * MM_TO_PT, borderWidth: 0.5, borderColor: color });
}

function drawCalibrationRulers(page, font, color, lightColor) {
  const horizontalStartX = 98.5;
  const horizontalY = 195;
  page.drawLine({
    start: { x: horizontalStartX * MM_TO_PT, y: (A4_HEIGHT_MM - horizontalY) * MM_TO_PT },
    end: { x: (horizontalStartX + 100) * MM_TO_PT, y: (A4_HEIGHT_MM - horizontalY) * MM_TO_PT },
    thickness: 0.5,
    color,
  });
  for (let mm = 0; mm <= 100; mm += 1) {
    const height = mm % 10 === 0 ? 4 : (mm % 5 === 0 ? 2.5 : 1.4);
    const x = (horizontalStartX + mm) * MM_TO_PT;
    const y = (A4_HEIGHT_MM - horizontalY) * MM_TO_PT;
    page.drawLine({ start: { x, y }, end: { x, y: y - height * MM_TO_PT }, thickness: 0.25, color: mm % 5 === 0 ? color : lightColor });
    if (mm % 10 === 0) page.drawText(String(mm), { x: x - 2, y: y - 7 * MM_TO_PT, size: 5, font, color });
  }
  page.drawText('100 mm reference ruler', { x: 116 * MM_TO_PT, y: 5 * MM_TO_PT, size: 6, font, color });
}

async function validateQrCode(svg) {
  const blobUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  try {
    const image = await loadImage(blobUrl);
    const canvas = document.createElement('canvas');
    canvas.width = 1400;
    canvas.height = 600;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    const result = jsQR(pixels.data, pixels.width, pixels.height, { inversionAttempts: 'attemptBoth' });
    return { valid: Boolean(result?.data), data: result?.data || '' };
  } catch {
    return { valid: false, data: '' };
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
}

function generateAutomaticLot() {
  const date = (state.productionDate || todayForInput()).replaceAll('-', '').slice(2);
  const prefix = `PL50-${date}-`;
  const usedSequences = loadHistory()
    .map((item) => item.lot)
    .filter((lot) => lot?.startsWith(prefix))
    .map((lot) => Number(lot.slice(prefix.length)))
    .filter(Number.isFinite);
  const currentSequence = state.lot.startsWith(prefix) ? Number(state.lot.slice(prefix.length)) : 0;
  const nextSequence = Math.max(0, currentSequence, ...usedSequences) + 1;
  state.lot = `${prefix}${String(nextSequence).padStart(3, '0')}`;
  elements.lot.value = state.lot;
  elements.lot.removeAttribute('aria-invalid');
  markDirty();
  refreshPreview();
  showToast(`สร้าง LOT ${state.lot} แล้ว`);
}

function resetJob() {
  if (!window.confirm('เริ่มงานใหม่และล้างค่าที่กำลังกรอกหรือไม่?')) return;
  state.selectedProductCodes = new Set([products[0].code]);
  state.quantityByProduct = Object.fromEntries(products.map((product) => [product.code, MAX_LABELS_PER_SHEET]));
  state.length = 3;
  state.lot = 'B0001';
  state.productionDate = todayForInput();
  state.previewPage = 0;
  elements.length.value = '3';
  elements.lot.value = state.lot;
  elements.date.value = state.productionDate;
  renderProductList();
  replaceIcons();
  markDirty();
  refreshPreview();
  showToast('เริ่มงานใหม่แล้ว');
}

function openHistoryDialog() {
  renderHistoryList();
  elements.historyDialog.showModal();
}

function closeHistoryDialog() {
  if (elements.historyDialog.open) elements.historyDialog.close();
}

function renderHistoryList() {
  const history = loadHistory();
  elements.historyList.innerHTML = history.length ? history.map((item) => `
    <div class="history-item" data-history-id="${item.id}">
      <button class="history-load" type="button" data-history-action="load" data-id="${item.id}">
        <span><strong>${escapeXml(item.lot)}</strong><small>${formatHistoryTimestamp(item.createdAt)}</small></span>
        <span><strong>${getSnapshotTotal(item)} ดวง</strong><small>${item.selectedProductCodes.length} สินค้า · ${formatLength(item.length)} m</small></span>
      </button>
      <button class="history-delete" type="button" data-history-action="delete" data-id="${item.id}" title="ลบรายการ" aria-label="ลบ ${escapeXml(item.lot)}">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join('') : '<div class="history-empty">ยังไม่มีประวัติงาน</div>';
  replaceIcons();
}

function handleHistoryAction(event) {
  const button = event.target.closest('[data-history-action]');
  if (!button) return;
  const history = loadHistory();
  const item = history.find((entry) => entry.id === button.dataset.id);
  if (button.dataset.historyAction === 'delete') {
    saveHistory(history.filter((entry) => entry.id !== button.dataset.id));
    renderHistoryList();
    showToast('ลบประวัติแล้ว');
    return;
  }
  if (!item) return;
  applySnapshot(item);
  closeHistoryDialog();
  showToast(`เรียกคืน LOT ${item.lot} แล้ว`);
}

function applySnapshot(snapshot) {
  state.selectedProductCodes = new Set(snapshot.selectedProductCodes);
  state.quantityByProduct = { ...snapshot.quantityByProduct };
  state.length = snapshot.length;
  state.lot = snapshot.lot;
  state.productionDate = snapshot.productionDate;
  state.previewPage = 0;
  elements.length.value = String(state.length);
  elements.lot.value = state.lot;
  elements.date.value = state.productionDate;
  renderProductList();
  replaceIcons();
  markDirty();
  refreshPreview();
}

function showValidationMessage() {
  elements.length.toggleAttribute('aria-invalid', !Number.isFinite(state.length) || state.length <= 0);
  elements.date.toggleAttribute('aria-invalid', !state.productionDate);
  elements.lot.toggleAttribute('aria-invalid', !state.lot);
  if (!state.selectedProductCodes.size) {
    showToast('กรุณาเลือกสินค้าอย่างน้อย 1 รายการ');
    elements.productList.querySelector('input')?.focus();
    return;
  }
  showToast('กรุณากรอกความยาว วันที่ผลิต และ LOT ให้ครบ');
  if (!Number.isFinite(state.length) || state.length <= 0) elements.length.focus();
  else if (!state.productionDate) elements.date.focus();
  else elements.lot.focus();
}

async function generatePdf() {
  if (!isFormValid()) {
    showValidationMessage();
    return;
  }

  setGenerating(true);
  try {
    const pdf = await PDFDocument.create();
    const labelImages = new Map();
    for (const product of getSelectedProducts()) {
      const labelBytes = await renderLabelPng(buildLabelSvg(product));
      labelImages.set(product.code, await pdf.embedPng(labelBytes));
    }
    const items = getLabelItems();
    const pageWidth = A4_WIDTH_MM * MM_TO_PT;
    const pageHeight = A4_HEIGHT_MM * MM_TO_PT;
    const labelWidth = LABEL_WIDTH_MM * MM_TO_PT;
    const labelHeight = LABEL_HEIGHT_MM * MM_TO_PT;
    for (let pageIndex = 0; pageIndex < getPageCount(); pageIndex += 1) {
      const page = pdf.addPage([pageWidth, pageHeight]);
      const pageItems = items.slice(pageIndex * LABELS_PER_PAGE, (pageIndex + 1) * LABELS_PER_PAGE);
      for (let index = 0; index < pageItems.length; index += 1) {
        const position = getLabelPosition(index);
        const x = position.x * MM_TO_PT;
        const y = pageHeight - (position.y + LABEL_HEIGHT_MM) * MM_TO_PT;
        page.drawImage(labelImages.get(pageItems[index].code), { x, y, width: labelWidth, height: labelHeight });
      }
    }

    const bytes = await pdf.save();
    if (state.pdfUrl) URL.revokeObjectURL(state.pdfUrl);
    state.pdfBytes = bytes;
    state.pdfUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    state.isDirty = false;
    saveHistoryItem();
    setFileReady(bytes.length);
    showToast('สร้างไฟล์ PDF เรียบร้อยแล้ว');
  } catch (error) {
    console.error(error);
    showToast('สร้างไฟล์ไม่สำเร็จ กรุณาลองอีกครั้ง');
  } finally {
    setGenerating(false);
  }
}

async function renderLabelPng(svg) {
  const blobUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  try {
    const image = await loadImage(blobUrl);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round((LABEL_WIDTH_MM / 25.4) * PRINT_DPI);
    canvas.height = Math.round((LABEL_HEIGHT_MM / 25.4) * PRINT_DPI);
    const context = canvas.getContext('2d', { alpha: false });
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pngBlob = await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('PNG rendering failed'))), 'image/png');
    });
    return new Uint8Array(await pngBlob.arrayBuffer());
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
}

function downloadPdf() {
  if (!state.pdfUrl || state.isDirty) return;
  const link = document.createElement('a');
  link.href = state.pdfUrl;
  const safeLot = state.lot.replace(/[^a-zA-Z0-9_-]+/g, '-');
  const selectedProducts = getSelectedProducts();
  const productPrefix = selectedProducts.length === 1 ? selectedProducts[0].code : `STC_${selectedProducts.length}-products`;
  link.download = `${productPrefix}_${safeLot}_${formatLengthMillimeters(state.length)}mm_${state.productionDate}.pdf`;
  link.click();
}

function printLabels() {
  if (!state.pdfUrl || state.isDirty) return;
  window.print();
}

function markDirty() {
  persistSettings();
  state.isDirty = true;
  elements.print.disabled = true;
  elements.download.disabled = true;
  elements.fileStatus.classList.remove('ready');
  elements.fileStatus.innerHTML = `
    <span class="status-icon"><i data-lucide="file-text"></i></span>
    <div><strong>มีการแก้ไขข้อมูล</strong><span>กดสร้างไฟล์ PDF เพื่ออัปเดต</span></div>
  `;
  replaceIcons();
}

function setGenerating(isGenerating) {
  elements.generate.disabled = isGenerating;
  elements.generate.classList.toggle('loading', isGenerating);
  elements.generate.querySelector('span').textContent = isGenerating ? 'กำลังสร้างไฟล์…' : 'สร้างไฟล์ PDF';
}

function setFileReady(byteLength) {
  elements.print.disabled = false;
  elements.download.disabled = false;
  elements.fileStatus.classList.add('ready');
  elements.fileStatus.innerHTML = `
    <span class="status-icon"><i data-lucide="check"></i></span>
    <div><strong>ไฟล์พร้อมพิมพ์</strong><span>1200 DPI · ${getPageCount()} หน้า · ${getTotalLabelCount()} ฉลาก · ${formatFileSize(byteLength)}</span></div>
  `;
  replaceIcons();
}

function updatePagination() {
  const pages = getPageCount();
  const totalLabels = getTotalLabelCount();
  const productCount = state.selectedProductCodes.size;
  const remainingLabels = MAX_LABELS_PER_SHEET - totalLabels;
  elements.selectedCount.textContent = productCount
    ? `เลือกแล้ว ${productCount} รายการ · ${totalLabels}/${MAX_LABELS_PER_SHEET} ดวง · ${remainingLabels ? `เหลือ ${remainingLabels}` : 'เต็มแล้ว'}`
    : `ยังไม่ได้เลือกสินค้า · เพิ่มได้ ${MAX_LABELS_PER_SHEET} ดวง`;
  elements.labelCount.textContent = `${totalLabels} ดวง`;
  elements.outputSummary.textContent = `รวม ${totalLabels} ฉลาก บนกระดาษ A4 แนวนอน`;
  elements.pageCount.textContent = `${pages} หน้า`;
  elements.pageIndicator.textContent = `${state.previewPage + 1} / ${pages}`;
  elements.previousPage.disabled = state.previewPage === 0;
  elements.nextPage.disabled = state.previewPage >= pages - 1;
}

function isFormValid() {
  return state.selectedProductCodes.size > 0
    && Number.isFinite(state.length)
    && state.length > 0
    && Boolean(state.productionDate)
    && Boolean(state.lot);
}

function getPageCount() {
  return Math.max(1, Math.ceil(getTotalLabelCount() / LABELS_PER_PAGE));
}

function getTotalLabelCount() {
  return getSelectedProducts().reduce((total, product) => total + state.quantityByProduct[product.code], 0);
}

function getProductQuantityLimit(code) {
  const otherProductsTotal = getSelectedProducts()
    .filter((product) => product.code !== code)
    .reduce((total, product) => total + state.quantityByProduct[product.code], 0);
  return Math.max(1, MAX_LABELS_PER_SHEET - otherProductsTotal);
}

function getSelectedProducts() {
  return products.filter((product) => state.selectedProductCodes.has(product.code));
}

function getLabelItems() {
  return getSelectedProducts().flatMap((product) => (
    Array.from({ length: state.quantityByProduct[product.code] }, () => product)
  ));
}

function getLabelPosition(index) {
  const column = index % LABEL_COLUMNS;
  const row = Math.floor(index / LABEL_COLUMNS);
  return {
    x: HORIZONTAL_MARGIN_MM + state.printOffsetX + column * LABEL_WIDTH_MM,
    y: VERTICAL_MARGIN_MM + state.printOffsetY + row * LABEL_HEIGHT_MM,
  };
}

function clearLabelUrls() {
  state.labelSvgUrls.forEach((url) => URL.revokeObjectURL(url));
  state.labelSvgUrls.clear();
}

function formatLength(value) {
  if (!Number.isFinite(value)) return '';
  return value.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

function formatDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return '';
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
}

function formatLengthMillimeters(value) {
  if (!Number.isFinite(value)) return '';
  return String(Math.round(value * 1000));
}

function formatFileSize(bytes) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function formatSigned(value) {
  return value > 0 ? `+${value}` : String(value);
}

function loadSavedSettings() {
  const defaults = {
    selectedProductCodes: [products[0].code],
    quantityByProduct: Object.fromEntries(products.map((product) => [product.code, MAX_LABELS_PER_SHEET])),
    length: 3,
    lot: 'B0001',
    productionDate: todayForInput(),
    printOffsetX: 0,
    printOffsetY: 0,
    wasRestored: false,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const saved = JSON.parse(raw);
    const selectedProductCodes = Array.isArray(saved.selectedProductCodes)
      ? saved.selectedProductCodes.filter((code) => products.some((product) => product.code === code))
      : defaults.selectedProductCodes;
    const quantityByProduct = Object.fromEntries(products.map((product) => {
      const value = Math.round(Number(saved.quantityByProduct?.[product.code]));
      return [product.code, Number.isFinite(value) ? clamp(value, 1, MAX_LABELS_PER_SHEET) : MAX_LABELS_PER_SHEET];
    }));
    let remainingCapacity = MAX_LABELS_PER_SHEET;
    selectedProductCodes.forEach((code, index) => {
      const remainingProducts = selectedProductCodes.length - index - 1;
      const maxForProduct = Math.max(1, remainingCapacity - remainingProducts);
      quantityByProduct[code] = clamp(quantityByProduct[code], 1, maxForProduct);
      remainingCapacity -= quantityByProduct[code];
    });
    const length = Number(saved.length);
    return {
      selectedProductCodes,
      quantityByProduct,
      length: Number.isFinite(length) && length > 0 ? length : defaults.length,
      lot: typeof saved.lot === 'string' ? saved.lot.slice(0, 20) : defaults.lot,
      productionDate: /^\d{4}-\d{2}-\d{2}$/.test(saved.productionDate || '') ? saved.productionDate : defaults.productionDate,
      printOffsetX: clamp(Number(saved.printOffsetX) || 0, -5, 5),
      printOffsetY: clamp(Number(saved.printOffsetY) || 0, -5, 5),
      wasRestored: true,
    };
  } catch {
    return defaults;
  }
}

function persistSettings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      selectedProductCodes: [...state.selectedProductCodes],
      quantityByProduct: state.quantityByProduct,
      length: state.length,
      lot: state.lot,
      productionDate: state.productionDate,
      printOffsetX: state.printOffsetX,
      printOffsetY: state.printOffsetY,
    }));
  } catch {
    // The app remains fully usable when browser storage is unavailable.
  }
}

function saveHistoryItem() {
  const history = loadHistory();
  const snapshot = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    selectedProductCodes: [...state.selectedProductCodes],
    quantityByProduct: { ...state.quantityByProduct },
    length: state.length,
    lot: state.lot,
    productionDate: state.productionDate,
  };
  saveHistory([snapshot, ...history].slice(0, MAX_HISTORY_ITEMS));
}

function loadHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter(isValidHistoryItem).slice(0, MAX_HISTORY_ITEMS) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // History is optional when browser storage is unavailable.
  }
}

function isValidHistoryItem(item) {
  return item
    && typeof item.id === 'string'
    && typeof item.lot === 'string'
    && Array.isArray(item.selectedProductCodes)
    && item.quantityByProduct;
}

function getSnapshotTotal(snapshot) {
  return snapshot.selectedProductCodes.reduce((total, code) => total + Number(snapshot.quantityByProduct[code] || 0), 0);
}

function formatHistoryTimestamp(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('th-TH', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

function todayForInput() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  toastTimer = window.setTimeout(() => elements.toast.classList.remove('show'), 2600);
}

function replaceIcons() {
  const iconMap = {
    Check,
    ChevronLeft,
    ChevronRight,
    Download,
    FileText,
    Minus,
    PackageOpen,
    Plus,
    Printer,
    RefreshCw,
    RotateCcw,
    SlidersHorizontal,
    Sparkles,
    Trash2,
    X,
    History,
  };
  document.querySelectorAll('[data-lucide]').forEach((element) => {
    const name = element.getAttribute('data-lucide');
    const icon = iconMap[toPascalCase(name)];
    if (!icon) return;
    const svg = createElement(icon, { width: 20, height: 20, 'stroke-width': 2 });
    element.replaceWith(svg);
  });
}

function toPascalCase(value) {
  return value.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}
