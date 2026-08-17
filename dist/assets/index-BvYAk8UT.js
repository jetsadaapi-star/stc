(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))r(x);new MutationObserver(x=>{for(const i of x)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(x){const i={};return x.integrity&&(i.integrity=x.integrity),x.referrerPolicy&&(i.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?i.credentials="include":x.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(x){if(x.ep)return;x.ep=!0;const i=t(x);fetch(x.href,i)}})();var or=function(n,e){return or=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var x in r)r.hasOwnProperty(x)&&(t[x]=r[x])},or(n,e)};function e0(n,e){or(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var F0=function(){return F0=Object.assign||function(e){for(var t,r=1,x=arguments.length;r<x;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},F0.apply(this,arguments)};function v2(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,r=Object.getOwnPropertySymbols(n);x<r.length;x++)e.indexOf(r[x])<0&&Object.prototype.propertyIsEnumerable.call(n,r[x])&&(t[r[x]]=n[r[x]]);return t}function w0(n,e,t,r){function x(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function a(h){try{c(r.next(h))}catch(s){o(s)}}function l(h){try{c(r.throw(h))}catch(s){o(s)}}function c(h){h.done?i(h.value):x(h.value).then(a,l)}c((r=r.apply(n,[])).next())})}function b0(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,x,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(h){return l([c,h])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,x&&(i=c[0]&2?x.return:c[0]?x.throw||((i=x.return)&&i.call(x),0):x.next)&&!(i=i.call(x,c[1])).done)return i;switch(x=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,x=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(n,t)}catch(h){c=[6,h],x=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function T0(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),x=0,e=0;e<t;e++)for(var i=arguments[e],o=0,a=i.length;o<a;o++,x++)r[x]=i[o];return r}var Jt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f5=new Uint8Array(256);for(var K5=0;K5<Jt.length;K5++)f5[Jt.charCodeAt(K5)]=K5;var E2=function(n){for(var e="",t=n.length,r=0;r<t;r+=3)e+=Jt[n[r]>>2],e+=Jt[(n[r]&3)<<4|n[r+1]>>4],e+=Jt[(n[r+1]&15)<<2|n[r+2]>>6],e+=Jt[n[r+2]&63];return t%3===2?e=e.substring(0,e.length-1)+"=":t%3===1&&(e=e.substring(0,e.length-2)+"=="),e},Qr=function(n){var e=n.length*.75,t=n.length,r,x=0,i,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var c=new Uint8Array(e);for(r=0;r<t;r+=4)i=f5[n.charCodeAt(r)],o=f5[n.charCodeAt(r+1)],a=f5[n.charCodeAt(r+2)],l=f5[n.charCodeAt(r+3)],c[x++]=i<<2|o>>4,c[x++]=(o&15)<<4|a>>2,c[x++]=(a&3)<<6|l&63;return c},B2=/^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,C2=function(n){var e=n.trim(),t=e.substring(0,100),r=t.match(B2);if(!r)return Qr(e);var x=r[0],i=e.substring(x.length);return Qr(i)},p0=function(n){return n.charCodeAt(0)},p2=function(n){return n.codePointAt(0)},z5=function(n,e){return We(n.toString(16),e,"0").toUpperCase()},bn=function(n){return z5(n,2)},rt=function(n){return String.fromCharCode(n)},F2=function(n){return rt(parseInt(n,16))},We=function(n,e,t){for(var r="",x=0,i=e-n.length;x<i;x++)r+=t;return r+n},de=function(n,e,t){for(var r=n.length,x=0;x<r;x++)e[t++]=n.charCodeAt(x);return r},g2=function(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},T5=function(n){return n.replace(/\t|\u0085|\u2028|\u2029/g,"    ").replace(/[\b\v]/g,"")},A2=["\\n","\\f","\\r","\\u000B"],Q1=function(n){return/^[\n\f\r\u000B]$/.test(n)},_1=function(n){return n.split(/[\n\f\r\u000B]/)},$1=function(n){return n.replace(/[\n\f\r\u000B]/g," ")},ex=function(n,e){var t=n.charCodeAt(e),r,x=e+1,i=1;return t>=55296&&t<=56319&&n.length>x&&(r=n.charCodeAt(x),r>=56320&&r<=57343&&(i=2)),[n.slice(e,e+i),i]},y2=function(n){for(var e=[],t=0,r=n.length;t<r;){var x=ex(n,t),i=x[0],o=x[1];e.push(i),t+=o}return e},D2=function(n){for(var e=A2.join("|"),t=["$"],r=0,x=n.length;r<x;r++){var i=n[r];if(Q1(i))throw new TypeError("`wordBreak` must not include "+e);t.push(i===""?".":g2(i))}var o=t.join("|");return new RegExp("("+e+")|((.*?)("+o+"))","gm")},m2=function(n,e,t,r){for(var x=D2(e),i=T5(n).match(x),o="",a=0,l=[],c=function(){o!==""&&l.push(o),o="",a=0},h=0,s=i.length;h<s;h++){var u=i[h];if(Q1(u))c();else{var f=r(u);a+f>t&&c(),o+=u,a+=f}}return c(),l},w2=/^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,tx=function(n){var e=n.match(w2);if(e){var t=e[1],r=e[2],x=r===void 0?"01":r,i=e[3],o=i===void 0?"01":i,a=e[4],l=a===void 0?"00":a,c=e[5],h=c===void 0?"00":c,s=e[6],u=s===void 0?"00":s,f=e[7],v=f===void 0?"Z":f,C=e[8],F=C===void 0?"00":C,p=e[9],S=p===void 0?"00":p,y=v==="Z"?"Z":""+v+F+":"+S,D=new Date(t+"-"+x+"-"+o+"T"+l+":"+h+":"+u+y);return D}},gr=function(n,e){for(var t,r=0,x;r<n.length;){var i=n.substring(r).match(e);if(!i)return{match:x,pos:r};x=i,r+=((t=i.index)!==null&&t!==void 0?t:0)+i[0].length}return{match:x,pos:r}},hn=function(n){return n[n.length-1]},ar=function(n){if(n instanceof Uint8Array)return n;for(var e=n.length,t=new Uint8Array(e),r=0;r<e;r++)t[r]=n.charCodeAt(r);return t},b2=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=n.length,r=[],x=0;x<t;x++){var i=n[x];r[x]=i instanceof Uint8Array?i:ar(i)}for(var o=0,x=0;x<t;x++)o+=n[x].length;for(var a=new Uint8Array(o),l=0,c=0;c<t;c++)for(var h=r[c],s=0,u=h.length;s<u;s++)a[l++]=h[s];return a},k2=function(n){for(var e=0,t=0,r=n.length;t<r;t++)e+=n[t].length;for(var x=new Uint8Array(e),i=0,t=0,r=n.length;t<r;t++){var o=n[t];x.set(o,i),i+=o.length}return x},nx=function(n){for(var e="",t=0,r=n.length;t<r;t++)e+=rt(n[t]);return e},S2=function(n,e){return n.id-e.id},q2=function(n,e){for(var t=[],r=0,x=n.length;r<x;r++){var i=n[r],o=n[r-1];(r===0||e(i)!==e(o))&&t.push(i)}return t},Ut=function(n){for(var e=n.length,t=0,r=Math.floor(e/2);t<r;t++){var x=t,i=e-t-1,o=n[t];n[x]=n[i],n[i]=o}return n},P2=function(n){for(var e=0,t=0,r=n.length;t<r;t++)e+=n[t];return e},z2=function(n,e){for(var t=new Array(e-n),r=0,x=t.length;r<x;r++)t[r]=n+r;return t},T2=function(n,e){for(var t=new Array(e.length),r=0,x=e.length;r<x;r++)t[r]=n[e[r]];return t},M2=function(n){return n instanceof Uint8Array||n instanceof ArrayBuffer||typeof n=="string"},o5=function(n){if(typeof n=="string")return C2(n);if(n instanceof ArrayBuffer)return new Uint8Array(n);if(n instanceof Uint8Array)return n;throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`")},$t=function(){return new Promise(function(n){setTimeout(function(){return n()},0)})},O2=function(n,e){e===void 0&&(e=!0);var t=[];e&&t.push(65279);for(var r=0,x=n.length;r<x;){var i=n.codePointAt(r);if(i<65536)t.push(i),r+=1;else if(i<1114112)t.push(rx(i),xx(i)),r+=2;else throw new Error("Invalid code point: 0x"+bn(i))}return new Uint16Array(t)},R2=function(n){return n>=0&&n<=65535},N2=function(n){return n>=65536&&n<=1114111},rx=function(n){return Math.floor((n-65536)/1024)+55296},xx=function(n){return(n-65536)%1024+56320},Et;(function(n){n.BigEndian="BigEndian",n.LittleEndian="LittleEndian"})(Et||(Et={}));var a5="�".codePointAt(0),ix=function(n,e){if(e===void 0&&(e=!0),n.length<=1)return String.fromCodePoint(a5);for(var t=e?L2(n):Et.BigEndian,r=e?2:0,x=[];n.length-r>=2;){var i=$r(n[r++],n[r++],t);if(I2(i))if(n.length-r<2)x.push(a5);else{var o=$r(n[r++],n[r++],t);_r(o)?x.push(i,o):x.push(a5)}else _r(i)?(r+=2,x.push(a5)):x.push(i)}return r<n.length&&x.push(a5),String.fromCodePoint.apply(String,x)},I2=function(n){return n>=55296&&n<=56319},_r=function(n){return n>=56320&&n<=57343},$r=function(n,e,t){if(t===Et.LittleEndian)return e<<8|n;if(t===Et.BigEndian)return n<<8|e;throw new Error("Invalid byteOrder: "+t)},L2=function(n){return ox(n)?Et.BigEndian:ax(n)?Et.LittleEndian:Et.BigEndian},ox=function(n){return n[0]===254&&n[1]===255},ax=function(n){return n[0]===255&&n[1]===254},lx=function(n){return ox(n)||ax(n)},j2=function(n){var e=String(n);if(Math.abs(n)<1){var t=parseInt(n.toString().split("e-")[1]);if(t){var r=n<0;r&&(n*=-1),n*=Math.pow(10,t-1),e="0."+new Array(t).join("0")+n.toString().substring(2),r&&(e="-"+e)}}else{var t=parseInt(n.toString().split("+")[1]);t>20&&(t-=20,n/=Math.pow(10,t),e=n.toString()+new Array(t+1).join("0"))}return e},rn=function(n){return Math.ceil(n.toString(2).length/8)},Wt=function(n){for(var e=new Uint8Array(rn(n)),t=1;t<=e.length;t++)e[t-1]=n>>(e.length-t)*8;return e},M5=function(n){throw new Error(n)};function cx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gn={},e1;function mt(){return e1||(e1=1,(function(n){var e=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function t(i,o){return Object.prototype.hasOwnProperty.call(i,o)}n.assign=function(i){for(var o=Array.prototype.slice.call(arguments,1);o.length;){var a=o.shift();if(a){if(typeof a!="object")throw new TypeError(a+"must be non-object");for(var l in a)t(a,l)&&(i[l]=a[l])}}return i},n.shrinkBuf=function(i,o){return i.length===o?i:i.subarray?i.subarray(0,o):(i.length=o,i)};var r={arraySet:function(i,o,a,l,c){if(o.subarray&&i.subarray){i.set(o.subarray(a,a+l),c);return}for(var h=0;h<l;h++)i[c+h]=o[a+h]},flattenChunks:function(i){var o,a,l,c,h,s;for(l=0,o=0,a=i.length;o<a;o++)l+=i[o].length;for(s=new Uint8Array(l),c=0,o=0,a=i.length;o<a;o++)h=i[o],s.set(h,c),c+=h.length;return s}},x={arraySet:function(i,o,a,l,c){for(var h=0;h<l;h++)i[c+h]=o[a+h]},flattenChunks:function(i){return[].concat.apply([],i)}};n.setTyped=function(i){i?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,r)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,x))},n.setTyped(e)})(Gn)),Gn}var Kt={},je={},kt={},t1;function V2(){if(t1)return kt;t1=1;var n=mt(),e=4,t=0,r=1,x=2;function i(m){for(var J=m.length;--J>=0;)m[J]=0}var o=0,a=1,l=2,c=3,h=258,s=29,u=256,f=u+1+s,v=30,C=19,F=2*f+1,p=15,S=16,y=7,D=256,b=16,A=17,g=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],T=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],R=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=512,M=new Array((f+2)*2);i(M);var K=new Array(v*2);i(K);var X=new Array(L);i(X);var H=new Array(h-c+1);i(H);var U=new Array(s);i(U);var a0=new Array(v);i(a0);function o0(m,J,$,i0,z){this.static_tree=m,this.extra_bits=J,this.extra_base=$,this.elems=i0,this.max_length=z,this.has_stree=m&&m.length}var A0,t0,d0;function S0(m,J){this.dyn_tree=m,this.max_code=0,this.stat_desc=J}function x0(m){return m<256?X[m]:X[256+(m>>>7)]}function K0(m,J){m.pending_buf[m.pending++]=J&255,m.pending_buf[m.pending++]=J>>>8&255}function E0(m,J,$){m.bi_valid>S-$?(m.bi_buf|=J<<m.bi_valid&65535,K0(m,m.bi_buf),m.bi_buf=J>>S-m.bi_valid,m.bi_valid+=$-S):(m.bi_buf|=J<<m.bi_valid&65535,m.bi_valid+=$)}function y0(m,J,$){E0(m,$[J*2],$[J*2+1])}function l0(m,J){var $=0;do $|=m&1,m>>>=1,$<<=1;while(--J>0);return $>>>1}function G0(m){m.bi_valid===16?(K0(m,m.bi_buf),m.bi_buf=0,m.bi_valid=0):m.bi_valid>=8&&(m.pending_buf[m.pending++]=m.bi_buf&255,m.bi_buf>>=8,m.bi_valid-=8)}function ce(m,J){var $=J.dyn_tree,i0=J.max_code,z=J.stat_desc.static_tree,W=J.stat_desc.has_stree,E=J.stat_desc.extra_bits,Q=J.stat_desc.extra_base,f0=J.stat_desc.max_length,d,j,V,B,q,I,c0=0;for(B=0;B<=p;B++)m.bl_count[B]=0;for($[m.heap[m.heap_max]*2+1]=0,d=m.heap_max+1;d<F;d++)j=m.heap[d],B=$[$[j*2+1]*2+1]+1,B>f0&&(B=f0,c0++),$[j*2+1]=B,!(j>i0)&&(m.bl_count[B]++,q=0,j>=Q&&(q=E[j-Q]),I=$[j*2],m.opt_len+=I*(B+q),W&&(m.static_len+=I*(z[j*2+1]+q)));if(c0!==0){do{for(B=f0-1;m.bl_count[B]===0;)B--;m.bl_count[B]--,m.bl_count[B+1]+=2,m.bl_count[f0]--,c0-=2}while(c0>0);for(B=f0;B!==0;B--)for(j=m.bl_count[B];j!==0;)V=m.heap[--d],!(V>i0)&&($[V*2+1]!==B&&(m.opt_len+=(B-$[V*2+1])*$[V*2],$[V*2+1]=B),j--)}}function ee(m,J,$){var i0=new Array(p+1),z=0,W,E;for(W=1;W<=p;W++)i0[W]=z=z+$[W-1]<<1;for(E=0;E<=J;E++){var Q=m[E*2+1];Q!==0&&(m[E*2]=l0(i0[Q]++,Q))}}function W0(){var m,J,$,i0,z,W=new Array(p+1);for($=0,i0=0;i0<s-1;i0++)for(U[i0]=$,m=0;m<1<<P[i0];m++)H[$++]=i0;for(H[$-1]=i0,z=0,i0=0;i0<16;i0++)for(a0[i0]=z,m=0;m<1<<T[i0];m++)X[z++]=i0;for(z>>=7;i0<v;i0++)for(a0[i0]=z<<7,m=0;m<1<<T[i0]-7;m++)X[256+z++]=i0;for(J=0;J<=p;J++)W[J]=0;for(m=0;m<=143;)M[m*2+1]=8,m++,W[8]++;for(;m<=255;)M[m*2+1]=9,m++,W[9]++;for(;m<=279;)M[m*2+1]=7,m++,W[7]++;for(;m<=287;)M[m*2+1]=8,m++,W[8]++;for(ee(M,f+1,W),m=0;m<v;m++)K[m*2+1]=5,K[m*2]=l0(m,5);A0=new o0(M,P,u+1,f,p),t0=new o0(K,T,0,v,p),d0=new o0(new Array(0),R,0,C,y)}function te(m){var J;for(J=0;J<f;J++)m.dyn_ltree[J*2]=0;for(J=0;J<v;J++)m.dyn_dtree[J*2]=0;for(J=0;J<C;J++)m.bl_tree[J*2]=0;m.dyn_ltree[D*2]=1,m.opt_len=m.static_len=0,m.last_lit=m.matches=0}function ye(m){m.bi_valid>8?K0(m,m.bi_buf):m.bi_valid>0&&(m.pending_buf[m.pending++]=m.bi_buf),m.bi_buf=0,m.bi_valid=0}function Q0(m,J,$,i0){ye(m),K0(m,$),K0(m,~$),n.arraySet(m.pending_buf,m.window,J,$,m.pending),m.pending+=$}function ne(m,J,$,i0){var z=J*2,W=$*2;return m[z]<m[W]||m[z]===m[W]&&i0[J]<=i0[$]}function X0(m,J,$){for(var i0=m.heap[$],z=$<<1;z<=m.heap_len&&(z<m.heap_len&&ne(J,m.heap[z+1],m.heap[z],m.depth)&&z++,!ne(J,i0,m.heap[z],m.depth));)m.heap[$]=m.heap[z],$=z,z<<=1;m.heap[$]=i0}function m0(m,J,$){var i0,z,W=0,E,Q;if(m.last_lit!==0)do i0=m.pending_buf[m.d_buf+W*2]<<8|m.pending_buf[m.d_buf+W*2+1],z=m.pending_buf[m.l_buf+W],W++,i0===0?y0(m,z,J):(E=H[z],y0(m,E+u+1,J),Q=P[E],Q!==0&&(z-=U[E],E0(m,z,Q)),i0--,E=x0(i0),y0(m,E,$),Q=T[E],Q!==0&&(i0-=a0[E],E0(m,i0,Q)));while(W<m.last_lit);y0(m,D,J)}function Z0(m,J){var $=J.dyn_tree,i0=J.stat_desc.static_tree,z=J.stat_desc.has_stree,W=J.stat_desc.elems,E,Q,f0=-1,d;for(m.heap_len=0,m.heap_max=F,E=0;E<W;E++)$[E*2]!==0?(m.heap[++m.heap_len]=f0=E,m.depth[E]=0):$[E*2+1]=0;for(;m.heap_len<2;)d=m.heap[++m.heap_len]=f0<2?++f0:0,$[d*2]=1,m.depth[d]=0,m.opt_len--,z&&(m.static_len-=i0[d*2+1]);for(J.max_code=f0,E=m.heap_len>>1;E>=1;E--)X0(m,$,E);d=W;do E=m.heap[1],m.heap[1]=m.heap[m.heap_len--],X0(m,$,1),Q=m.heap[1],m.heap[--m.heap_max]=E,m.heap[--m.heap_max]=Q,$[d*2]=$[E*2]+$[Q*2],m.depth[d]=(m.depth[E]>=m.depth[Q]?m.depth[E]:m.depth[Q])+1,$[E*2+1]=$[Q*2+1]=d,m.heap[1]=d++,X0(m,$,1);while(m.heap_len>=2);m.heap[--m.heap_max]=m.heap[1],ce(m,J),ee($,f0,m.bl_count)}function It(m,J,$){var i0,z=-1,W,E=J[1],Q=0,f0=7,d=4;for(E===0&&(f0=138,d=3),J[($+1)*2+1]=65535,i0=0;i0<=$;i0++)W=E,E=J[(i0+1)*2+1],!(++Q<f0&&W===E)&&(Q<d?m.bl_tree[W*2]+=Q:W!==0?(W!==z&&m.bl_tree[W*2]++,m.bl_tree[b*2]++):Q<=10?m.bl_tree[A*2]++:m.bl_tree[g*2]++,Q=0,z=W,E===0?(f0=138,d=3):W===E?(f0=6,d=3):(f0=7,d=4))}function re(m,J,$){var i0,z=-1,W,E=J[1],Q=0,f0=7,d=4;for(E===0&&(f0=138,d=3),i0=0;i0<=$;i0++)if(W=E,E=J[(i0+1)*2+1],!(++Q<f0&&W===E)){if(Q<d)do y0(m,W,m.bl_tree);while(--Q!==0);else W!==0?(W!==z&&(y0(m,W,m.bl_tree),Q--),y0(m,b,m.bl_tree),E0(m,Q-3,2)):Q<=10?(y0(m,A,m.bl_tree),E0(m,Q-3,3)):(y0(m,g,m.bl_tree),E0(m,Q-11,7));Q=0,z=W,E===0?(f0=138,d=3):W===E?(f0=6,d=3):(f0=7,d=4)}}function ke(m){var J;for(It(m,m.dyn_ltree,m.l_desc.max_code),It(m,m.dyn_dtree,m.d_desc.max_code),Z0(m,m.bl_desc),J=C-1;J>=3&&m.bl_tree[N[J]*2+1]===0;J--);return m.opt_len+=3*(J+1)+5+5+4,J}function Lt(m,J,$,i0){var z;for(E0(m,J-257,5),E0(m,$-1,5),E0(m,i0-4,4),z=0;z<i0;z++)E0(m,m.bl_tree[N[z]*2+1],3);re(m,m.dyn_ltree,J-1),re(m,m.dyn_dtree,$-1)}function ct(m){var J=4093624447,$;for($=0;$<=31;$++,J>>>=1)if(J&1&&m.dyn_ltree[$*2]!==0)return t;if(m.dyn_ltree[18]!==0||m.dyn_ltree[20]!==0||m.dyn_ltree[26]!==0)return r;for($=32;$<u;$++)if(m.dyn_ltree[$*2]!==0)return r;return t}var Le=!1;function jt(m){Le||(W0(),Le=!0),m.l_desc=new S0(m.dyn_ltree,A0),m.d_desc=new S0(m.dyn_dtree,t0),m.bl_desc=new S0(m.bl_tree,d0),m.bi_buf=0,m.bi_valid=0,te(m)}function st(m,J,$,i0){E0(m,(o<<1)+(i0?1:0),3),Q0(m,J,$)}function fe(m){E0(m,a<<1,3),y0(m,D,M),G0(m)}function Ge(m,J,$,i0){var z,W,E=0;m.level>0?(m.strm.data_type===x&&(m.strm.data_type=ct(m)),Z0(m,m.l_desc),Z0(m,m.d_desc),E=ke(m),z=m.opt_len+3+7>>>3,W=m.static_len+3+7>>>3,W<=z&&(z=W)):z=W=$+5,$+4<=z&&J!==-1?st(m,J,$,i0):m.strategy===e||W===z?(E0(m,(a<<1)+(i0?1:0),3),m0(m,M,K)):(E0(m,(l<<1)+(i0?1:0),3),Lt(m,m.l_desc.max_code+1,m.d_desc.max_code+1,E+1),m0(m,m.dyn_ltree,m.dyn_dtree)),te(m),i0&&ye(m)}function Vt(m,J,$){return m.pending_buf[m.d_buf+m.last_lit*2]=J>>>8&255,m.pending_buf[m.d_buf+m.last_lit*2+1]=J&255,m.pending_buf[m.l_buf+m.last_lit]=$&255,m.last_lit++,J===0?m.dyn_ltree[$*2]++:(m.matches++,J--,m.dyn_ltree[(H[$]+u+1)*2]++,m.dyn_dtree[x0(J)*2]++),m.last_lit===m.lit_bufsize-1}return kt._tr_init=jt,kt._tr_stored_block=st,kt._tr_flush_block=Ge,kt._tr_tally=Vt,kt._tr_align=fe,kt}var Xn,n1;function sx(){if(n1)return Xn;n1=1;function n(e,t,r,x){for(var i=e&65535|0,o=e>>>16&65535|0,a=0;r!==0;){a=r>2e3?2e3:r,r-=a;do i=i+t[x++]|0,o=o+i|0;while(--a);i%=65521,o%=65521}return i|o<<16|0}return Xn=n,Xn}var Hn,r1;function hx(){if(r1)return Hn;r1=1;function n(){for(var r,x=[],i=0;i<256;i++){r=i;for(var o=0;o<8;o++)r=r&1?3988292384^r>>>1:r>>>1;x[i]=r}return x}var e=n();function t(r,x,i,o){var a=e,l=o+i;r^=-1;for(var c=o;c<l;c++)r=r>>>8^a[(r^x[c])&255];return r^-1}return Hn=t,Hn}var Zn,x1;function Ar(){return x1||(x1=1,Zn={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}),Zn}var i1;function U2(){if(i1)return je;i1=1;var n=mt(),e=V2(),t=sx(),r=hx(),x=Ar(),i=0,o=1,a=3,l=4,c=5,h=0,s=1,u=-2,f=-3,v=-5,C=-1,F=1,p=2,S=3,y=4,D=0,b=2,A=8,g=9,P=15,T=8,R=29,N=256,L=N+1+R,M=30,K=19,X=2*L+1,H=15,U=3,a0=258,o0=a0+U+1,A0=32,t0=42,d0=69,S0=73,x0=91,K0=103,E0=113,y0=666,l0=1,G0=2,ce=3,ee=4,W0=3;function te(d,j){return d.msg=x[j],j}function ye(d){return(d<<1)-(d>4?9:0)}function Q0(d){for(var j=d.length;--j>=0;)d[j]=0}function ne(d){var j=d.state,V=j.pending;V>d.avail_out&&(V=d.avail_out),V!==0&&(n.arraySet(d.output,j.pending_buf,j.pending_out,V,d.next_out),d.next_out+=V,j.pending_out+=V,d.total_out+=V,d.avail_out-=V,j.pending-=V,j.pending===0&&(j.pending_out=0))}function X0(d,j){e._tr_flush_block(d,d.block_start>=0?d.block_start:-1,d.strstart-d.block_start,j),d.block_start=d.strstart,ne(d.strm)}function m0(d,j){d.pending_buf[d.pending++]=j}function Z0(d,j){d.pending_buf[d.pending++]=j>>>8&255,d.pending_buf[d.pending++]=j&255}function It(d,j,V,B){var q=d.avail_in;return q>B&&(q=B),q===0?0:(d.avail_in-=q,n.arraySet(j,d.input,d.next_in,q,V),d.state.wrap===1?d.adler=t(d.adler,j,q,V):d.state.wrap===2&&(d.adler=r(d.adler,j,q,V)),d.next_in+=q,d.total_in+=q,q)}function re(d,j){var V=d.max_chain_length,B=d.strstart,q,I,c0=d.prev_length,n0=d.nice_match,r0=d.strstart>d.w_size-o0?d.strstart-(d.w_size-o0):0,O0=d.window,Qe=d.w_mask,J0=d.prev,N0=d.strstart+a0,xe=O0[B+c0-1],ve=O0[B+c0];d.prev_length>=d.good_match&&(V>>=2),n0>d.lookahead&&(n0=d.lookahead);do if(q=j,!(O0[q+c0]!==ve||O0[q+c0-1]!==xe||O0[q]!==O0[B]||O0[++q]!==O0[B+1])){B+=2,q++;do;while(O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&O0[++B]===O0[++q]&&B<N0);if(I=a0-(N0-B),B=N0-a0,I>c0){if(d.match_start=j,c0=I,I>=n0)break;xe=O0[B+c0-1],ve=O0[B+c0]}}while((j=J0[j&Qe])>r0&&--V!==0);return c0<=d.lookahead?c0:d.lookahead}function ke(d){var j=d.w_size,V,B,q,I,c0;do{if(I=d.window_size-d.lookahead-d.strstart,d.strstart>=j+(j-o0)){n.arraySet(d.window,d.window,j,j,0),d.match_start-=j,d.strstart-=j,d.block_start-=j,B=d.hash_size,V=B;do q=d.head[--V],d.head[V]=q>=j?q-j:0;while(--B);B=j,V=B;do q=d.prev[--V],d.prev[V]=q>=j?q-j:0;while(--B);I+=j}if(d.strm.avail_in===0)break;if(B=It(d.strm,d.window,d.strstart+d.lookahead,I),d.lookahead+=B,d.lookahead+d.insert>=U)for(c0=d.strstart-d.insert,d.ins_h=d.window[c0],d.ins_h=(d.ins_h<<d.hash_shift^d.window[c0+1])&d.hash_mask;d.insert&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[c0+U-1])&d.hash_mask,d.prev[c0&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=c0,c0++,d.insert--,!(d.lookahead+d.insert<U)););}while(d.lookahead<o0&&d.strm.avail_in!==0)}function Lt(d,j){var V=65535;for(V>d.pending_buf_size-5&&(V=d.pending_buf_size-5);;){if(d.lookahead<=1){if(ke(d),d.lookahead===0&&j===i)return l0;if(d.lookahead===0)break}d.strstart+=d.lookahead,d.lookahead=0;var B=d.block_start+V;if((d.strstart===0||d.strstart>=B)&&(d.lookahead=d.strstart-B,d.strstart=B,X0(d,!1),d.strm.avail_out===0)||d.strstart-d.block_start>=d.w_size-o0&&(X0(d,!1),d.strm.avail_out===0))return l0}return d.insert=0,j===l?(X0(d,!0),d.strm.avail_out===0?ce:ee):(d.strstart>d.block_start&&(X0(d,!1),d.strm.avail_out===0),l0)}function ct(d,j){for(var V,B;;){if(d.lookahead<o0){if(ke(d),d.lookahead<o0&&j===i)return l0;if(d.lookahead===0)break}if(V=0,d.lookahead>=U&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+U-1])&d.hash_mask,V=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart),V!==0&&d.strstart-V<=d.w_size-o0&&(d.match_length=re(d,V)),d.match_length>=U)if(B=e._tr_tally(d,d.strstart-d.match_start,d.match_length-U),d.lookahead-=d.match_length,d.match_length<=d.max_lazy_match&&d.lookahead>=U){d.match_length--;do d.strstart++,d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+U-1])&d.hash_mask,V=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart;while(--d.match_length!==0);d.strstart++}else d.strstart+=d.match_length,d.match_length=0,d.ins_h=d.window[d.strstart],d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+1])&d.hash_mask;else B=e._tr_tally(d,0,d.window[d.strstart]),d.lookahead--,d.strstart++;if(B&&(X0(d,!1),d.strm.avail_out===0))return l0}return d.insert=d.strstart<U-1?d.strstart:U-1,j===l?(X0(d,!0),d.strm.avail_out===0?ce:ee):d.last_lit&&(X0(d,!1),d.strm.avail_out===0)?l0:G0}function Le(d,j){for(var V,B,q;;){if(d.lookahead<o0){if(ke(d),d.lookahead<o0&&j===i)return l0;if(d.lookahead===0)break}if(V=0,d.lookahead>=U&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+U-1])&d.hash_mask,V=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart),d.prev_length=d.match_length,d.prev_match=d.match_start,d.match_length=U-1,V!==0&&d.prev_length<d.max_lazy_match&&d.strstart-V<=d.w_size-o0&&(d.match_length=re(d,V),d.match_length<=5&&(d.strategy===F||d.match_length===U&&d.strstart-d.match_start>4096)&&(d.match_length=U-1)),d.prev_length>=U&&d.match_length<=d.prev_length){q=d.strstart+d.lookahead-U,B=e._tr_tally(d,d.strstart-1-d.prev_match,d.prev_length-U),d.lookahead-=d.prev_length-1,d.prev_length-=2;do++d.strstart<=q&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+U-1])&d.hash_mask,V=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart);while(--d.prev_length!==0);if(d.match_available=0,d.match_length=U-1,d.strstart++,B&&(X0(d,!1),d.strm.avail_out===0))return l0}else if(d.match_available){if(B=e._tr_tally(d,0,d.window[d.strstart-1]),B&&X0(d,!1),d.strstart++,d.lookahead--,d.strm.avail_out===0)return l0}else d.match_available=1,d.strstart++,d.lookahead--}return d.match_available&&(B=e._tr_tally(d,0,d.window[d.strstart-1]),d.match_available=0),d.insert=d.strstart<U-1?d.strstart:U-1,j===l?(X0(d,!0),d.strm.avail_out===0?ce:ee):d.last_lit&&(X0(d,!1),d.strm.avail_out===0)?l0:G0}function jt(d,j){for(var V,B,q,I,c0=d.window;;){if(d.lookahead<=a0){if(ke(d),d.lookahead<=a0&&j===i)return l0;if(d.lookahead===0)break}if(d.match_length=0,d.lookahead>=U&&d.strstart>0&&(q=d.strstart-1,B=c0[q],B===c0[++q]&&B===c0[++q]&&B===c0[++q])){I=d.strstart+a0;do;while(B===c0[++q]&&B===c0[++q]&&B===c0[++q]&&B===c0[++q]&&B===c0[++q]&&B===c0[++q]&&B===c0[++q]&&B===c0[++q]&&q<I);d.match_length=a0-(I-q),d.match_length>d.lookahead&&(d.match_length=d.lookahead)}if(d.match_length>=U?(V=e._tr_tally(d,1,d.match_length-U),d.lookahead-=d.match_length,d.strstart+=d.match_length,d.match_length=0):(V=e._tr_tally(d,0,d.window[d.strstart]),d.lookahead--,d.strstart++),V&&(X0(d,!1),d.strm.avail_out===0))return l0}return d.insert=0,j===l?(X0(d,!0),d.strm.avail_out===0?ce:ee):d.last_lit&&(X0(d,!1),d.strm.avail_out===0)?l0:G0}function st(d,j){for(var V;;){if(d.lookahead===0&&(ke(d),d.lookahead===0)){if(j===i)return l0;break}if(d.match_length=0,V=e._tr_tally(d,0,d.window[d.strstart]),d.lookahead--,d.strstart++,V&&(X0(d,!1),d.strm.avail_out===0))return l0}return d.insert=0,j===l?(X0(d,!0),d.strm.avail_out===0?ce:ee):d.last_lit&&(X0(d,!1),d.strm.avail_out===0)?l0:G0}function fe(d,j,V,B,q){this.good_length=d,this.max_lazy=j,this.nice_length=V,this.max_chain=B,this.func=q}var Ge;Ge=[new fe(0,0,0,0,Lt),new fe(4,4,8,4,ct),new fe(4,5,16,8,ct),new fe(4,6,32,32,ct),new fe(4,4,16,16,Le),new fe(8,16,32,32,Le),new fe(8,16,128,128,Le),new fe(8,32,128,256,Le),new fe(32,128,258,1024,Le),new fe(32,258,258,4096,Le)];function Vt(d){d.window_size=2*d.w_size,Q0(d.head),d.max_lazy_match=Ge[d.level].max_lazy,d.good_match=Ge[d.level].good_length,d.nice_match=Ge[d.level].nice_length,d.max_chain_length=Ge[d.level].max_chain,d.strstart=0,d.block_start=0,d.lookahead=0,d.insert=0,d.match_length=d.prev_length=U-1,d.match_available=0,d.ins_h=0}function m(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(X*2),this.dyn_dtree=new n.Buf16((2*M+1)*2),this.bl_tree=new n.Buf16((2*K+1)*2),Q0(this.dyn_ltree),Q0(this.dyn_dtree),Q0(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(H+1),this.heap=new n.Buf16(2*L+1),Q0(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*L+1),Q0(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function J(d){var j;return!d||!d.state?te(d,u):(d.total_in=d.total_out=0,d.data_type=b,j=d.state,j.pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?t0:E0,d.adler=j.wrap===2?0:1,j.last_flush=i,e._tr_init(j),h)}function $(d){var j=J(d);return j===h&&Vt(d.state),j}function i0(d,j){return!d||!d.state||d.state.wrap!==2?u:(d.state.gzhead=j,h)}function z(d,j,V,B,q,I){if(!d)return u;var c0=1;if(j===C&&(j=6),B<0?(c0=0,B=-B):B>15&&(c0=2,B-=16),q<1||q>g||V!==A||B<8||B>15||j<0||j>9||I<0||I>y)return te(d,u);B===8&&(B=9);var n0=new m;return d.state=n0,n0.strm=d,n0.wrap=c0,n0.gzhead=null,n0.w_bits=B,n0.w_size=1<<n0.w_bits,n0.w_mask=n0.w_size-1,n0.hash_bits=q+7,n0.hash_size=1<<n0.hash_bits,n0.hash_mask=n0.hash_size-1,n0.hash_shift=~~((n0.hash_bits+U-1)/U),n0.window=new n.Buf8(n0.w_size*2),n0.head=new n.Buf16(n0.hash_size),n0.prev=new n.Buf16(n0.w_size),n0.lit_bufsize=1<<q+6,n0.pending_buf_size=n0.lit_bufsize*4,n0.pending_buf=new n.Buf8(n0.pending_buf_size),n0.d_buf=1*n0.lit_bufsize,n0.l_buf=3*n0.lit_bufsize,n0.level=j,n0.strategy=I,n0.method=V,$(d)}function W(d,j){return z(d,j,A,P,T,D)}function E(d,j){var V,B,q,I;if(!d||!d.state||j>c||j<0)return d?te(d,u):u;if(B=d.state,!d.output||!d.input&&d.avail_in!==0||B.status===y0&&j!==l)return te(d,d.avail_out===0?v:u);if(B.strm=d,V=B.last_flush,B.last_flush=j,B.status===t0)if(B.wrap===2)d.adler=0,m0(B,31),m0(B,139),m0(B,8),B.gzhead?(m0(B,(B.gzhead.text?1:0)+(B.gzhead.hcrc?2:0)+(B.gzhead.extra?4:0)+(B.gzhead.name?8:0)+(B.gzhead.comment?16:0)),m0(B,B.gzhead.time&255),m0(B,B.gzhead.time>>8&255),m0(B,B.gzhead.time>>16&255),m0(B,B.gzhead.time>>24&255),m0(B,B.level===9?2:B.strategy>=p||B.level<2?4:0),m0(B,B.gzhead.os&255),B.gzhead.extra&&B.gzhead.extra.length&&(m0(B,B.gzhead.extra.length&255),m0(B,B.gzhead.extra.length>>8&255)),B.gzhead.hcrc&&(d.adler=r(d.adler,B.pending_buf,B.pending,0)),B.gzindex=0,B.status=d0):(m0(B,0),m0(B,0),m0(B,0),m0(B,0),m0(B,0),m0(B,B.level===9?2:B.strategy>=p||B.level<2?4:0),m0(B,W0),B.status=E0);else{var c0=A+(B.w_bits-8<<4)<<8,n0=-1;B.strategy>=p||B.level<2?n0=0:B.level<6?n0=1:B.level===6?n0=2:n0=3,c0|=n0<<6,B.strstart!==0&&(c0|=A0),c0+=31-c0%31,B.status=E0,Z0(B,c0),B.strstart!==0&&(Z0(B,d.adler>>>16),Z0(B,d.adler&65535)),d.adler=1}if(B.status===d0)if(B.gzhead.extra){for(q=B.pending;B.gzindex<(B.gzhead.extra.length&65535)&&!(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>q&&(d.adler=r(d.adler,B.pending_buf,B.pending-q,q)),ne(d),q=B.pending,B.pending===B.pending_buf_size));)m0(B,B.gzhead.extra[B.gzindex]&255),B.gzindex++;B.gzhead.hcrc&&B.pending>q&&(d.adler=r(d.adler,B.pending_buf,B.pending-q,q)),B.gzindex===B.gzhead.extra.length&&(B.gzindex=0,B.status=S0)}else B.status=S0;if(B.status===S0)if(B.gzhead.name){q=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>q&&(d.adler=r(d.adler,B.pending_buf,B.pending-q,q)),ne(d),q=B.pending,B.pending===B.pending_buf_size)){I=1;break}B.gzindex<B.gzhead.name.length?I=B.gzhead.name.charCodeAt(B.gzindex++)&255:I=0,m0(B,I)}while(I!==0);B.gzhead.hcrc&&B.pending>q&&(d.adler=r(d.adler,B.pending_buf,B.pending-q,q)),I===0&&(B.gzindex=0,B.status=x0)}else B.status=x0;if(B.status===x0)if(B.gzhead.comment){q=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>q&&(d.adler=r(d.adler,B.pending_buf,B.pending-q,q)),ne(d),q=B.pending,B.pending===B.pending_buf_size)){I=1;break}B.gzindex<B.gzhead.comment.length?I=B.gzhead.comment.charCodeAt(B.gzindex++)&255:I=0,m0(B,I)}while(I!==0);B.gzhead.hcrc&&B.pending>q&&(d.adler=r(d.adler,B.pending_buf,B.pending-q,q)),I===0&&(B.status=K0)}else B.status=K0;if(B.status===K0&&(B.gzhead.hcrc?(B.pending+2>B.pending_buf_size&&ne(d),B.pending+2<=B.pending_buf_size&&(m0(B,d.adler&255),m0(B,d.adler>>8&255),d.adler=0,B.status=E0)):B.status=E0),B.pending!==0){if(ne(d),d.avail_out===0)return B.last_flush=-1,h}else if(d.avail_in===0&&ye(j)<=ye(V)&&j!==l)return te(d,v);if(B.status===y0&&d.avail_in!==0)return te(d,v);if(d.avail_in!==0||B.lookahead!==0||j!==i&&B.status!==y0){var r0=B.strategy===p?st(B,j):B.strategy===S?jt(B,j):Ge[B.level].func(B,j);if((r0===ce||r0===ee)&&(B.status=y0),r0===l0||r0===ce)return d.avail_out===0&&(B.last_flush=-1),h;if(r0===G0&&(j===o?e._tr_align(B):j!==c&&(e._tr_stored_block(B,0,0,!1),j===a&&(Q0(B.head),B.lookahead===0&&(B.strstart=0,B.block_start=0,B.insert=0))),ne(d),d.avail_out===0))return B.last_flush=-1,h}return j!==l?h:B.wrap<=0?s:(B.wrap===2?(m0(B,d.adler&255),m0(B,d.adler>>8&255),m0(B,d.adler>>16&255),m0(B,d.adler>>24&255),m0(B,d.total_in&255),m0(B,d.total_in>>8&255),m0(B,d.total_in>>16&255),m0(B,d.total_in>>24&255)):(Z0(B,d.adler>>>16),Z0(B,d.adler&65535)),ne(d),B.wrap>0&&(B.wrap=-B.wrap),B.pending!==0?h:s)}function Q(d){var j;return!d||!d.state?u:(j=d.state.status,j!==t0&&j!==d0&&j!==S0&&j!==x0&&j!==K0&&j!==E0&&j!==y0?te(d,u):(d.state=null,j===E0?te(d,f):h))}function f0(d,j){var V=j.length,B,q,I,c0,n0,r0,O0,Qe;if(!d||!d.state||(B=d.state,c0=B.wrap,c0===2||c0===1&&B.status!==t0||B.lookahead))return u;for(c0===1&&(d.adler=t(d.adler,j,V,0)),B.wrap=0,V>=B.w_size&&(c0===0&&(Q0(B.head),B.strstart=0,B.block_start=0,B.insert=0),Qe=new n.Buf8(B.w_size),n.arraySet(Qe,j,V-B.w_size,B.w_size,0),j=Qe,V=B.w_size),n0=d.avail_in,r0=d.next_in,O0=d.input,d.avail_in=V,d.next_in=0,d.input=j,ke(B);B.lookahead>=U;){q=B.strstart,I=B.lookahead-(U-1);do B.ins_h=(B.ins_h<<B.hash_shift^B.window[q+U-1])&B.hash_mask,B.prev[q&B.w_mask]=B.head[B.ins_h],B.head[B.ins_h]=q,q++;while(--I);B.strstart=q,B.lookahead=U-1,ke(B)}return B.strstart+=B.lookahead,B.block_start=B.strstart,B.insert=B.lookahead,B.lookahead=0,B.match_length=B.prev_length=U-1,B.match_available=0,d.next_in=r0,d.input=O0,d.avail_in=n0,B.wrap=c0,h}return je.deflateInit=W,je.deflateInit2=z,je.deflateReset=$,je.deflateResetKeep=J,je.deflateSetHeader=i0,je.deflate=E,je.deflateEnd=Q,je.deflateSetDictionary=f0,je.deflateInfo="pako deflate (from Nodeca project)",je}var St={},o1;function dx(){if(o1)return St;o1=1;var n=mt(),e=!0,t=!0;try{String.fromCharCode.apply(null,[0])}catch{e=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{t=!1}for(var r=new n.Buf8(256),x=0;x<256;x++)r[x]=x>=252?6:x>=248?5:x>=240?4:x>=224?3:x>=192?2:1;r[254]=r[254]=1,St.string2buf=function(o){var a,l,c,h,s,u=o.length,f=0;for(h=0;h<u;h++)l=o.charCodeAt(h),(l&64512)===55296&&h+1<u&&(c=o.charCodeAt(h+1),(c&64512)===56320&&(l=65536+(l-55296<<10)+(c-56320),h++)),f+=l<128?1:l<2048?2:l<65536?3:4;for(a=new n.Buf8(f),s=0,h=0;s<f;h++)l=o.charCodeAt(h),(l&64512)===55296&&h+1<u&&(c=o.charCodeAt(h+1),(c&64512)===56320&&(l=65536+(l-55296<<10)+(c-56320),h++)),l<128?a[s++]=l:l<2048?(a[s++]=192|l>>>6,a[s++]=128|l&63):l<65536?(a[s++]=224|l>>>12,a[s++]=128|l>>>6&63,a[s++]=128|l&63):(a[s++]=240|l>>>18,a[s++]=128|l>>>12&63,a[s++]=128|l>>>6&63,a[s++]=128|l&63);return a};function i(o,a){if(a<65534&&(o.subarray&&t||!o.subarray&&e))return String.fromCharCode.apply(null,n.shrinkBuf(o,a));for(var l="",c=0;c<a;c++)l+=String.fromCharCode(o[c]);return l}return St.buf2binstring=function(o){return i(o,o.length)},St.binstring2buf=function(o){for(var a=new n.Buf8(o.length),l=0,c=a.length;l<c;l++)a[l]=o.charCodeAt(l);return a},St.buf2string=function(o,a){var l,c,h,s,u=a||o.length,f=new Array(u*2);for(c=0,l=0;l<u;){if(h=o[l++],h<128){f[c++]=h;continue}if(s=r[h],s>4){f[c++]=65533,l+=s-1;continue}for(h&=s===2?31:s===3?15:7;s>1&&l<u;)h=h<<6|o[l++]&63,s--;if(s>1){f[c++]=65533;continue}h<65536?f[c++]=h:(h-=65536,f[c++]=55296|h>>10&1023,f[c++]=56320|h&1023)}return i(f,c)},St.utf8border=function(o,a){var l;for(a=a||o.length,a>o.length&&(a=o.length),l=a-1;l>=0&&(o[l]&192)===128;)l--;return l<0||l===0?a:l+r[o[l]]>a?l:a},St}var Yn,a1;function ux(){if(a1)return Yn;a1=1;function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}return Yn=n,Yn}var l1;function W2(){if(l1)return Kt;l1=1;var n=U2(),e=mt(),t=dx(),r=Ar(),x=ux(),i=Object.prototype.toString,o=0,a=4,l=0,c=1,h=2,s=-1,u=0,f=8;function v(S){if(!(this instanceof v))return new v(S);this.options=e.assign({level:s,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},S||{});var y=this.options;y.raw&&y.windowBits>0?y.windowBits=-y.windowBits:y.gzip&&y.windowBits>0&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new x,this.strm.avail_out=0;var D=n.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(D!==l)throw new Error(r[D]);if(y.header&&n.deflateSetHeader(this.strm,y.header),y.dictionary){var b;if(typeof y.dictionary=="string"?b=t.string2buf(y.dictionary):i.call(y.dictionary)==="[object ArrayBuffer]"?b=new Uint8Array(y.dictionary):b=y.dictionary,D=n.deflateSetDictionary(this.strm,b),D!==l)throw new Error(r[D]);this._dict_set=!0}}v.prototype.push=function(S,y){var D=this.strm,b=this.options.chunkSize,A,g;if(this.ended)return!1;g=y===~~y?y:y===!0?a:o,typeof S=="string"?D.input=t.string2buf(S):i.call(S)==="[object ArrayBuffer]"?D.input=new Uint8Array(S):D.input=S,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new e.Buf8(b),D.next_out=0,D.avail_out=b),A=n.deflate(D,g),A!==c&&A!==l)return this.onEnd(A),this.ended=!0,!1;(D.avail_out===0||D.avail_in===0&&(g===a||g===h))&&(this.options.to==="string"?this.onData(t.buf2binstring(e.shrinkBuf(D.output,D.next_out))):this.onData(e.shrinkBuf(D.output,D.next_out)))}while((D.avail_in>0||D.avail_out===0)&&A!==c);return g===a?(A=n.deflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===l):(g===h&&(this.onEnd(l),D.avail_out=0),!0)},v.prototype.onData=function(S){this.chunks.push(S)},v.prototype.onEnd=function(S){S===l&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=e.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg};function C(S,y){var D=new v(y);if(D.push(S,!0),D.err)throw D.msg||r[D.err];return D.result}function F(S,y){return y=y||{},y.raw=!0,C(S,y)}function p(S,y){return y=y||{},y.gzip=!0,C(S,y)}return Kt.Deflate=v,Kt.deflate=C,Kt.deflateRaw=F,Kt.gzip=p,Kt}var Gt={},qe={},Jn,c1;function K2(){if(c1)return Jn;c1=1;var n=30,e=12;return Jn=function(r,x){var i,o,a,l,c,h,s,u,f,v,C,F,p,S,y,D,b,A,g,P,T,R,N,L,M;i=r.state,o=r.next_in,L=r.input,a=o+(r.avail_in-5),l=r.next_out,M=r.output,c=l-(x-r.avail_out),h=l+(r.avail_out-257),s=i.dmax,u=i.wsize,f=i.whave,v=i.wnext,C=i.window,F=i.hold,p=i.bits,S=i.lencode,y=i.distcode,D=(1<<i.lenbits)-1,b=(1<<i.distbits)-1;e:do{p<15&&(F+=L[o++]<<p,p+=8,F+=L[o++]<<p,p+=8),A=S[F&D];t:for(;;){if(g=A>>>24,F>>>=g,p-=g,g=A>>>16&255,g===0)M[l++]=A&65535;else if(g&16){P=A&65535,g&=15,g&&(p<g&&(F+=L[o++]<<p,p+=8),P+=F&(1<<g)-1,F>>>=g,p-=g),p<15&&(F+=L[o++]<<p,p+=8,F+=L[o++]<<p,p+=8),A=y[F&b];n:for(;;){if(g=A>>>24,F>>>=g,p-=g,g=A>>>16&255,g&16){if(T=A&65535,g&=15,p<g&&(F+=L[o++]<<p,p+=8,p<g&&(F+=L[o++]<<p,p+=8)),T+=F&(1<<g)-1,T>s){r.msg="invalid distance too far back",i.mode=n;break e}if(F>>>=g,p-=g,g=l-c,T>g){if(g=T-g,g>f&&i.sane){r.msg="invalid distance too far back",i.mode=n;break e}if(R=0,N=C,v===0){if(R+=u-g,g<P){P-=g;do M[l++]=C[R++];while(--g);R=l-T,N=M}}else if(v<g){if(R+=u+v-g,g-=v,g<P){P-=g;do M[l++]=C[R++];while(--g);if(R=0,v<P){g=v,P-=g;do M[l++]=C[R++];while(--g);R=l-T,N=M}}}else if(R+=v-g,g<P){P-=g;do M[l++]=C[R++];while(--g);R=l-T,N=M}for(;P>2;)M[l++]=N[R++],M[l++]=N[R++],M[l++]=N[R++],P-=3;P&&(M[l++]=N[R++],P>1&&(M[l++]=N[R++]))}else{R=l-T;do M[l++]=M[R++],M[l++]=M[R++],M[l++]=M[R++],P-=3;while(P>2);P&&(M[l++]=M[R++],P>1&&(M[l++]=M[R++]))}}else if((g&64)===0){A=y[(A&65535)+(F&(1<<g)-1)];continue n}else{r.msg="invalid distance code",i.mode=n;break e}break}}else if((g&64)===0){A=S[(A&65535)+(F&(1<<g)-1)];continue t}else if(g&32){i.mode=e;break e}else{r.msg="invalid literal/length code",i.mode=n;break e}break}}while(o<a&&l<h);P=p>>3,o-=P,p-=P<<3,F&=(1<<p)-1,r.next_in=o,r.next_out=l,r.avail_in=o<a?5+(a-o):5-(o-a),r.avail_out=l<h?257+(h-l):257-(l-h),i.hold=F,i.bits=p},Jn}var Qn,s1;function G2(){if(s1)return Qn;s1=1;var n=mt(),e=15,t=852,r=592,x=0,i=1,o=2,a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];return Qn=function(u,f,v,C,F,p,S,y){var D=y.bits,b=0,A=0,g=0,P=0,T=0,R=0,N=0,L=0,M=0,K=0,X,H,U,a0,o0,A0=null,t0=0,d0,S0=new n.Buf16(e+1),x0=new n.Buf16(e+1),K0=null,E0=0,y0,l0,G0;for(b=0;b<=e;b++)S0[b]=0;for(A=0;A<C;A++)S0[f[v+A]]++;for(T=D,P=e;P>=1&&S0[P]===0;P--);if(T>P&&(T=P),P===0)return F[p++]=1<<24|64<<16|0,F[p++]=1<<24|64<<16|0,y.bits=1,0;for(g=1;g<P&&S0[g]===0;g++);for(T<g&&(T=g),L=1,b=1;b<=e;b++)if(L<<=1,L-=S0[b],L<0)return-1;if(L>0&&(u===x||P!==1))return-1;for(x0[1]=0,b=1;b<e;b++)x0[b+1]=x0[b]+S0[b];for(A=0;A<C;A++)f[v+A]!==0&&(S[x0[f[v+A]]++]=A);if(u===x?(A0=K0=S,d0=19):u===i?(A0=a,t0-=257,K0=l,E0-=257,d0=256):(A0=c,K0=h,d0=-1),K=0,A=0,b=g,o0=p,R=T,N=0,U=-1,M=1<<T,a0=M-1,u===i&&M>t||u===o&&M>r)return 1;for(;;){y0=b-N,S[A]<d0?(l0=0,G0=S[A]):S[A]>d0?(l0=K0[E0+S[A]],G0=A0[t0+S[A]]):(l0=96,G0=0),X=1<<b-N,H=1<<R,g=H;do H-=X,F[o0+(K>>N)+H]=y0<<24|l0<<16|G0|0;while(H!==0);for(X=1<<b-1;K&X;)X>>=1;if(X!==0?(K&=X-1,K+=X):K=0,A++,--S0[b]===0){if(b===P)break;b=f[v+S[A]]}if(b>T&&(K&a0)!==U){for(N===0&&(N=T),o0+=g,R=b-N,L=1<<R;R+N<P&&(L-=S0[R+N],!(L<=0));)R++,L<<=1;if(M+=1<<R,u===i&&M>t||u===o&&M>r)return 1;U=K&a0,F[U]=T<<24|R<<16|o0-p|0}}return K!==0&&(F[o0+K]=b-N<<24|64<<16|0),y.bits=T,0},Qn}var h1;function X2(){if(h1)return qe;h1=1;var n=mt(),e=sx(),t=hx(),r=K2(),x=G2(),i=0,o=1,a=2,l=4,c=5,h=6,s=0,u=1,f=2,v=-2,C=-3,F=-4,p=-5,S=8,y=1,D=2,b=3,A=4,g=5,P=6,T=7,R=8,N=9,L=10,M=11,K=12,X=13,H=14,U=15,a0=16,o0=17,A0=18,t0=19,d0=20,S0=21,x0=22,K0=23,E0=24,y0=25,l0=26,G0=27,ce=28,ee=29,W0=30,te=31,ye=32,Q0=852,ne=592,X0=15,m0=X0;function Z0(z){return(z>>>24&255)+(z>>>8&65280)+((z&65280)<<8)+((z&255)<<24)}function It(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function re(z){var W;return!z||!z.state?v:(W=z.state,z.total_in=z.total_out=W.total=0,z.msg="",W.wrap&&(z.adler=W.wrap&1),W.mode=y,W.last=0,W.havedict=0,W.dmax=32768,W.head=null,W.hold=0,W.bits=0,W.lencode=W.lendyn=new n.Buf32(Q0),W.distcode=W.distdyn=new n.Buf32(ne),W.sane=1,W.back=-1,s)}function ke(z){var W;return!z||!z.state?v:(W=z.state,W.wsize=0,W.whave=0,W.wnext=0,re(z))}function Lt(z,W){var E,Q;return!z||!z.state||(Q=z.state,W<0?(E=0,W=-W):(E=(W>>4)+1,W<48&&(W&=15)),W&&(W<8||W>15))?v:(Q.window!==null&&Q.wbits!==W&&(Q.window=null),Q.wrap=E,Q.wbits=W,ke(z))}function ct(z,W){var E,Q;return z?(Q=new It,z.state=Q,Q.window=null,E=Lt(z,W),E!==s&&(z.state=null),E):v}function Le(z){return ct(z,m0)}var jt=!0,st,fe;function Ge(z){if(jt){var W;for(st=new n.Buf32(512),fe=new n.Buf32(32),W=0;W<144;)z.lens[W++]=8;for(;W<256;)z.lens[W++]=9;for(;W<280;)z.lens[W++]=7;for(;W<288;)z.lens[W++]=8;for(x(o,z.lens,0,288,st,0,z.work,{bits:9}),W=0;W<32;)z.lens[W++]=5;x(a,z.lens,0,32,fe,0,z.work,{bits:5}),jt=!1}z.lencode=st,z.lenbits=9,z.distcode=fe,z.distbits=5}function Vt(z,W,E,Q){var f0,d=z.state;return d.window===null&&(d.wsize=1<<d.wbits,d.wnext=0,d.whave=0,d.window=new n.Buf8(d.wsize)),Q>=d.wsize?(n.arraySet(d.window,W,E-d.wsize,d.wsize,0),d.wnext=0,d.whave=d.wsize):(f0=d.wsize-d.wnext,f0>Q&&(f0=Q),n.arraySet(d.window,W,E-Q,f0,d.wnext),Q-=f0,Q?(n.arraySet(d.window,W,E-Q,Q,0),d.wnext=Q,d.whave=d.wsize):(d.wnext+=f0,d.wnext===d.wsize&&(d.wnext=0),d.whave<d.wsize&&(d.whave+=f0))),0}function m(z,W){var E,Q,f0,d,j,V,B,q,I,c0,n0,r0,O0,Qe,J0=0,N0,xe,ve,ge,U5,W5,_0,Se,he=new n.Buf8(4),_e,Xe,Jr=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!z||!z.state||!z.output||!z.input&&z.avail_in!==0)return v;E=z.state,E.mode===K&&(E.mode=X),j=z.next_out,f0=z.output,B=z.avail_out,d=z.next_in,Q=z.input,V=z.avail_in,q=E.hold,I=E.bits,c0=V,n0=B,Se=s;e:for(;;)switch(E.mode){case y:if(E.wrap===0){E.mode=X;break}for(;I<16;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(E.wrap&2&&q===35615){E.check=0,he[0]=q&255,he[1]=q>>>8&255,E.check=t(E.check,he,2,0),q=0,I=0,E.mode=D;break}if(E.flags=0,E.head&&(E.head.done=!1),!(E.wrap&1)||(((q&255)<<8)+(q>>8))%31){z.msg="incorrect header check",E.mode=W0;break}if((q&15)!==S){z.msg="unknown compression method",E.mode=W0;break}if(q>>>=4,I-=4,_0=(q&15)+8,E.wbits===0)E.wbits=_0;else if(_0>E.wbits){z.msg="invalid window size",E.mode=W0;break}E.dmax=1<<_0,z.adler=E.check=1,E.mode=q&512?L:K,q=0,I=0;break;case D:for(;I<16;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(E.flags=q,(E.flags&255)!==S){z.msg="unknown compression method",E.mode=W0;break}if(E.flags&57344){z.msg="unknown header flags set",E.mode=W0;break}E.head&&(E.head.text=q>>8&1),E.flags&512&&(he[0]=q&255,he[1]=q>>>8&255,E.check=t(E.check,he,2,0)),q=0,I=0,E.mode=b;case b:for(;I<32;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}E.head&&(E.head.time=q),E.flags&512&&(he[0]=q&255,he[1]=q>>>8&255,he[2]=q>>>16&255,he[3]=q>>>24&255,E.check=t(E.check,he,4,0)),q=0,I=0,E.mode=A;case A:for(;I<16;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}E.head&&(E.head.xflags=q&255,E.head.os=q>>8),E.flags&512&&(he[0]=q&255,he[1]=q>>>8&255,E.check=t(E.check,he,2,0)),q=0,I=0,E.mode=g;case g:if(E.flags&1024){for(;I<16;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}E.length=q,E.head&&(E.head.extra_len=q),E.flags&512&&(he[0]=q&255,he[1]=q>>>8&255,E.check=t(E.check,he,2,0)),q=0,I=0}else E.head&&(E.head.extra=null);E.mode=P;case P:if(E.flags&1024&&(r0=E.length,r0>V&&(r0=V),r0&&(E.head&&(_0=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),n.arraySet(E.head.extra,Q,d,r0,_0)),E.flags&512&&(E.check=t(E.check,Q,r0,d)),V-=r0,d+=r0,E.length-=r0),E.length))break e;E.length=0,E.mode=T;case T:if(E.flags&2048){if(V===0)break e;r0=0;do _0=Q[d+r0++],E.head&&_0&&E.length<65536&&(E.head.name+=String.fromCharCode(_0));while(_0&&r0<V);if(E.flags&512&&(E.check=t(E.check,Q,r0,d)),V-=r0,d+=r0,_0)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=R;case R:if(E.flags&4096){if(V===0)break e;r0=0;do _0=Q[d+r0++],E.head&&_0&&E.length<65536&&(E.head.comment+=String.fromCharCode(_0));while(_0&&r0<V);if(E.flags&512&&(E.check=t(E.check,Q,r0,d)),V-=r0,d+=r0,_0)break e}else E.head&&(E.head.comment=null);E.mode=N;case N:if(E.flags&512){for(;I<16;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(q!==(E.check&65535)){z.msg="header crc mismatch",E.mode=W0;break}q=0,I=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),z.adler=E.check=0,E.mode=K;break;case L:for(;I<32;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}z.adler=E.check=Z0(q),q=0,I=0,E.mode=M;case M:if(E.havedict===0)return z.next_out=j,z.avail_out=B,z.next_in=d,z.avail_in=V,E.hold=q,E.bits=I,f;z.adler=E.check=1,E.mode=K;case K:if(W===c||W===h)break e;case X:if(E.last){q>>>=I&7,I-=I&7,E.mode=G0;break}for(;I<3;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}switch(E.last=q&1,q>>>=1,I-=1,q&3){case 0:E.mode=H;break;case 1:if(Ge(E),E.mode=d0,W===h){q>>>=2,I-=2;break e}break;case 2:E.mode=o0;break;case 3:z.msg="invalid block type",E.mode=W0}q>>>=2,I-=2;break;case H:for(q>>>=I&7,I-=I&7;I<32;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if((q&65535)!==(q>>>16^65535)){z.msg="invalid stored block lengths",E.mode=W0;break}if(E.length=q&65535,q=0,I=0,E.mode=U,W===h)break e;case U:E.mode=a0;case a0:if(r0=E.length,r0){if(r0>V&&(r0=V),r0>B&&(r0=B),r0===0)break e;n.arraySet(f0,Q,d,r0,j),V-=r0,d+=r0,B-=r0,j+=r0,E.length-=r0;break}E.mode=K;break;case o0:for(;I<14;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(E.nlen=(q&31)+257,q>>>=5,I-=5,E.ndist=(q&31)+1,q>>>=5,I-=5,E.ncode=(q&15)+4,q>>>=4,I-=4,E.nlen>286||E.ndist>30){z.msg="too many length or distance symbols",E.mode=W0;break}E.have=0,E.mode=A0;case A0:for(;E.have<E.ncode;){for(;I<3;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}E.lens[Jr[E.have++]]=q&7,q>>>=3,I-=3}for(;E.have<19;)E.lens[Jr[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,_e={bits:E.lenbits},Se=x(i,E.lens,0,19,E.lencode,0,E.work,_e),E.lenbits=_e.bits,Se){z.msg="invalid code lengths set",E.mode=W0;break}E.have=0,E.mode=t0;case t0:for(;E.have<E.nlen+E.ndist;){for(;J0=E.lencode[q&(1<<E.lenbits)-1],N0=J0>>>24,xe=J0>>>16&255,ve=J0&65535,!(N0<=I);){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(ve<16)q>>>=N0,I-=N0,E.lens[E.have++]=ve;else{if(ve===16){for(Xe=N0+2;I<Xe;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(q>>>=N0,I-=N0,E.have===0){z.msg="invalid bit length repeat",E.mode=W0;break}_0=E.lens[E.have-1],r0=3+(q&3),q>>>=2,I-=2}else if(ve===17){for(Xe=N0+3;I<Xe;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}q>>>=N0,I-=N0,_0=0,r0=3+(q&7),q>>>=3,I-=3}else{for(Xe=N0+7;I<Xe;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}q>>>=N0,I-=N0,_0=0,r0=11+(q&127),q>>>=7,I-=7}if(E.have+r0>E.nlen+E.ndist){z.msg="invalid bit length repeat",E.mode=W0;break}for(;r0--;)E.lens[E.have++]=_0}}if(E.mode===W0)break;if(E.lens[256]===0){z.msg="invalid code -- missing end-of-block",E.mode=W0;break}if(E.lenbits=9,_e={bits:E.lenbits},Se=x(o,E.lens,0,E.nlen,E.lencode,0,E.work,_e),E.lenbits=_e.bits,Se){z.msg="invalid literal/lengths set",E.mode=W0;break}if(E.distbits=6,E.distcode=E.distdyn,_e={bits:E.distbits},Se=x(a,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,_e),E.distbits=_e.bits,Se){z.msg="invalid distances set",E.mode=W0;break}if(E.mode=d0,W===h)break e;case d0:E.mode=S0;case S0:if(V>=6&&B>=258){z.next_out=j,z.avail_out=B,z.next_in=d,z.avail_in=V,E.hold=q,E.bits=I,r(z,n0),j=z.next_out,f0=z.output,B=z.avail_out,d=z.next_in,Q=z.input,V=z.avail_in,q=E.hold,I=E.bits,E.mode===K&&(E.back=-1);break}for(E.back=0;J0=E.lencode[q&(1<<E.lenbits)-1],N0=J0>>>24,xe=J0>>>16&255,ve=J0&65535,!(N0<=I);){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(xe&&(xe&240)===0){for(ge=N0,U5=xe,W5=ve;J0=E.lencode[W5+((q&(1<<ge+U5)-1)>>ge)],N0=J0>>>24,xe=J0>>>16&255,ve=J0&65535,!(ge+N0<=I);){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}q>>>=ge,I-=ge,E.back+=ge}if(q>>>=N0,I-=N0,E.back+=N0,E.length=ve,xe===0){E.mode=l0;break}if(xe&32){E.back=-1,E.mode=K;break}if(xe&64){z.msg="invalid literal/length code",E.mode=W0;break}E.extra=xe&15,E.mode=x0;case x0:if(E.extra){for(Xe=E.extra;I<Xe;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}E.length+=q&(1<<E.extra)-1,q>>>=E.extra,I-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=K0;case K0:for(;J0=E.distcode[q&(1<<E.distbits)-1],N0=J0>>>24,xe=J0>>>16&255,ve=J0&65535,!(N0<=I);){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if((xe&240)===0){for(ge=N0,U5=xe,W5=ve;J0=E.distcode[W5+((q&(1<<ge+U5)-1)>>ge)],N0=J0>>>24,xe=J0>>>16&255,ve=J0&65535,!(ge+N0<=I);){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}q>>>=ge,I-=ge,E.back+=ge}if(q>>>=N0,I-=N0,E.back+=N0,xe&64){z.msg="invalid distance code",E.mode=W0;break}E.offset=ve,E.extra=xe&15,E.mode=E0;case E0:if(E.extra){for(Xe=E.extra;I<Xe;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}E.offset+=q&(1<<E.extra)-1,q>>>=E.extra,I-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){z.msg="invalid distance too far back",E.mode=W0;break}E.mode=y0;case y0:if(B===0)break e;if(r0=n0-B,E.offset>r0){if(r0=E.offset-r0,r0>E.whave&&E.sane){z.msg="invalid distance too far back",E.mode=W0;break}r0>E.wnext?(r0-=E.wnext,O0=E.wsize-r0):O0=E.wnext-r0,r0>E.length&&(r0=E.length),Qe=E.window}else Qe=f0,O0=j-E.offset,r0=E.length;r0>B&&(r0=B),B-=r0,E.length-=r0;do f0[j++]=Qe[O0++];while(--r0);E.length===0&&(E.mode=S0);break;case l0:if(B===0)break e;f0[j++]=E.length,B--,E.mode=S0;break;case G0:if(E.wrap){for(;I<32;){if(V===0)break e;V--,q|=Q[d++]<<I,I+=8}if(n0-=B,z.total_out+=n0,E.total+=n0,n0&&(z.adler=E.check=E.flags?t(E.check,f0,n0,j-n0):e(E.check,f0,n0,j-n0)),n0=B,(E.flags?q:Z0(q))!==E.check){z.msg="incorrect data check",E.mode=W0;break}q=0,I=0}E.mode=ce;case ce:if(E.wrap&&E.flags){for(;I<32;){if(V===0)break e;V--,q+=Q[d++]<<I,I+=8}if(q!==(E.total&4294967295)){z.msg="incorrect length check",E.mode=W0;break}q=0,I=0}E.mode=ee;case ee:Se=u;break e;case W0:Se=C;break e;case te:return F;case ye:default:return v}return z.next_out=j,z.avail_out=B,z.next_in=d,z.avail_in=V,E.hold=q,E.bits=I,(E.wsize||n0!==z.avail_out&&E.mode<W0&&(E.mode<G0||W!==l))&&Vt(z,z.output,z.next_out,n0-z.avail_out),c0-=z.avail_in,n0-=z.avail_out,z.total_in+=c0,z.total_out+=n0,E.total+=n0,E.wrap&&n0&&(z.adler=E.check=E.flags?t(E.check,f0,n0,z.next_out-n0):e(E.check,f0,n0,z.next_out-n0)),z.data_type=E.bits+(E.last?64:0)+(E.mode===K?128:0)+(E.mode===d0||E.mode===U?256:0),(c0===0&&n0===0||W===l)&&Se===s&&(Se=p),Se}function J(z){if(!z||!z.state)return v;var W=z.state;return W.window&&(W.window=null),z.state=null,s}function $(z,W){var E;return!z||!z.state||(E=z.state,(E.wrap&2)===0)?v:(E.head=W,W.done=!1,s)}function i0(z,W){var E=W.length,Q,f0,d;return!z||!z.state||(Q=z.state,Q.wrap!==0&&Q.mode!==M)?v:Q.mode===M&&(f0=1,f0=e(f0,W,E,0),f0!==Q.check)?C:(d=Vt(z,W,E,E),d?(Q.mode=te,F):(Q.havedict=1,s))}return qe.inflateReset=ke,qe.inflateReset2=Lt,qe.inflateResetKeep=re,qe.inflateInit=Le,qe.inflateInit2=ct,qe.inflate=m,qe.inflateEnd=J,qe.inflateGetHeader=$,qe.inflateSetDictionary=i0,qe.inflateInfo="pako inflate (from Nodeca project)",qe}var _n,d1;function fx(){return d1||(d1=1,_n={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}),_n}var $n,u1;function H2(){if(u1)return $n;u1=1;function n(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}return $n=n,$n}var f1;function Z2(){if(f1)return Gt;f1=1;var n=X2(),e=mt(),t=dx(),r=fx(),x=Ar(),i=ux(),o=H2(),a=Object.prototype.toString;function l(s){if(!(this instanceof l))return new l(s);this.options=e.assign({chunkSize:16384,windowBits:0,to:""},s||{});var u=this.options;u.raw&&u.windowBits>=0&&u.windowBits<16&&(u.windowBits=-u.windowBits,u.windowBits===0&&(u.windowBits=-15)),u.windowBits>=0&&u.windowBits<16&&!(s&&s.windowBits)&&(u.windowBits+=32),u.windowBits>15&&u.windowBits<48&&(u.windowBits&15)===0&&(u.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var f=n.inflateInit2(this.strm,u.windowBits);if(f!==r.Z_OK)throw new Error(x[f]);if(this.header=new o,n.inflateGetHeader(this.strm,this.header),u.dictionary&&(typeof u.dictionary=="string"?u.dictionary=t.string2buf(u.dictionary):a.call(u.dictionary)==="[object ArrayBuffer]"&&(u.dictionary=new Uint8Array(u.dictionary)),u.raw&&(f=n.inflateSetDictionary(this.strm,u.dictionary),f!==r.Z_OK)))throw new Error(x[f])}l.prototype.push=function(s,u){var f=this.strm,v=this.options.chunkSize,C=this.options.dictionary,F,p,S,y,D,b=!1;if(this.ended)return!1;p=u===~~u?u:u===!0?r.Z_FINISH:r.Z_NO_FLUSH,typeof s=="string"?f.input=t.binstring2buf(s):a.call(s)==="[object ArrayBuffer]"?f.input=new Uint8Array(s):f.input=s,f.next_in=0,f.avail_in=f.input.length;do{if(f.avail_out===0&&(f.output=new e.Buf8(v),f.next_out=0,f.avail_out=v),F=n.inflate(f,r.Z_NO_FLUSH),F===r.Z_NEED_DICT&&C&&(F=n.inflateSetDictionary(this.strm,C)),F===r.Z_BUF_ERROR&&b===!0&&(F=r.Z_OK,b=!1),F!==r.Z_STREAM_END&&F!==r.Z_OK)return this.onEnd(F),this.ended=!0,!1;f.next_out&&(f.avail_out===0||F===r.Z_STREAM_END||f.avail_in===0&&(p===r.Z_FINISH||p===r.Z_SYNC_FLUSH))&&(this.options.to==="string"?(S=t.utf8border(f.output,f.next_out),y=f.next_out-S,D=t.buf2string(f.output,S),f.next_out=y,f.avail_out=v-y,y&&e.arraySet(f.output,f.output,S,y,0),this.onData(D)):this.onData(e.shrinkBuf(f.output,f.next_out))),f.avail_in===0&&f.avail_out===0&&(b=!0)}while((f.avail_in>0||f.avail_out===0)&&F!==r.Z_STREAM_END);return F===r.Z_STREAM_END&&(p=r.Z_FINISH),p===r.Z_FINISH?(F=n.inflateEnd(this.strm),this.onEnd(F),this.ended=!0,F===r.Z_OK):(p===r.Z_SYNC_FLUSH&&(this.onEnd(r.Z_OK),f.avail_out=0),!0)},l.prototype.onData=function(s){this.chunks.push(s)},l.prototype.onEnd=function(s){s===r.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=e.flattenChunks(this.chunks)),this.chunks=[],this.err=s,this.msg=this.strm.msg};function c(s,u){var f=new l(u);if(f.push(s,!0),f.err)throw f.msg||x[f.err];return f.result}function h(s,u){return u=u||{},u.raw=!0,c(s,u)}return Gt.Inflate=l,Gt.inflate=c,Gt.inflateRaw=h,Gt.ungzip=c,Gt}var er,v1;function Y2(){if(v1)return er;v1=1;var n=mt().assign,e=W2(),t=Z2(),r=fx(),x={};return n(x,e,t,r),er=x,er}var J2=Y2();const kn=cx(J2);var E1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",v5=new Uint8Array(256);for(var G5=0;G5<E1.length;G5++)v5[E1.charCodeAt(G5)]=G5;var Q2=function(n){var e=n.length*.75,t=n.length,r,x=0,i,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var c=new Uint8Array(e);for(r=0;r<t;r+=4)i=v5[n.charCodeAt(r)],o=v5[n.charCodeAt(r+1)],a=v5[n.charCodeAt(r+2)],l=v5[n.charCodeAt(r+3)],c[x++]=i<<2|o>>4,c[x++]=(o&15)<<4|a>>2,c[x++]=(a&3)<<6|l&63;return c},_2=function(n){for(var e="",t=0;t<n.length;t++)e+=String.fromCharCode(n[t]);return e},vx=function(n){return _2(kn.inflate(Q2(n)))},$2=function(n,e,t){for(var r="",x=0,i=e-n.length;x<i;x++)r+=t;return r+n};const ei="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",ti="eJyFWdtyGjkQ/RVqnnarcAo7vuE3jEnCxgEvGDtxKg9iRgxaa0ZEF9s4lX/fnrGdTVZ9lBcKTmvU96PW8C0bmqqStc9OsqsPwYlSdnaPDvb6naP+3v5+1s3emNpPRCVpwdAEq6TdOTW6mC61+hpksyBo/euCTrOg89MKUSm9/XUNwddSletGcbOcfo+90Cof1KWmdTu7e4S4N+pBFhfK5+vsxNsgu9lwLazIvbRz2Tw7evCyLmQxM5Won809PTUP2cnnnYOj7s7eQa97fNjvHvd2v3SzBS21WtXywjjllakbRb3eT4LLtcpva+lcdkJPZlfSunZZ1uu9ftXr9UjFxHiVP7my2drGh84f+Z+d3f5xv0uf/V77udt+vm4/jzqDwixlZ751XlauM65zYzfGCi+LV53OQOvOrNnHdWbSSXtHKOkZ0apC1eU8X8s2dO0mcy/qQtjiRUoLh2Lz7jmWB4cUto8vv/Zf97vZwOVNhGx2crhHP8/kj987uxShbO6Ld9fZyfF++/WKvu72Dp/i/EF6q3IKxedv2fVH2qAJ1YQscRtBEfje/R8sH3Itqhj/Ggx5utSxpA7VsglxWceywmgtbIxvpM2bio0EoiKRo/AAC9pcMfsJK2stV0gEHhOu2dHdMk/p4GI0p0YTMbzebtaS8Z5cUYbxxGnh1jH8KK2JUVMzWfL3zEq/tpJZu6JuZVB1x6x16oEB5R3nneRjWivO4Nxow+zhZKWASDcNHCv9GgRTg6WV1IiMm8ReriWJOPeM7YMYOo2hYQydxdAoht7E0NsYehdD4xj6K4bex9B5DH2IoUkMTWPoIob+jqFZDM1j6DKGFjF0FUPXMfQxhj7F0E0MLekQupWep40lyUCfPj8HOSVXKlc2DwyLhoa1HZ0cTIu0/MYbw3DOkukxhn+ZDmK4gGkohuViSMXQPzHE0CvTwky0mK5laG/DhDKGGG5g6IWJfYihuxi6jyGGSbcM6fP1BQphyR2m7fpUNXqlC3jUF+aeiTN/OjfHpW4GlriEmoGO5dktd3astLGKPQ/ALnmwdIznTADbtnGqHTnh1MJHswyKJJUBFNCI241/IwahXzHdsWIKnyY5lmYKUZbckfaEs6PY08DR5E5ayfQ+zUKitGLDkRpdASTjxX/hXQqXiHBaCkL0IwFALrVWG6eYRiVP/doENCk+Hfp8aVMAuNFH5MFzg0vL5CstmXYGfVWJ3HI1vLSSU1wYL3K+3wq6ZUnWf8t2YS4LCig3oYa6FDZUWgRGjSlpyGRYOhesH7LiC3bAjDzGFiua8fih8BwcsFOE8woqIrmgWQ2Cj3czWzLdqYFeg3Bmd2pNusVSyTNJG+N8SlB+AhRNSGdUgtR9whYU6k5x1fwJWDZIdYYADy1SD23BQ669dqEekaktF3yfLHAYBGqGBbAuoAdGWMkZEQR3/0g6mr+8qmBUIcrJQR0IPi6TpAEa1Shg1MvkbkO0G2DVUYInHXDTQUJUQLs2j7IuGcEMqHibdDIkmyQlHKCUWmBIDn29SUTucm0ss9kUaZ+BuM0BXgBrF0hB4CuzfbfhQjvgMDPRFJTgAOGAVqugvdpoZswMwMFL4CCNWl4JXagVc7vaYmqYAD0qVSyjZJklTh0syoEdNaJBlNAJCNAYbNS8eaOBgXv9trTmVtbsHcjKUjkw9b4FyR6nGCVQV/NXkRGoKQscMigyN+CBGxCx55dc4BXYyDMTyhCSgk7ylkejHzwdkWCAxodEVYIAP6LWQLqnKCPo6EGZckgzdmKaHEuAh2dSeyZXnidpf28SjIhNq5hXGgpYZNJz5giFvgATTsvjVMCWCpkxbZ6oV74i3yfr+BwkzltRyEpYxnKZYIUxiNIYFc45sJqCthaaORmamwlocJOqqBpMTYvf5A/ERyKHSsCl5NBzVrmk8kGYJ1M3TVteEEtw/3YYkKIhMCJANi9UzqXhDGxkk95MQH4MwGfpsk5KB2DPAeRofuaagn0eEx0yQqc90n2bdAUMAuNkKwATfPpyY8om37Xh3o9gLg1YRFuhf6vSF1ruIH8ETtXJrSjk+IRQqMdHofkf8ks3ey9tfSGUbf49/vL9XxrnGMA=",ni="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",ri="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",xi=JSON.parse('"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"'),ii=JSON.parse('"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"'),oi=JSON.parse('"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"'),ai=JSON.parse('"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"'),li=JSON.parse('"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"'),ci=JSON.parse('"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"'),si=JSON.parse('"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"'),hi=JSON.parse('"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"'),di="eJx9WFlv2zgQ/iuGnnYBt5DkS85bmk13g27SoEkPbNEHWqIlIhSpklSuov99R7JIkSLtFyGZjxzN8c0h/4oueF1jpqKz6Mt1K1GJZ4s4S+PZYrvdbqJ59J4zdYNqDAfuXuodp52spdSToZrQl6n0KyZl1Sm/xgVpa5BcKURJfs5KCgdj+F++J8+4uCUqr6IzJVo8jy4qJFCusLjD3d27BucE0cGYd+/4c3T2/U2SxfM36XYxT+JtDI8k/jGPPrMCC0oYvuWSKMJZdPYmiWMLuK9I/sCwlNHZCuRfsJD9sSiOk7dxnMFbbrgieefGBW9eROfA7I/8z1myzVbz7rnpn9vuCW/unpvZecF3eHb3IhWu5eyK5Vw0XCCFi7ezc0pnvRo5E1hi8QhCeM0lHCoIK+/yCvdR67zrfd2THPA7VfzzNTrbpv2fX+BPeH8fm2usBMnBg++/oq/forO08+QGNMgGgeG/5wfxYrE4iPFzTlFt5JtkkLeMPIL/EFoNreJBE2vrXReako3YcqvVEXCTKWJdzPS7Gizyjk/mZZvsAKC66d7FCgMtF4NC2eaVqpDyLW+QwIzi/TGoD6tvPQL7BJEPNVKVb39DW2mkJnY5FALyD9eEhU6DL4SPrqTaS0mRrHyDXrHgvpQz7AvVU+CkqgQOnN3zVgSkkFVfKslzQIgfMfPFOBxWRiyDjcs5p5wFIoFr4kImprQrP59WP1ubiVpcCgxlNLq5XC4PwM8Wy77EvSs5ZyU0EpuFaXqAzmlTjVlerzcH8TuskH/4oiLj0WQQ/oWpdXadJAfxZSOJ7exmPfD01lYSD8K/kU0288JLS7Mh+hW337dINCPA5MRX8QE1jXU8Wx/E/6J6V4zyLBtCdd36Km4Cso+QTOG4N6T5dvRusxxsu6/scK5Wgw2fKovZ20HxHSnrQDjv0WjEejvw7/MkxmMD6ZQkvnEfa1xayperg/ibZfN2kN1K4lvxHw4lZAfD6QErpy1lOt2QF4H3XATa8HDP7VnrVWY6SoNZQfKWokBRt90Ak7mt2GACwTVE8bNPE+Tw3VTIzkmQqRuLqsvtUGaFw3cTcjzJxSod3tjYSnQgS4fvpgyc8KaDZuLwXR8FtYlv8YPD9rHBuGxfbQYG1q1vL2v9+3zC9nF0EF+BqoLBFBbbjRfSYbsJprLYboxtpx1Fj23esXoMhqlx7rB9uR2OPxP/aCMDmX61/Vhm8cha7HA91bzbWUR1z0/m8tLUKSyJ1qWNHqeXrTUf16lb76Or6XIzTmWFA4mHyeLOkUS3+H23UpJQPAnbE0bUS2CSUi6IdWM13Mhpu/OlBUE1t/YbA1QYCeWLYVsrRh+SeDm0RCQEf9pxa3Xpds4RcpJhqNVDbXPkzqTpOJcK/mT1VO17gUtn57C3J3cpMlUucW77Px3hRwZ83VJFGvriJ6YRHJboLmnWPUNXWAC7FbQg+/0IrjUL4RMFBxhYkEdSBLxiXB0xD8TkEZorywPXoP0I/jxhXGzWKEoJUFgeiTvs3srq2eO9Hq2Aeq92S9eDIgeYwIeawKoVY+KyVOumuBmpY0r+CgrgQVn7ohl9n6aIoc4TJjB0lEDWvmaGa05ETrGfPRd3lm1jI64b9SKtBJlbhAFTgEhuqWoUvlhCFdwRBW613cNWqnGYyDAdj+OQfdnugpBWHUa14jAKbbN2tlDrfR6mXUT9p7F3peyGvHNBb0UCl933GHgmyN6Hc/0R6+KZxiG7Ba6ReJjg6RiAos0DpTRsHWNz1s284Mr58DI+UF52N8B7vyIGzP4+nGJcWLXiNMtiR0/0S0BPtExAj3ZNwE42zh11e6duTZS/YlZaK6DebfrkOsb4aURMnsqiA+viHpPowDrwsoX1y6moRTZ20cMXtmpOgFYf8sGd8kFrRw4ptuCQagu2lJvwmpXEUu2DNSlOoEf12vY4aXOZkG6WY8OC4hzrwHRcjVhWepjd4KdYKK7jrx5H89WjRxPWoycydlS3jZ/I2VS/G9yp9gB6PG1T1aY4YAp3LfPHPPqABbtFRHS/jf34/T82FAfb",ui="eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==";var fi={Courier:ri,"Courier-Bold":ei,"Courier-Oblique":ni,"Courier-BoldOblique":ti,Helvetica:ai,"Helvetica-Bold":xi,"Helvetica-Oblique":oi,"Helvetica-BoldOblique":ii,"Times-Roman":hi,"Times-Bold":li,"Times-Italic":si,"Times-BoldItalic":ci,Symbol:di,ZapfDingbats:ui},w5;(function(n){n.Courier="Courier",n.CourierBold="Courier-Bold",n.CourierOblique="Courier-Oblique",n.CourierBoldOblique="Courier-BoldOblique",n.Helvetica="Helvetica",n.HelveticaBold="Helvetica-Bold",n.HelveticaOblique="Helvetica-Oblique",n.HelveticaBoldOblique="Helvetica-BoldOblique",n.TimesRoman="Times-Roman",n.TimesRomanBold="Times-Bold",n.TimesRomanItalic="Times-Italic",n.TimesRomanBoldItalic="Times-BoldItalic",n.Symbol="Symbol",n.ZapfDingbats="ZapfDingbats"})(w5||(w5={}));var B1={},vi=(function(){function n(){var e=this;this.getWidthOfGlyph=function(t){return e.CharWidths[t]},this.getXAxisKerningForPair=function(t,r){return(e.KernPairXAmounts[t]||{})[r]}}return n.load=function(e){var t=B1[e];if(t)return t;var r=vx(fi[e]),x=Object.assign(new n,JSON.parse(r));return x.CharWidths=x.CharMetrics.reduce(function(i,o){return i[o.N]=o.WX,i},{}),x.KernPairXAmounts=x.KernPairs.reduce(function(i,o){var a=o[0],l=o[1],c=o[2];return i[a]||(i[a]={}),i[a][l]=c,i},{}),B1[e]=x,x},n})();const Ei="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";var Bi=vx(Ei),tr=JSON.parse(Bi),nr=(function(){function n(e,t){var r=this;this.canEncodeUnicodeCodePoint=function(x){return x in r.unicodeMappings},this.encodeUnicodeCodePoint=function(x){var i=r.unicodeMappings[x];if(!i){var o=String.fromCharCode(x),a="0x"+$2(x.toString(16),4,"0"),l=r.name+' cannot encode "'+o+'" ('+a+")";throw new Error(l)}return{code:i[0],name:i[1]}},this.name=e,this.supportedCodePoints=Object.keys(t).map(Number).sort(function(x,i){return x-i}),this.unicodeMappings=t}return n})(),X5={Symbol:new nr("Symbol",tr.symbol),ZapfDingbats:new nr("ZapfDingbats",tr.zapfdingbats),WinAnsi:new nr("WinAnsi",tr.win1252)},Sn=function(n){return Object.keys(n).map(function(e){return n[e]})},Ci=Sn(w5),C1=function(n){return Ci.includes(n)},H5=function(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height},ie=function(n){return"`"+n+"`"},pi=function(n){return"'"+n+"'"},p1=function(n){var e=typeof n;return e==="string"?pi(n):e==="undefined"?ie(n):n},Fi=function(n,e,t){for(var r=new Array(t.length),x=0,i=t.length;x<i;x++){var o=t[x];r[x]=p1(o)}var a=r.join(" or ");return ie(e)+" must be one of "+a+", but was actually "+p1(n)},ft=function(n,e,t){Array.isArray(t)||(t=Sn(t));for(var r=0,x=t.length;r<x;r++)if(n===t[r])return;throw new TypeError(Fi(n,e,t))},Pe=function(n,e,t){Array.isArray(t)||(t=Sn(t)),ft(n,e,t.concat(void 0))},gi=function(n,e,t){Array.isArray(t)||(t=Sn(t));for(var r=0,x=n.length;r<x;r++)ft(n[r],e,t)},Ai=function(n){return n===null?"null":n===void 0?"undefined":typeof n=="string"?"string":isNaN(n)?"NaN":typeof n=="number"?"number":typeof n=="boolean"?"boolean":typeof n=="symbol"?"symbol":typeof n=="bigint"?"bigint":n.constructor&&n.constructor.name?n.constructor.name:n.name?n.name:n.constructor?String(n.constructor):String(n)},yi=function(n,e){return e==="null"?n===null:e==="undefined"?n===void 0:e==="string"?typeof n=="string":e==="number"?typeof n=="number"&&!isNaN(n):e==="boolean"?typeof n=="boolean":e==="symbol"?typeof n=="symbol":e==="bigint"?typeof n=="bigint":e===Date?n instanceof Date:e===Array?n instanceof Array:e===Uint8Array?n instanceof Uint8Array:e===ArrayBuffer?n instanceof ArrayBuffer:e===Function?n instanceof Function:n instanceof e[0]},Di=function(n,e,t){for(var r=new Array(t.length),x=0,i=t.length;x<i;x++){var o=t[x];o==="null"&&(r[x]=ie("null")),o==="undefined"&&(r[x]=ie("undefined")),o==="string"?r[x]=ie("string"):o==="number"?r[x]=ie("number"):o==="boolean"?r[x]=ie("boolean"):o==="symbol"?r[x]=ie("symbol"):o==="bigint"?r[x]=ie("bigint"):o===Array?r[x]=ie("Array"):o===Uint8Array?r[x]=ie("Uint8Array"):o===ArrayBuffer?r[x]=ie("ArrayBuffer"):r[x]=ie(o[1])}var a=r.join(" or ");return ie(e)+" must be of type "+a+", but was actually of type "+ie(Ai(n))},O=function(n,e,t){for(var r=0,x=t.length;r<x;r++)if(yi(n,t[r]))return;throw new TypeError(Di(n,e,t))},_=function(n,e,t){O(n,e,t.concat("undefined"))},Ex=function(n,e,t){for(var r=0,x=n.length;r<x;r++)O(n[r],e,t)},De=function(n,e,t,r){if(O(n,e,["number"]),O(t,"min",["number"]),O(r,"max",["number"]),r=Math.max(t,r),n<t||n>r)throw new Error(ie(e)+" must be at least "+t+" and at most "+r+", but was actually "+n)},Ve=function(n,e,t,r){O(n,e,["number","undefined"]),typeof n=="number"&&De(n,e,t,r)},Bx=function(n,e,t){if(O(n,e,["number"]),n%t!==0)throw new Error(ie(e)+" must be a multiple of "+t+", but was actually "+n)},mi=function(n,e){if(!Number.isInteger(n))throw new Error(ie(e)+" must be an integer, but was actually "+n)},qn=function(n,e){if(![1,0].includes(Math.sign(n)))throw new Error(ie(e)+" must be a positive number or 0, but was actually "+n)},g0=new Uint16Array(256);for(var Z5=0;Z5<256;Z5++)g0[Z5]=Z5;g0[22]=p0("");g0[24]=p0("˘");g0[25]=p0("ˇ");g0[26]=p0("ˆ");g0[27]=p0("˙");g0[28]=p0("˝");g0[29]=p0("˛");g0[30]=p0("˚");g0[31]=p0("˜");g0[127]=p0("�");g0[128]=p0("•");g0[129]=p0("†");g0[130]=p0("‡");g0[131]=p0("…");g0[132]=p0("—");g0[133]=p0("–");g0[134]=p0("ƒ");g0[135]=p0("⁄");g0[136]=p0("‹");g0[137]=p0("›");g0[138]=p0("−");g0[139]=p0("‰");g0[140]=p0("„");g0[141]=p0("“");g0[142]=p0("”");g0[143]=p0("‘");g0[144]=p0("’");g0[145]=p0("‚");g0[146]=p0("™");g0[147]=p0("ﬁ");g0[148]=p0("ﬂ");g0[149]=p0("Ł");g0[150]=p0("Œ");g0[151]=p0("Š");g0[152]=p0("Ÿ");g0[153]=p0("Ž");g0[154]=p0("ı");g0[155]=p0("ł");g0[156]=p0("œ");g0[157]=p0("š");g0[158]=p0("ž");g0[159]=p0("�");g0[160]=p0("€");g0[173]=p0("�");var Cx=function(n){for(var e=new Array(n.length),t=0,r=n.length;t<r;t++)e[t]=g0[n[t]];return String.fromCodePoint.apply(String,e)},xt=(function(){function n(e){this.populate=e,this.value=void 0}return n.prototype.getValue=function(){return this.value},n.prototype.access=function(){return this.value||(this.value=this.populate()),this.value},n.prototype.invalidate=function(){this.value=void 0},n.populatedBy=function(e){return new n(e)},n})(),Me=(function(n){e0(e,n);function e(t,r){var x=this,i="Method "+t+"."+r+"() not implemented";return x=n.call(this,i)||this,x}return e})(Error),yr=(function(n){e0(e,n);function e(t){var r=this,x="Cannot construct "+t+" - it has a private constructor";return r=n.call(this,x)||this,r}return e})(Error),dn=(function(n){e0(e,n);function e(t,r){var x=this,i=function(l){var c,h;return(c=l?.name)!==null&&c!==void 0?c:(h=l?.constructor)===null||h===void 0?void 0:h.name},o=Array.isArray(t)?t.map(i):[i(t)],a="Expected instance of "+o.join(" or ")+", "+("but got instance of "+(r&&i(r)));return x=n.call(this,a)||this,x}return e})(Error),wi=(function(n){e0(e,n);function e(t){var r=this,x=t+" stream encoding not supported";return r=n.call(this,x)||this,r}return e})(Error),Dr=(function(n){e0(e,n);function e(t,r){var x=this,i="Cannot call "+t+"."+r+"() more than once";return x=n.call(this,i)||this,x}return e})(Error);(function(n){e0(e,n);function e(t){var r=this,x="Missing catalog (ref="+t+")";return r=n.call(this,x)||this,r}return e})(Error);var bi=(function(n){e0(e,n);function e(){var t=this,r="Can't embed page with missing Contents";return t=n.call(this,r)||this,t}return e})(Error),ki=(function(n){e0(e,n);function e(t){var r,x,i,o=this,a=(i=(x=(r=t?.contructor)===null||r===void 0?void 0:r.name)!==null&&x!==void 0?x:t?.name)!==null&&i!==void 0?i:t,l="Unrecognized stream type: "+a;return o=n.call(this,l)||this,o}return e})(Error),Si=(function(n){e0(e,n);function e(){var t=this,r="Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";return t=n.call(this,r)||this,t}return e})(Error),qi=(function(n){e0(e,n);function e(t){var r=this,x="Attempted to convert PDFArray with "+t+" elements to rectangle, but must have exactly 4 elements.";return r=n.call(this,x)||this,r}return e})(Error),px=(function(n){e0(e,n);function e(t){var r=this,x='Attempted to convert "'+t+'" to a date, but it does not match the PDF date string format.';return r=n.call(this,x)||this,r}return e})(Error),F1=(function(n){e0(e,n);function e(t,r){var x=this,i="Invalid targetIndex specified: targetIndex="+t+" must be less than Count="+r;return x=n.call(this,i)||this,x}return e})(Error),g1=(function(n){e0(e,n);function e(t,r){var x=this,i="Failed to "+r+" at targetIndex="+t+" due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";return x=n.call(this,i)||this,x}return e})(Error),un=(function(n){e0(e,n);function e(t,r,x){var i=this,o="index should be at least "+r+" and at most "+x+", but was actually "+t;return i=n.call(this,o)||this,i}return e})(Error),mr=(function(n){e0(e,n);function e(){var t=this,r="Attempted to set invalid field value";return t=n.call(this,r)||this,t}return e})(Error),Pi=(function(n){e0(e,n);function e(){var t=this,r="Attempted to select multiple values for single-select field";return t=n.call(this,r)||this,t}return e})(Error),zi=(function(n){e0(e,n);function e(t){var r=this,x="No /DA (default appearance) entry found for field: "+t;return r=n.call(this,x)||this,r}return e})(Error),Ti=(function(n){e0(e,n);function e(t){var r=this,x="No Tf operator found for DA of field: "+t;return r=n.call(this,x)||this,r}return e})(Error),A1=(function(n){e0(e,n);function e(t,r){var x=this,i="Failed to parse number "+("(line:"+t.line+" col:"+t.column+" offset="+t.offset+'): "'+r+'"');return x=n.call(this,i)||this,x}return e})(Error),wt=(function(n){e0(e,n);function e(t,r){var x=this,i="Failed to parse PDF document "+("(line:"+t.line+" col:"+t.column+" offset="+t.offset+"): "+r);return x=n.call(this,i)||this,x}return e})(Error),Mi=(function(n){e0(e,n);function e(t,r,x){var i=this,o="Expected next byte to be "+r+" but it was actually "+x;return i=n.call(this,t,o)||this,i}return e})(wt),Oi=(function(n){e0(e,n);function e(t,r){var x=this,i="Failed to parse PDF object starting with the following byte: "+r;return x=n.call(this,t,i)||this,x}return e})(wt),Ri=(function(n){e0(e,n);function e(t){var r=this,x="Failed to parse invalid PDF object";return r=n.call(this,t,x)||this,r}return e})(wt),Ni=(function(n){e0(e,n);function e(t){var r=this,x="Failed to parse PDF stream";return r=n.call(this,t,x)||this,r}return e})(wt),Ii=(function(n){e0(e,n);function e(t){var r=this,x="Failed to parse PDF literal string due to unbalanced parenthesis";return r=n.call(this,t,x)||this,r}return e})(wt),Li=(function(n){e0(e,n);function e(t){var r=this,x="Parser stalled";return r=n.call(this,t,x)||this,r}return e})(wt),ji=(function(n){e0(e,n);function e(t){var r=this,x="No PDF header found";return r=n.call(this,t,x)||this,r}return e})(wt),Vi=(function(n){e0(e,n);function e(t,r){var x=this,i="Did not find expected keyword '"+nx(r)+"'";return x=n.call(this,t,i)||this,x}return e})(wt),lr;(function(n){n[n.Null=0]="Null",n[n.Backspace=8]="Backspace",n[n.Tab=9]="Tab",n[n.Newline=10]="Newline",n[n.FormFeed=12]="FormFeed",n[n.CarriageReturn=13]="CarriageReturn",n[n.Space=32]="Space",n[n.ExclamationPoint=33]="ExclamationPoint",n[n.Hash=35]="Hash",n[n.Percent=37]="Percent",n[n.LeftParen=40]="LeftParen",n[n.RightParen=41]="RightParen",n[n.Plus=43]="Plus",n[n.Minus=45]="Minus",n[n.Dash=45]="Dash",n[n.Period=46]="Period",n[n.ForwardSlash=47]="ForwardSlash",n[n.Zero=48]="Zero",n[n.One=49]="One",n[n.Two=50]="Two",n[n.Three=51]="Three",n[n.Four=52]="Four",n[n.Five=53]="Five",n[n.Six=54]="Six",n[n.Seven=55]="Seven",n[n.Eight=56]="Eight",n[n.Nine=57]="Nine",n[n.LessThan=60]="LessThan",n[n.GreaterThan=62]="GreaterThan",n[n.A=65]="A",n[n.D=68]="D",n[n.E=69]="E",n[n.F=70]="F",n[n.O=79]="O",n[n.P=80]="P",n[n.R=82]="R",n[n.LeftSquareBracket=91]="LeftSquareBracket",n[n.BackSlash=92]="BackSlash",n[n.RightSquareBracket=93]="RightSquareBracket",n[n.a=97]="a",n[n.b=98]="b",n[n.d=100]="d",n[n.e=101]="e",n[n.f=102]="f",n[n.i=105]="i",n[n.j=106]="j",n[n.l=108]="l",n[n.m=109]="m",n[n.n=110]="n",n[n.o=111]="o",n[n.r=114]="r",n[n.s=115]="s",n[n.t=116]="t",n[n.u=117]="u",n[n.x=120]="x",n[n.LeftCurly=123]="LeftCurly",n[n.RightCurly=125]="RightCurly",n[n.Tilde=126]="Tilde"})(lr||(lr={}));const k=lr;var Pn=(function(){function n(e,t){this.major=String(e),this.minor=String(t)}return n.prototype.toString=function(){var e=rt(129);return"%PDF-"+this.major+"."+this.minor+`
%`+e+e+e+e},n.prototype.sizeInBytes=function(){return 12+this.major.length+this.minor.length},n.prototype.copyBytesInto=function(e,t){var r=t;return e[t++]=k.Percent,e[t++]=k.P,e[t++]=k.D,e[t++]=k.F,e[t++]=k.Dash,t+=de(this.major,e,t),e[t++]=k.Period,t+=de(this.minor,e,t),e[t++]=k.Newline,e[t++]=k.Percent,e[t++]=129,e[t++]=129,e[t++]=129,e[t++]=129,t-r},n.forVersion=function(e,t){return new n(e,t)},n})(),Ce=(function(){function n(){}return n.prototype.clone=function(e){throw new Me(this.constructor.name,"clone")},n.prototype.toString=function(){throw new Me(this.constructor.name,"toString")},n.prototype.sizeInBytes=function(){throw new Me(this.constructor.name,"sizeInBytes")},n.prototype.copyBytesInto=function(e,t){throw new Me(this.constructor.name,"copyBytesInto")},n})(),B0=(function(n){e0(e,n);function e(t){var r=n.call(this)||this;return r.numberValue=t,r.stringValue=j2(t),r}return e.prototype.asNumber=function(){return this.numberValue},e.prototype.value=function(){return this.numberValue},e.prototype.clone=function(){return e.of(this.numberValue)},e.prototype.toString=function(){return this.stringValue},e.prototype.sizeInBytes=function(){return this.stringValue.length},e.prototype.copyBytesInto=function(t,r){return r+=de(this.stringValue,t,r),this.stringValue.length},e.of=function(t){return new e(t)},e})(Ce),I0=(function(n){e0(e,n);function e(t){var r=n.call(this)||this;return r.array=[],r.context=t,r}return e.prototype.size=function(){return this.array.length},e.prototype.push=function(t){this.array.push(t)},e.prototype.insert=function(t,r){this.array.splice(t,0,r)},e.prototype.indexOf=function(t){var r=this.array.indexOf(t);return r===-1?void 0:r},e.prototype.remove=function(t){this.array.splice(t,1)},e.prototype.set=function(t,r){this.array[t]=r},e.prototype.get=function(t){return this.array[t]},e.prototype.lookupMaybe=function(t){for(var r,x=[],i=1;i<arguments.length;i++)x[i-1]=arguments[i];return(r=this.context).lookupMaybe.apply(r,T0([this.get(t)],x))},e.prototype.lookup=function(t){for(var r,x=[],i=1;i<arguments.length;i++)x[i-1]=arguments[i];return(r=this.context).lookup.apply(r,T0([this.get(t)],x))},e.prototype.asRectangle=function(){if(this.size()!==4)throw new qi(this.size());var t=this.lookup(0,B0).asNumber(),r=this.lookup(1,B0).asNumber(),x=this.lookup(2,B0).asNumber(),i=this.lookup(3,B0).asNumber(),o=t,a=r,l=x-t,c=i-r;return{x:o,y:a,width:l,height:c}},e.prototype.asArray=function(){return this.array.slice()},e.prototype.clone=function(t){for(var r=e.withContext(t||this.context),x=0,i=this.size();x<i;x++)r.push(this.array[x]);return r},e.prototype.toString=function(){for(var t="[ ",r=0,x=this.size();r<x;r++)t+=this.get(r).toString(),t+=" ";return t+="]",t},e.prototype.sizeInBytes=function(){for(var t=3,r=0,x=this.size();r<x;r++)t+=this.get(r).sizeInBytes()+1;return t},e.prototype.copyBytesInto=function(t,r){var x=r;t[r++]=k.LeftSquareBracket,t[r++]=k.Space;for(var i=0,o=this.size();i<o;i++)r+=this.get(i).copyBytesInto(t,r),t[r++]=k.Space;return t[r++]=k.RightSquareBracket,r-x},e.prototype.scalePDFNumbers=function(t,r){for(var x=0,i=this.size();x<i;x++){var o=this.lookup(x);if(o instanceof B0){var a=x%2===0?t:r;this.set(x,B0.of(o.asNumber()*a))}}},e.withContext=function(t){return new e(t)},e})(Ce),rr={},b5=(function(n){e0(e,n);function e(t,r){var x=this;if(t!==rr)throw new yr("PDFBool");return x=n.call(this)||this,x.value=r,x}return e.prototype.asBoolean=function(){return this.value},e.prototype.clone=function(){return this},e.prototype.toString=function(){return String(this.value)},e.prototype.sizeInBytes=function(){return this.value?4:5},e.prototype.copyBytesInto=function(t,r){return this.value?(t[r++]=k.t,t[r++]=k.r,t[r++]=k.u,t[r++]=k.e,4):(t[r++]=k.f,t[r++]=k.a,t[r++]=k.l,t[r++]=k.s,t[r++]=k.e,5)},e.True=new e(rr,!0),e.False=new e(rr,!1),e})(Ce),Ie=new Uint8Array(256);Ie[k.LeftParen]=1;Ie[k.RightParen]=1;Ie[k.LessThan]=1;Ie[k.GreaterThan]=1;Ie[k.LeftSquareBracket]=1;Ie[k.RightSquareBracket]=1;Ie[k.LeftCurly]=1;Ie[k.RightCurly]=1;Ie[k.ForwardSlash]=1;Ie[k.Percent]=1;var at=new Uint8Array(256);at[k.Null]=1;at[k.Tab]=1;at[k.Newline]=1;at[k.FormFeed]=1;at[k.CarriageReturn]=1;at[k.Space]=1;var wr=new Uint8Array(256);for(var l5=0,Ui=256;l5<Ui;l5++)wr[l5]=at[l5]||Ie[l5]?1:0;wr[k.Hash]=1;var Wi=function(n){return n.replace(/#([\dABCDEF]{2})/g,function(e,t){return F2(t)})},Ki=function(n){return n>=k.ExclamationPoint&&n<=k.Tilde&&!wr[n]},y1={},D1=new Map,w=(function(n){e0(e,n);function e(t,r){var x=this;if(t!==y1)throw new yr("PDFName");x=n.call(this)||this;for(var i="/",o=0,a=r.length;o<a;o++){var l=r[o],c=p0(l);i+=Ki(c)?l:"#"+bn(c)}return x.encodedName=i,x}return e.prototype.asBytes=function(){for(var t=[],r="",x=!1,i=function(s){s!==void 0&&t.push(s),x=!1},o=1,a=this.encodedName.length;o<a;o++){var l=this.encodedName[o],c=p0(l),h=this.encodedName[o+1];x?c>=k.Zero&&c<=k.Nine||c>=k.a&&c<=k.f||c>=k.A&&c<=k.F?(r+=l,(r.length===2||!(h>="0"&&h<="9"||h>="a"&&h<="f"||h>="A"&&h<="F"))&&(i(parseInt(r,16)),r="")):i(c):c===k.Hash?x=!0:i(c)}return new Uint8Array(t)},e.prototype.decodeText=function(){var t=this.asBytes();return String.fromCharCode.apply(String,Array.from(t))},e.prototype.asString=function(){return this.encodedName},e.prototype.value=function(){return this.encodedName},e.prototype.clone=function(){return this},e.prototype.toString=function(){return this.encodedName},e.prototype.sizeInBytes=function(){return this.encodedName.length},e.prototype.copyBytesInto=function(t,r){return r+=de(this.encodedName,t,r),this.encodedName.length},e.of=function(t){var r=Wi(t),x=D1.get(r);return x||(x=new e(y1,r),D1.set(r,x)),x},e.Length=e.of("Length"),e.FlateDecode=e.of("FlateDecode"),e.Resources=e.of("Resources"),e.Font=e.of("Font"),e.XObject=e.of("XObject"),e.ExtGState=e.of("ExtGState"),e.Contents=e.of("Contents"),e.Type=e.of("Type"),e.Parent=e.of("Parent"),e.MediaBox=e.of("MediaBox"),e.Page=e.of("Page"),e.Annots=e.of("Annots"),e.TrimBox=e.of("TrimBox"),e.ArtBox=e.of("ArtBox"),e.BleedBox=e.of("BleedBox"),e.CropBox=e.of("CropBox"),e.Rotate=e.of("Rotate"),e.Title=e.of("Title"),e.Author=e.of("Author"),e.Subject=e.of("Subject"),e.Creator=e.of("Creator"),e.Keywords=e.of("Keywords"),e.Producer=e.of("Producer"),e.CreationDate=e.of("CreationDate"),e.ModDate=e.of("ModDate"),e})(Ce),Gi=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.asNull=function(){return null},e.prototype.clone=function(){return this},e.prototype.toString=function(){return"null"},e.prototype.sizeInBytes=function(){return 4},e.prototype.copyBytesInto=function(t,r){return t[r++]=k.n,t[r++]=k.u,t[r++]=k.l,t[r++]=k.l,4},e})(Ce);const Ae=new Gi;var D0=(function(n){e0(e,n);function e(t,r){var x=n.call(this)||this;return x.dict=t,x.context=r,x}return e.prototype.keys=function(){return Array.from(this.dict.keys())},e.prototype.values=function(){return Array.from(this.dict.values())},e.prototype.entries=function(){return Array.from(this.dict.entries())},e.prototype.set=function(t,r){this.dict.set(t,r)},e.prototype.get=function(t,r){r===void 0&&(r=!1);var x=this.dict.get(t);if(!(x===Ae&&!r))return x},e.prototype.has=function(t){var r=this.dict.get(t);return r!==void 0&&r!==Ae},e.prototype.lookupMaybe=function(t){for(var r,x=[],i=1;i<arguments.length;i++)x[i-1]=arguments[i];var o=x.includes(Ae),a=(r=this.context).lookupMaybe.apply(r,T0([this.get(t,o)],x));if(!(a===Ae&&!o))return a},e.prototype.lookup=function(t){for(var r,x=[],i=1;i<arguments.length;i++)x[i-1]=arguments[i];var o=x.includes(Ae),a=(r=this.context).lookup.apply(r,T0([this.get(t,o)],x));if(!(a===Ae&&!o))return a},e.prototype.delete=function(t){return this.dict.delete(t)},e.prototype.asMap=function(){return new Map(this.dict)},e.prototype.uniqueKey=function(t){t===void 0&&(t="");for(var r=this.keys(),x=w.of(this.context.addRandomSuffix(t,10));r.includes(x);)x=w.of(this.context.addRandomSuffix(t,10));return x},e.prototype.clone=function(t){for(var r=e.withContext(t||this.context),x=this.entries(),i=0,o=x.length;i<o;i++){var a=x[i],l=a[0],c=a[1];r.set(l,c)}return r},e.prototype.toString=function(){for(var t=`<<
`,r=this.entries(),x=0,i=r.length;x<i;x++){var o=r[x],a=o[0],l=o[1];t+=a.toString()+" "+l.toString()+`
`}return t+=">>",t},e.prototype.sizeInBytes=function(){for(var t=5,r=this.entries(),x=0,i=r.length;x<i;x++){var o=r[x],a=o[0],l=o[1];t+=a.sizeInBytes()+l.sizeInBytes()+2}return t},e.prototype.copyBytesInto=function(t,r){var x=r;t[r++]=k.LessThan,t[r++]=k.LessThan,t[r++]=k.Newline;for(var i=this.entries(),o=0,a=i.length;o<a;o++){var l=i[o],c=l[0],h=l[1];r+=c.copyBytesInto(t,r),t[r++]=k.Space,r+=h.copyBytesInto(t,r),t[r++]=k.Newline}return t[r++]=k.GreaterThan,t[r++]=k.GreaterThan,r-x},e.withContext=function(t){return new e(new Map,t)},e.fromMapWithContext=function(t,r){return new e(t,r)},e})(Ce),we=(function(n){e0(e,n);function e(t){var r=n.call(this)||this;return r.dict=t,r}return e.prototype.clone=function(t){throw new Me(this.constructor.name,"clone")},e.prototype.getContentsString=function(){throw new Me(this.constructor.name,"getContentsString")},e.prototype.getContents=function(){throw new Me(this.constructor.name,"getContents")},e.prototype.getContentsSize=function(){throw new Me(this.constructor.name,"getContentsSize")},e.prototype.updateDict=function(){var t=this.getContentsSize();this.dict.set(w.Length,B0.of(t))},e.prototype.sizeInBytes=function(){return this.updateDict(),this.dict.sizeInBytes()+this.getContentsSize()+18},e.prototype.toString=function(){this.updateDict();var t=this.dict.toString();return t+=`
stream
`,t+=this.getContentsString(),t+=`
endstream`,t},e.prototype.copyBytesInto=function(t,r){this.updateDict();var x=r;r+=this.dict.copyBytesInto(t,r),t[r++]=k.Newline,t[r++]=k.s,t[r++]=k.t,t[r++]=k.r,t[r++]=k.e,t[r++]=k.a,t[r++]=k.m,t[r++]=k.Newline;for(var i=this.getContents(),o=0,a=i.length;o<a;o++)t[r++]=i[o];return t[r++]=k.Newline,t[r++]=k.e,t[r++]=k.n,t[r++]=k.d,t[r++]=k.s,t[r++]=k.t,t[r++]=k.r,t[r++]=k.e,t[r++]=k.a,t[r++]=k.m,r-x},e})(Ce),k5=(function(n){e0(e,n);function e(t,r){var x=n.call(this,t)||this;return x.contents=r,x}return e.prototype.asUint8Array=function(){return this.contents.slice()},e.prototype.clone=function(t){return e.of(this.dict.clone(t),this.contents.slice())},e.prototype.getContentsString=function(){return nx(this.contents)},e.prototype.getContents=function(){return this.contents},e.prototype.getContentsSize=function(){return this.contents.length},e.of=function(t,r){return new e(t,r)},e})(we),m1={},w1=new Map,U0=(function(n){e0(e,n);function e(t,r,x){var i=this;if(t!==m1)throw new yr("PDFRef");return i=n.call(this)||this,i.objectNumber=r,i.generationNumber=x,i.tag=r+" "+x+" R",i}return e.prototype.clone=function(){return this},e.prototype.toString=function(){return this.tag},e.prototype.sizeInBytes=function(){return this.tag.length},e.prototype.copyBytesInto=function(t,r){return r+=de(this.tag,t,r),this.tag.length},e.of=function(t,r){r===void 0&&(r=0);var x=t+" "+r+" R",i=w1.get(x);return i||(i=new e(m1,t,r),w1.set(x,i)),i},e})(Ce),z0=(function(){function n(e,t){this.name=e,this.args=t||[]}return n.prototype.clone=function(e){for(var t=new Array(this.args.length),r=0,x=t.length;r<x;r++){var i=this.args[r];t[r]=i instanceof Ce?i.clone(e):i}return n.of(this.name,t)},n.prototype.toString=function(){for(var e="",t=0,r=this.args.length;t<r;t++)e+=String(this.args[t])+" ";return e+=this.name,e},n.prototype.sizeInBytes=function(){for(var e=0,t=0,r=this.args.length;t<r;t++){var x=this.args[t];e+=(x instanceof Ce?x.sizeInBytes():x.length)+1}return e+=this.name.length,e},n.prototype.copyBytesInto=function(e,t){for(var r=t,x=0,i=this.args.length;x<i;x++){var o=this.args[x];o instanceof Ce?t+=o.copyBytesInto(e,t):t+=de(o,e,t),e[t++]=k.Space}return t+=de(this.name,e,t),t-r},n.of=function(e,t){return new n(e,t)},n})(),cr;(function(n){n.NonStrokingColor="sc",n.NonStrokingColorN="scn",n.NonStrokingColorRgb="rg",n.NonStrokingColorGray="g",n.NonStrokingColorCmyk="k",n.NonStrokingColorspace="cs",n.StrokingColor="SC",n.StrokingColorN="SCN",n.StrokingColorRgb="RG",n.StrokingColorGray="G",n.StrokingColorCmyk="K",n.StrokingColorspace="CS",n.BeginMarkedContentSequence="BDC",n.BeginMarkedContent="BMC",n.EndMarkedContent="EMC",n.MarkedContentPointWithProps="DP",n.MarkedContentPoint="MP",n.DrawObject="Do",n.ConcatTransformationMatrix="cm",n.PopGraphicsState="Q",n.PushGraphicsState="q",n.SetFlatness="i",n.SetGraphicsStateParams="gs",n.SetLineCapStyle="J",n.SetLineDashPattern="d",n.SetLineJoinStyle="j",n.SetLineMiterLimit="M",n.SetLineWidth="w",n.SetTextMatrix="Tm",n.SetRenderingIntent="ri",n.AppendRectangle="re",n.BeginInlineImage="BI",n.BeginInlineImageData="ID",n.EndInlineImage="EI",n.ClipEvenOdd="W*",n.ClipNonZero="W",n.CloseAndStroke="s",n.CloseFillEvenOddAndStroke="b*",n.CloseFillNonZeroAndStroke="b",n.ClosePath="h",n.AppendBezierCurve="c",n.CurveToReplicateFinalPoint="y",n.CurveToReplicateInitialPoint="v",n.EndPath="n",n.FillEvenOddAndStroke="B*",n.FillEvenOdd="f*",n.FillNonZeroAndStroke="B",n.FillNonZero="f",n.LegacyFillNonZero="F",n.LineTo="l",n.MoveTo="m",n.ShadingFill="sh",n.StrokePath="S",n.BeginText="BT",n.EndText="ET",n.MoveText="Td",n.MoveTextSetLeading="TD",n.NextLine="T*",n.SetCharacterSpacing="Tc",n.SetFontAndSize="Tf",n.SetTextHorizontalScaling="Tz",n.SetTextLineHeight="TL",n.SetTextRenderingMode="Tr",n.SetTextRise="Ts",n.SetWordSpacing="Tw",n.ShowText="Tj",n.ShowTextAdjusted="TJ",n.ShowTextLine="'",n.ShowTextLineAndSpace='"',n.Type3D0="d0",n.Type3D1="d1",n.BeginCompatibilitySection="BX",n.EndCompatibilitySection="EX"})(cr||(cr={}));const M0=cr;var br=(function(n){e0(e,n);function e(t,r){var x=n.call(this,t)||this;return x.computeContents=function(){var i=x.getUnencodedContents();return x.encode?kn.deflate(i):i},x.encode=r,r&&t.set(w.of("Filter"),w.of("FlateDecode")),x.contentsCache=xt.populatedBy(x.computeContents),x}return e.prototype.getContents=function(){return this.contentsCache.access()},e.prototype.getContentsSize=function(){return this.contentsCache.access().length},e.prototype.getUnencodedContents=function(){throw new Me(this.constructor.name,"getUnencodedContents")},e})(we),F5=(function(n){e0(e,n);function e(t,r,x){x===void 0&&(x=!0);var i=n.call(this,t,x)||this;return i.operators=r,i}return e.prototype.push=function(){for(var t,r=[],x=0;x<arguments.length;x++)r[x]=arguments[x];(t=this.operators).push.apply(t,r)},e.prototype.clone=function(t){for(var r=new Array(this.operators.length),x=0,i=this.operators.length;x<i;x++)r[x]=this.operators[x].clone(t);var o=this,a=o.dict,l=o.encode;return e.of(a.clone(t),r,l)},e.prototype.getContentsString=function(){for(var t="",r=0,x=this.operators.length;r<x;r++)t+=this.operators[r]+`
`;return t},e.prototype.getUnencodedContents=function(){for(var t=new Uint8Array(this.getUnencodedContentsSize()),r=0,x=0,i=this.operators.length;x<i;x++)r+=this.operators[x].copyBytesInto(t,r),t[r++]=k.Newline;return t},e.prototype.getUnencodedContentsSize=function(){for(var t=0,r=0,x=this.operators.length;r<x;r++)t+=this.operators[r].sizeInBytes()+1;return t},e.of=function(t,r,x){return x===void 0&&(x=!0),new e(t,r,x)},e})(br),Xi=(function(){function n(e){this.seed=e}return n.prototype.nextInt=function(){var e=Math.sin(this.seed++)*1e4;return e-Math.floor(e)},n.withSeed=function(e){return new n(e)},n})(),Hi=function(n,e){var t=n[0],r=e[0];return t.objectNumber-r.objectNumber},sr=(function(){function n(){this.largestObjectNumber=0,this.header=Pn.forVersion(1,7),this.trailerInfo={},this.indirectObjects=new Map,this.rng=Xi.withSeed(1)}return n.prototype.assign=function(e,t){this.indirectObjects.set(e,t),e.objectNumber>this.largestObjectNumber&&(this.largestObjectNumber=e.objectNumber)},n.prototype.nextRef=function(){return this.largestObjectNumber+=1,U0.of(this.largestObjectNumber)},n.prototype.register=function(e){var t=this.nextRef();return this.assign(t,e),t},n.prototype.delete=function(e){return this.indirectObjects.delete(e)},n.prototype.lookupMaybe=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var x=t.includes(Ae),i=e instanceof U0?this.indirectObjects.get(e):e;if(!(!i||i===Ae&&!x)){for(var o=0,a=t.length;o<a;o++){var l=t[o];if(l===Ae){if(i===Ae)return i}else if(i instanceof l)return i}throw new dn(t,i)}},n.prototype.lookup=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var x=e instanceof U0?this.indirectObjects.get(e):e;if(t.length===0)return x;for(var i=0,o=t.length;i<o;i++){var a=t[i];if(a===Ae){if(x===Ae)return x}else if(x instanceof a)return x}throw new dn(t,x)},n.prototype.getObjectRef=function(e){for(var t=Array.from(this.indirectObjects.entries()),r=0,x=t.length;r<x;r++){var i=t[r],o=i[0],a=i[1];if(a===e)return o}},n.prototype.enumerateIndirectObjects=function(){return Array.from(this.indirectObjects.entries()).sort(Hi)},n.prototype.obj=function(e){if(e instanceof Ce)return e;if(e==null)return Ae;if(typeof e=="string")return w.of(e);if(typeof e=="number")return B0.of(e);if(typeof e=="boolean")return e?b5.True:b5.False;if(Array.isArray(e)){for(var t=I0.withContext(this),r=0,x=e.length;r<x;r++)t.push(this.obj(e[r]));return t}else{for(var i=D0.withContext(this),o=Object.keys(e),r=0,x=o.length;r<x;r++){var a=o[r],l=e[a];l!==void 0&&i.set(w.of(a),this.obj(l))}return i}},n.prototype.stream=function(e,t){return t===void 0&&(t={}),k5.of(this.obj(t),ar(e))},n.prototype.flateStream=function(e,t){return t===void 0&&(t={}),this.stream(kn.deflate(ar(e)),F0(F0({},t),{Filter:"FlateDecode"}))},n.prototype.contentStream=function(e,t){return t===void 0&&(t={}),F5.of(this.obj(t),e)},n.prototype.formXObject=function(e,t){return t===void 0&&(t={}),this.contentStream(e,F0(F0({BBox:this.obj([0,0,0,0]),Matrix:this.obj([1,0,0,1,0,0])},t),{Type:"XObject",Subtype:"Form"}))},n.prototype.getPushGraphicsStateContentStream=function(){if(this.pushGraphicsStateContentStreamRef)return this.pushGraphicsStateContentStreamRef;var e=this.obj({}),t=z0.of(M0.PushGraphicsState),r=F5.of(e,[t]);return this.pushGraphicsStateContentStreamRef=this.register(r),this.pushGraphicsStateContentStreamRef},n.prototype.getPopGraphicsStateContentStream=function(){if(this.popGraphicsStateContentStreamRef)return this.popGraphicsStateContentStreamRef;var e=this.obj({}),t=z0.of(M0.PopGraphicsState),r=F5.of(e,[t]);return this.popGraphicsStateContentStreamRef=this.register(r),this.popGraphicsStateContentStreamRef},n.prototype.addRandomSuffix=function(e,t){return t===void 0&&(t=4),e+"-"+Math.floor(this.rng.nextInt()*Math.pow(10,t))},n.create=function(){return new n},n})(),it=(function(n){e0(e,n);function e(t,r,x){x===void 0&&(x=!0);var i=n.call(this,t,r)||this;return i.normalized=!1,i.autoNormalizeCTM=x,i}return e.prototype.clone=function(t){for(var r=e.fromMapWithContext(new Map,t||this.context,this.autoNormalizeCTM),x=this.entries(),i=0,o=x.length;i<o;i++){var a=x[i],l=a[0],c=a[1];r.set(l,c)}return r},e.prototype.Parent=function(){return this.lookupMaybe(w.Parent,D0)},e.prototype.Contents=function(){return this.lookup(w.of("Contents"))},e.prototype.Annots=function(){return this.lookupMaybe(w.Annots,I0)},e.prototype.BleedBox=function(){return this.lookupMaybe(w.BleedBox,I0)},e.prototype.TrimBox=function(){return this.lookupMaybe(w.TrimBox,I0)},e.prototype.ArtBox=function(){return this.lookupMaybe(w.ArtBox,I0)},e.prototype.Resources=function(){var t=this.getInheritableAttribute(w.Resources);return this.context.lookupMaybe(t,D0)},e.prototype.MediaBox=function(){var t=this.getInheritableAttribute(w.MediaBox);return this.context.lookup(t,I0)},e.prototype.CropBox=function(){var t=this.getInheritableAttribute(w.CropBox);return this.context.lookupMaybe(t,I0)},e.prototype.Rotate=function(){var t=this.getInheritableAttribute(w.Rotate);return this.context.lookupMaybe(t,B0)},e.prototype.getInheritableAttribute=function(t){var r;return this.ascend(function(x){r||(r=x.get(t))}),r},e.prototype.setParent=function(t){this.set(w.Parent,t)},e.prototype.addContentStream=function(t){var r=this.normalizedEntries().Contents||this.context.obj([]);this.set(w.Contents,r),r.push(t)},e.prototype.wrapContentStreams=function(t,r){var x=this.Contents();return x instanceof I0?(x.insert(0,t),x.push(r),!0):!1},e.prototype.addAnnot=function(t){var r=this.normalizedEntries().Annots;r.push(t)},e.prototype.removeAnnot=function(t){var r=this.normalizedEntries().Annots,x=r.indexOf(t);x!==void 0&&r.remove(x)},e.prototype.setFontDictionary=function(t,r){var x=this.normalizedEntries().Font;x.set(t,r)},e.prototype.newFontDictionaryKey=function(t){var r=this.normalizedEntries().Font;return r.uniqueKey(t)},e.prototype.newFontDictionary=function(t,r){var x=this.newFontDictionaryKey(t);return this.setFontDictionary(x,r),x},e.prototype.setXObject=function(t,r){var x=this.normalizedEntries().XObject;x.set(t,r)},e.prototype.newXObjectKey=function(t){var r=this.normalizedEntries().XObject;return r.uniqueKey(t)},e.prototype.newXObject=function(t,r){var x=this.newXObjectKey(t);return this.setXObject(x,r),x},e.prototype.setExtGState=function(t,r){var x=this.normalizedEntries().ExtGState;x.set(t,r)},e.prototype.newExtGStateKey=function(t){var r=this.normalizedEntries().ExtGState;return r.uniqueKey(t)},e.prototype.newExtGState=function(t,r){var x=this.newExtGStateKey(t);return this.setExtGState(x,r),x},e.prototype.ascend=function(t){t(this);var r=this.Parent();r&&r.ascend(t)},e.prototype.normalize=function(){if(!this.normalized){var t=this.context,r=this.get(w.Contents),x=this.context.lookup(r);x instanceof we&&this.set(w.Contents,t.obj([r])),this.autoNormalizeCTM&&this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(),this.context.getPopGraphicsStateContentStream());var i=this.getInheritableAttribute(w.Resources),o=t.lookupMaybe(i,D0)||t.obj({});this.set(w.Resources,o);var a=o.lookupMaybe(w.Font,D0)||t.obj({});o.set(w.Font,a);var l=o.lookupMaybe(w.XObject,D0)||t.obj({});o.set(w.XObject,l);var c=o.lookupMaybe(w.ExtGState,D0)||t.obj({});o.set(w.ExtGState,c);var h=this.Annots()||t.obj([]);this.set(w.Annots,h),this.normalized=!0}},e.prototype.normalizedEntries=function(){this.normalize();var t=this.Annots(),r=this.Resources(),x=this.Contents();return{Annots:t,Resources:r,Contents:x,Font:r.lookup(w.Font,D0),XObject:r.lookup(w.XObject,D0),ExtGState:r.lookup(w.ExtGState,D0)}},e.InheritableEntries=["Resources","MediaBox","CropBox","Rotate"],e.withContextAndParent=function(t,r){var x=new Map;return x.set(w.Type,w.Page),x.set(w.Parent,r),x.set(w.Resources,t.obj({})),x.set(w.MediaBox,t.obj([0,0,612,792])),new e(x,t,!1)},e.fromMapWithContext=function(t,r,x){return x===void 0&&(x=!0),new e(t,r,x)},e})(D0),b1=(function(){function n(e,t){var r=this;this.traversedObjects=new Map,this.copy=function(x){return x instanceof it?r.copyPDFPage(x):x instanceof D0?r.copyPDFDict(x):x instanceof I0?r.copyPDFArray(x):x instanceof we?r.copyPDFStream(x):x instanceof U0?r.copyPDFIndirectObject(x):x.clone()},this.copyPDFPage=function(x){for(var i=x.clone(),o=it.InheritableEntries,a=0,l=o.length;a<l;a++){var c=w.of(o[a]),h=i.getInheritableAttribute(c);!i.get(c)&&h&&i.set(c,h)}return i.delete(w.of("Parent")),r.copyPDFDict(i)},this.copyPDFDict=function(x){if(r.traversedObjects.has(x))return r.traversedObjects.get(x);var i=x.clone(r.dest);r.traversedObjects.set(x,i);for(var o=x.entries(),a=0,l=o.length;a<l;a++){var c=o[a],h=c[0],s=c[1];i.set(h,r.copy(s))}return i},this.copyPDFArray=function(x){if(r.traversedObjects.has(x))return r.traversedObjects.get(x);var i=x.clone(r.dest);r.traversedObjects.set(x,i);for(var o=0,a=x.size();o<a;o++){var l=x.get(o);i.set(o,r.copy(l))}return i},this.copyPDFStream=function(x){if(r.traversedObjects.has(x))return r.traversedObjects.get(x);var i=x.clone(r.dest);r.traversedObjects.set(x,i);for(var o=x.dict.entries(),a=0,l=o.length;a<l;a++){var c=o[a],h=c[0],s=c[1];i.dict.set(h,r.copy(s))}return i},this.copyPDFIndirectObject=function(x){var i=r.traversedObjects.has(x);if(!i){var o=r.dest.nextRef();r.traversedObjects.set(x,o);var a=r.src.lookup(x);if(a){var l=r.copy(a);r.dest.assign(o,l)}}return r.traversedObjects.get(x)},this.src=e,this.dest=t}return n.for=function(e,t){return new n(e,t)},n})(),Fx=(function(){function n(e){this.subsections=e?[[e]]:[],this.chunkIdx=0,this.chunkLength=e?1:0}return n.prototype.addEntry=function(e,t){this.append({ref:e,offset:t,deleted:!1})},n.prototype.addDeletedEntry=function(e,t){this.append({ref:e,offset:t,deleted:!0})},n.prototype.toString=function(){for(var e=`xref
`,t=0,r=this.subsections.length;t<r;t++){var x=this.subsections[t];e+=x[0].ref.objectNumber+" "+x.length+`
`;for(var i=0,o=x.length;i<o;i++){var a=x[i];e+=We(String(a.offset),10,"0"),e+=" ",e+=We(String(a.ref.generationNumber),5,"0"),e+=" ",e+=a.deleted?"f":"n",e+=` 
`}}return e},n.prototype.sizeInBytes=function(){for(var e=5,t=0,r=this.subsections.length;t<r;t++){var x=this.subsections[t],i=x.length,o=x[0];e+=2,e+=String(o.ref.objectNumber).length,e+=String(i).length,e+=20*i}return e},n.prototype.copyBytesInto=function(e,t){var r=t;return e[t++]=k.x,e[t++]=k.r,e[t++]=k.e,e[t++]=k.f,e[t++]=k.Newline,t+=this.copySubsectionsIntoBuffer(this.subsections,e,t),t-r},n.prototype.copySubsectionsIntoBuffer=function(e,t,r){for(var x=r,i=e.length,o=0;o<i;o++){var a=this.subsections[o],l=String(a[0].ref.objectNumber);r+=de(l,t,r),t[r++]=k.Space;var c=String(a.length);r+=de(c,t,r),t[r++]=k.Newline,r+=this.copyEntriesIntoBuffer(a,t,r)}return r-x},n.prototype.copyEntriesIntoBuffer=function(e,t,r){for(var x=e.length,i=0;i<x;i++){var o=e[i],a=We(String(o.offset),10,"0");r+=de(a,t,r),t[r++]=k.Space;var l=We(String(o.ref.generationNumber),5,"0");r+=de(l,t,r),t[r++]=k.Space,t[r++]=o.deleted?k.f:k.n,t[r++]=k.Space,t[r++]=k.Newline}return 20*x},n.prototype.append=function(e){if(this.chunkLength===0){this.subsections.push([e]),this.chunkIdx=0,this.chunkLength=1;return}var t=this.subsections[this.chunkIdx],r=t[this.chunkLength-1];e.ref.objectNumber-r.ref.objectNumber>1?(this.subsections.push([e]),this.chunkIdx+=1,this.chunkLength=1):(t.push(e),this.chunkLength+=1)},n.create=function(){return new n({ref:U0.of(0,65535),offset:0,deleted:!0})},n.createEmpty=function(){return new n},n})(),kr=(function(){function n(e){this.lastXRefOffset=String(e)}return n.prototype.toString=function(){return`startxref
`+this.lastXRefOffset+`
%%EOF`},n.prototype.sizeInBytes=function(){return 16+this.lastXRefOffset.length},n.prototype.copyBytesInto=function(e,t){var r=t;return e[t++]=k.s,e[t++]=k.t,e[t++]=k.a,e[t++]=k.r,e[t++]=k.t,e[t++]=k.x,e[t++]=k.r,e[t++]=k.e,e[t++]=k.f,e[t++]=k.Newline,t+=de(this.lastXRefOffset,e,t),e[t++]=k.Newline,e[t++]=k.Percent,e[t++]=k.Percent,e[t++]=k.E,e[t++]=k.O,e[t++]=k.F,t-r},n.forLastCrossRefSectionOffset=function(e){return new n(e)},n})(),Zi=(function(){function n(e){this.dict=e}return n.prototype.toString=function(){return`trailer
`+this.dict.toString()},n.prototype.sizeInBytes=function(){return 8+this.dict.sizeInBytes()},n.prototype.copyBytesInto=function(e,t){var r=t;return e[t++]=k.t,e[t++]=k.r,e[t++]=k.a,e[t++]=k.i,e[t++]=k.l,e[t++]=k.e,e[t++]=k.r,e[t++]=k.Newline,t+=this.dict.copyBytesInto(e,t),t-r},n.of=function(e){return new n(e)},n})(),gx=(function(n){e0(e,n);function e(t,r,x){x===void 0&&(x=!0);var i=n.call(this,t.obj({}),x)||this;return i.objects=r,i.offsets=i.computeObjectOffsets(),i.offsetsString=i.computeOffsetsString(),i.dict.set(w.of("Type"),w.of("ObjStm")),i.dict.set(w.of("N"),B0.of(i.objects.length)),i.dict.set(w.of("First"),B0.of(i.offsetsString.length)),i}return e.prototype.getObjectsCount=function(){return this.objects.length},e.prototype.clone=function(t){return e.withContextAndObjects(t||this.dict.context,this.objects.slice(),this.encode)},e.prototype.getContentsString=function(){for(var t=this.offsetsString,r=0,x=this.objects.length;r<x;r++){var i=this.objects[r],o=i[1];t+=o+`
`}return t},e.prototype.getUnencodedContents=function(){for(var t=new Uint8Array(this.getUnencodedContentsSize()),r=de(this.offsetsString,t,0),x=0,i=this.objects.length;x<i;x++){var o=this.objects[x],a=o[1];r+=a.copyBytesInto(t,r),t[r++]=k.Newline}return t},e.prototype.getUnencodedContentsSize=function(){return this.offsetsString.length+hn(this.offsets)[1]+hn(this.objects)[1].sizeInBytes()+1},e.prototype.computeOffsetsString=function(){for(var t="",r=0,x=this.offsets.length;r<x;r++){var i=this.offsets[r],o=i[0],a=i[1];t+=o+" "+a+" "}return t},e.prototype.computeObjectOffsets=function(){for(var t=0,r=new Array(this.objects.length),x=0,i=this.objects.length;x<i;x++){var o=this.objects[x],a=o[0],l=o[1];r[x]=[a.objectNumber,t],t+=l.sizeInBytes()+1}return r},e.withContextAndObjects=function(t,r,x){return x===void 0&&(x=!0),new e(t,r,x)},e})(br),Ax=(function(){function n(e,t){var r=this;this.parsedObjects=0,this.shouldWaitForTick=function(x){return r.parsedObjects+=x,r.parsedObjects%r.objectsPerTick===0},this.context=e,this.objectsPerTick=t}return n.prototype.serializeToBuffer=function(){return w0(this,void 0,void 0,function(){var e,t,r,x,i,o,a,l,c,h,s,u,f,v,C,F,p;return b0(this,function(S){switch(S.label){case 0:return[4,this.computeBufferSize()];case 1:e=S.sent(),t=e.size,r=e.header,x=e.indirectObjects,i=e.xref,o=e.trailerDict,a=e.trailer,l=0,c=new Uint8Array(t),l+=r.copyBytesInto(c,l),c[l++]=k.Newline,c[l++]=k.Newline,h=0,s=x.length,S.label=2;case 2:return h<s?(u=x[h],f=u[0],v=u[1],C=String(f.objectNumber),l+=de(C,c,l),c[l++]=k.Space,F=String(f.generationNumber),l+=de(F,c,l),c[l++]=k.Space,c[l++]=k.o,c[l++]=k.b,c[l++]=k.j,c[l++]=k.Newline,l+=v.copyBytesInto(c,l),c[l++]=k.Newline,c[l++]=k.e,c[l++]=k.n,c[l++]=k.d,c[l++]=k.o,c[l++]=k.b,c[l++]=k.j,c[l++]=k.Newline,c[l++]=k.Newline,p=v instanceof gx?v.getObjectsCount():1,this.shouldWaitForTick(p)?[4,$t()]:[3,4]):[3,5];case 3:S.sent(),S.label=4;case 4:return h++,[3,2];case 5:return i&&(l+=i.copyBytesInto(c,l),c[l++]=k.Newline),o&&(l+=o.copyBytesInto(c,l),c[l++]=k.Newline,c[l++]=k.Newline),l+=a.copyBytesInto(c,l),[2,c]}})})},n.prototype.computeIndirectObjectSize=function(e){var t=e[0],r=e[1],x=t.sizeInBytes()+3,i=r.sizeInBytes()+9;return x+i},n.prototype.createTrailerDict=function(){return this.context.obj({Size:this.context.largestObjectNumber+1,Root:this.context.trailerInfo.Root,Encrypt:this.context.trailerInfo.Encrypt,Info:this.context.trailerInfo.Info,ID:this.context.trailerInfo.ID})},n.prototype.computeBufferSize=function(){return w0(this,void 0,void 0,function(){var e,t,r,x,i,o,a,l,c,h,s;return b0(this,function(u){switch(u.label){case 0:e=Pn.forVersion(1,7),t=e.sizeInBytes()+2,r=Fx.create(),x=this.context.enumerateIndirectObjects(),i=0,o=x.length,u.label=1;case 1:return i<o?(a=x[i],l=a[0],r.addEntry(l,t),t+=this.computeIndirectObjectSize(a),this.shouldWaitForTick(1)?[4,$t()]:[3,3]):[3,4];case 2:u.sent(),u.label=3;case 3:return i++,[3,1];case 4:return c=t,t+=r.sizeInBytes()+1,h=Zi.of(this.createTrailerDict()),t+=h.sizeInBytes()+2,s=kr.forLastCrossRefSectionOffset(c),t+=s.sizeInBytes(),[2,{size:t,header:e,indirectObjects:x,xref:r,trailerDict:h,trailer:s}]}})})},n.forContext=function(e,t){return new n(e,t)},n})(),yx=(function(n){e0(e,n);function e(t){var r=n.call(this)||this;return r.data=t,r}return e.prototype.clone=function(){return e.of(this.data.slice())},e.prototype.toString=function(){return"PDFInvalidObject("+this.data.length+" bytes)"},e.prototype.sizeInBytes=function(){return this.data.length},e.prototype.copyBytesInto=function(t,r){for(var x=this.data.length,i=0;i<x;i++)t[r++]=this.data[i];return x},e.of=function(t){return new e(t)},e})(Ce),ut;(function(n){n[n.Deleted=0]="Deleted",n[n.Uncompressed=1]="Uncompressed",n[n.Compressed=2]="Compressed"})(ut||(ut={}));var Yi=(function(n){e0(e,n);function e(t,r,x){x===void 0&&(x=!0);var i=n.call(this,t,x)||this;return i.computeIndex=function(){for(var o=[],a=0,l=0,c=i.entries.length;l<c;l++){var h=i.entries[l],s=i.entries[l-1];l===0?o.push(h.ref.objectNumber):h.ref.objectNumber-s.ref.objectNumber>1&&(o.push(a),o.push(h.ref.objectNumber),a=0),a+=1}return o.push(a),o},i.computeEntryTuples=function(){for(var o=new Array(i.entries.length),a=0,l=i.entries.length;a<l;a++){var c=i.entries[a];if(c.type===ut.Deleted){var h=c.type,s=c.nextFreeObjectNumber,u=c.ref;o[a]=[h,s,u.generationNumber]}if(c.type===ut.Uncompressed){var h=c.type,f=c.offset,u=c.ref;o[a]=[h,f,u.generationNumber]}if(c.type===ut.Compressed){var h=c.type,v=c.objectStreamRef,C=c.index;o[a]=[h,v.objectNumber,C]}}return o},i.computeMaxEntryByteWidths=function(){for(var o=i.entryTuplesCache.access(),a=[0,0,0],l=0,c=o.length;l<c;l++){var h=o[l],s=h[0],u=h[1],f=h[2],v=rn(s),C=rn(u),F=rn(f);v>a[0]&&(a[0]=v),C>a[1]&&(a[1]=C),F>a[2]&&(a[2]=F)}return a},i.entries=r||[],i.entryTuplesCache=xt.populatedBy(i.computeEntryTuples),i.maxByteWidthsCache=xt.populatedBy(i.computeMaxEntryByteWidths),i.indexCache=xt.populatedBy(i.computeIndex),t.set(w.of("Type"),w.of("XRef")),i}return e.prototype.addDeletedEntry=function(t,r){var x=ut.Deleted;this.entries.push({type:x,ref:t,nextFreeObjectNumber:r}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},e.prototype.addUncompressedEntry=function(t,r){var x=ut.Uncompressed;this.entries.push({type:x,ref:t,offset:r}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},e.prototype.addCompressedEntry=function(t,r,x){var i=ut.Compressed;this.entries.push({type:i,ref:t,objectStreamRef:r,index:x}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},e.prototype.clone=function(t){var r=this,x=r.dict,i=r.entries,o=r.encode;return e.of(x.clone(t),i.slice(),o)},e.prototype.getContentsString=function(){for(var t=this.entryTuplesCache.access(),r=this.maxByteWidthsCache.access(),x="",i=0,o=t.length;i<o;i++){for(var a=t[i],l=a[0],c=a[1],h=a[2],s=Ut(Wt(l)),u=Ut(Wt(c)),f=Ut(Wt(h)),v=r[0]-1;v>=0;v--)x+=(s[v]||0).toString(2);for(var v=r[1]-1;v>=0;v--)x+=(u[v]||0).toString(2);for(var v=r[2]-1;v>=0;v--)x+=(f[v]||0).toString(2)}return x},e.prototype.getUnencodedContents=function(){for(var t=this.entryTuplesCache.access(),r=this.maxByteWidthsCache.access(),x=new Uint8Array(this.getUnencodedContentsSize()),i=0,o=0,a=t.length;o<a;o++){for(var l=t[o],c=l[0],h=l[1],s=l[2],u=Ut(Wt(c)),f=Ut(Wt(h)),v=Ut(Wt(s)),C=r[0]-1;C>=0;C--)x[i++]=u[C]||0;for(var C=r[1]-1;C>=0;C--)x[i++]=f[C]||0;for(var C=r[2]-1;C>=0;C--)x[i++]=v[C]||0}return x},e.prototype.getUnencodedContentsSize=function(){var t=this.maxByteWidthsCache.access(),r=P2(t);return r*this.entries.length},e.prototype.updateDict=function(){n.prototype.updateDict.call(this);var t=this.maxByteWidthsCache.access(),r=this.indexCache.access(),x=this.dict.context;this.dict.set(w.of("W"),x.obj(t)),this.dict.set(w.of("Index"),x.obj(r))},e.create=function(t,r){r===void 0&&(r=!0);var x=new e(t,[],r);return x.addDeletedEntry(U0.of(0,65535),0),x},e.of=function(t,r,x){return x===void 0&&(x=!0),new e(t,r,x)},e})(br),Ji=(function(n){e0(e,n);function e(t,r,x,i){var o=n.call(this,t,r)||this;return o.encodeStreams=x,o.objectsPerStream=i,o}return e.prototype.computeBufferSize=function(){return w0(this,void 0,void 0,function(){var t,r,x,i,o,a,l,c,v,C,h,p,s,u,F,f,v,C,F,p,S,y,D,b;return b0(this,function(A){switch(A.label){case 0:t=this.context.largestObjectNumber+1,r=Pn.forVersion(1,7),x=r.sizeInBytes()+2,i=Yi.create(this.createTrailerDict(),this.encodeStreams),o=[],a=[],l=[],c=this.context.enumerateIndirectObjects(),v=0,C=c.length,A.label=1;case 1:return v<C?(h=c[v],p=h[0],s=h[1],u=p===this.context.trailerInfo.Encrypt||s instanceof we||s instanceof yx||p.generationNumber!==0,u?(o.push(h),i.addUncompressedEntry(p,x),x+=this.computeIndirectObjectSize(h),this.shouldWaitForTick(1)?[4,$t()]:[3,3]):[3,4]):[3,6];case 2:A.sent(),A.label=3;case 3:return[3,5];case 4:F=hn(a),f=hn(l),(!F||F.length%this.objectsPerStream===0)&&(F=[],a.push(F),f=U0.of(t++),l.push(f)),i.addCompressedEntry(p,f,F.length),F.push(h),A.label=5;case 5:return v++,[3,1];case 6:v=0,C=a.length,A.label=7;case 7:return v<C?(F=a[v],p=l[v],S=gx.withContextAndObjects(this.context,F,this.encodeStreams),i.addUncompressedEntry(p,x),x+=this.computeIndirectObjectSize([p,S]),o.push([p,S]),this.shouldWaitForTick(F.length)?[4,$t()]:[3,9]):[3,10];case 8:A.sent(),A.label=9;case 9:return v++,[3,7];case 10:return y=U0.of(t++),i.dict.set(w.of("Size"),B0.of(t)),i.addUncompressedEntry(y,x),D=x,x+=this.computeIndirectObjectSize([y,i]),o.push([y,i]),b=kr.forLastCrossRefSectionOffset(D),x+=b.sizeInBytes(),[2,{size:x,header:r,indirectObjects:o,trailer:b}]}})})},e.forContext=function(t,r,x,i){return x===void 0&&(x=!0),i===void 0&&(i=50),new e(t,r,x,i)},e})(Ax),u0=(function(n){e0(e,n);function e(t){var r=n.call(this)||this;return r.value=t,r}return e.prototype.asBytes=function(){for(var t=this.value+(this.value.length%2===1?"0":""),r=t.length,x=new Uint8Array(t.length/2),i=0,o=0;i<r;){var a=parseInt(t.substring(i,i+2),16);x[o]=a,i+=2,o+=1}return x},e.prototype.decodeText=function(){var t=this.asBytes();return lx(t)?ix(t):Cx(t)},e.prototype.decodeDate=function(){var t=this.decodeText(),r=tx(t);if(!r)throw new px(t);return r},e.prototype.asString=function(){return this.value},e.prototype.clone=function(){return e.of(this.value)},e.prototype.toString=function(){return"<"+this.value+">"},e.prototype.sizeInBytes=function(){return this.value.length+2},e.prototype.copyBytesInto=function(t,r){return t[r++]=k.LessThan,r+=de(this.value,t,r),t[r++]=k.GreaterThan,this.value.length+2},e.of=function(t){return new e(t)},e.fromText=function(t){for(var r=O2(t),x="",i=0,o=r.length;i<o;i++)x+=z5(r[i],4);return new e(x)},e})(Ce),fn=(function(){function n(e,t){this.encoding=e===w5.ZapfDingbats?X5.ZapfDingbats:e===w5.Symbol?X5.Symbol:X5.WinAnsi,this.font=vi.load(e),this.fontName=this.font.FontName,this.customName=t}return n.prototype.encodeText=function(e){for(var t=this.encodeTextAsGlyphs(e),r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]=bn(t[x].code);return u0.of(r.join(""))},n.prototype.widthOfTextAtSize=function(e,t){for(var r=this.encodeTextAsGlyphs(e),x=0,i=0,o=r.length;i<o;i++){var a=r[i].name,l=(r[i+1]||{}).name,c=this.font.getXAxisKerningForPair(a,l)||0;x+=this.widthOfGlyph(a)+c}var h=t/1e3;return x*h},n.prototype.heightOfFontAtSize=function(e,t){t===void 0&&(t={});var r=t.descender,x=r===void 0?!0:r,i=this.font,o=i.Ascender,a=i.Descender,l=i.FontBBox,c=o||l[3],h=a||l[1],s=c-h;return x||(s+=a||0),s/1e3*e},n.prototype.sizeOfFontAtHeight=function(e){var t=this.font,r=t.Ascender,x=t.Descender,i=t.FontBBox,o=r||i[3],a=x||i[1];return 1e3*e/(o-a)},n.prototype.embedIntoContext=function(e,t){var r=e.obj({Type:"Font",Subtype:"Type1",BaseFont:this.customName||this.fontName,Encoding:this.encoding===X5.WinAnsi?"WinAnsiEncoding":void 0});return t?(e.assign(t,r),t):e.register(r)},n.prototype.widthOfGlyph=function(e){return this.font.getWidthOfGlyph(e)||250},n.prototype.encodeTextAsGlyphs=function(e){for(var t=Array.from(e),r=new Array(t.length),x=0,i=t.length;x<i;x++){var o=p2(t[x]);r[x]=this.encoding.encodeUnicodeCodePoint(o)}return r},n.for=function(e,t){return new n(e,t)},n})(),Qi=function(n,e){for(var t=new Array(n.length),r=0,x=n.length;r<x;r++){var i=n[r],o=k1(xn(e(i))),a=k1.apply(void 0,i.codePoints.map($i));t[r]=[o,a]}return _i(t)},_i=function(n){return`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
`+n.length+` beginbfchar
`+n.map(function(e){var t=e[0],r=e[1];return t+" "+r}).join(`
`)+`
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`},k1=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return"<"+n.join("")+">"},xn=function(n){return z5(n,4)},$i=function(n){if(R2(n))return xn(n);if(N2(n)){var e=rx(n),t=xx(n);return""+xn(e)+xn(t)}var r=bn(n),x="0x"+r+" is not a valid UTF-8 or UTF-16 codepoint.";throw new Error(x)},eo=function(n){var e=0,t=function(r){e|=1<<r-1};return n.fixedPitch&&t(1),n.serif&&t(2),t(3),n.script&&t(4),n.nonsymbolic&&t(6),n.italic&&t(7),n.allCap&&t(17),n.smallCap&&t(18),n.forceBold&&t(19),e},to=function(n){var e=n["OS/2"]?n["OS/2"].sFamilyClass:0,t=eo({fixedPitch:n.post.isFixedPitch,serif:1<=e&&e<=7,script:e===10,italic:n.head.macStyle.italic});return t},V0=(function(n){e0(e,n);function e(t){var r=n.call(this)||this;return r.value=t,r}return e.prototype.asBytes=function(){for(var t=[],r="",x=!1,i=function(s){s!==void 0&&t.push(s),x=!1},o=0,a=this.value.length;o<a;o++){var l=this.value[o],c=p0(l),h=this.value[o+1];x?c===k.Newline||c===k.CarriageReturn?i():c===k.n?i(k.Newline):c===k.r?i(k.CarriageReturn):c===k.t?i(k.Tab):c===k.b?i(k.Backspace):c===k.f?i(k.FormFeed):c===k.LeftParen?i(k.LeftParen):c===k.RightParen?i(k.RightParen):c===k.Backspace?i(k.BackSlash):c>=k.Zero&&c<=k.Seven?(r+=l,(r.length===3||!(h>="0"&&h<="7"))&&(i(parseInt(r,8)),r="")):i(c):c===k.BackSlash?x=!0:i(c)}return new Uint8Array(t)},e.prototype.decodeText=function(){var t=this.asBytes();return lx(t)?ix(t):Cx(t)},e.prototype.decodeDate=function(){var t=this.decodeText(),r=tx(t);if(!r)throw new px(t);return r},e.prototype.asString=function(){return this.value},e.prototype.clone=function(){return e.of(this.value)},e.prototype.toString=function(){return"("+this.value+")"},e.prototype.sizeInBytes=function(){return this.value.length+2},e.prototype.copyBytesInto=function(t,r){return t[r++]=k.LeftParen,r+=de(this.value,t,r),t[r++]=k.RightParen,this.value.length+2},e.of=function(t){return new e(t)},e.fromDate=function(t){var r=We(String(t.getUTCFullYear()),4,"0"),x=We(String(t.getUTCMonth()+1),2,"0"),i=We(String(t.getUTCDate()),2,"0"),o=We(String(t.getUTCHours()),2,"0"),a=We(String(t.getUTCMinutes()),2,"0"),l=We(String(t.getUTCSeconds()),2,"0");return new e("D:"+r+x+i+o+a+l+"Z")},e})(Ce),Sr=(function(){function n(e,t,r,x){var i=this;this.allGlyphsInFontSortedById=function(){for(var o=new Array(i.font.characterSet.length),a=0,l=o.length;a<l;a++){var c=i.font.characterSet[a];o[a]=i.font.glyphForCodePoint(c)}return q2(o.sort(S2),function(h){return h.id})},this.font=e,this.scale=1e3/this.font.unitsPerEm,this.fontData=t,this.fontName=this.font.postscriptName||"Font",this.customName=r,this.fontFeatures=x,this.baseFontName="",this.glyphCache=xt.populatedBy(this.allGlyphsInFontSortedById)}return n.for=function(e,t,r,x){return w0(this,void 0,void 0,function(){var i;return b0(this,function(o){switch(o.label){case 0:return[4,e.create(t)];case 1:return i=o.sent(),[2,new n(i,t,r,x)]}})})},n.prototype.encodeText=function(e){for(var t=this.font.layout(e,this.fontFeatures).glyphs,r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]=z5(t[x].id,4);return u0.of(r.join(""))},n.prototype.widthOfTextAtSize=function(e,t){for(var r=this.font.layout(e,this.fontFeatures).glyphs,x=0,i=0,o=r.length;i<o;i++)x+=r[i].advanceWidth*this.scale;var a=t/1e3;return x*a},n.prototype.heightOfFontAtSize=function(e,t){t===void 0&&(t={});var r=t.descender,x=r===void 0?!0:r,i=this.font,o=i.ascent,a=i.descent,l=i.bbox,c=(o||l.maxY)*this.scale,h=(a||l.minY)*this.scale,s=c-h;return x||(s-=Math.abs(a)||0),s/1e3*e},n.prototype.sizeOfFontAtHeight=function(e){var t=this.font,r=t.ascent,x=t.descent,i=t.bbox,o=(r||i.maxY)*this.scale,a=(x||i.minY)*this.scale;return 1e3*e/(o-a)},n.prototype.embedIntoContext=function(e,t){return this.baseFontName=this.customName||e.addRandomSuffix(this.fontName),this.embedFontDict(e,t)},n.prototype.embedFontDict=function(e,t){return w0(this,void 0,void 0,function(){var r,x,i;return b0(this,function(o){switch(o.label){case 0:return[4,this.embedCIDFontDict(e)];case 1:return r=o.sent(),x=this.embedUnicodeCmap(e),i=e.obj({Type:"Font",Subtype:"Type0",BaseFont:this.baseFontName,Encoding:"Identity-H",DescendantFonts:[r],ToUnicode:x}),t?(e.assign(t,i),[2,t]):[2,e.register(i)]}})})},n.prototype.isCFF=function(){return this.font.cff},n.prototype.embedCIDFontDict=function(e){return w0(this,void 0,void 0,function(){var t,r;return b0(this,function(x){switch(x.label){case 0:return[4,this.embedFontDescriptor(e)];case 1:return t=x.sent(),r=e.obj({Type:"Font",Subtype:this.isCFF()?"CIDFontType0":"CIDFontType2",CIDToGIDMap:"Identity",BaseFont:this.baseFontName,CIDSystemInfo:{Registry:V0.of("Adobe"),Ordering:V0.of("Identity"),Supplement:0},FontDescriptor:t,W:this.computeWidths()}),[2,e.register(r)]}})})},n.prototype.embedFontDescriptor=function(e){return w0(this,void 0,void 0,function(){var t,r,x,i,o,a,l,c,h,s,u,f,v,C,F;return b0(this,function(p){switch(p.label){case 0:return[4,this.embedFontStream(e)];case 1:return t=p.sent(),r=this.scale,x=this.font,i=x.italicAngle,o=x.ascent,a=x.descent,l=x.capHeight,c=x.xHeight,h=this.font.bbox,s=h.minX,u=h.minY,f=h.maxX,v=h.maxY,C=e.obj((F={Type:"FontDescriptor",FontName:this.baseFontName,Flags:to(this.font),FontBBox:[s*r,u*r,f*r,v*r],ItalicAngle:i,Ascent:o*r,Descent:a*r,CapHeight:(l||o)*r,XHeight:(c||0)*r,StemV:0},F[this.isCFF()?"FontFile3":"FontFile2"]=t,F)),[2,e.register(C)]}})})},n.prototype.serializeFont=function(){return w0(this,void 0,void 0,function(){return b0(this,function(e){return[2,this.fontData]})})},n.prototype.embedFontStream=function(e){return w0(this,void 0,void 0,function(){var t,r,x;return b0(this,function(i){switch(i.label){case 0:return x=(r=e).flateStream,[4,this.serializeFont()];case 1:return t=x.apply(r,[i.sent(),{Subtype:this.isCFF()?"CIDFontType0C":void 0}]),[2,e.register(t)]}})})},n.prototype.embedUnicodeCmap=function(e){var t=Qi(this.glyphCache.access(),this.glyphId.bind(this)),r=e.flateStream(t);return e.register(r)},n.prototype.glyphId=function(e){return e?e.id:-1},n.prototype.computeWidths=function(){for(var e=this.glyphCache.access(),t=[],r=[],x=0,i=e.length;x<i;x++){var o=e[x],a=e[x-1],l=this.glyphId(o),c=this.glyphId(a);x===0?t.push(l):l-c!==1&&(t.push(r),t.push(l),r=[]),r.push(o.advanceWidth*this.scale)}return t.push(r),t},n})(),no=(function(n){e0(e,n);function e(t,r,x,i){var o=n.call(this,t,r,x,i)||this;return o.subset=o.font.createSubset(),o.glyphs=[],o.glyphCache=xt.populatedBy(function(){return o.glyphs}),o.glyphIdMap=new Map,o}return e.for=function(t,r,x,i){return w0(this,void 0,void 0,function(){var o;return b0(this,function(a){switch(a.label){case 0:return[4,t.create(r)];case 1:return o=a.sent(),[2,new e(o,r,x,i)]}})})},e.prototype.encodeText=function(t){for(var r=this.font.layout(t,this.fontFeatures).glyphs,x=new Array(r.length),i=0,o=r.length;i<o;i++){var a=r[i],l=this.subset.includeGlyph(a);this.glyphs[l-1]=a,this.glyphIdMap.set(a.id,l),x[i]=z5(l,4)}return this.glyphCache.invalidate(),u0.of(x.join(""))},e.prototype.isCFF=function(){return this.subset.cff},e.prototype.glyphId=function(t){return t?this.glyphIdMap.get(t.id):-1},e.prototype.serializeFont=function(){var t=this;return new Promise(function(r,x){var i=[];t.subset.encodeStream().on("data",function(o){return i.push(o)}).on("end",function(){return r(k2(i))}).on("error",function(o){return x(o)})})},e})(Sr),hr;(function(n){n.Source="Source",n.Data="Data",n.Alternative="Alternative",n.Supplement="Supplement",n.EncryptedPayload="EncryptedPayload",n.FormData="EncryptedPayload",n.Schema="Schema",n.Unspecified="Unspecified"})(hr||(hr={}));var ro=(function(){function n(e,t,r){r===void 0&&(r={}),this.fileData=e,this.fileName=t,this.options=r}return n.for=function(e,t,r){return r===void 0&&(r={}),new n(e,t,r)},n.prototype.embedIntoContext=function(e,t){return w0(this,void 0,void 0,function(){var r,x,i,o,a,l,c,h,s;return b0(this,function(u){return r=this.options,x=r.mimeType,i=r.description,o=r.creationDate,a=r.modificationDate,l=r.afRelationship,c=e.flateStream(this.fileData,{Type:"EmbeddedFile",Subtype:x??void 0,Params:{Size:this.fileData.length,CreationDate:o?V0.fromDate(o):void 0,ModDate:a?V0.fromDate(a):void 0}}),h=e.register(c),s=e.obj({Type:"Filespec",F:V0.of(this.fileName),UF:u0.fromText(this.fileName),EF:{F:h},Desc:i?u0.fromText(i):void 0,AFRelationship:l??void 0}),t?(e.assign(t,s),[2,t]):[2,e.register(s)]})})},n})(),S1=[65472,65473,65474,65475,65477,65478,65479,65480,65481,65482,65483,65484,65485,65486,65487],_t;(function(n){n.DeviceGray="DeviceGray",n.DeviceRGB="DeviceRGB",n.DeviceCMYK="DeviceCMYK"})(_t||(_t={}));var xo={1:_t.DeviceGray,3:_t.DeviceRGB,4:_t.DeviceCMYK},Dx=(function(){function n(e,t,r,x,i){this.imageData=e,this.bitsPerComponent=t,this.width=r,this.height=x,this.colorSpace=i}return n.for=function(e){return w0(this,void 0,void 0,function(){var t,r,x,i,o,a,l,c,h,s;return b0(this,function(u){if(t=new DataView(e.buffer),r=t.getUint16(0),r!==65496)throw new Error("SOI not found in JPEG");for(x=2;x<t.byteLength&&(i=t.getUint16(x),x+=2,!S1.includes(i));)x+=t.getUint16(x);if(!S1.includes(i))throw new Error("Invalid JPEG");if(x+=2,o=t.getUint8(x++),a=t.getUint16(x),x+=2,l=t.getUint16(x),x+=2,c=t.getUint8(x++),h=xo[c],!h)throw new Error("Unknown JPEG channel.");return s=h,[2,new n(e,o,l,a,s)]})})},n.prototype.embedIntoContext=function(e,t){return w0(this,void 0,void 0,function(){var r;return b0(this,function(x){return r=e.stream(this.imageData,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.bitsPerComponent,Width:this.width,Height:this.height,ColorSpace:this.colorSpace,Filter:"DCTDecode",Decode:this.colorSpace===_t.DeviceCMYK?[1,0,1,0,1,0,1,0]:void 0}),t?(e.assign(t,r),[2,t]):[2,e.register(r)]})})},n})(),Y={};Y.toRGBA8=function(n){var e=n.width,t=n.height;if(n.tabs.acTL==null)return[Y.toRGBA8.decodeImage(n.data,e,t,n).buffer];var r=[];n.frames[0].data==null&&(n.frames[0].data=n.data);for(var x=e*t*4,i=new Uint8Array(x),o=new Uint8Array(x),a=new Uint8Array(x),l=0;l<n.frames.length;l++){var c=n.frames[l],h=c.rect.x,s=c.rect.y,u=c.rect.width,f=c.rect.height,v=Y.toRGBA8.decodeImage(c.data,u,f,n);if(l!=0)for(var C=0;C<x;C++)a[C]=i[C];if(c.blend==0?Y._copyTile(v,u,f,i,e,t,h,s,0):c.blend==1&&Y._copyTile(v,u,f,i,e,t,h,s,1),r.push(i.buffer.slice(0)),c.dispose!=0){if(c.dispose==1)Y._copyTile(o,u,f,i,e,t,h,s,0);else if(c.dispose==2)for(var C=0;C<x;C++)i[C]=a[C]}}return r};Y.toRGBA8.decodeImage=function(n,e,t,r){var x=e*t,i=Y.decode._getBPP(r),o=Math.ceil(e*i/8),a=new Uint8Array(x*4),l=new Uint32Array(a.buffer),c=r.ctype,h=r.depth,s=Y._bin.readUshort;if(c==6){var u=x<<2;if(h==8)for(var f=0;f<u;f+=4)a[f]=n[f],a[f+1]=n[f+1],a[f+2]=n[f+2],a[f+3]=n[f+3];if(h==16)for(var f=0;f<u;f++)a[f]=n[f<<1]}else if(c==2){var v=r.tabs.tRNS;if(v==null){if(h==8)for(var f=0;f<x;f++){var C=f*3;l[f]=255<<24|n[C+2]<<16|n[C+1]<<8|n[C]}if(h==16)for(var f=0;f<x;f++){var C=f*6;l[f]=255<<24|n[C+4]<<16|n[C+2]<<8|n[C]}}else{var F=v[0],p=v[1],S=v[2];if(h==8)for(var f=0;f<x;f++){var y=f<<2,C=f*3;l[f]=255<<24|n[C+2]<<16|n[C+1]<<8|n[C],n[C]==F&&n[C+1]==p&&n[C+2]==S&&(a[y+3]=0)}if(h==16)for(var f=0;f<x;f++){var y=f<<2,C=f*6;l[f]=255<<24|n[C+4]<<16|n[C+2]<<8|n[C],s(n,C)==F&&s(n,C+2)==p&&s(n,C+4)==S&&(a[y+3]=0)}}}else if(c==3){var D=r.tabs.PLTE,b=r.tabs.tRNS,A=b?b.length:0;if(h==1)for(var g=0;g<t;g++)for(var P=g*o,T=g*e,f=0;f<e;f++){var y=T+f<<2,R=n[P+(f>>3)]>>7-((f&7)<<0)&1,N=3*R;a[y]=D[N],a[y+1]=D[N+1],a[y+2]=D[N+2],a[y+3]=R<A?b[R]:255}if(h==2)for(var g=0;g<t;g++)for(var P=g*o,T=g*e,f=0;f<e;f++){var y=T+f<<2,R=n[P+(f>>2)]>>6-((f&3)<<1)&3,N=3*R;a[y]=D[N],a[y+1]=D[N+1],a[y+2]=D[N+2],a[y+3]=R<A?b[R]:255}if(h==4)for(var g=0;g<t;g++)for(var P=g*o,T=g*e,f=0;f<e;f++){var y=T+f<<2,R=n[P+(f>>1)]>>4-((f&1)<<2)&15,N=3*R;a[y]=D[N],a[y+1]=D[N+1],a[y+2]=D[N+2],a[y+3]=R<A?b[R]:255}if(h==8)for(var f=0;f<x;f++){var y=f<<2,R=n[f],N=3*R;a[y]=D[N],a[y+1]=D[N+1],a[y+2]=D[N+2],a[y+3]=R<A?b[R]:255}}else if(c==4){if(h==8)for(var f=0;f<x;f++){var y=f<<2,L=f<<1,M=n[L];a[y]=M,a[y+1]=M,a[y+2]=M,a[y+3]=n[L+1]}if(h==16)for(var f=0;f<x;f++){var y=f<<2,L=f<<2,M=n[L];a[y]=M,a[y+1]=M,a[y+2]=M,a[y+3]=n[L+2]}}else if(c==0)for(var F=r.tabs.tRNS?r.tabs.tRNS:-1,g=0;g<t;g++){var K=g*o,X=g*e;if(h==1)for(var H=0;H<e;H++){var M=255*(n[K+(H>>>3)]>>>7-(H&7)&1),U=M==F*255?0:255;l[X+H]=U<<24|M<<16|M<<8|M}else if(h==2)for(var H=0;H<e;H++){var M=85*(n[K+(H>>>2)]>>>6-((H&3)<<1)&3),U=M==F*85?0:255;l[X+H]=U<<24|M<<16|M<<8|M}else if(h==4)for(var H=0;H<e;H++){var M=17*(n[K+(H>>>1)]>>>4-((H&1)<<2)&15),U=M==F*17?0:255;l[X+H]=U<<24|M<<16|M<<8|M}else if(h==8)for(var H=0;H<e;H++){var M=n[K+H],U=M==F?0:255;l[X+H]=U<<24|M<<16|M<<8|M}else if(h==16)for(var H=0;H<e;H++){var M=n[K+(H<<1)],U=s(n,K+(H<<f))==F?0:255;l[X+H]=U<<24|M<<16|M<<8|M}}return a};Y.decode=function(n){for(var e=new Uint8Array(n),t=8,r=Y._bin,x=r.readUshort,i=r.readUint,o={tabs:{},frames:[]},a=new Uint8Array(e.length),l=0,c,h=0,s=[137,80,78,71,13,10,26,10],u=0;u<8;u++)if(e[u]!=s[u])throw"The input is not a PNG file!";for(;t<e.length;){var f=r.readUint(e,t);t+=4;var v=r.readASCII(e,t,4);if(t+=4,v=="IHDR")Y.decode._IHDR(e,t,o);else if(v=="IDAT"){for(var u=0;u<f;u++)a[l+u]=e[t+u];l+=f}else if(v=="acTL")o.tabs[v]={num_frames:i(e,t),num_plays:i(e,t+4)},c=new Uint8Array(e.length);else if(v=="fcTL"){if(h!=0){var C=o.frames[o.frames.length-1];C.data=Y.decode._decompress(o,c.slice(0,h),C.rect.width,C.rect.height),h=0}var F={x:i(e,t+12),y:i(e,t+16),width:i(e,t+4),height:i(e,t+8)},p=x(e,t+22);p=x(e,t+20)/(p==0?100:p);var S={rect:F,delay:Math.round(p*1e3),dispose:e[t+24],blend:e[t+25]};o.frames.push(S)}else if(v=="fdAT"){for(var u=0;u<f-4;u++)c[h+u]=e[t+u+4];h+=f-4}else if(v=="pHYs")o.tabs[v]=[r.readUint(e,t),r.readUint(e,t+4),e[t+8]];else if(v=="cHRM"){o.tabs[v]=[];for(var u=0;u<8;u++)o.tabs[v].push(r.readUint(e,t+u*4))}else if(v=="tEXt"){o.tabs[v]==null&&(o.tabs[v]={});var y=r.nextZero(e,t),D=r.readASCII(e,t,y-t),b=r.readASCII(e,y+1,t+f-y-1);o.tabs[v][D]=b}else if(v=="iTXt"){o.tabs[v]==null&&(o.tabs[v]={});var y=0,A=t;y=r.nextZero(e,A);var D=r.readASCII(e,A,y-A);A=y+1,e[A],e[A+1],A+=2,y=r.nextZero(e,A),r.readASCII(e,A,y-A),A=y+1,y=r.nextZero(e,A),r.readUTF8(e,A,y-A),A=y+1;var b=r.readUTF8(e,A,f-(A-t));o.tabs[v][D]=b}else if(v=="PLTE")o.tabs[v]=r.readBytes(e,t,f);else if(v=="hIST"){var g=o.tabs.PLTE.length/3;o.tabs[v]=[];for(var u=0;u<g;u++)o.tabs[v].push(x(e,t+u*2))}else if(v=="tRNS")o.ctype==3?o.tabs[v]=r.readBytes(e,t,f):o.ctype==0?o.tabs[v]=x(e,t):o.ctype==2&&(o.tabs[v]=[x(e,t),x(e,t+2),x(e,t+4)]);else if(v=="gAMA")o.tabs[v]=r.readUint(e,t)/1e5;else if(v=="sRGB")o.tabs[v]=e[t];else if(v=="bKGD")o.ctype==0||o.ctype==4?o.tabs[v]=[x(e,t)]:o.ctype==2||o.ctype==6?o.tabs[v]=[x(e,t),x(e,t+2),x(e,t+4)]:o.ctype==3&&(o.tabs[v]=e[t]);else if(v=="IEND")break;t+=f,r.readUint(e,t),t+=4}if(h!=0){var C=o.frames[o.frames.length-1];C.data=Y.decode._decompress(o,c.slice(0,h),C.rect.width,C.rect.height),h=0}return o.data=Y.decode._decompress(o,a,o.width,o.height),delete o.compress,delete o.interlace,delete o.filter,o};Y.decode._decompress=function(n,e,t,r){var x=Y.decode._getBPP(n),i=Math.ceil(t*x/8),o=new Uint8Array((i+1+n.interlace)*r);return e=Y.decode._inflate(e,o),n.interlace==0?e=Y.decode._filterZero(e,n,0,t,r):n.interlace==1&&(e=Y.decode._readInterlace(e,n)),e};Y.decode._inflate=function(n,e){var t=Y.inflateRaw(new Uint8Array(n.buffer,2,n.length-6),e);return t};Y.inflateRaw=(function(){var n={};return n.H={},n.H.N=function(e,t){var r=Uint8Array,x=0,i=0,o=0,a=0,l=0,c=0,h=0,s=0,u=0,f,v;if(e[0]==3&&e[1]==0)return t||new r(0);var C=n.H,F=C.b,p=C.e,S=C.R,y=C.n,D=C.A,b=C.Z,A=C.m,g=t==null;for(g&&(t=new r(e.length>>>2<<3));x==0;){if(x=F(e,u,1),i=F(e,u+1,2),u+=3,i==0){(u&7)!=0&&(u+=8-(u&7));var P=(u>>>3)+4,T=e[P-4]|e[P-3]<<8;g&&(t=n.H.W(t,s+T)),t.set(new r(e.buffer,e.byteOffset+P,T),s),u=P+T<<3,s+=T;continue}if(g&&(t=n.H.W(t,s+(1<<17))),i==1&&(f=A.J,v=A.h,c=511,h=31),i==2){o=p(e,u,5)+257,a=p(e,u+5,5)+1,l=p(e,u+10,4)+4,u+=14;for(var R=1,N=0;N<38;N+=2)A.Q[N]=0,A.Q[N+1]=0;for(var N=0;N<l;N++){var L=p(e,u+N*3,3);A.Q[(A.X[N]<<1)+1]=L,L>R&&(R=L)}u+=3*l,y(A.Q,R),D(A.Q,R,A.u),f=A.w,v=A.d,u=S(A.u,(1<<R)-1,o+a,e,u,A.v);var M=C.V(A.v,0,o,A.C);c=(1<<M)-1;var K=C.V(A.v,o,a,A.D);h=(1<<K)-1,y(A.C,M),D(A.C,M,f),y(A.D,K),D(A.D,K,v)}for(;;){var X=f[b(e,u)&c];u+=X&15;var H=X>>>4;if(!(H>>>8))t[s++]=H;else{if(H==256)break;var U=s+H-254;if(H>264){var a0=A.q[H-257];U=s+(a0>>>3)+p(e,u,a0&7),u+=a0&7}var o0=v[b(e,u)&h];u+=o0&15;var A0=o0>>>4,t0=A.c[A0],d0=(t0>>>4)+F(e,u,t0&15);for(u+=t0&15;s<U;)t[s]=t[s++-d0],t[s]=t[s++-d0],t[s]=t[s++-d0],t[s]=t[s++-d0];s=U}}}return t.length==s?t:t.slice(0,s)},n.H.W=function(e,t){var r=e.length;if(t<=r)return e;var x=new Uint8Array(r<<1);return x.set(e,0),x},n.H.R=function(e,t,r,x,i,o){for(var a=n.H.e,l=n.H.Z,c=0;c<r;){var h=e[l(x,i)&t];i+=h&15;var s=h>>>4;if(s<=15)o[c]=s,c++;else{var u=0,f=0;s==16?(f=3+a(x,i,2),i+=2,u=o[c-1]):s==17?(f=3+a(x,i,3),i+=3):s==18&&(f=11+a(x,i,7),i+=7);for(var v=c+f;c<v;)o[c]=u,c++}}return i},n.H.V=function(e,t,r,x){for(var i=0,o=0,a=x.length>>>1;o<r;){var l=e[o+t];x[o<<1]=0,x[(o<<1)+1]=l,l>i&&(i=l),o++}for(;o<a;)x[o<<1]=0,x[(o<<1)+1]=0,o++;return i},n.H.n=function(e,t){for(var r=n.H.m,x=e.length,i,o,a,l,c,h=r.j,l=0;l<=t;l++)h[l]=0;for(l=1;l<x;l+=2)h[e[l]]++;var s=r.K;for(i=0,h[0]=0,o=1;o<=t;o++)i=i+h[o-1]<<1,s[o]=i;for(a=0;a<x;a+=2)c=e[a+1],c!=0&&(e[a]=s[c],s[c]++)},n.H.A=function(e,t,r){for(var x=e.length,i=n.H.m,o=i.r,a=0;a<x;a+=2)if(e[a+1]!=0)for(var l=a>>1,c=e[a+1],h=l<<4|c,s=t-c,u=e[a]<<s,f=u+(1<<s);u!=f;){var v=o[u]>>>15-t;r[v]=h,u++}},n.H.l=function(e,t){for(var r=n.H.m.r,x=15-t,i=0;i<e.length;i+=2){var o=e[i]<<t-e[i+1];e[i]=r[o]>>>x}},n.H.M=function(e,t,r){r=r<<(t&7);var x=t>>>3;e[x]|=r,e[x+1]|=r>>>8},n.H.I=function(e,t,r){r=r<<(t&7);var x=t>>>3;e[x]|=r,e[x+1]|=r>>>8,e[x+2]|=r>>>16},n.H.e=function(e,t,r){return(e[t>>>3]|e[(t>>>3)+1]<<8)>>>(t&7)&(1<<r)-1},n.H.b=function(e,t,r){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16)>>>(t&7)&(1<<r)-1},n.H.Z=function(e,t){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16)>>>(t&7)},n.H.i=function(e,t){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16|e[(t>>>3)+3]<<24)>>>(t&7)},n.H.m=(function(){var e=Uint16Array,t=Uint32Array;return{K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new e(65536),g:new e(32768)}})(),(function(){for(var e=n.H.m,t=32768,r=0;r<t;r++){var x=r;x=(x&2863311530)>>>1|(x&1431655765)<<1,x=(x&3435973836)>>>2|(x&858993459)<<2,x=(x&4042322160)>>>4|(x&252645135)<<4,x=(x&4278255360)>>>8|(x&16711935)<<8,e.r[r]=(x>>>16|x<<16)>>>17}function i(o,a,l){for(;a--!=0;)o.push(0,l)}for(var r=0;r<32;r++)e.q[r]=e.S[r]<<3|e.T[r],e.c[r]=e.p[r]<<4|e.z[r];i(e._,144,8),i(e._,112,9),i(e._,24,7),i(e._,8,8),n.H.n(e._,9),n.H.A(e._,9,e.J),n.H.l(e._,9),i(e.$,32,5),n.H.n(e.$,5),n.H.A(e.$,5,e.h),n.H.l(e.$,5),i(e.Q,19,0),i(e.C,286,0),i(e.D,30,0),i(e.v,320,0)})(),n.H.N})();Y.decode._readInterlace=function(n,e){for(var t=e.width,r=e.height,x=Y.decode._getBPP(e),i=x>>3,o=Math.ceil(t*x/8),a=new Uint8Array(r*o),l=0,c=[0,0,4,0,2,0,1],h=[0,4,0,2,0,1,0],s=[8,8,8,4,4,2,2],u=[8,8,4,4,2,2,1],f=0;f<7;){for(var v=s[f],C=u[f],F=0,p=0,S=c[f];S<r;)S+=v,p++;for(var y=h[f];y<t;)y+=C,F++;var D=Math.ceil(F*x/8);Y.decode._filterZero(n,e,l,F,p);for(var b=0,A=c[f];A<r;){for(var g=h[f],P=l+b*D<<3;g<t;){if(x==1){var T=n[P>>3];T=T>>7-(P&7)&1,a[A*o+(g>>3)]|=T<<7-((g&7)<<0)}if(x==2){var T=n[P>>3];T=T>>6-(P&7)&3,a[A*o+(g>>2)]|=T<<6-((g&3)<<1)}if(x==4){var T=n[P>>3];T=T>>4-(P&7)&15,a[A*o+(g>>1)]|=T<<4-((g&1)<<2)}if(x>=8)for(var R=A*o+g*i,N=0;N<i;N++)a[R+N]=n[(P>>3)+N];P+=x,g+=C}b++,A+=v}F*p!=0&&(l+=p*(1+D)),f=f+1}return a};Y.decode._getBPP=function(n){var e=[1,null,3,1,2,null,4][n.ctype];return e*n.depth};Y.decode._filterZero=function(n,e,t,r,x){var i=Y.decode._getBPP(e),o=Math.ceil(r*i/8),a=Y.decode._paeth;i=Math.ceil(i/8);var l=0,c=1,h=n[t],s=0;if(h>1&&(n[t]=[0,0,1][h-2]),h==3)for(s=i;s<o;s++)n[s+1]=n[s+1]+(n[s+1-i]>>>1)&255;for(var u=0;u<x;u++)if(l=t+u*o,c=l+u+1,h=n[c-1],s=0,h==0)for(;s<o;s++)n[l+s]=n[c+s];else if(h==1){for(;s<i;s++)n[l+s]=n[c+s];for(;s<o;s++)n[l+s]=n[c+s]+n[l+s-i]}else if(h==2)for(;s<o;s++)n[l+s]=n[c+s]+n[l+s-o];else if(h==3){for(;s<i;s++)n[l+s]=n[c+s]+(n[l+s-o]>>>1);for(;s<o;s++)n[l+s]=n[c+s]+(n[l+s-o]+n[l+s-i]>>>1)}else{for(;s<i;s++)n[l+s]=n[c+s]+a(0,n[l+s-o],0);for(;s<o;s++)n[l+s]=n[c+s]+a(n[l+s-i],n[l+s-o],n[l+s-i-o])}return n};Y.decode._paeth=function(n,e,t){var r=n+e-t,x=r-n,i=r-e,o=r-t;return x*x<=i*i&&x*x<=o*o?n:i*i<=o*o?e:t};Y.decode._IHDR=function(n,e,t){var r=Y._bin;t.width=r.readUint(n,e),e+=4,t.height=r.readUint(n,e),e+=4,t.depth=n[e],e++,t.ctype=n[e],e++,t.compress=n[e],e++,t.filter=n[e],e++,t.interlace=n[e],e++};Y._bin={nextZero:function(n,e){for(;n[e]!=0;)e++;return e},readUshort:function(n,e){return n[e]<<8|n[e+1]},writeUshort:function(n,e,t){n[e]=t>>8&255,n[e+1]=t&255},readUint:function(n,e){return n[e]*(256*256*256)+(n[e+1]<<16|n[e+2]<<8|n[e+3])},writeUint:function(n,e,t){n[e]=t>>24&255,n[e+1]=t>>16&255,n[e+2]=t>>8&255,n[e+3]=t&255},readASCII:function(n,e,t){for(var r="",x=0;x<t;x++)r+=String.fromCharCode(n[e+x]);return r},writeASCII:function(n,e,t){for(var r=0;r<t.length;r++)n[e+r]=t.charCodeAt(r)},readBytes:function(n,e,t){for(var r=[],x=0;x<t;x++)r.push(n[e+x]);return r},pad:function(n){return n.length<2?"0"+n:n},readUTF8:function(n,e,t){for(var r="",x,i=0;i<t;i++)r+="%"+Y._bin.pad(n[e+i].toString(16));try{x=decodeURIComponent(r)}catch{return Y._bin.readASCII(n,e,t)}return x}};Y._copyTile=function(n,e,t,r,x,i,o,a,l){for(var c=Math.min(e,x),h=Math.min(t,i),s=0,u=0,f=0;f<h;f++)for(var v=0;v<c;v++)if(o>=0&&a>=0?(s=f*e+v<<2,u=(a+f)*x+o+v<<2):(s=(-a+f)*e-o+v<<2,u=f*x+v<<2),l==0)r[u]=n[s],r[u+1]=n[s+1],r[u+2]=n[s+2],r[u+3]=n[s+3];else if(l==1){var C=n[s+3]*.00392156862745098,F=n[s]*C,p=n[s+1]*C,S=n[s+2]*C,y=r[u+3]*(1/255),D=r[u]*y,b=r[u+1]*y,A=r[u+2]*y,g=1-C,P=C+y*g,T=P==0?0:1/P;r[u+3]=255*P,r[u+0]=(F+D*g)*T,r[u+1]=(p+b*g)*T,r[u+2]=(S+A*g)*T}else if(l==2){var C=n[s+3],F=n[s],p=n[s+1],S=n[s+2],y=r[u+3],D=r[u],b=r[u+1],A=r[u+2];C==y&&F==D&&p==b&&S==A?(r[u]=0,r[u+1]=0,r[u+2]=0,r[u+3]=0):(r[u]=F,r[u+1]=p,r[u+2]=S,r[u+3]=C)}else if(l==3){var C=n[s+3],F=n[s],p=n[s+1],S=n[s+2],y=r[u+3],D=r[u],b=r[u+1],A=r[u+2];if(C==y&&F==D&&p==b&&S==A)continue;if(C<220&&y>20)return!1}return!0};Y.encode=function(n,e,t,r,x,i,o){r==null&&(r=0),o==null&&(o=!1);var a=Y.encode.compress(n,e,t,r,[!1,!1,!1,0,o]);return Y.encode.compressPNG(a,-1),Y.encode._main(a,e,t,x,i)};Y.encodeLL=function(n,e,t,r,x,i,o,a){for(var l={ctype:0+(r==1?0:2)+(x==0?0:4),depth:i,frames:[]},c=(r+x)*i,h=c*e,s=0;s<n.length;s++)l.frames.push({rect:{x:0,y:0,width:e,height:t},img:new Uint8Array(n[s]),blend:0,dispose:1,bpp:Math.ceil(c/8),bpl:Math.ceil(h/8)});Y.encode.compressPNG(l,0,!0);var u=Y.encode._main(l,e,t,o,a);return u};Y.encode._main=function(n,e,t,r,x){x==null&&(x={});var i=Y.crc.crc,o=Y._bin.writeUint,a=Y._bin.writeUshort,l=Y._bin.writeASCII,c=8,h=n.frames.length>1,s=!1,u=33+(h?20:0);if(x.sRGB!=null&&(u+=13),x.pHYs!=null&&(u+=21),n.ctype==3){for(var f=n.plte.length,v=0;v<f;v++)n.plte[v]>>>24!=255&&(s=!0);u+=8+f*3+4+(s?8+f*1+4:0)}for(var C=0;C<n.frames.length;C++){var F=n.frames[C];h&&(u+=38),u+=F.cimg.length+12,C!=0&&(u+=4)}u+=12;for(var p=new Uint8Array(u),S=[137,80,78,71,13,10,26,10],v=0;v<8;v++)p[v]=S[v];if(o(p,c,13),c+=4,l(p,c,"IHDR"),c+=4,o(p,c,e),c+=4,o(p,c,t),c+=4,p[c]=n.depth,c++,p[c]=n.ctype,c++,p[c]=0,c++,p[c]=0,c++,p[c]=0,c++,o(p,c,i(p,c-17,17)),c+=4,x.sRGB!=null&&(o(p,c,1),c+=4,l(p,c,"sRGB"),c+=4,p[c]=x.sRGB,c++,o(p,c,i(p,c-5,5)),c+=4),x.pHYs!=null&&(o(p,c,9),c+=4,l(p,c,"pHYs"),c+=4,o(p,c,x.pHYs[0]),c+=4,o(p,c,x.pHYs[1]),c+=4,p[c]=x.pHYs[2],c++,o(p,c,i(p,c-13,13)),c+=4),h&&(o(p,c,8),c+=4,l(p,c,"acTL"),c+=4,o(p,c,n.frames.length),c+=4,o(p,c,x.loop!=null?x.loop:0),c+=4,o(p,c,i(p,c-12,12)),c+=4),n.ctype==3){var f=n.plte.length;o(p,c,f*3),c+=4,l(p,c,"PLTE"),c+=4;for(var v=0;v<f;v++){var y=v*3,D=n.plte[v],b=D&255,A=D>>>8&255,g=D>>>16&255;p[c+y+0]=b,p[c+y+1]=A,p[c+y+2]=g}if(c+=f*3,o(p,c,i(p,c-f*3-4,f*3+4)),c+=4,s){o(p,c,f),c+=4,l(p,c,"tRNS"),c+=4;for(var v=0;v<f;v++)p[c+v]=n.plte[v]>>>24&255;c+=f,o(p,c,i(p,c-f-4,f+4)),c+=4}}for(var P=0,C=0;C<n.frames.length;C++){var F=n.frames[C];h&&(o(p,c,26),c+=4,l(p,c,"fcTL"),c+=4,o(p,c,P++),c+=4,o(p,c,F.rect.width),c+=4,o(p,c,F.rect.height),c+=4,o(p,c,F.rect.x),c+=4,o(p,c,F.rect.y),c+=4,a(p,c,r[C]),c+=2,a(p,c,1e3),c+=2,p[c]=F.dispose,c++,p[c]=F.blend,c++,o(p,c,i(p,c-30,30)),c+=4);var T=F.cimg,f=T.length;o(p,c,f+(C==0?0:4)),c+=4;var R=c;l(p,c,C==0?"IDAT":"fdAT"),c+=4,C!=0&&(o(p,c,P++),c+=4),p.set(T,c),c+=f,o(p,c,i(p,R,c-R)),c+=4}return o(p,c,0),c+=4,l(p,c,"IEND"),c+=4,o(p,c,i(p,c-4,4)),c+=4,p.buffer};Y.encode.compressPNG=function(n,e,t){for(var r=0;r<n.frames.length;r++){var x=n.frames[r];x.rect.width;var i=x.rect.height,o=new Uint8Array(i*x.bpl+i);x.cimg=Y.encode._filterZero(x.img,i,x.bpp,x.bpl,o,e,t)}};Y.encode.compress=function(n,e,t,r,x){for(var i=x[0],o=x[1],a=x[2],l=x[3],c=x[4],h=6,s=8,u=255,f=0;f<n.length;f++)for(var v=new Uint8Array(n[f]),C=v.length,F=0;F<C;F+=4)u&=v[F+3];var p=u!=255,S=Y.encode.framize(n,e,t,i,o,a),y={},D=[],b=[];if(r!=0){for(var A=[],F=0;F<S.length;F++)A.push(S[F].img.buffer);for(var g=Y.encode.concatRGBA(A),P=Y.quantize(g,r),T=0,R=new Uint8Array(P.abuf),F=0;F<S.length;F++){var N=S[F].img,L=N.length;b.push(new Uint8Array(P.inds.buffer,T>>2,L>>2));for(var f=0;f<L;f+=4)N[f]=R[T+f],N[f+1]=R[T+f+1],N[f+2]=R[T+f+2],N[f+3]=R[T+f+3];T+=L}for(var F=0;F<P.plte.length;F++)D.push(P.plte[F].est.rgba)}else for(var f=0;f<S.length;f++){var M=S[f],K=new Uint32Array(M.img.buffer),X=M.rect.width,C=K.length,H=new Uint8Array(C);b.push(H);for(var F=0;F<C;F++){var U=K[F];if(F!=0&&U==K[F-1])H[F]=H[F-1];else if(F>X&&U==K[F-X])H[F]=H[F-X];else{var a0=y[U];if(a0==null&&(y[U]=a0=D.length,D.push(U),D.length>=300))break;H[F]=a0}}}var o0=D.length;o0<=256&&c==!1&&(o0<=2?s=1:o0<=4?s=2:o0<=16?s=4:s=8,s=Math.max(s,l));for(var f=0;f<S.length;f++){var M=S[f];M.rect.x,M.rect.y;var X=M.rect.width,A0=M.rect.height,t0=M.img;new Uint32Array(t0.buffer);var d0=4*X,S0=4;if(o0<=256&&c==!1){d0=Math.ceil(s*X/8);for(var x0=new Uint8Array(d0*A0),K0=b[f],E0=0;E0<A0;E0++){var F=E0*d0,y0=E0*X;if(s==8)for(var l0=0;l0<X;l0++)x0[F+l0]=K0[y0+l0];else if(s==4)for(var l0=0;l0<X;l0++)x0[F+(l0>>1)]|=K0[y0+l0]<<4-(l0&1)*4;else if(s==2)for(var l0=0;l0<X;l0++)x0[F+(l0>>2)]|=K0[y0+l0]<<6-(l0&3)*2;else if(s==1)for(var l0=0;l0<X;l0++)x0[F+(l0>>3)]|=K0[y0+l0]<<7-(l0&7)*1}t0=x0,h=3,S0=1}else if(p==!1&&S.length==1){for(var x0=new Uint8Array(X*A0*3),G0=X*A0,F=0;F<G0;F++){var N=F*3,ce=F*4;x0[N]=t0[ce],x0[N+1]=t0[ce+1],x0[N+2]=t0[ce+2]}t0=x0,h=2,S0=3,d0=3*X}M.img=t0,M.bpl=d0,M.bpp=S0}return{ctype:h,depth:s,plte:D,frames:S}};Y.encode.framize=function(n,e,t,r,x,i){for(var o=[],a=0;a<n.length;a++){var l=new Uint8Array(n[a]),c=new Uint32Array(l.buffer),h,s=0,u=0,f=e,v=t,C=r?1:0;if(a!=0){for(var F=i||r||a==1||o[a-2].dispose!=0?1:2,p=0,S=1e9,y=0;y<F;y++){for(var M=new Uint8Array(n[a-1-y]),D=new Uint32Array(n[a-1-y]),b=e,A=t,g=-1,P=-1,T=0;T<t;T++)for(var R=0;R<e;R++){var N=T*e+R;c[N]!=D[N]&&(R<b&&(b=R),R>g&&(g=R),T<A&&(A=T),T>P&&(P=T))}g==-1&&(b=A=g=P=0),x&&((b&1)==1&&b--,(A&1)==1&&A--);var L=(g-b+1)*(P-A+1);L<S&&(S=L,p=y,s=b,u=A,f=g-b+1,v=P-A+1)}var M=new Uint8Array(n[a-1-p]);p==1&&(o[a-1].dispose=2),h=new Uint8Array(f*v*4),Y._copyTile(M,e,t,h,f,v,-s,-u,0),C=Y._copyTile(l,e,t,h,f,v,-s,-u,3)?1:0,C==1?Y.encode._prepareDiff(l,e,t,h,{x:s,y:u,width:f,height:v}):Y._copyTile(l,e,t,h,f,v,-s,-u,0)}else h=l.slice(0);o.push({rect:{x:s,y:u,width:f,height:v},img:h,blend:C,dispose:0})}if(r)for(var a=0;a<o.length;a++){var K=o[a];if(K.blend!=1){var X=K.rect,H=o[a-1].rect,U=Math.min(X.x,H.x),a0=Math.min(X.y,H.y),o0=Math.max(X.x+X.width,H.x+H.width),A0=Math.max(X.y+X.height,H.y+H.height),t0={x:U,y:a0,width:o0-U,height:A0-a0};o[a-1].dispose=1,a-1!=0&&Y.encode._updateFrame(n,e,t,o,a-1,t0,x),Y.encode._updateFrame(n,e,t,o,a,t0,x)}}var d0=0;if(n.length!=1)for(var N=0;N<o.length;N++){var K=o[N];d0+=K.rect.width*K.rect.height}return o};Y.encode._updateFrame=function(n,e,t,r,x,i,o){for(var a=Uint8Array,l=Uint32Array,c=new a(n[x-1]),h=new l(n[x-1]),s=x+1<n.length?new a(n[x+1]):null,u=new a(n[x]),f=new l(u.buffer),v=e,C=t,F=-1,p=-1,S=0;S<i.height;S++)for(var y=0;y<i.width;y++){var D=i.x+y,b=i.y+S,A=b*e+D,g=f[A];g==0||r[x-1].dispose==0&&h[A]==g&&(s==null||s[A*4+3]!=0)||(D<v&&(v=D),D>F&&(F=D),b<C&&(C=b),b>p&&(p=b))}F==-1&&(v=C=F=p=0),o&&((v&1)==1&&v--,(C&1)==1&&C--),i={x:v,y:C,width:F-v+1,height:p-C+1};var P=r[x];P.rect=i,P.blend=1,P.img=new Uint8Array(i.width*i.height*4),r[x-1].dispose==0?(Y._copyTile(c,e,t,P.img,i.width,i.height,-i.x,-i.y,0),Y.encode._prepareDiff(u,e,t,P.img,i)):Y._copyTile(u,e,t,P.img,i.width,i.height,-i.x,-i.y,0)};Y.encode._prepareDiff=function(n,e,t,r,x){Y._copyTile(n,e,t,r,x.width,x.height,-x.x,-x.y,2)};Y.encode._filterZero=function(n,e,t,r,x,i,o){var a=[],l=[0,1,2,3,4];i!=-1?l=[i]:(e*r>5e5||t==1)&&(l=[0]);var c;o&&(c={level:0});for(var h=o&&UZIP!=null?UZIP:kn,s=0;s<l.length;s++){for(var u=0;u<e;u++)Y.encode._filterLine(x,n,u,r,t,l[s]);a.push(h.deflate(x,c))}for(var f,v=1e9,s=0;s<a.length;s++)a[s].length<v&&(f=s,v=a[s].length);return a[f]};Y.encode._filterLine=function(n,e,t,r,x,i){var o=t*r,a=o+t,l=Y.decode._paeth;if(n[a]=i,a++,i==0)if(r<500)for(var c=0;c<r;c++)n[a+c]=e[o+c];else n.set(new Uint8Array(e.buffer,o,r),a);else if(i==1){for(var c=0;c<x;c++)n[a+c]=e[o+c];for(var c=x;c<r;c++)n[a+c]=e[o+c]-e[o+c-x]+256&255}else if(t==0){for(var c=0;c<x;c++)n[a+c]=e[o+c];if(i==2)for(var c=x;c<r;c++)n[a+c]=e[o+c];if(i==3)for(var c=x;c<r;c++)n[a+c]=e[o+c]-(e[o+c-x]>>1)+256&255;if(i==4)for(var c=x;c<r;c++)n[a+c]=e[o+c]-l(e[o+c-x],0,0)+256&255}else{if(i==2)for(var c=0;c<r;c++)n[a+c]=e[o+c]+256-e[o+c-r]&255;if(i==3){for(var c=0;c<x;c++)n[a+c]=e[o+c]+256-(e[o+c-r]>>1)&255;for(var c=x;c<r;c++)n[a+c]=e[o+c]+256-(e[o+c-r]+e[o+c-x]>>1)&255}if(i==4){for(var c=0;c<x;c++)n[a+c]=e[o+c]+256-l(0,e[o+c-r],0)&255;for(var c=x;c<r;c++)n[a+c]=e[o+c]+256-l(e[o+c-x],e[o+c-r],e[o+c-x-r])&255}}};Y.crc={table:(function(){for(var n=new Uint32Array(256),e=0;e<256;e++){for(var t=e,r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;n[e]=t}return n})(),update:function(n,e,t,r){for(var x=0;x<r;x++)n=Y.crc.table[(n^e[t+x])&255]^n>>>8;return n},crc:function(n,e,t){return Y.crc.update(4294967295,n,e,t)^4294967295}};Y.quantize=function(n,e){var t=new Uint8Array(n),r=t.slice(0),x=new Uint32Array(r.buffer),i=Y.quantize.getKDtree(r,e),o=i[0],a=i[1];Y.quantize.planeDst;for(var l=t,c=x,h=l.length,s=new Uint8Array(t.length>>2),u=0;u<h;u+=4){var f=l[u]*.00392156862745098,v=l[u+1]*(1/255),C=l[u+2]*(1/255),F=l[u+3]*(1/255),p=Y.quantize.getNearest(o,f,v,C,F);s[u>>2]=p.ind,c[u>>2]=p.est.rgba}return{abuf:r.buffer,inds:s,plte:a}};Y.quantize.getKDtree=function(n,e,t){t==null&&(t=1e-4);var r=new Uint32Array(n.buffer),x={i0:0,i1:n.length,bst:null,est:null,tdst:0,left:null,right:null};x.bst=Y.quantize.stats(n,x.i0,x.i1),x.est=Y.quantize.estats(x.bst);for(var i=[x];i.length<e;){for(var o=0,a=0,l=0;l<i.length;l++)i[l].est.L>o&&(o=i[l].est.L,a=l);if(o<t)break;var c=i[a],h=Y.quantize.splitPixels(n,r,c.i0,c.i1,c.est.e,c.est.eMq255),s=c.i0>=h||c.i1<=h;if(s){c.est.L=0;continue}var u={i0:c.i0,i1:h,bst:null,est:null,tdst:0,left:null,right:null};u.bst=Y.quantize.stats(n,u.i0,u.i1),u.est=Y.quantize.estats(u.bst);var f={i0:h,i1:c.i1,bst:null,est:null,tdst:0,left:null,right:null};f.bst={R:[],m:[],N:c.bst.N-u.bst.N};for(var l=0;l<16;l++)f.bst.R[l]=c.bst.R[l]-u.bst.R[l];for(var l=0;l<4;l++)f.bst.m[l]=c.bst.m[l]-u.bst.m[l];f.est=Y.quantize.estats(f.bst),c.left=u,c.right=f,i[a]=u,i.push(f)}i.sort(function(v,C){return C.bst.N-v.bst.N});for(var l=0;l<i.length;l++)i[l].ind=l;return[x,i]};Y.quantize.getNearest=function(n,e,t,r,x){if(n.left==null)return n.tdst=Y.quantize.dist(n.est.q,e,t,r,x),n;var i=Y.quantize.planeDst(n.est,e,t,r,x),o=n.left,a=n.right;i>0&&(o=n.right,a=n.left);var l=Y.quantize.getNearest(o,e,t,r,x);if(l.tdst<=i*i)return l;var c=Y.quantize.getNearest(a,e,t,r,x);return c.tdst<l.tdst?c:l};Y.quantize.planeDst=function(n,e,t,r,x){var i=n.e;return i[0]*e+i[1]*t+i[2]*r+i[3]*x-n.eMq};Y.quantize.dist=function(n,e,t,r,x){var i=e-n[0],o=t-n[1],a=r-n[2],l=x-n[3];return i*i+o*o+a*a+l*l};Y.quantize.splitPixels=function(n,e,t,r,x,i){var o=Y.quantize.vecDot;for(r-=4;t<r;){for(;o(n,t,x)<=i;)t+=4;for(;o(n,r,x)>i;)r-=4;if(t>=r)break;var a=e[t>>2];e[t>>2]=e[r>>2],e[r>>2]=a,t+=4,r-=4}for(;o(n,t,x)>i;)t-=4;return t+4};Y.quantize.vecDot=function(n,e,t){return n[e]*t[0]+n[e+1]*t[1]+n[e+2]*t[2]+n[e+3]*t[3]};Y.quantize.stats=function(n,e,t){for(var r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],x=[0,0,0,0],i=t-e>>2,o=e;o<t;o+=4){var a=n[o]*.00392156862745098,l=n[o+1]*(1/255),c=n[o+2]*(1/255),h=n[o+3]*(1/255);x[0]+=a,x[1]+=l,x[2]+=c,x[3]+=h,r[0]+=a*a,r[1]+=a*l,r[2]+=a*c,r[3]+=a*h,r[5]+=l*l,r[6]+=l*c,r[7]+=l*h,r[10]+=c*c,r[11]+=c*h,r[15]+=h*h}return r[4]=r[1],r[8]=r[2],r[9]=r[6],r[12]=r[3],r[13]=r[7],r[14]=r[11],{R:r,m:x,N:i}};Y.quantize.estats=function(n){var e=n.R,t=n.m,r=n.N,x=t[0],i=t[1],o=t[2],a=t[3],l=r==0?0:1/r,c=[e[0]-x*x*l,e[1]-x*i*l,e[2]-x*o*l,e[3]-x*a*l,e[4]-i*x*l,e[5]-i*i*l,e[6]-i*o*l,e[7]-i*a*l,e[8]-o*x*l,e[9]-o*i*l,e[10]-o*o*l,e[11]-o*a*l,e[12]-a*x*l,e[13]-a*i*l,e[14]-a*o*l,e[15]-a*a*l],h=c,s=Y.M4,u=[.5,.5,.5,.5],f=0,v=0;if(r!=0)for(var C=0;C<10&&(u=s.multVec(h,u),v=Math.sqrt(s.dot(u,u)),u=s.sml(1/v,u),!(Math.abs(v-f)<1e-9));C++)f=v;var F=[x*l,i*l,o*l,a*l],p=s.dot(s.sml(255,F),u);return{Cov:c,q:F,e:u,L:f,eMq255:p,eMq:s.dot(u,F),rgba:(Math.round(255*F[3])<<24|Math.round(255*F[2])<<16|Math.round(255*F[1])<<8|Math.round(255*F[0])<<0)>>>0}};Y.M4={multVec:function(n,e){return[n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3],n[4]*e[0]+n[5]*e[1]+n[6]*e[2]+n[7]*e[3],n[8]*e[0]+n[9]*e[1]+n[10]*e[2]+n[11]*e[3],n[12]*e[0]+n[13]*e[1]+n[14]*e[2]+n[15]*e[3]]},dot:function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]},sml:function(n,e){return[n*e[0],n*e[1],n*e[2],n*e[3]]}};Y.encode.concatRGBA=function(n){for(var e=0,t=0;t<n.length;t++)e+=n[t].byteLength;for(var r=new Uint8Array(e),x=0,t=0;t<n.length;t++){for(var i=new Uint8Array(n[t]),o=i.length,a=0;a<o;a+=4){var l=i[a],c=i[a+1],h=i[a+2],s=i[a+3];s==0&&(l=c=h=0),r[x+a]=l,r[x+a+1]=c,r[x+a+2]=h,r[x+a+3]=s}x+=o}return r.buffer};var io=function(n){if(n===0)return Pt.Greyscale;if(n===2)return Pt.Truecolour;if(n===3)return Pt.IndexedColour;if(n===4)return Pt.GreyscaleWithAlpha;if(n===6)return Pt.TruecolourWithAlpha;throw new Error("Unknown color type: "+n)},oo=function(n){for(var e=Math.floor(n.length/4),t=new Uint8Array(e*3),r=new Uint8Array(e*1),x=0,i=0,o=0;x<n.length;)t[i++]=n[x++],t[i++]=n[x++],t[i++]=n[x++],r[o++]=n[x++];return{rgbChannel:t,alphaChannel:r}},Pt;(function(n){n.Greyscale="Greyscale",n.Truecolour="Truecolour",n.IndexedColour="IndexedColour",n.GreyscaleWithAlpha="GreyscaleWithAlpha",n.TruecolourWithAlpha="TruecolourWithAlpha"})(Pt||(Pt={}));var ao=(function(){function n(e){var t=Y.decode(e),r=Y.toRGBA8(t);if(r.length>1)throw new Error("Animated PNGs are not supported");var x=new Uint8Array(r[0]),i=oo(x),o=i.rgbChannel,a=i.alphaChannel;this.rgbChannel=o;var l=a.some(function(c){return c<255});l&&(this.alphaChannel=a),this.type=io(t.ctype),this.width=t.width,this.height=t.height,this.bitsPerComponent=8}return n.load=function(e){return new n(e)},n})(),mx=(function(){function n(e){this.image=e,this.bitsPerComponent=e.bitsPerComponent,this.width=e.width,this.height=e.height,this.colorSpace="DeviceRGB"}return n.for=function(e){return w0(this,void 0,void 0,function(){var t;return b0(this,function(r){return t=ao.load(e),[2,new n(t)]})})},n.prototype.embedIntoContext=function(e,t){return w0(this,void 0,void 0,function(){var r,x;return b0(this,function(i){return r=this.embedAlphaChannel(e),x=e.flateStream(this.image.rgbChannel,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.image.bitsPerComponent,Width:this.image.width,Height:this.image.height,ColorSpace:this.colorSpace,SMask:r}),t?(e.assign(t,x),[2,t]):[2,e.register(x)]})})},n.prototype.embedAlphaChannel=function(e){if(this.image.alphaChannel){var t=e.flateStream(this.image.alphaChannel,{Type:"XObject",Subtype:"Image",Height:this.image.height,Width:this.image.width,BitsPerComponent:this.image.bitsPerComponent,ColorSpace:"DeviceGray",Decode:[0,1]});return e.register(t)}},n})(),wx=(function(){function n(e,t,r){this.bytes=e,this.start=t||0,this.pos=this.start,this.end=t&&r?t+r:this.bytes.length}return Object.defineProperty(n.prototype,"length",{get:function(){return this.end-this.start},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isEmpty",{get:function(){return this.length===0},enumerable:!1,configurable:!0}),n.prototype.getByte=function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},n.prototype.getUint16=function(){var e=this.getByte(),t=this.getByte();return e===-1||t===-1?-1:(e<<8)+t},n.prototype.getInt32=function(){var e=this.getByte(),t=this.getByte(),r=this.getByte(),x=this.getByte();return(e<<24)+(t<<16)+(r<<8)+x},n.prototype.getBytes=function(e,t){t===void 0&&(t=!1);var r=this.bytes,x=this.pos,i=this.end;if(e){var a=x+e;a>i&&(a=i),this.pos=a;var o=r.subarray(x,a);return t?new Uint8ClampedArray(o):o}else{var o=r.subarray(x,i);return t?new Uint8ClampedArray(o):o}},n.prototype.peekByte=function(){var e=this.getByte();return this.pos--,e},n.prototype.peekBytes=function(e,t){t===void 0&&(t=!1);var r=this.getBytes(e,t);return this.pos-=r.length,r},n.prototype.skip=function(e){e||(e=1),this.pos+=e},n.prototype.reset=function(){this.pos=this.start},n.prototype.moveStart=function(){this.start=this.pos},n.prototype.makeSubStream=function(e,t){return new n(this.bytes,e,t)},n.prototype.decode=function(){return this.bytes},n})(),lo=new Uint8Array(0),O5=(function(){function n(e){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=lo,this.minBufferLength=512,e)for(;this.minBufferLength<e;)this.minBufferLength*=2}return Object.defineProperty(n.prototype,"isEmpty",{get:function(){for(;!this.eof&&this.bufferLength===0;)this.readBlock();return this.bufferLength===0},enumerable:!1,configurable:!0}),n.prototype.getByte=function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return-1;this.readBlock()}return this.buffer[this.pos++]},n.prototype.getUint16=function(){var e=this.getByte(),t=this.getByte();return e===-1||t===-1?-1:(e<<8)+t},n.prototype.getInt32=function(){var e=this.getByte(),t=this.getByte(),r=this.getByte(),x=this.getByte();return(e<<24)+(t<<16)+(r<<8)+x},n.prototype.getBytes=function(e,t){t===void 0&&(t=!1);var r,x=this.pos;if(e){for(this.ensureBuffer(x+e),r=x+e;!this.eof&&this.bufferLength<r;)this.readBlock();var i=this.bufferLength;r>i&&(r=i)}else{for(;!this.eof;)this.readBlock();r=this.bufferLength}this.pos=r;var o=this.buffer.subarray(x,r);return t&&!(o instanceof Uint8ClampedArray)?new Uint8ClampedArray(o):o},n.prototype.peekByte=function(){var e=this.getByte();return this.pos--,e},n.prototype.peekBytes=function(e,t){t===void 0&&(t=!1);var r=this.getBytes(e,t);return this.pos-=r.length,r},n.prototype.skip=function(e){e||(e=1),this.pos+=e},n.prototype.reset=function(){this.pos=0},n.prototype.makeSubStream=function(e,t){for(var r=e+t;this.bufferLength<=r&&!this.eof;)this.readBlock();return new wx(this.buffer,e,t)},n.prototype.decode=function(){for(;!this.eof;)this.readBlock();return this.buffer.subarray(0,this.bufferLength)},n.prototype.readBlock=function(){throw new Me(this.constructor.name,"readBlock")},n.prototype.ensureBuffer=function(e){var t=this.buffer;if(e<=t.byteLength)return t;for(var r=this.minBufferLength;r<e;)r*=2;var x=new Uint8Array(r);return x.set(t),this.buffer=x},n})(),q1=function(n){return n===32||n===9||n===13||n===10},co=(function(n){e0(e,n);function e(t,r){var x=n.call(this,r)||this;return x.stream=t,x.input=new Uint8Array(5),r&&(r=.8*r),x}return e.prototype.readBlock=function(){for(var t=126,r=122,x=-1,i=this.stream,o=i.getByte();q1(o);)o=i.getByte();if(o===x||o===t){this.eof=!0;return}var a=this.bufferLength,l,c;if(o===r){for(l=this.ensureBuffer(a+4),c=0;c<4;++c)l[a+c]=0;this.bufferLength+=4}else{var h=this.input;for(h[0]=o,c=1;c<5;++c){for(o=i.getByte();q1(o);)o=i.getByte();if(h[c]=o,o===x||o===t)break}if(l=this.ensureBuffer(a+c-1),this.bufferLength+=c-1,c<5){for(;c<5;++c)h[c]=117;this.eof=!0}var s=0;for(c=0;c<5;++c)s=s*85+(h[c]-33);for(c=3;c>=0;--c)l[a+c]=s&255,s>>=8}},e})(O5),so=(function(n){e0(e,n);function e(t,r){var x=n.call(this,r)||this;return x.stream=t,x.firstDigit=-1,r&&(r=.5*r),x}return e.prototype.readBlock=function(){var t=8e3,r=this.stream.getBytes(t);if(!r.length){this.eof=!0;return}for(var x=r.length+1>>1,i=this.ensureBuffer(this.bufferLength+x),o=this.bufferLength,a=this.firstDigit,l=0,c=r.length;l<c;l++){var h=r[l],s=void 0;if(h>=48&&h<=57)s=h&15;else if(h>=65&&h<=70||h>=97&&h<=102)s=(h&15)+9;else if(h===62){this.eof=!0;break}else continue;a<0?a=s:(i[o++]=a<<4|s,a=-1)}a>=0&&this.eof&&(i[o++]=a<<4,a=-1),this.firstDigit=a,this.bufferLength=o},e})(O5),P1=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ho=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),uo=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),fo=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],vo=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5],Eo=(function(n){e0(e,n);function e(t,r){var x=n.call(this,r)||this;x.stream=t;var i=t.getByte(),o=t.getByte();if(i===-1||o===-1)throw new Error("Invalid header in flate stream: "+i+", "+o);if((i&15)!==8)throw new Error("Unknown compression method in flate stream: "+i+", "+o);if(((i<<8)+o)%31!==0)throw new Error("Bad FCHECK in flate stream: "+i+", "+o);if(o&32)throw new Error("FDICT bit set in flate stream: "+i+", "+o);return x.codeSize=0,x.codeBuf=0,x}return e.prototype.readBlock=function(){var t,r,x=this.stream,i=this.getBits(3);if(i&1&&(this.eof=!0),i>>=1,i===0){var o=void 0;if((o=x.getByte())===-1)throw new Error("Bad block header in flate stream");var a=o;if((o=x.getByte())===-1)throw new Error("Bad block header in flate stream");if(a|=o<<8,(o=x.getByte())===-1)throw new Error("Bad block header in flate stream");var l=o;if((o=x.getByte())===-1)throw new Error("Bad block header in flate stream");if(l|=o<<8,l!==(~a&65535)&&(a!==0||l!==0))throw new Error("Bad uncompressed block length in flate stream");this.codeBuf=0,this.codeSize=0;var c=this.bufferLength;t=this.ensureBuffer(c+a);var h=c+a;if(this.bufferLength=h,a===0)x.peekByte()===-1&&(this.eof=!0);else for(var s=c;s<h;++s){if((o=x.getByte())===-1){this.eof=!0;break}t[s]=o}return}var u,f;if(i===1)u=fo,f=vo;else if(i===2){var v=this.getBits(5)+257,C=this.getBits(5)+1,F=this.getBits(4)+4,p=new Uint8Array(P1.length),S=void 0;for(S=0;S<F;++S)p[P1[S]]=this.getBits(3);var y=this.generateHuffmanTable(p);r=0,S=0;for(var D=v+C,b=new Uint8Array(D),A=void 0,g=void 0,P=void 0;S<D;){var T=this.getCode(y);if(T===16)A=2,g=3,P=r;else if(T===17)A=3,g=3,P=r=0;else if(T===18)A=7,g=11,P=r=0;else{b[S++]=r=T;continue}for(var R=this.getBits(A)+g;R-- >0;)b[S++]=P}u=this.generateHuffmanTable(b.subarray(0,v)),f=this.generateHuffmanTable(b.subarray(v,D))}else throw new Error("Unknown block type in flate stream");t=this.buffer;for(var N=t?t.length:0,L=this.bufferLength;;){var M=this.getCode(u);if(M<256){L+1>=N&&(t=this.ensureBuffer(L+1),N=t.length),t[L++]=M;continue}if(M===256){this.bufferLength=L;return}M-=257,M=ho[M];var K=M>>16;K>0&&(K=this.getBits(K)),r=(M&65535)+K,M=this.getCode(f),M=uo[M],K=M>>16,K>0&&(K=this.getBits(K));var X=(M&65535)+K;L+r>=N&&(t=this.ensureBuffer(L+r),N=t.length);for(var H=0;H<r;++H,++L)t[L]=t[L-X]}},e.prototype.getBits=function(t){for(var r=this.stream,x=this.codeSize,i=this.codeBuf,o;x<t;){if((o=r.getByte())===-1)throw new Error("Bad encoding in flate stream");i|=o<<x,x+=8}return o=i&(1<<t)-1,this.codeBuf=i>>t,this.codeSize=x-=t,o},e.prototype.getCode=function(t){for(var r=this.stream,x=t[0],i=t[1],o=this.codeSize,a=this.codeBuf,l;o<i&&(l=r.getByte())!==-1;)a|=l<<o,o+=8;var c=x[a&(1<<i)-1];typeof x=="number"&&console.log("FLATE:",c);var h=c>>16,s=c&65535;if(h<1||o<h)throw new Error("Bad encoding in flate stream");return this.codeBuf=a>>h,this.codeSize=o-h,s},e.prototype.generateHuffmanTable=function(t){var r=t.length,x=0,i;for(i=0;i<r;++i)t[i]>x&&(x=t[i]);for(var o=1<<x,a=new Int32Array(o),l=1,c=0,h=2;l<=x;++l,c<<=1,h<<=1)for(var s=0;s<r;++s)if(t[s]===l){var u=0,f=c;for(i=0;i<l;++i)u=u<<1|f&1,f>>=1;for(i=u;i<o;i+=h)a[i]=l<<16|s;++c}return[a,x]},e})(O5),Bo=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,r)||this;i.stream=t,i.cachedData=0,i.bitsCached=0;for(var o=4096,a={earlyChange:x,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(o),dictionaryLengths:new Uint16Array(o),dictionaryPrevCodes:new Uint16Array(o),currentSequence:new Uint8Array(o),currentSequenceLength:0},l=0;l<256;++l)a.dictionaryValues[l]=l,a.dictionaryLengths[l]=1;return i.lzwState=a,i}return e.prototype.readBlock=function(){var t=512,r=t*2,x=t,i,o,a,l=this.lzwState;if(l){var c=l.earlyChange,h=l.nextCode,s=l.dictionaryValues,u=l.dictionaryLengths,f=l.dictionaryPrevCodes,v=l.codeLength,C=l.prevCode,F=l.currentSequence,p=l.currentSequenceLength,S=0,y=this.bufferLength,D=this.ensureBuffer(this.bufferLength+r);for(i=0;i<t;i++){var b=this.readBits(v),A=p>0;if(!b||b<256)F[0]=b,p=1;else if(b>=258)if(b<h)for(p=u[b],o=p-1,a=b;o>=0;o--)F[o]=s[a],a=f[a];else F[p++]=F[0];else if(b===256){v=9,h=258,p=0;continue}else{this.eof=!0,delete this.lzwState;break}if(A&&(f[h]=C,u[h]=u[C]+1,s[h]=F[0],h++,v=h+c&h+c-1?v:Math.min(Math.log(h+c)/.6931471805599453+1,12)|0),C=b,S+=p,r<S){do r+=x;while(r<S);D=this.ensureBuffer(this.bufferLength+r)}for(o=0;o<p;o++)D[y++]=F[o]}l.nextCode=h,l.codeLength=v,l.prevCode=C,l.currentSequenceLength=p,this.bufferLength=y}},e.prototype.readBits=function(t){for(var r=this.bitsCached,x=this.cachedData;r<t;){var i=this.stream.getByte();if(i===-1)return this.eof=!0,null;x=x<<8|i,r+=8}return this.bitsCached=r-=t,this.cachedData=x,x>>>r&(1<<t)-1},e})(O5),Co=(function(n){e0(e,n);function e(t,r){var x=n.call(this,r)||this;return x.stream=t,x}return e.prototype.readBlock=function(){var t=this.stream.getBytes(2);if(!t||t.length<2||t[0]===128){this.eof=!0;return}var r,x=this.bufferLength,i=t[0];if(i<128){if(r=this.ensureBuffer(x+i+1),r[x++]=t[1],i>0){var o=this.stream.getBytes(i);r.set(o,x),x+=i}}else{i=257-i;var a=t[1];r=this.ensureBuffer(x+i+1);for(var l=0;l<i;l++)r[x++]=a}this.bufferLength=x},e})(O5),z1=function(n,e,t){if(e===w.of("FlateDecode"))return new Eo(n);if(e===w.of("LZWDecode")){var r=1;if(t instanceof D0){var x=t.lookup(w.of("EarlyChange"));x instanceof B0&&(r=x.asNumber())}return new Bo(n,void 0,r)}if(e===w.of("ASCII85Decode"))return new co(n);if(e===w.of("ASCIIHexDecode"))return new so(n);if(e===w.of("RunLengthDecode"))return new Co(n);throw new wi(e.asString())},bx=function(n){var e=n.dict,t=n.contents,r=new wx(t),x=e.lookup(w.of("Filter")),i=e.lookup(w.of("DecodeParms"));if(x instanceof w)r=z1(r,x,i);else if(x instanceof I0)for(var o=0,a=x.size();o<a;o++)r=z1(r,x.lookup(o,w),i&&i.lookupMaybe(o,D0));else if(x)throw new dn([w,I0],x);return r},po=function(n){var e=n.MediaBox(),t=e.lookup(2,B0).asNumber()-e.lookup(0,B0).asNumber(),r=e.lookup(3,B0).asNumber()-e.lookup(1,B0).asNumber();return{left:0,bottom:0,right:t,top:r}},Fo=function(n){return[1,0,0,1,-n.left,-n.bottom]},kx=(function(){function n(e,t,r){this.page=e;var x=t??po(e);this.width=x.right-x.left,this.height=x.top-x.bottom,this.boundingBox=x,this.transformationMatrix=r??Fo(x)}return n.for=function(e,t,r){return w0(this,void 0,void 0,function(){return b0(this,function(x){return[2,new n(e,t,r)]})})},n.prototype.embedIntoContext=function(e,t){return w0(this,void 0,void 0,function(){var r,x,i,o,a,l,c,h,s,u;return b0(this,function(f){if(r=this.page.normalizedEntries(),x=r.Contents,i=r.Resources,!x)throw new bi;return o=this.decodeContents(x),a=this.boundingBox,l=a.left,c=a.bottom,h=a.right,s=a.top,u=e.flateStream(o,{Type:"XObject",Subtype:"Form",FormType:1,BBox:[l,c,h,s],Matrix:this.transformationMatrix,Resources:i}),t?(e.assign(t,u),[2,t]):[2,e.register(u)]})})},n.prototype.decodeContents=function(e){for(var t=Uint8Array.of(k.Newline),r=[],x=0,i=e.size();x<i;x++){var o=e.lookup(x,we),a=void 0;if(o instanceof k5)a=bx(o).decode();else if(o instanceof F5)a=o.getUnencodedContents();else throw new ki(o);r.push(a,t)}return b2.apply(void 0,r)},n})(),Y5=function(n,e){if(n!==void 0)return e[n]},g5;(function(n){n.UseNone="UseNone",n.UseOutlines="UseOutlines",n.UseThumbs="UseThumbs",n.UseOC="UseOC"})(g5||(g5={}));var A5;(function(n){n.L2R="L2R",n.R2L="R2L"})(A5||(A5={}));var y5;(function(n){n.None="None",n.AppDefault="AppDefault"})(y5||(y5={}));var vn;(function(n){n.Simplex="Simplex",n.DuplexFlipShortEdge="DuplexFlipShortEdge",n.DuplexFlipLongEdge="DuplexFlipLongEdge"})(vn||(vn={}));var T1=(function(){function n(e){this.dict=e}return n.prototype.lookupBool=function(e){var t=this.dict.lookup(w.of(e));if(t instanceof b5)return t},n.prototype.lookupName=function(e){var t=this.dict.lookup(w.of(e));if(t instanceof w)return t},n.prototype.HideToolbar=function(){return this.lookupBool("HideToolbar")},n.prototype.HideMenubar=function(){return this.lookupBool("HideMenubar")},n.prototype.HideWindowUI=function(){return this.lookupBool("HideWindowUI")},n.prototype.FitWindow=function(){return this.lookupBool("FitWindow")},n.prototype.CenterWindow=function(){return this.lookupBool("CenterWindow")},n.prototype.DisplayDocTitle=function(){return this.lookupBool("DisplayDocTitle")},n.prototype.NonFullScreenPageMode=function(){return this.lookupName("NonFullScreenPageMode")},n.prototype.Direction=function(){return this.lookupName("Direction")},n.prototype.PrintScaling=function(){return this.lookupName("PrintScaling")},n.prototype.Duplex=function(){return this.lookupName("Duplex")},n.prototype.PickTrayByPDFSize=function(){return this.lookupBool("PickTrayByPDFSize")},n.prototype.PrintPageRange=function(){var e=this.dict.lookup(w.of("PrintPageRange"));if(e instanceof I0)return e},n.prototype.NumCopies=function(){var e=this.dict.lookup(w.of("NumCopies"));if(e instanceof B0)return e},n.prototype.getHideToolbar=function(){var e,t;return(t=(e=this.HideToolbar())===null||e===void 0?void 0:e.asBoolean())!==null&&t!==void 0?t:!1},n.prototype.getHideMenubar=function(){var e,t;return(t=(e=this.HideMenubar())===null||e===void 0?void 0:e.asBoolean())!==null&&t!==void 0?t:!1},n.prototype.getHideWindowUI=function(){var e,t;return(t=(e=this.HideWindowUI())===null||e===void 0?void 0:e.asBoolean())!==null&&t!==void 0?t:!1},n.prototype.getFitWindow=function(){var e,t;return(t=(e=this.FitWindow())===null||e===void 0?void 0:e.asBoolean())!==null&&t!==void 0?t:!1},n.prototype.getCenterWindow=function(){var e,t;return(t=(e=this.CenterWindow())===null||e===void 0?void 0:e.asBoolean())!==null&&t!==void 0?t:!1},n.prototype.getDisplayDocTitle=function(){var e,t;return(t=(e=this.DisplayDocTitle())===null||e===void 0?void 0:e.asBoolean())!==null&&t!==void 0?t:!1},n.prototype.getNonFullScreenPageMode=function(){var e,t,r=(e=this.NonFullScreenPageMode())===null||e===void 0?void 0:e.decodeText();return(t=Y5(r,g5))!==null&&t!==void 0?t:g5.UseNone},n.prototype.getReadingDirection=function(){var e,t,r=(e=this.Direction())===null||e===void 0?void 0:e.decodeText();return(t=Y5(r,A5))!==null&&t!==void 0?t:A5.L2R},n.prototype.getPrintScaling=function(){var e,t,r=(e=this.PrintScaling())===null||e===void 0?void 0:e.decodeText();return(t=Y5(r,y5))!==null&&t!==void 0?t:y5.AppDefault},n.prototype.getDuplex=function(){var e,t=(e=this.Duplex())===null||e===void 0?void 0:e.decodeText();return Y5(t,vn)},n.prototype.getPickTrayByPDFSize=function(){var e;return(e=this.PickTrayByPDFSize())===null||e===void 0?void 0:e.asBoolean()},n.prototype.getPrintPageRange=function(){var e=this.PrintPageRange();if(!e)return[];for(var t=[],r=0;r<e.size();r+=2){var x=e.lookup(r,B0).asNumber(),i=e.lookup(r+1,B0).asNumber();t.push({start:x,end:i})}return t},n.prototype.getNumCopies=function(){var e,t;return(t=(e=this.NumCopies())===null||e===void 0?void 0:e.asNumber())!==null&&t!==void 0?t:1},n.prototype.setHideToolbar=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("HideToolbar"),t)},n.prototype.setHideMenubar=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("HideMenubar"),t)},n.prototype.setHideWindowUI=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("HideWindowUI"),t)},n.prototype.setFitWindow=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("FitWindow"),t)},n.prototype.setCenterWindow=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("CenterWindow"),t)},n.prototype.setDisplayDocTitle=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("DisplayDocTitle"),t)},n.prototype.setNonFullScreenPageMode=function(e){ft(e,"nonFullScreenPageMode",g5);var t=w.of(e);this.dict.set(w.of("NonFullScreenPageMode"),t)},n.prototype.setReadingDirection=function(e){ft(e,"readingDirection",A5);var t=w.of(e);this.dict.set(w.of("Direction"),t)},n.prototype.setPrintScaling=function(e){ft(e,"printScaling",y5);var t=w.of(e);this.dict.set(w.of("PrintScaling"),t)},n.prototype.setDuplex=function(e){ft(e,"duplex",vn);var t=w.of(e);this.dict.set(w.of("Duplex"),t)},n.prototype.setPickTrayByPDFSize=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("PickTrayByPDFSize"),t)},n.prototype.setPrintPageRange=function(e){Array.isArray(e)||(e=[e]);for(var t=[],r=0,x=e.length;r<x;r++)t.push(e[r].start),t.push(e[r].end);Ex(t,"printPageRange",["number"]);var i=this.dict.context.obj(t);this.dict.set(w.of("PrintPageRange"),i)},n.prototype.setNumCopies=function(e){De(e,"numCopies",1,Number.MAX_VALUE),mi(e,"numCopies");var t=this.dict.context.obj(e);this.dict.set(w.of("NumCopies"),t)},n.fromDict=function(e){return new n(e)},n.create=function(e){var t=e.obj({});return new n(t)},n})(),go=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,Sx=(function(){function n(e,t){this.dict=e,this.ref=t}return n.prototype.T=function(){return this.dict.lookupMaybe(w.of("T"),V0,u0)},n.prototype.Ff=function(){var e=this.getInheritableAttribute(w.of("Ff"));return this.dict.context.lookupMaybe(e,B0)},n.prototype.V=function(){var e=this.getInheritableAttribute(w.of("V"));return this.dict.context.lookup(e)},n.prototype.Kids=function(){return this.dict.lookupMaybe(w.of("Kids"),I0)},n.prototype.DA=function(){var e=this.dict.lookup(w.of("DA"));if(e instanceof V0||e instanceof u0)return e},n.prototype.setKids=function(e){this.dict.set(w.of("Kids"),this.dict.context.obj(e))},n.prototype.getParent=function(){var e=this.dict.get(w.of("Parent"));if(e instanceof U0){var t=this.dict.lookup(w.of("Parent"),D0);return new n(t,e)}},n.prototype.setParent=function(e){e?this.dict.set(w.of("Parent"),e):this.dict.delete(w.of("Parent"))},n.prototype.getFullyQualifiedName=function(){var e=this.getParent();return e?e.getFullyQualifiedName()+"."+this.getPartialName():this.getPartialName()},n.prototype.getPartialName=function(){var e;return(e=this.T())===null||e===void 0?void 0:e.decodeText()},n.prototype.setPartialName=function(e){e?this.dict.set(w.of("T"),u0.fromText(e)):this.dict.delete(w.of("T"))},n.prototype.setDefaultAppearance=function(e){this.dict.set(w.of("DA"),V0.of(e))},n.prototype.getDefaultAppearance=function(){var e=this.DA();return e instanceof u0?e.decodeText():e?.asString()},n.prototype.setFontSize=function(e){var t,r=(t=this.getFullyQualifiedName())!==null&&t!==void 0?t:"",x=this.getDefaultAppearance();if(!x)throw new zi(r);var i=gr(x,go);if(!i.match)throw new Ti(r);var o=x.slice(0,i.pos-i.match[0].length),a=i.pos<=x.length?x.slice(i.pos):"",l=i.match[1],c=o+" /"+l+" "+e+" Tf "+a;this.setDefaultAppearance(c)},n.prototype.getFlags=function(){var e,t;return(t=(e=this.Ff())===null||e===void 0?void 0:e.asNumber())!==null&&t!==void 0?t:0},n.prototype.setFlags=function(e){this.dict.set(w.of("Ff"),B0.of(e))},n.prototype.hasFlag=function(e){var t=this.getFlags();return(t&e)!==0},n.prototype.setFlag=function(e){var t=this.getFlags();this.setFlags(t|e)},n.prototype.clearFlag=function(e){var t=this.getFlags();this.setFlags(t&~e)},n.prototype.setFlagTo=function(e,t){t?this.setFlag(e):this.clearFlag(e)},n.prototype.getInheritableAttribute=function(e){var t;return this.ascend(function(r){t||(t=r.dict.get(e))}),t},n.prototype.ascend=function(e){e(this);var t=this.getParent();t&&t.ascend(e)},n})(),xr=(function(){function n(e){this.dict=e}return n.prototype.W=function(){var e=this.dict.lookup(w.of("W"));if(e instanceof B0)return e},n.prototype.getWidth=function(){var e,t;return(t=(e=this.W())===null||e===void 0?void 0:e.asNumber())!==null&&t!==void 0?t:1},n.prototype.setWidth=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("W"),t)},n.fromDict=function(e){return new n(e)},n})(),Ao=(function(){function n(e){this.dict=e}return n.prototype.Rect=function(){return this.dict.lookup(w.of("Rect"),I0)},n.prototype.AP=function(){return this.dict.lookupMaybe(w.of("AP"),D0)},n.prototype.F=function(){var e=this.dict.lookup(w.of("F"));return this.dict.context.lookupMaybe(e,B0)},n.prototype.getRectangle=function(){var e,t=this.Rect();return(e=t?.asRectangle())!==null&&e!==void 0?e:{x:0,y:0,width:0,height:0}},n.prototype.setRectangle=function(e){var t=e.x,r=e.y,x=e.width,i=e.height,o=this.dict.context.obj([t,r,t+x,r+i]);this.dict.set(w.of("Rect"),o)},n.prototype.getAppearanceState=function(){var e=this.dict.lookup(w.of("AS"));if(e instanceof w)return e},n.prototype.setAppearanceState=function(e){this.dict.set(w.of("AS"),e)},n.prototype.setAppearances=function(e){this.dict.set(w.of("AP"),e)},n.prototype.ensureAP=function(){var e=this.AP();return e||(e=this.dict.context.obj({}),this.dict.set(w.of("AP"),e)),e},n.prototype.getNormalAppearance=function(){var e=this.ensureAP(),t=e.get(w.of("N"));if(t instanceof U0||t instanceof D0)return t;throw new Error("Unexpected N type: "+t?.constructor.name)},n.prototype.setNormalAppearance=function(e){var t=this.ensureAP();t.set(w.of("N"),e)},n.prototype.setRolloverAppearance=function(e){var t=this.ensureAP();t.set(w.of("R"),e)},n.prototype.setDownAppearance=function(e){var t=this.ensureAP();t.set(w.of("D"),e)},n.prototype.removeRolloverAppearance=function(){var e=this.AP();e?.delete(w.of("R"))},n.prototype.removeDownAppearance=function(){var e=this.AP();e?.delete(w.of("D"))},n.prototype.getAppearances=function(){var e=this.AP();if(e){var t=e.lookup(w.of("N"),D0,we),r=e.lookupMaybe(w.of("R"),D0,we),x=e.lookupMaybe(w.of("D"),D0,we);return{normal:t,rollover:r,down:x}}},n.prototype.getFlags=function(){var e,t;return(t=(e=this.F())===null||e===void 0?void 0:e.asNumber())!==null&&t!==void 0?t:0},n.prototype.setFlags=function(e){this.dict.set(w.of("F"),B0.of(e))},n.prototype.hasFlag=function(e){var t=this.getFlags();return(t&e)!==0},n.prototype.setFlag=function(e){var t=this.getFlags();this.setFlags(t|e)},n.prototype.clearFlag=function(e){var t=this.getFlags();this.setFlags(t&~e)},n.prototype.setFlagTo=function(e,t){t?this.setFlag(e):this.clearFlag(e)},n.fromDict=function(e){return new n(e)},n})(),ir=(function(){function n(e){this.dict=e}return n.prototype.R=function(){var e=this.dict.lookup(w.of("R"));if(e instanceof B0)return e},n.prototype.BC=function(){var e=this.dict.lookup(w.of("BC"));if(e instanceof I0)return e},n.prototype.BG=function(){var e=this.dict.lookup(w.of("BG"));if(e instanceof I0)return e},n.prototype.CA=function(){var e=this.dict.lookup(w.of("CA"));if(e instanceof u0||e instanceof V0)return e},n.prototype.RC=function(){var e=this.dict.lookup(w.of("RC"));if(e instanceof u0||e instanceof V0)return e},n.prototype.AC=function(){var e=this.dict.lookup(w.of("AC"));if(e instanceof u0||e instanceof V0)return e},n.prototype.getRotation=function(){var e;return(e=this.R())===null||e===void 0?void 0:e.asNumber()},n.prototype.getBorderColor=function(){var e=this.BC();if(e){for(var t=[],r=0,x=e?.size();r<x;r++){var i=e.get(r);i instanceof B0&&t.push(i.asNumber())}return t}},n.prototype.getBackgroundColor=function(){var e=this.BG();if(e){for(var t=[],r=0,x=e?.size();r<x;r++){var i=e.get(r);i instanceof B0&&t.push(i.asNumber())}return t}},n.prototype.getCaptions=function(){var e=this.CA(),t=this.RC(),r=this.AC();return{normal:e?.decodeText(),rollover:t?.decodeText(),down:r?.decodeText()}},n.prototype.setRotation=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("R"),t)},n.prototype.setBorderColor=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("BC"),t)},n.prototype.setBackgroundColor=function(e){var t=this.dict.context.obj(e);this.dict.set(w.of("BG"),t)},n.prototype.setCaptions=function(e){var t=u0.fromText(e.normal);if(this.dict.set(w.of("CA"),t),e.rollover){var r=u0.fromText(e.rollover);this.dict.set(w.of("RC"),r)}else this.dict.delete(w.of("RC"));if(e.down){var x=u0.fromText(e.down);this.dict.set(w.of("AC"),x)}else this.dict.delete(w.of("AC"))},n.fromDict=function(e){return new n(e)},n})(),dr=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.MK=function(){var t=this.dict.lookup(w.of("MK"));if(t instanceof D0)return t},e.prototype.BS=function(){var t=this.dict.lookup(w.of("BS"));if(t instanceof D0)return t},e.prototype.DA=function(){var t=this.dict.lookup(w.of("DA"));if(t instanceof V0||t instanceof u0)return t},e.prototype.P=function(){var t=this.dict.get(w.of("P"));if(t instanceof U0)return t},e.prototype.setP=function(t){this.dict.set(w.of("P"),t)},e.prototype.setDefaultAppearance=function(t){this.dict.set(w.of("DA"),V0.of(t))},e.prototype.getDefaultAppearance=function(){var t=this.DA();return t instanceof u0?t.decodeText():t?.asString()},e.prototype.getAppearanceCharacteristics=function(){var t=this.MK();if(t)return ir.fromDict(t)},e.prototype.getOrCreateAppearanceCharacteristics=function(){var t=this.MK();if(t)return ir.fromDict(t);var r=ir.fromDict(this.dict.context.obj({}));return this.dict.set(w.of("MK"),r.dict),r},e.prototype.getBorderStyle=function(){var t=this.BS();if(t)return xr.fromDict(t)},e.prototype.getOrCreateBorderStyle=function(){var t=this.BS();if(t)return xr.fromDict(t);var r=xr.fromDict(this.dict.context.obj({}));return this.dict.set(w.of("BS"),r.dict),r},e.prototype.getOnValue=function(){var t,r=(t=this.getAppearances())===null||t===void 0?void 0:t.normal;if(r instanceof D0)for(var x=r.keys(),i=0,o=x.length;i<o;i++){var a=x[i];if(a!==w.of("Off"))return a}},e.fromDict=function(t){return new e(t)},e.create=function(t,r){var x=t.obj({Type:"Annot",Subtype:"Widget",Rect:[0,0,0,0],Parent:r});return new e(x)},e})(Ao),n5=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.FT=function(){var t=this.getInheritableAttribute(w.of("FT"));return this.dict.context.lookup(t,w)},e.prototype.getWidgets=function(){var t=this.Kids();if(!t)return[dr.fromDict(this.dict)];for(var r=new Array(t.size()),x=0,i=t.size();x<i;x++){var o=t.lookup(x,D0);r[x]=dr.fromDict(o)}return r},e.prototype.addWidget=function(t){var r=this.normalizedEntries().Kids;r.push(t)},e.prototype.removeWidget=function(t){var r=this.Kids();if(r){if(t<0||t>r.size())throw new un(t,0,r.size());r.remove(t)}else{if(t!==0)throw new un(t,0,0);this.setKids([])}},e.prototype.normalizedEntries=function(){var t=this.Kids();return t||(t=this.dict.context.obj([this.ref]),this.dict.set(w.of("Kids"),t)),{Kids:t}},e.fromDict=function(t,r){return new e(t,r)},e})(Sx),qr=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.Opt=function(){return this.dict.lookupMaybe(w.of("Opt"),V0,u0,I0)},e.prototype.setOpt=function(t){this.dict.set(w.of("Opt"),this.dict.context.obj(t))},e.prototype.getExportValues=function(){var t=this.Opt();if(t){if(t instanceof V0||t instanceof u0)return[t];for(var r=[],x=0,i=t.size();x<i;x++){var o=t.lookup(x);(o instanceof V0||o instanceof u0)&&r.push(o)}return r}},e.prototype.removeExportValue=function(t){var r=this.Opt();if(r)if(r instanceof V0||r instanceof u0){if(t!==0)throw new un(t,0,0);this.setOpt([])}else{if(t<0||t>r.size())throw new un(t,0,r.size());r.remove(t)}},e.prototype.normalizeExportValues=function(){for(var t,r,x,i,o=(t=this.getExportValues())!==null&&t!==void 0?t:[],a=[],l=this.getWidgets(),c=0,h=l.length;c<h;c++){var s=l[c],u=(r=o[c])!==null&&r!==void 0?r:u0.fromText((i=(x=s.getOnValue())===null||x===void 0?void 0:x.decodeText())!==null&&i!==void 0?i:"");a.push(u)}this.setOpt(a)},e.prototype.addOpt=function(t,r){var x;this.normalizeExportValues();var i=t.decodeText(),o;if(r)for(var a=(x=this.getExportValues())!==null&&x!==void 0?x:[],l=0,c=a.length;l<c;l++){var h=a[l];h.decodeText()===i&&(o=l)}var s=this.Opt();return s.push(t),o??s.size()-1},e.prototype.addWidgetWithOpt=function(t,r,x){var i=this.addOpt(r,x),o=w.of(String(i));return this.addWidget(t),o},e})(n5),zn=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.setValue=function(t){var r,x=(r=this.getOnValue())!==null&&r!==void 0?r:w.of("Yes");if(t!==x&&t!==w.of("Off"))throw new mr;this.dict.set(w.of("V"),t);for(var i=this.getWidgets(),o=0,a=i.length;o<a;o++){var l=i[o],c=l.getOnValue()===t?t:w.of("Off");l.setAppearanceState(c)}},e.prototype.getValue=function(){var t=this.V();return t instanceof w?t:w.of("Off")},e.prototype.getOnValue=function(){var t=this.getWidgets()[0];return t?.getOnValue()},e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({FT:"Btn",Kids:[]}),x=t.register(r);return new e(r,x)},e})(qr),$0=function(n){return 1<<n},Ue;(function(n){n[n.ReadOnly=$0(0)]="ReadOnly",n[n.Required=$0(1)]="Required",n[n.NoExport=$0(2)]="NoExport"})(Ue||(Ue={}));var ze;(function(n){n[n.NoToggleToOff=$0(14)]="NoToggleToOff",n[n.Radio=$0(15)]="Radio",n[n.PushButton=$0(16)]="PushButton",n[n.RadiosInUnison=$0(25)]="RadiosInUnison"})(ze||(ze={}));var Y0;(function(n){n[n.Multiline=$0(12)]="Multiline",n[n.Password=$0(13)]="Password",n[n.FileSelect=$0(20)]="FileSelect",n[n.DoNotSpellCheck=$0(22)]="DoNotSpellCheck",n[n.DoNotScroll=$0(23)]="DoNotScroll",n[n.Comb=$0(24)]="Comb",n[n.RichText=$0(25)]="RichText"})(Y0||(Y0={}));var L0;(function(n){n[n.Combo=$0(17)]="Combo",n[n.Edit=$0(18)]="Edit",n[n.Sort=$0(19)]="Sort",n[n.MultiSelect=$0(21)]="MultiSelect",n[n.DoNotSpellCheck=$0(22)]="DoNotSpellCheck",n[n.CommitOnSelChange=$0(26)]="CommitOnSelChange"})(L0||(L0={}));var qx=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.setValues=function(t){if(this.hasFlag(L0.Combo)&&!this.hasFlag(L0.Edit)&&!this.valuesAreValid(t))throw new mr;if(t.length===0&&this.dict.delete(w.of("V")),t.length===1&&this.dict.set(w.of("V"),t[0]),t.length>1){if(!this.hasFlag(L0.MultiSelect))throw new Pi;this.dict.set(w.of("V"),this.dict.context.obj(t))}this.updateSelectedIndices(t)},e.prototype.valuesAreValid=function(t){for(var r=this.getOptions(),x=function(l,c){var h=t[l].decodeText();if(!r.find(function(s){return h===(s.display||s.value).decodeText()}))return{value:!1}},i=0,o=t.length;i<o;i++){var a=x(i);if(typeof a=="object")return a.value}return!0},e.prototype.updateSelectedIndices=function(t){if(t.length>1){for(var r=new Array(t.length),x=this.getOptions(),i=function(l,c){var h=t[l].decodeText();r[l]=x.findIndex(function(s){return h===(s.display||s.value).decodeText()})},o=0,a=t.length;o<a;o++)i(o,a);this.dict.set(w.of("I"),this.dict.context.obj(r.sort()))}else this.dict.delete(w.of("I"))},e.prototype.getValues=function(){var t=this.V();if(t instanceof V0||t instanceof u0)return[t];if(t instanceof I0){for(var r=[],x=0,i=t.size();x<i;x++){var o=t.lookup(x);(o instanceof V0||o instanceof u0)&&r.push(o)}return r}return[]},e.prototype.Opt=function(){return this.dict.lookupMaybe(w.of("Opt"),V0,u0,I0)},e.prototype.setOptions=function(t){for(var r=new Array(t.length),x=0,i=t.length;x<i;x++){var o=t[x],a=o.value,l=o.display;r[x]=this.dict.context.obj([a,l||a])}this.dict.set(w.of("Opt"),this.dict.context.obj(r))},e.prototype.getOptions=function(){var t=this.Opt();if(t instanceof V0||t instanceof u0)return[{value:t,display:t}];if(t instanceof I0){for(var r=[],x=0,i=t.size();x<i;x++){var o=t.lookup(x);if((o instanceof V0||o instanceof u0)&&r.push({value:o,display:o}),o instanceof I0&&o.size()>0){var a=o.lookup(0,V0,u0),l=o.lookupMaybe(1,V0,u0);r.push({value:a,display:l||a})}}return r}return[]},e})(n5),Tn=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({FT:"Ch",Ff:L0.Combo,Kids:[]}),x=t.register(r);return new e(r,x)},e})(qx),En=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.addField=function(t){var r=this.normalizedEntries().Kids;r?.push(t)},e.prototype.normalizedEntries=function(){var t=this.Kids();return t||(t=this.dict.context.obj([]),this.dict.set(w.of("Kids"),t)),{Kids:t}},e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({}),x=t.register(r);return new e(r,x)},e})(Sx),Pr=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.fromDict=function(t,r){return new e(t,r)},e})(n5),Mn=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.MaxLen=function(){var t=this.dict.lookup(w.of("MaxLen"));if(t instanceof B0)return t},e.prototype.Q=function(){var t=this.dict.lookup(w.of("Q"));if(t instanceof B0)return t},e.prototype.setMaxLength=function(t){this.dict.set(w.of("MaxLen"),B0.of(t))},e.prototype.removeMaxLength=function(){this.dict.delete(w.of("MaxLen"))},e.prototype.getMaxLength=function(){var t;return(t=this.MaxLen())===null||t===void 0?void 0:t.asNumber()},e.prototype.setQuadding=function(t){this.dict.set(w.of("Q"),B0.of(t))},e.prototype.getQuadding=function(){var t;return(t=this.Q())===null||t===void 0?void 0:t.asNumber()},e.prototype.setValue=function(t){this.dict.set(w.of("V"),t)},e.prototype.removeValue=function(){this.dict.delete(w.of("V"))},e.prototype.getValue=function(){var t=this.V();if(t instanceof V0||t instanceof u0)return t},e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({FT:"Tx",Kids:[]}),x=t.register(r);return new e(r,x)},e})(n5),On=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({FT:"Btn",Ff:ze.PushButton,Kids:[]}),x=t.register(r);return new e(r,x)},e})(qr),Rn=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.setValue=function(t){var r=this.getOnValues();if(!r.includes(t)&&t!==w.of("Off"))throw new mr;this.dict.set(w.of("V"),t);for(var x=this.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i],l=a.getOnValue()===t?t:w.of("Off");a.setAppearanceState(l)}},e.prototype.getValue=function(){var t=this.V();return t instanceof w?t:w.of("Off")},e.prototype.getOnValues=function(){for(var t=this.getWidgets(),r=[],x=0,i=t.length;x<i;x++){var o=t[x].getOnValue();o&&r.push(o)}return r},e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({FT:"Btn",Ff:ze.Radio,Kids:[]}),x=t.register(r);return new e(r,x)},e})(qr),Nn=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.fromDict=function(t,r){return new e(t,r)},e.create=function(t){var r=t.obj({FT:"Ch",Kids:[]}),x=t.register(r);return new e(r,x)},e})(qx),zr=function(n){if(!n)return[];for(var e=[],t=0,r=n.size();t<r;t++){var x=n.get(t),i=n.lookup(t);x instanceof U0&&i instanceof D0&&e.push([Px(i,x),x])}return e},Px=function(n,e){var t=yo(n);return t?En.fromDict(n,e):Do(n,e)},yo=function(n){var e=n.lookup(w.of("Kids"));if(e instanceof I0)for(var t=0,r=e.size();t<r;t++){var x=e.lookup(t),i=x instanceof D0&&x.has(w.of("T"));if(i)return!0}return!1},Do=function(n,e){var t=Tr(n,w.of("FT")),r=n.context.lookup(t,w);return r===w.of("Btn")?mo(n,e):r===w.of("Ch")?wo(n,e):r===w.of("Tx")?Mn.fromDict(n,e):r===w.of("Sig")?Pr.fromDict(n,e):n5.fromDict(n,e)},mo=function(n,e){var t,r=Tr(n,w.of("Ff")),x=n.context.lookupMaybe(r,B0),i=(t=x?.asNumber())!==null&&t!==void 0?t:0;return ur(i,ze.PushButton)?On.fromDict(n,e):ur(i,ze.Radio)?Rn.fromDict(n,e):zn.fromDict(n,e)},wo=function(n,e){var t,r=Tr(n,w.of("Ff")),x=n.context.lookupMaybe(r,B0),i=(t=x?.asNumber())!==null&&t!==void 0?t:0;return ur(i,L0.Combo)?Tn.fromDict(n,e):Nn.fromDict(n,e)},ur=function(n,e){return(n&e)!==0},Tr=function(n,e){var t;return zx(n,function(r){t||(t=r.get(e))}),t},zx=function(n,e){e(n);var t=n.lookupMaybe(w.of("Parent"),D0);t&&zx(t,e)},Bn=(function(){function n(e){this.dict=e}return n.prototype.Fields=function(){var e=this.dict.lookup(w.of("Fields"));if(e instanceof I0)return e},n.prototype.getFields=function(){for(var e=this.normalizedEntries().Fields,t=new Array(e.size()),r=0,x=e.size();r<x;r++){var i=e.get(r),o=e.lookup(r,D0);t[r]=[Px(o,i),i]}return t},n.prototype.getAllFields=function(){var e=[],t=function(r){if(r)for(var x=0,i=r.length;x<i;x++){var o=r[x];e.push(o);var a=o[0];a instanceof En&&t(zr(a.Kids()))}};return t(this.getFields()),e},n.prototype.addField=function(e){var t=this.normalizedEntries().Fields;t?.push(e)},n.prototype.removeField=function(e){var t=e.getParent(),r=t===void 0?this.normalizedEntries().Fields:t.Kids(),x=r?.indexOf(e.ref);if(r===void 0||x===void 0)throw new Error("Tried to remove inexistent field "+e.getFullyQualifiedName());r.remove(x),t!==void 0&&r.size()===0&&this.removeField(t)},n.prototype.normalizedEntries=function(){var e=this.Fields();return e||(e=this.dict.context.obj([]),this.dict.set(w.of("Fields"),e)),{Fields:e}},n.fromDict=function(e){return new n(e)},n.create=function(e){var t=e.obj({Fields:[]});return new n(t)},n})(),Tx=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.Pages=function(){return this.lookup(w.of("Pages"),D0)},e.prototype.AcroForm=function(){return this.lookupMaybe(w.of("AcroForm"),D0)},e.prototype.getAcroForm=function(){var t=this.AcroForm();if(t)return Bn.fromDict(t)},e.prototype.getOrCreateAcroForm=function(){var t=this.getAcroForm();if(!t){t=Bn.create(this.context);var r=this.context.register(t.dict);this.set(w.of("AcroForm"),r)}return t},e.prototype.ViewerPreferences=function(){return this.lookupMaybe(w.of("ViewerPreferences"),D0)},e.prototype.getViewerPreferences=function(){var t=this.ViewerPreferences();if(t)return T1.fromDict(t)},e.prototype.getOrCreateViewerPreferences=function(){var t=this.getViewerPreferences();if(!t){t=T1.create(this.context);var r=this.context.register(t.dict);this.set(w.of("ViewerPreferences"),r)}return t},e.prototype.insertLeafNode=function(t,r){var x=this.get(w.of("Pages")),i=this.Pages().insertLeafNode(t,r);return i||x},e.prototype.removeLeafNode=function(t){this.Pages().removeLeafNode(t)},e.withContextAndPages=function(t,r){var x=new Map;return x.set(w.of("Type"),w.of("Catalog")),x.set(w.of("Pages"),r),new e(x,t)},e.fromMapWithContext=function(t,r){return new e(t,r)},e})(D0),Mx=(function(n){e0(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.Parent=function(){return this.lookup(w.of("Parent"))},e.prototype.Kids=function(){return this.lookup(w.of("Kids"),I0)},e.prototype.Count=function(){return this.lookup(w.of("Count"),B0)},e.prototype.pushTreeNode=function(t){var r=this.Kids();r.push(t)},e.prototype.pushLeafNode=function(t){var r=this.Kids();this.insertLeafKid(r.size(),t)},e.prototype.insertLeafNode=function(t,r){var x=this.Kids(),i=this.Count().asNumber();if(r>i)throw new F1(r,i);for(var o=r,a=0,l=x.size();a<l;a++){if(o===0){this.insertLeafKid(a,t);return}var c=x.get(a),h=this.context.lookup(c);if(h instanceof e){if(h.Count().asNumber()>o)return h.insertLeafNode(t,o)||c;o-=h.Count().asNumber()}h instanceof it&&(o-=1)}if(o===0){this.insertLeafKid(x.size(),t);return}throw new g1(r,"insertLeafNode")},e.prototype.removeLeafNode=function(t,r){r===void 0&&(r=!0);var x=this.Kids(),i=this.Count().asNumber();if(t>=i)throw new F1(t,i);for(var o=t,a=0,l=x.size();a<l;a++){var c=x.get(a),h=this.context.lookup(c);if(h instanceof e)if(h.Count().asNumber()>o){h.removeLeafNode(o,r),r&&h.Kids().size()===0&&x.remove(a);return}else o-=h.Count().asNumber();if(h instanceof it)if(o===0){this.removeKid(a);return}else o-=1}throw new g1(t,"removeLeafNode")},e.prototype.ascend=function(t){t(this);var r=this.Parent();r&&r.ascend(t)},e.prototype.traverse=function(t){for(var r=this.Kids(),x=0,i=r.size();x<i;x++){var o=r.get(x),a=this.context.lookup(o);a instanceof e&&a.traverse(t),t(a,o)}},e.prototype.insertLeafKid=function(t,r){var x=this.Kids();this.ascend(function(i){var o=i.Count().asNumber()+1;i.set(w.of("Count"),B0.of(o))}),x.insert(t,r)},e.prototype.removeKid=function(t){var r=this.Kids(),x=r.lookup(t);x instanceof it&&this.ascend(function(i){var o=i.Count().asNumber()-1;i.set(w.of("Count"),B0.of(o))}),r.remove(t)},e.withContext=function(t,r){var x=new Map;return x.set(w.of("Type"),w.of("Pages")),x.set(w.of("Kids"),t.obj([])),x.set(w.of("Count"),t.obj(0)),r&&x.set(w.of("Parent"),r),new e(x,t)},e.fromMapWithContext=function(t,r){return new e(t,r)},e})(D0),Ee=new Uint8Array(256);Ee[k.Zero]=1;Ee[k.One]=1;Ee[k.Two]=1;Ee[k.Three]=1;Ee[k.Four]=1;Ee[k.Five]=1;Ee[k.Six]=1;Ee[k.Seven]=1;Ee[k.Eight]=1;Ee[k.Nine]=1;var In=new Uint8Array(256);In[k.Period]=1;In[k.Plus]=1;In[k.Minus]=1;var Mr=new Uint8Array(256);for(var c5=0,bo=256;c5<bo;c5++)Mr[c5]=Ee[c5]||In[c5]?1:0;var M1=k.Newline,O1=k.CarriageReturn,ko=(function(){function n(e,t){t===void 0&&(t=!1),this.bytes=e,this.capNumbers=t}return n.prototype.parseRawInt=function(){for(var e="";!this.bytes.done();){var t=this.bytes.peek();if(!Ee[t])break;e+=rt(this.bytes.next())}var r=Number(e);if(!e||!isFinite(r))throw new A1(this.bytes.position(),e);return r},n.prototype.parseRawNumber=function(){for(var e="";!this.bytes.done();){var t=this.bytes.peek();if(!Mr[t]||(e+=rt(this.bytes.next()),t===k.Period))break}for(;!this.bytes.done();){var t=this.bytes.peek();if(!Ee[t])break;e+=rt(this.bytes.next())}var r=Number(e);if(!e||!isFinite(r))throw new A1(this.bytes.position(),e);if(r>Number.MAX_SAFE_INTEGER)if(this.capNumbers){var x="Parsed number that is too large for some PDF readers: "+e+", using Number.MAX_SAFE_INTEGER instead.";return console.warn(x),Number.MAX_SAFE_INTEGER}else{var x="Parsed number that is too large for some PDF readers: "+e+", not capping.";console.warn(x)}return r},n.prototype.skipWhitespace=function(){for(;!this.bytes.done()&&at[this.bytes.peek()];)this.bytes.next()},n.prototype.skipLine=function(){for(;!this.bytes.done();){var e=this.bytes.peek();if(e===M1||e===O1)return;this.bytes.next()}},n.prototype.skipComment=function(){if(this.bytes.peek()!==k.Percent)return!1;for(;!this.bytes.done();){var e=this.bytes.peek();if(e===M1||e===O1)return!0;this.bytes.next()}return!0},n.prototype.skipWhitespaceAndComments=function(){for(this.skipWhitespace();this.skipComment();)this.skipWhitespace()},n.prototype.matchKeyword=function(e){for(var t=this.bytes.offset(),r=0,x=e.length;r<x;r++)if(this.bytes.done()||this.bytes.next()!==e[r])return this.bytes.moveTo(t),!1;return!0},n})(),Ln=(function(){function n(e){this.idx=0,this.line=0,this.column=0,this.bytes=e,this.length=this.bytes.length}return n.prototype.moveTo=function(e){this.idx=e},n.prototype.next=function(){var e=this.bytes[this.idx++];return e===k.Newline?(this.line+=1,this.column=0):this.column+=1,e},n.prototype.assertNext=function(e){if(this.peek()!==e)throw new Mi(this.position(),e,this.peek());return this.next()},n.prototype.peek=function(){return this.bytes[this.idx]},n.prototype.peekAhead=function(e){return this.bytes[this.idx+e]},n.prototype.peekAt=function(e){return this.bytes[e]},n.prototype.done=function(){return this.idx>=this.length},n.prototype.offset=function(){return this.idx},n.prototype.slice=function(e,t){return this.bytes.slice(e,t)},n.prototype.position=function(){return{line:this.line,column:this.column,offset:this.idx}},n.of=function(e){return new n(e)},n.fromPDFRawStream=function(e){return n.of(bx(e).decode())},n})(),So=k.Space,s5=k.CarriageReturn,h5=k.Newline,d5=[k.s,k.t,k.r,k.e,k.a,k.m],J5=[k.e,k.n,k.d,k.s,k.t,k.r,k.e,k.a,k.m],H0={header:[k.Percent,k.P,k.D,k.F,k.Dash],eof:[k.Percent,k.Percent,k.E,k.O,k.F],obj:[k.o,k.b,k.j],endobj:[k.e,k.n,k.d,k.o,k.b,k.j],xref:[k.x,k.r,k.e,k.f],trailer:[k.t,k.r,k.a,k.i,k.l,k.e,k.r],startxref:[k.s,k.t,k.a,k.r,k.t,k.x,k.r,k.e,k.f],true:[k.t,k.r,k.u,k.e],false:[k.f,k.a,k.l,k.s,k.e],null:[k.n,k.u,k.l,k.l],stream:d5,streamEOF1:T0(d5,[So,s5,h5]),streamEOF2:T0(d5,[s5,h5]),streamEOF3:T0(d5,[s5]),streamEOF4:T0(d5,[h5]),endstream:J5,EOF1endstream:T0([s5,h5],J5),EOF2endstream:T0([s5],J5),EOF3endstream:T0([h5],J5)},Ox=(function(n){e0(e,n);function e(t,r,x){x===void 0&&(x=!1);var i=n.call(this,t,x)||this;return i.context=r,i}return e.prototype.parseObject=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(H0.true))return b5.True;if(this.matchKeyword(H0.false))return b5.False;if(this.matchKeyword(H0.null))return Ae;var t=this.bytes.peek();if(t===k.LessThan&&this.bytes.peekAhead(1)===k.LessThan)return this.parseDictOrStream();if(t===k.LessThan)return this.parseHexString();if(t===k.LeftParen)return this.parseString();if(t===k.ForwardSlash)return this.parseName();if(t===k.LeftSquareBracket)return this.parseArray();if(Mr[t])return this.parseNumberOrRef();throw new Oi(this.bytes.position(),t)},e.prototype.parseNumberOrRef=function(){var t=this.parseRawNumber();this.skipWhitespaceAndComments();var r=this.bytes.offset();if(Ee[this.bytes.peek()]){var x=this.parseRawNumber();if(this.skipWhitespaceAndComments(),this.bytes.peek()===k.R)return this.bytes.assertNext(k.R),U0.of(t,x)}return this.bytes.moveTo(r),B0.of(t)},e.prototype.parseHexString=function(){var t="";for(this.bytes.assertNext(k.LessThan);!this.bytes.done()&&this.bytes.peek()!==k.GreaterThan;)t+=rt(this.bytes.next());return this.bytes.assertNext(k.GreaterThan),u0.of(t)},e.prototype.parseString=function(){for(var t=0,r=!1,x="";!this.bytes.done();){var i=this.bytes.next();if(x+=rt(i),r||(i===k.LeftParen&&(t+=1),i===k.RightParen&&(t-=1)),i===k.BackSlash?r=!r:r&&(r=!1),t===0)return V0.of(x.substring(1,x.length-1))}throw new Ii(this.bytes.position())},e.prototype.parseName=function(){this.bytes.assertNext(k.ForwardSlash);for(var t="";!this.bytes.done();){var r=this.bytes.peek();if(at[r]||Ie[r])break;t+=rt(r),this.bytes.next()}return w.of(t)},e.prototype.parseArray=function(){this.bytes.assertNext(k.LeftSquareBracket),this.skipWhitespaceAndComments();for(var t=I0.withContext(this.context);this.bytes.peek()!==k.RightSquareBracket;){var r=this.parseObject();t.push(r),this.skipWhitespaceAndComments()}return this.bytes.assertNext(k.RightSquareBracket),t},e.prototype.parseDict=function(){this.bytes.assertNext(k.LessThan),this.bytes.assertNext(k.LessThan),this.skipWhitespaceAndComments();for(var t=new Map;!this.bytes.done()&&this.bytes.peek()!==k.GreaterThan&&this.bytes.peekAhead(1)!==k.GreaterThan;){var r=this.parseName(),x=this.parseObject();t.set(r,x),this.skipWhitespaceAndComments()}this.skipWhitespaceAndComments(),this.bytes.assertNext(k.GreaterThan),this.bytes.assertNext(k.GreaterThan);var i=t.get(w.of("Type"));return i===w.of("Catalog")?Tx.fromMapWithContext(t,this.context):i===w.of("Pages")?Mx.fromMapWithContext(t,this.context):i===w.of("Page")?it.fromMapWithContext(t,this.context):D0.fromMapWithContext(t,this.context)},e.prototype.parseDictOrStream=function(){var t=this.bytes.position(),r=this.parseDict();if(this.skipWhitespaceAndComments(),!this.matchKeyword(H0.streamEOF1)&&!this.matchKeyword(H0.streamEOF2)&&!this.matchKeyword(H0.streamEOF3)&&!this.matchKeyword(H0.streamEOF4)&&!this.matchKeyword(H0.stream))return r;var x=this.bytes.offset(),i,o=r.get(w.of("Length"));o instanceof B0?(i=x+o.asNumber(),this.bytes.moveTo(i),this.skipWhitespaceAndComments(),this.matchKeyword(H0.endstream)||(this.bytes.moveTo(x),i=this.findEndOfStreamFallback(t))):i=this.findEndOfStreamFallback(t);var a=this.bytes.slice(x,i);return k5.of(r,a)},e.prototype.findEndOfStreamFallback=function(t){for(var r=1,x=this.bytes.offset();!this.bytes.done()&&(x=this.bytes.offset(),this.matchKeyword(H0.stream)?r+=1:this.matchKeyword(H0.EOF1endstream)||this.matchKeyword(H0.EOF2endstream)||this.matchKeyword(H0.EOF3endstream)||this.matchKeyword(H0.endstream)?r-=1:this.bytes.next(),r!==0););if(r!==0)throw new Ni(t);return x},e.forBytes=function(t,r,x){return new e(Ln.of(t),r,x)},e.forByteStream=function(t,r,x){return x===void 0&&(x=!1),new e(t,r,x)},e})(ko),qo=(function(n){e0(e,n);function e(t,r){var x=n.call(this,Ln.fromPDFRawStream(t),t.dict.context)||this,i=t.dict;return x.alreadyParsed=!1,x.shouldWaitForTick=r||(function(){return!1}),x.firstOffset=i.lookup(w.of("First"),B0).asNumber(),x.objectCount=i.lookup(w.of("N"),B0).asNumber(),x}return e.prototype.parseIntoContext=function(){return w0(this,void 0,void 0,function(){var t,r,x,i,o,a,l,c;return b0(this,function(h){switch(h.label){case 0:if(this.alreadyParsed)throw new Dr("PDFObjectStreamParser","parseIntoContext");this.alreadyParsed=!0,t=this.parseOffsetsAndObjectNumbers(),r=0,x=t.length,h.label=1;case 1:return r<x?(i=t[r],o=i.objectNumber,a=i.offset,this.bytes.moveTo(this.firstOffset+a),l=this.parseObject(),c=U0.of(o,0),this.context.assign(c,l),this.shouldWaitForTick()?[4,$t()]:[3,3]):[3,4];case 2:h.sent(),h.label=3;case 3:return r++,[3,1];case 4:return[2]}})})},e.prototype.parseOffsetsAndObjectNumbers=function(){for(var t=[],r=0,x=this.objectCount;r<x;r++){this.skipWhitespaceAndComments();var i=this.parseRawInt();this.skipWhitespaceAndComments();var o=this.parseRawInt();t.push({objectNumber:i,offset:o})}return t},e.forStream=function(t,r){return new e(t,r)},e})(Ox),Po=(function(){function n(e){this.alreadyParsed=!1,this.dict=e.dict,this.bytes=Ln.fromPDFRawStream(e),this.context=this.dict.context;var t=this.dict.lookup(w.of("Size"),B0),r=this.dict.lookup(w.of("Index"));if(r instanceof I0){this.subsections=[];for(var x=0,i=r.size();x<i;x+=2){var o=r.lookup(x+0,B0).asNumber(),a=r.lookup(x+1,B0).asNumber();this.subsections.push({firstObjectNumber:o,length:a})}}else this.subsections=[{firstObjectNumber:0,length:t.asNumber()}];var l=this.dict.lookup(w.of("W"),I0);this.byteWidths=[-1,-1,-1];for(var x=0,i=l.size();x<i;x++)this.byteWidths[x]=l.lookup(x,B0).asNumber()}return n.prototype.parseIntoContext=function(){if(this.alreadyParsed)throw new Dr("PDFXRefStreamParser","parseIntoContext");this.alreadyParsed=!0,this.context.trailerInfo={Root:this.dict.get(w.of("Root")),Encrypt:this.dict.get(w.of("Encrypt")),Info:this.dict.get(w.of("Info")),ID:this.dict.get(w.of("ID"))};var e=this.parseEntries();return e},n.prototype.parseEntries=function(){for(var e=[],t=this.byteWidths,r=t[0],x=t[1],i=t[2],o=0,a=this.subsections.length;o<a;o++)for(var l=this.subsections[o],c=l.firstObjectNumber,h=l.length,s=0;s<h;s++){for(var u=0,f=0,v=r;f<v;f++)u=u<<8|this.bytes.next();for(var C=0,f=0,v=x;f<v;f++)C=C<<8|this.bytes.next();for(var F=0,f=0,v=i;f<v;f++)F=F<<8|this.bytes.next();r===0&&(u=1);var p=c+s,S={ref:U0.of(p,F),offset:C,deleted:u===0,inObjectStream:u===2};e.push(S)}return e},n.forStream=function(e){return new n(e)},n})(),zo=(function(n){e0(e,n);function e(t,r,x,i){r===void 0&&(r=1/0),x===void 0&&(x=!1),i===void 0&&(i=!1);var o=n.call(this,Ln.of(t),sr.create(),i)||this;return o.alreadyParsed=!1,o.parsedObjects=0,o.shouldWaitForTick=function(){return o.parsedObjects+=1,o.parsedObjects%o.objectsPerTick===0},o.objectsPerTick=r,o.throwOnInvalidObject=x,o}return e.prototype.parseDocument=function(){return w0(this,void 0,void 0,function(){var t,r;return b0(this,function(x){switch(x.label){case 0:if(this.alreadyParsed)throw new Dr("PDFParser","parseDocument");this.alreadyParsed=!0,this.context.header=this.parseHeader(),x.label=1;case 1:return this.bytes.done()?[3,3]:[4,this.parseDocumentSection()];case 2:if(x.sent(),r=this.bytes.offset(),r===t)throw new Li(this.bytes.position());return t=r,[3,1];case 3:return this.maybeRecoverRoot(),this.context.lookup(U0.of(0))&&(console.warn("Removing parsed object: 0 0 R"),this.context.delete(U0.of(0))),[2,this.context]}})})},e.prototype.maybeRecoverRoot=function(){var t=function(h){return h instanceof D0&&h.lookup(w.of("Type"))===w.of("Catalog")},r=this.context.lookup(this.context.trailerInfo.Root);if(!t(r))for(var x=this.context.enumerateIndirectObjects(),i=0,o=x.length;i<o;i++){var a=x[i],l=a[0],c=a[1];t(c)&&(this.context.trailerInfo.Root=l)}},e.prototype.parseHeader=function(){for(;!this.bytes.done();){if(this.matchKeyword(H0.header)){var t=this.parseRawInt();this.bytes.assertNext(k.Period);var r=this.parseRawInt(),x=Pn.forVersion(t,r);return this.skipBinaryHeaderComment(),x}this.bytes.next()}throw new ji(this.bytes.position())},e.prototype.parseIndirectObjectHeader=function(){this.skipWhitespaceAndComments();var t=this.parseRawInt();this.skipWhitespaceAndComments();var r=this.parseRawInt();if(this.skipWhitespaceAndComments(),!this.matchKeyword(H0.obj))throw new Vi(this.bytes.position(),H0.obj);return U0.of(t,r)},e.prototype.matchIndirectObjectHeader=function(){var t=this.bytes.offset();try{return this.parseIndirectObjectHeader(),!0}catch{return this.bytes.moveTo(t),!1}},e.prototype.parseIndirectObject=function(){return w0(this,void 0,void 0,function(){var t,r;return b0(this,function(x){switch(x.label){case 0:return t=this.parseIndirectObjectHeader(),this.skipWhitespaceAndComments(),r=this.parseObject(),this.skipWhitespaceAndComments(),this.matchKeyword(H0.endobj),r instanceof k5&&r.dict.lookup(w.of("Type"))===w.of("ObjStm")?[4,qo.forStream(r,this.shouldWaitForTick).parseIntoContext()]:[3,2];case 1:return x.sent(),[3,3];case 2:r instanceof k5&&r.dict.lookup(w.of("Type"))===w.of("XRef")?Po.forStream(r).parseIntoContext():this.context.assign(t,r),x.label=3;case 3:return[2,t]}})})},e.prototype.tryToParseInvalidIndirectObject=function(){var t=this.bytes.position(),r="Trying to parse invalid object: "+JSON.stringify(t)+")";if(this.throwOnInvalidObject)throw new Error(r);console.warn(r);var x=this.parseIndirectObjectHeader();console.warn("Invalid object ref: "+x),this.skipWhitespaceAndComments();for(var i=this.bytes.offset(),o=!0;!this.bytes.done()&&(this.matchKeyword(H0.endobj)&&(o=!1),!!o);)this.bytes.next();if(o)throw new Ri(t);var a=this.bytes.offset()-H0.endobj.length,l=yx.of(this.bytes.slice(i,a));return this.context.assign(x,l),x},e.prototype.parseIndirectObjects=function(){return w0(this,void 0,void 0,function(){var t;return b0(this,function(r){switch(r.label){case 0:this.skipWhitespaceAndComments(),r.label=1;case 1:if(!(!this.bytes.done()&&Ee[this.bytes.peek()]))return[3,8];t=this.bytes.offset(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.parseIndirectObject()];case 3:return r.sent(),[3,5];case 4:return r.sent(),this.bytes.moveTo(t),this.tryToParseInvalidIndirectObject(),[3,5];case 5:return this.skipWhitespaceAndComments(),this.skipJibberish(),this.shouldWaitForTick()?[4,$t()]:[3,7];case 6:r.sent(),r.label=7;case 7:return[3,1];case 8:return[2]}})})},e.prototype.maybeParseCrossRefSection=function(){if(this.skipWhitespaceAndComments(),!!this.matchKeyword(H0.xref)){this.skipWhitespaceAndComments();for(var t=-1,r=Fx.createEmpty();!this.bytes.done()&&Ee[this.bytes.peek()];){var x=this.parseRawInt();this.skipWhitespaceAndComments();var i=this.parseRawInt();this.skipWhitespaceAndComments();var o=this.bytes.peek();if(o===k.n||o===k.f){var a=U0.of(t,i);this.bytes.next()===k.n?r.addEntry(a,x):r.addDeletedEntry(a,x),t+=1}else t=x;this.skipWhitespaceAndComments()}return r}},e.prototype.maybeParseTrailerDict=function(){if(this.skipWhitespaceAndComments(),!!this.matchKeyword(H0.trailer)){this.skipWhitespaceAndComments();var t=this.parseDict(),r=this.context;r.trailerInfo={Root:t.get(w.of("Root"))||r.trailerInfo.Root,Encrypt:t.get(w.of("Encrypt"))||r.trailerInfo.Encrypt,Info:t.get(w.of("Info"))||r.trailerInfo.Info,ID:t.get(w.of("ID"))||r.trailerInfo.ID}}},e.prototype.maybeParseTrailer=function(){if(this.skipWhitespaceAndComments(),!!this.matchKeyword(H0.startxref)){this.skipWhitespaceAndComments();var t=this.parseRawInt();return this.skipWhitespace(),this.matchKeyword(H0.eof),this.skipWhitespaceAndComments(),this.matchKeyword(H0.eof),this.skipWhitespaceAndComments(),kr.forLastCrossRefSectionOffset(t)}},e.prototype.parseDocumentSection=function(){return w0(this,void 0,void 0,function(){return b0(this,function(t){switch(t.label){case 0:return[4,this.parseIndirectObjects()];case 1:return t.sent(),this.maybeParseCrossRefSection(),this.maybeParseTrailerDict(),this.maybeParseTrailer(),this.skipJibberish(),[2]}})})},e.prototype.skipJibberish=function(){for(this.skipWhitespaceAndComments();!this.bytes.done();){var t=this.bytes.offset(),r=this.bytes.peek(),x=r>=k.Space&&r<=k.Tilde;if(x&&(this.matchKeyword(H0.xref)||this.matchKeyword(H0.trailer)||this.matchKeyword(H0.startxref)||this.matchIndirectObjectHeader())){this.bytes.moveTo(t);break}this.bytes.next()}},e.prototype.skipBinaryHeaderComment=function(){this.skipWhitespaceAndComments();try{var t=this.bytes.offset();this.parseIndirectObjectHeader(),this.bytes.moveTo(t)}catch{this.bytes.next(),this.skipWhitespaceAndComments()}},e.forBytesWithOptions=function(t,r,x,i){return new e(t,r,x,i)},e})(Ox),He=function(n){return 1<<n},D5;(function(n){n[n.Invisible=He(0)]="Invisible",n[n.Hidden=He(1)]="Hidden",n[n.Print=He(2)]="Print",n[n.NoZoom=He(3)]="NoZoom",n[n.NoRotate=He(4)]="NoRotate",n[n.NoView=He(5)]="NoView",n[n.ReadOnly=He(6)]="ReadOnly",n[n.Locked=He(7)]="Locked",n[n.ToggleNoView=He(8)]="ToggleNoView",n[n.LockedContents=He(9)]="LockedContents"})(D5||(D5={}));var jn=function(n){return n instanceof w?n:w.of(n)},C0=function(n){return n instanceof B0?n:B0.of(n)},k0=function(n){return n instanceof B0?n.asNumber():n},S5;(function(n){n.Degrees="degrees",n.Radians="radians"})(S5||(S5={}));var v0=function(n){return O(n,"degreeAngle",["number"]),{type:S5.Degrees,angle:n}},Rx=S5.Radians,Nx=S5.Degrees,Ix=function(n){return n*Math.PI/180},To=function(n){return n*180/Math.PI},ue=function(n){return n.type===Rx?n.angle:n.type===Nx?Ix(n.angle):M5("Invalid rotation: "+JSON.stringify(n))},Lx=function(n){return n.type===Rx?To(n.angle):n.type===Nx?n.angle:M5("Invalid rotation: "+JSON.stringify(n))},lt=function(n){n===void 0&&(n=0);var e=n/90%4;return e===0?0:e===1?90:e===2?180:e===3?270:0},Tt=function(n,e){e===void 0&&(e=0);var t=lt(e);return t===90||t===270?{width:n.height,height:n.width}:{width:n.width,height:n.height}},Mo=function(n,e,t){e===void 0&&(e=0),t===void 0&&(t=0);var r=n.x,x=n.y,i=n.width,o=n.height,a=lt(t),l=e/2;return a===0?{x:r-l,y:x-l,width:i,height:o}:a===90?{x:r-o+l,y:x-l,width:o,height:i}:a===180?{x:r-i+l,y:x-o+l,width:i,height:o}:a===270?{x:r-l,y:x-i+l,width:o,height:i}:{x:r-l,y:x-l,width:i,height:o}},jx=function(){return z0.of(M0.ClipNonZero)},Cn=Math.cos,pn=Math.sin,Fn=Math.tan,Vn=function(n,e,t,r,x,i){return z0.of(M0.ConcatTransformationMatrix,[C0(n),C0(e),C0(t),C0(r),C0(x),C0(i)])},Oe=function(n,e){return Vn(1,0,0,1,n,e)},q5=function(n,e){return Vn(n,0,0,e,0,0)},r5=function(n){return Vn(Cn(k0(n)),pn(k0(n)),-pn(k0(n)),Cn(k0(n)),0,0)},Q5=function(n){return r5(Ix(k0(n)))},Or=function(n,e){return Vn(1,Fn(k0(n)),Fn(k0(e)),1,0,0)},Un=function(n,e){return z0.of(M0.SetLineDashPattern,["["+n.map(C0).join(" ")+"]",C0(e)])},Qt;(function(n){n[n.Butt=0]="Butt",n[n.Round=1]="Round",n[n.Projecting=2]="Projecting"})(Qt||(Qt={}));var Wn=function(n){return z0.of(M0.SetLineCapStyle,[C0(n)])},R1;(function(n){n[n.Miter=0]="Miter",n[n.Round=1]="Round",n[n.Bevel=2]="Bevel"})(R1||(R1={}));var Mt=function(n){return z0.of(M0.SetGraphicsStateParams,[jn(n)])},ae=function(){return z0.of(M0.PushGraphicsState)},le=function(){return z0.of(M0.PopGraphicsState)},R5=function(n){return z0.of(M0.SetLineWidth,[C0(n)])},me=function(n,e,t,r,x,i){return z0.of(M0.AppendBezierCurve,[C0(n),C0(e),C0(t),C0(r),C0(x),C0(i)])},_5=function(n,e,t,r){return z0.of(M0.CurveToReplicateInitialPoint,[C0(n),C0(e),C0(t),C0(r)])},pt=function(){return z0.of(M0.ClosePath)},Je=function(n,e){return z0.of(M0.MoveTo,[C0(n),C0(e)])},se=function(n,e){return z0.of(M0.LineTo,[C0(n),C0(e)])},N5=function(){return z0.of(M0.StrokePath)},Rr=function(){return z0.of(M0.FillNonZero)},Nr=function(){return z0.of(M0.FillNonZeroAndStroke)},Vx=function(){return z0.of(M0.EndPath)},Oo=function(){return z0.of(M0.NextLine)},Ux=function(n){return z0.of(M0.ShowText,[n])},Wx=function(){return z0.of(M0.BeginText)},Kx=function(){return z0.of(M0.EndText)},Ir=function(n,e){return z0.of(M0.SetFontAndSize,[jn(n),C0(e)])},Ro=function(n){return z0.of(M0.SetTextLineHeight,[C0(n)])},N1;(function(n){n[n.Fill=0]="Fill",n[n.Outline=1]="Outline",n[n.FillAndOutline=2]="FillAndOutline",n[n.Invisible=3]="Invisible",n[n.FillAndClip=4]="FillAndClip",n[n.OutlineAndClip=5]="OutlineAndClip",n[n.FillAndOutlineAndClip=6]="FillAndOutlineAndClip",n[n.Clip=7]="Clip"})(N1||(N1={}));var No=function(n,e,t,r,x,i){return z0.of(M0.SetTextMatrix,[C0(n),C0(e),C0(t),C0(r),C0(x),C0(i)])},Gx=function(n,e,t,r,x){return No(Cn(k0(n)),pn(k0(n))+Fn(k0(e)),-pn(k0(n))+Fn(k0(t)),Cn(k0(n)),r,x)},Lr=function(n){return z0.of(M0.DrawObject,[jn(n)])},Io=function(n){return z0.of(M0.NonStrokingColorGray,[C0(n)])},Lo=function(n){return z0.of(M0.StrokingColorGray,[C0(n)])},jo=function(n,e,t){return z0.of(M0.NonStrokingColorRgb,[C0(n),C0(e),C0(t)])},Vo=function(n,e,t){return z0.of(M0.StrokingColorRgb,[C0(n),C0(e),C0(t)])},Uo=function(n,e,t,r){return z0.of(M0.NonStrokingColorCmyk,[C0(n),C0(e),C0(t),C0(r)])},Wo=function(n,e,t,r){return z0.of(M0.StrokingColorCmyk,[C0(n),C0(e),C0(t),C0(r)])},Xx=function(n){return z0.of(M0.BeginMarkedContent,[jn(n)])},Hx=function(){return z0.of(M0.EndMarkedContent)},Ft;(function(n){n.Grayscale="Grayscale",n.RGB="RGB",n.CMYK="CMYK"})(Ft||(Ft={}));var Zx=function(n){return De(n,"gray",0,1),{type:Ft.Grayscale,gray:n}},R0=function(n,e,t){return De(n,"red",0,1),De(e,"green",0,1),De(t,"blue",0,1),{type:Ft.RGB,red:n,green:e,blue:t}},Yx=function(n,e,t,r){return De(n,"cyan",0,1),De(e,"magenta",0,1),De(t,"yellow",0,1),De(r,"key",0,1),{type:Ft.CMYK,cyan:n,magenta:e,yellow:t,key:r}},jr=Ft.Grayscale,Vr=Ft.RGB,Ur=Ft.CMYK,Ot=function(n){return n.type===jr?Io(n.gray):n.type===Vr?jo(n.red,n.green,n.blue):n.type===Ur?Uo(n.cyan,n.magenta,n.yellow,n.key):M5("Invalid color: "+JSON.stringify(n))},I5=function(n){return n.type===jr?Lo(n.gray):n.type===Vr?Vo(n.red,n.green,n.blue):n.type===Ur?Wo(n.cyan,n.magenta,n.yellow,n.key):M5("Invalid color: "+JSON.stringify(n))},pe=function(n,e){return e===void 0&&(e=1),n?.length===1?Zx(n[0]*e):n?.length===3?R0(n[0]*e,n[1]*e,n[2]*e):n?.length===4?Yx(n[0]*e,n[1]*e,n[2]*e,n[3]*e):void 0},I1=function(n){return n.type===jr?[n.gray]:n.type===Vr?[n.red,n.green,n.blue]:n.type===Ur?[n.cyan,n.magenta,n.yellow,n.key]:M5("Invalid color: "+JSON.stringify(n))},s0=0,h0=0,q0=0,P0=0,E5=0,B5=0,L1=new Map([["A",7],["a",7],["C",6],["c",6],["H",1],["h",1],["L",2],["l",2],["M",2],["m",2],["Q",4],["q",4],["S",4],["s",4],["T",2],["t",2],["V",1],["v",1],["Z",0],["z",0]]),Ko=function(n){for(var e,t=[],r=[],x="",i=!1,o=0,a=0,l=n;a<l.length;a++){var c=l[a];if(L1.has(c))o=L1.get(c),e&&(x.length>0&&(r[r.length]=+x),t[t.length]={cmd:e,args:r},r=[],x="",i=!1),e=c;else if([" ",","].includes(c)||c==="-"&&x.length>0&&x[x.length-1]!=="e"||c==="."&&i){if(x.length===0)continue;r.length===o?(t[t.length]={cmd:e,args:r},r=[+x],e==="M"&&(e="L"),e==="m"&&(e="l")):r[r.length]=+x,i=c===".",x=["-","."].includes(c)?c:""}else x+=c,c==="."&&(i=!0)}return x.length>0&&(r.length===o?(t[t.length]={cmd:e,args:r},r=[+x],e==="M"&&(e="L"),e==="m"&&(e="l")):r[r.length]=+x),t[t.length]={cmd:e,args:r},t},Go=function(n){s0=h0=q0=P0=E5=B5=0;for(var e=[],t=0;t<n.length;t++){var r=n[t];if(r.cmd&&typeof j1[r.cmd]=="function"){var x=j1[r.cmd](r.args);Array.isArray(x)?e=e.concat(x):e.push(x)}}return e},j1={M:function(n){return s0=n[0],h0=n[1],q0=P0=null,E5=s0,B5=h0,Je(s0,h0)},m:function(n){return s0+=n[0],h0+=n[1],q0=P0=null,E5=s0,B5=h0,Je(s0,h0)},C:function(n){return s0=n[4],h0=n[5],q0=n[2],P0=n[3],me(n[0],n[1],n[2],n[3],n[4],n[5])},c:function(n){var e=me(n[0]+s0,n[1]+h0,n[2]+s0,n[3]+h0,n[4]+s0,n[5]+h0);return q0=s0+n[2],P0=h0+n[3],s0+=n[4],h0+=n[5],e},S:function(n){(q0===null||P0===null)&&(q0=s0,P0=h0);var e=me(s0-(q0-s0),h0-(P0-h0),n[0],n[1],n[2],n[3]);return q0=n[0],P0=n[1],s0=n[2],h0=n[3],e},s:function(n){(q0===null||P0===null)&&(q0=s0,P0=h0);var e=me(s0-(q0-s0),h0-(P0-h0),s0+n[0],h0+n[1],s0+n[2],h0+n[3]);return q0=s0+n[0],P0=h0+n[1],s0+=n[2],h0+=n[3],e},Q:function(n){return q0=n[0],P0=n[1],s0=n[2],h0=n[3],_5(n[0],n[1],s0,h0)},q:function(n){var e=_5(n[0]+s0,n[1]+h0,n[2]+s0,n[3]+h0);return q0=s0+n[0],P0=h0+n[1],s0+=n[2],h0+=n[3],e},T:function(n){q0===null||P0===null?(q0=s0,P0=h0):(q0=s0-(q0-s0),P0=h0-(P0-h0));var e=_5(q0,P0,n[0],n[1]);return q0=s0-(q0-s0),P0=h0-(P0-h0),s0=n[0],h0=n[1],e},t:function(n){q0===null||P0===null?(q0=s0,P0=h0):(q0=s0-(q0-s0),P0=h0-(P0-h0));var e=_5(q0,P0,s0+n[0],h0+n[1]);return s0+=n[0],h0+=n[1],e},A:function(n){var e=V1(s0,h0,n);return s0=n[5],h0=n[6],e},a:function(n){n[5]+=s0,n[6]+=h0;var e=V1(s0,h0,n);return s0=n[5],h0=n[6],e},L:function(n){return s0=n[0],h0=n[1],q0=P0=null,se(s0,h0)},l:function(n){return s0+=n[0],h0+=n[1],q0=P0=null,se(s0,h0)},H:function(n){return s0=n[0],q0=P0=null,se(s0,h0)},h:function(n){return s0+=n[0],q0=P0=null,se(s0,h0)},V:function(n){return h0=n[0],q0=P0=null,se(s0,h0)},v:function(n){return h0+=n[0],q0=P0=null,se(s0,h0)},Z:function(){var n=pt();return s0=E5,h0=B5,n},z:function(){var n=pt();return s0=E5,h0=B5,n}},V1=function(n,e,t){for(var r=t[0],x=t[1],i=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=Xo(l,c,r,x,o,a,i,n,e),s=[],u=0,f=h;u<f.length;u++){var v=f[u],C=Ho.apply(void 0,v);s.push(me.apply(void 0,C))}return s},Xo=function(n,e,t,r,x,i,o,a,l){var c=o*(Math.PI/180),h=Math.sin(c),s=Math.cos(c);t=Math.abs(t),r=Math.abs(r),q0=s*(a-n)*.5+h*(l-e)*.5,P0=s*(l-e)*.5-h*(a-n)*.5;var u=q0*q0/(t*t)+P0*P0/(r*r);u>1&&(u=Math.sqrt(u),t*=u,r*=u);var f=s/t,v=h/t,C=-h/r,F=s/r,p=f*a+v*l,S=C*a+F*l,y=f*n+v*e,D=C*n+F*e,b=(y-p)*(y-p)+(D-S)*(D-S),A=1/b-.25;A<0&&(A=0);var g=Math.sqrt(A);i===x&&(g=-g);var P=.5*(p+y)-g*(D-S),T=.5*(S+D)+g*(y-p),R=Math.atan2(S-T,p-P),N=Math.atan2(D-T,y-P),L=N-R;L<0&&i===1?L+=2*Math.PI:L>0&&i===0&&(L-=2*Math.PI);for(var M=Math.ceil(Math.abs(L/(Math.PI*.5+.001))),K=[],X=0;X<M;X++){var H=R+X*L/M,U=R+(X+1)*L/M;K[X]=[P,T,H,U,t,r,h,s]}return K},Ho=function(n,e,t,r,x,i,o,a){var l=a*x,c=-o*i,h=o*x,s=a*i,u=.5*(r-t),f=8/3*Math.sin(u*.5)*Math.sin(u*.5)/Math.sin(u),v=n+Math.cos(t)-f*Math.sin(t),C=e+Math.sin(t)+f*Math.cos(t),F=n+Math.cos(r),p=e+Math.sin(r),S=F+f*Math.sin(r),y=p-f*Math.cos(r),D=[l*v+c*C,h*v+s*C,l*S+c*y,h*S+s*y,l*F+c*p,h*F+s*p];return D},Zo=function(n){return Go(Ko(n))},Yo=function(n,e){for(var t=[ae(),e.graphicsState&&Mt(e.graphicsState),Wx(),Ot(e.color),Ir(e.font,e.size),Ro(e.lineHeight),Gx(ue(e.rotate),ue(e.xSkew),ue(e.ySkew),e.x,e.y)].filter(Boolean),r=0,x=n.length;r<x;r++)t.push(Ux(n[r]),Oo());return t.push(Kx(),le()),t},Jx=function(n,e){return[ae(),e.graphicsState&&Mt(e.graphicsState),Oe(e.x,e.y),r5(ue(e.rotate)),q5(e.width,e.height),Or(ue(e.xSkew),ue(e.ySkew)),Lr(n),le()].filter(Boolean)},Jo=function(n,e){return[ae(),e.graphicsState&&Mt(e.graphicsState),Oe(e.x,e.y),r5(ue(e.rotate)),q5(e.xScale,e.yScale),Or(ue(e.xSkew),ue(e.ySkew)),Lr(n),le()].filter(Boolean)},Qo=function(n){var e,t;return[ae(),n.graphicsState&&Mt(n.graphicsState),n.color&&I5(n.color),R5(n.thickness),Un((e=n.dashArray)!==null&&e!==void 0?e:[],(t=n.dashPhase)!==null&&t!==void 0?t:0),Je(n.start.x,n.start.y),n.lineCap&&Wn(n.lineCap),Je(n.start.x,n.start.y),se(n.end.x,n.end.y),N5(),le()].filter(Boolean)},e5=function(n){var e,t;return[ae(),n.graphicsState&&Mt(n.graphicsState),n.color&&Ot(n.color),n.borderColor&&I5(n.borderColor),R5(n.borderWidth),n.borderLineCap&&Wn(n.borderLineCap),Un((e=n.borderDashArray)!==null&&e!==void 0?e:[],(t=n.borderDashPhase)!==null&&t!==void 0?t:0),Oe(n.x,n.y),r5(ue(n.rotate)),Or(ue(n.xSkew),ue(n.ySkew)),Je(0,0),se(0,n.height),se(n.width,n.height),se(n.width,0),pt(),n.color&&n.borderWidth?Nr():n.color?Rr():n.borderColor?N5():pt(),le()].filter(Boolean)},gn=4*((Math.sqrt(2)-1)/3),_o=function(n){var e=k0(n.x),t=k0(n.y),r=k0(n.xScale),x=k0(n.yScale);e-=r,t-=x;var i=r*gn,o=x*gn,a=e+r*2,l=t+x*2,c=e+r,h=t+x;return[ae(),Je(e,h),me(e,h-o,c-i,t,c,t),me(c+i,t,a,h-o,a,h),me(a,h+o,c+i,l,c,l),me(c-i,l,e,h+o,e,h),le()]},$o=function(n){var e=k0(n.x),t=k0(n.y),r=k0(n.xScale),x=k0(n.yScale),i=-r,o=-x,a=r*gn,l=x*gn,c=i+r*2,h=o+x*2,s=i+r,u=o+x;return[Oe(e,t),r5(ue(n.rotate)),Je(i,u),me(i,u-l,s-a,o,s,o),me(s+a,o,c,u-l,c,u),me(c,u+l,s+a,h,s,h),me(s-a,h,i,u+l,i,u)]},fr=function(n){var e,t,r;return T0([ae(),n.graphicsState&&Mt(n.graphicsState),n.color&&Ot(n.color),n.borderColor&&I5(n.borderColor),R5(n.borderWidth),n.borderLineCap&&Wn(n.borderLineCap),Un((e=n.borderDashArray)!==null&&e!==void 0?e:[],(t=n.borderDashPhase)!==null&&t!==void 0?t:0)],n.rotate===void 0?_o({x:n.x,y:n.y,xScale:n.xScale,yScale:n.yScale}):$o({x:n.x,y:n.y,xScale:n.xScale,yScale:n.yScale,rotate:(r=n.rotate)!==null&&r!==void 0?r:v0(0)}),[n.color&&n.borderWidth?Nr():n.color?Rr():n.borderColor?N5():pt(),le()]).filter(Boolean)},e9=function(n,e){var t,r,x;return T0([ae(),e.graphicsState&&Mt(e.graphicsState),Oe(e.x,e.y),r5(ue((t=e.rotate)!==null&&t!==void 0?t:v0(0))),e.scale?q5(e.scale,-e.scale):q5(1,-1),e.color&&Ot(e.color),e.borderColor&&I5(e.borderColor),e.borderWidth&&R5(e.borderWidth),e.borderLineCap&&Wn(e.borderLineCap),Un((r=e.borderDashArray)!==null&&r!==void 0?r:[],(x=e.borderDashPhase)!==null&&x!==void 0?x:0)],Zo(n),[e.color&&e.borderWidth?Nr():e.color?Rr():e.borderColor?N5():pt(),le()]).filter(Boolean)},t9=function(n){var e=k0(n.size),t=-1+.75,r=-1+.51,x=1-.525,i=1-.31,o=-1+.325,a=.3995/(x-r)+r;return[ae(),n.color&&I5(n.color),R5(n.thickness),Oe(n.x,n.y),Je(o*e,a*e),se(t*e,r*e),se(i*e,x*e),N5(),le()].filter(Boolean)},bt=function(n){return n.rotation===0?[Oe(0,0),Q5(0)]:n.rotation===90?[Oe(n.width,0),Q5(90)]:n.rotation===180?[Oe(n.width,n.height),Q5(180)]:n.rotation===270?[Oe(0,n.height),Q5(270)]:[]},$5=function(n){var e=e5({x:n.x,y:n.y,width:n.width,height:n.height,borderWidth:n.borderWidth,color:n.color,borderColor:n.borderColor,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)});if(!n.filled)return e;var t=k0(n.width),r=k0(n.height),x=Math.min(t,r)/2,i=t9({x:t/2,y:r/2,size:x,thickness:n.thickness,color:n.markColor});return T0([ae()],e,i,[le()])},en=function(n){var e=k0(n.width),t=k0(n.height),r=Math.min(e,t)/2,x=fr({x:n.x,y:n.y,xScale:r,yScale:r,color:n.color,borderColor:n.borderColor,borderWidth:n.borderWidth});if(!n.filled)return x;var i=fr({x:n.x,y:n.y,xScale:r*.45,yScale:r*.45,color:n.dotColor,borderColor:void 0,borderWidth:0});return T0([ae()],x,i,[le()])},U1=function(n){var e=k0(n.x),t=k0(n.y),r=k0(n.width),x=k0(n.height),i=e5({x:e,y:t,width:r,height:x,borderWidth:n.borderWidth,color:n.color,borderColor:n.borderColor,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)}),o=Wr(n.textLines,{color:n.textColor,font:n.font,size:n.fontSize,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)});return T0([ae()],i,o,[le()])},Wr=function(n,e){for(var t=[Wx(),Ot(e.color),Ir(e.font,e.size)],r=0,x=n.length;r<x;r++){var i=n[r],o=i.encoded,a=i.x,l=i.y;t.push(Gx(ue(e.rotate),ue(e.xSkew),ue(e.ySkew),a,l),Ux(o))}return t.push(Kx()),t},Qx=function(n){var e=k0(n.x),t=k0(n.y),r=k0(n.width),x=k0(n.height),i=k0(n.borderWidth),o=k0(n.padding),a=e+i/2+o,l=t+i/2+o,c=r-(i/2+o)*2,h=x-(i/2+o)*2,s=[Je(a,l),se(a,l+h),se(a+c,l+h),se(a+c,l),pt(),jx(),Vx()],u=e5({x:e,y:t,width:r,height:x,borderWidth:n.borderWidth,color:n.color,borderColor:n.borderColor,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)}),f=Wr(n.textLines,{color:n.textColor,font:n.font,size:n.fontSize,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)}),v=T0([Xx("Tx"),ae()],f,[le(),Hx()]);return T0([ae()],u,s,v,[le()])},n9=function(n){for(var e=k0(n.x),t=k0(n.y),r=k0(n.width),x=k0(n.height),i=k0(n.lineHeight),o=k0(n.borderWidth),a=k0(n.padding),l=e+o/2+a,c=t+o/2+a,h=r-(o/2+a)*2,s=x-(o/2+a)*2,u=[Je(l,c),se(l,c+s),se(l+h,c+s),se(l+h,c),pt(),jx(),Vx()],f=e5({x:e,y:t,width:r,height:x,borderWidth:n.borderWidth,color:n.color,borderColor:n.borderColor,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)}),v=[],C=0,F=n.selectedLines.length;C<F;C++){var p=n.textLines[n.selectedLines[C]];v.push.apply(v,e5({x:p.x-a,y:p.y-(i-p.height)/2,width:r-o,height:p.height+(i-p.height)/2,borderWidth:0,color:n.selectedColor,borderColor:void 0,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)}))}var S=Wr(n.textLines,{color:n.textColor,font:n.font,size:n.fontSize,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)}),y=T0([Xx("Tx"),ae()],S,[le(),Hx()]);return T0([ae()],f,v,u,y,[le()])},r9=(function(n){e0(e,n);function e(){var t=this,r="Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";return t=n.call(this,r)||this,t}return e})(Error),x9=(function(n){e0(e,n);function e(){var t=this,r="Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";return t=n.call(this,r)||this,t}return e})(Error),i9=(function(n){e0(e,n);function e(){var t=this,r="A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";return t=n.call(this,r)||this,t}return e})(Error),o9=(function(n){e0(e,n);function e(){var t=this,r="PDFDocument has no pages so `PDFDocument.removePage` cannot be called";return t=n.call(this,r)||this,t}return e})(Error),a9=(function(n){e0(e,n);function e(t){var r=this,x='PDFDocument has no form field with the name "'+t+'"';return r=n.call(this,x)||this,r}return e})(Error),qt=(function(n){e0(e,n);function e(t,r,x){var i,o,a=this,l=r?.name,c=(o=(i=x?.constructor)===null||i===void 0?void 0:i.name)!==null&&o!==void 0?o:x,h='Expected field "'+t+'" to be of type '+l+", "+("but it is actually of type "+c);return a=n.call(this,h)||this,a}return e})(Error);(function(n){e0(e,n);function e(t){var r=this,x='Failed to select check box due to missing onValue: "'+t+'"';return r=n.call(this,x)||this,r}return e})(Error);var _x=(function(n){e0(e,n);function e(t){var r=this,x='A field already exists with the specified name: "'+t+'"';return r=n.call(this,x)||this,r}return e})(Error),l9=(function(n){e0(e,n);function e(t){var r=this,x='Field name contains invalid component: "'+t+'"';return r=n.call(this,x)||this,r}return e})(Error);(function(n){e0(e,n);function e(t){var r=this,x='A non-terminal field already exists with the specified name: "'+t+'"';return r=n.call(this,x)||this,r}return e})(Error);var c9=(function(n){e0(e,n);function e(t){var r=this,x="Reading rich text fields is not supported: Attempted to read rich text field: "+t;return r=n.call(this,x)||this,r}return e})(Error),s9=(function(n){e0(e,n);function e(t,r){var x=this,i="Failed to layout combed text as lineLength="+t+" is greater than cellCount="+r;return x=n.call(this,i)||this,x}return e})(Error),h9=(function(n){e0(e,n);function e(t,r,x){var i=this,o="Attempted to set text with length="+t+" for TextField with maxLength="+r+" and name="+x;return i=n.call(this,o)||this,i}return e})(Error),d9=(function(n){e0(e,n);function e(t,r,x){var i=this,o="Attempted to set maxLength="+r+", which is less than "+t+", the length of this field's current value (name="+x+")";return i=n.call(this,o)||this,i}return e})(Error),oe;(function(n){n[n.Left=0]="Left",n[n.Center=1]="Center",n[n.Right=2]="Right"})(oe||(oe={}));var $x=4,e2=500,t2=function(n,e,t,r){r===void 0&&(r=!1);for(var x=$x;x<e2;){for(var i=0,o=0,a=n.length;o<a;o++){i+=1;for(var l=n[o],c=l.split(" "),h=t.width,s=0,u=c.length;s<u;s++){var f=s===u-1,v=f?c[s]:c[s]+" ",C=e.widthOfTextAtSize(v,x);h-=C,h<=0&&(i+=1,h=t.width-C)}}if(!r&&i>n.length)return x-1;var F=e.heightAtSize(x),p=F+F*.2,S=p*i;if(S>Math.abs(t.height))return x-1;x+=1}return x},u9=function(n,e,t,r){for(var x=t.width/r,i=t.height,o=$x,a=y2(n);o<e2;){for(var l=0,c=a.length;l<c;l++){var h=a[l],s=e.widthOfTextAtSize(h,o)>x*.75;if(s)return o-1}var u=e.heightAtSize(o,{descender:!1});if(u>i)return o-1;o+=1}return o},f9=function(n){for(var e=n.length;e>0;e--)if(/\s/.test(n[e]))return e},v9=function(n,e,t,r){for(var x,i=n.length;i>0;){var o=n.substring(0,i),a=t.encodeText(o),l=t.widthOfTextAtSize(o,r);if(l<e){var c=n.substring(i)||void 0;return{line:o,encoded:a,width:l,remainder:c}}i=(x=f9(o))!==null&&x!==void 0?x:0}return{line:n,encoded:t.encodeText(n),width:t.widthOfTextAtSize(n,r),remainder:void 0}},n2=function(n,e){var t=e.alignment,r=e.fontSize,x=e.font,i=e.bounds,o=_1(T5(n));(r===void 0||r===0)&&(r=t2(o,x,i,!0));for(var a=x.heightAtSize(r),l=a+a*.2,c=[],h=i.x,s=i.y,u=i.x+i.width,f=i.y+i.height,v=i.y+i.height,C=0,F=o.length;C<F;C++)for(var p=o[C];p!==void 0;){var S=v9(p,i.width,x,r),y=S.line,D=S.encoded,b=S.width,A=S.remainder,g=t===oe.Left?i.x:t===oe.Center?i.x+i.width/2-b/2:t===oe.Right?i.x+i.width-b:i.x;v-=l,g<h&&(h=g),v<s&&(s=v),g+b>u&&(u=g+b),v+a>f&&(f=v+a),c.push({text:y,encoded:D,width:b,height:a,x:g,y:v}),p=A?.trim()}return{fontSize:r,lineHeight:l,lines:c,bounds:{x:h,y:s,width:u-h,height:f-s}}},E9=function(n,e){var t=e.fontSize,r=e.font,x=e.bounds,i=e.cellCount,o=$1(T5(n));if(o.length>i)throw new s9(o.length,i);(t===void 0||t===0)&&(t=u9(o,r,x,i));for(var a=x.width/i,l=r.heightAtSize(t,{descender:!1}),c=x.y+(x.height/2-l/2),h=[],s=x.x,u=x.y,f=x.x+x.width,v=x.y+x.height,C=0,F=0;C<i;){var p=ex(o,F),S=p[0],y=p[1],D=r.encodeText(S),b=r.widthOfTextAtSize(S,t),A=x.x+(a*C+a/2),g=A-b/2;g<s&&(s=g),c<u&&(u=c),g+b>f&&(f=g+b),c+l>v&&(v=c+l),h.push({text:o,encoded:D,width:b,height:l,x:g,y:c}),C+=1,F+=y}return{fontSize:t,cells:h,bounds:{x:s,y:u,width:f-s,height:v-u}}},An=function(n,e){var t=e.alignment,r=e.fontSize,x=e.font,i=e.bounds,o=$1(T5(n));(r===void 0||r===0)&&(r=t2([o],x,i));var a=x.encodeText(o),l=x.widthOfTextAtSize(o,r),c=x.heightAtSize(r,{descender:!1}),h=t===oe.Left?i.x:t===oe.Center?i.x+i.width/2-l/2:t===oe.Right?i.x+i.width-l:i.x,s=i.y+(i.height/2-c/2);return{fontSize:r,line:{text:o,encoded:a,width:l,height:c,x:h,y:s},bounds:{x:h,y:s,width:l,height:c}}},x5=function(n){return"normal"in n?n:{normal:n}},B9=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,gt=function(n){var e,t,r=(e=n.getDefaultAppearance())!==null&&e!==void 0?e:"",x=(t=gr(r,B9).match)!==null&&t!==void 0?t:[],i=Number(x[2]);return isFinite(i)?i:void 0},C9=/(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,Re=function(n){var e,t=(e=n.getDefaultAppearance())!==null&&e!==void 0?e:"",r=gr(t,C9).match,x=r??[],i=x[1],o=x[2],a=x[3],l=x[4],c=x[5];if(c==="g"&&i)return Zx(Number(i));if(c==="rg"&&i&&o&&a)return R0(Number(i),Number(o),Number(a));if(c==="k"&&i&&o&&a&&l)return Yx(Number(i),Number(o),Number(a),Number(l))},Ne=function(n,e,t,r){var x;r===void 0&&(r=0);var i=[Ot(e).toString(),Ir((x=t?.name)!==null&&x!==void 0?x:"dummy__noop",r).toString()].join(`
`);n.setDefaultAppearance(i)},p9=function(n,e){var t,r,x,i=Re(e),o=Re(n.acroField),a=e.getRectangle(),l=e.getAppearanceCharacteristics(),c=e.getBorderStyle(),h=(t=c?.getWidth())!==null&&t!==void 0?t:0,s=lt(l?.getRotation()),u=Tt(a,s),f=u.width,v=u.height,C=bt(F0(F0({},a),{rotation:s})),F=R0(0,0,0),p=(r=pe(l?.getBorderColor()))!==null&&r!==void 0?r:F,S=pe(l?.getBackgroundColor()),y=pe(l?.getBackgroundColor(),.8),D=(x=i??o)!==null&&x!==void 0?x:F;Ne(i?e:n.acroField,D);var b={x:0+h/2,y:0+h/2,width:f-h,height:v-h,thickness:1.5,borderWidth:h,borderColor:p,markColor:D};return{normal:{on:T0(C,$5(F0(F0({},b),{color:S,filled:!0}))),off:T0(C,$5(F0(F0({},b),{color:S,filled:!1})))},down:{on:T0(C,$5(F0(F0({},b),{color:y,filled:!0}))),off:T0(C,$5(F0(F0({},b),{color:y,filled:!1})))}}},F9=function(n,e){var t,r,x,i=Re(e),o=Re(n.acroField),a=e.getRectangle(),l=e.getAppearanceCharacteristics(),c=e.getBorderStyle(),h=(t=c?.getWidth())!==null&&t!==void 0?t:0,s=lt(l?.getRotation()),u=Tt(a,s),f=u.width,v=u.height,C=bt(F0(F0({},a),{rotation:s})),F=R0(0,0,0),p=(r=pe(l?.getBorderColor()))!==null&&r!==void 0?r:F,S=pe(l?.getBackgroundColor()),y=pe(l?.getBackgroundColor(),.8),D=(x=i??o)!==null&&x!==void 0?x:F;Ne(i?e:n.acroField,D);var b={x:f/2,y:v/2,width:f-h,height:v-h,borderWidth:h,borderColor:p,dotColor:D};return{normal:{on:T0(C,en(F0(F0({},b),{color:S,filled:!0}))),off:T0(C,en(F0(F0({},b),{color:S,filled:!1})))},down:{on:T0(C,en(F0(F0({},b),{color:y,filled:!0}))),off:T0(C,en(F0(F0({},b),{color:y,filled:!1})))}}},g9=function(n,e,t){var r,x,i,o,a,l=Re(e),c=Re(n.acroField),h=gt(e),s=gt(n.acroField),u=e.getRectangle(),f=e.getAppearanceCharacteristics(),v=e.getBorderStyle(),C=f?.getCaptions(),F=(r=C?.normal)!==null&&r!==void 0?r:"",p=(i=(x=C?.down)!==null&&x!==void 0?x:F)!==null&&i!==void 0?i:"",S=(o=v?.getWidth())!==null&&o!==void 0?o:0,y=lt(f?.getRotation()),D=Tt(u,y),b=D.width,A=D.height,g=bt(F0(F0({},u),{rotation:y})),P=R0(0,0,0),T=pe(f?.getBorderColor()),R=pe(f?.getBackgroundColor()),N=pe(f?.getBackgroundColor(),.8),L={x:S,y:S,width:b-S*2,height:A-S*2},M=An(F,{alignment:oe.Center,fontSize:h??s,font:t,bounds:L}),K=An(p,{alignment:oe.Center,fontSize:h??s,font:t,bounds:L}),X=Math.min(M.fontSize,K.fontSize),H=(a=l??c)!==null&&a!==void 0?a:P;Ne(l||h!==void 0?e:n.acroField,H,t,X);var U={x:0+S/2,y:0+S/2,width:b-S,height:A-S,borderWidth:S,borderColor:T,textColor:H,font:t.name,fontSize:X};return{normal:T0(g,U1(F0(F0({},U),{color:R,textLines:[M.line]}))),down:T0(g,U1(F0(F0({},U),{color:N,textLines:[K.line]})))}},A9=function(n,e,t){var r,x,i,o,a=Re(e),l=Re(n.acroField),c=gt(e),h=gt(n.acroField),s=e.getRectangle(),u=e.getAppearanceCharacteristics(),f=e.getBorderStyle(),v=(r=n.getText())!==null&&r!==void 0?r:"",C=(x=f?.getWidth())!==null&&x!==void 0?x:0,F=lt(u?.getRotation()),p=Tt(s,F),S=p.width,y=p.height,D=bt(F0(F0({},s),{rotation:F})),b=R0(0,0,0),A=pe(u?.getBorderColor()),g=pe(u?.getBackgroundColor()),P,T,R=n.isCombed()?0:1,N={x:C+R,y:C+R,width:S-(C+R)*2,height:y-(C+R)*2};if(n.isMultiline()){var L=n2(v,{alignment:n.getAlignment(),fontSize:c??h,font:t,bounds:N});P=L.lines,T=L.fontSize}else if(n.isCombed()){var L=E9(v,{fontSize:c??h,font:t,bounds:N,cellCount:(i=n.getMaxLength())!==null&&i!==void 0?i:0});P=L.cells,T=L.fontSize}else{var L=An(v,{alignment:n.getAlignment(),fontSize:c??h,font:t,bounds:N});P=[L.line],T=L.fontSize}var M=(o=a??l)!==null&&o!==void 0?o:b;Ne(a||c!==void 0?e:n.acroField,M,t,T);var K={x:0+C/2,y:0+C/2,width:S-C,height:y-C,borderWidth:C??0,borderColor:A,textColor:M,font:t.name,fontSize:T,color:g,textLines:P,padding:R};return T0(D,Qx(K))},y9=function(n,e,t){var r,x,i,o=Re(e),a=Re(n.acroField),l=gt(e),c=gt(n.acroField),h=e.getRectangle(),s=e.getAppearanceCharacteristics(),u=e.getBorderStyle(),f=(r=n.getSelected()[0])!==null&&r!==void 0?r:"",v=(x=u?.getWidth())!==null&&x!==void 0?x:0,C=lt(s?.getRotation()),F=Tt(h,C),p=F.width,S=F.height,y=bt(F0(F0({},h),{rotation:C})),D=R0(0,0,0),b=pe(s?.getBorderColor()),A=pe(s?.getBackgroundColor()),g=1,P={x:v+g,y:v+g,width:p-(v+g)*2,height:S-(v+g)*2},T=An(f,{alignment:oe.Left,fontSize:l??c,font:t,bounds:P}),R=T.line,N=T.fontSize,L=(i=o??a)!==null&&i!==void 0?i:D;Ne(o||l!==void 0?e:n.acroField,L,t,N);var M={x:0+v/2,y:0+v/2,width:p-v,height:S-v,borderWidth:v??0,borderColor:b,textColor:L,font:t.name,fontSize:N,color:A,textLines:[R],padding:g};return T0(y,Qx(M))},D9=function(n,e,t){var r,x,i=Re(e),o=Re(n.acroField),a=gt(e),l=gt(n.acroField),c=e.getRectangle(),h=e.getAppearanceCharacteristics(),s=e.getBorderStyle(),u=(r=s?.getWidth())!==null&&r!==void 0?r:0,f=lt(h?.getRotation()),v=Tt(c,f),C=v.width,F=v.height,p=bt(F0(F0({},c),{rotation:f})),S=R0(0,0,0),y=pe(h?.getBorderColor()),D=pe(h?.getBackgroundColor()),b=n.getOptions(),A=n.getSelected();n.isSorted()&&b.sort();for(var g="",P=0,T=b.length;P<T;P++)g+=b[P],P<T-1&&(g+=`
`);for(var R=1,N={x:u+R,y:u+R,width:C-(u+R)*2,height:F-(u+R)*2},L=n2(g,{alignment:oe.Left,fontSize:a??l,font:t,bounds:N}),M=L.lines,K=L.fontSize,X=L.lineHeight,H=[],P=0,T=M.length;P<T;P++){var U=M[P];A.includes(U.text)&&H.push(P)}var a0=R0(153/255,193/255,218/255),o0=(x=i??o)!==null&&x!==void 0?x:S;return Ne(i||a!==void 0?e:n.acroField,o0,t,K),T0(p,n9({x:0+u/2,y:0+u/2,width:C-u,height:F-u,borderWidth:u??0,borderColor:y,textColor:o0,font:t.name,fontSize:K,color:D,textLines:M,lineHeight:X,selectedColor:a0,selectedLines:H,padding:R}))},r2=(function(){function n(e,t,r){this.alreadyEmbedded=!1,O(e,"ref",[[U0,"PDFRef"]]),O(t,"doc",[[ot,"PDFDocument"]]),O(r,"embedder",[[kx,"PDFPageEmbedder"]]),this.ref=e,this.doc=t,this.width=r.width,this.height=r.height,this.embedder=r}return n.prototype.scale=function(e){return O(e,"factor",["number"]),{width:this.width*e,height:this.height*e}},n.prototype.size=function(){return this.scale(1)},n.prototype.embed=function(){return w0(this,void 0,void 0,function(){return b0(this,function(e){switch(e.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)];case 1:e.sent(),this.alreadyEmbedded=!0,e.label=2;case 2:return[2]}})})},n.of=function(e,t,r){return new n(e,t,r)},n})(),be=(function(){function n(e,t,r){this.modified=!0,O(e,"ref",[[U0,"PDFRef"]]),O(t,"doc",[[ot,"PDFDocument"]]),O(r,"embedder",[[Sr,"CustomFontEmbedder"],[fn,"StandardFontEmbedder"]]),this.ref=e,this.doc=t,this.name=r.fontName,this.embedder=r}return n.prototype.encodeText=function(e){return O(e,"text",["string"]),this.modified=!0,this.embedder.encodeText(e)},n.prototype.widthOfTextAtSize=function(e,t){return O(e,"text",["string"]),O(t,"size",["number"]),this.embedder.widthOfTextAtSize(e,t)},n.prototype.heightAtSize=function(e,t){var r;return O(e,"size",["number"]),_(t?.descender,"options.descender",["boolean"]),this.embedder.heightOfFontAtSize(e,{descender:(r=t?.descender)!==null&&r!==void 0?r:!0})},n.prototype.sizeAtHeight=function(e){return O(e,"height",["number"]),this.embedder.sizeOfFontAtHeight(e)},n.prototype.getCharacterSet=function(){return this.embedder instanceof fn?this.embedder.encoding.supportedCodePoints:this.embedder.font.characterSet},n.prototype.embed=function(){return w0(this,void 0,void 0,function(){return b0(this,function(e){switch(e.label){case 0:return this.modified?[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]:[3,2];case 1:e.sent(),this.modified=!1,e.label=2;case 2:return[2]}})})},n.of=function(e,t,r){return new n(e,t,r)},n})(),vr=(function(){function n(e,t,r){O(e,"ref",[[U0,"PDFRef"]]),O(t,"doc",[[ot,"PDFDocument"]]),O(r,"embedder",[[Dx,"JpegEmbedder"],[mx,"PngEmbedder"]]),this.ref=e,this.doc=t,this.width=r.width,this.height=r.height,this.embedder=r}return n.prototype.scale=function(e){return O(e,"factor",["number"]),{width:this.width*e,height:this.height*e}},n.prototype.scaleToFit=function(e,t){O(e,"width",["number"]),O(t,"height",["number"]);var r=e/this.width,x=t/this.height,i=Math.min(r,x);return this.scale(i)},n.prototype.size=function(){return this.scale(1)},n.prototype.embed=function(){return w0(this,void 0,void 0,function(){var e,t,r;return b0(this,function(x){switch(x.label){case 0:return this.embedder?(this.embedTask||(e=this,t=e.doc,r=e.ref,this.embedTask=this.embedder.embedIntoContext(t.context,r)),[4,this.embedTask]):[2];case 1:return x.sent(),this.embedder=void 0,[2]}})})},n.of=function(e,t,r){return new n(e,t,r)},n})(),Bt;(function(n){n[n.Left=0]="Left",n[n.Center=1]="Center",n[n.Right=2]="Right"})(Bt||(Bt={}));var i5=function(n){_(n?.x,"options.x",["number"]),_(n?.y,"options.y",["number"]),_(n?.width,"options.width",["number"]),_(n?.height,"options.height",["number"]),_(n?.textColor,"options.textColor",[[Object,"Color"]]),_(n?.backgroundColor,"options.backgroundColor",[[Object,"Color"]]),_(n?.borderColor,"options.borderColor",[[Object,"Color"]]),_(n?.borderWidth,"options.borderWidth",["number"]),_(n?.rotate,"options.rotate",[[Object,"Rotation"]])},Rt=(function(){function n(e,t,r){O(e,"acroField",[[n5,"PDFAcroTerminal"]]),O(t,"ref",[[U0,"PDFRef"]]),O(r,"doc",[[ot,"PDFDocument"]]),this.acroField=e,this.ref=t,this.doc=r}return n.prototype.getName=function(){var e;return(e=this.acroField.getFullyQualifiedName())!==null&&e!==void 0?e:""},n.prototype.isReadOnly=function(){return this.acroField.hasFlag(Ue.ReadOnly)},n.prototype.enableReadOnly=function(){this.acroField.setFlagTo(Ue.ReadOnly,!0)},n.prototype.disableReadOnly=function(){this.acroField.setFlagTo(Ue.ReadOnly,!1)},n.prototype.isRequired=function(){return this.acroField.hasFlag(Ue.Required)},n.prototype.enableRequired=function(){this.acroField.setFlagTo(Ue.Required,!0)},n.prototype.disableRequired=function(){this.acroField.setFlagTo(Ue.Required,!1)},n.prototype.isExported=function(){return!this.acroField.hasFlag(Ue.NoExport)},n.prototype.enableExporting=function(){this.acroField.setFlagTo(Ue.NoExport,!1)},n.prototype.disableExporting=function(){this.acroField.setFlagTo(Ue.NoExport,!0)},n.prototype.needsAppearancesUpdate=function(){throw new Me(this.constructor.name,"needsAppearancesUpdate")},n.prototype.defaultUpdateAppearances=function(e){throw new Me(this.constructor.name,"defaultUpdateAppearances")},n.prototype.markAsDirty=function(){this.doc.getForm().markFieldAsDirty(this.ref)},n.prototype.markAsClean=function(){this.doc.getForm().markFieldAsClean(this.ref)},n.prototype.isDirty=function(){return this.doc.getForm().fieldIsDirty(this.ref)},n.prototype.createWidget=function(e){var t,r=e.textColor,x=e.backgroundColor,i=e.borderColor,o=e.borderWidth,a=Lx(e.rotate),l=e.caption,c=e.x,h=e.y,s=e.width+o,u=e.height+o,f=!!e.hidden,v=e.page;Bx(a,"degreesAngle",90);var C=dr.create(this.doc.context,this.ref),F=Mo({x:c,y:h,width:s,height:u},o,a);C.setRectangle(F),v&&C.setP(v);var p=C.getOrCreateAppearanceCharacteristics();x&&p.setBackgroundColor(I1(x)),p.setRotation(a),l&&p.setCaptions({normal:l}),i&&p.setBorderColor(I1(i));var S=C.getOrCreateBorderStyle();if(o!==void 0&&S.setWidth(o),C.setFlagTo(D5.Print,!0),C.setFlagTo(D5.Hidden,f),C.setFlagTo(D5.Invisible,!1),r){var y=(t=this.acroField.getDefaultAppearance())!==null&&t!==void 0?t:"",D=y+`
`+Ot(r).toString();this.acroField.setDefaultAppearance(D)}return C},n.prototype.updateWidgetAppearanceWithFont=function(e,t,r){var x=r.normal,i=r.rollover,o=r.down;this.updateWidgetAppearances(e,{normal:this.createAppearanceStream(e,x,t),rollover:i&&this.createAppearanceStream(e,i,t),down:o&&this.createAppearanceStream(e,o,t)})},n.prototype.updateOnOffWidgetAppearance=function(e,t,r){var x=r.normal,i=r.rollover,o=r.down;this.updateWidgetAppearances(e,{normal:this.createAppearanceDict(e,x,t),rollover:i&&this.createAppearanceDict(e,i,t),down:o&&this.createAppearanceDict(e,o,t)})},n.prototype.updateWidgetAppearances=function(e,t){var r=t.normal,x=t.rollover,i=t.down;e.setNormalAppearance(r),x?e.setRolloverAppearance(x):e.removeRolloverAppearance(),i?e.setDownAppearance(i):e.removeDownAppearance()},n.prototype.createAppearanceStream=function(e,t,r){var x,i=this.acroField.dict.context,o=e.getRectangle(),a=o.width,l=o.height,c=r&&{Font:(x={},x[r.name]=r.ref,x)},h=i.formXObject(t,{Resources:c,BBox:i.obj([0,0,a,l]),Matrix:i.obj([1,0,0,1,0,0])}),s=i.register(h);return s},n.prototype.createImageAppearanceStream=function(e,t,r){var x,i,o=this.acroField.dict.context,a=e.getRectangle(),l=e.getAppearanceCharacteristics(),c=e.getBorderStyle(),h=(i=c?.getWidth())!==null&&i!==void 0?i:0,s=lt(l?.getRotation()),u=bt(F0(F0({},a),{rotation:s})),f=Tt(a,s),v=t.scaleToFit(f.width-h*2,f.height-h*2),C={x:h,y:h,width:v.width,height:v.height,rotate:v0(0),xSkew:v0(0),ySkew:v0(0)};r===Bt.Center?(C.x+=(f.width-h*2)/2-v.width/2,C.y+=(f.height-h*2)/2-v.height/2):r===Bt.Right&&(C.x=f.width-h-v.width,C.y=f.height-h-v.height);var F=this.doc.context.addRandomSuffix("Image",10),p=T0(u,Jx(F,C)),S={XObject:(x={},x[F]=t.ref,x)},y=o.formXObject(p,{Resources:S,BBox:o.obj([0,0,a.width,a.height]),Matrix:o.obj([1,0,0,1,0,0])});return o.register(y)},n.prototype.createAppearanceDict=function(e,t,r){var x=this.acroField.dict.context,i=this.createAppearanceStream(e,t.on),o=this.createAppearanceStream(e,t.off),a=x.obj({});return a.set(r,i),a.set(w.of("Off"),o),a},n})(),C5=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroCheckBox",[[zn,"PDFAcroCheckBox"]]),i.acroField=t,i}return e.prototype.check=function(){var t,r=(t=this.acroField.getOnValue())!==null&&t!==void 0?t:w.of("Yes");this.markAsDirty(),this.acroField.setValue(r)},e.prototype.uncheck=function(){this.markAsDirty(),this.acroField.setValue(w.of("Off"))},e.prototype.isChecked=function(){var t=this.acroField.getOnValue();return!!t&&t===this.acroField.getValue()},e.prototype.addToPage=function(t,r){var x,i,o,a,l,c;O(t,"page",[[Te,"PDFPage"]]),i5(r),r||(r={}),"textColor"in r||(r.textColor=R0(0,0,0)),"backgroundColor"in r||(r.backgroundColor=R0(1,1,1)),"borderColor"in r||(r.borderColor=R0(0,0,0)),"borderWidth"in r||(r.borderWidth=1);var h=this.createWidget({x:(x=r.x)!==null&&x!==void 0?x:0,y:(i=r.y)!==null&&i!==void 0?i:0,width:(o=r.width)!==null&&o!==void 0?o:50,height:(a=r.height)!==null&&a!==void 0?a:50,textColor:r.textColor,backgroundColor:r.backgroundColor,borderColor:r.borderColor,borderWidth:(l=r.borderWidth)!==null&&l!==void 0?l:0,rotate:(c=r.rotate)!==null&&c!==void 0?c:v0(0),hidden:r.hidden,page:t.ref}),s=this.doc.context.register(h.dict);this.acroField.addWidget(s),h.setAppearanceState(w.of("Off")),this.updateWidgetAppearance(h,w.of("Yes")),t.node.addAnnot(s)},e.prototype.needsAppearancesUpdate=function(){for(var t,r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=o.getAppearanceState(),l=(t=o.getAppearances())===null||t===void 0?void 0:t.normal;if(!(l instanceof D0)||a&&!l.has(a))return!0}return!1},e.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},e.prototype.updateAppearances=function(t){var r;_(t,"provider",[Function]);for(var x=this.acroField.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i],l=(r=a.getOnValue())!==null&&r!==void 0?r:w.of("Yes");l&&this.updateWidgetAppearance(a,l,t)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,r,x){var i=x??p9,o=x5(i(this,t));this.updateOnOffWidgetAppearance(t,r,o)},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),on=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroComboBox",[[Tn,"PDFAcroComboBox"]]),i.acroField=t,i}return e.prototype.getOptions=function(){for(var t=this.acroField.getOptions(),r=new Array(t.length),x=0,i=r.length;x<i;x++){var o=t[x],a=o.display,l=o.value;r[x]=(a??l).decodeText()}return r},e.prototype.getSelected=function(){for(var t=this.acroField.getValues(),r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]=t[x].decodeText();return r},e.prototype.setOptions=function(t){O(t,"options",[Array]);for(var r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]={value:u0.fromText(t[x])};this.acroField.setOptions(r)},e.prototype.addOptions=function(t){O(t,"options",["string",Array]);for(var r=Array.isArray(t)?t:[t],x=this.acroField.getOptions(),i=new Array(r.length),o=0,a=r.length;o<a;o++)i[o]={value:u0.fromText(r[o])};this.acroField.setOptions(x.concat(i))},e.prototype.select=function(t,r){r===void 0&&(r=!1),O(t,"options",["string",Array]),O(r,"merge",["boolean"]);var x=Array.isArray(t)?t:[t],i=this.getOptions(),o=x.find(function(s){return!i.includes(s)});o&&this.enableEditing(),this.markAsDirty(),(x.length>1||x.length===1&&r)&&this.enableMultiselect();for(var a=new Array(x.length),l=0,c=x.length;l<c;l++)a[l]=u0.fromText(x[l]);if(r){var h=this.acroField.getValues();this.acroField.setValues(h.concat(a))}else this.acroField.setValues(a)},e.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},e.prototype.setFontSize=function(t){qn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.isEditable=function(){return this.acroField.hasFlag(L0.Edit)},e.prototype.enableEditing=function(){this.acroField.setFlagTo(L0.Edit,!0)},e.prototype.disableEditing=function(){this.acroField.setFlagTo(L0.Edit,!1)},e.prototype.isSorted=function(){return this.acroField.hasFlag(L0.Sort)},e.prototype.enableSorting=function(){this.acroField.setFlagTo(L0.Sort,!0)},e.prototype.disableSorting=function(){this.acroField.setFlagTo(L0.Sort,!1)},e.prototype.isMultiselect=function(){return this.acroField.hasFlag(L0.MultiSelect)},e.prototype.enableMultiselect=function(){this.acroField.setFlagTo(L0.MultiSelect,!0)},e.prototype.disableMultiselect=function(){this.acroField.setFlagTo(L0.MultiSelect,!1)},e.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(L0.DoNotSpellCheck)},e.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(L0.DoNotSpellCheck,!1)},e.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(L0.DoNotSpellCheck,!0)},e.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(L0.CommitOnSelChange)},e.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(L0.CommitOnSelChange,!0)},e.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(L0.CommitOnSelChange,!1)},e.prototype.addToPage=function(t,r){var x,i,o,a,l,c,h;O(t,"page",[[Te,"PDFPage"]]),i5(r),r||(r={}),"textColor"in r||(r.textColor=R0(0,0,0)),"backgroundColor"in r||(r.backgroundColor=R0(1,1,1)),"borderColor"in r||(r.borderColor=R0(0,0,0)),"borderWidth"in r||(r.borderWidth=1);var s=this.createWidget({x:(x=r.x)!==null&&x!==void 0?x:0,y:(i=r.y)!==null&&i!==void 0?i:0,width:(o=r.width)!==null&&o!==void 0?o:200,height:(a=r.height)!==null&&a!==void 0?a:50,textColor:r.textColor,backgroundColor:r.backgroundColor,borderColor:r.borderColor,borderWidth:(l=r.borderWidth)!==null&&l!==void 0?l:0,rotate:(c=r.rotate)!==null&&c!==void 0?c:v0(0),hidden:r.hidden,page:t.ref}),u=this.doc.context.register(s.dict);this.acroField.addWidget(u);var f=(h=r.font)!==null&&h!==void 0?h:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(s,f),t.node.addAnnot(u)},e.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=((t=o.getAppearances())===null||t===void 0?void 0:t.normal)instanceof we;if(!a)return!0}return!1},e.prototype.defaultUpdateAppearances=function(t){O(t,"font",[[be,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,r){O(t,"font",[[be,"PDFFont"]]),_(r,"provider",[Function]);for(var x=this.acroField.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i];this.updateWidgetAppearance(a,t,r)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,r,x){var i=x??y9,o=x5(i(this,t,r));this.updateWidgetAppearanceWithFont(t,r,o)},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),an=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroListBox",[[Nn,"PDFAcroListBox"]]),i.acroField=t,i}return e.prototype.getOptions=function(){for(var t=this.acroField.getOptions(),r=new Array(t.length),x=0,i=r.length;x<i;x++){var o=t[x],a=o.display,l=o.value;r[x]=(a??l).decodeText()}return r},e.prototype.getSelected=function(){for(var t=this.acroField.getValues(),r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]=t[x].decodeText();return r},e.prototype.setOptions=function(t){O(t,"options",[Array]),this.markAsDirty();for(var r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]={value:u0.fromText(t[x])};this.acroField.setOptions(r)},e.prototype.addOptions=function(t){O(t,"options",["string",Array]),this.markAsDirty();for(var r=Array.isArray(t)?t:[t],x=this.acroField.getOptions(),i=new Array(r.length),o=0,a=r.length;o<a;o++)i[o]={value:u0.fromText(r[o])};this.acroField.setOptions(x.concat(i))},e.prototype.select=function(t,r){r===void 0&&(r=!1),O(t,"options",["string",Array]),O(r,"merge",["boolean"]);var x=Array.isArray(t)?t:[t],i=this.getOptions();gi(x,"option",i),this.markAsDirty(),(x.length>1||x.length===1&&r)&&this.enableMultiselect();for(var o=new Array(x.length),a=0,l=x.length;a<l;a++)o[a]=u0.fromText(x[a]);if(r){var c=this.acroField.getValues();this.acroField.setValues(c.concat(o))}else this.acroField.setValues(o)},e.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},e.prototype.setFontSize=function(t){qn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.isSorted=function(){return this.acroField.hasFlag(L0.Sort)},e.prototype.enableSorting=function(){this.acroField.setFlagTo(L0.Sort,!0)},e.prototype.disableSorting=function(){this.acroField.setFlagTo(L0.Sort,!1)},e.prototype.isMultiselect=function(){return this.acroField.hasFlag(L0.MultiSelect)},e.prototype.enableMultiselect=function(){this.acroField.setFlagTo(L0.MultiSelect,!0)},e.prototype.disableMultiselect=function(){this.acroField.setFlagTo(L0.MultiSelect,!1)},e.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(L0.CommitOnSelChange)},e.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(L0.CommitOnSelChange,!0)},e.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(L0.CommitOnSelChange,!1)},e.prototype.addToPage=function(t,r){var x,i,o,a,l,c,h;O(t,"page",[[Te,"PDFPage"]]),i5(r),r||(r={}),"textColor"in r||(r.textColor=R0(0,0,0)),"backgroundColor"in r||(r.backgroundColor=R0(1,1,1)),"borderColor"in r||(r.borderColor=R0(0,0,0)),"borderWidth"in r||(r.borderWidth=1);var s=this.createWidget({x:(x=r.x)!==null&&x!==void 0?x:0,y:(i=r.y)!==null&&i!==void 0?i:0,width:(o=r.width)!==null&&o!==void 0?o:200,height:(a=r.height)!==null&&a!==void 0?a:100,textColor:r.textColor,backgroundColor:r.backgroundColor,borderColor:r.borderColor,borderWidth:(l=r.borderWidth)!==null&&l!==void 0?l:0,rotate:(c=r.rotate)!==null&&c!==void 0?c:v0(0),hidden:r.hidden,page:t.ref}),u=this.doc.context.register(s.dict);this.acroField.addWidget(u);var f=(h=r.font)!==null&&h!==void 0?h:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(s,f),t.node.addAnnot(u)},e.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=((t=o.getAppearances())===null||t===void 0?void 0:t.normal)instanceof we;if(!a)return!0}return!1},e.prototype.defaultUpdateAppearances=function(t){O(t,"font",[[be,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,r){O(t,"font",[[be,"PDFFont"]]),_(r,"provider",[Function]);for(var x=this.acroField.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i];this.updateWidgetAppearance(a,t,r)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,r,x){var i=x??D9,o=x5(i(this,t,r));this.updateWidgetAppearanceWithFont(t,r,o)},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),p5=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroRadioButton",[[Rn,"PDFAcroRadioButton"]]),i.acroField=t,i}return e.prototype.getOptions=function(){var t=this.acroField.getExportValues();if(t){for(var r=new Array(t.length),x=0,i=t.length;x<i;x++)r[x]=t[x].decodeText();return r}for(var o=this.acroField.getOnValues(),a=new Array(o.length),x=0,i=a.length;x<i;x++)a[x]=o[x].decodeText();return a},e.prototype.getSelected=function(){var t=this.acroField.getValue();if(t!==w.of("Off")){var r=this.acroField.getExportValues();if(r){for(var x=this.acroField.getOnValues(),i=0,o=x.length;i<o;i++)if(x[i]===t)return r[i].decodeText()}return t.decodeText()}},e.prototype.select=function(t){O(t,"option",["string"]);var r=this.getOptions();ft(t,"option",r),this.markAsDirty();var x=this.acroField.getOnValues(),i=this.acroField.getExportValues();if(i)for(var o=0,a=i.length;o<a;o++)i[o].decodeText()===t&&this.acroField.setValue(x[o]);else for(var o=0,a=x.length;o<a;o++){var l=x[o];l.decodeText()===t&&this.acroField.setValue(l)}},e.prototype.clear=function(){this.markAsDirty(),this.acroField.setValue(w.of("Off"))},e.prototype.isOffToggleable=function(){return!this.acroField.hasFlag(ze.NoToggleToOff)},e.prototype.enableOffToggling=function(){this.acroField.setFlagTo(ze.NoToggleToOff,!1)},e.prototype.disableOffToggling=function(){this.acroField.setFlagTo(ze.NoToggleToOff,!0)},e.prototype.isMutuallyExclusive=function(){return!this.acroField.hasFlag(ze.RadiosInUnison)},e.prototype.enableMutualExclusion=function(){this.acroField.setFlagTo(ze.RadiosInUnison,!1)},e.prototype.disableMutualExclusion=function(){this.acroField.setFlagTo(ze.RadiosInUnison,!0)},e.prototype.addOptionToPage=function(t,r,x){var i,o,a,l,c,h,s,u,f;O(t,"option",["string"]),O(r,"page",[[Te,"PDFPage"]]),i5(x);var v=this.createWidget({x:(i=x?.x)!==null&&i!==void 0?i:0,y:(o=x?.y)!==null&&o!==void 0?o:0,width:(a=x?.width)!==null&&a!==void 0?a:50,height:(l=x?.height)!==null&&l!==void 0?l:50,textColor:(c=x?.textColor)!==null&&c!==void 0?c:R0(0,0,0),backgroundColor:(h=x?.backgroundColor)!==null&&h!==void 0?h:R0(1,1,1),borderColor:(s=x?.borderColor)!==null&&s!==void 0?s:R0(0,0,0),borderWidth:(u=x?.borderWidth)!==null&&u!==void 0?u:1,rotate:(f=x?.rotate)!==null&&f!==void 0?f:v0(0),hidden:x?.hidden,page:r.ref}),C=this.doc.context.register(v.dict),F=this.acroField.addWidgetWithOpt(C,u0.fromText(t),!this.isMutuallyExclusive());v.setAppearanceState(w.of("Off")),this.updateWidgetAppearance(v,F),r.node.addAnnot(C)},e.prototype.needsAppearancesUpdate=function(){for(var t,r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=o.getAppearanceState(),l=(t=o.getAppearances())===null||t===void 0?void 0:t.normal;if(!(l instanceof D0)||a&&!l.has(a))return!0}return!1},e.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},e.prototype.updateAppearances=function(t){_(t,"provider",[Function]);for(var r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=o.getOnValue();a&&this.updateWidgetAppearance(o,a,t)}},e.prototype.updateWidgetAppearance=function(t,r,x){var i=x??F9,o=x5(i(this,t));this.updateOnOffWidgetAppearance(t,r,o)},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),Er=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroSignature",[[Pr,"PDFAcroSignature"]]),i.acroField=t,i}return e.prototype.needsAppearancesUpdate=function(){return!1},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),ln=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroText",[[Mn,"PDFAcroText"]]),i.acroField=t,i}return e.prototype.getText=function(){var t=this.acroField.getValue();if(!t&&this.isRichFormatted())throw new c9(this.getName());return t?.decodeText()},e.prototype.setText=function(t){_(t,"text",["string"]);var r=this.getMaxLength();if(r!==void 0&&t&&t.length>r)throw new h9(t.length,r,this.getName());this.markAsDirty(),this.disableRichFormatting(),t?this.acroField.setValue(u0.fromText(t)):this.acroField.removeValue()},e.prototype.getAlignment=function(){var t=this.acroField.getQuadding();return t===0?oe.Left:t===1?oe.Center:t===2?oe.Right:oe.Left},e.prototype.setAlignment=function(t){ft(t,"alignment",oe),this.markAsDirty(),this.acroField.setQuadding(t)},e.prototype.getMaxLength=function(){return this.acroField.getMaxLength()},e.prototype.setMaxLength=function(t){if(Ve(t,"maxLength",0,Number.MAX_SAFE_INTEGER),this.markAsDirty(),t===void 0)this.acroField.removeMaxLength();else{var r=this.getText();if(r&&r.length>t)throw new d9(r.length,t,this.getName());this.acroField.setMaxLength(t)}},e.prototype.removeMaxLength=function(){this.markAsDirty(),this.acroField.removeMaxLength()},e.prototype.setImage=function(t){for(var r=this.getAlignment(),x=r===oe.Center?Bt.Center:r===oe.Right?Bt.Right:Bt.Left,i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var l=i[o],c=this.createImageAppearanceStream(l,t,x);this.updateWidgetAppearances(l,{normal:c})}this.markAsClean()},e.prototype.setFontSize=function(t){qn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.isMultiline=function(){return this.acroField.hasFlag(Y0.Multiline)},e.prototype.enableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(Y0.Multiline,!0)},e.prototype.disableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(Y0.Multiline,!1)},e.prototype.isPassword=function(){return this.acroField.hasFlag(Y0.Password)},e.prototype.enablePassword=function(){this.acroField.setFlagTo(Y0.Password,!0)},e.prototype.disablePassword=function(){this.acroField.setFlagTo(Y0.Password,!1)},e.prototype.isFileSelector=function(){return this.acroField.hasFlag(Y0.FileSelect)},e.prototype.enableFileSelection=function(){this.acroField.setFlagTo(Y0.FileSelect,!0)},e.prototype.disableFileSelection=function(){this.acroField.setFlagTo(Y0.FileSelect,!1)},e.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(Y0.DoNotSpellCheck)},e.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(Y0.DoNotSpellCheck,!1)},e.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(Y0.DoNotSpellCheck,!0)},e.prototype.isScrollable=function(){return!this.acroField.hasFlag(Y0.DoNotScroll)},e.prototype.enableScrolling=function(){this.acroField.setFlagTo(Y0.DoNotScroll,!1)},e.prototype.disableScrolling=function(){this.acroField.setFlagTo(Y0.DoNotScroll,!0)},e.prototype.isCombed=function(){return this.acroField.hasFlag(Y0.Comb)&&!this.isMultiline()&&!this.isPassword()&&!this.isFileSelector()&&this.getMaxLength()!==void 0},e.prototype.enableCombing=function(){if(this.getMaxLength()===void 0){var t="PDFTextFields must have a max length in order to be combed";console.warn(t)}this.markAsDirty(),this.disableMultiline(),this.disablePassword(),this.disableFileSelection(),this.acroField.setFlagTo(Y0.Comb,!0)},e.prototype.disableCombing=function(){this.markAsDirty(),this.acroField.setFlagTo(Y0.Comb,!1)},e.prototype.isRichFormatted=function(){return this.acroField.hasFlag(Y0.RichText)},e.prototype.enableRichFormatting=function(){this.acroField.setFlagTo(Y0.RichText,!0)},e.prototype.disableRichFormatting=function(){this.acroField.setFlagTo(Y0.RichText,!1)},e.prototype.addToPage=function(t,r){var x,i,o,a,l,c,h;O(t,"page",[[Te,"PDFPage"]]),i5(r),r||(r={}),"textColor"in r||(r.textColor=R0(0,0,0)),"backgroundColor"in r||(r.backgroundColor=R0(1,1,1)),"borderColor"in r||(r.borderColor=R0(0,0,0)),"borderWidth"in r||(r.borderWidth=1);var s=this.createWidget({x:(x=r.x)!==null&&x!==void 0?x:0,y:(i=r.y)!==null&&i!==void 0?i:0,width:(o=r.width)!==null&&o!==void 0?o:200,height:(a=r.height)!==null&&a!==void 0?a:50,textColor:r.textColor,backgroundColor:r.backgroundColor,borderColor:r.borderColor,borderWidth:(l=r.borderWidth)!==null&&l!==void 0?l:0,rotate:(c=r.rotate)!==null&&c!==void 0?c:v0(0),hidden:r.hidden,page:t.ref}),u=this.doc.context.register(s.dict);this.acroField.addWidget(u);var f=(h=r.font)!==null&&h!==void 0?h:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(s,f),t.node.addAnnot(u)},e.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=((t=o.getAppearances())===null||t===void 0?void 0:t.normal)instanceof we;if(!a)return!0}return!1},e.prototype.defaultUpdateAppearances=function(t){O(t,"font",[[be,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,r){O(t,"font",[[be,"PDFFont"]]),_(r,"provider",[Function]);for(var x=this.acroField.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i];this.updateWidgetAppearance(a,t,r)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,r,x){var i=x??A9,o=x5(i(this,t,r));this.updateWidgetAppearanceWithFont(t,r,o)},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),t5;(function(n){n.Courier="Courier",n.CourierBold="Courier-Bold",n.CourierOblique="Courier-Oblique",n.CourierBoldOblique="Courier-BoldOblique",n.Helvetica="Helvetica",n.HelveticaBold="Helvetica-Bold",n.HelveticaOblique="Helvetica-Oblique",n.HelveticaBoldOblique="Helvetica-BoldOblique",n.TimesRoman="Times-Roman",n.TimesRomanBold="Times-Bold",n.TimesRomanItalic="Times-Italic",n.TimesRomanBoldItalic="Times-BoldItalic",n.Symbol="Symbol",n.ZapfDingbats="ZapfDingbats"})(t5||(t5={}));var m9=(function(){function n(e,t){var r=this;this.embedDefaultFont=function(){return r.doc.embedStandardFont(t5.Helvetica)},O(e,"acroForm",[[Bn,"PDFAcroForm"]]),O(t,"doc",[[ot,"PDFDocument"]]),this.acroForm=e,this.doc=t,this.dirtyFields=new Set,this.defaultFontCache=xt.populatedBy(this.embedDefaultFont)}return n.prototype.hasXFA=function(){return this.acroForm.dict.has(w.of("XFA"))},n.prototype.deleteXFA=function(){this.acroForm.dict.delete(w.of("XFA"))},n.prototype.getFields=function(){for(var e=this.acroForm.getAllFields(),t=[],r=0,x=e.length;r<x;r++){var i=e[r],o=i[0],a=i[1],l=w9(o,a,this.doc);l&&t.push(l)}return t},n.prototype.getFieldMaybe=function(e){O(e,"name",["string"]);for(var t=this.getFields(),r=0,x=t.length;r<x;r++){var i=t[r];if(i.getName()===e)return i}},n.prototype.getField=function(e){O(e,"name",["string"]);var t=this.getFieldMaybe(e);if(t)return t;throw new a9(e)},n.prototype.getButton=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof cn)return t;throw new qt(e,cn,t)},n.prototype.getCheckBox=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof C5)return t;throw new qt(e,C5,t)},n.prototype.getDropdown=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof on)return t;throw new qt(e,on,t)},n.prototype.getOptionList=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof an)return t;throw new qt(e,an,t)},n.prototype.getRadioGroup=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof p5)return t;throw new qt(e,p5,t)},n.prototype.getSignature=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof Er)return t;throw new qt(e,Er,t)},n.prototype.getTextField=function(e){O(e,"name",["string"]);var t=this.getField(e);if(t instanceof ln)return t;throw new qt(e,ln,t)},n.prototype.createButton=function(e){O(e,"name",["string"]);var t=Xt(e),r=this.findOrCreateNonTerminals(t.nonTerminal),x=On.create(this.doc.context);return x.setPartialName(t.terminal),Ht(r,[x,x.ref],t.terminal),cn.of(x,x.ref,this.doc)},n.prototype.createCheckBox=function(e){O(e,"name",["string"]);var t=Xt(e),r=this.findOrCreateNonTerminals(t.nonTerminal),x=zn.create(this.doc.context);return x.setPartialName(t.terminal),Ht(r,[x,x.ref],t.terminal),C5.of(x,x.ref,this.doc)},n.prototype.createDropdown=function(e){O(e,"name",["string"]);var t=Xt(e),r=this.findOrCreateNonTerminals(t.nonTerminal),x=Tn.create(this.doc.context);return x.setPartialName(t.terminal),Ht(r,[x,x.ref],t.terminal),on.of(x,x.ref,this.doc)},n.prototype.createOptionList=function(e){O(e,"name",["string"]);var t=Xt(e),r=this.findOrCreateNonTerminals(t.nonTerminal),x=Nn.create(this.doc.context);return x.setPartialName(t.terminal),Ht(r,[x,x.ref],t.terminal),an.of(x,x.ref,this.doc)},n.prototype.createRadioGroup=function(e){O(e,"name",["string"]);var t=Xt(e),r=this.findOrCreateNonTerminals(t.nonTerminal),x=Rn.create(this.doc.context);return x.setPartialName(t.terminal),Ht(r,[x,x.ref],t.terminal),p5.of(x,x.ref,this.doc)},n.prototype.createTextField=function(e){O(e,"name",["string"]);var t=Xt(e),r=this.findOrCreateNonTerminals(t.nonTerminal),x=Mn.create(this.doc.context);return x.setPartialName(t.terminal),Ht(r,[x,x.ref],t.terminal),ln.of(x,x.ref,this.doc)},n.prototype.flatten=function(e){e===void 0&&(e={updateFieldAppearances:!0}),e.updateFieldAppearances&&this.updateFieldAppearances();for(var t=this.getFields(),r=0,x=t.length;r<x;r++){for(var i=t[r],o=i.acroField.getWidgets(),a=0,l=o.length;a<l;a++){var c=o[a],h=this.findWidgetPage(c),s=this.findWidgetAppearanceRef(i,c),u=h.node.newXObject("FlatWidget",s),f=c.getRectangle(),v=T0([ae(),Oe(f.x,f.y)],bt(F0(F0({},f),{rotation:0})),[Lr(u),le()]).filter(Boolean);h.pushOperators.apply(h,v)}this.removeField(i)}},n.prototype.removeField=function(e){for(var t=e.acroField.getWidgets(),r=new Set,x=0,i=t.length;x<i;x++){var o=t[x],a=this.findWidgetAppearanceRef(e,o),l=this.findWidgetPage(o);r.add(l),l.node.removeAnnot(a)}r.forEach(function(f){return f.node.removeAnnot(e.ref)}),this.acroForm.removeField(e.acroField);for(var c=e.acroField.normalizedEntries().Kids,h=c.size(),s=0;s<h;s++){var u=c.get(s);u instanceof U0&&this.doc.context.delete(u)}this.doc.context.delete(e.ref)},n.prototype.updateFieldAppearances=function(e){_(e,"font",[[be,"PDFFont"]]),e=e??this.getDefaultFont();for(var t=this.getFields(),r=0,x=t.length;r<x;r++){var i=t[r];i.needsAppearancesUpdate()&&i.defaultUpdateAppearances(e)}},n.prototype.markFieldAsDirty=function(e){_(e,"fieldRef",[[U0,"PDFRef"]]),this.dirtyFields.add(e)},n.prototype.markFieldAsClean=function(e){_(e,"fieldRef",[[U0,"PDFRef"]]),this.dirtyFields.delete(e)},n.prototype.fieldIsDirty=function(e){return _(e,"fieldRef",[[U0,"PDFRef"]]),this.dirtyFields.has(e)},n.prototype.getDefaultFont=function(){return this.defaultFontCache.access()},n.prototype.findWidgetPage=function(e){var t=e.P(),r=this.doc.getPages().find(function(i){return i.ref===t});if(r===void 0){var x=this.doc.context.getObjectRef(e.dict);if(x===void 0)throw new Error("Could not find PDFRef for PDFObject");if(r=this.doc.findPageForAnnotationRef(x),r===void 0)throw new Error("Could not find page for PDFRef "+x)}return r},n.prototype.findWidgetAppearanceRef=function(e,t){var r,x=t.getNormalAppearance();if(x instanceof D0&&(e instanceof C5||e instanceof p5)){var i=e.acroField.getValue(),o=(r=x.get(i))!==null&&r!==void 0?r:x.get(w.of("Off"));o instanceof U0&&(x=o)}if(!(x instanceof U0)){var a=e.getName();throw new Error("Failed to extract appearance ref for: "+a)}return x},n.prototype.findOrCreateNonTerminals=function(e){for(var t=[this.acroForm],r=0,x=e.length;r<x;r++){var i=e[r];if(!i)throw new l9(i);var o=t[0],a=t[1],l=this.findNonTerminal(i,o);if(l)t=l;else{var c=En.create(this.doc.context);c.setPartialName(i),c.setParent(a);var h=this.doc.context.register(c.dict);o.addField(h),t=[c,h]}}return t},n.prototype.findNonTerminal=function(e,t){for(var r=t instanceof Bn?this.acroForm.getFields():zr(t.Kids()),x=0,i=r.length;x<i;x++){var o=r[x],a=o[0],l=o[1];if(a.getPartialName()===e){if(a instanceof En)return[a,l];throw new _x(e)}}},n.of=function(e,t){return new n(e,t)},n})(),w9=function(n,e,t){if(n instanceof On)return cn.of(n,e,t);if(n instanceof zn)return C5.of(n,e,t);if(n instanceof Tn)return on.of(n,e,t);if(n instanceof Nn)return an.of(n,e,t);if(n instanceof Mn)return ln.of(n,e,t);if(n instanceof Rn)return p5.of(n,e,t);if(n instanceof Pr)return Er.of(n,e,t)},Xt=function(n){if(n.length===0)throw new Error("PDF field names must not be empty strings");for(var e=n.split("."),t=0,r=e.length;t<r;t++)if(e[t]==="")throw new Error('Periods in PDF field names must be separated by at least one character: "'+n+'"');return e.length===1?{nonTerminal:[],terminal:e[0]}:{nonTerminal:e.slice(0,e.length-1),terminal:e[e.length-1]}},Ht=function(n,e,t){for(var r=n[0],x=n[1],i=e[0],o=e[1],a=r.normalizedEntries(),l=zr("Kids"in a?a.Kids:a.Fields),c=0,h=l.length;c<h;c++)if(l[c][0].getPartialName()===t)throw new _x(t);r.addField(o),i.setParent(x)},b9={A4:[595.28,841.89]},Br;(function(n){n[n.Fastest=1/0]="Fastest",n[n.Fast=1500]="Fast",n[n.Medium=500]="Medium",n[n.Slow=100]="Slow"})(Br||(Br={}));var k9=(function(){function n(e,t,r){this.alreadyEmbedded=!1,this.ref=e,this.doc=t,this.embedder=r}return n.prototype.embed=function(){return w0(this,void 0,void 0,function(){var e,t,r,x,i;return b0(this,function(o){switch(o.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)];case 1:e=o.sent(),this.doc.catalog.has(w.of("Names"))||this.doc.catalog.set(w.of("Names"),this.doc.context.obj({})),t=this.doc.catalog.lookup(w.of("Names"),D0),t.has(w.of("EmbeddedFiles"))||t.set(w.of("EmbeddedFiles"),this.doc.context.obj({})),r=t.lookup(w.of("EmbeddedFiles"),D0),r.has(w.of("Names"))||r.set(w.of("Names"),this.doc.context.obj([])),x=r.lookup(w.of("Names"),I0),x.push(u0.fromText(this.embedder.fileName)),x.push(e),this.doc.catalog.has(w.of("AF"))||this.doc.catalog.set(w.of("AF"),this.doc.context.obj([])),i=this.doc.catalog.lookup(w.of("AF"),I0),i.push(e),this.alreadyEmbedded=!0,o.label=2;case 2:return[2]}})})},n.of=function(e,t,r){return new n(e,t,r)},n})(),S9=(function(){function n(e,t,r){this.alreadyEmbedded=!1,this.ref=e,this.doc=t,this.embedder=r}return n.prototype.embed=function(){return w0(this,void 0,void 0,function(){var e,t,r,x,i,o,a;return b0(this,function(l){switch(l.label){case 0:return this.alreadyEmbedded?[3,2]:(e=this.doc,t=e.catalog,r=e.context,[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]);case 1:x=l.sent(),t.has(w.of("Names"))||t.set(w.of("Names"),r.obj({})),i=t.lookup(w.of("Names"),D0),i.has(w.of("JavaScript"))||i.set(w.of("JavaScript"),r.obj({})),o=i.lookup(w.of("JavaScript"),D0),o.has(w.of("Names"))||o.set(w.of("Names"),r.obj([])),a=o.lookup(w.of("Names"),I0),a.push(u0.fromText(this.embedder.scriptName)),a.push(x),this.alreadyEmbedded=!0,l.label=2;case 2:return[2]}})})},n.of=function(e,t,r){return new n(e,t,r)},n})(),q9=(function(){function n(e,t){this.script=e,this.scriptName=t}return n.for=function(e,t){return new n(e,t)},n.prototype.embedIntoContext=function(e,t){return w0(this,void 0,void 0,function(){var r;return b0(this,function(x){return r=e.obj({Type:"Action",S:"JavaScript",JS:u0.fromText(this.script)}),t?(e.assign(t,r),[2,t]):[2,e.register(r)]})})},n})(),ot=(function(){function n(e,t,r){var x=this;if(this.defaultWordBreaks=[" "],this.computePages=function(){var i=[];return x.catalog.Pages().traverse(function(o,a){if(o instanceof it){var l=x.pageMap.get(o);l||(l=Te.of(o,a,x),x.pageMap.set(o,l)),i.push(l)}}),i},this.getOrCreateForm=function(){var i=x.catalog.getOrCreateAcroForm();return m9.of(i,x)},O(e,"context",[[sr,"PDFContext"]]),O(t,"ignoreEncryption",["boolean"]),this.context=e,this.catalog=e.lookup(e.trailerInfo.Root),this.isEncrypted=!!e.lookup(e.trailerInfo.Encrypt),this.pageCache=xt.populatedBy(this.computePages),this.pageMap=new Map,this.formCache=xt.populatedBy(this.getOrCreateForm),this.fonts=[],this.images=[],this.embeddedPages=[],this.embeddedFiles=[],this.javaScripts=[],!t&&this.isEncrypted)throw new r9;r&&this.updateInfoDict()}return n.load=function(e,t){return t===void 0&&(t={}),w0(this,void 0,void 0,function(){var r,x,i,o,a,l,c,h,s,u,f,v;return b0(this,function(C){switch(C.label){case 0:return r=t.ignoreEncryption,x=r===void 0?!1:r,i=t.parseSpeed,o=i===void 0?Br.Slow:i,a=t.throwOnInvalidObject,l=a===void 0?!1:a,c=t.updateMetadata,h=c===void 0?!0:c,s=t.capNumbers,u=s===void 0?!1:s,O(e,"pdf",["string",Uint8Array,ArrayBuffer]),O(x,"ignoreEncryption",["boolean"]),O(o,"parseSpeed",["number"]),O(l,"throwOnInvalidObject",["boolean"]),f=o5(e),[4,zo.forBytesWithOptions(f,o,l,u).parseDocument()];case 1:return v=C.sent(),[2,new n(v,x,h)]}})})},n.create=function(e){return e===void 0&&(e={}),w0(this,void 0,void 0,function(){var t,r,x,i,o,a;return b0(this,function(l){return t=e.updateMetadata,r=t===void 0?!0:t,x=sr.create(),i=Mx.withContext(x),o=x.register(i),a=Tx.withContextAndPages(x,o),x.trailerInfo.Root=x.register(a),[2,new n(x,!1,r)]})})},n.prototype.registerFontkit=function(e){this.fontkit=e},n.prototype.getForm=function(){var e=this.formCache.access();return e.hasXFA()&&(console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"),e.deleteXFA()),e},n.prototype.getTitle=function(){var e=this.getInfoDict().lookup(w.Title);if(e)return ht(e),e.decodeText()},n.prototype.getAuthor=function(){var e=this.getInfoDict().lookup(w.Author);if(e)return ht(e),e.decodeText()},n.prototype.getSubject=function(){var e=this.getInfoDict().lookup(w.Subject);if(e)return ht(e),e.decodeText()},n.prototype.getKeywords=function(){var e=this.getInfoDict().lookup(w.Keywords);if(e)return ht(e),e.decodeText()},n.prototype.getCreator=function(){var e=this.getInfoDict().lookup(w.Creator);if(e)return ht(e),e.decodeText()},n.prototype.getProducer=function(){var e=this.getInfoDict().lookup(w.Producer);if(e)return ht(e),e.decodeText()},n.prototype.getCreationDate=function(){var e=this.getInfoDict().lookup(w.CreationDate);if(e)return ht(e),e.decodeDate()},n.prototype.getModificationDate=function(){var e=this.getInfoDict().lookup(w.ModDate);if(e)return ht(e),e.decodeDate()},n.prototype.setTitle=function(e,t){O(e,"title",["string"]);var r=w.of("Title");if(this.getInfoDict().set(r,u0.fromText(e)),t?.showInWindowTitleBar){var x=this.catalog.getOrCreateViewerPreferences();x.setDisplayDocTitle(!0)}},n.prototype.setAuthor=function(e){O(e,"author",["string"]);var t=w.of("Author");this.getInfoDict().set(t,u0.fromText(e))},n.prototype.setSubject=function(e){O(e,"author",["string"]);var t=w.of("Subject");this.getInfoDict().set(t,u0.fromText(e))},n.prototype.setKeywords=function(e){O(e,"keywords",[Array]);var t=w.of("Keywords");this.getInfoDict().set(t,u0.fromText(e.join(" ")))},n.prototype.setCreator=function(e){O(e,"creator",["string"]);var t=w.of("Creator");this.getInfoDict().set(t,u0.fromText(e))},n.prototype.setProducer=function(e){O(e,"creator",["string"]);var t=w.of("Producer");this.getInfoDict().set(t,u0.fromText(e))},n.prototype.setLanguage=function(e){O(e,"language",["string"]);var t=w.of("Lang");this.catalog.set(t,V0.of(e))},n.prototype.setCreationDate=function(e){O(e,"creationDate",[[Date,"Date"]]);var t=w.of("CreationDate");this.getInfoDict().set(t,V0.fromDate(e))},n.prototype.setModificationDate=function(e){O(e,"modificationDate",[[Date,"Date"]]);var t=w.of("ModDate");this.getInfoDict().set(t,V0.fromDate(e))},n.prototype.getPageCount=function(){return this.pageCount===void 0&&(this.pageCount=this.getPages().length),this.pageCount},n.prototype.getPages=function(){return this.pageCache.access()},n.prototype.getPage=function(e){var t=this.getPages();return De(e,"index",0,t.length-1),t[e]},n.prototype.getPageIndices=function(){return z2(0,this.getPageCount())},n.prototype.removePage=function(e){var t=this.getPageCount();if(this.pageCount===0)throw new o9;De(e,"index",0,t-1),this.catalog.removeLeafNode(e),this.pageCount=t-1},n.prototype.addPage=function(e){return O(e,"page",["undefined",[Te,"PDFPage"],Array]),this.insertPage(this.getPageCount(),e)},n.prototype.insertPage=function(e,t){var r=this.getPageCount();if(De(e,"index",0,r),O(t,"page",["undefined",[Te,"PDFPage"],Array]),!t||Array.isArray(t)){var x=Array.isArray(t)?t:b9.A4;t=Te.create(this),t.setSize.apply(t,x)}else if(t.doc!==this)throw new i9;var i=this.catalog.insertLeafNode(t.ref,e);return t.node.setParent(i),this.pageMap.set(t.node,t),this.pageCache.invalidate(),this.pageCount=r+1,t},n.prototype.copyPages=function(e,t){return w0(this,void 0,void 0,function(){var r,x,i,o,a,l,c,h;return b0(this,function(s){switch(s.label){case 0:return O(e,"srcDoc",[[n,"PDFDocument"]]),O(t,"indices",[Array]),[4,e.flush()];case 1:for(s.sent(),r=b1.for(e.context,this.context),x=e.getPages(),i=new Array(t.length),o=0,a=t.length;o<a;o++)l=x[t[o]],c=r.copy(l.node),h=this.context.register(c),i[o]=Te.of(c,h,this);return[2,i]}})})},n.prototype.copy=function(){return w0(this,void 0,void 0,function(){var e,t,r,x;return b0(this,function(i){switch(i.label){case 0:return[4,n.create()];case 1:return e=i.sent(),[4,e.copyPages(this,this.getPageIndices())];case 2:for(t=i.sent(),r=0,x=t.length;r<x;r++)e.addPage(t[r]);return this.getAuthor()!==void 0&&e.setAuthor(this.getAuthor()),this.getCreationDate()!==void 0&&e.setCreationDate(this.getCreationDate()),this.getCreator()!==void 0&&e.setCreator(this.getCreator()),this.getModificationDate()!==void 0&&e.setModificationDate(this.getModificationDate()),this.getProducer()!==void 0&&e.setProducer(this.getProducer()),this.getSubject()!==void 0&&e.setSubject(this.getSubject()),this.getTitle()!==void 0&&e.setTitle(this.getTitle()),e.defaultWordBreaks=this.defaultWordBreaks,[2,e]}})})},n.prototype.addJavaScript=function(e,t){O(e,"name",["string"]),O(t,"script",["string"]);var r=q9.for(t,e),x=this.context.nextRef(),i=S9.of(x,this,r);this.javaScripts.push(i)},n.prototype.attach=function(e,t,r){return r===void 0&&(r={}),w0(this,void 0,void 0,function(){var x,i,o,a;return b0(this,function(l){return O(e,"attachment",["string",Uint8Array,ArrayBuffer]),O(t,"name",["string"]),_(r.mimeType,"mimeType",["string"]),_(r.description,"description",["string"]),_(r.creationDate,"options.creationDate",[Date]),_(r.modificationDate,"options.modificationDate",[Date]),Pe(r.afRelationship,"options.afRelationship",hr),x=o5(e),i=ro.for(x,t,r),o=this.context.nextRef(),a=k9.of(o,this,i),this.embeddedFiles.push(a),[2]})})},n.prototype.embedFont=function(e,t){return t===void 0&&(t={}),w0(this,void 0,void 0,function(){var r,x,i,o,a,l,c,h,s,u;return b0(this,function(f){switch(f.label){case 0:return r=t.subset,x=r===void 0?!1:r,i=t.customName,o=t.features,O(e,"font",["string",Uint8Array,ArrayBuffer]),O(x,"subset",["boolean"]),C1(e)?(a=fn.for(e,i),[3,7]):[3,1];case 1:return M2(e)?(l=o5(e),c=this.assertFontkit(),x?[4,no.for(c,l,i,o)]:[3,3]):[3,6];case 2:return h=f.sent(),[3,5];case 3:return[4,Sr.for(c,l,i,o)];case 4:h=f.sent(),f.label=5;case 5:return a=h,[3,7];case 6:throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");case 7:return s=this.context.nextRef(),u=be.of(s,this,a),this.fonts.push(u),[2,u]}})})},n.prototype.embedStandardFont=function(e,t){if(O(e,"font",["string"]),!C1(e))throw new TypeError("`font` must be one of type `StandardFonts`");var r=fn.for(e,t),x=this.context.nextRef(),i=be.of(x,this,r);return this.fonts.push(i),i},n.prototype.embedJpg=function(e){return w0(this,void 0,void 0,function(){var t,r,x,i;return b0(this,function(o){switch(o.label){case 0:return O(e,"jpg",["string",Uint8Array,ArrayBuffer]),t=o5(e),[4,Dx.for(t)];case 1:return r=o.sent(),x=this.context.nextRef(),i=vr.of(x,this,r),this.images.push(i),[2,i]}})})},n.prototype.embedPng=function(e){return w0(this,void 0,void 0,function(){var t,r,x,i;return b0(this,function(o){switch(o.label){case 0:return O(e,"png",["string",Uint8Array,ArrayBuffer]),t=o5(e),[4,mx.for(t)];case 1:return r=o.sent(),x=this.context.nextRef(),i=vr.of(x,this,r),this.images.push(i),[2,i]}})})},n.prototype.embedPdf=function(e,t){return t===void 0&&(t=[0]),w0(this,void 0,void 0,function(){var r,x,i;return b0(this,function(o){switch(o.label){case 0:return O(e,"pdf",["string",Uint8Array,ArrayBuffer,[n,"PDFDocument"]]),O(t,"indices",[Array]),e instanceof n?(x=e,[3,3]):[3,1];case 1:return[4,n.load(e)];case 2:x=o.sent(),o.label=3;case 3:return r=x,i=T2(r.getPages(),t),[2,this.embedPages(i)]}})})},n.prototype.embedPage=function(e,t,r){return w0(this,void 0,void 0,function(){var x;return b0(this,function(i){switch(i.label){case 0:return O(e,"page",[[Te,"PDFPage"]]),[4,this.embedPages([e],[t],[r])];case 1:return x=i.sent()[0],[2,x]}})})},n.prototype.embedPages=function(e,t,r){return t===void 0&&(t=[]),r===void 0&&(r=[]),w0(this,void 0,void 0,function(){var c,h,x,i,o,a,l,c,h,s,u,f,v,C,F;return b0(this,function(p){switch(p.label){case 0:if(e.length===0)return[2,[]];for(c=0,h=e.length-1;c<h;c++)if(x=e[c],i=e[c+1],x.node.context!==i.node.context)throw new Si;o=e[0].node.context,a=o===this.context?function(S){return S}:b1.for(o,this.context).copy,l=new Array(e.length),c=0,h=e.length,p.label=1;case 1:return c<h?(s=a(e[c].node),u=t[c],f=r[c],[4,kx.for(s,u,f)]):[3,4];case 2:v=p.sent(),C=this.context.nextRef(),l[c]=r2.of(C,this,v),p.label=3;case 3:return c++,[3,1];case 4:return(F=this.embeddedPages).push.apply(F,l),[2,l]}})})},n.prototype.flush=function(){return w0(this,void 0,void 0,function(){return b0(this,function(e){switch(e.label){case 0:return[4,this.embedAll(this.fonts)];case 1:return e.sent(),[4,this.embedAll(this.images)];case 2:return e.sent(),[4,this.embedAll(this.embeddedPages)];case 3:return e.sent(),[4,this.embedAll(this.embeddedFiles)];case 4:return e.sent(),[4,this.embedAll(this.javaScripts)];case 5:return e.sent(),[2]}})})},n.prototype.save=function(e){return e===void 0&&(e={}),w0(this,void 0,void 0,function(){var t,r,x,i,o,a,l,c,h,s;return b0(this,function(u){switch(u.label){case 0:return t=e.useObjectStreams,r=t===void 0?!0:t,x=e.addDefaultPage,i=x===void 0?!0:x,o=e.objectsPerTick,a=o===void 0?50:o,l=e.updateFieldAppearances,c=l===void 0?!0:l,O(r,"useObjectStreams",["boolean"]),O(i,"addDefaultPage",["boolean"]),O(a,"objectsPerTick",["number"]),O(c,"updateFieldAppearances",["boolean"]),i&&this.getPageCount()===0&&this.addPage(),c&&(h=this.formCache.getValue(),h&&h.updateFieldAppearances()),[4,this.flush()];case 1:return u.sent(),s=r?Ji:Ax,[2,s.forContext(this.context,a).serializeToBuffer()]}})})},n.prototype.saveAsBase64=function(e){return e===void 0&&(e={}),w0(this,void 0,void 0,function(){var t,r,x,i,o;return b0(this,function(a){switch(a.label){case 0:return t=e.dataUri,r=t===void 0?!1:t,x=v2(e,["dataUri"]),O(r,"dataUri",["boolean"]),[4,this.save(x)];case 1:return i=a.sent(),o=E2(i),[2,r?"data:application/pdf;base64,"+o:o]}})})},n.prototype.findPageForAnnotationRef=function(e){for(var t=this.getPages(),r=0,x=t.length;r<x;r++){var i=t[r],o=i.node.Annots();if(o?.indexOf(e)!==void 0)return i}},n.prototype.embedAll=function(e){return w0(this,void 0,void 0,function(){var t,r;return b0(this,function(x){switch(x.label){case 0:t=0,r=e.length,x.label=1;case 1:return t<r?[4,e[t].embed()]:[3,4];case 2:x.sent(),x.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},n.prototype.updateInfoDict=function(){var e="pdf-lib (https://github.com/Hopding/pdf-lib)",t=new Date,r=this.getInfoDict();this.setProducer(e),this.setModificationDate(t),r.get(w.of("Creator"))||this.setCreator(e),r.get(w.of("CreationDate"))||this.setCreationDate(t)},n.prototype.getInfoDict=function(){var e=this.context.lookup(this.context.trailerInfo.Info);if(e instanceof D0)return e;var t=this.context.obj({});return this.context.trailerInfo.Info=this.context.register(t),t},n.prototype.assertFontkit=function(){if(!this.fontkit)throw new x9;return this.fontkit},n})();function ht(n){if(!(n instanceof u0)&&!(n instanceof V0))throw new dn([u0,V0],n)}var $e;(function(n){n.Normal="Normal",n.Multiply="Multiply",n.Screen="Screen",n.Overlay="Overlay",n.Darken="Darken",n.Lighten="Lighten",n.ColorDodge="ColorDodge",n.ColorBurn="ColorBurn",n.HardLight="HardLight",n.SoftLight="SoftLight",n.Difference="Difference",n.Exclusion="Exclusion"})($e||($e={}));var Te=(function(){function n(e,t,r){this.fontSize=24,this.fontColor=R0(0,0,0),this.lineHeight=24,this.x=0,this.y=0,O(e,"leafNode",[[it,"PDFPageLeaf"]]),O(t,"ref",[[U0,"PDFRef"]]),O(r,"doc",[[ot,"PDFDocument"]]),this.node=e,this.ref=t,this.doc=r}return n.prototype.setRotation=function(e){var t=Lx(e);Bx(t,"degreesAngle",90),this.node.set(w.of("Rotate"),this.doc.context.obj(t))},n.prototype.getRotation=function(){var e=this.node.Rotate();return v0(e?e.asNumber():0)},n.prototype.setSize=function(e,t){O(e,"width",["number"]),O(t,"height",["number"]);var r=this.getMediaBox();this.setMediaBox(r.x,r.y,e,t);var x=this.getCropBox(),i=this.getBleedBox(),o=this.getTrimBox(),a=this.getArtBox(),l=this.node.CropBox(),c=this.node.BleedBox(),h=this.node.TrimBox(),s=this.node.ArtBox();l&&H5(x,r)&&this.setCropBox(r.x,r.y,e,t),c&&H5(i,r)&&this.setBleedBox(r.x,r.y,e,t),h&&H5(o,r)&&this.setTrimBox(r.x,r.y,e,t),s&&H5(a,r)&&this.setArtBox(r.x,r.y,e,t)},n.prototype.setWidth=function(e){O(e,"width",["number"]),this.setSize(e,this.getSize().height)},n.prototype.setHeight=function(e){O(e,"height",["number"]),this.setSize(this.getSize().width,e)},n.prototype.setMediaBox=function(e,t,r,x){O(e,"x",["number"]),O(t,"y",["number"]),O(r,"width",["number"]),O(x,"height",["number"]);var i=this.doc.context.obj([e,t,e+r,t+x]);this.node.set(w.MediaBox,i)},n.prototype.setCropBox=function(e,t,r,x){O(e,"x",["number"]),O(t,"y",["number"]),O(r,"width",["number"]),O(x,"height",["number"]);var i=this.doc.context.obj([e,t,e+r,t+x]);this.node.set(w.CropBox,i)},n.prototype.setBleedBox=function(e,t,r,x){O(e,"x",["number"]),O(t,"y",["number"]),O(r,"width",["number"]),O(x,"height",["number"]);var i=this.doc.context.obj([e,t,e+r,t+x]);this.node.set(w.BleedBox,i)},n.prototype.setTrimBox=function(e,t,r,x){O(e,"x",["number"]),O(t,"y",["number"]),O(r,"width",["number"]),O(x,"height",["number"]);var i=this.doc.context.obj([e,t,e+r,t+x]);this.node.set(w.TrimBox,i)},n.prototype.setArtBox=function(e,t,r,x){O(e,"x",["number"]),O(t,"y",["number"]),O(r,"width",["number"]),O(x,"height",["number"]);var i=this.doc.context.obj([e,t,e+r,t+x]);this.node.set(w.ArtBox,i)},n.prototype.getSize=function(){var e=this.getMediaBox(),t=e.width,r=e.height;return{width:t,height:r}},n.prototype.getWidth=function(){return this.getSize().width},n.prototype.getHeight=function(){return this.getSize().height},n.prototype.getMediaBox=function(){var e=this.node.MediaBox();return e.asRectangle()},n.prototype.getCropBox=function(){var e,t=this.node.CropBox();return(e=t?.asRectangle())!==null&&e!==void 0?e:this.getMediaBox()},n.prototype.getBleedBox=function(){var e,t=this.node.BleedBox();return(e=t?.asRectangle())!==null&&e!==void 0?e:this.getCropBox()},n.prototype.getTrimBox=function(){var e,t=this.node.TrimBox();return(e=t?.asRectangle())!==null&&e!==void 0?e:this.getCropBox()},n.prototype.getArtBox=function(){var e,t=this.node.ArtBox();return(e=t?.asRectangle())!==null&&e!==void 0?e:this.getCropBox()},n.prototype.translateContent=function(e,t){O(e,"x",["number"]),O(t,"y",["number"]),this.node.normalize(),this.getContentStream();var r=this.createContentStream(ae(),Oe(e,t)),x=this.doc.context.register(r),i=this.createContentStream(le()),o=this.doc.context.register(i);this.node.wrapContentStreams(x,o)},n.prototype.scale=function(e,t){O(e,"x",["number"]),O(t,"y",["number"]),this.setSize(this.getWidth()*e,this.getHeight()*t),this.scaleContent(e,t),this.scaleAnnotations(e,t)},n.prototype.scaleContent=function(e,t){O(e,"x",["number"]),O(t,"y",["number"]),this.node.normalize(),this.getContentStream();var r=this.createContentStream(ae(),q5(e,t)),x=this.doc.context.register(r),i=this.createContentStream(le()),o=this.doc.context.register(i);this.node.wrapContentStreams(x,o)},n.prototype.scaleAnnotations=function(e,t){O(e,"x",["number"]),O(t,"y",["number"]);var r=this.node.Annots();if(r)for(var x=0;x<r.size();x++){var i=r.lookup(x);i instanceof D0&&this.scaleAnnot(i,e,t)}},n.prototype.resetPosition=function(){this.getContentStream(!1),this.x=0,this.y=0},n.prototype.setFont=function(e){O(e,"font",[[be,"PDFFont"]]),this.font=e,this.fontKey=this.node.newFontDictionary(this.font.name,this.font.ref)},n.prototype.setFontSize=function(e){O(e,"fontSize",["number"]),this.fontSize=e},n.prototype.setFontColor=function(e){O(e,"fontColor",[[Object,"Color"]]),this.fontColor=e},n.prototype.setLineHeight=function(e){O(e,"lineHeight",["number"]),this.lineHeight=e},n.prototype.getPosition=function(){return{x:this.x,y:this.y}},n.prototype.getX=function(){return this.x},n.prototype.getY=function(){return this.y},n.prototype.moveTo=function(e,t){O(e,"x",["number"]),O(t,"y",["number"]),this.x=e,this.y=t},n.prototype.moveDown=function(e){O(e,"yDecrease",["number"]),this.y-=e},n.prototype.moveUp=function(e){O(e,"yIncrease",["number"]),this.y+=e},n.prototype.moveLeft=function(e){O(e,"xDecrease",["number"]),this.x-=e},n.prototype.moveRight=function(e){O(e,"xIncrease",["number"]),this.x+=e},n.prototype.pushOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Ex(e,"operator",[[z0,"PDFOperator"]]);var r=this.getContentStream();r.push.apply(r,e)},n.prototype.drawText=function(e,t){var r,x,i,o,a,l,c;t===void 0&&(t={}),O(e,"text",["string"]),_(t.color,"options.color",[[Object,"Color"]]),Ve(t.opacity,"opacity.opacity",0,1),_(t.font,"options.font",[[be,"PDFFont"]]),_(t.size,"options.size",["number"]),_(t.rotate,"options.rotate",[[Object,"Rotation"]]),_(t.xSkew,"options.xSkew",[[Object,"Rotation"]]),_(t.ySkew,"options.ySkew",[[Object,"Rotation"]]),_(t.x,"options.x",["number"]),_(t.y,"options.y",["number"]),_(t.lineHeight,"options.lineHeight",["number"]),_(t.maxWidth,"options.maxWidth",["number"]),_(t.wordBreaks,"options.wordBreaks",[Array]),Pe(t.blendMode,"options.blendMode",$e);for(var h=this.setOrEmbedFont(t.font),s=h.oldFont,u=h.newFont,f=h.newFontKey,v=t.size||this.fontSize,C=t.wordBreaks||this.doc.defaultWordBreaks,F=function(g){return u.widthOfTextAtSize(g,v)},p=t.maxWidth===void 0?_1(T5(e)):m2(e,C,t.maxWidth,F),S=new Array(p.length),y=0,D=p.length;y<D;y++)S[y]=u.encodeText(p[y]);var b=this.maybeEmbedGraphicsState({opacity:t.opacity,blendMode:t.blendMode}),A=this.getContentStream();A.push.apply(A,Yo(S,{color:(r=t.color)!==null&&r!==void 0?r:this.fontColor,font:f,size:v,rotate:(x=t.rotate)!==null&&x!==void 0?x:v0(0),xSkew:(i=t.xSkew)!==null&&i!==void 0?i:v0(0),ySkew:(o=t.ySkew)!==null&&o!==void 0?o:v0(0),x:(a=t.x)!==null&&a!==void 0?a:this.x,y:(l=t.y)!==null&&l!==void 0?l:this.y,lineHeight:(c=t.lineHeight)!==null&&c!==void 0?c:this.lineHeight,graphicsState:b})),t.font&&(s?this.setFont(s):this.resetFont())},n.prototype.drawImage=function(e,t){var r,x,i,o,a,l,c;t===void 0&&(t={}),O(e,"image",[[vr,"PDFImage"]]),_(t.x,"options.x",["number"]),_(t.y,"options.y",["number"]),_(t.width,"options.width",["number"]),_(t.height,"options.height",["number"]),_(t.rotate,"options.rotate",[[Object,"Rotation"]]),_(t.xSkew,"options.xSkew",[[Object,"Rotation"]]),_(t.ySkew,"options.ySkew",[[Object,"Rotation"]]),Ve(t.opacity,"opacity.opacity",0,1),Pe(t.blendMode,"options.blendMode",$e);var h=this.node.newXObject("Image",e.ref),s=this.maybeEmbedGraphicsState({opacity:t.opacity,blendMode:t.blendMode}),u=this.getContentStream();u.push.apply(u,Jx(h,{x:(r=t.x)!==null&&r!==void 0?r:this.x,y:(x=t.y)!==null&&x!==void 0?x:this.y,width:(i=t.width)!==null&&i!==void 0?i:e.size().width,height:(o=t.height)!==null&&o!==void 0?o:e.size().height,rotate:(a=t.rotate)!==null&&a!==void 0?a:v0(0),xSkew:(l=t.xSkew)!==null&&l!==void 0?l:v0(0),ySkew:(c=t.ySkew)!==null&&c!==void 0?c:v0(0),graphicsState:s}))},n.prototype.drawPage=function(e,t){var r,x,i,o,a;t===void 0&&(t={}),O(e,"embeddedPage",[[r2,"PDFEmbeddedPage"]]),_(t.x,"options.x",["number"]),_(t.y,"options.y",["number"]),_(t.xScale,"options.xScale",["number"]),_(t.yScale,"options.yScale",["number"]),_(t.width,"options.width",["number"]),_(t.height,"options.height",["number"]),_(t.rotate,"options.rotate",[[Object,"Rotation"]]),_(t.xSkew,"options.xSkew",[[Object,"Rotation"]]),_(t.ySkew,"options.ySkew",[[Object,"Rotation"]]),Ve(t.opacity,"opacity.opacity",0,1),Pe(t.blendMode,"options.blendMode",$e);var l=this.node.newXObject("EmbeddedPdfPage",e.ref),c=this.maybeEmbedGraphicsState({opacity:t.opacity,blendMode:t.blendMode}),h=t.width!==void 0?t.width/e.width:t.xScale!==void 0?t.xScale:1,s=t.height!==void 0?t.height/e.height:t.yScale!==void 0?t.yScale:1,u=this.getContentStream();u.push.apply(u,Jo(l,{x:(r=t.x)!==null&&r!==void 0?r:this.x,y:(x=t.y)!==null&&x!==void 0?x:this.y,xScale:h,yScale:s,rotate:(i=t.rotate)!==null&&i!==void 0?i:v0(0),xSkew:(o=t.xSkew)!==null&&o!==void 0?o:v0(0),ySkew:(a=t.ySkew)!==null&&a!==void 0?a:v0(0),graphicsState:c}))},n.prototype.drawSvgPath=function(e,t){var r,x,i,o,a,l,c,h,s;t===void 0&&(t={}),O(e,"path",["string"]),_(t.x,"options.x",["number"]),_(t.y,"options.y",["number"]),_(t.scale,"options.scale",["number"]),_(t.rotate,"options.rotate",[[Object,"Rotation"]]),_(t.borderWidth,"options.borderWidth",["number"]),_(t.color,"options.color",[[Object,"Color"]]),Ve(t.opacity,"opacity.opacity",0,1),_(t.borderColor,"options.borderColor",[[Object,"Color"]]),_(t.borderDashArray,"options.borderDashArray",[Array]),_(t.borderDashPhase,"options.borderDashPhase",["number"]),Pe(t.borderLineCap,"options.borderLineCap",Qt),Ve(t.borderOpacity,"options.borderOpacity",0,1),Pe(t.blendMode,"options.blendMode",$e);var u=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode});!("color"in t)&&!("borderColor"in t)&&(t.borderColor=R0(0,0,0));var f=this.getContentStream();f.push.apply(f,e9(e,{x:(r=t.x)!==null&&r!==void 0?r:this.x,y:(x=t.y)!==null&&x!==void 0?x:this.y,scale:t.scale,rotate:(i=t.rotate)!==null&&i!==void 0?i:v0(0),color:(o=t.color)!==null&&o!==void 0?o:void 0,borderColor:(a=t.borderColor)!==null&&a!==void 0?a:void 0,borderWidth:(l=t.borderWidth)!==null&&l!==void 0?l:0,borderDashArray:(c=t.borderDashArray)!==null&&c!==void 0?c:void 0,borderDashPhase:(h=t.borderDashPhase)!==null&&h!==void 0?h:void 0,borderLineCap:(s=t.borderLineCap)!==null&&s!==void 0?s:void 0,graphicsState:u}))},n.prototype.drawLine=function(e){var t,r,x,i,o;O(e.start,"options.start",[[Object,"{ x: number, y: number }"]]),O(e.end,"options.end",[[Object,"{ x: number, y: number }"]]),O(e.start.x,"options.start.x",["number"]),O(e.start.y,"options.start.y",["number"]),O(e.end.x,"options.end.x",["number"]),O(e.end.y,"options.end.y",["number"]),_(e.thickness,"options.thickness",["number"]),_(e.color,"options.color",[[Object,"Color"]]),_(e.dashArray,"options.dashArray",[Array]),_(e.dashPhase,"options.dashPhase",["number"]),Pe(e.lineCap,"options.lineCap",Qt),Ve(e.opacity,"opacity.opacity",0,1),Pe(e.blendMode,"options.blendMode",$e);var a=this.maybeEmbedGraphicsState({borderOpacity:e.opacity,blendMode:e.blendMode});"color"in e||(e.color=R0(0,0,0));var l=this.getContentStream();l.push.apply(l,Qo({start:e.start,end:e.end,thickness:(t=e.thickness)!==null&&t!==void 0?t:1,color:(r=e.color)!==null&&r!==void 0?r:void 0,dashArray:(x=e.dashArray)!==null&&x!==void 0?x:void 0,dashPhase:(i=e.dashPhase)!==null&&i!==void 0?i:void 0,lineCap:(o=e.lineCap)!==null&&o!==void 0?o:void 0,graphicsState:a}))},n.prototype.drawRectangle=function(e){var t,r,x,i,o,a,l,c,h,s,u,f,v;e===void 0&&(e={}),_(e.x,"options.x",["number"]),_(e.y,"options.y",["number"]),_(e.width,"options.width",["number"]),_(e.height,"options.height",["number"]),_(e.rotate,"options.rotate",[[Object,"Rotation"]]),_(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),_(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),_(e.borderWidth,"options.borderWidth",["number"]),_(e.color,"options.color",[[Object,"Color"]]),Ve(e.opacity,"opacity.opacity",0,1),_(e.borderColor,"options.borderColor",[[Object,"Color"]]),_(e.borderDashArray,"options.borderDashArray",[Array]),_(e.borderDashPhase,"options.borderDashPhase",["number"]),Pe(e.borderLineCap,"options.borderLineCap",Qt),Ve(e.borderOpacity,"options.borderOpacity",0,1),Pe(e.blendMode,"options.blendMode",$e);var C=this.maybeEmbedGraphicsState({opacity:e.opacity,borderOpacity:e.borderOpacity,blendMode:e.blendMode});!("color"in e)&&!("borderColor"in e)&&(e.color=R0(0,0,0));var F=this.getContentStream();F.push.apply(F,e5({x:(t=e.x)!==null&&t!==void 0?t:this.x,y:(r=e.y)!==null&&r!==void 0?r:this.y,width:(x=e.width)!==null&&x!==void 0?x:150,height:(i=e.height)!==null&&i!==void 0?i:100,rotate:(o=e.rotate)!==null&&o!==void 0?o:v0(0),xSkew:(a=e.xSkew)!==null&&a!==void 0?a:v0(0),ySkew:(l=e.ySkew)!==null&&l!==void 0?l:v0(0),borderWidth:(c=e.borderWidth)!==null&&c!==void 0?c:0,color:(h=e.color)!==null&&h!==void 0?h:void 0,borderColor:(s=e.borderColor)!==null&&s!==void 0?s:void 0,borderDashArray:(u=e.borderDashArray)!==null&&u!==void 0?u:void 0,borderDashPhase:(f=e.borderDashPhase)!==null&&f!==void 0?f:void 0,graphicsState:C,borderLineCap:(v=e.borderLineCap)!==null&&v!==void 0?v:void 0}))},n.prototype.drawSquare=function(e){e===void 0&&(e={});var t=e.size;_(t,"size",["number"]),this.drawRectangle(F0(F0({},e),{width:t,height:t}))},n.prototype.drawEllipse=function(e){var t,r,x,i,o,a,l,c,h,s,u;e===void 0&&(e={}),_(e.x,"options.x",["number"]),_(e.y,"options.y",["number"]),_(e.xScale,"options.xScale",["number"]),_(e.yScale,"options.yScale",["number"]),_(e.rotate,"options.rotate",[[Object,"Rotation"]]),_(e.color,"options.color",[[Object,"Color"]]),Ve(e.opacity,"opacity.opacity",0,1),_(e.borderColor,"options.borderColor",[[Object,"Color"]]),Ve(e.borderOpacity,"options.borderOpacity",0,1),_(e.borderWidth,"options.borderWidth",["number"]),_(e.borderDashArray,"options.borderDashArray",[Array]),_(e.borderDashPhase,"options.borderDashPhase",["number"]),Pe(e.borderLineCap,"options.borderLineCap",Qt),Pe(e.blendMode,"options.blendMode",$e);var f=this.maybeEmbedGraphicsState({opacity:e.opacity,borderOpacity:e.borderOpacity,blendMode:e.blendMode});!("color"in e)&&!("borderColor"in e)&&(e.color=R0(0,0,0));var v=this.getContentStream();v.push.apply(v,fr({x:(t=e.x)!==null&&t!==void 0?t:this.x,y:(r=e.y)!==null&&r!==void 0?r:this.y,xScale:(x=e.xScale)!==null&&x!==void 0?x:100,yScale:(i=e.yScale)!==null&&i!==void 0?i:100,rotate:(o=e.rotate)!==null&&o!==void 0?o:void 0,color:(a=e.color)!==null&&a!==void 0?a:void 0,borderColor:(l=e.borderColor)!==null&&l!==void 0?l:void 0,borderWidth:(c=e.borderWidth)!==null&&c!==void 0?c:0,borderDashArray:(h=e.borderDashArray)!==null&&h!==void 0?h:void 0,borderDashPhase:(s=e.borderDashPhase)!==null&&s!==void 0?s:void 0,borderLineCap:(u=e.borderLineCap)!==null&&u!==void 0?u:void 0,graphicsState:f}))},n.prototype.drawCircle=function(e){e===void 0&&(e={});var t=e.size,r=t===void 0?100:t;_(r,"size",["number"]),this.drawEllipse(F0(F0({},e),{xScale:r,yScale:r}))},n.prototype.setOrEmbedFont=function(e){var t=this.font,r=this.fontKey;e?this.setFont(e):this.getFont();var x=this.font,i=this.fontKey;return{oldFont:t,oldFontKey:r,newFont:x,newFontKey:i}},n.prototype.getFont=function(){if(!this.font||!this.fontKey){var e=this.doc.embedStandardFont(t5.Helvetica);this.setFont(e)}return[this.font,this.fontKey]},n.prototype.resetFont=function(){this.font=void 0,this.fontKey=void 0},n.prototype.getContentStream=function(e){return e===void 0&&(e=!0),e&&this.contentStream?this.contentStream:(this.contentStream=this.createContentStream(),this.contentStreamRef=this.doc.context.register(this.contentStream),this.node.addContentStream(this.contentStreamRef),this.contentStream)},n.prototype.createContentStream=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this.doc.context.obj({}),x=F5.of(r,e);return x},n.prototype.maybeEmbedGraphicsState=function(e){var t=e.opacity,r=e.borderOpacity,x=e.blendMode;if(!(t===void 0&&r===void 0&&x===void 0)){var i=this.doc.context.obj({Type:"ExtGState",ca:t,CA:r,BM:x}),o=this.node.newExtGState("GS",i);return o}},n.prototype.scaleAnnot=function(e,t,r){for(var x=["RD","CL","Vertices","QuadPoints","L","Rect"],i=0,o=x.length;i<o;i++){var a=e.lookup(w.of(x[i]));a instanceof I0&&a.scalePDFNumbers(t,r)}var l=e.lookup(w.of("InkList"));if(l instanceof I0)for(var i=0,o=l.size();i<o;i++){var c=l.lookup(i);c instanceof I0&&c.scalePDFNumbers(t,r)}},n.of=function(e,t,r){return new n(e,t,r)},n.create=function(e){O(e,"doc",[[ot,"PDFDocument"]]);var t=U0.of(-1),r=it.withContextAndParent(e.context,t),x=e.context.register(r);return new n(r,x,e)},n})(),cn=(function(n){e0(e,n);function e(t,r,x){var i=n.call(this,t,r,x)||this;return O(t,"acroButton",[[On,"PDFAcroPushButton"]]),i.acroField=t,i}return e.prototype.setImage=function(t,r){r===void 0&&(r=Bt.Center);for(var x=this.acroField.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i],l=this.createImageAppearanceStream(a,t,r);this.updateWidgetAppearances(a,{normal:l})}this.markAsClean()},e.prototype.setFontSize=function(t){qn(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.addToPage=function(t,r,x){var i,o,a,l,c,h,s,u,f,v,C;_(t,"text",["string"]),_(r,"page",[[Te,"PDFPage"]]),i5(x);var F=this.createWidget({x:((i=x?.x)!==null&&i!==void 0?i:0)-((o=x?.borderWidth)!==null&&o!==void 0?o:0)/2,y:((a=x?.y)!==null&&a!==void 0?a:0)-((l=x?.borderWidth)!==null&&l!==void 0?l:0)/2,width:(c=x?.width)!==null&&c!==void 0?c:100,height:(h=x?.height)!==null&&h!==void 0?h:50,textColor:(s=x?.textColor)!==null&&s!==void 0?s:R0(0,0,0),backgroundColor:(u=x?.backgroundColor)!==null&&u!==void 0?u:R0(.75,.75,.75),borderColor:x?.borderColor,borderWidth:(f=x?.borderWidth)!==null&&f!==void 0?f:0,rotate:(v=x?.rotate)!==null&&v!==void 0?v:v0(0),caption:t,hidden:x?.hidden,page:r.ref}),p=this.doc.context.register(F.dict);this.acroField.addWidget(p);var S=(C=x?.font)!==null&&C!==void 0?C:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(F,S),r.node.addAnnot(p)},e.prototype.needsAppearancesUpdate=function(){var t;if(this.isDirty())return!0;for(var r=this.acroField.getWidgets(),x=0,i=r.length;x<i;x++){var o=r[x],a=((t=o.getAppearances())===null||t===void 0?void 0:t.normal)instanceof we;if(!a)return!0}return!1},e.prototype.defaultUpdateAppearances=function(t){O(t,"font",[[be,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,r){O(t,"font",[[be,"PDFFont"]]),_(r,"provider",[Function]);for(var x=this.acroField.getWidgets(),i=0,o=x.length;i<o;i++){var a=x[i];this.updateWidgetAppearance(a,t,r)}},e.prototype.updateWidgetAppearance=function(t,r,x){var i=x??g9,o=x5(i(this,t,r));this.updateWidgetAppearanceWithFont(t,r,o)},e.of=function(t,r,x){return new e(t,r,x)},e})(Rt),sn={exports:{}},P9=sn.exports,W1;function z9(){return W1||(W1=1,(function(n,e){(function(r,x){n.exports=x()})(typeof self<"u"?self:P9,function(){return(function(t){var r={};function x(i){if(r[i])return r[i].exports;var o=r[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,x),o.l=!0,o.exports}return x.m=t,x.c=r,x.d=function(i,o,a){x.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:a})},x.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return x.d(o,"a",o),o},x.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},x.p="",x(x.s=3)})([(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function o(a,l){this.width=l,this.height=a.length/l,this.data=a}return o.createEmpty=function(a,l){return new o(new Uint8ClampedArray(a*l),a)},o.prototype.get=function(a,l){return a<0||a>=this.width||l<0||l>=this.height?!1:!!this.data[l*this.width+a]},o.prototype.set=function(a,l,c){this.data[l*this.width+a]=c?1:0},o.prototype.setRegion=function(a,l,c,h,s){for(var u=l;u<l+h;u++)for(var f=a;f<a+c;f++)this.set(f,u,!!s)},o})();r.BitMatrix=i}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(2);function o(l,c){return l^c}r.addOrSubtractGF=o;var a=(function(){function l(c,h,s){this.primitive=c,this.size=h,this.generatorBase=s,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var u=1,f=0;f<this.size;f++)this.expTable[f]=u,u=u*2,u>=this.size&&(u=(u^this.primitive)&this.size-1);for(var f=0;f<this.size-1;f++)this.logTable[this.expTable[f]]=f;this.zero=new i.default(this,Uint8ClampedArray.from([0])),this.one=new i.default(this,Uint8ClampedArray.from([1]))}return l.prototype.multiply=function(c,h){return c===0||h===0?0:this.expTable[(this.logTable[c]+this.logTable[h])%(this.size-1)]},l.prototype.inverse=function(c){if(c===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[c]-1]},l.prototype.buildMonomial=function(c,h){if(c<0)throw new Error("Invalid monomial degree less than 0");if(h===0)return this.zero;var s=new Uint8ClampedArray(c+1);return s[0]=h,new i.default(this,s)},l.prototype.log=function(c){if(c===0)throw new Error("Can't take log(0)");return this.logTable[c]},l.prototype.exp=function(c){return this.expTable[c]},l})();r.default=a}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(1),o=(function(){function a(l,c){if(c.length===0)throw new Error("No coefficients.");this.field=l;var h=c.length;if(h>1&&c[0]===0){for(var s=1;s<h&&c[s]===0;)s++;if(s===h)this.coefficients=l.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(h-s);for(var u=0;u<this.coefficients.length;u++)this.coefficients[u]=c[s+u]}}else this.coefficients=c}return a.prototype.degree=function(){return this.coefficients.length-1},a.prototype.isZero=function(){return this.coefficients[0]===0},a.prototype.getCoefficient=function(l){return this.coefficients[this.coefficients.length-1-l]},a.prototype.addOrSubtract=function(l){var c;if(this.isZero())return l;if(l.isZero())return this;var h=this.coefficients,s=l.coefficients;h.length>s.length&&(c=[s,h],h=c[0],s=c[1]);for(var u=new Uint8ClampedArray(s.length),f=s.length-h.length,v=0;v<f;v++)u[v]=s[v];for(var v=f;v<s.length;v++)u[v]=i.addOrSubtractGF(h[v-f],s[v]);return new a(this.field,u)},a.prototype.multiply=function(l){if(l===0)return this.field.zero;if(l===1)return this;for(var c=this.coefficients.length,h=new Uint8ClampedArray(c),s=0;s<c;s++)h[s]=this.field.multiply(this.coefficients[s],l);return new a(this.field,h)},a.prototype.multiplyPoly=function(l){if(this.isZero()||l.isZero())return this.field.zero;for(var c=this.coefficients,h=c.length,s=l.coefficients,u=s.length,f=new Uint8ClampedArray(h+u-1),v=0;v<h;v++)for(var C=c[v],F=0;F<u;F++)f[v+F]=i.addOrSubtractGF(f[v+F],this.field.multiply(C,s[F]));return new a(this.field,f)},a.prototype.multiplyByMonomial=function(l,c){if(l<0)throw new Error("Invalid degree less than 0");if(c===0)return this.field.zero;for(var h=this.coefficients.length,s=new Uint8ClampedArray(h+l),u=0;u<h;u++)s[u]=this.field.multiply(this.coefficients[u],c);return new a(this.field,s)},a.prototype.evaluateAt=function(l){var c=0;if(l===0)return this.getCoefficient(0);var h=this.coefficients.length;if(l===1)return this.coefficients.forEach(function(u){c=i.addOrSubtractGF(c,u)}),c;c=this.coefficients[0];for(var s=1;s<h;s++)c=i.addOrSubtractGF(this.field.multiply(l,c),this.coefficients[s]);return c},a})();r.default=o}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(4),o=x(5),a=x(11),l=x(12);function c(u){var f=l.locate(u);if(!f)return null;for(var v=0,C=f;v<C.length;v++){var F=C[v],p=a.extract(u,F),S=o.decode(p.matrix);if(S)return{binaryData:S.bytes,data:S.text,chunks:S.chunks,version:S.version,location:{topRightCorner:p.mappingFunction(F.dimension,0),topLeftCorner:p.mappingFunction(0,0),bottomRightCorner:p.mappingFunction(F.dimension,F.dimension),bottomLeftCorner:p.mappingFunction(0,F.dimension),topRightFinderPattern:F.topRight,topLeftFinderPattern:F.topLeft,bottomLeftFinderPattern:F.bottomLeft,bottomRightAlignmentPattern:F.alignmentPattern}}}return null}var h={inversionAttempts:"attemptBoth"};function s(u,f,v,C){C===void 0&&(C={});var F=h;Object.keys(F||{}).forEach(function(g){F[g]=C[g]||F[g]});var p=F.inversionAttempts==="attemptBoth"||F.inversionAttempts==="invertFirst",S=F.inversionAttempts==="onlyInvert"||F.inversionAttempts==="invertFirst",y=i.binarize(u,f,v,p),D=y.binarized,b=y.inverted,A=c(S?b:D);return!A&&(F.inversionAttempts==="attemptBoth"||F.inversionAttempts==="invertFirst")&&(A=c(S?D:b)),A}s.default=s,r.default=s}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(0),o=8,a=24;function l(s,u,f){return s<u?u:s>f?f:s}var c=(function(){function s(u,f){this.width=u,this.data=new Uint8ClampedArray(u*f)}return s.prototype.get=function(u,f){return this.data[f*this.width+u]},s.prototype.set=function(u,f,v){this.data[f*this.width+u]=v},s})();function h(s,u,f,v){if(s.length!==u*f*4)throw new Error("Malformed data passed to binarizer.");for(var C=new c(u,f),F=0;F<u;F++)for(var p=0;p<f;p++){var S=s[(p*u+F)*4+0],y=s[(p*u+F)*4+1],D=s[(p*u+F)*4+2];C.set(F,p,.2126*S+.7152*y+.0722*D)}for(var b=Math.ceil(u/o),A=Math.ceil(f/o),g=new c(b,A),P=0;P<A;P++)for(var T=0;T<b;T++){for(var R=0,N=1/0,L=0,p=0;p<o;p++)for(var F=0;F<o;F++){var M=C.get(T*o+F,P*o+p);R+=M,N=Math.min(N,M),L=Math.max(L,M)}var K=R/Math.pow(o,2);if(L-N<=a&&(K=N/2,P>0&&T>0)){var X=(g.get(T,P-1)+2*g.get(T-1,P)+g.get(T-1,P-1))/4;N<X&&(K=X)}g.set(T,P,K)}var H=i.BitMatrix.createEmpty(u,f),U=null;v&&(U=i.BitMatrix.createEmpty(u,f));for(var P=0;P<A;P++)for(var T=0;T<b;T++){for(var a0=l(T,2,b-3),o0=l(P,2,A-3),R=0,A0=-2;A0<=2;A0++)for(var t0=-2;t0<=2;t0++)R+=g.get(a0+A0,o0+t0);for(var d0=R/25,A0=0;A0<o;A0++)for(var t0=0;t0<o;t0++){var F=T*o+A0,p=P*o+t0,S0=C.get(F,p);H.set(F,p,S0<=d0),v&&U.set(F,p,!(S0<=d0))}}return v?{binarized:H,inverted:U}:{binarized:H}}r.binarize=h}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(0),o=x(6),a=x(9),l=x(10);function c(D,b){for(var A=D^b,g=0;A;)g++,A&=A-1;return g}function h(D,b){return b<<1|D}var s=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],u=[function(D){return(D.y+D.x)%2===0},function(D){return D.y%2===0},function(D){return D.x%3===0},function(D){return(D.y+D.x)%3===0},function(D){return(Math.floor(D.y/2)+Math.floor(D.x/3))%2===0},function(D){return D.x*D.y%2+D.x*D.y%3===0},function(D){return(D.y*D.x%2+D.y*D.x%3)%2===0},function(D){return((D.y+D.x)%2+D.y*D.x%3)%2===0}];function f(D){var b=17+4*D.versionNumber,A=i.BitMatrix.createEmpty(b,b);A.setRegion(0,0,9,9,!0),A.setRegion(b-8,0,8,9,!0),A.setRegion(0,b-8,9,8,!0);for(var g=0,P=D.alignmentPatternCenters;g<P.length;g++)for(var T=P[g],R=0,N=D.alignmentPatternCenters;R<N.length;R++){var L=N[R];T===6&&L===6||T===6&&L===b-7||T===b-7&&L===6||A.setRegion(T-2,L-2,5,5,!0)}return A.setRegion(6,9,1,b-17,!0),A.setRegion(9,6,b-17,1,!0),D.versionNumber>6&&(A.setRegion(b-11,0,3,6,!0),A.setRegion(0,b-11,6,3,!0)),A}function v(D,b,A){for(var g=u[A.dataMask],P=D.height,T=f(b),R=[],N=0,L=0,M=!0,K=P-1;K>0;K-=2){K===6&&K--;for(var X=0;X<P;X++)for(var H=M?P-1-X:X,U=0;U<2;U++){var a0=K-U;if(!T.get(a0,H)){L++;var o0=D.get(a0,H);g({y:H,x:a0})&&(o0=!o0),N=h(o0,N),L===8&&(R.push(N),L=0,N=0)}}M=!M}return R}function C(D){var b=D.height,A=Math.floor((b-17)/4);if(A<=6)return l.VERSIONS[A-1];for(var g=0,P=5;P>=0;P--)for(var T=b-9;T>=b-11;T--)g=h(D.get(T,P),g);for(var R=0,T=5;T>=0;T--)for(var P=b-9;P>=b-11;P--)R=h(D.get(T,P),R);for(var N=1/0,L,M=0,K=l.VERSIONS;M<K.length;M++){var X=K[M];if(X.infoBits===g||X.infoBits===R)return X;var H=c(g,X.infoBits);H<N&&(L=X,N=H),H=c(R,X.infoBits),H<N&&(L=X,N=H)}if(N<=3)return L}function F(D){for(var b=0,A=0;A<=8;A++)A!==6&&(b=h(D.get(A,8),b));for(var g=7;g>=0;g--)g!==6&&(b=h(D.get(8,g),b));for(var P=D.height,T=0,g=P-1;g>=P-7;g--)T=h(D.get(8,g),T);for(var A=P-8;A<P;A++)T=h(D.get(A,8),T);for(var R=1/0,N=null,L=0,M=s;L<M.length;L++){var K=M[L],X=K.bits,H=K.formatInfo;if(X===b||X===T)return H;var U=c(b,X);U<R&&(N=H,R=U),b!==T&&(U=c(T,X),U<R&&(N=H,R=U))}return R<=3?N:null}function p(D,b,A){var g=b.errorCorrectionLevels[A],P=[],T=0;if(g.ecBlocks.forEach(function(o0){for(var A0=0;A0<o0.numBlocks;A0++)P.push({numDataCodewords:o0.dataCodewordsPerBlock,codewords:[]}),T+=o0.dataCodewordsPerBlock+g.ecCodewordsPerBlock}),D.length<T)return null;D=D.slice(0,T);for(var R=g.ecBlocks[0].dataCodewordsPerBlock,N=0;N<R;N++)for(var L=0,M=P;L<M.length;L++){var K=M[L];K.codewords.push(D.shift())}if(g.ecBlocks.length>1)for(var X=g.ecBlocks[0].numBlocks,H=g.ecBlocks[1].numBlocks,N=0;N<H;N++)P[X+N].codewords.push(D.shift());for(;D.length>0;)for(var U=0,a0=P;U<a0.length;U++){var K=a0[U];K.codewords.push(D.shift())}return P}function S(D){var b=C(D);if(!b)return null;var A=F(D);if(!A)return null;var g=v(D,b,A),P=p(g,b,A.errorCorrectionLevel);if(!P)return null;for(var T=P.reduce(function(U,a0){return U+a0.numDataCodewords},0),R=new Uint8ClampedArray(T),N=0,L=0,M=P;L<M.length;L++){var K=M[L],X=a.decode(K.codewords,K.codewords.length-K.numDataCodewords);if(!X)return null;for(var H=0;H<K.numDataCodewords;H++)R[N++]=X[H]}try{return o.decode(R,b.versionNumber)}catch{return null}}function y(D){if(D==null)return null;var b=S(D);if(b)return b;for(var A=0;A<D.width;A++)for(var g=A+1;g<D.height;g++)D.get(A,g)!==D.get(g,A)&&(D.set(A,g,!D.get(A,g)),D.set(g,A,!D.get(g,A)));return S(D)}r.decode=y}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(7),o=x(8),a;(function(C){C.Numeric="numeric",C.Alphanumeric="alphanumeric",C.Byte="byte",C.Kanji="kanji",C.ECI="eci"})(a=r.Mode||(r.Mode={}));var l;(function(C){C[C.Terminator=0]="Terminator",C[C.Numeric=1]="Numeric",C[C.Alphanumeric=2]="Alphanumeric",C[C.Byte=4]="Byte",C[C.Kanji=8]="Kanji",C[C.ECI=7]="ECI"})(l||(l={}));function c(C,F){for(var p=[],S="",y=[10,12,14][F],D=C.readBits(y);D>=3;){var b=C.readBits(10);if(b>=1e3)throw new Error("Invalid numeric value above 999");var A=Math.floor(b/100),g=Math.floor(b/10)%10,P=b%10;p.push(48+A,48+g,48+P),S+=A.toString()+g.toString()+P.toString(),D-=3}if(D===2){var b=C.readBits(7);if(b>=100)throw new Error("Invalid numeric value above 99");var A=Math.floor(b/10),g=b%10;p.push(48+A,48+g),S+=A.toString()+g.toString()}else if(D===1){var b=C.readBits(4);if(b>=10)throw new Error("Invalid numeric value above 9");p.push(48+b),S+=b.toString()}return{bytes:p,text:S}}var h=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function s(C,F){for(var p=[],S="",y=[9,11,13][F],D=C.readBits(y);D>=2;){var b=C.readBits(11),A=Math.floor(b/45),g=b%45;p.push(h[A].charCodeAt(0),h[g].charCodeAt(0)),S+=h[A]+h[g],D-=2}if(D===1){var A=C.readBits(6);p.push(h[A].charCodeAt(0)),S+=h[A]}return{bytes:p,text:S}}function u(C,F){for(var p=[],S="",y=[8,16,16][F],D=C.readBits(y),b=0;b<D;b++){var A=C.readBits(8);p.push(A)}try{S+=decodeURIComponent(p.map(function(g){return"%"+("0"+g.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:p,text:S}}function f(C,F){for(var p=[],S="",y=[8,10,12][F],D=C.readBits(y),b=0;b<D;b++){var A=C.readBits(13),g=Math.floor(A/192)<<8|A%192;g<7936?g+=33088:g+=49472,p.push(g>>8,g&255),S+=String.fromCharCode(o.shiftJISTable[g])}return{bytes:p,text:S}}function v(C,F){for(var p,S,y,D,b=new i.BitStream(C),A=F<=9?0:F<=26?1:2,g={text:"",bytes:[],chunks:[],version:F};b.available()>=4;){var P=b.readBits(4);if(P===l.Terminator)return g;if(P===l.ECI)b.readBits(1)===0?g.chunks.push({type:a.ECI,assignmentNumber:b.readBits(7)}):b.readBits(1)===0?g.chunks.push({type:a.ECI,assignmentNumber:b.readBits(14)}):b.readBits(1)===0?g.chunks.push({type:a.ECI,assignmentNumber:b.readBits(21)}):g.chunks.push({type:a.ECI,assignmentNumber:-1});else if(P===l.Numeric){var T=c(b,A);g.text+=T.text,(p=g.bytes).push.apply(p,T.bytes),g.chunks.push({type:a.Numeric,text:T.text})}else if(P===l.Alphanumeric){var R=s(b,A);g.text+=R.text,(S=g.bytes).push.apply(S,R.bytes),g.chunks.push({type:a.Alphanumeric,text:R.text})}else if(P===l.Byte){var N=u(b,A);g.text+=N.text,(y=g.bytes).push.apply(y,N.bytes),g.chunks.push({type:a.Byte,bytes:N.bytes,text:N.text})}else if(P===l.Kanji){var L=f(b,A);g.text+=L.text,(D=g.bytes).push.apply(D,L.bytes),g.chunks.push({type:a.Kanji,bytes:L.bytes,text:L.text})}}if(b.available()===0||b.readBits(b.available())===0)return g}r.decode=v}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function o(a){this.byteOffset=0,this.bitOffset=0,this.bytes=a}return o.prototype.readBits=function(a){if(a<1||a>32||a>this.available())throw new Error("Cannot read "+a.toString()+" bits");var l=0;if(this.bitOffset>0){var c=8-this.bitOffset,h=a<c?a:c,s=c-h,u=255>>8-h<<s;l=(this.bytes[this.byteOffset]&u)>>s,a-=h,this.bitOffset+=h,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(a>0){for(;a>=8;)l=l<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;if(a>0){var s=8-a,u=255>>s<<s;l=l<<a|(this.bytes[this.byteOffset]&u)>>s,this.bitOffset+=a}}return l},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o})();r.BitStream=i}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0}),r.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(1),o=x(2);function a(s,u,f,v){var C;u.degree()<f.degree()&&(C=[f,u],u=C[0],f=C[1]);for(var F=u,p=f,S=s.zero,y=s.one;p.degree()>=v/2;){var D=F,b=S;if(F=p,S=y,F.isZero())return null;p=D;for(var A=s.zero,g=F.getCoefficient(F.degree()),P=s.inverse(g);p.degree()>=F.degree()&&!p.isZero();){var T=p.degree()-F.degree(),R=s.multiply(p.getCoefficient(p.degree()),P);A=A.addOrSubtract(s.buildMonomial(T,R)),p=p.addOrSubtract(F.multiplyByMonomial(T,R))}if(y=A.multiplyPoly(S).addOrSubtract(b),p.degree()>=F.degree())return null}var N=y.getCoefficient(0);if(N===0)return null;var L=s.inverse(N);return[y.multiply(L),p.multiply(L)]}function l(s,u){var f=u.degree();if(f===1)return[u.getCoefficient(1)];for(var v=new Array(f),C=0,F=1;F<s.size&&C<f;F++)u.evaluateAt(F)===0&&(v[C]=s.inverse(F),C++);return C!==f?null:v}function c(s,u,f){for(var v=f.length,C=new Array(v),F=0;F<v;F++){for(var p=s.inverse(f[F]),S=1,y=0;y<v;y++)F!==y&&(S=s.multiply(S,i.addOrSubtractGF(1,s.multiply(f[y],p))));C[F]=s.multiply(u.evaluateAt(p),s.inverse(S)),s.generatorBase!==0&&(C[F]=s.multiply(C[F],p))}return C}function h(s,u){var f=new Uint8ClampedArray(s.length);f.set(s);for(var v=new i.default(285,256,0),C=new o.default(v,f),F=new Uint8ClampedArray(u),p=!1,S=0;S<u;S++){var y=C.evaluateAt(v.exp(S+v.generatorBase));F[F.length-1-S]=y,y!==0&&(p=!0)}if(!p)return f;var D=new o.default(v,F),b=a(v,v.buildMonomial(u,1),D,u);if(b===null)return null;var A=l(v,b[0]);if(A==null)return null;for(var g=c(v,b[1],A),P=0;P<A.length;P++){var T=f.length-1-v.log(A[P]);if(T<0)return null;f[T]=i.addOrSubtractGF(f[T],g[P])}return f}r.decode=h}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0}),r.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=x(0);function o(h,s,u,f){var v=h.x-s.x+u.x-f.x,C=h.y-s.y+u.y-f.y;if(v===0&&C===0)return{a11:s.x-h.x,a12:s.y-h.y,a13:0,a21:u.x-s.x,a22:u.y-s.y,a23:0,a31:h.x,a32:h.y,a33:1};var F=s.x-u.x,p=f.x-u.x,S=s.y-u.y,y=f.y-u.y,D=F*y-p*S,b=(v*y-p*C)/D,A=(F*C-v*S)/D;return{a11:s.x-h.x+b*s.x,a12:s.y-h.y+b*s.y,a13:b,a21:f.x-h.x+A*f.x,a22:f.y-h.y+A*f.y,a23:A,a31:h.x,a32:h.y,a33:1}}function a(h,s,u,f){var v=o(h,s,u,f);return{a11:v.a22*v.a33-v.a23*v.a32,a12:v.a13*v.a32-v.a12*v.a33,a13:v.a12*v.a23-v.a13*v.a22,a21:v.a23*v.a31-v.a21*v.a33,a22:v.a11*v.a33-v.a13*v.a31,a23:v.a13*v.a21-v.a11*v.a23,a31:v.a21*v.a32-v.a22*v.a31,a32:v.a12*v.a31-v.a11*v.a32,a33:v.a11*v.a22-v.a12*v.a21}}function l(h,s){return{a11:h.a11*s.a11+h.a21*s.a12+h.a31*s.a13,a12:h.a12*s.a11+h.a22*s.a12+h.a32*s.a13,a13:h.a13*s.a11+h.a23*s.a12+h.a33*s.a13,a21:h.a11*s.a21+h.a21*s.a22+h.a31*s.a23,a22:h.a12*s.a21+h.a22*s.a22+h.a32*s.a23,a23:h.a13*s.a21+h.a23*s.a22+h.a33*s.a23,a31:h.a11*s.a31+h.a21*s.a32+h.a31*s.a33,a32:h.a12*s.a31+h.a22*s.a32+h.a32*s.a33,a33:h.a13*s.a31+h.a23*s.a32+h.a33*s.a33}}function c(h,s){for(var u=a({x:3.5,y:3.5},{x:s.dimension-3.5,y:3.5},{x:s.dimension-6.5,y:s.dimension-6.5},{x:3.5,y:s.dimension-3.5}),f=o(s.topLeft,s.topRight,s.alignmentPattern,s.bottomLeft),v=l(f,u),C=i.BitMatrix.createEmpty(s.dimension,s.dimension),F=function(A,g){var P=v.a13*A+v.a23*g+v.a33;return{x:(v.a11*A+v.a21*g+v.a31)/P,y:(v.a12*A+v.a22*g+v.a32)/P}},p=0;p<s.dimension;p++)for(var S=0;S<s.dimension;S++){var y=S+.5,D=p+.5,b=F(y,D);C.set(S,p,h.get(Math.floor(b.x),Math.floor(b.y)))}return{matrix:C,mappingFunction:F}}r.extract=c}),(function(t,r,x){Object.defineProperty(r,"__esModule",{value:!0});var i=4,o=.5,a=1.5,l=function(y,D){return Math.sqrt(Math.pow(D.x-y.x,2)+Math.pow(D.y-y.y,2))};function c(y){return y.reduce(function(D,b){return D+b})}function h(y,D,b){var A,g,P,T,R=l(y,D),N=l(D,b),L=l(y,b),M,K,X;return N>=R&&N>=L?(A=[D,y,b],M=A[0],K=A[1],X=A[2]):L>=N&&L>=R?(g=[y,D,b],M=g[0],K=g[1],X=g[2]):(P=[y,b,D],M=P[0],K=P[1],X=P[2]),(X.x-K.x)*(M.y-K.y)-(X.y-K.y)*(M.x-K.x)<0&&(T=[X,M],M=T[0],X=T[1]),{bottomLeft:M,topLeft:K,topRight:X}}function s(y,D,b,A){var g=(c(f(y,b,A,5))/7+c(f(y,D,A,5))/7+c(f(b,y,A,5))/7+c(f(D,y,A,5))/7)/4;if(g<1)throw new Error("Invalid module size");var P=Math.round(l(y,D)/g),T=Math.round(l(y,b)/g),R=Math.floor((P+T)/2)+7;switch(R%4){case 0:R++;break;case 2:R--;break}return{dimension:R,moduleSize:g}}function u(y,D,b,A){var g=[{x:Math.floor(y.x),y:Math.floor(y.y)}],P=Math.abs(D.y-y.y)>Math.abs(D.x-y.x),T,R,N,L;P?(T=Math.floor(y.y),R=Math.floor(y.x),N=Math.floor(D.y),L=Math.floor(D.x)):(T=Math.floor(y.x),R=Math.floor(y.y),N=Math.floor(D.x),L=Math.floor(D.y));for(var M=Math.abs(N-T),K=Math.abs(L-R),X=Math.floor(-M/2),H=T<N?1:-1,U=R<L?1:-1,a0=!0,o0=T,A0=R;o0!==N+H;o0+=H){var t0=P?A0:o0,d0=P?o0:A0;if(b.get(t0,d0)!==a0&&(a0=!a0,g.push({x:t0,y:d0}),g.length===A+1))break;if(X+=K,X>0){if(A0===L)break;A0+=U,X-=M}}for(var S0=[],x0=0;x0<A;x0++)g[x0]&&g[x0+1]?S0.push(l(g[x0],g[x0+1])):S0.push(0);return S0}function f(y,D,b,A){var g,P=D.y-y.y,T=D.x-y.x,R=u(y,D,b,Math.ceil(A/2)),N=u(y,{x:y.x-T,y:y.y-P},b,Math.ceil(A/2)),L=R.shift()+N.shift()-1;return(g=N.concat(L)).concat.apply(g,R)}function v(y,D){var b=c(y)/c(D),A=0;return D.forEach(function(g,P){A+=Math.pow(y[P]-g*b,2)}),{averageSize:b,error:A}}function C(y,D,b){try{var A=f(y,{x:-1,y:y.y},b,D.length),g=f(y,{x:y.x,y:-1},b,D.length),P={x:Math.max(0,y.x-y.y)-1,y:Math.max(0,y.y-y.x)-1},T=f(y,P,b,D.length),R={x:Math.min(b.width,y.x+y.y)+1,y:Math.min(b.height,y.y+y.x)+1},N=f(y,R,b,D.length),L=v(A,D),M=v(g,D),K=v(T,D),X=v(N,D),H=Math.sqrt(L.error*L.error+M.error*M.error+K.error*K.error+X.error*X.error),U=(L.averageSize+M.averageSize+K.averageSize+X.averageSize)/4,a0=(Math.pow(L.averageSize-U,2)+Math.pow(M.averageSize-U,2)+Math.pow(K.averageSize-U,2)+Math.pow(X.averageSize-U,2))/U;return H+a0}catch{return 1/0}}function F(y,D){for(var b=Math.round(D.x);y.get(b,Math.round(D.y));)b--;for(var A=Math.round(D.x);y.get(A,Math.round(D.y));)A++;for(var g=(b+A)/2,P=Math.round(D.y);y.get(Math.round(g),P);)P--;for(var T=Math.round(D.y);y.get(Math.round(g),T);)T++;var R=(P+T)/2;return{x:g,y:R}}function p(y){for(var D=[],b=[],A=[],g=[],P=function(t0){for(var d0=0,S0=!1,x0=[0,0,0,0,0],K0=function(y0){var l0=y.get(y0,t0);if(l0===S0)d0++;else{x0=[x0[1],x0[2],x0[3],x0[4],d0],d0=1,S0=l0;var G0=c(x0)/7,ce=Math.abs(x0[0]-G0)<G0&&Math.abs(x0[1]-G0)<G0&&Math.abs(x0[2]-3*G0)<3*G0&&Math.abs(x0[3]-G0)<G0&&Math.abs(x0[4]-G0)<G0&&!l0,ee=c(x0.slice(-3))/3,W0=Math.abs(x0[2]-ee)<ee&&Math.abs(x0[3]-ee)<ee&&Math.abs(x0[4]-ee)<ee&&l0;if(ce){var te=y0-x0[3]-x0[4],ye=te-x0[2],Q0={startX:ye,endX:te,y:t0},ne=b.filter(function(Z0){return ye>=Z0.bottom.startX&&ye<=Z0.bottom.endX||te>=Z0.bottom.startX&&ye<=Z0.bottom.endX||ye<=Z0.bottom.startX&&te>=Z0.bottom.endX&&x0[2]/(Z0.bottom.endX-Z0.bottom.startX)<a&&x0[2]/(Z0.bottom.endX-Z0.bottom.startX)>o});ne.length>0?ne[0].bottom=Q0:b.push({top:Q0,bottom:Q0})}if(W0){var X0=y0-x0[4],m0=X0-x0[3],Q0={startX:m0,y:t0,endX:X0},ne=g.filter(function(re){return m0>=re.bottom.startX&&m0<=re.bottom.endX||X0>=re.bottom.startX&&m0<=re.bottom.endX||m0<=re.bottom.startX&&X0>=re.bottom.endX&&x0[2]/(re.bottom.endX-re.bottom.startX)<a&&x0[2]/(re.bottom.endX-re.bottom.startX)>o});ne.length>0?ne[0].bottom=Q0:g.push({top:Q0,bottom:Q0})}}},E0=-1;E0<=y.width;E0++)K0(E0);D.push.apply(D,b.filter(function(y0){return y0.bottom.y!==t0&&y0.bottom.y-y0.top.y>=2})),b=b.filter(function(y0){return y0.bottom.y===t0}),A.push.apply(A,g.filter(function(y0){return y0.bottom.y!==t0})),g=g.filter(function(y0){return y0.bottom.y===t0})},T=0;T<=y.height;T++)P(T);D.push.apply(D,b.filter(function(t0){return t0.bottom.y-t0.top.y>=2})),A.push.apply(A,g);var R=D.filter(function(t0){return t0.bottom.y-t0.top.y>=2}).map(function(t0){var d0=(t0.top.startX+t0.top.endX+t0.bottom.startX+t0.bottom.endX)/4,S0=(t0.top.y+t0.bottom.y+1)/2;if(y.get(Math.round(d0),Math.round(S0))){var x0=[t0.top.endX-t0.top.startX,t0.bottom.endX-t0.bottom.startX,t0.bottom.y-t0.top.y+1],K0=c(x0)/x0.length,E0=C({x:Math.round(d0),y:Math.round(S0)},[1,1,3,1,1],y);return{score:E0,x:d0,y:S0,size:K0}}}).filter(function(t0){return!!t0}).sort(function(t0,d0){return t0.score-d0.score}).map(function(t0,d0,S0){if(d0>i)return null;var x0=S0.filter(function(E0,y0){return d0!==y0}).map(function(E0){return{x:E0.x,y:E0.y,score:E0.score+Math.pow(E0.size-t0.size,2)/t0.size,size:E0.size}}).sort(function(E0,y0){return E0.score-y0.score});if(x0.length<2)return null;var K0=t0.score+x0[0].score+x0[1].score;return{points:[t0].concat(x0.slice(0,2)),score:K0}}).filter(function(t0){return!!t0}).sort(function(t0,d0){return t0.score-d0.score});if(R.length===0)return null;var N=h(R[0].points[0],R[0].points[1],R[0].points[2]),L=N.topRight,M=N.topLeft,K=N.bottomLeft,X=S(y,A,L,M,K),H=[];X&&H.push({alignmentPattern:{x:X.alignmentPattern.x,y:X.alignmentPattern.y},bottomLeft:{x:K.x,y:K.y},dimension:X.dimension,topLeft:{x:M.x,y:M.y},topRight:{x:L.x,y:L.y}});var U=F(y,L),a0=F(y,M),o0=F(y,K),A0=S(y,A,U,a0,o0);return A0&&H.push({alignmentPattern:{x:A0.alignmentPattern.x,y:A0.alignmentPattern.y},bottomLeft:{x:o0.x,y:o0.y},topLeft:{x:a0.x,y:a0.y},topRight:{x:U.x,y:U.y},dimension:A0.dimension}),H.length===0?null:H}r.locate=p;function S(y,D,b,A,g){var P,T,R;try{P=s(A,b,g,y),T=P.dimension,R=P.moduleSize}catch{return null}var N={x:b.x-A.x+g.x,y:b.y-A.y+g.y},L=(l(A,g)+l(A,b))/2/R,M=1-3/L,K={x:A.x+M*(N.x-A.x),y:A.y+M*(N.y-A.y)},X=D.map(function(U){var a0=(U.top.startX+U.top.endX+U.bottom.startX+U.bottom.endX)/4,o0=(U.top.y+U.bottom.y+1)/2;if(y.get(Math.floor(a0),Math.floor(o0))){var A0=[U.top.endX-U.top.startX,U.bottom.endX-U.bottom.startX,U.bottom.y-U.top.y+1];c(A0)/A0.length;var t0=C({x:Math.floor(a0),y:Math.floor(o0)},[1,1,1],y),d0=t0+l({x:a0,y:o0},K);return{x:a0,y:o0,score:d0}}}).filter(function(U){return!!U}).sort(function(U,a0){return U.score-a0.score}),H=L>=15&&X.length?X[0]:K;return{alignmentPattern:H,dimension:T}}})]).default})})(sn)),sn.exports}var T9=z9();const M9=cx(T9),O9="data:font/woff2;base64,d09GMgABAAAAACaMAA4AAAAAXXAAACYzAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGlAbjgIciDwGYACBchEICoGIFOsSC4IKAAE2AiQDgzYEIAWEDgeMNBvrTEVGho0DAEH/SyGiYjUfgv8vx40xxEDKh5ggJgseOHHKDZJXXpBgy8BvicV8O15y8blsVVH/O5JlC7VCBHUuFoYluBjGtKZttSNq0VG1zqww5PfHLLMcHyHJLPw/jr2ee5MCpYhCVVYTaxiisUTGTU9PTU1NjRWBLcmfNzxss3+ENpEWIiVZBii0SIkICIpRU+yZseiLWt3dbv9c6m4VbrtbVPzt7++8ilVKEdxobi/RyMIMwzzQN/ybS/EvSpS7MeVIolRl4U1hE7cfU63ivjb2Se+wFNYFVh6T2Cb+dtGEsUXEvk/i0kPc99vrki7gEvYf17m2RGmkQlheLZr+QTcLrlsyn6oAL+taqIjQnlCzU0nC9mbzE/+b44Fl6vVzbNhiDxlyOwgkkNT/6TLbGc3ts2wFrKAdPqSiM72XFrjKNaWskdY7+tZ5b417OqK9PVjbB5vwyCSt98AQALYveEB7xEGkCrBNlxRd6jpF3YWH7+81SvqhzEdvhAEL1Rcr7YZLW8HSSRdsF1fcV4dMDX3qHowivT/7+foFV7K9JVQRjoCCcFRUMr463uwKAZh9cKATKGH4+EApVAiCXzcoPQZBGDIbVLBvOCggYGWyLCFD8CjAPoDB3vN2LEbAllftHiB+KjqaAe2tqwgBPDgAYhowj7tPCHAG3kb4dBoCKSM2NGViDgfIOywosObNKQBN/tx61SuRWMINgIgE4nj+BaI+Ykl23y1XnHPCIZN22myDb31lqY8tMseQHm0azVCuiIeTZdvQU4PUt4wAqY4vgNR19gKJfionsEv+jh1A74BdROaySNidVl8nTIo4mcZ5+Zs8gvk8eVdOyTv4QgbppXw8V+Qc1spMvpOv5mHqUg6OrFew+dJ4K2wlFo7ltsByv9wsvxDAbe2whgxLEq46XZVkY2PicPiYKBLhIS0O9DdGcidBk93C7MD8IaPIcAAvpzGJmAwJIGEJAz8HQkMsIP+W+At+h9+ab3g5/2LfpbM6rQGxv83+nQUFhnsAiNew7qD6q1Ey5yfFXLlQBGoW0//G00/WhG4kAB5TIXTSV/qvbwD14wcnrWP+3nu93Zu8zqu90p/7Qy/wLA+4y62ud7VLRZbut9t2m611puWyrdBs07xsiGSi0eg+GgqHvMeXAx/jn7C3Sz/rge7omi7olI7ogHZrq8a1Rqu0HG0/1RLN25IR9XmdOtSsOlUqKJ9c88yKvo0uVbbZSg9JxRdThyhKlHE2iBdyB0RC3TAoeMtz/k3H+N2U+yBi+wAjAgKxfvMM16/WQr4PgBc84cVwz3M5DGmHZCnYKNEBWo5sIpusxNAXLDwIr1P0RtIbWCkhDBfqMU/4NcUkySSDTCW9zp/HUEKWEwZhkH2yCgCqgkiITJAV6po2coZkQU43eSS8kfQWwkXJM3hWkFboI3CUgcvS1tl6Zq6MAAPdoVjJ9Rj8TtFTlSTXN+SefA9AyAI+Rf9K+pfcIrdIGwzIETnICYkhBBJBMARPooXIFL2X9Cd+bhn42UAAiSWKMiUhJTPFvuq2t0C4gs+ZJ4qc37Lv8lKeVk3sb2XA69iviCZnT2nSMwhMygEttad8LSXC7nQATAQ6BuhJ6AE7GjXnRLgzIJ1UQHkI8r4uX25qBZQnVFsBEinVAzAIANJrjkrbPSU0D21Xzg0vTUjaeWagkMQQEFSm0pBaIY2atWoDIQa/IiXKValRp0GTFjNBaPCdEMgDwoT+6AwbMWqW2SCgwa+vXYdOXbr1SIR/VhRYeETxBMTSQC7So89AEq0IGRQ864JwMBYYag8aoDAPTjiADm3QIukFB/+y11cG1FEigQEBC6J0YABNGIpfQADRtgaLW3B43jwo3xmYe3kYULkZooI/ZXU9W3MLN5thnmO1RRXDVg8WmtAjd+hWRTILTxOEWJ9SLExkYGLjgdmLdQYTwMxdZrpVMiDHwkDWXx+gthDSwJwUi3B2hNVUgAOEUMMaC2surLWwtlIw7BWnGO7ocAjiCElszUwyYYFXfc5h4zhIuPObRbPGSh+bZ0CbOmZqieCQEKFFZ6vBIbNIrjQaLDOiIGiDKuIclsHdcpUuuVynXKKDFKkE2jl4Fhku6OpKGk3qTBrxdKw7miJBJcqUq1SlPSMrhlLTW4y0IGRJ3hQ1uPH6mDCAH9kPYIutrHNIh098aK1+BUjc6KXbRgGHgHI68yP+QFMzNG1GkM9k5GN1AGYkkSnLBjJAiAznfnAK2sFI1jXxw1vdgQSDSUosEl0YJbPklaJSHNMQWxYEiUBiSmrRFNe3n6niWSxuR1e0oMxDGACHbQDAwfGjZwBCC8rZYaq53sBj0a2XkpFTUEqTIZObip9aFnpVvHyXPTyyaWjp6Bnkq0Moa88PZx4IkJjWDQDuAKBWAAjA8AkY/wHgHMAZwEcAMaE3sWEMhpswYoZ1K/BAHRAeB8TTjDD6AUaTLo5pqXggICa8wQAgNxhKIBmhPF/n8faa0eIlHJDuNQMkKT9XJaW1MUasGsEaA+6k8ulaKjRZNmTi6cLEpHhG/DmibsGspaBE8WGYV/HLjCSwjt1dpYUwD8XpON2kOURruKAzt4e2y7FlJhOD/w1Y+YGcN9nWkWUpFV2K5Oho6kEla+BMbg7qeMS8Fn3GZ2Es6UEpwZioUEIwnnqxBKWGFmFUgKBieDCODAlGGsylF0vZsyW2ysrwwu+CS6xNt8oGWQyKPCHCINfZTZx6kAWgQsVIGIIoYtInojwK06aC9gX4WZhXlOHRHEq59QCcqvaRQW/OK4wbeWbzoZq0k6x4Ml0wsnfgrmowGTXdP7xosvc7Ns2rAIxVvtxkeFCTKO5wIwBCsToAS8jJDhavuA8dJ45Yd2keU01OdmU4Mm2hT/fIRDPRE+StOgfFcKdfYFyt9vZyNl9AUXYMo2hWHiDXV78bM//oYbvD9sHN8CJ6QEwQoNyvc0Rx8WLO0GHo5gAClRIINfH96KWfgvecq4AIpKR+gUOxb8553uk/pIR725hadcxc6OeFIOxHselTlVzo454oedBsHk9b6NNt0uDNKSpUJ2elcBunnKkNKumYbhEe4rpiaqrOEfCoUwx8CpHXHEC+Nzjsc5Sr/WlRzdgSFMFDudqCo+Fkm42XKwrnXLMvb63UxBovHlp5IPuEnkXjl+UrdFDoBk/RflF/iIcjSKtTXXQz0oAwc4bHuBjfbJpcd0+8VlzALcqw8YxXKkL036Rh10D0OrVymsT4fIf+frBCi/jmeLTK080xFRmnb1Xvce+IZQhKV3MbKS857PUCwLHKCUSZkEi4/MyFHOhzLhtSxgrk1WJU4v/yl8WvsJwCoDhbIelh4SmRGF23+10OT3xzWwtKR2Yo0KForWg1sIacz+mMht0emAWe+TGrnGMUTndkxRipVt6B1JBz8QPyh4DruI+mJ0oHWXV69/iVWtwGi103q/LpzvRuGEare+RK9Ia18hvVBBep4aRxxZKJziAQxbupURr9MncaxnEjMXxWUK83E4kf9LTiUAhBxrFwjuX/Gt0CwJ3DTqmUWs+FrLF0kQ/508wLso+uTHfn7Oqenmm2jzWflHPMcG/YsN3phd5Qy+OTI+fHSIKogW+cAXeYzEpUBC/KfIlVi1HAEZXn7nPAByimZ8wd7u7Jq65fEV1V0rQxsBVMVkaval6pL+4KQYJRuJ4LgdeTGthySVGSTvDmLgZNlob2bSRkKXeoL9Vp5wRTEqzmxRk6QHvkA1jbO0rLhT69IhVeokExXZz8K65bxmUrBQXHxcBCNB5XdOboPqLFkCINenASwOdc5kR3DDdozpeIGHhWPtsfjPVEdHEpIlyK3IgepLUZpXUyeHtFaHf40e3siF+YqtJZ26GoMwVu5c7+r/Y5p4Wt071clFx6T3TKEbgQH82ui5XQLcZz54uVD8lVnPWdtud0ap2U4nBGgVNImZttVWh43ju9k7vydsWX8vOYq3wozYVaN5d4qUhu4WmUOQ72MzypJ2ZXObVZ4cRWwcjnIti5iMRLPZ3SUGqDMZgLsOtkzarKCzivtrZUubb8Ybd19ZV03F2DbhzX07Xe5WaAtqo7GFAABK2VfLXQbeaX1n0DVTpJ3gX42/ibZoU2Hxrc44LZjRo5MTf6GUg+Dpoz2lW87HU/g5I2klf2WFni5mjI1f27QRuMtv6LAuEQeb1XkoIYduylcy7rs9aG03k8xAnSI0+8Ot07EvFUSXrQqhF6qTZDOGfwVO803AcRFp9IWBgwHAzV6E6b0USfAnLXok5eSUpNQ7a6JLDatV0LvFYrWo2xd047PjTZJgw5ytGhvuXKZISmMkrxSxtjRFKCXv865YVIJSfvP4HrxMQ1ZFkVCXNwUmqgzSV9Mew2PdHhZNQZbCqRFHmV5WhEDqaJR3YkaB7Kk2q3nk+0HjpjLnB97t2m94fuuMr+Xtnml7mgnRNGucZyXr2nmmSQQ/e3vwUWXKQD72L/UnA2LaWwG0E75dBp4uU7JgilPeqUc6C42FcWPbjREjpKyFfacXn9ww4nMJo4UCIJjjv1vLJo1D0GjwhS+hwnvjXDGMURfR+wQeyUeL9HyEWLlSHhuDA5bzzQ1evXZVSaI8zzn5sWFgYUA+OMeIFRy2QAqSX2jWTte1VVnrOVbHj35DK4c6Kdc4bYRm6D3zJKleT8t5bF12807pfCL1QKFB0PEjm4EY/Tn87Wl7Gg3cF6WCsZiDohqV3P1lnXSjBxxEaPItn2a5XTspmCyblcFp4InShCCtGowaSpZlSAIT1KCmmdGa70bKBlLbGJNtEJjBfFRzMFNxue/UWAhvRyFLcE8VEQWTpNxy3q6C7J7f6xSvrW01YO0UC3VPEkwhuZ5AeogH2wK4Y8VO9f+r23RCkh5EIj5Ck9Ls0SiaWcG+mXUGlbO/YutfAlIeTl7d2zs3UlZHzPpMyqJRIFb1IZTuMqyoltkYwOldRYWyZnUNgEdGmer2Q+PFPalaYMRYusi/0tIwlcdKV3+P1siD9V61SSRZUqsyv91VZkcuRfmFqJNJRJKWFZSckcpCfWkTSqLhH1jAsfc6uSzmEim1Rg5vETwSJBmzLyuz6wGwwLUbdEtFY/ADPEhKF1CefVOEC6ak3X/3UO+eQmzbh9WsOIYx73atZM+d3ki6Q8zJDCdRNyOMfE5WTajOfgx3Ftws3Ne9huGG6O9bRftfIFcOvUbz3WPt1iDOJXh/Z5lRt2+viSBc429oh4TyORJm33vXiWU0qsqnSWRG08G7OIytj+v/P0M1vPXh8Qexn2/jeQB/VQdVYwJDVWdTcFR7w9OptNp3CJX8neQLBF61KnvSI0B41ui9OZbzG2JHFEfCeJTWBL9upiWDQuRyEQlyoMRf783KBRR6NQY14lzKRWpqa6qYcRn87H44uwoBjgwJDr4XQmu30+NzneHLFu6qfNx1AcOodbwBVlmDNMpvrhPcvY2hw5u9FHTk4sUJlKPLoceqhSeVLBx7nDM/yLvbPV+aYch9+hJ0Zr43lpqFxrkZKfzWVj2XFrxrKTitl1no9QuxoSSnjlc1vbUQ9n4HC1RMHDCU5oHI2u2d5hyddHqq119qfJOgkJ4RjGGnK8Cl4eh01jE9etKU20MSuh1sp35bVakOX2CvvMd91YXLdCEVv7S5FptK5Wj4FcjhG9lUj+FAnubI0haU0F3uR4c9zSa9OU1y+Lf3/MYl9KVDxmfrnk6HVlHWFSbiQQxjla+YJdQQDZuWdEDzxY3sOHzxKnkPwFQv5eobR3HE9YicevJODH8YAX9S6E63mB41axObM5jCIt/TJ5BEvswmv5ObIsdb6s3xtuHQrUVnZ6c/Xp+kzt6teeUIC6XiDdOPDjGCDxuniitTy4KSUQGKWcGJFxOVU8QT4L9cnSKJyxrZWzPJf+ocAq12Z75APeMNusojp9NTvNKvmYbMSKVd1wGulKcHgBAb8wgCcs/Ny2O340+HJdeT787If4pLZPS8Cgp+HIb377fihjLNZnlKmUsdui8o+wfrnM/UBGwlKC5O2OH41eiyvPUyVr/c1QVDh7CSGVIY1d5EclJ9Cyv2WyZlGnUmafFrWU4dQ3yHTg6kX2X43WkWzN+AwexVsiFJ4VMH717dNnmTUyhyDGFaPEZB5jZ4uj+TYeb6FY3MtPOt7Cys1epYWoVcFaqb6sMRQ8tjgoir19BbWCQFjeHr6CcFJbRQuFhbcenM4tLsj7j/cbkVgiyzBq+jxtWoddpyzYblGmKaSgSyBY3zj4jOir9bkl2cF6qUkd5J5Y5uLI597ZiCes4HNMwG8kgF9hn0GdzaZROESvDdokCDZSSiV++ANVclYiWi8QhAQxuN1U6skljhyoKjNYKzOpi9m7vshjy6ZJ43g82RzwRHNEV27Ozy/P0b3Sm6xaec5dHTO/4xIjNKy0q6m2prWhFEKRcbl0yuHtl+7vq162Jg9Y7JCympYSqZ2ygcZCMtkxTKKB/RO+WylHY+UYjByLVv8e7cPAmtyOlt91B9wpDvXVNfcU4n/4YrNSk/hif3jc2GSegdtV4S7XZjctN6CMnReOTS6MI3TF6yMN3e+8J5f8jy8iBw4rI28GZq+f3sz/GTc4niee1h+kfHuxuviOb+EQR9zOEx6VxC3dQnrzd/PPv2cUOL2V9yvkZXwWESIknCTgqwnftDEl74JkwbHUzaTX18Kokxlup+d10nekFQRCO8j9bYzExN2o5jZ+s/gw+YTaaTAa7Qa17HIk28DlVAkEcv7CZFQyGQ/mdsbDso00dwRweYMmZoCgjkEbKX/1CZnxJmy+BY1PdFoMkYvIWVHjXXsavX8MpPYT5I22uUam4dSJ34XsWBrzrCRuqStYHMPLHSX9j7D5CyUaQZlHJq+lQysfIRD/xpKIQEa9DTbWK3DxPzRNFGPARPQYM2u1pXuwSgkD15+Qix21oXFF8Rb+AkFvbscN7wNGIuJB2a6HZZdTGizp5Hhxhe/YIfj9hJT6dKqFATCJOi+ltwr7xsltOl+9nJ9qtHn3jJrRcARvpVA0zmf84j8o3HI0YC23X0vJ4cWt3zy+MfLyTNlvfU8GaUwqm01jMyVaUrJMz3KPok4NHkaYEwX0QpP2t4DD67id12o/tsIr/Pv2BK3rdMjlUz2YXqHiV6ywGwL+2iwii8eFwoWC75y+Ab3anIWG92A8RcdmHmUbcTGr9cdmWTR2E0ytDs6Q6stCtaWsjAnq4j4Kw8NKkSRjl0Rhg0nd9k1dmNt/g0e8vQanxSjPYWXRiGMTyz7B45ytNfiPZiOypDdfqJtGy3PtniVErO0iwpiUnhFsVtr4Cd2ne9O4rvsVEteuX/otnjK1/lfYhyorpr4jZStNqnJy7gWEIemQL/mQfVcB140Fs3Jzo8Y8PSmbmzlP3OJUvTFzbv9F7wUZFY0s3fMwMPsczx1+v+HswaRQNYYS8HxwqP/T7oiqNWRd8JxP/kap+CZ5E2FT5lerSDlhoNBfbkmsXyQmIWlz/p5E0BJ1aJcJRSRvUZkj5pOy8lM0h7JqDUHA3awhiyeFghVC+Ec2WZPuz7xkUwEr5FWSGF5WikRwkKC/aGI3R2WWgAeZmqOa5pzKyjy7JhwmooiuY2Vm4mz0yWUttn9AjALBVk1rTk1lu1wXNDM7M8uwr/X/CW4+XaMNfHF/6X3/A9GkWLSBL+wRxD6J6d+m5tZpAb+/NugyAZpBIKj3tVuQEDFXoy1ZflOMLZk9hbLkc0cnWPDelgpTcwXea0mo/9H888WuEgiGNiz88XX8utyuhtJMeS+7TSvPq1EybFUVrJMZt5y0D2iSRutaG8q8B4sUv5VIzolEd6QR4r1TSH6PkL9BJJ4U0UcaFI2/1LesxBMk1dCE8nZMEgk8dZxAjAaPNLtNHc6amvQyMOmp+PcuhlWoMzoyhflcTgqPpoFtTik1liXiyGq2mZ+dbeaztz4PzcfjFuDwPTh8Nx6MwZ2kFsSXJvn/RWd8+9Mhp3pJn4kHUaDQXmpIuN23CRErkzzad4+M3FeTf4HQctPjdG0cDH2eNgpyMGR7lJ99MLc/mLfK84fAK1MocqQCkQP9S6TOdx5kZrAdCRNWoVNh0Hpli93htlF/He+2U7Xjjl6b6uT01FQdXNkeZYs5uU0lLnUgPtdNxZsMmTmtyRvu7CwubiG5/svEG+2PbIs9s7muvH9Dy5M/5qA598DW49NU3Nx9RSy2+x36hFhLfPFFlX+/ZKT2REK1H+QqUypkVNtirqvq2uR/SgtLrdUzGf4naKmTsi81FcVk/ZlKSP31J3yCl+V9U8ZcU163KaLFW30YjBGD9qiV+dAgMmdosWaVZypAGdnvZW52gdsQk69KzxItzuey9szLq2i+kXh9j9EUufDgg6X6XMZTA/ZVykxvpjCR4N2hsyWz7xJFbQsb/at28V/P4/gLBILl/Of4+5R+oc5fAhg3H+8gPi9bGi9cZat9HXEplvmvu/Nez1IuTSEF5k6dsPBvXuDiSterTIPlnD0gekJ2syPuQdlSpOBV4iT0FD3N/P3sdStBZl+Og78hYE5uf4kz0dBkrapqsBpWCydFkXMbu/mIJyqWnqNS3WWjRM40ncYnW+yOsM3xz6h4suKipzLCrxmgYCnfJKPMzbbqmma7aUC0RtrAfxBJLANHnf2GE4YwJZd5qsVCUUtakSqYfDcK6rq0aIm4QqmLx2FaxY5FK0tTfdvBHoOPomIJzgj4kwLOS1ekxV4McXsgxrTG2qxcXVH3COpW2yfFUxc/4FeTobYiSD41AhcVBSpzm/DAtJFbLpbuERe4aoOBwmpP7iYv+G6FViuV5qBcrvsg3bAdWBKJG0nFqST9QB846o/DvYJYau2BZ/YUEvf56ihg9XqQ/KQ2L3kmcBQUqEl//zWN4ifUPxetpqYQJ39Dx8crt0nr3j1BYJXo0TYSsA8vJI/8GZE0FfZ43ZdoGpwVV3ouIhWVytJxOB6ZgGvJ48hzynKyiKv33vmXcfUJYmfHDCy2HTj5QqE34ph8rX7Afz/NKwxxMA9lrZE4Ax4Y3JaHm0JiP5eZet5GbqtItn7Cq6kqsK7zgBdRg+nGaq1Gpg1muN1pxmqNVvEi3YX6Bq/JhGK/n/2vAd9sm6WyteWnMxuNpWOC2rQspb9UoMoo4kjtUo2lIJPKX4mL5VRzOZ0CSaZWIRV6fJIMdUAhKsvKsYSG01wiyDiBOEkg7icSJoggfZumsXRgXsdHH38eqmczK010X0Dz0fVWn69InWgnx0WmcA3ExERJ0XM0m85mu3lipT7TZqvQaA8Es9dPZksBHDZzeiyxQLZN7zBS8sn52tQOJt6BYv3KVsrdEEd0eNjyM2iOn8dbK8jW11XNrBzySg2cZ89eCe3sSQJhP0cTbPz792XAxaO10a1lGGFJa0t160ftC2FeiC7irlOR57cRx4eFf9jDFdwi0JQXMOU6dCRL5M92jNMq43/B53ewyNAVCDO21BoPTXu9fwWBuJxAXEAkLCSCIwcFYrTp+mao7WnriI5M5i/gC5bz48bGQmOGyzPGCQR3XowwSYQ1Pj+WD6K6rXr+PIFgKZfI+mN2SkVLvt1W53RpGngwGbyaM4HyjyT3JHsyQtZeqanSaDDXzEkvqiw6SyRyP2H/9ULdTwBXy95F1nohLMgnDd92xtiFI9XKVynkKxyX0UW3UFg8F7Ah8BE0OqeWx/tCqNU1lTcXDlsZK24m5ju0xlK/m1L4q7AaFAqVjsjqxw9vTBCJ4yO8qAgHiCAtepXc5A060/zpEy9bOadFX3NrDe1zO4fiv5DFtn/KdPJqixuK4jwf70D4Ai4HDZNz/9ObO7tLfGJMzEZXFDOVw6vhEz6e8IPCVSy9Iq//VffZEaDL7JlItC/UslNVxkIj+6P2pIjUSg5/Pk9gzFBoi1XCKnWWuKZErWNbyKt4knj018lnXkWlBjMQubpYW8YXRbiDMdpY5EvW5Lb9BAK5g2COZpr3k+cGjcrwaVNme2/QAUk7w6ZR52rkon174Ocjjol4xmE9/z0/rv1Vlf7wouM26u/INo1mpsUiFa1kcyYPzYxcVSyTBTMzg6Jny1TRCqq7Lld2Nm2T9/9kvJvP7+bx5vN5C3gga5QsbcoThviCOl5PBrcR7jF1taiNptqstFZbU/1Isc0dcJk1hWkcwGT+w2QrYsQ/ijIMZXled2luRqFKXKv3uWUfs1oyOJVsr5Rj0aV7MRgfBuvDYLxYcEpm8mmWe5fTlxy2pwfSl8WYr6PFp4X806IMtcNgtw4aCN50R/qlux/QLuN6zXv+T+5xT7nlvyNxRn1lI8yV5xo7MGbKy9mP+Vwls1XDTFitO6fpXIdWp1YpckTOcixrxOTTlJaGzQcj958mU2m2/Rm40zXQuHtxCfcTwCe+kwzs2c0/opG/JMpRt1Jx5MHDsYjIMDn4UpOuSgfwo8tAjqaxNdOS4aO+ZXI7ebxOXlz4nyOY/NIZwKUe3Hii+XC8HH4jDsCfDPWY1diYacwoTMyv4Ylft6KdgWqIW1aijWTjkxy1Y77rhgtE4beaD5sBQTY/70YegDzZFmkPtn+RHWSyFz6xaqNTv2LQ3zKZKDaZbPzCGV3fHGGFe41oNH2AMTIMgD69GWly181LL2AzTOvFkbRCKuUUlX6WkfR9VW50WVWE4R8HDYmioZDtZSBBpGFbpD3Q/qmmyCNh0cxNdEaUWNOyPbqmzbsAxnC/ZQC0r7OmN4dUZgF3VlI8I/XunUbMdRv3U2mTNM5uXobGn7n/7jOJjid8tppbZUEuo6LRGI6wzwgNDcLkp6s7OitYCSXxBET4urXB38QRKV1kclcK4weWTOV8NW/prlcR/j8tzELdm/kAiWw/JCBix7q2tlkhQeZMUjyN2Nc7AMRRtAkqbZzGOcFL1wa4xQ2j94phVpufLsMg7I0GO8L9Xrs3oAp47B4/gDB0JW6zu0TBrAUA2Xnu79JZ8Mq9SfK4LxYS4Tjsf6BHi+sT+v/CcBkaY6I7asYA4HnEZ5d/9eqNQL/LSL2fSutTbOr3J7TcpKFRbRGFTgAiq85z3lGUP26AFDDjGCU5B31JiuyzMGjv1fIJi4JZllHpdzj0HBrqxYLnHZaJo3Casmv00DK9xeDWNSW7SYj+0P+/YlwIwaNTllJjQzQEEotsR2KQAPWZZf0a9PtqTbTpXwpfCNlGrtJhzKo0HILOU7ekJXAQDo9KWUdBhKY1IiKwz7cnG5aw6OKdt95j2TphBh9F/p2cdBXHtsVy0kiMvjj8s6S4u8kIFli8/QA5kL0O7m6vKK0b6otqrhzwKtKlOawfqBzNMO4RSNm+h1yobmzbVlFcM9BlxYBbkSYxpUvY2T0XMe+RWEjKylf+3GL550nGioIahS2AWxMEC6ksX36z1fLyb/2WAi/k3ADkiWEx5FmYpUqgj8TsozPO0rWMONXbjVxQjTKXGLq+H3o9zKwpke5X7Dg99QDjqQyD7Vx1djrmlGpk2wksrCSZOssh2t+bPYsyol41cI6uL/uyp1KDTHEasGT9vfj49snA4mHuLVp2dweGcY/BcLD4TvoBZ8wyGRpNJoMVO3ageh1qkSuqJvq5bTM37kks4/z1vSCYHCutHp1PJOajt1u2cy9kDKwY0u8j4ipu9PsroXE4tLWWtdxVGb1L6q88oiC80Ovw+lV+j8NTCBZPLzGggWwAAAxkQxCAi9snh4PiR6fqjKU7V4SdZdV+GAY6pmkwZifr6SLdWkuCgHQU+Bes3jn9vKxYYm1g/sp4m3vq9+gKyjFeN7T1H18HLATLH1dZHyKLjQdi6MXGGTH6xJoqRioFR7pR5y7pgy+U+iQyAvYrAD5/0wm68b/cd/X9LdfyIwC0ALVJ/0k3X+oS51Q7+FZ4twNUk/yj26V4Hl5uMJUebYvhVrauITBzAkJ8ksuEIuKrQ1fLgret3X5E3GbDO3TVxKUmxbvhMDs2F9TAxWBeLnhmIvxJWzKiBvFc9hFt34x5+0vE4bpEM0hNjWKmoMlTMtQIXd+yAOirCG5rievGA14YZqMlKVBERDA/QZZ9BOYpcWZYyvTHtdcXP7x5R9+pUfY/R9Ea9h2x3dpcR0NjEPoV7FvgnUubBqM1od63kIuwKxoJfvyr7JDvFAEQzav2U8F0zVr8zq89L3g/V8d6YcjAesEpbdIa33u1z97VU/8w2ad/+A2DhXc+X6HLCmsVVVmlxoOeMTWcfd+xQAQF4ByBhIJgKzOMo0NyFAC8GGjTEQKSpxjq+bkjDLntHeGQfd4xDD03C/c9coakEOCGDtG2VSZR+XZV2oRs1mHJQu2sUbMW98GoJZLHzK5AhTYVKnVqJuBWo1anxob5TGgDYC1dlSkkhMQ3lgpFK5vRzzp1qEWdUC/rKBZbl8QpKXH0ZEHhYReOgZENhco2nmtXgOGneXEvC/VCnVWylJilG8zjoBp725jLDLao74EqSdDNDOo8Bu1PXg+b7Y1VKyQY7FRJrGoi2ESkwxWqtftMAavx+O8qNBDpPXNAafWNXSf1T70DyAAKTLA9puXImZ4rIzMrcqfyZMPAwsEjIIoTL0GiJCTJyFJQUNHQMaRiYmHj4OLhExASEZOQkpFTUEqTLkMmFbUs2TS0dPQMjEzMcljksrKxc3DK45LPrYCHl08hv4AixYJKlCpTrkKlKtVqzFCrTki9Bo2aNGvRaqY27Tp06tKtR68+/QYMGjJsJJKqFhe7PaJzIfEBZBEmlHEhle7NsyIJIcpr2Qz2z/3pfSDUXNtRVxH6V5DUHs76vgbaVFf0mPwLRlI16F3/11XRUdFwQEB3mOM/mvac0kBkESaUcSGVNrbTvRkBRDgTxJPpBCmZm1DR+DyIVPrXs36voa6z0ZFzshoFA0VdzgQgwiQ9hwKBCBPKuJDz0uPOm9+1Ht096OYxJT+TfqI62lhd8y9fmTTBMsuGGnIp/L+BjJZuxREIMvlXsCyQ3Ke9ZTFLUhWrpHS3U6f5OipKZu6PJT4LaAiSTf1SQUuUlRh/Tlfshx276DEvn/mat9rkGpw6RTHkM77WidqfsXa98KOKrCgNAA==",R9="data:font/woff2;base64,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";const x2=(n,e,t=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.keys(e).forEach(x=>{r.setAttribute(x,String(e[x]))}),t.length&&t.forEach(x=>{const i=x2(...x);r.appendChild(i)}),r};var N9=([n,e,t])=>x2(n,e,t);const Be={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const I9=["svg",Be,[["path",{d:"M20 6 9 17l-5-5"}]]];const L9=["svg",Be,[["path",{d:"m15 18-6-6 6-6"}]]];const j9=["svg",Be,[["path",{d:"m9 18 6-6-6-6"}]]];const V9=["svg",Be,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];const U9=["svg",Be,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];const W9=["svg",Be,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];const K9=["svg",Be,[["path",{d:"M5 12h14"}]]];const G9=["svg",Be,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];const X9=["svg",Be,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];const H9=["svg",Be,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];const Z9=["svg",Be,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];const Y9=["svg",Be,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];const J9=["svg",Be,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];const Q9=["svg",Be,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];const _9=["svg",Be,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];const $9=["svg",Be,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]],ea=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 198.43 85.04"
   width="198.43mm"
   height="85.04mm"
   version="1.1"
   id="svg637"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <style
       id="style1">
      .cls-1 {
        font-size: 6.68px;
      }

      .cls-1, .cls-2, .cls-3, .cls-4 {
        fill: #231f20;
      }

      .cls-1, .cls-3, .cls-4 {
        font-family: THSarabunNew-Bold, 'TH Sarabun New';
      }

      .cls-1, .cls-3, .cls-4, .cls-5 {
        font-weight: 700;
      }

      .cls-6, .cls-7, .cls-5 {
        fill: #fff;
      }

      .cls-3 {
        font-size: 6.57px;
      }

      .cls-4 {
        font-size: 5.26px;
      }

      .cls-7 {
        stroke-width: .5px;
      }

      .cls-7, .cls-8 {
        stroke: #0859a2;
        stroke-miterlimit: 10;
      }

      .cls-8 {
        fill: none;
        stroke-width: 2px;
      }

      .cls-5 {
        font-family: Kanit-Bold, Kanit;
        font-size: 8.6px;
      }

      .cls-9 {
        letter-spacing: -.02em;
      }

      .cls-10, .cls-11 {
        fill: #0859a2;
      }

      .cls-12 {
        fill: #010101;
      }

      .cls-11 {
        fill-rule: evenodd;
      }
    

  .t-main { font-family: &quot;Noto Sans Thai&quot;, sans-serif; fill: #1f2937; }
  .t-blue { font-family: &quot;Noto Sans Thai&quot;, sans-serif; fill: #0d5fac; }
  .t-white { font-family: &quot;Noto Sans Thai&quot;, sans-serif; fill: #fff; }
  .thin { stroke: #0d5fac; stroke-width: .55; fill: none; }
  .muted { fill: #4b5563; }
</style>
  </defs>
  <rect
     x="0.8"
     y="0.8"
     width="196.83"
     height="83.44"
     rx="4.2"
     fill="#ffffff"
     stroke="#0d5fac"
     stroke-width="1.6"
     id="rect1" />
  <rect
     x="3.0"
     y="3.0"
     width="192.43"
     height="79.04"
     rx="3.2"
     fill="none"
     stroke="#0d5fac"
     stroke-width="0.45"
     id="rect2" />
  <rect
     x="62.5"
     y="4.7"
     width="93.0"
     height="1.0"
     rx="0.5"
     fill="#0d5fac"
     id="rect3" />
  <line
     x1="59.5"
     y1="7.5"
     x2="59.5"
     y2="77.8"
     stroke="#0d5fac"
     stroke-width="0.9"
     id="line3" />
  <line
     x1="157.0"
     y1="8.5"
     x2="157.0"
     y2="77.8"
     stroke="#0d5fac"
     stroke-width="0.55"
     id="line4" />
  <g
     transform="translate(0.7,0.3) scale(0.96)"
     id="g14">
    <g
       id="g10">
      <g
         id="g9">
        <path
           class="cls-11"
           d="M30.84,52.97s-.04-.03-.06-.04c-.87-.85-1.72-1.7-2.57-2.55-.22-.22-.43-.45-.66-.67-.09-.08-.08-.15.01-.21.12-.06.22-.13.33-.21.21-.16.39-.33.54-.54.09-.16.19-.34.24-.51.04-.13.12-.24.12-.39,0-.03.01-.06.01-.12.01-.12.04-.22.04-.34.01-.15,0-.27,0-.42v-26.79c0-.07-.01-.15-.04-.22-.01-.09-.04-.19-.07-.28-.07-.22-.19-.42-.36-.6-.13-.15-.27-.27-.42-.4-.13-.09-.27-.18-.42-.25-.03-.01-.06-.04-.12-.07.03-.03.04-.06.06-.07l3.26-3.26h.01c.07-.07.09-.07.16-.01.15.13.27.27.42.42l2.7,2.7s.09.07.15.15c-.06.03-.12.06-.16.09-.09.04-.21.07-.28.15-.12.06-.22.15-.34.22s-.22.18-.3.28c-.12.15-.22.28-.28.46-.03.07-.09.16-.12.24-.03.16-.12.33-.12.49v12.63c0,1.81,0,3.58.01,5.39v8.93s.01.13.01.21c.01.13.03.27.04.42l.04.19s.01.07.01.12l.04.19.09.24c.15.36.36.66.67.87.15.07.28.15.43.21.03.01.06.01.12.03s.06.04.03.09c-.01.03-.04.04-.07.07l-2.37,2.37c-.24.22-.46.46-.7.7-.01.01-.04.03-.07.06l-.03.03Z"
           id="path4" />
        <path
           class="cls-11"
           d="M44.66,32.22c.07,0,.16-.03.22-.04.04,0,.07,0,.12-.01.06-.01.12-.01.15-.03.09-.03.18-.06.27-.12.27-.12.49-.28.67-.54.12-.16.19-.33.25-.48.04-.12.07-.22.09-.34.03-.06.06-.07.12-.03.07.06.16.15.22.22.97.96,1.93,1.91,2.88,2.88.07.07.07.09,0,.18-.63.63-1.24,1.25-1.87,1.88l-10.95,10.89-1.88,1.88s-.07.07-.13.13-.09.04-.16.01c-.09-.03-.19-.06-.27-.12-.18-.07-.3-.19-.42-.34-.12-.13-.19-.27-.25-.43s-.09-.34-.09-.51c.01-.09,0-.19,0-.28v-3.67h0c0-.18.01-.18.16-.12.09.04.19.12.33.09h.03c.21.07.39,0,.54-.13l5.75-5.73c.16-.19.25-.4.24-.66,0-.13-.04-.22-.09-.33-.09-.19-.24-.33-.43-.42-.21-.09-.42-.13-.64-.13h-5.69c-.15,0-.16-.01-.16-.15v-3.43s0-.04.01-.07c0-.03.01-.06.06-.06h10.95l-.03.03Z"
           id="path5" />
        <path
           class="cls-11"
           d="M39.29,31.09s.07-.04.12-.06c.15-.09.27-.21.37-.37.07-.16.13-.34.09-.51-.01-.07-.04-.16-.07-.24-.07-.13-.15-.25-.25-.37-1.58-1.58-3.15-3.15-4.75-4.73-.13-.13-.28-.21-.45-.28-.03-.01-.06-.01-.09-.01h-.21c-.09,0-.18,0-.25.04s-.12.01-.13-.07v-.15c0-1.24,0-2.48.01-3.72,0-.15-.01-.28,0-.42.01-.16.09-.28.16-.42.13-.25.36-.43.61-.58.15-.07.3-.12.46-.13.04,0,.07.01.13.03.03.01.04.04.07.07.48.48.97.99,1.46,1.48l1.09,1.09c.46.46.93.93,1.4,1.42.72.72,1.45,1.43,2.17,2.15.72.75,1.45,1.46,2.17,2.21.7.7,1.42,1.43,2.14,2.15.06.06.09.13.09.22,0,.18-.06.34-.13.49-.06.19-.21.36-.37.46-.06.04-.16.09-.24.13-.3.12-.61.15-.93.15h-4.57s-.07.01-.12-.04h.01Z"
           id="path6" />
        <path
           class="cls-11"
           d="M15.04,30.88c.03.09.06.18.09.25.12.27.28.48.51.64.16.12.3.21.48.28.12.03.22.06.36.09,0,0,.03,0,.03.01.16.06.33.04.48.04h10.6c.13,0,.19.06.19.19v3.3c0,.14-.07.21-.21.21h-10.38c-.16,0-.33.01-.49.03-.04,0-.09.03-.16.03-.01.01-.03.03-.06.03-.24.03-.45.13-.66.27-.16.09-.3.24-.39.42-.04.06-.07.15-.13.22-.01.03-.01.06-.01.12-.01.03-.01.06-.03.12-.03.03-.06.03-.09.01l-.04-.04-3.11-3.11-.07-.07c1.02-1.02,2.03-2.02,3.03-3,.01-.01.04-.03.07-.06h0Z"
           id="path7" />
        <path
           class="cls-11"
           d="M21.83,31.12s-.12.01-.16.01h-4.23c-.16,0-.33-.03-.48-.04-.01-.01-.04-.01-.07-.01-.28-.03-.48-.21-.61-.45-.04-.12-.09-.24-.15-.36-.03-.12-.04-.21-.07-.33-.01-.06,0-.12.04-.16l.39-.39,10.08-10.08c.12-.12.19-.12.34-.06s.27.09.39.18c.19.13.3.28.39.46l.13.36s.01.07.01.13v4.12c0,.13-.01.15-.15.12-.15-.03-.28-.03-.43,0s-.25.13-.37.22l-5.2,5.32c-.27.28.07.85.18.97h-.03Z"
           id="path8" />
        <path
           class="cls-11"
           d="M27.77,43.14s.01.09.01.13v4.32s-.01.15-.04.21c-.03.09-.04.19-.09.28-.12.25-.28.46-.54.61-.06.03-.15.07-.21.12-.12.04-.24.01-.33-.06-1.05-1.05-2.09-2.09-3.14-3.14-.67-.67-1.33-1.33-2-2.02-.75-.76-1.48-1.49-2.23-2.26-.84-.84-1.66-1.67-2.49-2.51l-.61-.61c-.07-.07-.13-.16-.12-.25s0-.18.01-.25c.03-.15.07-.25.18-.37.13-.15.28-.25.49-.27h.01c.18-.09.37-.06.57-.06.76.01,1.51,0,2.27,0h2.37s.07.03.06.07c-.01.01-.01.03-.03.04-.04.09-.12.19-.16.28,0,.03-.01.06-.01.09v.24c0,.13.06.24.13.34.21.3.46.57.72.82,1.21,1.19,2.42,2.4,3.61,3.6.18.19.37.39.57.57.16.16.37.22.6.18.12-.01.22-.06.36-.12h.03Z"
           id="path9" />
      </g>
    </g>
    <g
       id="g13">
      <path
         class="cls-10"
         d="M20.82,69.27c-.4-.19-.74-.45-1.03-.79v.84h-2.18v-8.22h2.3v5.37c.16.32.36.57.58.73s.5.24.82.24c.37,0,.66-.11.86-.32s.3-.53.3-.97v-5.05h2.3v5.21c0,.61-.1,1.17-.31,1.65-.21.48-.52.87-.93,1.15s-.91.42-1.48.42c-.42,0-.84-.1-1.24-.29h.02Z"
         id="path10" />
      <path
         class="cls-10"
         d="M27.16,69.35c-.6-.14-1.08-.32-1.46-.55v-4.33h3.48v1.81h-1.25v.96c.11.06.26.11.46.15s.38.06.58.06c.61,0,1.07-.19,1.38-.57.31-.38.46-.94.46-1.7s-.19-1.34-.55-1.68-.98-.51-1.86-.51c-.45,0-.92.05-1.4.15-.48.1-.88.25-1.19.43v-2.09c.36-.19.82-.34,1.37-.43.56-.11,1.12-.16,1.7-.16,1.38,0,2.45.37,3.19,1.12s1.1,1.81,1.1,3.18c0,.91-.16,1.68-.48,2.33-.32.66-.81,1.15-1.44,1.51-.63.35-1.39.53-2.27.53-.6,0-1.2-.07-1.8-.21h0Z"
         id="path11" />
      <path
         class="cls-10"
         d="M34.4,64.53l-.66-1.34c1.07-1.54,2.42-2.32,4.06-2.32,1.15,0,2.05.3,2.68.89.62.6.94,1.43.94,2.48v5.06h-2.3v-4.85c0-.99-.43-1.49-1.32-1.49-.65,0-1.18.21-1.59.63l.48.97v4.74h-2.3v-4.79h-.01Z"
         id="path12" />
      <path
         class="cls-10"
         d="M42.58,69.05c-.16-.19-.24-.41-.24-.67s.07-.51.24-.71c.16-.2.36-.3.58-.3s.43.1.6.3c.16.2.24.43.24.71s-.07.5-.24.67c-.16.19-.36.27-.6.27s-.42-.09-.58-.27Z"
         id="path13" />
    </g>
    <path
       d="m 15.061499,75.229997 q -0.174,0 -0.279,-0.081 -0.105,-0.084 -0.105,-0.276 v -1.317 h 0.381 v 1.269 q 0,0.12 0.114,0.12 0.045,0 0.105,-0.021 l 0.042,0.252 q -0.057,0.027 -0.123,0.039 -0.066,0.015 -0.135,0.015 z m 0.512997,-0.03 v -1.002 q 0,-0.33 0.174,-0.504 0.177,-0.174 0.558,-0.174 0.381,0 0.552,0.174 0.174,0.174 0.174,0.504 v 1.002 h -0.381 v -1.008 q 0,-0.174 -0.087,-0.267 -0.084,-0.096 -0.264,-0.096 -0.18,0 -0.264,0.096 -0.084,0.093 -0.084,0.267 v 0.288 l 0.009,0.003 q 0.06,-0.117 0.144,-0.153 0.087,-0.039 0.24,-0.039 h 0.078 v 0.294 h -0.078 q -0.162,0 -0.249,0.051 -0.084,0.048 -0.114,0.132 -0.03,0.084 -0.03,0.186 v 0.246 z m 2.427002,0.036 q -0.177,0 -0.345,-0.036 -0.168,-0.039 -0.294,-0.102 l 0.108,-0.303 q 0.093,0.045 0.231,0.09 0.138,0.045 0.291,0.045 0.135,0 0.213,-0.042 0.078,-0.045 0.078,-0.132 0,-0.087 -0.09,-0.138 -0.087,-0.054 -0.258,-0.111 -0.171,-0.057 -0.291,-0.123 -0.12,-0.066 -0.183,-0.162 -0.063,-0.096 -0.063,-0.24 0,-0.222 0.171,-0.342 0.174,-0.12 0.492,-0.12 0.159,0 0.291,0.027 0.132,0.027 0.207,0.069 v 0.306 q -0.078,-0.036 -0.216,-0.069 -0.138,-0.036 -0.273,-0.036 -0.153,0 -0.222,0.045 -0.069,0.045 -0.069,0.111 0,0.081 0.093,0.129 0.093,0.045 0.294,0.114 0.15,0.051 0.261,0.117 0.114,0.066 0.174,0.162 0.063,0.093 0.063,0.237 0,0.132 -0.063,0.246 -0.06,0.114 -0.204,0.186 -0.144,0.072 -0.396,0.072 z m -0.735001,-1.92 v -0.162 l 0.273,-0.114 h 0.354 v -0.222 h 0.261 v 0.222 h 0.192 v -0.222 h 0.258 v 0.498 z m 0.833999,-0.663 v -0.531 h 0.339 v 0.531 z m 1.524002,2.583 q -0.351,0 -0.522,-0.174 -0.168,-0.177 -0.168,-0.531 0,-0.06 0.003,-0.141 0.003,-0.081 0.012,-0.147 h 0.687 v 0.258 h -0.327 v 0.048 q 0,0.219 0.075,0.309 0.078,0.09 0.237,0.09 0.111,0 0.192,-0.048 0.084,-0.048 0.126,-0.165 0.045,-0.12 0.045,-0.333 0,-0.288 -0.102,-0.429 -0.099,-0.144 -0.357,-0.144 -0.138,0 -0.279,0.039 -0.138,0.039 -0.24,0.099 v -0.327 q 0.093,-0.051 0.252,-0.084 0.162,-0.036 0.33,-0.036 0.282,0 0.453,0.108 0.174,0.105 0.252,0.3 0.081,0.195 0.081,0.459 0,0.405 -0.174,0.627 -0.171,0.222 -0.576,0.222 z m 1.410002,-0.036 -0.492,-1.644 h 0.384 l 0.393,1.332 h 0.027 q 0.054,0 0.105,-0.03 0.054,-0.03 0.093,-0.078 0.069,-0.09 0.102,-0.219 0.036,-0.129 0.036,-0.258 0,-0.216 -0.09,-0.336 -0.09,-0.123 -0.249,-0.123 -0.066,0 -0.108,0.018 l -0.075,-0.297 q 0.066,-0.018 0.123,-0.024 0.06,-0.006 0.102,-0.006 0.303,0 0.474,0.171 0.105,0.102 0.156,0.255 0.054,0.153 0.054,0.342 0,0.24 -0.075,0.42 -0.075,0.18 -0.183,0.288 -0.09,0.087 -0.225,0.138 -0.132,0.051 -0.351,0.051 z m 1.422001,0 v -1.644 h 0.378 v 0.651 h 0.009 l 0.576,-0.651 h 0.426 v 0.012 l -0.453,0.486 q 0.225,0.03 0.339,0.177 0.117,0.147 0.117,0.366 v 0.603 h -0.381 v -0.558 q 0,-0.294 -0.321,-0.324 l -0.312,0.336 v 0.546 z m 2.702998,0.03 q -0.207,0 -0.342,-0.078 -0.132,-0.081 -0.183,-0.21 h -0.021 l -0.036,0.258 h -0.294 v -1.644 h 0.381 v 0.849 q 0,0.246 0.096,0.372 0.099,0.126 0.279,0.126 0.294,0 0.294,-0.336 v -1.011 h 0.381 v 1.08 q 0,0.294 -0.144,0.444 -0.144,0.15 -0.411,0.15 z m 1.446003,-0.03 v -1.116 q 0,-0.135 -0.063,-0.195 -0.063,-0.063 -0.204,-0.063 -0.102,0 -0.189,0.03 -0.087,0.027 -0.165,0.069 v -0.315 q 0.063,-0.03 0.18,-0.06 0.117,-0.03 0.276,-0.03 0.162,0 0.285,0.048 0.123,0.045 0.192,0.156 0.069,0.108 0.069,0.294 v 1.182 z m 1.496999,0.033 q -0.258,0 -0.417,-0.063 -0.156,-0.063 -0.225,-0.177 -0.069,-0.117 -0.069,-0.273 0,-0.132 0.039,-0.213 0.042,-0.081 0.105,-0.123 0.063,-0.042 0.129,-0.057 v -0.018 q -0.066,-0.018 -0.129,-0.06 -0.063,-0.045 -0.105,-0.117 -0.042,-0.072 -0.042,-0.183 0,-0.108 0.051,-0.204 0.051,-0.096 0.162,-0.153 0.114,-0.06 0.303,-0.06 0.084,0 0.165,0.012 0.084,0.012 0.132,0.036 l -0.06,0.267 q -0.03,-0.009 -0.075,-0.018 -0.045,-0.009 -0.09,-0.009 -0.108,0 -0.159,0.051 -0.048,0.048 -0.048,0.129 0,0.084 0.042,0.129 0.045,0.045 0.114,0.063 0.069,0.015 0.144,0.015 h 0.063 v 0.246 h -0.063 q -0.147,0 -0.219,0.054 -0.072,0.051 -0.072,0.171 0,0.066 0.027,0.126 0.027,0.06 0.099,0.099 0.072,0.036 0.204,0.036 0.189,0 0.258,-0.078 0.072,-0.081 0.072,-0.21 v -1.095 h 0.381 v 1.08 q 0,0.312 -0.174,0.456 -0.171,0.141 -0.543,0.141 z m 2.064,-0.003 q -0.207,0 -0.342,-0.078 -0.132,-0.081 -0.183,-0.21 h -0.021 l -0.036,0.258 h -0.294 v -1.644 h 0.381 v 0.849 q 0,0.246 0.096,0.372 0.099,0.126 0.279,0.126 0.294,0 0.294,-0.336 v -1.011 h 0.381 v 1.08 q 0,0.294 -0.144,0.444 -0.144,0.15 -0.411,0.15 z m 1.446002,-0.03 v -1.116 q 0,-0.135 -0.063,-0.195 -0.063,-0.063 -0.204,-0.063 -0.102,0 -0.189,0.03 -0.087,0.027 -0.165,0.069 v -0.315 q 0.063,-0.03 0.18,-0.06 0.117,-0.03 0.276,-0.03 0.162,0 0.285,0.048 0.123,0.045 0.192,0.156 0.069,0.108 0.069,0.294 v 1.182 z m 1.434,0.03 q -0.261,0 -0.405,-0.111 -0.144,-0.111 -0.201,-0.309 -0.057,-0.198 -0.057,-0.459 0,-0.435 0.126,-0.63 0.129,-0.195 0.375,-0.195 0.108,0 0.183,0.039 0.078,0.039 0.12,0.138 h 0.012 q 0.036,-0.102 0.126,-0.138 0.09,-0.039 0.198,-0.039 0.411,0 0.411,0.429 v 1.245 h -0.381 v -1.191 q 0,-0.102 -0.039,-0.138 -0.036,-0.036 -0.099,-0.036 -0.066,0 -0.099,0.036 -0.033,0.036 -0.042,0.12 h -0.174 q -0.012,-0.093 -0.054,-0.123 -0.039,-0.033 -0.09,-0.033 -0.093,0 -0.141,0.12 -0.048,0.12 -0.048,0.399 0,0.276 0.066,0.429 0.066,0.15 0.27,0.15 0.045,0 0.078,-0.003 0.033,-0.006 0.06,-0.015 l 0.039,0.276 q -0.048,0.021 -0.108,0.03 -0.06,0.009 -0.126,0.009 z m 1.856998,0.006 q -0.177,0 -0.345,-0.036 -0.168,-0.039 -0.294,-0.102 l 0.108,-0.303 q 0.093,0.045 0.231,0.09 0.138,0.045 0.291,0.045 0.135,0 0.213,-0.042 0.078,-0.045 0.078,-0.132 0,-0.087 -0.09,-0.138 -0.087,-0.054 -0.258,-0.111 -0.171,-0.057 -0.291,-0.123 -0.12,-0.066 -0.183,-0.162 -0.063,-0.096 -0.063,-0.24 0,-0.222 0.171,-0.342 0.174,-0.12 0.492,-0.12 0.159,0 0.291,0.027 0.132,0.027 0.207,0.069 v 0.306 q -0.078,-0.036 -0.216,-0.069 -0.138,-0.036 -0.273,-0.036 -0.153,0 -0.222,0.045 -0.069,0.045 -0.069,0.111 0,0.081 0.093,0.129 0.093,0.045 0.294,0.114 0.15,0.051 0.261,0.117 0.114,0.066 0.174,0.162 0.063,0.093 0.063,0.237 0,0.132 -0.063,0.246 -0.06,0.114 -0.204,0.186 -0.144,0.072 -0.396,0.072 z m 1.155,-0.036 v -0.705 h -0.192 v -0.252 h 0.54 v 0.663 h 0.027 q 0.171,0 0.258,-0.126 0.09,-0.129 0.09,-0.405 0,-0.3 -0.117,-0.423 -0.114,-0.126 -0.357,-0.126 -0.153,0 -0.282,0.042 -0.126,0.039 -0.234,0.108 v -0.327 q 0.096,-0.054 0.246,-0.09 0.15,-0.039 0.339,-0.039 0.135,0 0.243,0.027 0.111,0.024 0.186,0.081 0.057,-0.03 0.093,-0.072 0.036,-0.045 0.036,-0.108 h 0.345 q 0,0.123 -0.072,0.222 -0.072,0.099 -0.207,0.153 0.168,0.171 0.168,0.558 0,0.39 -0.18,0.606 -0.177,0.213 -0.597,0.213 z m -0.258,0.624 v -0.087 q 0,-0.189 0.099,-0.282 0.102,-0.09 0.243,-0.09 0.12,0 0.195,0.051 0.075,0.051 0.129,0.135 l 0.162,-0.162 0.201,0.147 v -0.216 h 0.321 v 0.504 h -0.336 l -0.183,-0.159 -0.144,0.159 h -0.072 q -0.03,-0.069 -0.081,-0.123 -0.048,-0.051 -0.117,-0.051 -0.072,0 -0.096,0.051 -0.024,0.051 -0.024,0.102 v 0.021 z m 2.234999,-0.624 v -1.116 q 0,-0.135 -0.063,-0.195 -0.063,-0.063 -0.204,-0.063 -0.102,0 -0.189,0.03 -0.087,0.027 -0.165,0.069 v -0.315 q 0.063,-0.03 0.18,-0.06 0.117,-0.03 0.276,-0.03 0.162,0 0.285,0.048 0.123,0.045 0.192,0.156 0.069,0.108 0.069,0.294 v 1.182 z m 1.388999,0.03 q -0.27,0 -0.417,-0.15 -0.147,-0.153 -0.147,-0.459 v -1.065 h 0.381 v 1.011 q 0,0.336 0.297,0.336 0.177,0 0.273,-0.126 0.099,-0.126 0.099,-0.372 v -0.849 h 0.381 v 1.644 h -0.297 l -0.033,-0.249 h -0.024 q -0.051,0.12 -0.18,0.201 -0.126,0.078 -0.333,0.078 z m 1.356003,-0.03 v -1.644 h 0.276 l 0.054,0.258 h 0.021 q 0.051,-0.126 0.18,-0.207 0.129,-0.081 0.327,-0.081 0.279,0 0.426,0.147 0.147,0.147 0.147,0.453 v 1.074 h -0.381 v -1.011 q 0,-0.174 -0.078,-0.255 -0.075,-0.081 -0.222,-0.081 -0.177,0 -0.273,0.135 -0.096,0.132 -0.096,0.363 v 0.849 z m 0.957,-1.884 q -0.201,0 -0.279,-0.084 -0.081,-0.084 -0.081,-0.189 0,-0.048 0.015,-0.102 0.012,-0.057 0.039,-0.102 l 0.288,0.042 q -0.015,0.042 -0.015,0.087 0,0.039 0.027,0.066 0.024,0.024 0.081,0.024 h 0.69 v 0.258 z M 41.8755,72.781995 v -0.531 h 0.339 v 0.531 z m 1.179003,2.454002 q -0.276,0 -0.51,-0.126 l 0.105,-0.279 q 0.066,0.036 0.156,0.066 0.09,0.03 0.189,0.03 0.186,0 0.294,-0.141 0.111,-0.141 0.111,-0.417 0,-0.261 -0.111,-0.399 -0.111,-0.141 -0.339,-0.141 -0.099,0 -0.201,0.027 -0.102,0.024 -0.174,0.066 v -0.315 q 0.09,-0.045 0.201,-0.066 0.114,-0.021 0.234,-0.021 0.411,0 0.594,0.231 0.183,0.228 0.183,0.618 0,0.417 -0.189,0.642 -0.186,0.225 -0.543,0.225 z m 1.602002,-0.006 q -0.174,0 -0.279,-0.081 -0.105,-0.084 -0.105,-0.276 v -1.491 q 0,-0.171 0.045,-0.249 0.048,-0.081 0.108,-0.126 l -0.003,-0.012 h -0.486 l 0.078,-0.282 h 0.915 v 0.282 q -0.111,0 -0.195,0.072 -0.081,0.072 -0.081,0.264 v 1.494 q 0,0.12 0.114,0.12 0.045,0 0.105,-0.021 l 0.039,0.252 q -0.057,0.027 -0.123,0.039 -0.063,0.015 -0.132,0.015 z m 1.193995,0.006 q -0.378,0 -0.546,-0.174 -0.165,-0.174 -0.165,-0.504 v -1.002 h 0.381 v 1.02 q 0,0.351 0.33,0.351 0.171,0 0.252,-0.087 0.081,-0.09 0.081,-0.264 v -1.611 h 0.381 v 1.593 q 0,0.33 -0.171,0.504 -0.168,0.174 -0.543,0.174 z"
       id="text13"
       style="font-weight:600;font-size:3px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#0d5fac"
       aria-label="เครื่องหมายมาตรฐานทั่วไป" />
  </g>
  <g
     transform="translate(-5.0,-1.2) scale(1.0)"
     id="g67">
    <g
       id="g15">
      <path
         class="cls-10"
         d="M82.23,23.29c.06-.09.11-.17.17-.25.18-.27.36-.54.54-.81.11-.17.23-.34.34-.52.06-.09.12-.18.18-.27,0-.01.03-.02.05-.03.01,0,.02,0,.03,0,1.5,0,3.01,0,4.51,0,.49,0,.94-.13,1.35-.39.32-.2.58-.45.79-.76.15-.23.27-.48.34-.75.09-.34.12-.68.07-1.03-.04-.29-.12-.57-.26-.83-.19-.38-.46-.69-.81-.93-.28-.2-.59-.34-.93-.42-.2-.05-.4-.07-.61-.07-3.82,0-7.63,0-11.45,0-.05,0-.09-.02-.12-.06-.34-.4-.68-.79-1.03-1.18-.12-.14-.24-.28-.36-.41,0,0-.01-.02-.03-.03h.05c4.41,0,8.82,0,13.23,0,.28,0,.55.04.82.1.42.09.82.24,1.19.44.23.12.44.27.64.43.32.26.6.56.84.9.13.19.25.38.35.59.08.18.15.36.22.54.03.09.06.19.08.29.03.14.07.28.09.43.02.12.03.23.04.35,0,.19,0,.38,0,.56,0,.16-.03.32-.06.49-.01.1-.03.2-.06.29-.03.12-.07.24-.1.36-.07.22-.16.43-.27.63-.21.41-.48.77-.81,1.1-.52.51-1.14.87-1.84,1.08-.41.12-.82.18-1.25.18-1.98,0-3.96,0-5.94,0-.01,0-.03,0-.05,0Z"
         id="path14" />
      <path
         class="cls-10"
         d="M77.11,26.13s.03-.05.04-.07c.13-.19.27-.37.4-.56.21-.28.42-.57.62-.85.22-.3.43-.59.65-.89.2-.27.39-.54.59-.81.18-.25.36-.5.54-.75.13-.18.26-.36.39-.54.18-.25.37-.51.55-.76.21-.29.42-.58.64-.87.15-.21.3-.42.46-.63.01-.02.02-.04.04-.06-.02,0-.04,0-.05,0-1.14,0-2.27,0-3.41,0-.02,0-.05-.01-.06-.02-.22-.23-.43-.46-.65-.68-.27-.28-.54-.57-.81-.85-.03-.03-.06-.05-.09-.07h0s.02-.02.03-.02c0,0,.02,0,.03,0,3.85,0,7.69,0,11.54,0,.04,0,.06,0,.08.04.21.26.42.53.63.79.23.28.46.57.69.85.05.06.1.12.15.19h-.06c-1.92,0-3.84,0-5.76,0-.04,0-.06.01-.09.04-.11.17-.23.34-.35.51-.18.26-.36.52-.53.78-.19.28-.38.56-.57.83-.18.26-.36.52-.54.79-.14.2-.27.4-.4.59-.22.33-.45.65-.67.98-.17.25-.34.5-.51.75-.18.26-.36.53-.54.79-.1.15-.21.3-.31.45-.02.03-.04.04-.07.04-.86,0-1.71,0-2.57,0-.01,0-.03,0-.05,0Z"
         id="path15" />
    </g>
    <g
       id="g43">
      <path
         class="cls-10"
         d="M95.75,19.18v-.89l.03-.15h-.24l-.32-.32v-.39l.33-.33h.46l.32.33v1.51l.09.1h.66l.09-.1v-1.84h.58v2.07l-.35.36h-1.31l-.35-.36ZM95.86,17.8l.09-.09v-.16l-.09-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path16" />
      <path
         class="cls-10"
         d="M98.79,19.25v-.42l.29-.29h.24v-.08s0-.13,0-.13l-1.13-.27v-.54l.41-.42h1.49v.49h-1.22l-.09.09v.07l1.12.25v1.24l-.29.29h-.51l-.3-.29ZM99.42,19.2l.08-.09v-.16l-.08-.09h-.17l-.08.09v.16l.08.09h.17Z"
         id="path17" />
      <path
         class="cls-10"
         d="M98.01,16.31l.46-.46h1.16l.46.46v.5h-2.07v-.5ZM99.57,16.46v-.1l-.15-.15h-.75l-.15.15v.1h1.06Z"
         id="path18" />
      <path
         class="cls-10"
         d="M102.94,17.11v2.07l-.35.36h-1.4l-.35-.36v-.89l.03-.15h-.24l-.32-.32v-.39l.33-.33h.44l.31.32v1.52l.09.1h.8l.09-.1v-.25h-.65l-.24-.24v-.34l.25-.25h.31l.24.25v.17l-.02.06.1-.03v-1.21h.56ZM101.03,17.55l-.09-.09h-.16l-.09.09v.16l.09.09h.16l.09-.09v-.16ZM102.05,18.22l-.08-.08h-.12l-.08.08v.12l.08.08h.12l.08-.08v-.12Z"
         id="path19" />
      <path
         class="cls-10"
         d="M101.54,16.52v-.39l.27-.27h.43l.27.27v.23h.3l.43-.47.32.34-.52.57h-1.22l-.28-.28ZM102.09,16.48l.08-.08v-.14l-.08-.08h-.14l-.08.08v.14l.08.08h.14Z"
         id="path20" />
      <path
         class="cls-10"
         d="M103.81,18.29l.03-.14h-.24l-.31-.3v-.42l.3-.32h.46l.3.32v1.13h0l.55-1.45h.49l.42.43v2h-.58v-1.83l-.07-.09h-.02l-.77,1.93h-.56v-1.25ZM103.9,17.8l.08-.09v-.16l-.08-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path21" />
      <path
         class="cls-10"
         d="M107.88,18.29l.03-.15h-.24l-.32-.32v-.39l.33-.33h.45l.31.31v1.14h.01l.41-.94h.23l.4.94h.01v-1.45h.57v2.43h-.56l-.53-1.24-.54,1.24h-.57v-1.25ZM107.98,17.8l.09-.09v-.16l-.09-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path22" />
      <path
         class="cls-10"
         d="M110.07,15.65v1.16h-2.07v-.5l.46-.46h.88l.23.19v-.39h.5ZM109.5,16.34l-.16-.14h-.69l-.14.14v.11h.99v-.12Z"
         id="path23" />
      <path
         class="cls-10"
         d="M111.36,19.17v-.85l.22-.52v-.3l-.04-.04h-.05l-.2.2-.21-.2h-.1l-.14.16h.24l.21.22v.31l-.24.26h-.36l-.26-.26v-.58l.4-.49h.3l.18.18.18-.18h.3l.28.31v.47l-.14.36v.78l.07.08h.24l.07-.08v-1.15l-.08-.15v-.21l.66-.65.33.35-.49.47.13.22v1.29l-.37.37h-.73l-.37-.37ZM110.93,18.14l.08-.09v-.14l-.08-.09h-.14l-.09.09v.14l.09.09h.14Z"
         id="path24" />
      <path
         class="cls-10"
         d="M112.79,15.65v1.16h-2.07v-.5l.46-.46h.88l.23.19v-.39h.5ZM112.21,16.34l-.16-.14h-.69l-.14.14v.11h.99v-.12Z"
         id="path25" />
      <path
         class="cls-10"
         d="M114.13,19.17v-.85l.22-.52v-.3l-.04-.04h-.05l-.2.2-.21-.2h-.1l-.14.16h.24l.21.22v.31l-.24.26h-.36l-.26-.26v-.58l.4-.49h.3l.18.18.18-.18h.3l.28.31v.47l-.14.36v.78l.07.08h.24l.07-.08v-1.15l-.08-.15v-.21l.66-.65.33.35-.49.47.13.22v1.29l-.37.37h-.73l-.37-.37ZM113.69,18.14l.08-.09v-.14l-.08-.09h-.14l-.09.09v.14l.09.09h.14Z"
         id="path26" />
      <path
         class="cls-10"
         d="M115.55,15.65v1.16h-2.07v-.5l.46-.46h.88l.23.19v-.39h.5ZM114.98,16.34l-.16-.14h-.69l-.14.14v.11h.99v-.12Z"
         id="path27" />
      <path
         class="cls-10"
         d="M117.6,19.22v-2.48l-.73-.36v-.48l.42-.42h1.42v.47h-1.19l-.09.09v.1l.75.37v1.86l-.03.14h.25l.31.32v.4l-.32.32h-.47l-.32-.32ZM118.24,19.18l.09-.09v-.16l-.09-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path28" />
      <path
         class="cls-10"
         d="M119.3,18.29l.03-.15h-.24l-.32-.32v-.39l.33-.33h.45l.31.31v1.14h.01l.41-.94h.23l.4.94h.01v-1.45h.57v2.43h-.56l-.53-1.24-.54,1.24h-.57v-1.25ZM119.4,17.8l.09-.09v-.16l-.09-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path29" />
      <path
         class="cls-10"
         d="M124.08,17.51l.1.11v1.92h-.58v-.7l-.4-.4h-.48l-.07.07v.08s.18,0,.18,0l.28.28v.37l-.29.29h-.44l-.29-.29v-.85l.43-.41h.82l.28.27v-.55l-.11-.12h-.82l-.11.12v.12h-.58v-.3l.42-.43h1.33l.29-.29.38.38-.31.31ZM122.53,18.9l-.09.09v.15l.09.09h.15l.09-.09v-.15l-.09-.09h-.15Z"
         id="path30" />
      <path
         class="cls-10"
         d="M124.75,19.22v-2.11h.58v1.25l-.03.14h.25l.31.32v.4l-.32.32h-.47l-.32-.32ZM125.38,19.18l.09-.09v-.16l-.09-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path31" />
      <path
         class="cls-10"
         d="M126.44,18.29l.03-.14h-.24l-.31-.3v-.42l.3-.32h.46l.3.32v1.13h0l.55-1.45h.49l.42.43v2h-.58v-1.83l-.07-.09h-.02l-.77,1.93h-.56v-1.25ZM126.53,17.8l.08-.09v-.16l-.08-.09h-.16l-.09.09v.16l.09.09h.16Z"
         id="path32" />
      <path
         class="cls-10"
         d="M131.42,18.82v.41l-.31.31h-.45l-.29-.29v-.14l-.63.43h-.42v-1.25l.03-.15h-.24l-.32-.32v-.39l.33-.33h.46l.32.33v1.49l.73-.47v-1.36h.58v1.51l.2.2ZM129.51,17.55l-.09-.09h-.16l-.09.09v.16l.09.09h.16l.09-.09v-.16ZM131.05,18.95l-.09-.09h-.15l-.09.09v.15l.09.09h.15l.09-.09v-.15Z"
         id="path33" />
      <path
         class="cls-10"
         d="M132.44,19.17v-.8l.22-.49v-.28l-.15-.17h-.31l-.11.11h.17l.21.22v.31l-.24.26h-.36l-.26-.26v-.56l.4-.44h.72l.39.4v.48l-.14.32v.72l.07.08h.25l.07-.08v-1.13l-.1-.16v-.2l.68-.67.33.35-.49.47.13.22v1.29l-.37.37h-.75l-.37-.37ZM132.11,18.07l.09-.09v-.14l-.09-.09h-.14l-.09.09v.14l.09.09h.14Z"
         id="path34" />
      <path
         class="cls-10"
         d="M132.47,16.52v-.39l.27-.27h.43l.27.27v.23h.3l.43-.47.32.34-.52.57h-1.22l-.28-.28ZM133.03,16.48l.08-.08v-.14l-.08-.08h-.14l-.08.08v.14l.08.08h.14Z"
         id="path35" />
      <path
         class="cls-10"
         d="M133.38,14.92h.49v.75h-.49v-.75Z"
         id="path36" />
      <path
         class="cls-10"
         d="M136.9,18.82v.41l-.31.31h-.45l-.29-.29v-.14l-.63.43h-.42v-1.25l.03-.15h-.24l-.32-.32v-.39l.33-.33h.46l.32.33v1.49l.73-.47v-1.36h.58v1.51l.2.2ZM134.99,17.55l-.09-.09h-.16l-.09.09v.16l.09.09h.16l.09-.09v-.16ZM136.54,18.95l-.09-.09h-.15l-.09.09v.15l.09.09h.15l.09-.09v-.15Z"
         id="path37" />
      <path
         class="cls-10"
         d="M140.46,17.53v2h-.58v-.61l-.05-.04-.1-.1-.22.23h-.41l-.3-.3v-.4l.3-.3h.44l.37.34v-.62l-.11-.12h-.83l-.11.12v.24h-.58v-.43l.42-.43h1.36l.42.43ZM139.47,18.43l-.08-.09h-.16l-.09.09v.16l.09.09h.16l.08-.09v-.16Z"
         id="path38" />
      <path
         class="cls-10"
         d="M139.58,16.5v-.41l.32-.32h.47l.32.32v.41l-.32.32h-.47l-.32-.32ZM140.22,16.49l.12-.12v-.16l-.12-.12h-.17l-.12.12v.16l.12.12h.17Z"
         id="path39" />
      <path
         class="cls-10"
         d="M142.24,17.72l-.12-.12h-.61l-.11.12v.3h-.58v-.48l.42-.43h1.15l.42.43v2h-.58v-1.82Z"
         id="path40" />
      <path
         class="cls-10"
         d="M143.44,18.34l.22-.31-.4-.35.53-.58h1.33l.42.42v2.01h-.58v-1.82l-.11-.12h-.83l-.1.1.35.33-.24.36v1.14h-.58v-1.2Z"
         id="path41" />
      <path
         class="cls-10"
         d="M144.13,16.52v-.39l.27-.27h.43l.27.27v.23h.3l.43-.47.32.34-.52.57h-1.22l-.28-.28ZM144.69,16.48l.08-.08v-.14l-.08-.08h-.14l-.08.08v.14l.08.08h.14Z"
         id="path42" />
      <path
         class="cls-10"
         d="M148.34,17.53v2h-.58v-1.82l-.11-.12h-.88l-.11.12v1.32l.2-.18.09-.07-.17-.17v-.37l.26-.26h.39l.25.25v.41l-.97.89h-.58v-2l.42-.43h1.39l.42.43ZM147.05,18.51l.08.09h.16l.08-.09v-.15l-.08-.09h-.16l-.08.09v.15Z"
         id="path43" />
    </g>
    <g
       id="g66">
      <path
         class="cls-10"
         d="M95.74,24.15v-2.56h.96c.22,0,.4.03.56.1.16.07.28.17.36.3.08.13.13.29.13.47s-.04.34-.13.47c-.08.13-.2.23-.36.3-.16.07-.34.11-.56.11h-.81l.12-.13v.94h-.27ZM96.02,23.24l-.12-.13h.8c.26,0,.45-.06.58-.17.13-.11.2-.27.2-.47s-.07-.36-.2-.48c-.13-.11-.33-.17-.58-.17h-.8l.12-.13v1.54Z"
         id="path44" />
      <path
         class="cls-10"
         d="M99.49,24.17c-.19,0-.37-.03-.53-.1-.16-.06-.31-.16-.43-.27-.12-.12-.21-.26-.28-.41-.07-.16-.1-.33-.1-.52s.03-.36.1-.52c.07-.16.16-.3.28-.41.12-.12.26-.21.43-.27.16-.06.34-.1.53-.1s.36.03.52.09c.16.06.3.16.41.28l-.17.17c-.11-.11-.22-.19-.35-.23-.13-.05-.26-.07-.41-.07-.15,0-.3.03-.43.08-.13.05-.25.13-.34.22-.1.1-.17.21-.23.34-.05.13-.08.27-.08.42s.03.29.08.42c.05.13.13.24.23.34.1.1.21.17.34.22.13.05.27.08.43.08s.28-.02.41-.07c.13-.05.24-.13.35-.23l.17.17c-.11.12-.25.22-.41.28-.16.06-.34.1-.53.1Z"
         id="path45" />
      <path
         class="cls-10"
         d="M102.07,24.17c-.19,0-.37-.03-.53-.1-.16-.06-.31-.16-.43-.27-.12-.12-.21-.26-.28-.41-.07-.16-.1-.33-.1-.52s.03-.36.1-.52c.07-.16.16-.3.28-.41.12-.12.26-.21.43-.27.16-.06.34-.1.53-.1s.36.03.52.09c.16.06.3.16.41.28l-.17.17c-.11-.11-.22-.19-.35-.23-.13-.05-.26-.07-.41-.07-.15,0-.3.03-.43.08-.13.05-.25.13-.34.22-.1.1-.17.21-.23.34-.05.13-.08.27-.08.42s.03.29.08.42c.05.13.13.24.23.34.1.1.21.17.34.22.13.05.27.08.43.08s.28-.02.41-.07c.13-.05.24-.13.35-.23l.17.17c-.11.12-.25.22-.41.28-.16.06-.34.1-.53.1Z"
         id="path46" />
      <path
         class="cls-10"
         d="M104.55,24.15v-2.56h.96c.22,0,.4.03.56.1.16.07.28.17.36.3.08.13.13.29.13.47s-.04.34-.13.47c-.08.13-.2.23-.36.3-.16.07-.34.11-.56.11h-.81l.12-.13v.94h-.27ZM104.82,23.24l-.12-.13h.8c.26,0,.45-.06.58-.17.13-.11.2-.27.2-.47s-.07-.36-.2-.48c-.13-.11-.33-.17-.58-.17h-.8l.12-.13v1.54Z"
         id="path47" />
      <path
         class="cls-10"
         d="M108.3,24.17c-.19,0-.37-.03-.54-.1-.16-.06-.31-.16-.43-.27s-.21-.26-.28-.41-.1-.33-.1-.52.03-.36.1-.52.16-.3.28-.41c.12-.12.26-.21.43-.27.16-.06.34-.1.54-.1s.37.03.53.1c.16.06.31.16.43.27.12.12.21.26.28.41.07.16.1.33.1.52s-.03.36-.1.52c-.07.16-.16.3-.28.41-.12.12-.26.21-.43.27-.16.06-.34.1-.53.1ZM108.3,23.93c.15,0,.3-.03.43-.08.13-.05.24-.13.34-.22.1-.1.17-.21.23-.34.05-.13.08-.27.08-.42s-.03-.29-.08-.42c-.05-.13-.13-.24-.23-.34-.1-.1-.21-.17-.34-.22-.13-.05-.27-.08-.43-.08s-.3.03-.43.08c-.13.05-.25.13-.34.22-.1.1-.17.21-.23.34-.05.13-.08.27-.08.42s.03.29.08.42c.05.13.13.24.23.34.1.1.21.17.34.22.13.05.27.08.43.08Z"
         id="path48" />
      <path
         class="cls-10"
         d="M110.96,24.17c-.19,0-.37-.03-.55-.09-.17-.06-.31-.14-.4-.24l.11-.21c.09.09.21.16.36.22.15.06.31.09.48.09s.29-.02.39-.06c.1-.04.18-.09.22-.16s.07-.14.07-.23c0-.1-.03-.18-.09-.24-.06-.06-.13-.11-.23-.14-.09-.04-.2-.07-.31-.09-.11-.03-.22-.06-.34-.09-.11-.03-.22-.07-.31-.12-.09-.05-.17-.12-.23-.2-.06-.08-.09-.19-.09-.33,0-.13.03-.24.1-.35.07-.11.17-.19.31-.26.14-.06.32-.1.53-.1.14,0,.29.02.43.06.14.04.26.1.37.17l-.09.22c-.11-.07-.23-.13-.35-.16-.12-.03-.24-.05-.36-.05-.15,0-.28.02-.38.06-.1.04-.17.1-.22.17-.05.07-.07.15-.07.24,0,.1.03.18.09.24.06.06.13.11.23.14.09.03.2.06.31.09.11.03.22.06.34.09.11.03.21.07.31.12.09.05.17.12.23.2.06.08.09.19.09.33,0,.12-.03.24-.1.35-.07.11-.17.19-.31.26-.14.06-.32.1-.54.1Z"
         id="path49" />
      <path
         class="cls-10"
         d="M112.97,24.15v-2.33h-.9v-.23h2.07v.23h-.9v2.33h-.27Z"
         id="path50" />
      <path
         class="cls-10"
         d="M115.33,23.27v-.23h.96v.23h-.96Z"
         id="path51" />
      <path
         class="cls-10"
         d="M118.39,24.15v-2.33h-.9v-.23h2.07v.23h-.9v2.33h-.27Z"
         id="path52" />
      <path
         class="cls-10"
         d="M120.27,23.92h1.54v.23h-1.81v-2.56h1.76v.23h-1.49v2.1ZM120.24,22.73h1.36v.23h-1.36v-.23Z"
         id="path53" />
      <path
         class="cls-10"
         d="M122.45,24.15v-2.56h.22l1.77,2.23h-.12v-2.23h.27v2.56h-.22l-1.77-2.23h.12v2.23h-.27Z"
         id="path54" />
      <path
         class="cls-10"
         d="M126.13,24.17c-.19,0-.37-.03-.55-.09s-.31-.14-.4-.24l.11-.21c.09.09.21.16.36.22s.31.09.48.09.29-.02.39-.06c.1-.04.18-.09.22-.16s.07-.14.07-.23c0-.1-.03-.18-.09-.24s-.13-.11-.23-.14c-.09-.04-.2-.07-.31-.09-.11-.03-.22-.06-.34-.09-.11-.03-.22-.07-.31-.12-.09-.05-.17-.12-.23-.2-.06-.08-.09-.19-.09-.33,0-.13.03-.24.1-.35.07-.11.17-.19.31-.26.14-.06.32-.1.53-.1.14,0,.29.02.43.06s.26.1.37.17l-.09.22c-.11-.07-.23-.13-.35-.16-.12-.03-.24-.05-.36-.05-.15,0-.28.02-.38.06-.1.04-.17.1-.22.17-.05.07-.07.15-.07.24,0,.1.03.18.09.24.06.06.13.11.23.14.09.03.2.06.31.09.11.03.22.06.34.09.11.03.21.07.31.12.09.05.17.12.23.2.06.08.09.19.09.33,0,.12-.03.24-.1.35-.07.11-.17.19-.31.26-.14.06-.32.1-.54.1Z"
         id="path55" />
      <path
         class="cls-10"
         d="M127.68,24.15v-2.56h.27v2.56h-.27Z"
         id="path56" />
      <path
         class="cls-10"
         d="M129.91,24.17c-.19,0-.37-.03-.54-.1-.16-.06-.31-.16-.43-.27s-.21-.26-.28-.41c-.07-.16-.1-.33-.1-.52s.03-.36.1-.52c.07-.16.16-.3.28-.41.12-.12.26-.21.43-.27.16-.06.34-.1.54-.1s.37.03.53.1c.16.06.31.16.43.27.12.12.21.26.28.41.07.16.1.33.1.52s-.03.36-.1.52c-.07.16-.16.3-.28.41-.12.12-.26.21-.43.27-.16.06-.34.1-.53.1ZM129.91,23.93c.15,0,.3-.03.43-.08.13-.05.24-.13.34-.22s.17-.21.23-.34c.05-.13.08-.27.08-.42s-.03-.29-.08-.42c-.05-.13-.13-.24-.23-.34s-.21-.17-.34-.22c-.13-.05-.27-.08-.43-.08s-.3.03-.43.08-.25.13-.34.22-.17.21-.23.34c-.05.13-.08.27-.08.42s.03.29.08.42c.05.13.13.24.23.34s.21.17.34.22.27.08.43.08Z"
         id="path57" />
      <path
         class="cls-10"
         d="M131.86,24.15v-2.56h.22l1.77,2.23h-.12v-2.23h.27v2.56h-.22l-1.77-2.23h.12v2.23h-.27Z"
         id="path58" />
      <path
         class="cls-10"
         d="M136.91,24.17c-.19,0-.37-.03-.53-.1-.16-.06-.31-.16-.43-.27-.12-.12-.21-.26-.28-.41-.07-.16-.1-.33-.1-.52s.03-.36.1-.52c.07-.16.16-.3.28-.41.12-.12.26-.21.43-.27.16-.06.34-.1.53-.1s.36.03.52.09c.16.06.3.16.41.28l-.17.17c-.11-.11-.22-.19-.35-.23s-.26-.07-.41-.07c-.15,0-.3.03-.43.08s-.25.13-.34.22-.17.21-.23.34-.08.27-.08.42.03.29.08.42c.05.13.13.24.23.34s.21.17.34.22.27.08.43.08.28-.02.41-.07.24-.13.35-.23l.17.17c-.11.12-.25.22-.41.28-.16.06-.34.1-.53.1Z"
         id="path59" />
      <path
         class="cls-10"
         d="M139.08,24.17c-.19,0-.36-.04-.5-.13s-.26-.2-.35-.35c-.09-.15-.13-.32-.13-.51s.04-.36.13-.51c.09-.15.2-.26.35-.34.15-.08.31-.12.5-.12s.36.04.51.13c.15.08.26.2.35.34s.13.31.13.51-.04.36-.13.51-.2.26-.35.35c-.15.08-.32.13-.51.13ZM139.08,23.94c.14,0,.26-.03.37-.09.11-.06.19-.15.25-.26.06-.11.09-.24.09-.39s-.03-.28-.09-.4c-.06-.11-.15-.2-.25-.26s-.23-.09-.37-.09-.26.03-.37.09-.19.15-.26.26c-.06.11-.1.24-.1.4s.03.28.1.39c.06.11.15.2.25.26.11.06.23.09.36.09Z"
         id="path60" />
      <path
         class="cls-10"
         d="M140.38,24.69l.16-.68.03.16c-.06,0-.1-.02-.14-.05-.04-.04-.06-.08-.06-.14s.02-.11.06-.14c.04-.04.08-.05.14-.05s.1.02.14.06c.04.04.05.09.05.14,0,.02,0,.04,0,.06,0,.02,0,.04-.01.07,0,.02-.02.05-.03.09l-.15.51h-.18Z"
         id="path61" />
      <path
         class="cls-10"
         d="M141.34,24.17c-.05,0-.1-.02-.14-.06-.04-.04-.06-.09-.06-.14s.02-.11.06-.14c.04-.04.08-.05.14-.05s.1.02.14.05c.04.04.06.08.06.14s-.02.1-.06.14c-.04.04-.08.06-.14.06Z"
         id="path62" />
      <path
         class="cls-10"
         d="M142.14,24.15v-2.56h.27v2.33h1.44v.23h-1.71Z"
         id="path63" />
      <path
         class="cls-10"
         d="M143.93,22.44v-.22h1.19v.22h-1.19ZM144.84,24.17c-.18,0-.32-.05-.42-.15-.1-.1-.15-.24-.15-.41v-1.81h.26v1.79c0,.11.03.2.09.26.06.06.14.09.25.09.11,0,.21-.03.29-.1l.09.19c-.05.05-.11.08-.18.1-.07.02-.15.03-.22.03Z"
         id="path64" />
      <path
         class="cls-10"
         d="M146.41,24.17c-.18,0-.35-.04-.49-.12-.15-.08-.26-.2-.34-.35-.08-.15-.12-.32-.12-.51s.04-.37.12-.51c.08-.15.2-.26.34-.34.15-.08.31-.12.49-.12.17,0,.32.04.45.11.13.08.24.19.32.33.08.15.12.32.12.53s-.04.38-.12.53c-.08.15-.18.26-.32.34s-.29.12-.46.12ZM146.43,23.94c.14,0,.26-.03.37-.09.11-.06.19-.15.26-.26.06-.11.09-.24.09-.39s-.03-.28-.09-.4c-.06-.11-.15-.2-.26-.26-.11-.06-.23-.09-.37-.09s-.26.03-.36.09-.19.15-.26.26c-.06.11-.1.24-.1.4s.03.28.1.39c.06.11.15.2.26.26.11.06.23.09.36.09ZM147.16,24.15v-.58l.03-.39-.04-.39v-1.36h.26v2.72h-.25Z"
         id="path65" />
      <path
         class="cls-10"
         d="M148.16,24.17c-.05,0-.1-.02-.14-.06-.04-.04-.06-.09-.06-.14s.02-.11.06-.14c.04-.04.08-.05.14-.05s.1.02.14.05c.04.04.06.08.06.14s-.02.1-.06.14c-.04.04-.08.06-.14.06Z"
         id="path66" />
    </g>
  </g>
  <g
     id="g76">
    <path
       d="m 70.747903,34.896999 q -0.7081,0 -1.1252,-0.2619 -0.4171,-0.2716 -0.5917,-0.6693 h -0.0873 l -0.194,0.8342 h -1.2319 v -5.3156 h 1.6393 v 2.3765 q 0,0.8536 0.2522,1.2319 0.2522,0.3783 0.7275,0.3783 0.3589,0 0.5432,-0.2231 0.194,-0.2231 0.194,-0.7469 v -3.0167 h 1.649 v 3.4144 q 0,0.9506 -0.4462,1.4744 -0.4462,0.5238 -1.3289,0.5238 z m 5.218593,0.0388 q -1.2319,0 -1.8236,-0.582 -0.5917,-0.5917 -0.5917,-1.7169 0,-0.1843 0.0097,-0.4753 0.0194,-0.3007 0.0485,-0.5044 h 2.4347 v 0.9894 h -0.8827 v 0.1261 q 0,0.9603 0.7954,0.9603 0.4462,0 0.679,-0.3201 0.2425,-0.3201 0.2425,-1.1446 0,-0.7857 -0.291,-1.1931 -0.2813,-0.4171 -1.067,-0.4171 -0.2813,0 -0.6014,0.0679 -0.3104,0.0582 -0.6014,0.1649 -0.2813,0.097 -0.4656,0.194 v -1.3483 q 0.2231,-0.1164 0.5529,-0.2037 0.3298,-0.0873 0.7081,-0.1358 0.3783,-0.0485 0.7372,-0.0485 0.97,0 1.5617,0.3492 0.6014,0.3395 0.873,0.9797 0.2813,0.6305 0.2813,1.4938 0,1.3386 -0.6208,2.0564 -0.6111,0.7081 -1.9788,0.7081 z m 3.608396,-0.1358 v -1.552 q 0,-0.6111 0.2328,-0.9506 0.2328,-0.3492 0.6984,-0.4947 l 0.0097,-0.0388 -1.0379,-0.3783 v -0.2231 q 0,-0.5044 0.291,-0.9118 0.291,-0.4171 0.8536,-0.6596 0.5723,-0.2425 1.3968,-0.2425 1.1737,0 1.8236,0.5335 0.6499,0.5335 0.6499,1.5811 v 3.3368 h -1.649 v -3.2495 q 0,-0.8924 -0.873,-0.8924 -0.4074,0 -0.5917,0.1746 -0.1843,0.1649 -0.2037,0.3977 l 0.8051,0.3589 -0.1164,0.6887 q -0.3492,0.0291 -0.4947,0.2619 -0.1455,0.2231 -0.1455,0.582 v 1.6781 z m 6.023696,-0.7275 q 0,-0.4753 0.2619,-0.6596 0.2716,-0.194 0.6499,-0.194 0.3686,0 0.6305,0.194 0.2619,0.1843 0.2619,0.6596 0,0.4559 -0.2619,0.6596 -0.2619,0.194 -0.6305,0.194 -0.3783,0 -0.6499,-0.194 -0.2619,-0.2037 -0.2619,-0.6596 z m 7.633908,-6.2856 q 0.6402,0 1.1446,0.1843 0.5141,0.1843 0.8148,0.5529 0.3007,0.3686 0.3007,0.9312 0,0.6305 -0.3492,1.0379 -0.3492,0.3977 -0.873,0.6499 0.3492,0.194 0.679,0.4462 0.3298,0.2522 0.5335,0.5917 0.2134,0.3395 0.2134,0.8051 0,0.8536 -0.6499,1.3871 -0.6402,0.5238 -1.8236,0.5238 -1.231899,0 -1.852699,-0.5141 -0.6208,-0.5141 -0.6208,-1.3677 0,-0.7178 0.3686,-1.1349 0.3783,-0.4268 0.9312,-0.6984 -0.4559,-0.291 -0.776,-0.6984 -0.3104,-0.4171 -0.3104,-1.0379 0,-0.5432 0.3007,-0.9118 0.3104,-0.3783 0.8245,-0.5626 0.514099,-0.1843 1.144599,-0.1843 z m -0.0097,1.1931 q -0.3007,0 -0.5044,0.1649 -0.2037,0.1649 -0.2037,0.4462 0,0.3007 0.2037,0.5044 0.2134,0.2037 0.5044,0.3492 0.2716,-0.1358 0.4947,-0.3298 0.2231,-0.194 0.2231,-0.5238 0,-0.2813 -0.2134,-0.4462 -0.2037,-0.1649 -0.5044,-0.1649 z m -0.9506,3.9479 q 0,0.3395 0.2425,0.5529 0.2425,0.2134 0.6887,0.2134 0.4947,0 0.7275,-0.194 0.2425,-0.2037 0.2425,-0.5432 0,-0.2425 -0.1455,-0.4268 -0.1358,-0.194 -0.3395,-0.3298 -0.194,-0.1455 -0.3783,-0.2522 l -0.1261,-0.0776 q -0.3977,0.194 -0.6596,0.4462 -0.2522,0.2522 -0.2522,0.6111 z m 9.020994,1.8721 h -4.927601 v -1.1155 l 1.7169,-1.7363 q 0.5238,-0.5432 0.8342,-0.8924 0.3104,-0.3492 0.4365,-0.6111 0.1358,-0.2716 0.1358,-0.5723 0,-0.3589 -0.2134,-0.5335 -0.2134,-0.1746 -0.5529,-0.1746 -0.3589,0 -0.7178,0.1843 -0.3589,0.1843 -0.776,0.5335 l -0.9021,-1.0573 q 0.3007,-0.2716 0.6402,-0.5044 0.3395,-0.2425 0.7954,-0.388 0.4656,-0.1552 1.1155,-0.1552 0.6984,0 1.193101,0.2522 0.5044,0.2425 0.776,0.6693 0.2813,0.4171 0.2813,0.9603 0,0.5917 -0.2231,1.067 -0.2231,0.4656 -0.6596,0.9409 -0.436501,0.4656 -1.067001,1.0379 l -0.7178,0.6596 v 0.0582 h 2.832401 z m 3.15249,-7.0131 q 0.6402,0 1.1446,0.1843 0.5141,0.1843 0.8148,0.5529 0.3007,0.3686 0.3007,0.9312 0,0.6305 -0.3492,1.0379 -0.3492,0.3977 -0.873,0.6499 0.3492,0.194 0.679,0.4462 0.3298,0.2522 0.5335,0.5917 0.2134,0.3395 0.2134,0.8051 0,0.8536 -0.6499,1.3871 -0.6402,0.5238 -1.8236,0.5238 -1.2319,0 -1.8527,-0.5141 -0.6208,-0.5141 -0.6208,-1.3677 0,-0.7178 0.3686,-1.1349 0.3783,-0.4268 0.9312,-0.6984 -0.4559,-0.291 -0.776,-0.6984 -0.3104,-0.4171 -0.3104,-1.0379 0,-0.5432 0.3007,-0.9118 0.3104,-0.3783 0.8245,-0.5626 0.5141,-0.1843 1.1446,-0.1843 z m -0.01,1.1931 q -0.3007,0 -0.5044,0.1649 -0.2037,0.1649 -0.2037,0.4462 0,0.3007 0.2037,0.5044 0.2134,0.2037 0.5044,0.3492 0.2716,-0.1358 0.4947,-0.3298 0.2231,-0.194 0.2231,-0.5238 0,-0.2813 -0.2134,-0.4462 -0.2037,-0.1649 -0.5044,-0.1649 z m -0.9506,3.9479 q 0,0.3395 0.2425,0.5529 0.2425,0.2134 0.6887,0.2134 0.4947,0 0.7275,-0.194 0.2425,-0.2037 0.2425,-0.5432 0,-0.2425 -0.1455,-0.4268 -0.1358,-0.194 -0.3395,-0.3298 -0.194,-0.1455 -0.3783,-0.2522 l -0.1261,-0.0776 q -0.3977,0.194 -0.6596,0.4462 -0.2522,0.2522 -0.2522,0.6111 z m 4.00609,-0.0679 v -1.3192 h 2.5996 v 1.3192 z m 8.1189,1.94 h -4.9276 v -1.1155 l 1.7169,-1.7363 q 0.5238,-0.5432 0.8342,-0.8924 0.3104,-0.3492 0.4365,-0.6111 0.1358,-0.2716 0.1358,-0.5723 0,-0.3589 -0.2134,-0.5335 -0.2134,-0.1746 -0.5529,-0.1746 -0.3589,0 -0.7178,0.1843 -0.3589,0.1843 -0.776,0.5335 l -0.9021,-1.0573 q 0.3007,-0.2716 0.6402,-0.5044 0.3395,-0.2425 0.7954,-0.388 0.4656,-0.1552 1.1155,-0.1552 0.6984,0 1.1931,0.2522 0.5044,0.2425 0.776,0.6693 0.2813,0.4171 0.2813,0.9603 0,0.5917 -0.2231,1.067 -0.2231,0.4656 -0.6596,0.9409 -0.4365,0.4656 -1.067,1.0379 l -0.7178,0.6596 v 0.0582 h 2.8324 z m 3.35619,-4.4814 q 0.6111,0 1.0961,0.2522 0.485,0.2522 0.7663,0.7372 0.2813,0.485 0.2813,1.1737 0,1.1446 -0.6984,1.7848 -0.6887,0.6305 -2.0855,0.6305 -1.1737,0 -1.9109,-0.3783 v -1.3871 q 0.3589,0.1843 0.8633,0.3201 0.5141,0.1261 0.9506,0.1261 0.5917,0 0.9021,-0.2425 0.3201,-0.2522 0.3201,-0.7566 0,-0.4559 -0.3201,-0.6984 -0.3104,-0.2522 -0.9603,-0.2522 -0.2619,0 -0.5335,0.0582 -0.2716,0.0485 -0.4656,0.097 l -0.6305,-0.3201 0.2619,-3.589 h 3.8412 v 1.3871 h -2.425 l -0.1067,1.1543 q 0.1552,-0.0291 0.3298,-0.0582 0.1843,-0.0388 0.5238,-0.0388 z m 8.04129,3.0943 h -0.7954 v 1.3871 h -1.6199 v -1.3871 h -2.8712 v -1.1834 l 2.9682,-4.3553 h 1.5229 v 4.2777 h 0.7954 z m -2.4153,-2.2601 q 0,-0.194 0.01,-0.4753 0.01,-0.2813 0.0194,-0.5141 0.01,-0.2425 0.0194,-0.291 h -0.0485 q -0.0873,0.2037 -0.1746,0.3686 -0.0873,0.1552 -0.2134,0.3492 l -1.0379,1.5617 h 1.4259 z m 2.90999,0.7081 q 0,-0.5917 0.0776,-1.1737 0.0873,-0.5917 0.3104,-1.1155 0.2231,-0.5238 0.6208,-0.9215 0.3977,-0.4074 1.0185,-0.6305 0.6208,-0.2328 1.5132,-0.2328 0.2037,0 0.485,0.0194 0.2813,0.0194 0.4753,0.0582 v 1.2998 q -0.194,-0.0388 -0.4268,-0.0582 -0.2231,-0.0291 -0.5044,-0.0291 -0.7857,0 -1.2319,0.2425 -0.4365,0.2425 -0.6208,0.6887 -0.1843,0.4462 -0.2134,1.0379 h 0.0582 q 0.1843,-0.3395 0.5238,-0.5723 0.3492,-0.2328 0.9118,-0.2328 0.9118,0 1.4356,0.582 0.5238,0.582 0.5238,1.6393 0,1.1446 -0.6499,1.7945 -0.6402,0.6402 -1.746,0.6402 -0.7178,0 -1.2998,-0.3201 -0.582,-0.3298 -0.9215,-0.9991 -0.3395,-0.679 -0.3395,-1.7169 z m 2.5317,1.7169 q 0.3686,0 0.5917,-0.2619 0.2328,-0.2619 0.2328,-0.8245 0,-0.4462 -0.194,-0.7081 -0.194,-0.2619 -0.6111,-0.2619 -0.4171,0 -0.6693,0.2716 -0.2425,0.2716 -0.2425,0.5917 0,0.2813 0.097,0.5626 0.097,0.2716 0.291,0.4559 0.2037,0.1746 0.5044,0.1746 z"
       id="text67"
       style="font-weight:800;font-size:9.7px;font-family:'Noto Sans Thai', sans-serif;fill:#0d5fac"
       aria-label="มอก. 828-2546" />
    <path
       d="m 68.141598,41.446502 q -0.31155,0 -0.47895,-0.14415 -0.1674,-0.1488 -0.1674,-0.45105 v -1.999501 h 0.6975 v 1.915801 q 0,0.17205 0.16275,0.17205 0.06975,0 0.158101,-0.03255 l 0.0651,0.4464 q -0.1767,0.093 -0.437101,0.093 z m 1.399651,0 q -0.31155,0 -0.47895,-0.14415 -0.1674,-0.1488 -0.1674,-0.45105 v -1.999501 h 0.6975 v 1.915801 q 0,0.17205 0.16275,0.17205 0.06975,0 0.1581,-0.03255 l 0.0651,0.4464 q -0.1767,0.093 -0.4371,0.093 z m 0.8928,-0.0465 v -1.980901 q 0,-0.23715 0.07905,-0.372 0.0837,-0.13485 0.22785,-0.186 0.14415,-0.0558 0.33015,-0.0558 0.1302,0 0.2325,0.0279 0.1023,0.02325 0.1674,0.0558 l -0.093,0.4557 q -0.0372,-0.0093 -0.0744,-0.01395 -0.0372,-0.0046 -0.06045,-0.0046 -0.08835,0 -0.12555,0.0465 -0.03255,0.0465 -0.03255,0.13485 v 0.43245 q 0,0.11625 -0.0093,0.279001 -0.0093,0.1581 -0.03255,0.3999 h 0.02325 q 0.093,-0.21855 0.16275,-0.34875 0.0744,-0.134851 0.1302,-0.237151 l 0.17205,-0.31155 h 0.2604 l 0.17205,0.31155 q 0.093,0.172051 0.15345,0.292951 0.0651,0.11625 0.1395,0.29295 h 0.02325 q -0.02325,-0.2418 -0.03255,-0.3999 -0.0093,-0.162751 -0.0093,-0.279001 v -1.0881 h 0.651 v 2.548201 H 72.2243 l -0.55335,-1.0137 h -0.0186 l -0.55335,1.0137 z m 1.785597,-2.901601 v -1.05555 h 0.6417 v 1.05555 z m 2.232,2.948101 q -0.42315,0 -0.64635,-0.24645 -0.2232,-0.24645 -0.2232,-0.7254 v -1.622851 h 0.6975 v 1.501951 q 0,0.25575 0.1023,0.372 0.1023,0.11625 0.2976,0.11625 0.24645,0 0.3813,-0.186 0.13485,-0.19065 0.13485,-0.585901 v -1.2183 h 0.6975 v 2.548201 h -0.5301 l -0.0744,-0.3906 h -0.04185 q -0.07905,0.186 -0.27435,0.31155 -0.19065,0.12555 -0.5208,0.12555 z m 2.394749,-0.0465 -0.44175,-2.548201 h 0.6789 l 0.12555,0.89745 q 0.01395,0.1116 0.03255,0.3069 0.02325,0.190651 0.04185,0.446401 h 0.01395 q 0.06045,-0.25575 0.10695,-0.446401 0.05115,-0.1953 0.0837,-0.32085 l 0.2511,-0.8835 h 0.42315 l 0.2511,0.8835 q 0.0372,0.12555 0.0837,0.32085 0.0465,0.190651 0.10695,0.446401 h 0.01395 q 0.02325,-0.25575 0.0372,-0.446401 0.0186,-0.1953 0.0372,-0.3069 l 0.1302,-0.89745 h 0.67425 l -0.4371,2.548201 h -0.68355 l -0.29295,-1.03695 q -0.0465,-0.18135 -0.0744,-0.330151 -0.02325,-0.15345 -0.0465,-0.31155 h -0.0186 q -0.0279,0.1581 -0.0558,0.30225 -0.02325,0.144151 -0.07905,0.339451 l -0.2976,1.03695 z m 0.339454,-2.901601 v -0.29295 l 0.46965,-0.1953 h 0.50685 v -0.32085 h 0.44175 v 0.32085 h 0.27435 v -0.32085 h 0.4371 v 0.8091 z m 1.023,-1.05555 v -0.19065 q 0.0465,-0.01395 0.11625,-0.04185 0.0651,-0.0279 0.11625,-0.0744 0.05115,-0.0465 0.05115,-0.11625 0,-0.05115 -0.0279,-0.07905 -0.03255,-0.03255 -0.07905,-0.03255 -0.07905,0 -0.13485,0.0465 l -0.0837,-0.2697 q 0.0837,-0.0651 0.20925,-0.0837 0.1209,-0.02325 0.20925,-0.02325 0.1767,0 0.2883,0.0744 0.10695,0.06975 0.10695,0.2325 0,0.04185 -0.0093,0.08835 -0.0093,0.04185 -0.03255,0.07905 h 0.5487 v 0.3906 z m 2.627244,4.003651 q -0.42315,0 -0.64635,-0.24645 -0.2232,-0.24645 -0.2232,-0.7254 v -1.622851 h 0.6975 v 1.501951 q 0,0.25575 0.1023,0.372 0.1023,0.11625 0.2976,0.11625 0.24645,0 0.3813,-0.186 0.13485,-0.19065 0.13485,-0.585901 v -1.2183 h 0.6975 v 2.548201 h -0.5301 l -0.0744,-0.3906 h -0.04185 q -0.07905,0.186 -0.27435,0.31155 -0.19065,0.12555 -0.5208,0.12555 z m 3.106198,0 q -0.41385,0 -0.64635,-0.1674 -0.22785,-0.17205 -0.32085,-0.4743 -0.08835,-0.3069 -0.08835,-0.711451 0,-0.6789 0.19995,-0.98115 0.19995,-0.3069 0.5952,-0.3069 0.16275,0 0.28365,0.0651 0.12555,0.06045 0.19995,0.22785 h 0.0186 q 0.0651,-0.17205 0.2139,-0.2325 0.1488,-0.06045 0.32085,-0.06045 0.32085,0 0.47895,0.17205 0.16275,0.17205 0.16275,0.5022 v 1.920451 h -0.6975 v -1.790251 q 0,-0.14415 -0.0465,-0.1953 -0.0465,-0.05115 -0.12555,-0.05115 -0.08835,0 -0.13485,0.05115 -0.04185,0.05115 -0.0558,0.17205 h -0.27435 q -0.0186,-0.13485 -0.06975,-0.1767 -0.05115,-0.0465 -0.1209,-0.0465 -0.11625,0 -0.18135,0.1674 -0.06045,0.1674 -0.06045,0.5673 0,0.395251 0.093,0.609151 0.093,0.20925 0.3627,0.20925 0.1116,0 0.18135,-0.0279 l 0.06975,0.49755 q -0.1488,0.06045 -0.35805,0.06045 z m 0.632398,-2.948101 q -0.21855,0 -0.3441,-0.0651 -0.12555,-0.0651 -0.1767,-0.16275 -0.0558,-0.1023 -0.0558,-0.2139 0,-0.1767 0.093,-0.33945 l 0.50685,0.0651 q -0.02325,0.06975 -0.02325,0.1302 0,0.0651 0.04185,0.1023 0.0372,0.03255 0.1302,0.03255 h 0.99975 v 0.45105 z m 2.3064,2.948101 q -0.42315,0 -0.64635,-0.24645 -0.2232,-0.24645 -0.2232,-0.7254 v -1.622851 h 0.6975 v 1.501951 q 0,0.25575 0.1023,0.372 0.1023,0.11625 0.2976,0.11625 0.24645,0 0.3813,-0.186 0.13485,-0.19065 0.13485,-0.585901 v -1.2183 h 0.6975 v 2.548201 h -0.5301 l -0.0744,-0.3906 h -0.04185 q -0.07905,0.186 -0.27435,0.31155 -0.19065,0.12555 -0.5208,0.12555 z m 2.134349,-0.0465 v -1.511251 q 0,-0.53475 0.28365,-0.81375 0.28365,-0.28365 0.89745,-0.28365 0.61845,0 0.8928,0.28365 0.279,0.279 0.279,0.81375 v 1.511251 h -0.69285 v -1.520551 q 0,-0.24645 -0.11625,-0.38595 -0.1116,-0.14415 -0.372,-0.14415 -0.25575,0 -0.372,0.14415 -0.1116,0.1395 -0.1116,0.38595 v 0.404551 l 0.01395,0.0046 q 0.08835,-0.181351 0.20925,-0.237151 0.12555,-0.06045 0.33945,-0.06045 h 0.10695 v 0.520801 h -0.10695 q -0.2325,0 -0.3534,0.07905 -0.1209,0.07905 -0.1674,0.20925 -0.04185,0.12555 -0.04185,0.28365 v 0.3162 z m 4.0176,0.06045 q -0.5673,0 -0.84165,-0.27435 -0.27435,-0.279 -0.27435,-0.82305 0,-0.093 0.0046,-0.2232 0.0093,-0.134851 0.02325,-0.237151 h 1.116 v 0.441751 h -0.46035 v 0.0651 q 0,0.279 0.1023,0.4092 0.10695,0.12555 0.3255,0.12555 0.2325,0 0.3627,-0.16275 0.1302,-0.1674 0.1302,-0.6045 0,-0.413851 -0.14415,-0.618451 -0.14415,-0.20925 -0.5301,-0.20925 -0.20925,0 -0.43245,0.0651 -0.2232,0.0651 -0.36735,0.14415 v -0.58125 q 0.1488,-0.07905 0.4092,-0.1302 0.26505,-0.0558 0.5208,-0.0558 0.45105,0 0.7254,0.1674 0.279,0.16275 0.40455,0.465 0.1302,0.30225 0.1302,0.716101 0,0.6324 -0.28365,0.9765 -0.28365,0.3441 -0.9207,0.3441 z m 2.613302,-0.01395 q -0.42315,0 -0.64635,-0.24645 -0.2232,-0.24645 -0.2232,-0.7254 v -1.622851 h 0.6975 v 1.501951 q 0,0.25575 0.1023,0.372 0.1023,0.11625 0.2976,0.11625 0.24645,0 0.3813,-0.186 0.13485,-0.19065 0.13485,-0.585901 v -1.2183 h 0.6975 v 2.548201 h -0.5301 l -0.0744,-0.3906 h -0.04185 q -0.07905,0.186 -0.27435,0.31155 -0.19065,0.12555 -0.5208,0.12555 z m 2.111099,-0.0465 v -0.77655 q 0,-0.29295 0.11625,-0.45105 0.11625,-0.158101 0.33015,-0.223201 l 0.0046,-0.0186 -0.49755,-0.18135 v -0.1209 q 0,-0.22785 0.13485,-0.4185 0.13485,-0.19065 0.39525,-0.30225 0.26505,-0.11625 0.6417,-0.11625 0.52545,0 0.837,0.24645 0.311551,0.2418 0.311551,0.7347 v 1.627501 h -0.697501 v -1.585651 q 0,-0.2325 -0.12555,-0.34875 -0.1209,-0.11625 -0.3441,-0.11625 -0.2139,0 -0.32085,0.093 -0.10695,0.08835 -0.11625,0.21855 l 0.41385,0.19065 -0.05115,0.302251 q -0.1674,0.0093 -0.2511,0.1209 -0.0837,0.1116 -0.0837,0.30225 v 0.82305 z m 3.799051,0.06045 q -0.27435,0 -0.55335,-0.06045 -0.27435,-0.06045 -0.48825,-0.17205 l 0.1953,-0.55335 q 0.1395,0.0744 0.35805,0.1581 0.21855,0.07905 0.46035,0.07905 0.37665,0 0.37665,-0.21855 0,-0.1209 -0.14415,-0.186 -0.1395,-0.06975 -0.3906,-0.1581 -0.24645,-0.08835 -0.42315,-0.19065 -0.1767,-0.102301 -0.27435,-0.251101 -0.093,-0.1488 -0.093,-0.372 0,-0.3813 0.28365,-0.56265 0.2883,-0.18135 0.76725,-0.18135 0.2604,0 0.46965,0.04185 0.20925,0.04185 0.3255,0.10695 v 0.5487 q -0.1209,-0.0558 -0.33945,-0.10695 -0.21855,-0.0558 -0.42315,-0.0558 -0.38595,0 -0.38595,0.1953 0,0.1116 0.1488,0.1767 0.15345,0.06045 0.4278,0.15345 0.3627,0.12555 0.55335,0.302251 0.1953,0.17205 0.1953,0.5022 0,0.20925 -0.0977,0.39525 -0.093,0.18135 -0.32085,0.2976 -0.22785,0.1116 -0.62775,0.1116 z m -1.24619,-2.980649 v -0.29295 l 0.46965,-0.1953 h 1.06485 v -0.32085 h 0.5952 v 0.8091 z m 3.75254,2.966699 q -0.41385,0 -0.64635,-0.1674 -0.22785,-0.17205 -0.32085,-0.4743 -0.0884,-0.3069 -0.0884,-0.711451 0,-0.6789 0.19995,-0.98115 0.19995,-0.3069 0.5952,-0.3069 0.16275,0 0.28365,0.0651 0.12555,0.06045 0.19995,0.22785 h 0.0186 q 0.0651,-0.17205 0.2139,-0.2325 0.1488,-0.06045 0.32085,-0.06045 0.32085,0 0.47895,0.17205 0.16275,0.17205 0.16275,0.5022 v 1.920451 h -0.6975 v -1.790251 q 0,-0.14415 -0.0465,-0.1953 -0.0465,-0.05115 -0.12555,-0.05115 -0.0884,0 -0.13485,0.05115 -0.0419,0.05115 -0.0558,0.17205 h -0.27435 q -0.0186,-0.13485 -0.0697,-0.1767 -0.0512,-0.0465 -0.1209,-0.0465 -0.11625,0 -0.18135,0.1674 -0.0605,0.1674 -0.0605,0.5673 0,0.395251 0.093,0.609151 0.093,0.20925 0.3627,0.20925 0.1116,0 0.18135,-0.0279 l 0.0697,0.49755 q -0.1488,0.06045 -0.35805,0.06045 z m 2.78535,0 q -0.31155,0 -0.47895,-0.14415 -0.1674,-0.1488 -0.1674,-0.45105 v -1.999501 h 0.6975 v 1.915801 q 0,0.17205 0.16275,0.17205 0.0697,0 0.1581,-0.03255 l 0.0651,0.4464 q -0.1767,0.093 -0.4371,0.093 z m 1.53915,0 q -0.3999,0 -0.61845,-0.19065 -0.2139,-0.19065 -0.2139,-0.53475 0,-0.372 0.26505,-0.595201 0.2697,-0.2232 0.8463,-0.2697 l 0.4836,-0.0372 v -0.0744 q 0,-0.2232 -0.1209,-0.32085 -0.1209,-0.09765 -0.372,-0.09765 -0.2418,0 -0.4743,0.0744 -0.22785,0.06975 -0.39525,0.1674 v -0.5766 q 0.13485,-0.0651 0.3813,-0.1302 0.24645,-0.06975 0.5673,-0.06975 0.1674,0 0.3162,0.0279 0.1488,0.02325 0.25575,0.093 0.1116,-0.093 0.11625,-0.22785 h 0.60915 q 0,0.1674 -0.079,0.3162 -0.0791,0.1488 -0.2511,0.2511 0.0697,0.093 0.0977,0.2232 0.0326,0.1302 0.0326,0.2976 v 1.627501 h -0.68355 v -1.0788 l -0.40455,0.04185 q -0.279,0.0279 -0.3906,0.1116 -0.10695,0.0837 -0.10695,0.2232 0,0.1395 0.0884,0.20925 0.093,0.06975 0.23715,0.06975 0.0558,0 0.1116,-0.0093 0.0558,-0.01395 0.1023,-0.0279 l 0.0605,0.4371 q -0.0884,0.03255 -0.20925,0.05115 -0.1209,0.0186 -0.2511,0.0186 z m 2.98529,0.01395 q -0.27435,0 -0.55335,-0.06045 -0.27435,-0.06045 -0.48825,-0.17205 l 0.1953,-0.55335 q 0.1395,0.0744 0.35805,0.1581 0.21855,0.07905 0.46035,0.07905 0.37665,0 0.37665,-0.21855 0,-0.1209 -0.14415,-0.186 -0.1395,-0.06975 -0.3906,-0.1581 -0.24645,-0.08835 -0.42315,-0.19065 -0.1767,-0.102301 -0.27435,-0.251101 -0.093,-0.1488 -0.093,-0.372 0,-0.3813 0.28365,-0.56265 0.2883,-0.18135 0.76725,-0.18135 0.2604,0 0.46965,0.04185 0.20925,0.04185 0.3255,0.10695 v 0.5487 q -0.1209,-0.0558 -0.33945,-0.10695 -0.21855,-0.0558 -0.42315,-0.0558 -0.38595,0 -0.38595,0.1953 0,0.1116 0.1488,0.1767 0.15345,0.06045 0.4278,0.15345 0.3627,0.12555 0.55335,0.302251 0.1953,0.17205 0.1953,0.5022 0,0.20925 -0.0977,0.39525 -0.093,0.18135 -0.32085,0.2976 -0.22785,0.1116 -0.62775,0.1116 z m -1.2369,-2.962051 v -0.29295 l 0.46965,-0.1953 h 1.66005 v 0.48825 z m 4.27335,2.948101 q -0.33015,0 -0.53475,-0.12555 -0.19995,-0.12555 -0.28365,-0.32085 h -0.0372 l -0.0744,0.3999 h -0.5301 v -2.548201 h 0.6975 v 1.2183 q 0,0.395251 0.13485,0.585901 0.13485,0.186 0.3813,0.186 0.1953,0 0.2976,-0.11625 0.1023,-0.11625 0.1023,-0.372 v -1.501951 h 0.6975 v 1.655401 q 0,0.45105 -0.21855,0.6975 -0.2139,0.2418 -0.6324,0.2418 z m 2.21805,0 q -0.31155,0 -0.47895,-0.14415 -0.1674,-0.1488 -0.1674,-0.45105 v -1.999501 h 0.6975 v 1.915801 q 0,0.17205 0.16275,0.17205 0.0697,0 0.1581,-0.03255 l 0.0651,0.4464 q -0.1767,0.093 -0.4371,0.093 z m 0.9114,-0.0465 v -2.548201 h 0.6882 v 0.95325 h 0.0186 l 0.7905,-0.95325 h 0.76725 v 0.02325 l -0.67425,0.74865 q 0.33015,0.05115 0.49755,0.279 0.1674,0.22785 0.1674,0.548701 v 0.9486 h -0.6975 v -0.84165 q 0,-0.20925 -0.1023,-0.3162 -0.1023,-0.111601 -0.2976,-0.139501 l -0.46965,0.520801 v 0.77655 z m 3.53865,0.0465 q -0.3999,0 -0.61845,-0.19065 -0.2139,-0.19065 -0.2139,-0.53475 0,-0.372 0.26505,-0.595201 0.2697,-0.2232 0.8463,-0.2697 l 0.4836,-0.0372 v -0.0744 q 0,-0.2232 -0.1209,-0.32085 -0.1209,-0.09765 -0.372,-0.09765 -0.2418,0 -0.4743,0.0744 -0.22785,0.06975 -0.39525,0.1674 v -0.5766 q 0.13485,-0.0651 0.3813,-0.1302 0.24645,-0.06975 0.57195,-0.06975 0.3162,0 0.56265,0.093 0.24645,0.08835 0.38595,0.30225 0.14415,0.2139 0.14415,0.5859 v 1.627501 h -0.68355 v -1.0788 l -0.40455,0.04185 q -0.279,0.0279 -0.3906,0.1116 -0.10695,0.0837 -0.10695,0.2232 0,0.1395 0.0884,0.20925 0.093,0.06975 0.23715,0.06975 0.0558,0 0.1116,-0.0093 0.0558,-0.01395 0.1023,-0.0279 l 0.0605,0.4371 q -0.0884,0.03255 -0.20925,0.05115 -0.1209,0.0186 -0.2511,0.0186 z m 0.83234,-2.906251 q -0.28365,0 -0.3999,-0.20925 l -0.2325,0.1953 q -0.29295,0 -0.46965,-0.1395 -0.1767,-0.14415 -0.1767,-0.41385 0,-0.19065 0.0837,-0.31155 0.079,-0.12555 0.20925,-0.186 0.1302,-0.06045 0.279,-0.06045 h 1.1718 v 0.33945 h -1.0509 q -0.0884,0 -0.1488,0.0558 -0.0605,0.0558 -0.0605,0.17205 0,0.08835 0.0419,0.14415 0.0372,0.05115 0.1116,0.05115 l 0.2139,-0.19995 h 0.093 q 0.0139,0.08835 0.0605,0.15345 0.0465,0.06045 0.1302,0.06045 0.0697,0 0.10695,-0.04185 0.0372,-0.0465 0.0372,-0.1209 v -0.06975 h 0.46965 v 0.093 q 0,0.2511 -0.12555,0.372 -0.1302,0.11625 -0.3441,0.11625 z m 1.24156,2.859751 v -0.77655 q 0,-0.29295 0.11625,-0.45105 0.11625,-0.158101 0.33015,-0.223201 l 0.005,-0.0186 -0.49755,-0.18135 v -0.1209 q 0,-0.22785 0.13485,-0.4185 0.13485,-0.19065 0.39525,-0.30225 0.26505,-0.11625 0.6417,-0.11625 0.52545,0 0.837,0.24645 0.31155,0.2418 0.31155,0.7347 v 1.627501 h -0.6975 v -1.585651 q 0,-0.2325 -0.12555,-0.34875 -0.1209,-0.11625 -0.3441,-0.11625 -0.2139,0 -0.32085,0.093 -0.10695,0.08835 -0.11625,0.21855 l 0.41385,0.19065 -0.0512,0.302251 q -0.1674,0.0093 -0.2511,0.1209 -0.0837,0.1116 -0.0837,0.30225 v 0.82305 z m 3.93855,0.06045 q -0.5673,0 -0.84165,-0.27435 -0.27435,-0.279 -0.27435,-0.82305 0,-0.093 0.005,-0.2232 0.009,-0.134851 0.0233,-0.237151 h 1.116 v 0.441751 h -0.46035 v 0.0651 q 0,0.279 0.1023,0.4092 0.10695,0.12555 0.3255,0.12555 0.2325,0 0.3627,-0.16275 0.1302,-0.1674 0.1302,-0.6045 0,-0.413851 -0.14415,-0.618451 -0.14415,-0.20925 -0.5301,-0.20925 -0.20925,0 -0.43245,0.0651 -0.2232,0.0651 -0.36735,0.14415 v -0.58125 q 0.1488,-0.07905 0.4092,-0.1302 0.26505,-0.0558 0.5208,-0.0558 0.45105,0 0.7254,0.1674 0.279,0.16275 0.40455,0.465 0.1302,0.30225 0.1302,0.716101 0,0.6324 -0.28365,0.9765 -0.28365,0.3441 -0.9207,0.3441 z m 0.35806,-2.962051 q -0.21855,0 -0.3441,-0.0651 -0.12555,-0.0651 -0.1767,-0.16275 -0.0558,-0.1023 -0.0558,-0.2139 0,-0.1767 0.093,-0.33945 l 0.50685,0.0651 q -0.0233,0.06975 -0.0233,0.1302 0,0.0651 0.0419,0.1023 0.0372,0.03255 0.1302,0.03255 h 0.99975 v 0.45105 z m 2.30175,2.948101 q -0.37665,0 -0.59985,-0.16275 -0.2232,-0.1674 -0.32085,-0.4557 -0.0977,-0.29295 -0.0977,-0.6696 0,-0.404551 0.0883,-0.669601 0.093,-0.2697 0.2604,-0.4185 0.1674,-0.15345 0.39525,-0.2139 0.2325,-0.0651 0.50685,-0.0651 0.4185,0 0.6696,0.11625 0.2511,0.11625 0.3627,0.33015 0.11625,0.2139 0.11625,0.5022 v 1.660051 h -0.6975 v -1.604251 q 0,-0.21855 -0.10695,-0.33015 -0.1023,-0.11625 -0.3441,-0.11625 -0.16275,0 -0.2883,0.06975 -0.1209,0.0651 -0.19065,0.23715 -0.0651,0.17205 -0.0651,0.492901 0,0.33015 0.0976,0.53475 0.0977,0.2046 0.33945,0.2046 0.1023,0 0.186,-0.02325 l 0.0651,0.5208 q -0.0744,0.03255 -0.18135,0.0465 -0.1023,0.01395 -0.1953,0.01395 z m 2.74815,0 q -0.31155,0 -0.47895,-0.14415 -0.1674,-0.1488 -0.1674,-0.45105 v -1.999501 h 0.6975 v 1.915801 q 0,0.17205 0.16275,0.17205 0.0697,0 0.1581,-0.03255 l 0.0651,0.4464 q -0.1767,0.093 -0.4371,0.093 z m 1.39965,0 q -0.31155,0 -0.47895,-0.14415 -0.1674,-0.1488 -0.1674,-0.45105 v -1.999501 h 0.6975 v 1.915801 q 0,0.17205 0.16275,0.17205 0.0697,0 0.1581,-0.03255 l 0.0651,0.4464 q -0.1767,0.093 -0.4371,0.093 z m 1.72515,0.01395 q -0.27435,0 -0.55335,-0.06045 -0.27435,-0.06045 -0.48825,-0.17205 l 0.1953,-0.55335 q 0.1395,0.0744 0.35805,0.1581 0.21855,0.07905 0.46035,0.07905 0.37665,0 0.37665,-0.21855 0,-0.1209 -0.14415,-0.186 -0.1395,-0.06975 -0.3906,-0.1581 -0.24645,-0.08835 -0.42315,-0.19065 -0.1767,-0.102301 -0.27435,-0.251101 -0.093,-0.1488 -0.093,-0.372 0,-0.3813 0.28365,-0.56265 0.2883,-0.18135 0.76725,-0.18135 0.2604,0 0.46965,0.04185 0.20925,0.04185 0.3255,0.10695 v 0.5487 q -0.1209,-0.0558 -0.33945,-0.10695 -0.21855,-0.0558 -0.42315,-0.0558 -0.38595,0 -0.38595,0.1953 0,0.1116 0.1488,0.1767 0.15345,0.06045 0.4278,0.15345 0.3627,0.12555 0.55335,0.302251 0.1953,0.17205 0.1953,0.5022 0,0.20925 -0.0977,0.39525 -0.093,0.18135 -0.32085,0.2976 -0.22785,0.1116 -0.62775,0.1116 z m 1.9716,-0.06045 -0.73935,-2.548201 h 0.70215 l 0.56265,1.985551 h 0.0279 q 0.0744,0 0.1395,-0.04185 0.0651,-0.04185 0.1116,-0.1116 0.093,-0.1302 0.1395,-0.3069 0.0465,-0.18135 0.0465,-0.358051 0,-0.31155 -0.1209,-0.47895 -0.11625,-0.1674 -0.3255,-0.1674 -0.0418,0 -0.079,0.0046 -0.0325,0.0046 -0.0605,0.0186 l -0.1302,-0.53475 q 0.10695,-0.03255 0.19995,-0.0372 0.0977,-0.0093 0.1581,-0.0093 0.24645,0 0.4278,0.0651 0.18135,0.0651 0.31155,0.1953 0.3255,0.3255 0.3255,0.93 0,0.376651 -0.1209,0.660301 -0.11625,0.279 -0.28365,0.44175 -0.1395,0.13485 -0.3534,0.2139 -0.20925,0.07905 -0.5766,0.07905 z"
       id="text68"
       style="font-weight:700;font-size:4.65px;font-family:'Noto Sans Thai', sans-serif;fill:#1f2937"
       aria-label="แผ่นพื้นตันคอนกรีตเสริมเหล็กอัดแรง" />
    <path
       d="m 67.957148,47.0395 q -0.2291,0 -0.36735,-0.10665 -0.13825,-0.1106 -0.13825,-0.3634 V 44.8354 h 0.50165 v 1.67085 q 0,0.158 0.1501,0.158 0.05925,0 0.13825,-0.02765 l 0.0553,0.3318 q -0.07505,0.03555 -0.16195,0.05135 -0.0869,0.01975 -0.17775,0.01975 z m 1.1455,0 q -0.2291,0 -0.36735,-0.10665 -0.13825,-0.1106 -0.13825,-0.3634 V 44.8354 h 0.50165 v 1.67085 q 0,0.158 0.150101,0.158 0.05925,0 0.13825,-0.02765 l 0.0553,0.3318 q -0.07505,0.03555 -0.16195,0.05135 -0.0869,0.01975 -0.177751,0.01975 z m 1.615549,0.0079 q -0.4977,0 -0.7189,-0.2291 -0.21725,-0.2291 -0.21725,-0.6636 v -1.3193 h 0.50165 v 1.343 q 0,0.46215 0.4345,0.46215 0.22515,0 0.3318,-0.11455 0.10665,-0.1185 0.10665,-0.3476 v -1.343 h 0.50165 v 1.3193 q 0,0.4345 -0.22515,0.6636 -0.2212,0.2291 -0.71495,0.2291 z m 2.460847,0 q -0.4977,0 -0.7189,-0.2291 -0.21725,-0.2291 -0.21725,-0.6636 v -1.3193 h 0.50165 v 1.343 q 0,0.46215 0.4345,0.46215 0.22515,0 0.3318,-0.11455 0.10665,-0.1185 0.10665,-0.3476 v -1.343 h 0.50165 v 1.3193 q 0,0.4345 -0.22515,0.6636 -0.2212,0.2291 -0.71495,0.2291 z m 1.643197,-0.0079 q -0.18565,0 -0.32785,-0.07505 l 0.0474,-0.29625 q 0.05925,0.01975 0.11455,0.01975 0.12245,0 0.12245,-0.14615 v -0.316 q 0,-0.2133 0.08295,-0.31995 0.08295,-0.1106 0.24885,-0.1501 l 0.004,-0.0158 -0.43845,-0.158 V 45.4674 q 0,-0.1817 0.10665,-0.33575 0.1106,-0.15405 0.3239,-0.24885 0.2133,-0.0948 0.5214,-0.0948 0.28045,0 0.49375,0.0869 0.21725,0.0869 0.3397,0.26465 0.12245,0.17775 0.12245,0.4503 V 47 h -0.50165 v -1.3746 q 0,-0.22515 -0.1264,-0.32785 -0.1264,-0.1027 -0.33575,-0.1027 -0.2054,0 -0.316,0.0869 -0.1106,0.08295 -0.11455,0.20935 l 0.38315,0.17775 -0.03555,0.23305 q -0.1264,0 -0.1975,0.08295 -0.06715,0.079 -0.06715,0.25675 v 0.35155 q 0,0.2528 -0.13035,0.35155 -0.1264,0.0948 -0.31995,0.0948 z M 77.757093,47 v -1.4694 q 0,-0.17775 -0.08295,-0.25675 -0.08295,-0.08295 -0.2686,-0.08295 -0.1343,0 -0.24885,0.0395 -0.11455,0.03555 -0.21725,0.09085 V 44.9065 q 0.08295,-0.0395 0.237,-0.079 0.15405,-0.0395 0.3634,-0.0395 0.2133,0 0.37525,0.0632 0.16195,0.05925 0.2528,0.2054 0.09085,0.1422 0.09085,0.3871 V 47 Z m 1.08625,0 v -1.3193 q 0,-0.4345 0.2291,-0.6636 0.23305,-0.2291 0.7347,-0.2291 0.50165,0 0.7268,0.2291 0.2291,0.2291 0.2291,0.6636 V 47 h -0.50165 v -1.3272 q 0,-0.2291 -0.11455,-0.35155 -0.1106,-0.1264 -0.3476,-0.1264 -0.237,0 -0.3476,0.1264 -0.1106,0.12245 -0.1106,0.35155 v 0.3792 l 0.01185,0.004 q 0.079,-0.15405 0.1896,-0.20145 0.11455,-0.05135 0.316,-0.05135 h 0.1027 v 0.3871 h -0.1027 q -0.2133,0 -0.32785,0.06715 -0.1106,0.0632 -0.1501,0.1738 -0.0395,0.1106 -0.0395,0.2449 V 47 Z m 3.306153,0.0395 q -0.34365,0 -0.53325,-0.14615 -0.1896,-0.14615 -0.26465,-0.40685 -0.07505,-0.2607 -0.07505,-0.60435 0,-0.57275 0.1659,-0.8295 0.16985,-0.25675 0.49375,-0.25675 0.1422,0 0.24095,0.05135 0.1027,0.05135 0.158,0.1817 h 0.0158 q 0.0474,-0.1343 0.1659,-0.1817 0.1185,-0.05135 0.2607,-0.05135 0.54115,0 0.54115,0.56485 V 47 h -0.50165 v -1.56815 q 0,-0.1343 -0.05135,-0.1817 -0.0474,-0.0474 -0.13035,-0.0474 -0.0869,0 -0.13035,0.0474 -0.04345,0.0474 -0.0553,0.158 h -0.2291 q -0.0158,-0.12245 -0.0711,-0.16195 -0.05135,-0.04345 -0.1185,-0.04345 -0.12245,0 -0.18565,0.158 -0.0632,0.158 -0.0632,0.52535 0,0.3634 0.0869,0.56485 0.0869,0.1975 0.3555,0.1975 0.05925,0 0.1027,-0.0039 0.04345,-0.0079 0.079,-0.01975 l 0.05135,0.3634 q -0.0632,0.02765 -0.1422,0.0395 -0.079,0.01185 -0.1659,0.01185 z m 0.545095,-2.5201 q -0.26465,0 -0.36735,-0.1106 -0.10665,-0.1106 -0.10665,-0.24885 0,-0.0632 0.01975,-0.1343 0.0158,-0.07505 0.05135,-0.1343 l 0.3792,0.0553 q -0.01975,0.0553 -0.01975,0.11455 0,0.05135 0.03555,0.0869 0.0316,0.0316 0.10665,0.0316 h 0.9085 v 0.3397 z m 1.971051,2.5201 q -0.31995,0 -0.5056,-0.1422 -0.18565,-0.1422 -0.26465,-0.39105 -0.07505,-0.24885 -0.07505,-0.56485 0,-0.45425 0.13035,-0.7031 0.13035,-0.2528 0.35945,-0.35155 0.23305,-0.09875 0.5372,-0.09875 0.50955,0 0.7268,0.2133 0.2212,0.2133 0.2212,0.5767 V 47 h -0.50165 v -1.3825 q 0,-0.2054 -0.1027,-0.31205 -0.09875,-0.1106 -0.3397,-0.1106 -0.15405,0 -0.27255,0.0632 -0.1185,0.05925 -0.18565,0.2212 -0.06715,0.158 -0.06715,0.4582 0,0.30415 0.09085,0.50165 0.09085,0.19355 0.33575,0.19355 0.0948,0 0.17775,-0.0237 l 0.0474,0.3792 q -0.05925,0.02765 -0.14615,0.0395 -0.0869,0.01185 -0.1659,0.01185 z m 2.555654,0.0079 q -0.41475,0 -0.632,-0.1896 -0.21725,-0.19355 -0.21725,-0.56485 v -0.1896 q 0,-0.1738 0.0474,-0.28045 0.05135,-0.1106 0.1106,-0.1975 0.06715,-0.0869 0.1106,-0.15405 0.04345,-0.06715 0.04345,-0.15405 0,-0.07505 -0.0395,-0.10665 -0.03555,-0.0316 -0.09085,-0.0316 -0.079,0 -0.18565,0.05135 l -0.09085,-0.32785 q 0.0948,-0.0553 0.2133,-0.07505 0.12245,-0.01975 0.2133,-0.01975 0.2449,0 0.3476,0.1185 0.1027,0.1185 0.1027,0.316 0,0.13035 -0.04345,0.22515 -0.0395,0.0948 -0.09875,0.1896 -0.05925,0.0948 -0.1027,0.17775 -0.0395,0.08295 -0.0395,0.23305 v 0.18565 q 0,0.2212 0.09875,0.3081 0.1027,0.0869 0.25675,0.0869 0.343651,0 0.343651,-0.3555 V 44.8354 h 0.4977 v 1.47335 q 0,0.35945 -0.21725,0.54905 -0.2133,0.1896 -0.628051,0.1896 z m 1.955254,0 q -0.3634,0 -0.6715,-0.1659 l 0.13825,-0.36735 q 0.0869,0.0474 0.2054,0.0869 0.1185,0.0395 0.24885,0.0395 0.2449,0 0.3871,-0.18565 0.14615,-0.18565 0.14615,-0.54905 0,-0.34365 -0.14615,-0.52535 -0.14615,-0.18565 -0.44635,-0.18565 -0.13035,0 -0.26465,0.03555 -0.1343,0.0316 -0.2291,0.0869 v -0.41475 q 0.1185,-0.05925 0.26465,-0.0869 0.1501,-0.02765 0.3081,-0.02765 0.54115,0 0.7821,0.30415 0.24095,0.3002 0.24095,0.8137 0,0.54905 -0.24885,0.8453 -0.2449,0.29625 -0.71495,0.29625 z M 91.238451,47 v -1.4694 q 0,-0.17775 -0.08295,-0.25675 -0.08295,-0.08295 -0.2686,-0.08295 -0.1343,0 -0.24885,0.0395 -0.11455,0.03555 -0.21725,0.09085 V 44.9065 q 0.08295,-0.0395 0.237,-0.079 0.15405,-0.0395 0.3634,-0.0395 0.2133,0 0.37525,0.0632 0.16195,0.05925 0.2528,0.2054 0.09085,0.1422 0.09085,0.3871 V 47 Z m 1.453599,0 -0.6478,-2.1646 h 0.5056 l 0.51745,1.7538 h 0.03555 q 0.0711,0 0.13825,-0.0395 0.0711,-0.0395 0.12245,-0.1027 0.09085,-0.1185 0.1343,-0.28835 0.0474,-0.16985 0.0474,-0.3397 0,-0.2844 -0.1185,-0.4424 -0.1185,-0.16195 -0.32785,-0.16195 -0.0869,0 -0.1422,0.0237 l -0.09875,-0.39105 q 0.0869,-0.0237 0.16195,-0.0316 0.079,-0.0079 0.1343,-0.0079 0.39895,0 0.6241,0.22515 0.13825,0.1343 0.2054,0.33575 0.0711,0.20145 0.0711,0.4503 0,0.316 -0.09875,0.553 -0.09875,0.237 -0.24095,0.3792 -0.1185,0.11455 -0.29625,0.1817 Q 93.24505,47 92.9567,47 Z m 2.638604,0.0395 q -0.34365,0 -0.53325,-0.14615 -0.1896,-0.14615 -0.26465,-0.40685 -0.07505,-0.2607 -0.07505,-0.60435 0,-0.57275 0.1659,-0.8295 0.16985,-0.25675 0.49375,-0.25675 0.1422,0 0.24095,0.05135 0.1027,0.05135 0.158,0.1817 h 0.0158 q 0.0474,-0.1343 0.1659,-0.1817 0.1185,-0.05135 0.2607,-0.05135 0.54115,0 0.54115,0.56485 V 47 h -0.50165 v -1.56815 q 0,-0.1343 -0.05135,-0.1817 -0.0474,-0.0474 -0.13035,-0.0474 -0.0869,0 -0.13035,0.0474 -0.04345,0.0474 -0.0553,0.158 h -0.2291 q -0.0158,-0.12245 -0.0711,-0.16195 -0.05135,-0.04345 -0.1185,-0.04345 -0.12245,0 -0.18565,0.158 -0.0632,0.158 -0.0632,0.52535 0,0.3634 0.0869,0.56485 0.0869,0.1975 0.3555,0.1975 0.05925,0 0.1027,-0.0039 0.04345,-0.0079 0.079,-0.01975 l 0.05135,0.3634 q -0.0632,0.02765 -0.1422,0.0395 -0.079,0.01185 -0.1659,0.01185 z m 0.545095,-2.5201 q -0.26465,0 -0.36735,-0.1106 -0.10665,-0.1106 -0.10665,-0.24885 0,-0.0632 0.01975,-0.1343 0.0158,-0.07505 0.05135,-0.1343 l 0.3792,0.0553 q -0.01975,0.0553 -0.01975,0.11455 0,0.05135 0.03555,0.0869 0.0316,0.0316 0.10665,0.0316 h 0.9085 v 0.3397 z m 1.951302,2.5201 q -0.3555,0 -0.54905,-0.1975 -0.19355,-0.20145 -0.19355,-0.60435 V 44.8354 h 0.50165 v 1.33115 q 0,0.4424 0.39105,0.4424 0.23305,0 0.35945,-0.1659 0.13035,-0.1659 0.13035,-0.4898 V 44.8354 h 0.50165 V 47 h -0.39105 l -0.04345,-0.32785 h -0.0316 q -0.06715,0.158 -0.237,0.26465 -0.1659,0.1027 -0.43845,0.1027 z"
       id="text69"
       style="font-weight:600;font-size:3.95px;font-family:'Noto Sans Thai', sans-serif;fill:#1f2937"
       aria-label="แบบภาคตัดขวางตัน" />
    <rect
       x="119.2"
       y="42.7"
       width="34.0"
       height="6.4"
       rx="3.2"
       fill="#0d5fac"
       id="rect69" />
    <path
       d="m 126.7073,47.146148 q -0.4615,0 -0.67095,-0.213 -0.2059,-0.21655 -0.2059,-0.6248 v -1.153749 h 0.5325 v 1.182149 q 0,0.18815 0.0816,0.28755 0.0852,0.09585 0.2627,0.09585 0.1775,0 0.25915,-0.09585 0.0852,-0.0994 0.0852,-0.28755 v -1.881499 h 0.5325 v 1.853099 q 0,0.40825 -0.20945,0.6248 -0.2059,0.213 -0.6674,0.213 z m 2.0448,0 q -0.20945,0 -0.42245,-0.04615 -0.20945,-0.04615 -0.37275,-0.13135 l 0.1491,-0.42245 q 0.1065,0.0568 0.27335,0.1207 0.16685,0.06035 0.35145,0.06035 0.28755,0 0.28755,-0.16685 0,-0.0923 -0.11005,-0.142 -0.1065,-0.05325 -0.2982,-0.1207 -0.18815,-0.06745 -0.32305,-0.14555 -0.1349,-0.0781 -0.20945,-0.1917 -0.071,-0.1136 -0.071,-0.284 0,-0.2911 0.21655,-0.42955 0.2201,-0.138449 0.58575,-0.138449 0.1988,0 0.35855,0.03195 0.15975,0.03195 0.2485,0.08165 v 0.4189 q -0.0923,-0.0426 -0.25915,-0.08165 -0.16685,-0.0426 -0.32305,-0.0426 -0.29465,0 -0.29465,0.1491 0,0.0852 0.1136,0.1349 0.11715,0.04615 0.3266,0.11715 0.2769,0.09585 0.42245,0.23075 0.1491,0.13135 0.1491,0.3834 0,0.15975 -0.0745,0.30175 -0.071,0.13845 -0.24495,0.2272 -0.17395,0.0852 -0.47925,0.0852 z m 1.5052,-1.1928 q -0.24495,0 -0.34435,-0.1065 -0.0958,-0.11005 -0.0958,-0.25205 0,-0.12425 0.071,-0.2556 l 0.38695,0.0497 q -0.0178,0.05325 -0.0178,0.1136 0,0.04615 0.0284,0.07455 0.0284,0.02485 0.0994,0.02485 h 0.40115 v 0.35145 z m 0,0.994 q -0.24495,0 -0.34435,-0.1065 -0.0958,-0.11005 -0.0958,-0.25205 0,-0.12425 0.071,-0.2556 l 0.38695,0.0497 q -0.0178,0.05325 -0.0178,0.1136 0,0.04615 0.0284,0.07455 0.0284,0.02485 0.0994,0.02485 h 0.40115 v 0.35145 z m 1.4839,0.18815 q -0.23785,0 -0.36565,-0.11005 -0.1278,-0.1136 -0.1278,-0.34435 v -1.526499 h 0.5325 v 1.462599 q 0,0.13135 0.12425,0.13135 0.0532,0 0.1207,-0.02485 l 0.0497,0.3408 q -0.1349,0.071 -0.3337,0.071 z m 0.82005,0 q -0.0994,0 -0.18105,-0.0213 -0.0816,-0.01775 -0.14555,-0.05325 l 0.0497,-0.29465 q 0.0426,0.0142 0.0923,0.0142 0.1136,0 0.1136,-0.12425 v -0.25915 q 0,-0.17395 0.071,-0.2698 0.071,-0.0994 0.21655,-0.1349 l 0.004,-0.0142 -0.38695,-0.13845 v -0.0923 q 0,-0.17395 0.0994,-0.3195 0.0994,-0.14555 0.2982,-0.23075 0.1988,-0.08875 0.4899,-0.08875 0.4118,0 0.64965,0.188149 0.23785,0.1846 0.23785,0.5609 v 1.2425 h -0.5325 v -1.21055 q 0,-0.1775 -0.0958,-0.26625 -0.0923,-0.08875 -0.26625,-0.08875 -0.1633,0 -0.24495,0.071 -0.0816,0.06745 -0.0888,0.16685 l 0.30885,0.13845 -0.0391,0.23075 q -0.20235,0 -0.20235,0.2769 v 0.2982 q 0,0.2272 -0.1278,0.32305 -0.12425,0.09585 -0.3195,0.09585 z m 2.12999,-0.0355 v -1.945399 h 0.3905 l 0.071,0.305299 h 0.0284 q 0.0603,-0.14555 0.20945,-0.2414 0.1491,-0.0994 0.38695,-0.0994 0.67805,0 0.67805,0.727749 v 1.25315 h -0.5325 v -1.14665 q 0,-0.1988 -0.0816,-0.284 -0.0781,-0.08875 -0.23075,-0.08875 -0.1846,0 -0.28755,0.1491 -0.0994,0.1491 -0.0994,0.4402 v 0.9301 z m 4.402,0 h -0.53605 v -1.46615 q 0,-0.0923 0.004,-0.2414 0.007,-0.1491 0.0106,-0.262699 -0.0178,0.0213 -0.0781,0.0781 -0.0568,0.05325 -0.1065,0.09585 l -0.2911,0.2343 -0.25915,-0.32305 0.8165,-0.649649 h 0.4402 z m 1.65785,-1.29575 q 0,-0.2982 0.142,-0.42245 0.14555,-0.1278 0.355,-0.1278 0.13845,0 0.2485,0.0568 0.1136,0.05325 0.18105,0.17395 0.0675,0.1207 0.0675,0.3195 0,0.2911 -0.14555,0.42245 -0.14555,0.1278 -0.35145,0.1278 -0.20945,0 -0.355,-0.1278 -0.142,-0.13135 -0.142,-0.42245 z m 2.93585,1.29575 h -0.52895 v -2.534699 h 1.45195 v 0.4402 h -0.923 v 0.653199 h 0.8591 v 0.4402 h -0.8591 z m 2.99975,-1.26735 q 0,0.40825 -0.0888,0.69935 -0.0852,0.2911 -0.28045,0.4473 -0.1917,0.1562 -0.5183,0.1562 -0.45795,0 -0.67095,-0.34435 -0.213,-0.3479 -0.213,-0.9585 0,-0.4118 0.0852,-0.702899 0.0852,-0.2911 0.28045,-0.4473 0.19525,-0.1562 0.5183,-0.1562 0.4544,0 0.67095,0.34435 0.21655,0.344349 0.21655,0.962049 z m -1.23895,0 q 0,0.4331 0.0745,0.6532 0.0745,0.21655 0.2769,0.21655 0.1988,0 0.2769,-0.21655 0.0781,-0.21655 0.0781,-0.6532 0,-0.4331 -0.0781,-0.6532 -0.0781,-0.220099 -0.2769,-0.220099 -0.20235,0 -0.2769,0.220099 -0.0745,0.2201 -0.0745,0.6532 z"
       id="text70"
       style="font-weight:700;font-size:3.55px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#ffffff"
       aria-label="ประเภท 1 • F0" />
    <line
       x1="66.8"
       y1="50.8"
       x2="153.2"
       y2="50.8"
       stroke="#0d5fac"
       stroke-width="0.55"
       id="line70" />
    <path
       d="m 68.104498,56.141998 q -0.3675,0 -0.56,-0.168 -0.1925,-0.1715 -0.1925,-0.5005 v -0.168 q 0,-0.154 0.042,-0.2485 0.0455,-0.098 0.098,-0.175 0.0595,-0.077 0.098,-0.1365 0.0385,-0.0595 0.0385,-0.1365 0,-0.0665 -0.035,-0.0945 -0.0315,-0.028 -0.0805,-0.028 -0.07,0 -0.1645,0.0455 l -0.0805,-0.2905 q 0.084,-0.049 0.189,-0.0665 0.1085,-0.0175 0.189,-0.0175 0.217,0 0.308,0.105 0.091,0.105 0.091,0.28 0,0.1155 -0.0385,0.1995 -0.035,0.084 -0.0875,0.168 -0.0525,0.084 -0.091,0.1575 -0.035,0.0735 -0.035,0.2065 v 0.1645 q 0,0.196 0.0875,0.273 0.091,0.077 0.2275,0.077 0.3045,0 0.3045,-0.315 v -1.2915 h 0.441 v 1.3055 q 0,0.3185 -0.1925,0.4865 -0.189,0.168 -0.5565,0.168 z m 1.925003,-0.007 q -0.315,0 -0.4865,-0.175 -0.1715,-0.1785 -0.1715,-0.5355 v -1.2425 h 0.4445 v 1.1795 q 0,0.392 0.3465,0.392 0.2065,0 0.3185,-0.147 0.1155,-0.147 0.1155,-0.434 v -0.9905 h 0.4445 v 1.918 h -0.3465 l -0.0385,-0.2905 h -0.028 q -0.0595,0.14 -0.21,0.2345 -0.147,0.091 -0.3885,0.091 z m 2.082503,-0.035 v -1.302 q 0,-0.1575 -0.0735,-0.2275 -0.0735,-0.0735 -0.238,-0.0735 -0.119,0 -0.2205,0.035 -0.1015,0.0315 -0.1925,0.0805 v -0.3675 q 0.0735,-0.035 0.21,-0.07 0.1365,-0.035 0.322,-0.035 0.189,0 0.3325,0.056 0.1435,0.0525 0.224,0.182 0.0805,0.126 0.0805,0.343 v 1.379 z m 1.637999,0.035 q -0.2835,0 -0.448,-0.126 -0.1645,-0.126 -0.2345,-0.3465 -0.0665,-0.2205 -0.0665,-0.5005 0,-0.4025 0.1155,-0.623 0.1155,-0.224 0.3185,-0.3115 0.2065,-0.0875 0.476,-0.0875 0.4515,0 0.644,0.189 0.196,0.189 0.196,0.511 v 1.26 h -0.4445 v -1.225 q 0,-0.182 -0.091,-0.2765 -0.0875,-0.098 -0.301,-0.098 -0.1365,0 -0.2415,0.056 -0.105,0.0525 -0.1645,0.196 -0.0595,0.14 -0.0595,0.406 0,0.2695 0.0805,0.4445 0.0805,0.1715 0.2975,0.1715 0.084,0 0.1575,-0.021 l 0.042,0.336 q -0.0525,0.0245 -0.1295,0.035 -0.077,0.0105 -0.147,0.0105 z m 2.310004,-0.994 q 0,-0.427 0.1225,-0.8225 0.126,-0.399 0.392,-0.7175 h 0.3745 q -0.2415,0.329 -0.364,0.7245 -0.1225,0.3955 -0.1225,0.812 0,0.406 0.1225,0.798 0.1225,0.392 0.3605,0.7175 h -0.371 q -0.266,-0.308 -0.392,-0.6965 -0.1225,-0.392 -0.1225,-0.8155 z m 1.235498,0.959 v -0.616 q 0,-0.2205 0.091,-0.329 0.091,-0.112 0.2485,-0.1575 l 0.0035,-0.014 -0.378,-0.14 v -0.1015 q 0,-0.161 0.098,-0.2975 0.1015,-0.1365 0.2905,-0.2205 0.189,-0.084 0.4585,-0.084 0.245,0 0.434,0.077 0.189,0.077 0.2975,0.2345 0.1085,0.1575 0.1085,0.399 v 1.2495 h -0.4445 v -1.218 q 0,-0.1995 -0.112,-0.2905 -0.112,-0.091 -0.294,-0.091 -0.182,0 -0.28,0.077 -0.098,0.0735 -0.1015,0.1855 l 0.3395,0.161 -0.035,0.2065 q -0.1295,0.0035 -0.2065,0.0875 -0.0735,0.084 -0.0735,0.245 v 0.637 z m 2.635499,0.042 q -0.322,0 -0.595,-0.147 l 0.1225,-0.3255 q 0.077,0.042 0.182,0.077 0.105,0.035 0.2205,0.035 0.217,0 0.343,-0.1645 0.1295,-0.1645 0.1295,-0.4865 0,-0.3045 -0.1295,-0.4655 -0.1295,-0.1645 -0.3955,-0.1645 -0.1155,0 -0.2345,0.0315 -0.119,0.028 -0.203,0.077 v -0.3675 q 0.105,-0.0525 0.2345,-0.077 0.133,-0.0245 0.273,-0.0245 0.4795,0 0.693,0.2695 0.2135,0.266 0.2135,0.721 0,0.4865 -0.2205,0.749 -0.217,0.2625 -0.6335,0.2625 z m -0.2065,-2.24 v -0.1645 q 0.056,-0.014 0.1225,-0.0385 0.063,-0.028 0.112,-0.07 0.0455,-0.042 0.0455,-0.105 0,-0.105 -0.1015,-0.105 -0.0315,0 -0.063,0.014 -0.035,0.0105 -0.0595,0.021 l -0.07,-0.217 q 0.07,-0.0595 0.168,-0.077 0.0945,-0.021 0.161,-0.021 0.1505,0 0.2345,0.077 0.084,0.077 0.084,0.21 0,0.098 -0.0595,0.175 h 0.546 v 0.301 z m 2.033502,2.198 v -1.302 q 0,-0.1575 -0.0735,-0.2275 -0.0735,-0.0735 -0.238,-0.0735 -0.119,0 -0.2205,0.035 -0.1015,0.0315 -0.1925,0.0805 v -0.3675 q 0.0735,-0.035 0.21,-0.07 0.1365,-0.035 0.322,-0.035 0.189,0 0.3325,0.056 0.1435,0.0525 0.224,0.182 0.0805,0.126 0.0805,0.343 v 1.379 z m 1.287999,0 -0.574,-1.918 h 0.448 l 0.4585,1.554 h 0.0315 q 0.063,0 0.1225,-0.035 0.063,-0.035 0.1085,-0.091 0.0805,-0.105 0.119,-0.2555 0.042,-0.1505 0.042,-0.301 0,-0.252 -0.105,-0.392 -0.105,-0.1435 -0.2905,-0.1435 -0.077,0 -0.126,0.021 l -0.0875,-0.3465 q 0.077,-0.021 0.1435,-0.028 0.07,-0.007 0.119,-0.007 0.3535,0 0.553,0.1995 0.1225,0.119 0.182,0.2975 0.063,0.1785 0.063,0.399 0,0.28 -0.0875,0.49 -0.0875,0.21 -0.2135,0.336 -0.105,0.1015 -0.2625,0.161 -0.154,0.0595 -0.4095,0.0595 z m 3.825504,-2.0125 0.2275,0.2275 -0.5495,0.5495 0.546,0.546 -0.2275,0.231 -0.5495,-0.546 -0.5425,0.5425 -0.2275,-0.2275 0.539,-0.546 -0.5425,-0.5425 0.231,-0.2345 0.5425,0.546 z m 1.655502,2.0125 v -1.918 h 0.441 v 0.7595 h 0.0105 l 0.672,-0.7595 h 0.497 v 0.014 l -0.5285,0.567 q 0.2625,0.035 0.3955,0.2065 0.1365,0.1715 0.1365,0.427 v 0.7035 h -0.4445 v -0.651 q 0,-0.343 -0.3745,-0.378 l -0.364,0.392 v 0.637 z m 2.757997,0.035 q -0.315,0 -0.4865,-0.175 -0.1715,-0.1785 -0.1715,-0.5355 v -1.2425 h 0.4445 v 1.1795 q 0,0.392 0.3465,0.392 0.2065,0 0.3185,-0.147 0.1155,-0.147 0.1155,-0.434 v -0.9905 h 0.4445 v 1.918 h -0.3465 l -0.0385,-0.2905 h -0.028 q -0.0595,0.14 -0.21,0.2345 -0.147,0.091 -0.3885,0.091 z m 2.082501,-0.035 v -1.302 q 0,-0.1575 -0.0735,-0.2275 -0.0735,-0.0735 -0.238,-0.0735 -0.119,0 -0.2205,0.035 -0.1015,0.0315 -0.1925,0.0805 v -0.3675 q 0.0735,-0.035 0.21,-0.07 0.1365,-0.035 0.322,-0.035 0.189,0 0.3325,0.056 0.1435,0.0525 0.224,0.182 0.0805,0.126 0.0805,0.343 v 1.379 z m 3.160501,-2.0125 0.2275,0.2275 -0.5495,0.5495 0.546,0.546 -0.2275,0.231 -0.5495,-0.546 -0.5425,0.5425 -0.2275,-0.2275 0.539,-0.546 -0.5425,-0.5425 0.231,-0.2345 0.5425,0.546 z m 2.408003,2.051 q -0.301,0 -0.4865,-0.0735 -0.182,-0.0735 -0.2625,-0.2065 -0.0805,-0.1365 -0.0805,-0.3185 0,-0.154 0.0455,-0.2485 0.049,-0.0945 0.1225,-0.1435 0.0735,-0.049 0.1505,-0.0665 v -0.021 q -0.077,-0.021 -0.1505,-0.07 -0.0735,-0.0525 -0.1225,-0.1365 -0.049,-0.084 -0.049,-0.2135 0,-0.126 0.0595,-0.238 0.0595,-0.112 0.189,-0.1785 0.133,-0.07 0.3535,-0.07 0.098,0 0.1925,0.014 0.098,0.014 0.154,0.042 l -0.07,0.3115 q -0.035,-0.0105 -0.0875,-0.021 -0.0525,-0.0105 -0.105,-0.0105 -0.126,0 -0.1855,0.0595 -0.056,0.056 -0.056,0.1505 0,0.098 0.049,0.1505 0.0525,0.0525 0.133,0.0735 0.0805,0.0175 0.168,0.0175 h 0.0735 v 0.287 h -0.0735 q -0.1715,0 -0.2555,0.063 -0.084,0.0595 -0.084,0.1995 0,0.077 0.0315,0.147 0.0315,0.07 0.1155,0.1155 0.084,0.042 0.238,0.042 0.2205,0 0.301,-0.091 0.084,-0.0945 0.084,-0.245 v -1.2775 h 0.4445 v 1.26 q 0,0.364 -0.203,0.532 -0.1995,0.1645 -0.6335,0.1645 z m 1.875997,-0.0385 v -1.302 q 0,-0.1575 -0.0735,-0.2275 -0.0735,-0.0735 -0.238,-0.0735 -0.119,0 -0.2205,0.035 -0.1015,0.0315 -0.1925,0.0805 v -0.3675 q 0.0735,-0.035 0.21,-0.07 0.1365,-0.035 0.322,-0.035 0.189,0 0.3325,0.056 0.1435,0.0525 0.224,0.182 0.0805,0.126 0.0805,0.343 v 1.379 z m 1.428,0.042 q -0.322,0 -0.595,-0.147 l 0.1225,-0.3255 q 0.077,0.042 0.182,0.077 0.105,0.035 0.2205,0.035 0.217,0 0.343,-0.1645 0.1295,-0.1645 0.1295,-0.4865 0,-0.3045 -0.1295,-0.4655 -0.1295,-0.1645 -0.3955,-0.1645 -0.1155,0 -0.2345,0.0315 -0.119,0.028 -0.203,0.077 v -0.3675 q 0.105,-0.0525 0.2345,-0.077 0.133,-0.0245 0.273,-0.0245 0.4795,0 0.693,0.2695 0.2135,0.266 0.2135,0.721 0,0.4865 -0.2205,0.749 -0.217,0.2625 -0.6335,0.2625 z m 2.0405,-1.001 q 0,0.4235 -0.126,0.8155 -0.1225,0.3885 -0.3885,0.6965 h -0.371 q 0.238,-0.3255 0.3605,-0.7175 0.126,-0.392 0.126,-0.798 0,-0.4165 -0.126,-0.812 -0.1225,-0.3955 -0.364,-0.7245 h 0.3745 q 0.266,0.3185 0.3885,0.7175 0.126,0.3955 0.126,0.8225 z"
       id="text71"
       style="font-weight:600;font-size:3.5px;font-family:'Noto Sans Thai', sans-serif;fill:#0d5fac"
       aria-label="ขนาด (กว้าง × หนา × ยาว)" />
    <path
       d="m 69.995198,59.286402 q 0,0.42 -0.2576,0.672 -0.252,0.2464 -0.616,0.336 v 0.0168 q 0.4816,0.056 0.7336,0.2912 0.2576,0.2352 0.2576,0.644 0,0.336 -0.1736,0.6104 -0.1736,0.2744 -0.5376,0.4368 -0.3584,0.1624 -0.9296,0.1624 -0.3528,0 -0.6328,-0.056 -0.28,-0.056 -0.5376,-0.1624 v -0.8008 q 0.2576,0.1344 0.5376,0.2016 0.28,0.0616 0.5152,0.0616 0.4256,0 0.588,-0.1344 0.168,-0.14 0.168,-0.3808 0,-0.1456 -0.0784,-0.252 -0.0784,-0.112 -0.28,-0.168 -0.196,-0.056 -0.5544,-0.056 h -0.2744 v -0.7224 h 0.28 q 0.3416,0 0.5264,-0.0616 0.1904,-0.0616 0.2632,-0.168 0.0728,-0.112 0.0728,-0.252 0,-0.392 -0.5152,-0.392 -0.28,0 -0.4928,0.1008 -0.2128,0.1008 -0.3304,0.1736 l -0.42,-0.644 q 0.2408,-0.168 0.56,-0.28 0.3192,-0.1176 0.7952,-0.1176 0.616,0 0.9744,0.2464 0.3584,0.2464 0.3584,0.6944 z m 2.083195,0.5264 q 0.3528,0 0.6328,0.1456 0.28,0.1456 0.4424,0.4256 0.1624,0.28 0.1624,0.6776 0,0.6608 -0.4032,1.0304 -0.3976,0.364 -1.204,0.364 -0.6776,0 -1.1032,-0.2184 v -0.8008 q 0.2072,0.1064 0.4984,0.1848 0.2968,0.0728 0.5488,0.0728 0.3416,0 0.5208,-0.14 0.1848,-0.1456 0.1848,-0.4368 0,-0.2632 -0.1848,-0.4032 -0.1792,-0.1456 -0.5544,-0.1456 -0.1512,0 -0.308,0.0336 -0.1568,0.028 -0.2688,0.056 l -0.364,-0.1848 0.1512,-2.072 h 2.2176 v 0.8008 h -1.4 l -0.0616,0.6664 q 0.0896,-0.0168 0.1904,-0.0336 0.1064,-0.0224 0.3024,-0.0224 z m 4.530395,0.588 q 0,0.644 -0.14,1.1032 -0.1344,0.4592 -0.448,0.7056 -0.308,0.2464 -0.8288,0.2464 -0.7392,0 -1.0808,-0.5432 -0.336,-0.5432 -0.336,-1.512 0,-0.644 0.1344,-1.1032 0.1344,-0.4648 0.4424,-0.7112 0.3136,-0.2464 0.84,-0.2464 0.728,0 1.0696,0.5432 0.3472,0.5432 0.3472,1.5176 z m -1.8872,0 q 0,0.644 0.0952,0.9688 0.0952,0.3192 0.3752,0.3192 0.2688,0 0.3696,-0.3192 0.1008,-0.3248 0.1008,-0.9688 0,-0.6384 -0.1008,-0.9632 -0.1008,-0.3304 -0.3696,-0.3304 -0.28,0 -0.3752,0.3304 -0.0952,0.3248 -0.0952,0.9632 z m 5.947196,-1.2208 0.4648,0.448 -0.7952,0.7952 0.784,0.7896 -0.4536,0.4536 -0.7952,-0.784 -0.784,0.7784 -0.448,-0.4536 0.7672,-0.784 -0.7728,-0.784 0.4536,-0.4592 0.784,0.7728 z m 4.031997,0.6328 q 0.3528,0 0.6328,0.1456 0.28,0.1456 0.4424,0.4256 0.1624,0.28 0.1624,0.6776 0,0.6608 -0.4032,1.0304 -0.3976,0.364 -1.204,0.364 -0.6776,0 -1.1032,-0.2184 v -0.8008 q 0.2072,0.1064 0.4984,0.1848 0.2968,0.0728 0.5488,0.0728 0.3416,0 0.5208,-0.14 0.1848,-0.1456 0.1848,-0.4368 0,-0.2632 -0.1848,-0.4032 -0.1792,-0.1456 -0.5544,-0.1456 -0.1512,0 -0.308,0.0336 -0.1568,0.028 -0.2688,0.056 l -0.364,-0.1848 0.1512,-2.072 h 2.2176 v 0.8008 h -1.4 l -0.0616,0.6664 q 0.0896,-0.0168 0.1904,-0.0336 0.1064,-0.0224 0.3024,-0.0224 z m 4.530395,0.588 q 0,0.644 -0.14,1.1032 -0.1344,0.4592 -0.448,0.7056 -0.308,0.2464 -0.8288,0.2464 -0.7392,0 -1.0808,-0.5432 -0.336,-0.5432 -0.336,-1.512 0,-0.644 0.1344,-1.1032 0.1344,-0.4648 0.4424,-0.7112 0.3136,-0.2464 0.84,-0.2464 0.728,0 1.0696,0.5432 0.3472,0.5432 0.3472,1.5176 z m -1.8872,0 q 0,0.644 0.0952,0.9688 0.0952,0.3192 0.3752,0.3192 0.2688,0 0.3696,-0.3192 0.1008,-0.3248 0.1008,-0.9688 0,-0.6384 -0.1008,-0.9632 -0.1008,-0.3304 -0.3696,-0.3304 -0.28,0 -0.3752,0.3304 -0.0952,0.3248 -0.0952,0.9632 z m 5.947195,-1.2208 0.4648,0.448 -0.7952,0.7952 0.784,0.7896 -0.4536,0.4536 -0.7952,-0.784 -0.784,0.7784 -0.448,-0.4536 0.7672,-0.784 -0.7728,-0.784 0.4536,-0.4592 0.784,0.7728 z m 5.185597,0.1064 q 0,0.42 -0.2576,0.672 -0.252,0.2464 -0.616,0.336 v 0.0168 q 0.4816,0.056 0.7336,0.2912 0.2576,0.2352 0.2576,0.644 0,0.336 -0.1736,0.6104 -0.1736,0.2744 -0.5376,0.4368 -0.3584,0.1624 -0.9296,0.1624 -0.3528,0 -0.6328,-0.056 -0.28,-0.056 -0.5376,-0.1624 v -0.8008 q 0.2576,0.1344 0.5376,0.2016 0.28,0.0616 0.5152,0.0616 0.4256,0 0.588,-0.1344 0.168,-0.14 0.168,-0.3808 0,-0.1456 -0.0784,-0.252 -0.0784,-0.112 -0.28,-0.168 -0.196,-0.056 -0.5544,-0.056 h -0.2744 v -0.7224 h 0.28 q 0.3416,0 0.5264,-0.0616 0.1904,-0.0616 0.2632,-0.168 0.0728,-0.112 0.0728,-0.252 0,-0.392 -0.5152,-0.392 -0.28,0 -0.4928,0.1008 -0.2128,0.1008 -0.3304,0.1736 l -0.42,-0.644 q 0.2408,-0.168 0.56,-0.28 0.3192,-0.1176 0.7952,-0.1176 0.616,0 0.9744,0.2464 0.3584,0.2464 0.3584,0.6944 z m 1.663192,2.4472 q -0.0504,0.2016 -0.1288,0.4536 -0.0784,0.252 -0.167997,0.504 -0.0896,0.252 -0.1848,0.4592 h -0.672 q 0.0784,-0.3584 0.1512,-0.7616 0.0784,-0.4032 0.1176,-0.7168 h 0.845597 z m 3.3712,-1.3328 q 0,0.644 -0.14,1.1032 -0.1344,0.4592 -0.448,0.7056 -0.308,0.2464 -0.8288,0.2464 -0.7392,0 -1.0808,-0.5432 -0.336,-0.5432 -0.336,-1.512 0,-0.644 0.1344,-1.1032 0.1344,-0.4648 0.4424,-0.7112 0.3136,-0.2464 0.84,-0.2464 0.728,0 1.0696,0.5432 0.3472,0.5432 0.3472,1.5176 z m -1.8872,0 q 0,0.644 0.0952,0.9688 0.0952,0.3192 0.3752,0.3192 0.2688,0 0.3696,-0.3192 0.1008,-0.3248 0.1008,-0.9688 0,-0.6384 -0.1008,-0.9632 -0.1008,-0.3304 -0.3696,-0.3304 -0.28,0 -0.3752,0.3304 -0.0952,0.3248 -0.0952,0.9632 z m 5.124,0 q 0,0.644 -0.14,1.1032 -0.1344,0.4592 -0.448,0.7056 -0.308,0.2464 -0.8288,0.2464 -0.7392,0 -1.0808,-0.5432 -0.336,-0.5432 -0.336,-1.512 0,-0.644 0.1344,-1.1032 0.1344,-0.4648 0.4424,-0.7112 0.3136,-0.2464 0.84,-0.2464 0.728,0 1.0696,0.5432 0.3472,0.5432 0.3472,1.5176 z m -1.8872,0 q 0,0.644 0.0952,0.9688 0.0952,0.3192 0.3752,0.3192 0.2688,0 0.3696,-0.3192 0.1008,-0.3248 0.1008,-0.9688 0,-0.6384 -0.1008,-0.9632 -0.1008,-0.3304 -0.3696,-0.3304 -0.28,0 -0.3752,0.3304 -0.0952,0.3248 -0.0952,0.9632 z m 5.12399,0 q 0,0.644 -0.14,1.1032 -0.1344,0.4592 -0.448,0.7056 -0.308,0.2464 -0.8288,0.2464 -0.7392,0 -1.0808,-0.5432 -0.336,-0.5432 -0.336,-1.512 0,-0.644 0.1344,-1.1032 0.1344,-0.4648 0.4424,-0.7112 0.3136,-0.2464 0.84,-0.2464 0.728,0 1.0696,0.5432 0.3472,0.5432 0.3472,1.5176 z m -1.8872,0 q 0,0.644 0.0952,0.9688 0.0952,0.3192 0.3752,0.3192 0.2688,0 0.3696,-0.3192 0.1008,-0.3248 0.1008,-0.9688 0,-0.6384 -0.1008,-0.9632 -0.1008,-0.3304 -0.3696,-0.3304 -0.28,0 -0.3752,0.3304 -0.0952,0.3248 -0.0952,0.9632 z m 7.6272,-1.1312 q 0.5264,0 0.7952,0.2688 0.2744,0.2632 0.2744,0.8568 v 2.0048 h -0.9408 v -1.7416 q 0,-0.336 -0.1064,-0.4872 -0.1008,-0.1568 -0.3136,-0.1568 -0.2968,0 -0.42,0.2352 -0.1232,0.2296 -0.1232,0.6552 v 1.4952 h -0.9408 v -1.7416 q 0,-0.644 -0.4144,-0.644 -0.3136,0 -0.4312,0.2576 -0.112,0.252 -0.112,0.728 v 1.4 h -0.9464 v -3.0744 h 0.7168 l 0.1344,0.3864 h 0.0392 q 0.1288,-0.2128 0.364,-0.3248 0.2408,-0.1176 0.5432,-0.1176 0.6608,0 0.924,0.4368 h 0.056 q 0.1456,-0.2184 0.3864,-0.3248 0.2408,-0.112 0.5152,-0.112 z m 5.54399,0 q 0.5264,0 0.7952,0.2688 0.2744,0.2632 0.2744,0.8568 v 2.0048 h -0.9408 v -1.7416 q 0,-0.336 -0.1064,-0.4872 -0.1008,-0.1568 -0.3136,-0.1568 -0.2968,0 -0.42,0.2352 -0.1232,0.2296 -0.1232,0.6552 v 1.4952 h -0.9408 v -1.7416 q 0,-0.644 -0.4144,-0.644 -0.3136,0 -0.4312,0.2576 -0.112,0.252 -0.112,0.728 v 1.4 h -0.9464 v -3.0744 h 0.7168 l 0.1344,0.3864 h 0.0392 q 0.1288,-0.2128 0.364,-0.3248 0.2408,-0.1176 0.5432,-0.1176 0.6608,0 0.924,0.4368 h 0.056 q 0.1456,-0.2184 0.3864,-0.3248 0.2408,-0.112 0.5152,-0.112 z"
       id="text72"
       style="font-weight:800;font-size:5.6px;font-family:'Noto Sans Thai', sans-serif;fill:#1f2937"
       aria-label="350 × 50 × 3,000 mm" />
    <path
       d="m 67.936248,68.0375 q -0.32625,0 -0.5025,-0.15375 -0.1725,-0.15375 -0.1725,-0.43125 0,-0.30375 0.2175,-0.48 0.22125,-0.17625 0.705,-0.21 l 0.37875,-0.03 v -0.07875 q 0,-0.20625 -0.105,-0.2925 -0.10125,-0.09 -0.32625,-0.09 -0.19125,0 -0.37125,0.05625 -0.18,0.05625 -0.3225,0.13875 V 66.0575 q 0.10875,-0.0525 0.3,-0.105 0.195,-0.0525 0.44625,-0.0525 0.25875,0 0.44625,0.075 0.19125,0.07125 0.2925,0.24 0.105,0.165 0.105,0.4425 V 68 h -0.465 v -0.9075 l -0.3225,0.02625 q -0.285,0.02625 -0.39375,0.105 -0.10875,0.075 -0.10875,0.21375 0,0.13125 0.0825,0.19875 0.08625,0.06375 0.2325,0.06375 0.0525,0 0.0975,-0.0075 0.04875,-0.01125 0.09,-0.0225 l 0.0525,0.31125 q -0.15,0.05625 -0.35625,0.05625 z m 2.144998,0.0075 q -0.345,0 -0.6375,-0.1575 l 0.13125,-0.34875 q 0.0825,0.045 0.195,0.0825 0.1125,0.0375 0.23625,0.0375 0.2325,0 0.3675,-0.17625 0.13875,-0.17625 0.13875,-0.52125 0,-0.32625 -0.13875,-0.49875 -0.13875,-0.17625 -0.42375,-0.17625 -0.12375,0 -0.25125,0.03375 -0.1275,0.03 -0.2175,0.0825 v -0.39375 q 0.1125,-0.05625 0.25125,-0.0825 0.1425,-0.02625 0.2925,-0.02625 0.51375,0 0.7425,0.28875 0.22875,0.285 0.22875,0.7725 0,0.52125 -0.23625,0.8025 -0.2325,0.28125 -0.67875,0.28125 z m 2.122502,-0.0075 q -0.30375,0 -0.48,-0.135 -0.17625,-0.135 -0.25125,-0.37125 -0.07125,-0.23625 -0.07125,-0.53625 0,-0.43125 0.12375,-0.6675 0.12375,-0.24 0.34125,-0.33375 0.22125,-0.09375 0.51,-0.09375 0.48375,0 0.69,0.2025 0.21,0.2025 0.21,0.5475 V 68 h -0.47625 v -1.3125 q 0,-0.195 -0.0975,-0.29625 -0.09375,-0.105 -0.3225,-0.105 -0.14625,0 -0.25875,0.06 -0.1125,0.05625 -0.17625,0.21 -0.06375,0.15 -0.06375,0.435 0,0.28875 0.08625,0.47625 0.08625,0.18375 0.31875,0.18375 0.09,0 0.16875,-0.0225 l 0.045,0.36 q -0.05625,0.02625 -0.13875,0.0375 -0.0825,0.01125 -0.1575,0.01125 z m 2.411253,0.0075 q -0.43875,0 -0.6525,-0.2175 -0.21,-0.22125 -0.21,-0.66375 0,-0.075 0.0038,-0.17625 0.0037,-0.10125 0.015,-0.18375 h 0.85875 v 0.3225 h -0.40875 v 0.06 q 0,0.27375 0.09375,0.38625 0.0975,0.1125 0.29625,0.1125 0.13875,0 0.24,-0.06 0.105,-0.06 0.1575,-0.20625 0.05625,-0.15 0.05625,-0.41625 0,-0.36 -0.1275,-0.53625 -0.12375,-0.18 -0.44625,-0.18 -0.1725,0 -0.34875,0.04875 -0.1725,0.04875 -0.3,0.12375 V 66.05 q 0.11625,-0.06375 0.315,-0.105 0.2025,-0.045 0.4125,-0.045 0.3525,0 0.56625,0.135 0.2175,0.13125 0.315,0.375 0.10125,0.24375 0.10125,0.57375 0,0.50625 -0.2175,0.78375 -0.21375,0.2775 -0.72,0.2775 z m 0.28125,-2.4 q -0.25125,0 -0.34875,-0.105 -0.10125,-0.105 -0.10125,-0.23625 0,-0.06 0.01875,-0.1275 0.015,-0.07125 0.04875,-0.1275 l 0.36,0.0525 q -0.01875,0.0525 -0.01875,0.10875 0,0.04875 0.03375,0.0825 0.03,0.03 0.10125,0.03 h 0.8625 v 0.3225 z m 1.856252,2.3925 q -0.30375,0 -0.48,-0.135 -0.17625,-0.135 -0.25125,-0.37125 -0.07125,-0.23625 -0.07125,-0.53625 0,-0.43125 0.12375,-0.6675 0.12375,-0.24 0.34125,-0.33375 0.22125,-0.09375 0.51,-0.09375 0.48375,0 0.69,0.2025 0.21,0.2025 0.21,0.5475 V 68 h -0.47625 v -1.3125 q 0,-0.195 -0.0975,-0.29625 -0.09375,-0.105 -0.3225,-0.105 -0.14625,0 -0.25875,0.06 -0.1125,0.05625 -0.17625,0.21 -0.06375,0.15 -0.06375,0.435 0,0.28875 0.08625,0.47625 0.08625,0.18375 0.31875,0.18375 0.09,0 0.16875,-0.0225 l 0.045,0.36 q -0.05625,0.02625 -0.13875,0.0375 -0.0825,0.01125 -0.1575,0.01125 z m 2.163753,0 q -0.2175,0 -0.34875,-0.10125 -0.13125,-0.105 -0.13125,-0.345 V 65.945 h 0.47625 v 1.58625 q 0,0.15 0.1425,0.15 0.05625,0 0.13125,-0.02625 l 0.0525,0.315 q -0.07125,0.03375 -0.15375,0.04875 -0.0825,0.01875 -0.16875,0.01875 z m 1.0875,0 q -0.2175,0 -0.34875,-0.10125 -0.13125,-0.105 -0.13125,-0.345 V 65.945 h 0.47625 v 1.58625 q 0,0.15 0.1425,0.15 0.05625,0 0.13125,-0.02625 l 0.0525,0.315 q -0.07125,0.03375 -0.15375,0.04875 -0.0825,0.01875 -0.16875,0.01875 z m 1.312499,0.0075 q -0.22125,0 -0.43125,-0.045 -0.21,-0.04875 -0.3675,-0.1275 l 0.135,-0.37875 q 0.11625,0.05625 0.28875,0.1125 0.1725,0.05625 0.36375,0.05625 0.16875,0 0.26625,-0.0525 0.0975,-0.05625 0.0975,-0.165 0,-0.10875 -0.1125,-0.1725 -0.10875,-0.0675 -0.3225,-0.13875 -0.21375,-0.07125 -0.36375,-0.15375 -0.15,-0.0825 -0.22875,-0.2025 -0.07875,-0.12 -0.07875,-0.3 0,-0.2775 0.21375,-0.4275 0.2175,-0.15 0.615,-0.15 0.19875,0 0.36375,0.03375 0.165,0.03375 0.25875,0.08625 v 0.3825 q -0.0975,-0.045 -0.27,-0.08625 -0.1725,-0.045 -0.34125,-0.045 -0.19125,0 -0.2775,0.05625 -0.08625,0.05625 -0.08625,0.13875 0,0.10125 0.11625,0.16125 0.11625,0.05625 0.3675,0.1425 0.1875,0.06375 0.32625,0.14625 0.1425,0.0825 0.2175,0.2025 0.07875,0.11625 0.07875,0.29625 0,0.165 -0.07875,0.3075 -0.075,0.1425 -0.255,0.2325 -0.18,0.09 -0.495,0.09 z M 82.910004,68 l -0.615,-2.055 h 0.48 l 0.49125,1.665 h 0.03375 q 0.0675,0 0.13125,-0.0375 0.0675,-0.0375 0.11625,-0.0975 0.08625,-0.1125 0.1275,-0.27375 0.045,-0.16125 0.045,-0.3225 0,-0.27 -0.1125,-0.42 -0.1125,-0.15375 -0.31125,-0.15375 -0.0825,0 -0.135,0.0225 l -0.09375,-0.37125 q 0.0825,-0.0225 0.15375,-0.03 0.075,-0.0075 0.1275,-0.0075 0.37875,0 0.5925,0.21375 0.13125,0.1275 0.195,0.31875 0.0675,0.19125 0.0675,0.4275 0,0.3 -0.09375,0.525 -0.09375,0.225 -0.22875,0.36 -0.1125,0.10875 -0.28125,0.1725 Q 83.435004,68 83.161254,68 Z m 5.182503,-1.3425 q 0,0.41625 -0.13875,0.7275 -0.135,0.3075 -0.41625,0.48 -0.28125,0.1725 -0.705,0.1725 -0.37875,0 -0.645,-0.1425 l -0.16875,0.25125 -0.27,-0.18 0.17625,-0.25875 q -0.18,-0.18375 -0.26625,-0.45 -0.08625,-0.27 -0.08625,-0.60375 0,-0.4125 0.135,-0.72 0.13875,-0.31125 0.41625,-0.48 0.28125,-0.1725 0.7125,-0.1725 0.19125,0 0.3525,0.0375 0.16125,0.0375 0.2925,0.105 l 0.16125,-0.23625 0.27,0.17625 -0.1725,0.25125 q 0.17625,0.18 0.2625,0.44625 0.09,0.26625 0.09,0.59625 z m -2.01375,0 q 0,0.19125 0.03,0.3525 0.03375,0.1575 0.10125,0.2775 l 1.0275,-1.5 q -0.165,-0.10125 -0.40125,-0.10125 -0.39375,0 -0.5775,0.25875 -0.18,0.25875 -0.18,0.7125 z m 1.5075,0 q 0,-0.39 -0.1275,-0.6225 l -1.02375,1.49625 q 0.07875,0.04875 0.17625,0.075 0.10125,0.0225 0.22125,0.0225 0.3975,0 0.57375,-0.25875 0.18,-0.25875 0.18,-0.7125 z m 2.805004,0.76875 h -0.34875 V 68 h -0.465 v -0.57375 h -1.1925 v -0.3525 l 1.20375,-1.75875 h 0.45375 v 1.725 h 0.34875 z M 89.577511,66.44 q 0,-0.10125 0.0037,-0.2175 0.0037,-0.11625 0.0075,-0.21375 0.0075,-0.10125 0.01125,-0.15375 h -0.015 q -0.0675,0.1575 -0.16125,0.2925 l -0.6075,0.8925 h 0.76125 z m 4.488753,-0.51 q 0.345,0 0.5175,0.17625 0.17625,0.17625 0.17625,0.57 V 68 h -0.4725 v -1.23375 q 0,-0.45375 -0.345,-0.45375 -0.2475,0 -0.3525,0.16125 -0.105,0.16125 -0.105,0.46875 V 68 h -0.4725 v -1.23375 q 0,-0.45375 -0.34875,-0.45375 -0.25875,0 -0.35625,0.18 -0.0975,0.18 -0.0975,0.51375 V 68 h -0.4725 v -2.0325 h 0.36375 l 0.0675,0.26625 h 0.02625 q 0.09,-0.1575 0.25125,-0.22875 0.165,-0.075 0.34125,-0.075 0.22875,0 0.3825,0.07875 0.1575,0.075 0.24,0.23625 h 0.0375 q 0.09375,-0.165 0.2625,-0.24 0.16875,-0.075 0.35625,-0.075 z m 3.615003,0 q 0.345,0 0.5175,0.17625 0.17625,0.17625 0.17625,0.57 V 68 h -0.4725 v -1.23375 q 0,-0.45375 -0.345,-0.45375 -0.2475,0 -0.3525,0.16125 -0.105,0.16125 -0.105,0.46875 V 68 h -0.4725 v -1.23375 q 0,-0.45375 -0.34875,-0.45375 -0.25875,0 -0.35625,0.18 -0.0975,0.18 -0.0975,0.51375 V 68 h -0.4725 v -2.0325 h 0.36375 l 0.0675,0.26625 h 0.02625 q 0.09,-0.1575 0.25125,-0.22875 0.165,-0.075 0.34125,-0.075 0.22875,0 0.3825,0.07875 0.1575,0.075 0.24,0.23625 h 0.0375 q 0.09375,-0.165 0.2625,-0.24 0.16875,-0.075 0.35625,-0.075 z m 2.178754,0.70125 q 0,-0.2925 0.13875,-0.4125 0.138749,-0.12375 0.344999,-0.12375 0.2025,0 0.34125,0.12375 0.1425,0.12 0.1425,0.4125 0,0.285 -0.1425,0.4125 -0.13875,0.12375 -0.34125,0.12375 -0.20625,0 -0.344999,-0.12375 -0.13875,-0.1275 -0.13875,-0.4125 z M 102.50002,68 v -0.88125 h -0.24 v -0.315 h 0.675 v 0.82875 h 0.0338 q 0.21375,0 0.3225,-0.1575 0.1125,-0.16125 0.1125,-0.50625 0,-0.375 -0.14625,-0.52875 -0.1425,-0.1575 -0.44625,-0.1575 -0.19125,0 -0.3525,0.0525 -0.1575,0.04875 -0.28875,0.135 v -0.40875 q 0.11625,-0.0675 0.30375,-0.1125 0.1875,-0.04875 0.42,-0.04875 0.52875,0 0.76125,0.27 0.2325,0.26625 0.2325,0.79125 0,0.49875 -0.22125,0.76875 -0.2175,0.27 -0.75,0.27 z m 0.96,-2.26875 q -0.20625,0 -0.32625,-0.09375 -0.12,-0.09375 -0.12,-0.26625 0,-0.1725 0.12,-0.26625 0.12,-0.09375 0.32625,-0.09375 0.2025,0 0.32625,0.09375 0.12375,0.09375 0.12375,0.26625 0,0.1725 -0.12375,0.26625 -0.12375,0.09375 -0.32625,0.09375 z m 0,-0.2025 q 0.0863,0 0.13125,-0.04125 0.045,-0.045 0.045,-0.11625 0,-0.07125 -0.045,-0.1125 -0.045,-0.045 -0.13125,-0.045 -0.0825,0 -0.1275,0.045 -0.045,0.04125 -0.045,0.1125 0,0.07125 0.045,0.11625 0.045,0.04125 0.1275,0.04125 z M 104.91877,68 v -1.395 q 0,-0.16875 -0.0787,-0.24375 -0.0787,-0.07875 -0.255,-0.07875 -0.1275,0 -0.23625,0.0375 -0.10875,0.03375 -0.20625,0.08625 V 66.0125 q 0.0787,-0.0375 0.225,-0.075 0.14625,-0.0375 0.345,-0.0375 0.2025,0 0.35625,0.06 0.15375,0.05625 0.24,0.195 0.0863,0.135 0.0863,0.3675 V 68 Z m 1.73625,0.0375 q -0.3375,0 -0.52125,-0.1875 -0.18375,-0.19125 -0.18375,-0.57375 V 65.945 h 0.47625 v 1.26375 q 0,0.42 0.37125,0.42 0.22125,0 0.34125,-0.1575 0.12375,-0.1575 0.12375,-0.465 V 65.945 h 0.47625 V 68 h -0.37125 l -0.0413,-0.31125 h -0.03 q -0.0638,0.15 -0.225,0.25125 -0.1575,0.0975 -0.41625,0.0975 z m 2.17125,0.0075 q -0.345,0 -0.6375,-0.1575 l 0.13125,-0.34875 q 0.0825,0.045 0.195,0.0825 0.1125,0.0375 0.23625,0.0375 0.2325,0 0.3675,-0.17625 0.13875,-0.17625 0.13875,-0.52125 0,-0.32625 -0.13875,-0.49875 -0.13875,-0.17625 -0.42375,-0.17625 -0.12375,0 -0.25125,0.03375 -0.1275,0.03 -0.2175,0.0825 v -0.39375 q 0.1125,-0.05625 0.25125,-0.0825 0.1425,-0.02625 0.2925,-0.02625 0.51375,0 0.7425,0.28875 0.22875,0.285 0.22875,0.7725 0,0.52125 -0.23625,0.8025 -0.2325,0.28125 -0.67875,0.28125 z m 2.10375,-0.0075 q -0.3375,0 -0.52125,-0.1875 -0.18375,-0.19125 -0.18375,-0.57375 V 65.945 h 0.47625 v 1.26375 q 0,0.42 0.37125,0.42 0.22125,0 0.34125,-0.1575 0.12375,-0.1575 0.12375,-0.465 V 65.945 h 0.47625 V 68 h -0.37125 l -0.0413,-0.31125 h -0.03 q -0.0637,0.15 -0.225,0.25125 -0.1575,0.0975 -0.41625,0.0975 z m 3.96376,0.5475 h -1.60125 v -0.2475 h 1.60125 z m 1.58625,0 h -1.60125 v -0.2475 h 1.60125 z m 1.58625,0 h -1.60125 v -0.2475 h 1.60125 z m 1.58625,0 h -1.60125 v -0.2475 h 1.60125 z m 1.58625,0 h -1.60125 v -0.2475 h 1.60125 z m 1.58625,0 h -1.60125 v -0.2475 h 1.60125 z m 1.78125,-0.5475 q -0.2175,0 -0.34875,-0.10125 -0.13125,-0.105 -0.13125,-0.345 V 65.945 h 0.47625 v 1.58625 q 0,0.15 0.1425,0.15 0.0563,0 0.13125,-0.02625 l 0.0525,0.315 q -0.0713,0.03375 -0.15375,0.04875 -0.0825,0.01875 -0.16875,0.01875 z m 1.215,0 q -0.32625,0 -0.5025,-0.15375 -0.1725,-0.15375 -0.1725,-0.43125 0,-0.30375 0.2175,-0.48 0.22125,-0.17625 0.705,-0.21 l 0.37875,-0.03 v -0.07875 q 0,-0.20625 -0.105,-0.2925 -0.10125,-0.09 -0.32625,-0.09 -0.19125,0 -0.37125,0.05625 -0.18,0.05625 -0.3225,0.13875 V 66.0575 q 0.10875,-0.0525 0.3,-0.105 0.195,-0.0525 0.44625,-0.0525 0.1425,0 0.2625,0.0225 0.12,0.0225 0.2025,0.0825 0.0525,-0.03375 0.0825,-0.0825 0.03,-0.04875 0.03,-0.1125 h 0.43125 q 0,0.135 -0.0712,0.2475 -0.0675,0.1125 -0.2025,0.18375 0.0562,0.075 0.0825,0.18 0.0263,0.105 0.0263,0.23625 V 68 h -0.465 v -0.9075 l -0.3225,0.02625 q -0.285,0.02625 -0.39375,0.105 -0.10875,0.075 -0.10875,0.21375 0,0.13125 0.0825,0.19875 0.0863,0.06375 0.2325,0.06375 0.0525,0 0.0975,-0.0075 0.0487,-0.01125 0.09,-0.0225 l 0.0525,0.31125 q -0.15,0.05625 -0.35625,0.05625 z m -0.008,-2.3925 v -0.17625 q 0.06,-0.015 0.13125,-0.04125 0.0675,-0.03 0.12,-0.075 0.0488,-0.045 0.0488,-0.1125 0,-0.1125 -0.10875,-0.1125 -0.0338,0 -0.0675,0.015 -0.0375,0.01125 -0.0637,0.0225 l -0.075,-0.2325 q 0.075,-0.06375 0.18,-0.0825 0.10125,-0.0225 0.1725,-0.0225 0.16125,0 0.25125,0.0825 0.09,0.0825 0.09,0.225 0,0.105 -0.0637,0.1875 h 0.585 v 0.3225 z m 2.37,2.3925 q -0.3375,0 -0.52125,-0.1875 -0.18375,-0.19125 -0.18375,-0.57375 V 65.945 h 0.47625 v 1.26375 q 0,0.42 0.37125,0.42 0.22125,0 0.34125,-0.1575 0.12375,-0.1575 0.12375,-0.465 V 65.945 h 0.47625 V 68 h -0.37125 l -0.0412,-0.31125 h -0.03 q -0.0637,0.15 -0.225,0.25125 -0.1575,0.0975 -0.41625,0.0975 z"
       id="text73"
       style="font-weight:600;font-size:3.75px;font-family:'Noto Sans Thai', sans-serif;fill:#1f2937"
       aria-label="ลวดอัดแรง Ø4 mm • จำนวน ______ เส้น" />
    <line
       x1="66.8"
       y1="70.6"
       x2="153.2"
       y2="70.6"
       stroke="#0d5fac"
       stroke-width="0.4"
       id="line73" />
    <path
       d="m 67.428498,75.199997 v -2.6061 h 0.55115 v 2.14985 h 1.058501 v 0.45625 z m 4.354451,-1.3067 q 0,0.40515 -0.13505,0.7081 -0.1314,0.2993 -0.40515,0.4672 -0.27375,0.1679 -0.7008,0.1679 -0.4234,0 -0.7008,-0.1679 -0.27375,-0.1679 -0.4088,-0.47085 -0.1314,-0.30295 -0.1314,-0.7081 0,-0.40515 0.1314,-0.70445 0.13505,-0.2993 0.4088,-0.46355 0.2774,-0.1679 0.70445,-0.1679 0.4234,0 0.69715,0.1679 0.27375,0.16425 0.40515,0.4672 0.13505,0.2993 0.13505,0.70445 z m -1.90165,0 q 0,0.4088 0.15695,0.64605 0.15695,0.2336 0.5037,0.2336 0.35405,0 0.50735,-0.2336 0.1533,-0.23725 0.1533,-0.64605 0,-0.41245 -0.1533,-0.64605 -0.1533,-0.2336 -0.5037,-0.2336 -0.3504,0 -0.50735,0.2336 -0.15695,0.2336 -0.15695,0.64605 z m 3.336096,1.3067 h -0.55115 v -2.1462 h -0.7081 v -0.4599 h 1.96735 v 0.4599 h -0.7081 z m 1.938152,-1.72645 q 0,-0.1679 0.09125,-0.2336 0.09125,-0.06935 0.22265,-0.06935 0.12775,0 0.219,0.06935 0.09125,0.0657 0.09125,0.2336 0,0.1606 -0.09125,0.2336 -0.09125,0.06935 -0.219,0.06935 -0.1314,0 -0.22265,-0.06935 -0.09125,-0.073 -0.09125,-0.2336 z m 0,1.47095 q 0,-0.1679 0.09125,-0.2336 0.09125,-0.06935 0.22265,-0.06935 0.12775,0 0.219,0.06935 0.09125,0.0657 0.09125,0.2336 0,0.1606 -0.09125,0.2336 -0.09125,0.06935 -0.219,0.06935 -0.1314,0 -0.22265,-0.06935 -0.09125,-0.073 -0.09125,-0.2336 z m 2.920001,-2.3506 q 0.52195,0 0.7884,0.146 0.26645,0.146 0.26645,0.51465 0,0.22265 -0.10585,0.37595 -0.1022,0.1533 -0.29565,0.18615 v 0.01825 q 0.1314,0.02555 0.23725,0.09125 0.10585,0.0657 0.1679,0.1898 0.06205,0.1241 0.06205,0.3285 0,0.35405 -0.2555,0.5548 -0.2555,0.20075 -0.7008,0.20075 h -0.97455 v -2.6061 z m 0.06205,1.03295 q 0.2409,0 0.33215,-0.07665 0.0949,-0.07665 0.0949,-0.22265 0,-0.14965 -0.1095,-0.21535 -0.1095,-0.0657 -0.34675,-0.0657 h -0.292 v 0.58035 z m -0.3212,0.438 v 0.6789 h 0.36135 q 0.2482,0 0.34675,-0.0949 0.09855,-0.09855 0.09855,-0.25915 0,-0.146 -0.1022,-0.2336 -0.09855,-0.09125 -0.36135,-0.09125 z m 3.525903,-0.1679 q 0,0.41975 -0.09125,0.71905 -0.0876,0.2993 -0.28835,0.4599 -0.1971,0.1606 -0.5329,0.1606 -0.47085,0 -0.68985,-0.35405 -0.219,-0.3577 -0.219,-0.9855 0,-0.4234 0.0876,-0.7227 0.0876,-0.2993 0.28835,-0.4599 0.20075,-0.1606 0.5329,-0.1606 0.4672,0 0.68985,0.35405 0.22265,0.35405 0.22265,0.98915 z m -1.27385,0 q 0,0.4453 0.07665,0.6716 0.07665,0.22265 0.2847,0.22265 0.2044,0 0.2847,-0.22265 0.0803,-0.22265 0.0803,-0.6716 0,-0.4453 -0.0803,-0.6716 -0.0803,-0.2263 -0.2847,-0.2263 -0.20805,0 -0.2847,0.2263 -0.07665,0.2263 -0.07665,0.6716 z m 3.361652,0 q 0,0.41975 -0.09125,0.71905 -0.0876,0.2993 -0.28835,0.4599 -0.1971,0.1606 -0.5329,0.1606 -0.47085,0 -0.68985,-0.35405 -0.219,-0.3577 -0.219,-0.9855 0,-0.4234 0.0876,-0.7227 0.0876,-0.2993 0.28835,-0.4599 0.20075,-0.1606 0.5329,-0.1606 0.4672,0 0.68985,0.35405 0.22265,0.35405 0.22265,0.98915 z m -1.27385,0 q 0,0.4453 0.07665,0.6716 0.07665,0.22265 0.2847,0.22265 0.2044,0 0.2847,-0.22265 0.0803,-0.22265 0.0803,-0.6716 0,-0.4453 -0.0803,-0.6716 -0.0803,-0.2263 -0.2847,-0.2263 -0.20805,0 -0.2847,0.2263 -0.07665,0.2263 -0.07665,0.6716 z m 3.361652,0 q 0,0.41975 -0.09125,0.71905 -0.0876,0.2993 -0.28835,0.4599 -0.1971,0.1606 -0.5329,0.1606 -0.47085,0 -0.68985,-0.35405 -0.219,-0.3577 -0.219,-0.9855 0,-0.4234 0.0876,-0.7227 0.0876,-0.2993 0.28835,-0.4599 0.20075,-0.1606 0.5329,-0.1606 0.4672,0 0.68985,0.35405 0.22265,0.35405 0.22265,0.98915 z m -1.27385,0 q 0,0.4453 0.07665,0.6716 0.07665,0.22265 0.2847,0.22265 0.2044,0 0.2847,-0.22265 0.0803,-0.22265 0.0803,-0.6716 0,-0.4453 -0.0803,-0.6716 -0.0803,-0.2263 -0.2847,-0.2263 -0.20805,0 -0.2847,0.2263 -0.07665,0.2263 -0.07665,0.6716 z m 2.916351,1.30305 h -0.55115 v -1.50745 q 0,-0.0949 0.0036,-0.2482 0.0073,-0.1533 0.01095,-0.2701 -0.01825,0.0219 -0.0803,0.0803 -0.0584,0.05475 -0.1095,0.09855 l -0.2993,0.2409 -0.26645,-0.33215 0.8395,-0.66795 h 0.4526 z"
       id="text74"
       style="font-weight:700;font-size:3.65px;font-family:'Noto Sans Thai', sans-serif;fill:#1f2937"
       aria-label="LOT : B0001" />
    <path
       d="m 108.67375,75.199997 v -1.5549 q 0,-0.18615 0.062,-0.292 0.0657,-0.10585 0.17885,-0.146 0.11315,-0.0438 0.25915,-0.0438 0.1022,0 0.1825,0.0219 0.0803,0.01825 0.1314,0.0438 l -0.073,0.3577 q -0.0292,-0.0073 -0.0584,-0.01095 -0.0292,-0.0037 -0.0474,-0.0037 -0.0694,0 -0.0986,0.0365 -0.0256,0.0365 -0.0256,0.10585 v 0.33945 q 0,0.09125 -0.007,0.219 -0.007,0.1241 -0.0255,0.3139 h 0.0183 q 0.073,-0.17155 0.12775,-0.27375 0.0584,-0.10585 0.1022,-0.18615 l 0.13505,-0.24455 h 0.2044 l 0.13505,0.24455 q 0.073,0.13505 0.12045,0.22995 0.0511,0.09125 0.1095,0.22995 h 0.0182 q -0.0182,-0.1898 -0.0255,-0.3139 -0.007,-0.12775 -0.007,-0.219 v -0.8541 h 0.511 v 2.0002 H 110.079 l -0.43435,-0.7957 h -0.0146 l -0.43435,0.7957 z m 3.01125,0.0365 q -0.3139,0 -0.48545,-0.14965 -0.1679,-0.14965 -0.1679,-0.41975 0,-0.292 0.20805,-0.4672 0.2117,-0.1752 0.6643,-0.2117 l 0.3796,-0.0292 v -0.0584 q 0,-0.1752 -0.0949,-0.25185 -0.0949,-0.07665 -0.292,-0.07665 -0.1898,0 -0.3723,0.0584 -0.17885,0.05475 -0.31025,0.1314 v -0.4526 q 0.10585,-0.0511 0.2993,-0.1022 0.19345,-0.05475 0.44895,-0.05475 0.2482,0 0.44165,0.073 0.19345,0.06935 0.30295,0.23725 0.11315,0.1679 0.11315,0.4599 v 1.2775 h -0.53655 v -0.8468 l -0.31755,0.03285 q -0.219,0.0219 -0.3066,0.0876 -0.084,0.0657 -0.084,0.1752 0,0.1095 0.0694,0.16425 0.073,0.05475 0.18615,0.05475 0.0438,0 0.0876,-0.0073 0.0438,-0.01095 0.0803,-0.0219 l 0.0474,0.3431 q -0.0694,0.02555 -0.16425,0.04015 -0.0949,0.0146 -0.1971,0.0146 z m -0.57305,-2.3141 v -0.22995 l 0.36865,-0.1533 h 1.30305 v 0.38325 z m 2.98205,2.3141 q -0.32485,0 -0.50735,-0.1314 -0.17885,-0.13505 -0.25185,-0.3723 -0.0694,-0.2409 -0.0694,-0.55845 0,-0.5329 0.15695,-0.77015 0.15695,-0.2409 0.4672,-0.2409 0.12775,0 0.22265,0.0511 0.0986,0.04745 0.15695,0.17885 h 0.0146 q 0.0511,-0.13505 0.1679,-0.1825 0.1168,-0.04745 0.25185,-0.04745 0.25185,0 0.37595,0.13505 0.12775,0.13505 0.12775,0.3942 v 1.50745 h -0.5475 v -1.40525 q 0,-0.11315 -0.0365,-0.1533 -0.0365,-0.04015 -0.0986,-0.04015 -0.0694,0 -0.10585,0.04015 -0.0329,0.04015 -0.0438,0.13505 h -0.21535 q -0.0146,-0.10585 -0.0547,-0.1387 -0.0401,-0.0365 -0.0949,-0.0365 -0.0913,0 -0.14235,0.1314 -0.0474,0.1314 -0.0474,0.4453 0,0.31025 0.073,0.47815 0.073,0.16425 0.2847,0.16425 0.0876,0 0.14235,-0.0219 l 0.0547,0.39055 q -0.1168,0.04745 -0.28105,0.04745 z m 2.15715,0.01095 q -0.18615,0 -0.3504,-0.0438 -0.16425,-0.04015 -0.3066,-0.1168 l 0.146,-0.39785 q 0.0803,0.04745 0.19345,0.08395 0.11315,0.0365 0.22265,0.0365 0.2044,0 0.32485,-0.1533 0.12045,-0.15695 0.12045,-0.4672 0,-0.292 -0.12045,-0.4453 -0.12045,-0.1533 -0.37595,-0.1533 -0.12045,0 -0.2482,0.0365 -0.12775,0.03285 -0.2117,0.08395 v -0.44895 q 0.11315,-0.0511 0.2555,-0.0803 0.14235,-0.0292 0.30295,-0.0292 0.5037,0 0.73,0.2774 0.2263,0.27375 0.2263,0.7592 0,0.5183 -0.23725,0.7884 -0.23725,0.2701 -0.6716,0.2701 z m 0.3504,-2.32505 q -0.17155,0 -0.2701,-0.0511 -0.0986,-0.0511 -0.1387,-0.12775 -0.0438,-0.0803 -0.0438,-0.1679 0,-0.1387 0.073,-0.26645 l 0.39785,0.0511 q -0.0182,0.05475 -0.0182,0.1022 0,0.0511 0.0328,0.0803 0.0292,0.02555 0.1022,0.02555 h 0.78475 v 0.35405 z m 1.67535,2.3141 q -0.33215,0 -0.50735,-0.19345 -0.1752,-0.19345 -0.1752,-0.5694 v -1.27385 h 0.5475 v 1.17895 q 0,0.20075 0.0803,0.292 0.0803,0.09125 0.2336,0.09125 0.19345,0 0.2993,-0.146 0.10585,-0.14965 0.10585,-0.4599 v -0.9563 h 0.5475 v 2.0002 h -0.4161 l -0.0584,-0.3066 h -0.0328 q -0.062,0.146 -0.21535,0.24455 -0.14965,0.09855 -0.4088,0.09855 z m 1.7009,-0.0365 v -2.0002 h 0.4015 l 0.073,0.3139 h 0.0292 q 0.062,-0.14965 0.21535,-0.2482 0.1533,-0.1022 0.39785,-0.1022 0.69715,0 0.69715,0.74825 v 1.28845 h -0.5475 v -1.17895 q 0,-0.2044 -0.084,-0.292 -0.0803,-0.09125 -0.23725,-0.09125 -0.1898,0 -0.29565,0.1533 -0.1022,0.1533 -0.1022,0.4526 v 0.9563 z m 0.0511,-2.292199 v -0.22995 l 0.36865,-0.1533 h 0.83585 v -0.25185 h 0.4672 v 0.6351 z m 1.20085,-0.82855 v -0.6789 h 0.4745 v 0.6789 z m 1.97465,1.394299 q 0,-0.1679 0.0912,-0.2336 0.0913,-0.06935 0.22265,-0.06935 0.12775,0 0.219,0.06935 0.0913,0.0657 0.0913,0.2336 0,0.1606 -0.0913,0.2336 -0.0913,0.06935 -0.219,0.06935 -0.1314,0 -0.22265,-0.06935 -0.0912,-0.073 -0.0912,-0.2336 z m 0,1.47095 q 0,-0.1679 0.0912,-0.2336 0.0913,-0.06935 0.22265,-0.06935 0.12775,0 0.219,0.06935 0.0913,0.0657 0.0913,0.2336 0,0.1606 -0.0913,0.2336 -0.0913,0.06935 -0.219,0.06935 -0.1314,0 -0.22265,-0.06935 -0.0912,-0.073 -0.0912,-0.2336 z m 3.73395,-1.04755 q 0,0.41975 -0.0913,0.71905 -0.0876,0.2993 -0.28835,0.4599 -0.1971,0.1606 -0.5329,0.1606 -0.47085,0 -0.68985,-0.35405 -0.219,-0.3577 -0.219,-0.9855 0,-0.4234 0.0876,-0.7227 0.0876,-0.2993 0.28835,-0.4599 0.20075,-0.1606 0.5329,-0.1606 0.4672,0 0.68985,0.35405 0.22265,0.35405 0.22265,0.98915 z m -1.27385,0 q 0,0.4453 0.0767,0.6716 0.0767,0.22265 0.2847,0.22265 0.2044,0 0.2847,-0.22265 0.0803,-0.22265 0.0803,-0.6716 0,-0.4453 -0.0803,-0.6716 -0.0803,-0.2263 -0.2847,-0.2263 -0.20805,0 -0.2847,0.2263 -0.0767,0.2263 -0.0767,0.6716 z m 2.4528,-1.3359 q 0.2263,0 0.41245,0.06935 0.1898,0.06935 0.30295,0.20805 0.1168,0.1387 0.1168,0.3504 0,0.2336 -0.13505,0.3869 -0.1314,0.14965 -0.33215,0.2482 0.1387,0.073 0.2628,0.17155 0.12775,0.0949 0.2044,0.2263 0.0803,0.12775 0.0803,0.30295 0,0.21535 -0.1168,0.37595 -0.11315,0.1606 -0.3212,0.2482 -0.2044,0.0876 -0.4745,0.0876 -0.438,0 -0.6789,-0.18615 -0.23725,-0.18615 -0.23725,-0.511 0,-0.2701 0.146,-0.43435 0.146,-0.16425 0.35405,-0.26645 -0.1752,-0.1095 -0.2993,-0.2628 -0.12045,-0.15695 -0.12045,-0.39055 0,-0.20805 0.1168,-0.34675 0.1168,-0.1387 0.3066,-0.20805 0.19345,-0.06935 0.41245,-0.06935 z m -0.004,0.4015 q -0.13505,0 -0.2263,0.06935 -0.0876,0.06935 -0.0876,0.1971 0,0.13505 0.0949,0.219 0.0949,0.08395 0.22265,0.146 0.1241,-0.0584 0.219,-0.1387 0.0949,-0.08395 0.0949,-0.2263 0,-0.12775 -0.0913,-0.1971 -0.0876,-0.06935 -0.2263,-0.06935 z m -0.4015,1.54395 q 0,0.14235 0.0986,0.2336 0.1022,0.09125 0.2993,0.09125 0.2044,0 0.3066,-0.0876 0.1022,-0.0876 0.1022,-0.2336 0,-0.09855 -0.0584,-0.17155 -0.0584,-0.07665 -0.146,-0.13505 -0.084,-0.06205 -0.1752,-0.11315 l -0.0474,-0.02555 q -0.1679,0.0803 -0.27375,0.18615 -0.10585,0.10585 -0.10585,0.2555 z m 2.93825,-1.9126 -0.9709,2.6061 h -0.49275 l 0.9709,-2.6061 z m 1.971,1.30305 q 0,0.41975 -0.0913,0.71905 -0.0876,0.2993 -0.28835,0.4599 -0.1971,0.1606 -0.5329,0.1606 -0.47085,0 -0.68985,-0.35405 -0.219,-0.3577 -0.219,-0.9855 0,-0.4234 0.0876,-0.7227 0.0876,-0.2993 0.28835,-0.4599 0.20075,-0.1606 0.5329,-0.1606 0.4672,0 0.68985,0.35405 0.22265,0.35405 0.22265,0.98915 z m -1.27385,0 q 0,0.4453 0.0767,0.6716 0.0767,0.22265 0.2847,0.22265 0.2044,0 0.2847,-0.22265 0.0803,-0.22265 0.0803,-0.6716 0,-0.4453 -0.0803,-0.6716 -0.0803,-0.2263 -0.2847,-0.2263 -0.20805,0 -0.2847,0.2263 -0.0767,0.2263 -0.0767,0.6716 z m 2.4528,-1.3359 q 0.2263,0 0.41245,0.06935 0.1898,0.06935 0.30295,0.20805 0.1168,0.1387 0.1168,0.3504 0,0.2336 -0.13505,0.3869 -0.1314,0.14965 -0.33215,0.2482 0.1387,0.073 0.2628,0.17155 0.12775,0.0949 0.2044,0.2263 0.0803,0.12775 0.0803,0.30295 0,0.21535 -0.1168,0.37595 -0.11315,0.1606 -0.3212,0.2482 -0.2044,0.0876 -0.4745,0.0876 -0.438,0 -0.6789,-0.18615 -0.23725,-0.18615 -0.23725,-0.511 0,-0.2701 0.146,-0.43435 0.146,-0.16425 0.35405,-0.26645 -0.1752,-0.1095 -0.2993,-0.2628 -0.12045,-0.15695 -0.12045,-0.39055 0,-0.20805 0.1168,-0.34675 0.1168,-0.1387 0.3066,-0.20805 0.19345,-0.06935 0.41245,-0.06935 z m -0.004,0.4015 q -0.13505,0 -0.2263,0.06935 -0.0876,0.06935 -0.0876,0.1971 0,0.13505 0.0949,0.219 0.0949,0.08395 0.22265,0.146 0.1241,-0.0584 0.219,-0.1387 0.0949,-0.08395 0.0949,-0.2263 0,-0.12775 -0.0913,-0.1971 -0.0876,-0.06935 -0.2263,-0.06935 z m -0.4015,1.54395 q 0,0.14235 0.0986,0.2336 0.1022,0.09125 0.2993,0.09125 0.2044,0 0.3066,-0.0876 0.1022,-0.0876 0.1022,-0.2336 0,-0.09855 -0.0584,-0.17155 -0.0584,-0.07665 -0.146,-0.13505 -0.0839,-0.06205 -0.1752,-0.11315 l -0.0474,-0.02555 q -0.1679,0.0803 -0.27375,0.18615 -0.10585,0.10585 -0.10585,0.2555 z m 2.93826,-1.9126 -0.9709,2.6061 h -0.49275 l 0.9709,-2.6061 z m 1.9856,2.6061 h -1.82135 v -0.38325 l 0.65335,-0.66065 q 0.1971,-0.2044 0.31755,-0.33945 0.12045,-0.1387 0.1752,-0.2482 0.0547,-0.11315 0.0547,-0.2409 0,-0.15695 -0.0876,-0.2336 -0.084,-0.07665 -0.22995,-0.07665 -0.14965,0 -0.292,0.06935 -0.14235,0.06935 -0.2993,0.1971 l -0.2993,-0.35405 q 0.11315,-0.09855 0.23725,-0.1825 0.12775,-0.08395 0.292,-0.13505 0.1679,-0.05475 0.4015,-0.05475 0.2555,0 0.438,0.0949 0.18615,0.09125 0.2847,0.25185 0.1022,0.15695 0.1022,0.3577 0,0.21535 -0.0876,0.3942 -0.0839,0.17885 -0.2482,0.35405 -0.1606,0.1752 -0.39055,0.3869 l -0.3358,0.3139 v 0.02555 h 1.13515 z m 2.0732,-1.30305 q 0,0.41975 -0.0913,0.71905 -0.0876,0.2993 -0.28835,0.4599 -0.1971,0.1606 -0.5329,0.1606 -0.47085,0 -0.68985,-0.35405 -0.219,-0.3577 -0.219,-0.9855 0,-0.4234 0.0876,-0.7227 0.0876,-0.2993 0.28835,-0.4599 0.20075,-0.1606 0.5329,-0.1606 0.4672,0 0.68985,0.35405 0.22265,0.35405 0.22265,0.98915 z m -1.27385,0 q 0,0.4453 0.0767,0.6716 0.0767,0.22265 0.2847,0.22265 0.2044,0 0.2847,-0.22265 0.0803,-0.22265 0.0803,-0.6716 0,-0.4453 -0.0803,-0.6716 -0.0803,-0.2263 -0.2847,-0.2263 -0.20805,0 -0.2847,0.2263 -0.0767,0.2263 -0.0767,0.6716 z m 3.37625,1.30305 h -1.82135 v -0.38325 l 0.65335,-0.66065 q 0.1971,-0.2044 0.31755,-0.33945 0.12045,-0.1387 0.1752,-0.2482 0.0547,-0.11315 0.0547,-0.2409 0,-0.15695 -0.0876,-0.2336 -0.084,-0.07665 -0.22995,-0.07665 -0.14965,0 -0.292,0.06935 -0.14235,0.06935 -0.2993,0.1971 l -0.2993,-0.35405 q 0.11315,-0.09855 0.23725,-0.1825 0.12775,-0.08395 0.292,-0.13505 0.1679,-0.05475 0.4015,-0.05475 0.2555,0 0.438,0.0949 0.18615,0.09125 0.2847,0.25185 0.1022,0.15695 0.1022,0.3577 0,0.21535 -0.0876,0.3942 -0.0839,0.17885 -0.2482,0.35405 -0.1606,0.1752 -0.39055,0.3869 l -0.3358,0.3139 v 0.02555 h 1.13515 z m 0.2482,-1.10595 q 0,-0.2263 0.0328,-0.4453 0.0328,-0.219 0.11315,-0.41245 0.084,-0.1971 0.22995,-0.34675 0.14965,-0.1533 0.37595,-0.23725 0.22995,-0.0876 0.5548,-0.0876 0.0766,0 0.17885,0.0073 0.1022,0.0037 0.17155,0.01825 v 0.44165 q -0.0693,-0.01825 -0.1533,-0.02555 -0.0803,-0.01095 -0.1606,-0.01095 -0.32485,0 -0.5037,0.1022 -0.1752,0.1022 -0.2482,0.28835 -0.073,0.1825 -0.0839,0.4234 h 0.0219 q 0.073,-0.12775 0.20805,-0.21535 0.1387,-0.0876 0.3577,-0.0876 0.3431,0 0.54385,0.21535 0.20075,0.21535 0.20075,0.60955 0,0.4234 -0.2409,0.6643 -0.23725,0.2409 -0.64605,0.2409 -0.26645,0 -0.4818,-0.12045 -0.21535,-0.1241 -0.3431,-0.37595 -0.12775,-0.2555 -0.12775,-0.64605 z m 0.9417,0.7008 q 0.1606,0 0.2628,-0.1095 0.1022,-0.11315 0.1022,-0.34675 0,-0.1898 -0.0876,-0.2993 -0.0876,-0.1095 -0.26645,-0.1095 -0.12045,0 -0.2117,0.05475 -0.0913,0.0511 -0.14235,0.13505 -0.0511,0.08395 -0.0511,0.17155 0,0.12045 0.0438,0.23725 0.0438,0.11315 0.1314,0.1898 0.0913,0.07665 0.219,0.07665 z"
       id="text75"
       style="font-weight:700;font-size:3.65px;font-family:'Noto Sans Thai', sans-serif;fill:#1f2937"
       aria-label="ผลิตวันที่ : 08/08/2026" />
    <path
       d="m 67.872198,80.132998 q -0.1914,0 -0.3069,-0.0891 -0.1155,-0.0924 -0.1155,-0.3036 v -1.696199 q 0,-0.198 -0.0825,-0.2838 -0.0792,-0.0858 -0.2244,-0.0858 v -0.1716 l 0.3003,-0.1386 h 0.858 v 0.3102 h -0.5973 l -0.0033,0.0132 q 0.0792,0.0495 0.1221,0.1518 0.0462,0.099 0.0462,0.2607 v 1.587299 q 0,0.132 0.1254,0.132 0.0528,0 0.1155,-0.0231 l 0.0462,0.2772 q -0.0627,0.0297 -0.1353,0.0429 -0.0726,0.0165 -0.1485,0.0165 z m 1.131898,0.0066 q -0.1947,0 -0.3795,-0.0396 -0.1848,-0.0429 -0.3234,-0.1122 l 0.1188,-0.3333 q 0.1023,0.0495 0.2541,0.099 0.1518,0.0495 0.3201,0.0495 0.1485,0 0.2343,-0.0462 0.0858,-0.0495 0.0858,-0.1452 0,-0.0957 -0.099,-0.1518 -0.0957,-0.0594 -0.2838,-0.1221 -0.1881,-0.0627 -0.3201,-0.1353 -0.132,-0.0726 -0.2013,-0.1782 -0.0693,-0.1056 -0.0693,-0.264 0,-0.2442 0.1881,-0.3762 0.1914,-0.131999 0.5412,-0.131999 0.1749,0 0.3201,0.0297 0.1452,0.0297 0.2277,0.0759 v 0.3366 q -0.0858,-0.0396 -0.2376,-0.0759 -0.1518,-0.0396 -0.3003,-0.0396 -0.1683,0 -0.2442,0.0495 -0.0759,0.0495 -0.0759,0.1221 0,0.0891 0.1023,0.1419 0.1023,0.0495 0.3234,0.1254 0.165,0.0561 0.2871,0.1287 0.1254,0.0726 0.1914,0.1782 0.0693,0.1023 0.0693,0.2607 0,0.1452 -0.0693,0.2706 -0.066,0.1254 -0.2244,0.2046 -0.1584,0.0792 -0.4356,0.0792 z m 1.402499,-0.0396 -0.5412,-1.808399 h 0.4224 l 0.4323,1.465199 h 0.0297 q 0.0594,0 0.1155,-0.033 0.0594,-0.033 0.1023,-0.0858 0.0759,-0.099 0.1122,-0.2409 0.0396,-0.1419 0.0396,-0.2838 0,-0.2376 -0.099,-0.3696 -0.099,-0.1353 -0.2739,-0.1353 -0.0726,0 -0.1188,0.0198 l -0.0825,-0.326699 q 0.0726,-0.0198 0.1353,-0.0264 0.066,-0.0066 0.1122,-0.0066 0.3333,0 0.5214,0.188099 0.1155,0.1122 0.1716,0.2805 0.0594,0.1683 0.0594,0.3762 0,0.264 -0.0825,0.462 -0.0825,0.198 -0.2013,0.3168 -0.099,0.0957 -0.2475,0.1518 -0.1452,0.0561 -0.3861,0.0561 z m 1.841402,0 -0.541199,-1.808399 h 0.4224 l 0.432299,1.465199 h 0.0297 q 0.0594,0 0.1155,-0.033 0.0594,-0.033 0.1023,-0.0858 0.0759,-0.099 0.1122,-0.2409 0.0396,-0.1419 0.0396,-0.2838 0,-0.2376 -0.099,-0.3696 -0.099,-0.1353 -0.2739,-0.1353 -0.0726,0 -0.1188,0.0198 l -0.0825,-0.326699 q 0.0726,-0.0198 0.1353,-0.0264 0.066,-0.0066 0.1122,-0.0066 0.3333,0 0.5214,0.188099 0.1155,0.1122 0.1716,0.2805 0.0594,0.1683 0.0594,0.3762 0,0.264 -0.0825,0.462 -0.0825,0.198 -0.2013,0.3168 -0.099,0.0957 -0.2475,0.1518 -0.1452,0.0561 -0.3861,0.0561 z m 2.026202,0 v -1.2276 q 0,-0.1485 -0.0693,-0.2145 -0.0693,-0.0693 -0.2244,-0.0693 -0.1122,0 -0.2079,0.033 -0.0957,0.0297 -0.1815,0.0759 v -0.3465 q 0.0693,-0.033 0.198,-0.066 0.1287,-0.033 0.3036,-0.033 0.1782,0 0.3135,0.0528 0.1353,0.0495 0.2112,0.171599 0.0759,0.1188 0.0759,0.3234 v 1.3002 z m 1.527899,0.033 q -0.297,0 -0.4587,-0.165 -0.1617,-0.1683 -0.1617,-0.5049 v -1.171499 h 0.4191 v 1.112099 q 0,0.3696 0.3267,0.3696 0.1947,0 0.3003,-0.1386 0.1089,-0.1386 0.1089,-0.4092 v -0.933899 h 0.4191 v 1.808399 h -0.3267 l -0.0363,-0.2739 h -0.0264 q -0.0561,0.132 -0.198,0.2211 -0.1386,0.0858 -0.3663,0.0858 z m 2.174703,0.0066 q -0.3465,0 -0.528,-0.1584 -0.1815,-0.1617 -0.1815,-0.4719 v -0.1584 q 0,-0.1452 0.0396,-0.2343 0.0429,-0.0924 0.0924,-0.165 0.0561,-0.0726 0.0924,-0.1287 0.0363,-0.0561 0.0363,-0.1287 0,-0.0627 -0.033,-0.0891 -0.0297,-0.0264 -0.0759,-0.0264 -0.066,0 -0.1551,0.0429 l -0.0759,-0.2739 q 0.0792,-0.0462 0.1782,-0.0627 0.1023,-0.0165 0.1782,-0.0165 0.2046,0 0.2904,0.099 0.0858,0.099 0.0858,0.264 0,0.1089 -0.0363,0.1881 -0.033,0.0792 -0.0825,0.1584 -0.0495,0.0792 -0.0858,0.1485 -0.033,0.0693 -0.033,0.1947 v 0.1551 q 0,0.1848 0.0825,0.2574 0.0858,0.0726 0.2145,0.0726 0.2871,0 0.2871,-0.297 v -1.217699 h 0.4158 v 1.230899 q 0,0.3003 -0.1815,0.4587 -0.1782,0.1584 -0.5247,0.1584 z m 1.884302,0 q -0.3861,0 -0.5742,-0.1914 -0.1848,-0.1947 -0.1848,-0.5841 0,-0.066 0.0033,-0.1551 0.0033,-0.0891 0.0132,-0.1617 h 0.7557 v 0.2838 h -0.3597 v 0.0528 q 0,0.2409 0.0825,0.3399 0.0858,0.099 0.2607,0.099 0.1221,0 0.2112,-0.0528 0.0924,-0.0528 0.1386,-0.1815 0.0495,-0.132 0.0495,-0.3663 0,-0.3168 -0.1122,-0.4719 -0.1089,-0.1584 -0.3927,-0.1584 -0.1518,0 -0.3069,0.0429 -0.1518,0.0429 -0.264,0.1089 v -0.3597 q 0.1023,-0.0561 0.2772,-0.0924 0.1782,-0.0396 0.363,-0.0396 0.3102,0 0.4983,0.118799 0.1914,0.1155 0.2772,0.33 0.0891,0.2145 0.0891,0.5049 0,0.4455 -0.1914,0.6897 -0.1881,0.2442 -0.6336,0.2442 z m 1.864502,-0.0066 q -0.297,0 -0.4587,-0.165 -0.1617,-0.1683 -0.1617,-0.5049 v -1.171499 h 0.4191 v 1.112099 q 0,0.3696 0.3267,0.3696 0.1947,0 0.3003,-0.1386 0.1089,-0.1386 0.1089,-0.4092 v -0.933899 h 0.4191 v 1.808399 h -0.3267 l -0.0363,-0.2739 h -0.0264 q -0.0561,0.132 -0.198,0.2211 -0.1386,0.0858 -0.3663,0.0858 z m 1.943702,0 q -0.1914,0 -0.3069,-0.0891 -0.1155,-0.0924 -0.1155,-0.3036 v -1.448699 h 0.4191 v 1.395899 q 0,0.132 0.1254,0.132 0.0495,0 0.1155,-0.0231 l 0.0462,0.2772 q -0.0627,0.0297 -0.1353,0.0429 -0.0726,0.0165 -0.1485,0.0165 z m 0.957,0 q -0.1914,0 -0.3069,-0.0891 -0.1155,-0.0924 -0.1155,-0.3036 v -1.448699 h 0.4191 v 1.395899 q 0,0.132 0.1254,0.132 0.0495,0 0.1155,-0.0231 l 0.0462,0.2772 q -0.0627,0.0297 -0.1353,0.0429 -0.0726,0.0165 -0.1485,0.0165 z m 0.580801,-0.033 v -0.5808 q 0,-0.2079 0.0858,-0.3102 0.0858,-0.1056 0.2343,-0.1485 l 0.0033,-0.0132 -0.3564,-0.132 v -0.0957 q 0,-0.1518 0.0924,-0.2805 0.0957,-0.1287 0.2739,-0.2079 0.1782,-0.0792 0.4323,-0.0792 0.231,0 0.4092,0.0726 0.1782,0.0726 0.2805,0.2211 0.1023,0.1485 0.1023,0.3762 v 1.1781 h -0.4191 v -1.1484 q 0,-0.1881 -0.1056,-0.2739 -0.1056,-0.0858 -0.2772,-0.0858 -0.1716,0 -0.264,0.0726 -0.0924,0.0693 -0.0957,0.1749 l 0.3201,0.1518 -0.033,0.1947 q -0.1221,0.0033 -0.1947,0.0825 -0.0693,0.0792 -0.0693,0.231 v 0.6006 z m 1.105503,-2.072399 v -0.7293 h 0.3927 v 0.7293 z m 1.560896,2.105399 q -0.297,0 -0.4587,-0.165 -0.1617,-0.1683 -0.1617,-0.5049 v -1.171499 h 0.4191 v 1.112099 q 0,0.3696 0.3267,0.3696 0.1947,0 0.3003,-0.1386 0.1089,-0.1386 0.1089,-0.4092 v -0.933899 h 0.4191 v 1.808399 h -0.3267 l -0.0363,-0.2739 h -0.0264 q -0.0561,0.132 -0.198,0.2211 -0.1386,0.0858 -0.3663,0.0858 z m 2.280303,-1.2375 q 0,-0.2574 0.1221,-0.363 0.1221,-0.1089 0.3036,-0.1089 0.1782,0 0.3003,0.1089 0.1254,0.1056 0.1254,0.363 0,0.2508 -0.1254,0.363 -0.1221,0.1089 -0.3003,0.1089 -0.1815,0 -0.3036,-0.1089 -0.1221,-0.1122 -0.1221,-0.363 z m 2.913899,-1.151699 q 0.4587,0 0.6666,0.1914 0.2112,0.1914 0.2112,0.527999 0,0.2013 -0.0858,0.3795 -0.0858,0.1749 -0.2904,0.2838 -0.2013,0.1056 -0.5478,0.1056 h -0.2343 v 0.8679 h -0.4224 v -2.356199 z m -0.0264,0.3498 h -0.2541 v 0.788699 h 0.1914 q 0.2574,0 0.396,-0.0924 0.1419,-0.0957 0.1419,-0.3102 0,-0.194699 -0.1155,-0.290399 -0.1155,-0.0957 -0.3597,-0.0957 z m 1.366198,2.006399 v -2.356199 h 0.4224 v 1.999799 h 0.9834 v 0.3564 z m 1.620299,-0.7095 v -0.3498 h 0.8382 v 0.3498 z m 1.910701,-0.7722 q 0.2244,0 0.396,0.0825 0.1716,0.0792 0.2673,0.2376 0.099,0.1584 0.099,0.3861 0,0.3762 -0.2376,0.594 -0.2343,0.2145 -0.6798,0.2145 -0.1848,0 -0.3465,-0.033 -0.1617,-0.033 -0.2805,-0.0957 v -0.3696 q 0.1221,0.066 0.2937,0.1089 0.1716,0.0429 0.3234,0.0429 0.2343,0 0.3663,-0.1023 0.1353,-0.1023 0.1353,-0.3201 0,-0.1947 -0.1254,-0.297 -0.1254,-0.1056 -0.3894,-0.1056 -0.0924,0 -0.2013,0.0165 -0.1056,0.0165 -0.1749,0.033 l -0.1782,-0.099 0.0891,-1.168199 h 1.2408 v 0.363 h -0.8745 l -0.0495,0.544499 q 0.0561,-0.0099 0.132,-0.0198 0.0759,-0.0132 0.1947,-0.0132 z m 2.676303,0.3036 q 0,0.3795 -0.0792,0.6501 -0.0792,0.2706 -0.2574,0.4158 -0.1782,0.1452 -0.471902,0.1452 -0.4158,0 -0.6105,-0.3201 -0.1947,-0.3234 -0.1947,-0.891 0,-0.3828 0.0792,-0.653399 0.0792,-0.2706 0.2541,-0.4158 0.1782,-0.1452 0.4719,-0.1452 0.412502,0 0.610502,0.3201 0.198,0.320099 0.198,0.894299 z m -1.194602,0 q 0,0.4323 0.0825,0.6501 0.0858,0.2178 0.3036,0.2178 0.214502,0 0.300302,-0.2145 0.0891,-0.2178 0.0891,-0.6534 0,-0.4356 -0.0891,-0.653399 -0.0858,-0.2178 -0.300302,-0.2178 -0.2178,0 -0.3036,0.2178 -0.0825,0.217799 -0.0825,0.653399 z m 2.385902,-0.0264 q 0,-0.2574 0.1221,-0.363 0.1221,-0.1089 0.3036,-0.1089 0.1782,0 0.3003,0.1089 0.1254,0.1056 0.1254,0.363 0,0.2508 -0.1254,0.363 -0.1221,0.1089 -0.3003,0.1089 -0.1815,0 -0.3036,-0.1089 -0.1221,-0.1122 -0.1221,-0.363 z m 2.607,1.2375 q -0.1881,0 -0.3069,-0.0891 -0.1155,-0.0924 -0.1155,-0.3036 v -1.2474 q 0,-0.0891 0.0132,-0.1452 0.0132,-0.0561 0.0495,-0.108899 0.0363,-0.0561 0.099,-0.132 0.0726,-0.0858 0.1155,-0.1452 0.0429,-0.0594 0.0429,-0.1353 0,-0.1749 -0.231,-0.1749 -0.0924,0 -0.1683,0.0264 -0.0759,0.0264 -0.132,0.0594 v -0.3234 q 0.0462,-0.0264 0.1584,-0.0561 0.1122,-0.033 0.2673,-0.033 0.2409,0 0.3861,0.1056 0.1485,0.1056 0.1485,0.3168 0,0.132 -0.0528,0.231 -0.0495,0.0957 -0.1089,0.1749 -0.0561,0.0726 -0.0924,0.1221 -0.0363,0.0462 -0.0561,0.0957 -0.0198,0.0495 -0.0198,0.132 v 1.1847 q 0,0.132 0.1221,0.132 0.0297,0 0.0594,-0.0066 0.033,-0.0066 0.0627,-0.0165 l 0.0429,0.2772 q -0.0627,0.0297 -0.1353,0.0429 -0.0726,0.0165 -0.1485,0.0165 z m 1.3497,0.0066 q -0.4158,0 -0.6006,-0.1914 -0.1815,-0.1914 -0.1815,-0.5544 v -1.102199 h 0.4191 v 1.121999 q 0,0.3861 0.363,0.3861 0.1881,0 0.2772,-0.0957 0.0891,-0.099 0.0891,-0.2904 v -1.121999 h 0.4191 v 1.102199 q 0,0.363 -0.1881,0.5544 -0.1848,0.1914 -0.5973,0.1914 z m 1.96349,0 q -0.3861,0 -0.5742,-0.1914 -0.1848,-0.1947 -0.1848,-0.5841 0,-0.066 0.003,-0.1551 0.003,-0.0891 0.0132,-0.1617 h 0.7557 v 0.2838 h -0.3597 v 0.0528 q 0,0.2409 0.0825,0.3399 0.0858,0.099 0.2607,0.099 0.1221,0 0.2112,-0.0528 0.0924,-0.0528 0.1386,-0.1815 0.0495,-0.132 0.0495,-0.3663 0,-0.3168 -0.1122,-0.4719 -0.1089,-0.1584 -0.3927,-0.1584 -0.1518,0 -0.3069,0.0429 -0.1518,0.0429 -0.264,0.1089 v -0.3597 q 0.1023,-0.0561 0.2772,-0.0924 0.1782,-0.0396 0.363,-0.0396 0.3102,0 0.4983,0.118799 0.1914,0.1155 0.2772,0.33 0.0891,0.2145 0.0891,0.5049 0,0.4455 -0.1914,0.6897 -0.1881,0.2442 -0.6336,0.2442 z m 1.8645,-0.0066 q -0.297,0 -0.4587,-0.165 -0.1617,-0.1683 -0.1617,-0.5049 v -1.171499 h 0.4191 v 1.112099 q 0,0.3696 0.3267,0.3696 0.1947,0 0.3003,-0.1386 0.1089,-0.1386 0.1089,-0.4092 v -0.933899 h 0.4191 v 1.808399 h -0.3267 l -0.0363,-0.2739 h -0.0264 q -0.0561,0.132 -0.198,0.2211 -0.1386,0.0858 -0.3663,0.0858 z m 0.59071,0.8283 v -0.3135 q 0,-0.0825 -0.0726,-0.0825 -0.0165,0 -0.033,0.0033 -0.0165,0.0033 -0.033,0.0099 l -0.0231,-0.2244 q 0.0462,-0.0165 0.1188,-0.0297 0.0726,-0.0132 0.1386,-0.0132 0.1419,0 0.2046,0.0594 0.0627,0.0627 0.0627,0.1683 v 0.4224 z m 2.607,-0.2409 q -0.1419,0 -0.2871,-0.0297 -0.1419,-0.0264 -0.2673,-0.0825 v -0.3696 q 0.0924,0.0594 0.2277,0.099 0.1386,0.0396 0.2838,0.0396 0.2046,0 0.3267,-0.099 0.1254,-0.0957 0.1254,-0.3333 v -0.0924 h -0.0198 q -0.0627,0.099 -0.1848,0.165 -0.1221,0.066 -0.3069,0.066 -0.2442,0 -0.3993,-0.1353 -0.1518,-0.1353 -0.1518,-0.4455 v -0.5709 q 0,-0.1947 -0.1056,-0.2673 -0.1056,-0.0759 -0.2475,-0.0759 -0.1452,0 -0.2409,0.0627 -0.0924,0.0594 -0.099,0.1848 l 0.3234,0.1518 -0.033,0.1947 q -0.1221,0 -0.1947,0.0627 -0.0693,0.0627 -0.0693,0.2145 v 0.2343 q 0,0.1353 0.132,0.1353 0.0693,0 0.1188,-0.0198 l 0.0462,0.264 q -0.0627,0.0297 -0.1353,0.0429 -0.0693,0.0165 -0.1485,0.0165 -0.1848,0 -0.3069,-0.0891 -0.1188,-0.0924 -0.1188,-0.3036 v -0.2541 q 0,-0.198 0.0858,-0.2904 0.0858,-0.0924 0.2343,-0.1353 l 0.003,-0.0132 -0.3663,-0.132 v -0.0957 q 0,-0.1584 0.0924,-0.2871 0.0924,-0.1287 0.264,-0.2046 0.1749,-0.0759 0.4158,-0.0759 0.2211,0 0.3927,0.0693 0.1716,0.0693 0.2706,0.2112 0.099,0.1419 0.099,0.3663 v 0.5016 q 0,0.1716 0.0759,0.2508 0.0792,0.0759 0.198,0.0759 0.165,0 0.264,-0.1287 0.099,-0.132 0.099,-0.3465 v -0.960299 h 0.4191 v 1.607099 q 0,0.4158 -0.2079,0.6171 -0.2079,0.2046 -0.6072,0.2046 z m 1.8216,-0.6204 v -1.2276 q 0,-0.1485 -0.0693,-0.2145 -0.0693,-0.0693 -0.2244,-0.0693 -0.1122,0 -0.2079,0.033 -0.0957,0.0297 -0.1815,0.0759 v -0.3465 q 0.0693,-0.033 0.198,-0.066 0.1287,-0.033 0.3036,-0.033 0.1782,0 0.3135,0.0528 0.1353,0.0495 0.2112,0.171599 0.0759,0.1188 0.0759,0.3234 v 1.3002 z m 1.5774,0.033 q -0.2871,0 -0.4455,-0.1221 -0.1584,-0.1221 -0.2211,-0.3399 -0.0627,-0.2178 -0.0627,-0.5049 0,-0.4785 0.1386,-0.693 0.1419,-0.214499 0.4125,-0.214499 0.1188,0 0.2013,0.0429 0.0858,0.0429 0.132,0.151799 h 0.0132 q 0.0396,-0.1122 0.1386,-0.151799 0.099,-0.0429 0.2178,-0.0429 0.4521,0 0.4521,0.471899 v 1.3695 h -0.4191 v -1.3101 q 0,-0.1122 -0.0429,-0.1518 -0.0396,-0.0396 -0.1089,-0.0396 -0.0726,0 -0.1089,0.0396 -0.0363,0.0396 -0.0462,0.132 h -0.1914 q -0.0132,-0.1023 -0.0594,-0.1353 -0.0429,-0.0363 -0.099,-0.0363 -0.1023,0 -0.1551,0.132 -0.0528,0.132 -0.0528,0.4389 0,0.3036 0.0726,0.4719 0.0726,0.165 0.297,0.165 0.0495,0 0.0858,-0.0033 0.0363,-0.0066 0.066,-0.0165 l 0.0429,0.3036 q -0.0528,0.0231 -0.1188,0.033 -0.066,0.0099 -0.1386,0.0099 z m 1.93709,0 q -0.1914,0 -0.3069,-0.0891 -0.1155,-0.0924 -0.1155,-0.3036 v -1.448699 h 0.4191 v 1.395899 q 0,0.132 0.1254,0.132 0.0495,0 0.1155,-0.0231 l 0.0462,0.2772 q -0.0627,0.0297 -0.1353,0.0429 -0.0726,0.0165 -0.1485,0.0165 z m 1.0692,0 q -0.2871,0 -0.4422,-0.1353 -0.1518,-0.1353 -0.1518,-0.3795 0,-0.2673 0.1914,-0.4224 0.1947,-0.1551 0.6204,-0.1848 l 0.3333,-0.0264 v -0.0693 q 0,-0.1815 -0.0924,-0.2574 -0.0891,-0.0792 -0.2871,-0.0792 -0.1683,0 -0.3267,0.0495 -0.1584,0.0495 -0.2838,0.1221 v -0.3597 q 0.0957,-0.0462 0.264,-0.0924 0.1716,-0.0462 0.3927,-0.0462 0.2277,0 0.3927,0.066 0.1683,0.0627 0.2574,0.2112 0.0924,0.1452 0.0924,0.3894 v 1.1814 h -0.4092 v -0.7986 l -0.2838,0.0231 q -0.2508,0.0231 -0.3465,0.0924 -0.0957,0.066 -0.0957,0.1881 0,0.1155 0.0726,0.1749 0.0759,0.0561 0.2046,0.0561 0.0462,0 0.0858,-0.0066 0.0429,-0.0099 0.0792,-0.0198 l 0.0462,0.2739 q -0.132,0.0495 -0.3135,0.0495 z m 2.1516,0.0066 q -0.3465,0 -0.528,-0.1584 -0.1815,-0.1617 -0.1815,-0.4719 v -0.1584 q 0,-0.1452 0.0396,-0.2343 0.0429,-0.0924 0.0924,-0.165 0.0561,-0.0726 0.0924,-0.1287 0.0363,-0.0561 0.0363,-0.1287 0,-0.0627 -0.033,-0.0891 -0.0297,-0.0264 -0.0759,-0.0264 -0.066,0 -0.1551,0.0429 l -0.0759,-0.2739 q 0.0792,-0.0462 0.1782,-0.0627 0.1023,-0.0165 0.1782,-0.0165 0.2046,0 0.2904,0.099 0.0858,0.099 0.0858,0.264 0,0.1089 -0.0363,0.1881 -0.033,0.0792 -0.0825,0.1584 -0.0495,0.0792 -0.0858,0.1485 -0.033,0.0693 -0.033,0.1947 v 0.1551 q 0,0.1848 0.0825,0.2574 0.0858,0.0726 0.2145,0.0726 0.2871,0 0.2871,-0.297 v -1.217699 h 0.4158 v 1.230899 q 0,0.3003 -0.1815,0.4587 -0.1782,0.1584 -0.5247,0.1584 z m 1.2144,-0.0396 v -1.808399 h 0.3036 l 0.0594,0.283799 h 0.0231 q 0.0561,-0.1386 0.198,-0.2277 0.1419,-0.0891 0.3597,-0.0891 0.3069,0 0.4686,0.161699 0.1617,0.1617 0.1617,0.4983 v 1.1814 h -0.4191 v -1.1121 q 0,-0.1914 -0.0858,-0.2805 -0.0825,-0.0891 -0.2442,-0.0891 -0.1947,0 -0.3003,0.1485 -0.1056,0.1452 -0.1056,0.3993 v 0.9339 z m 0.0396,-2.079002 v -0.1782 l 0.297,-0.1254 h 0.8052 v -0.2442 h 0.3696 v 0.3729 h -0.003 v 0.1749 z m 1.0989,-0.7293 v -0.5841 h 0.3729 v 0.5841 z m 3.20101,0.990003 q 0,0.240899 -0.1419,0.386099 -0.1386,0.1419 -0.3597,0.1914 v 0.0099 q 0.2838,0.0363 0.429,0.1782 0.1452,0.1386 0.1452,0.3729 0,0.2046 -0.099,0.3663 -0.099,0.1617 -0.3069,0.2541 -0.2046,0.0924 -0.528,0.0924 -0.1914,0 -0.3564,-0.033 -0.165,-0.0297 -0.3102,-0.0957 v -0.3663 q 0.1485,0.0759 0.3168,0.1155 0.1683,0.0396 0.3168,0.0396 0.2871,0 0.4059,-0.1023 0.1188,-0.1056 0.1188,-0.2904 0,-0.1749 -0.1386,-0.2607 -0.1386,-0.0858 -0.462,-0.0858 h -0.198 v -0.3333 h 0.2013 q 0.3135,0 0.4323,-0.099 0.1188,-0.1023 0.1188,-0.2673 0,-0.141899 -0.0924,-0.221099 -0.0924,-0.0792 -0.2772,-0.0792 -0.1782,0 -0.3069,0.0594 -0.1287,0.0561 -0.231,0.1221 l -0.198,-0.2871 q 0.132,-0.099 0.3168,-0.1683 0.1881,-0.0693 0.4389,-0.0693 0.3663,0 0.5643,0.1551 0.2013,0.1518 0.2013,0.4158 z m 1.9734,0.640199 q 0,0.3795 -0.0792,0.6501 -0.0792,0.2706 -0.2574,0.4158 -0.1782,0.1452 -0.4719,0.1452 -0.4158,0 -0.6105,-0.3201 -0.1947,-0.3234 -0.1947,-0.891 0,-0.3828 0.0792,-0.653399 0.0792,-0.2706 0.2541,-0.4158 0.1782,-0.1452 0.4719,-0.1452 0.4125,0 0.6105,0.3201 0.198,0.320099 0.198,0.894299 z m -1.1946,0 q 0,0.4323 0.0825,0.6501 0.0858,0.2178 0.3036,0.2178 0.2145,0 0.3003,-0.2145 0.0891,-0.2178 0.0891,-0.6534 0,-0.4356 -0.0891,-0.653399 -0.0858,-0.2178 -0.3003,-0.2178 -0.2178,0 -0.3036,0.2178 -0.0825,0.217799 -0.0825,0.653399 z m 2.277,-1.207799 q 0.2046,0 0.3696,0.0627 0.1683,0.0627 0.264,0.1881 0.099,0.1254 0.099,0.3135 0,0.214499 -0.1254,0.349799 -0.1254,0.1353 -0.3069,0.2277 0.1353,0.066 0.2508,0.1551 0.1155,0.0858 0.1848,0.2046 0.0726,0.1155 0.0726,0.2739 0,0.198 -0.1023,0.3432 -0.1023,0.1419 -0.2838,0.2211 -0.1782,0.0792 -0.4191,0.0792 -0.3927,0 -0.6039,-0.1683 -0.2112,-0.1683 -0.2112,-0.462 0,-0.1617 0.0627,-0.2805 0.066,-0.1221 0.1716,-0.2079 0.1056,-0.0858 0.231,-0.1452 -0.1617,-0.099 -0.2772,-0.2376 -0.1122,-0.1419 -0.1122,-0.356399 0,-0.1848 0.099,-0.3102 0.1023,-0.1254 0.2673,-0.1881 0.1683,-0.0627 0.3696,-0.0627 z m -0.003,0.3135 q -0.1452,0 -0.2409,0.0726 -0.0924,0.0726 -0.0924,0.2046 0,0.145199 0.099,0.230999 0.1023,0.0825 0.2409,0.1485 0.1353,-0.0594 0.231,-0.1452 0.099,-0.0858 0.099,-0.234299 0,-0.132 -0.0957,-0.2046 -0.0924,-0.0726 -0.2409,-0.0726 z m -0.4125,1.455299 q 0,0.1452 0.1023,0.2409 0.1023,0.0924 0.3102,0.0924 0.2046,0 0.3102,-0.0924 0.1056,-0.0924 0.1056,-0.2409 0,-0.1485 -0.1221,-0.2442 -0.1188,-0.099 -0.2772,-0.1749 l -0.0462,-0.0231 q -0.1782,0.0792 -0.2805,0.1848 -0.1023,0.1056 -0.1023,0.2574 z m 3.0228,-1.201199 q 0,0.240899 -0.1419,0.386099 -0.1386,0.1419 -0.3597,0.1914 v 0.0099 q 0.2838,0.0363 0.429,0.1782 0.1452,0.1386 0.1452,0.3729 0,0.2046 -0.099,0.3663 -0.099,0.1617 -0.3069,0.2541 -0.2046,0.0924 -0.528,0.0924 -0.1914,0 -0.3564,-0.033 -0.165,-0.0297 -0.3102,-0.0957 v -0.3663 q 0.1485,0.0759 0.3168,0.1155 0.1683,0.0396 0.3168,0.0396 0.2871,0 0.4059,-0.1023 0.1188,-0.1056 0.1188,-0.2904 0,-0.1749 -0.1386,-0.2607 -0.1386,-0.0858 -0.462,-0.0858 h -0.198 v -0.3333 h 0.2013 q 0.3135,0 0.4323,-0.099 0.1188,-0.1023 0.1188,-0.2673 0,-0.141899 -0.0924,-0.221099 -0.0924,-0.0792 -0.2772,-0.0792 -0.1782,0 -0.3069,0.0594 -0.1287,0.0561 -0.231,0.1221 l -0.198,-0.2871 q 0.132,-0.099 0.3168,-0.1683 0.1881,-0.0693 0.4389,-0.0693 0.3663,0 0.5643,0.1551 0.2013,0.1518 0.2013,0.4158 z m 0.3366,1.108799 v -0.3498 h 0.8382 v 0.3498 z m 2.2407,0.7095 h -0.4158 v -1.4685 q 0,-0.1056 0.003,-0.2244 0.003,-0.118799 0.01,-0.221099 -0.033,0.033 -0.0825,0.0792 -0.0495,0.0429 -0.1023,0.0891 l -0.264,0.2112 -0.2079,-0.257399 0.7128,-0.5643 h 0.3465 z m 0.99331,0 0.9174,-1.996499 h -1.2045 v -0.3597 h 1.65 v 0.2805 l -0.9174,2.075699 z m 3.24059,-1.3497 q 0,0.2013 -0.0297,0.4026 -0.0297,0.198 -0.1023,0.3762 -0.0726,0.1749 -0.2013,0.3135 -0.1287,0.1353 -0.33,0.2145 -0.198,0.0759 -0.4818,0.0759 -0.066,0 -0.1584,-0.0066 -0.0924,-0.0066 -0.1485,-0.0198 v -0.3432 q 0.0594,0.0165 0.1353,0.0264 0.0759,0.0099 0.1485,0.0099 0.3003,0 0.462,-0.1056 0.165,-0.1089 0.231,-0.2937 0.0693,-0.1848 0.0792,-0.4158 h -0.0198 q -0.0726,0.1155 -0.1947,0.1947 -0.1221,0.0792 -0.3432,0.0792 -0.3003,0 -0.4851,-0.1914 -0.1815,-0.1914 -0.1815,-0.5412 0,-0.379499 0.2112,-0.593999 0.2112,-0.2178 0.5709,-0.2178 0.2343,0 0.4224,0.1122 0.1914,0.1122 0.3036,0.3432 0.1122,0.227699 0.1122,0.580799 z m -0.8316,-0.692999 q -0.1683,0 -0.2739,0.1122 -0.1056,0.1122 -0.1056,0.349799 0,0.1914 0.0891,0.3036 0.0924,0.1122 0.2805,0.1122 0.1287,0 0.2211,-0.0528 0.0957,-0.0561 0.1485,-0.1386 0.0528,-0.0858 0.0528,-0.1782 0,-0.1188 -0.0462,-0.2376 -0.0462,-0.118799 -0.1386,-0.194699 -0.0924,-0.0759 -0.2277,-0.0759 z m 1.93051,0.560999 q 0.2244,0 0.396,0.0825 0.1716,0.0792 0.2673,0.2376 0.099,0.1584 0.099,0.3861 0,0.3762 -0.2376,0.594 -0.2343,0.2145 -0.6798,0.2145 -0.1848,0 -0.3465,-0.033 -0.1617,-0.033 -0.2805,-0.0957 v -0.3696 q 0.1221,0.066 0.2937,0.1089 0.1716,0.0429 0.3234,0.0429 0.2343,0 0.3663,-0.1023 0.1353,-0.1023 0.1353,-0.3201 0,-0.1947 -0.1254,-0.297 -0.1254,-0.1056 -0.3894,-0.1056 -0.0924,0 -0.2013,0.0165 -0.1056,0.0165 -0.1749,0.033 l -0.1782,-0.099 0.0891,-1.168199 h 1.2408 v 0.363 h -0.8745 l -0.0495,0.544499 q 0.0561,-0.0099 0.132,-0.0198 0.0759,-0.0132 0.1947,-0.0132 z m 2.2176,-0.874499 -0.8778,2.356199 h -0.3861 l 0.8778,-2.356199 z m 0.9669,-0.0297 q 0.2046,0 0.3696,0.0627 0.1683,0.0627 0.264,0.1881 0.099,0.1254 0.099,0.3135 0,0.214499 -0.1254,0.349799 -0.1254,0.1353 -0.3069,0.2277 0.1353,0.066 0.2508,0.1551 0.1155,0.0858 0.1848,0.2046 0.0726,0.1155 0.0726,0.2739 0,0.198 -0.1023,0.3432 -0.1023,0.1419 -0.2838,0.2211 -0.1782,0.0792 -0.4191,0.0792 -0.3927,0 -0.6039,-0.1683 -0.2112,-0.1683 -0.2112,-0.462 0,-0.1617 0.0627,-0.2805 0.066,-0.1221 0.1716,-0.2079 0.1056,-0.0858 0.231,-0.1452 -0.1617,-0.099 -0.2772,-0.2376 -0.1122,-0.1419 -0.1122,-0.356399 0,-0.1848 0.099,-0.3102 0.1023,-0.1254 0.2673,-0.1881 0.1683,-0.0627 0.3696,-0.0627 z m -0.003,0.3135 q -0.1452,0 -0.2409,0.0726 -0.0924,0.0726 -0.0924,0.2046 0,0.145199 0.099,0.230999 0.1023,0.0825 0.2409,0.1485 0.1353,-0.0594 0.231,-0.1452 0.099,-0.0858 0.099,-0.234299 0,-0.132 -0.0957,-0.2046 -0.0924,-0.0726 -0.2409,-0.0726 z m -0.4125,1.455299 q 0,0.1452 0.1023,0.2409 0.1023,0.0924 0.3102,0.0924 0.2046,0 0.3102,-0.0924 0.1056,-0.0924 0.1056,-0.2409 0,-0.1485 -0.1221,-0.2442 -0.1188,-0.099 -0.2772,-0.1749 l -0.0462,-0.0231 q -0.1782,0.0792 -0.2805,0.1848 -0.1023,0.1056 -0.1023,0.2574 z m 3.1152,0.6171 h -1.6137 v -0.3069 l 0.6006,-0.6072 q 0.1782,-0.1815 0.2904,-0.3102 0.1155,-0.1287 0.1683,-0.2409 0.0561,-0.1155 0.0561,-0.2475 0,-0.161699 -0.0924,-0.240899 -0.0924,-0.0825 -0.2442,-0.0825 -0.1485,0 -0.2772,0.0627 -0.1287,0.0594 -0.2673,0.1716 l -0.2277,-0.2739 q 0.1452,-0.1254 0.33,-0.2178 0.1848,-0.0957 0.4653,-0.0957 0.2277,0 0.3927,0.0825 0.165,0.0792 0.2508,0.2211 0.0891,0.1419 0.0891,0.329999 0,0.1914 -0.0759,0.3531 -0.0759,0.1584 -0.2211,0.3201 -0.1419,0.1584 -0.3399,0.3432 l -0.3729,0.3597 v 0.0198 h 1.089 z m 1.07581,-2.385899 q 0.2046,0 0.3696,0.0627 0.1683,0.0627 0.264,0.1881 0.099,0.1254 0.099,0.3135 0,0.214499 -0.1254,0.349799 -0.1254,0.1353 -0.3069,0.2277 0.1353,0.066 0.2508,0.1551 0.1155,0.0858 0.1848,0.2046 0.0726,0.1155 0.0726,0.2739 0,0.198 -0.1023,0.3432 -0.1023,0.1419 -0.2838,0.2211 -0.1782,0.0792 -0.4191,0.0792 -0.3927,0 -0.6039,-0.1683 -0.2112,-0.1683 -0.2112,-0.462 0,-0.1617 0.0627,-0.2805 0.066,-0.1221 0.1716,-0.2079 0.1056,-0.0858 0.231,-0.1452 -0.1617,-0.099 -0.2772,-0.2376 -0.1122,-0.1419 -0.1122,-0.356399 0,-0.1848 0.099,-0.3102 0.1023,-0.1254 0.2673,-0.1881 0.1683,-0.0627 0.3696,-0.0627 z m -0.003,0.3135 q -0.1452,0 -0.2409,0.0726 -0.0924,0.0726 -0.0924,0.2046 0,0.145199 0.099,0.230999 0.1023,0.0825 0.2409,0.1485 0.1353,-0.0594 0.231,-0.1452 0.099,-0.0858 0.099,-0.234299 0,-0.132 -0.0957,-0.2046 -0.0924,-0.0726 -0.2409,-0.0726 z m -0.4125,1.455299 q 0,0.1452 0.1023,0.2409 0.1023,0.0924 0.3102,0.0924 0.2046,0 0.3102,-0.0924 0.1056,-0.0924 0.1056,-0.2409 0,-0.1485 -0.1221,-0.2442 -0.1188,-0.099 -0.2772,-0.1749 l -0.0462,-0.0231 q -0.1782,0.0792 -0.2805,0.1848 -0.1023,0.1056 -0.1023,0.2574 z"
       id="text76"
       style="font-weight:600;font-size:3.3px;font-family:'Noto Sans Thai', sans-serif;fill:#0d5fac"
       aria-label="โรงงานขอนแก่น • PL-50 • ใบอนุญาตเลขที่ 3083-1795/828" />
  </g>
  <g
     shape-rendering="crispEdges"
     id="g632">
    <rect
       x="160.1"
       y="11.0"
       width="30.7"
       height="30.7"
       rx="1.2"
       fill="#ffffff"
       stroke="#0d5fac"
       stroke-width="0.65"
       id="rect76" />
    <rect
       x="163.90000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect77" />
    <rect
       x="164.60000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect78" />
    <rect
       x="165.30000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect79" />
    <rect
       x="166.00000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect80" />
    <rect
       x="166.70000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect81" />
    <rect
       x="167.40000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect82" />
    <rect
       x="168.10000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect83" />
    <rect
       x="169.50000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect84" />
    <rect
       x="170.20000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect85" />
    <rect
       x="172.30000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect86" />
    <rect
       x="173.00000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect87" />
    <rect
       x="174.40000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect88" />
    <rect
       x="175.10000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect89" />
    <rect
       x="176.50000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect90" />
    <rect
       x="177.90000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect91" />
    <rect
       x="178.60000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect92" />
    <rect
       x="180.00000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect93" />
    <rect
       x="180.70000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect94" />
    <rect
       x="182.10000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect95" />
    <rect
       x="182.80000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect96" />
    <rect
       x="183.50000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect97" />
    <rect
       x="184.20000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect98" />
    <rect
       x="184.90000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect99" />
    <rect
       x="185.60000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect100" />
    <rect
       x="186.30000"
       y="14.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect101" />
    <rect
       x="163.90000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect102" />
    <rect
       x="168.10000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect103" />
    <rect
       x="171.60000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect104" />
    <rect
       x="172.30000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect105" />
    <rect
       x="173.00000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect106" />
    <rect
       x="173.70000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect107" />
    <rect
       x="176.50000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect108" />
    <rect
       x="177.20000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect109" />
    <rect
       x="180.70000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect110" />
    <rect
       x="182.10000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect111" />
    <rect
       x="186.30000"
       y="15.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect112" />
    <rect
       x="163.90000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect113" />
    <rect
       x="165.30000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect114" />
    <rect
       x="166.00000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect115" />
    <rect
       x="166.70000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect116" />
    <rect
       x="168.10000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect117" />
    <rect
       x="170.90000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect118" />
    <rect
       x="171.60000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect119" />
    <rect
       x="173.70000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect120" />
    <rect
       x="175.80000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect121" />
    <rect
       x="176.50000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect122" />
    <rect
       x="177.20000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect123" />
    <rect
       x="177.90000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect124" />
    <rect
       x="178.60000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect125" />
    <rect
       x="179.30000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect126" />
    <rect
       x="182.10000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect127" />
    <rect
       x="183.50000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect128" />
    <rect
       x="184.20000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect129" />
    <rect
       x="184.90000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect130" />
    <rect
       x="186.30000"
       y="16.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect131" />
    <rect
       x="163.90000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect132" />
    <rect
       x="165.30000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect133" />
    <rect
       x="166.00000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect134" />
    <rect
       x="166.70000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect135" />
    <rect
       x="168.10000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect136" />
    <rect
       x="169.50000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect137" />
    <rect
       x="171.60000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect138" />
    <rect
       x="172.30000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect139" />
    <rect
       x="175.10000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect140" />
    <rect
       x="175.80000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect141" />
    <rect
       x="177.20000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect142" />
    <rect
       x="178.60000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect143" />
    <rect
       x="179.30000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect144" />
    <rect
       x="180.00000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect145" />
    <rect
       x="180.70000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect146" />
    <rect
       x="182.10000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect147" />
    <rect
       x="183.50000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect148" />
    <rect
       x="184.20000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect149" />
    <rect
       x="184.90000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect150" />
    <rect
       x="186.30000"
       y="16.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect151" />
    <rect
       x="163.90000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect152" />
    <rect
       x="165.30000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect153" />
    <rect
       x="166.00000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect154" />
    <rect
       x="166.70000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect155" />
    <rect
       x="168.10000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect156" />
    <rect
       x="169.50000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect157" />
    <rect
       x="170.90000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect158" />
    <rect
       x="173.00000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect159" />
    <rect
       x="175.10000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect160" />
    <rect
       x="175.80000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect161" />
    <rect
       x="177.20000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect162" />
    <rect
       x="178.60000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect163" />
    <rect
       x="180.00000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect164" />
    <rect
       x="180.70000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect165" />
    <rect
       x="182.10000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect166" />
    <rect
       x="183.50000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect167" />
    <rect
       x="184.20000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect168" />
    <rect
       x="184.90000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect169" />
    <rect
       x="186.30000"
       y="17.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect170" />
    <rect
       x="163.90000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect171" />
    <rect
       x="168.10000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect172" />
    <rect
       x="169.50000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect173" />
    <rect
       x="171.60000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect174" />
    <rect
       x="172.30000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect175" />
    <rect
       x="173.00000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect176" />
    <rect
       x="173.70000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect177" />
    <rect
       x="174.40000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect178" />
    <rect
       x="175.80000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect179" />
    <rect
       x="177.90000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect180" />
    <rect
       x="178.60000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect181" />
    <rect
       x="179.30000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect182" />
    <rect
       x="180.70000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect183" />
    <rect
       x="182.10000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect184" />
    <rect
       x="186.30000"
       y="18.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect185" />
    <rect
       x="163.90000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect186" />
    <rect
       x="164.60000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect187" />
    <rect
       x="165.30000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect188" />
    <rect
       x="166.00000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect189" />
    <rect
       x="166.70000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect190" />
    <rect
       x="167.40000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect191" />
    <rect
       x="168.10000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect192" />
    <rect
       x="169.50000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect193" />
    <rect
       x="170.90000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect194" />
    <rect
       x="172.30000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect195" />
    <rect
       x="173.70000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect196" />
    <rect
       x="175.10000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect197" />
    <rect
       x="176.50000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect198" />
    <rect
       x="177.90000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect199" />
    <rect
       x="179.30000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect200" />
    <rect
       x="180.70000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect201" />
    <rect
       x="182.10000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect202" />
    <rect
       x="182.80000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect203" />
    <rect
       x="183.50000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect204" />
    <rect
       x="184.20000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect205" />
    <rect
       x="184.90000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect206" />
    <rect
       x="185.60000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect207" />
    <rect
       x="186.30000"
       y="19.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect208" />
    <rect
       x="169.50000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect209" />
    <rect
       x="170.90000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect210" />
    <rect
       x="171.60000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect211" />
    <rect
       x="172.30000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect212" />
    <rect
       x="175.80000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect213" />
    <rect
       x="177.20000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect214" />
    <rect
       x="177.90000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect215" />
    <rect
       x="178.60000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect216" />
    <rect
       x="179.30000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect217" />
    <rect
       x="180.00000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect218" />
    <rect
       x="180.70000"
       y="19.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect219" />
    <rect
       x="163.90000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect220" />
    <rect
       x="166.70000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect221" />
    <rect
       x="168.10000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect222" />
    <rect
       x="168.80000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect223" />
    <rect
       x="169.50000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect224" />
    <rect
       x="170.20000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect225" />
    <rect
       x="171.60000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect226" />
    <rect
       x="174.40000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect227" />
    <rect
       x="175.80000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect228" />
    <rect
       x="177.90000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect229" />
    <rect
       x="178.60000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect230" />
    <rect
       x="179.30000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect231" />
    <rect
       x="180.70000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect232" />
    <rect
       x="181.40000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect233" />
    <rect
       x="182.10000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect234" />
    <rect
       x="182.80000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect235" />
    <rect
       x="183.50000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect236" />
    <rect
       x="184.20000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect237" />
    <rect
       x="186.30000"
       y="20.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect238" />
    <rect
       x="164.60000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect239" />
    <rect
       x="165.30000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect240" />
    <rect
       x="166.00000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect241" />
    <rect
       x="166.70000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect242" />
    <rect
       x="167.40000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect243" />
    <rect
       x="168.80000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect244" />
    <rect
       x="169.50000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect245" />
    <rect
       x="170.20000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect246" />
    <rect
       x="170.90000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect247" />
    <rect
       x="171.60000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect248" />
    <rect
       x="172.30000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect249" />
    <rect
       x="173.70000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect250" />
    <rect
       x="174.40000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect251" />
    <rect
       x="175.80000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect252" />
    <rect
       x="178.60000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect253" />
    <rect
       x="179.30000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect254" />
    <rect
       x="180.00000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect255" />
    <rect
       x="181.40000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect256" />
    <rect
       x="184.20000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect257" />
    <rect
       x="184.90000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect258" />
    <rect
       x="185.60000"
       y="21.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect259" />
    <rect
       x="163.90000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect260" />
    <rect
       x="166.70000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect261" />
    <rect
       x="168.10000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect262" />
    <rect
       x="168.80000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect263" />
    <rect
       x="172.30000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect264" />
    <rect
       x="173.00000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect265" />
    <rect
       x="173.70000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect266" />
    <rect
       x="174.40000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect267" />
    <rect
       x="176.50000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect268" />
    <rect
       x="177.90000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect269" />
    <rect
       x="180.00000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect270" />
    <rect
       x="184.20000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect271" />
    <rect
       x="185.60000"
       y="21.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect272" />
    <rect
       x="164.60000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect273" />
    <rect
       x="166.00000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect274" />
    <rect
       x="166.70000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect275" />
    <rect
       x="168.80000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect276" />
    <rect
       x="170.90000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect277" />
    <rect
       x="171.60000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect278" />
    <rect
       x="172.30000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect279" />
    <rect
       x="173.00000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect280" />
    <rect
       x="174.40000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect281" />
    <rect
       x="175.10000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect282" />
    <rect
       x="177.20000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect283" />
    <rect
       x="177.90000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect284" />
    <rect
       x="179.30000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect285" />
    <rect
       x="180.00000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect286" />
    <rect
       x="180.70000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect287" />
    <rect
       x="185.60000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect288" />
    <rect
       x="186.30000"
       y="22.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect289" />
    <rect
       x="164.60000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect290" />
    <rect
       x="166.70000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect291" />
    <rect
       x="167.40000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect292" />
    <rect
       x="168.10000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect293" />
    <rect
       x="168.80000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect294" />
    <rect
       x="171.60000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect295" />
    <rect
       x="172.30000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect296" />
    <rect
       x="173.00000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect297" />
    <rect
       x="174.40000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect298" />
    <rect
       x="175.10000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect299" />
    <rect
       x="177.20000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect300" />
    <rect
       x="179.30000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect301" />
    <rect
       x="181.40000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect302" />
    <rect
       x="182.10000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect303" />
    <rect
       x="182.80000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect304" />
    <rect
       x="183.50000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect305" />
    <rect
       x="184.20000"
       y="23.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect306" />
    <rect
       x="163.90000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect307" />
    <rect
       x="164.60000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect308" />
    <rect
       x="166.70000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect309" />
    <rect
       x="168.80000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect310" />
    <rect
       x="169.50000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect311" />
    <rect
       x="171.60000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect312" />
    <rect
       x="172.30000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect313" />
    <rect
       x="173.70000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect314" />
    <rect
       x="176.50000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect315" />
    <rect
       x="177.20000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect316" />
    <rect
       x="177.90000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect317" />
    <rect
       x="180.00000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect318" />
    <rect
       x="180.70000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect319" />
    <rect
       x="184.20000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect320" />
    <rect
       x="184.90000"
       y="23.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect321" />
    <rect
       x="165.30000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect322" />
    <rect
       x="166.00000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect323" />
    <rect
       x="166.70000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect324" />
    <rect
       x="167.40000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect325" />
    <rect
       x="168.10000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect326" />
    <rect
       x="169.50000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect327" />
    <rect
       x="173.00000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect328" />
    <rect
       x="174.40000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect329" />
    <rect
       x="175.80000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect330" />
    <rect
       x="176.50000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect331" />
    <rect
       x="177.90000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect332" />
    <rect
       x="178.60000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect333" />
    <rect
       x="180.00000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect334" />
    <rect
       x="181.40000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect335" />
    <rect
       x="182.10000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect336" />
    <rect
       x="184.20000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect337" />
    <rect
       x="185.60000"
       y="24.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect338" />
    <rect
       x="167.40000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect339" />
    <rect
       x="170.20000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect340" />
    <rect
       x="171.60000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect341" />
    <rect
       x="173.00000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect342" />
    <rect
       x="174.40000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect343" />
    <rect
       x="175.10000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect344" />
    <rect
       x="175.80000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect345" />
    <rect
       x="178.60000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect346" />
    <rect
       x="179.30000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect347" />
    <rect
       x="180.00000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect348" />
    <rect
       x="181.40000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect349" />
    <rect
       x="182.10000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect350" />
    <rect
       x="182.80000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect351" />
    <rect
       x="183.50000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect352" />
    <rect
       x="184.20000"
       y="25.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect353" />
    <rect
       x="163.90000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect354" />
    <rect
       x="166.00000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect355" />
    <rect
       x="166.70000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect356" />
    <rect
       x="167.40000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect357" />
    <rect
       x="168.10000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect358" />
    <rect
       x="168.80000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect359" />
    <rect
       x="170.20000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect360" />
    <rect
       x="171.60000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect361" />
    <rect
       x="172.30000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect362" />
    <rect
       x="173.00000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect363" />
    <rect
       x="173.70000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect364" />
    <rect
       x="175.80000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect365" />
    <rect
       x="177.20000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect366" />
    <rect
       x="177.90000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect367" />
    <rect
       x="178.60000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect368" />
    <rect
       x="179.30000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect369" />
    <rect
       x="180.00000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect370" />
    <rect
       x="180.70000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect371" />
    <rect
       x="182.10000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect372" />
    <rect
       x="183.50000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect373" />
    <rect
       x="184.20000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect374" />
    <rect
       x="185.60000"
       y="26.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect375" />
    <rect
       x="165.30000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect376" />
    <rect
       x="166.00000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect377" />
    <rect
       x="167.40000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect378" />
    <rect
       x="168.80000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect379" />
    <rect
       x="170.20000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect380" />
    <rect
       x="171.60000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect381" />
    <rect
       x="173.00000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect382" />
    <rect
       x="174.40000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect383" />
    <rect
       x="175.10000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect384" />
    <rect
       x="176.50000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect385" />
    <rect
       x="180.00000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect386" />
    <rect
       x="181.40000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect387" />
    <rect
       x="184.20000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect388" />
    <rect
       x="184.90000"
       y="26.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect389" />
    <rect
       x="164.60000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect390" />
    <rect
       x="165.30000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect391" />
    <rect
       x="168.10000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect392" />
    <rect
       x="168.80000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect393" />
    <rect
       x="169.50000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect394" />
    <rect
       x="170.20000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect395" />
    <rect
       x="170.90000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect396" />
    <rect
       x="174.40000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect397" />
    <rect
       x="175.80000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect398" />
    <rect
       x="178.60000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect399" />
    <rect
       x="179.30000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect400" />
    <rect
       x="180.00000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect401" />
    <rect
       x="182.80000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect402" />
    <rect
       x="184.20000"
       y="27.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect403" />
    <rect
       x="165.30000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect404" />
    <rect
       x="166.00000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect405" />
    <rect
       x="170.20000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect406" />
    <rect
       x="172.30000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect407" />
    <rect
       x="173.00000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect408" />
    <rect
       x="173.70000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect409" />
    <rect
       x="175.80000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect410" />
    <rect
       x="176.50000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect411" />
    <rect
       x="177.20000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect412" />
    <rect
       x="177.90000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect413" />
    <rect
       x="178.60000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect414" />
    <rect
       x="180.00000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect415" />
    <rect
       x="182.80000"
       y="28.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect416" />
    <rect
       x="164.60000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect417" />
    <rect
       x="166.00000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect418" />
    <rect
       x="166.70000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect419" />
    <rect
       x="168.10000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect420" />
    <rect
       x="168.80000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect421" />
    <rect
       x="169.50000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect422" />
    <rect
       x="172.30000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect423" />
    <rect
       x="173.00000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect424" />
    <rect
       x="174.40000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect425" />
    <rect
       x="176.50000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect426" />
    <rect
       x="177.90000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect427" />
    <rect
       x="181.40000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect428" />
    <rect
       x="182.10000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect429" />
    <rect
       x="182.80000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect430" />
    <rect
       x="183.50000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect431" />
    <rect
       x="184.20000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect432" />
    <rect
       x="185.60000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect433" />
    <rect
       x="186.30000"
       y="28.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect434" />
    <rect
       x="163.90000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect435" />
    <rect
       x="166.70000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect436" />
    <rect
       x="167.40000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect437" />
    <rect
       x="168.80000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect438" />
    <rect
       x="169.50000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect439" />
    <rect
       x="170.90000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect440" />
    <rect
       x="171.60000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect441" />
    <rect
       x="173.70000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect442" />
    <rect
       x="175.10000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect443" />
    <rect
       x="175.80000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect444" />
    <rect
       x="177.20000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect445" />
    <rect
       x="178.60000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect446" />
    <rect
       x="179.30000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect447" />
    <rect
       x="180.00000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect448" />
    <rect
       x="180.70000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect449" />
    <rect
       x="184.20000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect450" />
    <rect
       x="185.60000"
       y="29.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect451" />
    <rect
       x="166.70000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect452" />
    <rect
       x="168.10000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect453" />
    <rect
       x="169.50000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect454" />
    <rect
       x="170.20000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect455" />
    <rect
       x="170.90000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect456" />
    <rect
       x="172.30000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect457" />
    <rect
       x="175.10000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect458" />
    <rect
       x="175.80000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect459" />
    <rect
       x="177.20000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect460" />
    <rect
       x="178.60000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect461" />
    <rect
       x="179.30000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect462" />
    <rect
       x="180.00000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect463" />
    <rect
       x="182.80000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect464" />
    <rect
       x="183.50000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect465" />
    <rect
       x="185.60000"
       y="30.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect466" />
    <rect
       x="165.30000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect467" />
    <rect
       x="166.00000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect468" />
    <rect
       x="166.70000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect469" />
    <rect
       x="167.40000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect470" />
    <rect
       x="168.80000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect471" />
    <rect
       x="171.60000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect472" />
    <rect
       x="172.30000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect473" />
    <rect
       x="173.00000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect474" />
    <rect
       x="173.70000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect475" />
    <rect
       x="175.80000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect476" />
    <rect
       x="177.20000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect477" />
    <rect
       x="177.90000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect478" />
    <rect
       x="178.60000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect479" />
    <rect
       x="181.40000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect480" />
    <rect
       x="182.80000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect481" />
    <rect
       x="183.50000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect482" />
    <rect
       x="184.20000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect483" />
    <rect
       x="185.60000"
       y="30.90000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect484" />
    <rect
       x="163.90000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect485" />
    <rect
       x="164.60000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect486" />
    <rect
       x="165.30000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect487" />
    <rect
       x="168.10000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect488" />
    <rect
       x="168.80000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect489" />
    <rect
       x="170.90000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect490" />
    <rect
       x="171.60000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect491" />
    <rect
       x="173.70000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect492" />
    <rect
       x="174.40000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect493" />
    <rect
       x="175.80000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect494" />
    <rect
       x="176.50000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect495" />
    <rect
       x="177.90000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect496" />
    <rect
       x="178.60000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect497" />
    <rect
       x="179.30000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect498" />
    <rect
       x="180.70000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect499" />
    <rect
       x="181.40000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect500" />
    <rect
       x="182.10000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect501" />
    <rect
       x="182.80000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect502" />
    <rect
       x="183.50000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect503" />
    <rect
       x="184.20000"
       y="31.60000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect504" />
    <rect
       x="169.50000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect505" />
    <rect
       x="170.20000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect506" />
    <rect
       x="171.60000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect507" />
    <rect
       x="172.30000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect508" />
    <rect
       x="173.70000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect509" />
    <rect
       x="174.40000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect510" />
    <rect
       x="175.80000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect511" />
    <rect
       x="176.50000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect512" />
    <rect
       x="177.90000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect513" />
    <rect
       x="178.60000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect514" />
    <rect
       x="179.30000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect515" />
    <rect
       x="180.00000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect516" />
    <rect
       x="180.70000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect517" />
    <rect
       x="183.50000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect518" />
    <rect
       x="184.90000"
       y="32.30000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect519" />
    <rect
       x="163.90000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect520" />
    <rect
       x="164.60000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect521" />
    <rect
       x="165.30000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect522" />
    <rect
       x="166.00000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect523" />
    <rect
       x="166.70000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect524" />
    <rect
       x="167.40000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect525" />
    <rect
       x="168.10000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect526" />
    <rect
       x="169.50000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect527" />
    <rect
       x="170.20000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect528" />
    <rect
       x="171.60000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect529" />
    <rect
       x="172.30000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect530" />
    <rect
       x="173.00000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect531" />
    <rect
       x="174.40000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect532" />
    <rect
       x="176.50000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect533" />
    <rect
       x="177.90000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect534" />
    <rect
       x="180.70000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect535" />
    <rect
       x="182.10000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect536" />
    <rect
       x="183.50000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect537" />
    <rect
       x="184.20000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect538" />
    <rect
       x="185.60000"
       y="33.00000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect539" />
    <rect
       x="163.90000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect540" />
    <rect
       x="168.10000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect541" />
    <rect
       x="172.30000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect542" />
    <rect
       x="173.70000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect543" />
    <rect
       x="174.40000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect544" />
    <rect
       x="175.10000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect545" />
    <rect
       x="179.30000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect546" />
    <rect
       x="180.70000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect547" />
    <rect
       x="183.50000"
       y="33.70000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect548" />
    <rect
       x="163.90000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect549" />
    <rect
       x="165.30000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect550" />
    <rect
       x="166.00000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect551" />
    <rect
       x="166.70000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect552" />
    <rect
       x="168.10000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect553" />
    <rect
       x="169.50000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect554" />
    <rect
       x="170.90000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect555" />
    <rect
       x="171.60000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect556" />
    <rect
       x="173.70000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect557" />
    <rect
       x="175.10000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect558" />
    <rect
       x="179.30000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect559" />
    <rect
       x="180.70000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect560" />
    <rect
       x="181.40000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect561" />
    <rect
       x="182.10000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect562" />
    <rect
       x="182.80000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect563" />
    <rect
       x="183.50000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect564" />
    <rect
       x="184.20000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect565" />
    <rect
       x="185.60000"
       y="34.40000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect566" />
    <rect
       x="163.90000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect567" />
    <rect
       x="165.30000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect568" />
    <rect
       x="166.00000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect569" />
    <rect
       x="166.70000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect570" />
    <rect
       x="168.10000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect571" />
    <rect
       x="173.00000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect572" />
    <rect
       x="175.80000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect573" />
    <rect
       x="176.50000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect574" />
    <rect
       x="177.20000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect575" />
    <rect
       x="177.90000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect576" />
    <rect
       x="180.70000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect577" />
    <rect
       x="182.10000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect578" />
    <rect
       x="182.80000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect579" />
    <rect
       x="183.50000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect580" />
    <rect
       x="184.90000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect581" />
    <rect
       x="185.60000"
       y="35.10000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect582" />
    <rect
       x="163.90000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect583" />
    <rect
       x="165.30000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect584" />
    <rect
       x="166.00000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect585" />
    <rect
       x="166.70000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect586" />
    <rect
       x="168.10000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect587" />
    <rect
       x="170.20000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect588" />
    <rect
       x="170.90000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect589" />
    <rect
       x="171.60000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect590" />
    <rect
       x="174.40000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect591" />
    <rect
       x="176.50000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect592" />
    <rect
       x="177.90000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect593" />
    <rect
       x="179.30000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect594" />
    <rect
       x="180.00000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect595" />
    <rect
       x="181.40000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect596" />
    <rect
       x="182.10000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect597" />
    <rect
       x="182.80000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect598" />
    <rect
       x="183.50000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect599" />
    <rect
       x="184.90000"
       y="35.80000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect600" />
    <rect
       x="163.90000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect601" />
    <rect
       x="168.10000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect602" />
    <rect
       x="172.30000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect603" />
    <rect
       x="173.70000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect604" />
    <rect
       x="174.40000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect605" />
    <rect
       x="175.10000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect606" />
    <rect
       x="175.80000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect607" />
    <rect
       x="176.50000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect608" />
    <rect
       x="178.60000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect609" />
    <rect
       x="180.70000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect610" />
    <rect
       x="182.10000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect611" />
    <rect
       x="184.20000"
       y="36.50000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect612" />
    <rect
       x="163.90000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect613" />
    <rect
       x="164.60000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect614" />
    <rect
       x="165.30000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect615" />
    <rect
       x="166.00000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect616" />
    <rect
       x="166.70000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect617" />
    <rect
       x="167.40000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect618" />
    <rect
       x="168.10000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect619" />
    <rect
       x="169.50000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect620" />
    <rect
       x="170.20000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect621" />
    <rect
       x="171.60000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect622" />
    <rect
       x="172.30000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect623" />
    <rect
       x="175.10000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect624" />
    <rect
       x="177.20000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect625" />
    <rect
       x="177.90000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect626" />
    <rect
       x="178.60000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect627" />
    <rect
       x="179.30000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect628" />
    <rect
       x="180.70000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect629" />
    <rect
       x="182.10000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect630" />
    <rect
       x="184.20000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect631" />
    <rect
       x="186.30000"
       y="37.20000"
       width="0.70500"
       height="0.70500"
       fill="#000000"
       id="rect632" />
  </g>
  <path
     d="m 159.52869,45.636498 q -0.31755,0 -0.4891,-0.14965 -0.1679,-0.14965 -0.1679,-0.41975 0,-0.292 0.2044,-0.4672 0.20805,-0.1752 0.65335,-0.21535 l 0.39055,-0.03285 v -0.04015 q 0,-0.15695 -0.0913,-0.2263 -0.0913,-0.06935 -0.27375,-0.06935 -0.19345,0 -0.3796,0.06205 -0.18615,0.0584 -0.3139,0.1314 v -0.50005 q 0.10585,-0.0511 0.30295,-0.10585 0.20075,-0.05475 0.4599,-0.05475 0.1387,0 0.25915,0.0219 0.12045,0.0219 0.20805,0.0803 0.0876,-0.07665 0.084,-0.1825 h 0.5037 q 0,0.12775 -0.0584,0.25185 -0.0547,0.1241 -0.1971,0.21535 0.0985,0.14235 0.0985,0.4088 v 1.2556 h -0.60225 v -0.81395 l -0.3212,0.0365 q -0.1752,0.01825 -0.24455,0.07665 -0.0693,0.0584 -0.0693,0.14965 0,0.0876 0.0584,0.1387 0.062,0.04745 0.15695,0.04745 0.0401,0 0.0803,-0.0073 0.0402,-0.01095 0.0767,-0.0219 l 0.0474,0.37595 q -0.0694,0.0219 -0.17155,0.0365 -0.0986,0.01825 -0.2044,0.01825 z m 2.2776,0 q -0.5402,0 -0.5402,-0.49275 v -1.54395 h 0.61685 v 1.4673 q 0,0.12775 0.12045,0.12775 0.0584,0 0.12045,-0.0219 l 0.0548,0.3869 q -0.0694,0.03285 -0.16425,0.05475 -0.0949,0.0219 -0.20805,0.0219 z m 1.15705,0 q -0.5402,0 -0.5402,-0.49275 v -1.54395 h 0.61685 v 1.4673 q 0,0.12775 0.12045,0.12775 0.0584,0 0.12045,-0.0219 l 0.0548,0.3869 q -0.0694,0.03285 -0.16425,0.05475 -0.0949,0.0219 -0.20805,0.0219 z m 0.68986,-0.0365 v -0.584 q 0,-0.22995 0.0876,-0.3577 0.0876,-0.1314 0.2628,-0.18615 l 0.004,-0.0146 -0.39055,-0.14235 v -0.08395 q 0,-0.1898 0.1095,-0.3431 0.1095,-0.15695 0.3212,-0.2482 0.21535,-0.09125 0.5256,-0.09125 0.44165,0 0.6862,0.20075 0.24455,0.20075 0.24455,0.59495 v 1.2556 h -0.6205 v -1.22275 q 0,-0.3358 -0.3285,-0.3358 -0.1533,0 -0.22265,0.0657 -0.0693,0.06205 -0.0767,0.14965 l 0.30295,0.13505 -0.0438,0.25915 q -0.1314,0.01095 -0.18615,0.09855 -0.0548,0.08395 -0.0548,0.219 v 0.63145 z m 3.00395,0.0365 q -0.33945,0 -0.51465,-0.20075 -0.17155,-0.20075 -0.17155,-0.58035 v -1.2556 h 0.6205 v 1.13515 q 0,0.1971 0.0693,0.28105 0.073,0.08395 0.2117,0.08395 0.1752,0 0.2701,-0.14235 0.0949,-0.14235 0.0949,-0.46355 v -0.89425 h 0.61685 v 2.0002 h -0.46355 l -0.0694,-0.31025 h -0.0365 q -0.062,0.14235 -0.2117,0.24455 -0.146,0.1022 -0.4161,0.1022 z m 2.48929,0 q -0.33215,0 -0.5183,-0.1314 -0.1825,-0.1314 -0.25915,-0.36865 -0.073,-0.23725 -0.073,-0.55845 0,-0.52925 0.1606,-0.77015 0.1606,-0.24455 0.47815,-0.24455 0.1314,0 0.22995,0.0511 0.0985,0.0511 0.16425,0.19345 h 0.0146 q 0.0548,-0.146 0.17885,-0.19345 0.12775,-0.0511 0.25915,-0.0511 0.25915,0 0.38325,0.1387 0.12775,0.1387 0.12775,0.39785 v 1.50015 h -0.61685 v -1.3651 q 0,-0.10585 -0.0328,-0.14235 -0.0292,-0.0365 -0.0767,-0.0365 -0.0584,0 -0.0913,0.0365 -0.0292,0.03285 -0.0402,0.1241 h -0.22265 q -0.011,-0.09855 -0.0474,-0.12775 -0.0328,-0.03285 -0.0803,-0.03285 -0.0767,0 -0.12045,0.1168 -0.0402,0.1168 -0.0402,0.4088 0,0.28835 0.0657,0.44165 0.0657,0.14965 0.2555,0.14965 0.0767,0 0.1241,-0.01825 l 0.0584,0.43435 q -0.12045,0.04745 -0.28105,0.04745 z m 2.3506,0.0146 q -0.219,0 -0.44895,-0.0511 -0.2263,-0.04745 -0.4088,-0.146 l 0.17155,-0.4891 q 0.1095,0.0657 0.28835,0.13505 0.17885,0.06935 0.36865,0.06935 0.24821,0 0.24821,-0.13505 0,-0.08395 -0.10951,-0.12775 -0.1095,-0.04745 -0.31025,-0.12045 -0.17885,-0.0657 -0.3139,-0.14235 -0.13505,-0.07665 -0.20805,-0.19345 -0.073,-0.1168 -0.073,-0.2993 0,-0.21535 0.10585,-0.34675 0.1095,-0.1314 0.2993,-0.19345 0.19345,-0.06205 0.438,-0.06205 0.21171,0 0.37961,0.0365 0.1679,0.03285 0.2628,0.0803 v 0.47815 q -0.0657,-0.02555 -0.17155,-0.05475 -0.1022,-0.03285 -0.219,-0.0511 -0.11315,-0.0219 -0.21901,-0.0219 -0.12045,0 -0.1898,0.03285 -0.0694,0.0292 -0.0694,0.09125 0,0.0803 0.12045,0.12045 0.12045,0.04015 0.31756,0.1095 0.292,0.1022 0.43435,0.2409 0.14235,0.1387 0.14235,0.3869 0,0.17155 -0.0767,0.3212 -0.073,0.14965 -0.2555,0.2409 -0.1825,0.09125 -0.50371,0.09125 z m 1.76296,0 q -0.1971,0 -0.3723,-0.04745 -0.1752,-0.0438 -0.31755,-0.12045 l 0.1606,-0.4453 q 0.0803,0.04745 0.1971,0.08395 0.12045,0.0365 0.22265,0.0365 0.1825,0 0.29565,-0.1387 0.11315,-0.14235 0.11315,-0.4307 0,-0.26645 -0.11315,-0.40515 -0.1095,-0.14235 -0.34675,-0.14235 -0.12045,0 -0.25185,0.0365 -0.1314,0.0365 -0.21535,0.0876 v -0.5037 q 0.1168,-0.0511 0.2628,-0.0803 0.14965,-0.03285 0.32485,-0.03285 0.50735,0 0.7373,0.27375 0.2336,0.27375 0.2336,0.7665 0,0.5329 -0.24455,0.79935 -0.24455,0.2628 -0.6862,0.2628 z m 1.4673,-0.0511 v -0.82125 h -0.1898 v -0.36135 h 0.74095 v 0.71905 h 0.0182 q 0.16425,0 0.2555,-0.1387 0.0913,-0.1387 0.0913,-0.4015 0,-0.31755 -0.146,-0.438 -0.14235,-0.1241 -0.39785,-0.1241 -0.19345,0 -0.34675,0.05475 -0.1533,0.05475 -0.26645,0.1241 v -0.50735 q 0.1241,-0.0584 0.3066,-0.10585 0.18615,-0.0511 0.43435,-0.0511 0.5402,0 0.79205,0.25185 0.25185,0.25185 0.25185,0.7811 0,0.49275 -0.23725,0.75555 -0.2336,0.2628 -0.79205,0.2628 z m 2.4674,0.0365 q -0.31755,0 -0.4891,-0.14965 -0.1679,-0.14965 -0.1679,-0.41975 0,-0.292 0.2044,-0.4672 0.20805,-0.1752 0.65335,-0.21535 l 0.39055,-0.03285 v -0.04015 q 0,-0.15695 -0.0913,-0.2263 -0.0913,-0.06935 -0.27375,-0.06935 -0.19345,0 -0.3796,0.06205 -0.18615,0.0584 -0.3139,0.1314 v -0.50005 q 0.10585,-0.0511 0.30295,-0.10585 0.20075,-0.05475 0.4599,-0.05475 0.1387,0 0.25915,0.0219 0.12045,0.0219 0.20805,0.0803 0.0876,-0.07665 0.084,-0.1825 h 0.5037 q 0,0.12775 -0.0584,0.25185 -0.0547,0.1241 -0.1971,0.21535 0.0985,0.14235 0.0985,0.4088 v 1.2556 H 177.786 v -0.81395 l -0.3212,0.0365 q -0.1752,0.01825 -0.24455,0.07665 -0.0693,0.0584 -0.0693,0.14965 0,0.0876 0.0584,0.1387 0.062,0.04745 0.15695,0.04745 0.0401,0 0.0803,-0.0073 0.0402,-0.01095 0.0767,-0.0219 l 0.0474,0.37595 q -0.0694,0.0219 -0.17155,0.0365 -0.0986,0.01825 -0.2044,0.01825 z m 2.50755,0.0146 q -0.46355,0 -0.6862,-0.219 -0.22265,-0.22265 -0.22265,-0.64605 0,-0.06935 0.004,-0.17885 0.007,-0.11315 0.0182,-0.1898 h 0.91615 v 0.3723 h -0.33215 v 0.04745 q 0,0.36135 0.2993,0.36135 0.1679,0 0.2555,-0.12045 0.0913,-0.12045 0.0913,-0.4307 0,-0.29565 -0.1095,-0.44895 -0.10585,-0.15695 -0.4015,-0.15695 -0.10585,0 -0.2263,0.02555 -0.1168,0.0219 -0.2263,0.06205 -0.10585,0.0365 -0.1752,0.073 v -0.50735 q 0.0839,-0.0438 0.20805,-0.07665 0.1241,-0.03285 0.26645,-0.0511 0.14235,-0.01825 0.2774,-0.01825 0.365,0 0.58765,0.1314 0.2263,0.12775 0.3285,0.36865 0.10585,0.23725 0.10585,0.5621 0,0.5037 -0.2336,0.7738 -0.22995,0.26645 -0.7446,0.26645 z m 2.2922,0 q -0.49275,0 -0.7154,-0.22995 -0.22265,-0.22995 -0.22265,-0.6643 v -1.15705 h 0.6205 v 1.19355 q 0,0.17885 0.073,0.27375 0.0767,0.09125 0.24455,0.09125 0.16425,0 0.2409,-0.09125 0.0767,-0.0949 0.0767,-0.27375 v -1.19355 h 0.61685 v 1.15705 q 0,0.43435 -0.22265,0.6643 -0.22265,0.22995 -0.71175,0.22995 z m 2.26665,0 q -0.4307,0 -0.64605,-0.18615 -0.21535,-0.1898 -0.21535,-0.54385 v -0.1241 q 0,-0.13505 0.0365,-0.22995 0.0401,-0.09855 0.0985,-0.17885 0.0547,-0.07665 0.0913,-0.1387 0.0401,-0.0657 0.0401,-0.1314 0,-0.06205 -0.0328,-0.0876 -0.0292,-0.02555 -0.0767,-0.02555 -0.062,0 -0.1533,0.0438 l -0.0913,-0.3796 q 0.1095,-0.0584 0.23725,-0.0803 0.12775,-0.0219 0.2263,-0.0219 0.25185,0 0.3577,0.12045 0.10585,0.1168 0.10585,0.32485 0,0.1022 -0.0292,0.1898 -0.0256,0.08395 -0.0767,0.1752 -0.0438,0.0876 -0.084,0.15695 -0.0365,0.0657 -0.0365,0.2044 v 0.1241 q 0,0.31025 0.25185,0.31025 0.13505,0 0.1971,-0.0803 0.062,-0.08395 0.062,-0.2263 v -1.26655 h 0.60955 v 1.2775 q 0,0.3869 -0.22265,0.58035 -0.22265,0.19345 -0.6497,0.19345 z m -0.27375,-2.31045 v -0.1898 q 0.0402,-0.0146 0.1022,-0.0365 0.0584,-0.02555 0.10585,-0.06935 0.0438,-0.0438 0.0438,-0.11315 0,-0.05475 -0.0292,-0.0803 -0.0292,-0.0292 -0.0694,-0.0292 -0.0292,0 -0.0584,0.01095 -0.0328,0.0073 -0.0547,0.01825 l -0.0694,-0.2555 q 0.073,-0.06205 0.18615,-0.08395 0.11315,-0.0219 0.19345,-0.0219 0.17155,0 0.2701,0.07665 0.0949,0.07665 0.0949,0.2336 0,0.0876 -0.0511,0.1533 h 0.52925 v 0.3869 z m 2.4455,2.31045 q -0.46355,0 -0.6862,-0.219 -0.22265,-0.22265 -0.22265,-0.64605 0,-0.06935 0.004,-0.17885 0.007,-0.11315 0.0182,-0.1898 h 0.91615 v 0.3723 h -0.33215 v 0.04745 q 0,0.36135 0.2993,0.36135 0.1679,0 0.2555,-0.12045 0.0913,-0.12045 0.0913,-0.4307 0,-0.29565 -0.1095,-0.44895 -0.10585,-0.15695 -0.4015,-0.15695 -0.10585,0 -0.2263,0.02555 -0.1168,0.0219 -0.2263,0.06205 -0.10585,0.0365 -0.1752,0.073 v -0.50735 q 0.084,-0.0438 0.20805,-0.07665 0.1241,-0.03285 0.26645,-0.0511 0.14235,-0.01825 0.2774,-0.01825 0.365,0 0.58765,0.1314 0.2263,0.12775 0.3285,0.36865 0.10585,0.23725 0.10585,0.5621 0,0.5037 -0.2336,0.7738 -0.22995,0.26645 -0.7446,0.26645 z m 2.6061,-0.0146 q -0.26645,0 -0.4234,-0.09855 -0.15695,-0.1022 -0.22265,-0.25185 h -0.0328 l -0.073,0.3139 h -0.46355 v -2.0002 h 0.61685 v 0.89425 q 0,0.3212 0.0949,0.46355 0.0949,0.14235 0.27375,0.14235 0.13505,0 0.2044,-0.08395 0.073,-0.08395 0.073,-0.28105 v -1.13515 h 0.6205 v 1.2848 q 0,0.3577 -0.1679,0.5548 -0.1679,0.1971 -0.50005,0.1971 z m 0.0256,0.93075 q -0.3139,0 -0.4526,-0.0876 -0.1387,-0.08395 -0.1387,-0.21535 v -0.06205 q 0,-0.06205 -0.0328,-0.07665 -0.0365,-0.01095 -0.0913,0.0037 l -0.0255,-0.2555 q 0.0511,-0.0219 0.14235,-0.03285 0.0876,-0.0073 0.146,-0.0073 0.1679,0 0.24455,0.05475 0.0767,0.0584 0.0767,0.1679 v 0.06935 q 0,0.06205 0.0256,0.09125 0.0219,0.03285 0.0876,0.03285 0.0657,0 0.0913,-0.03285 0.0256,-0.0292 0.0256,-0.09125 v -0.28105 h 0.4964 v 0.35405 q 0,0.17885 -0.1387,0.27375 -0.14235,0.0949 -0.45625,0.0949 z m 1.6571,-0.93075 q -0.31755,0 -0.4891,-0.14965 -0.1679,-0.14965 -0.1679,-0.41975 0,-0.292 0.2044,-0.4672 0.20805,-0.1752 0.65335,-0.21535 l 0.39055,-0.03285 v -0.04015 q 0,-0.15695 -0.0913,-0.2263 -0.0913,-0.06935 -0.27375,-0.06935 -0.19345,0 -0.3796,0.06205 -0.18615,0.0584 -0.3139,0.1314 v -0.50005 q 0.10585,-0.0511 0.30295,-0.10585 0.20075,-0.05475 0.4672,-0.05475 0.24455,0 0.4453,0.06935 0.2044,0.06935 0.32485,0.24455 0.12045,0.17155 0.12045,0.4818 v 1.2556 h -0.60225 v -0.81395 l -0.3212,0.0365 q -0.1752,0.01825 -0.24455,0.07665 -0.0694,0.0584 -0.0694,0.14965 0,0.0876 0.0584,0.1387 0.062,0.04745 0.15695,0.04745 0.0402,0 0.0803,-0.0073 0.0401,-0.01095 0.0766,-0.0219 l 0.0475,0.37595 q -0.0694,0.0219 -0.17155,0.0365 -0.0985,0.01825 -0.2044,0.01825 z"
     id="text632"
     style="font-weight:800;font-size:3.65px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#0d5fac"
     aria-label="สแกนตรวจสอบข้อมูล" />
  <path
     d="m 159.3361,50.132998 q -0.1881,0 -0.3069,-0.0891 -0.1155,-0.0924 -0.1155,-0.3036 v -1.2474 q 0,-0.0891 0.0132,-0.1452 0.0132,-0.0561 0.0495,-0.108899 0.0363,-0.0561 0.099,-0.132 0.0726,-0.0858 0.1155,-0.1452 0.0429,-0.0594 0.0429,-0.1353 0,-0.1749 -0.231,-0.1749 -0.0924,0 -0.1683,0.0264 -0.0759,0.0264 -0.132,0.0594 v -0.3234 q 0.0462,-0.0264 0.1584,-0.0561 0.1122,-0.033 0.2673,-0.033 0.2409,0 0.3861,0.1056 0.1485,0.1056 0.1485,0.3168 0,0.132 -0.0528,0.231 -0.0495,0.0957 -0.1089,0.1749 -0.0561,0.0726 -0.0924,0.1221 -0.0363,0.0462 -0.0561,0.0957 -0.0198,0.0495 -0.0198,0.132 v 1.1847 q 0,0.132 0.1221,0.132 0.0297,0 0.0594,-0.0066 0.033,-0.0066 0.0627,-0.0165 l 0.0429,0.2772 q -0.0627,0.0297 -0.1353,0.0429 -0.0726,0.0165 -0.1485,0.0165 z m 1.3497,0.0066 q -0.4158,0 -0.6006,-0.1914 -0.1815,-0.1914 -0.1815,-0.5544 v -1.102199 h 0.4191 v 1.121999 q 0,0.3861 0.363,0.3861 0.1881,0 0.2772,-0.0957 0.0891,-0.099 0.0891,-0.2904 v -1.121999 h 0.4191 v 1.102199 q 0,0.363 -0.1881,0.5544 -0.1848,0.1914 -0.5973,0.1914 z m 1.96349,0 q -0.3861,0 -0.5742,-0.1914 -0.1848,-0.1947 -0.1848,-0.5841 0,-0.066 0.003,-0.1551 0.003,-0.0891 0.0132,-0.1617 h 0.7557 v 0.2838 h -0.3597 v 0.0528 q 0,0.2409 0.0825,0.3399 0.0858,0.099 0.2607,0.099 0.1221,0 0.2112,-0.0528 0.0924,-0.0528 0.1386,-0.1815 0.0495,-0.132 0.0495,-0.3663 0,-0.3168 -0.1122,-0.4719 -0.1089,-0.1584 -0.3927,-0.1584 -0.1518,0 -0.3069,0.0429 -0.1518,0.0429 -0.264,0.1089 v -0.3597 q 0.1023,-0.0561 0.2772,-0.0924 0.1782,-0.0396 0.363,-0.0396 0.3102,0 0.4983,0.118799 0.1914,0.1155 0.2772,0.33 0.0891,0.2145 0.0891,0.5049 0,0.4455 -0.1914,0.6897 -0.1881,0.2442 -0.6336,0.2442 z m 1.86451,-0.0066 q -0.297,0 -0.4587,-0.165 -0.1617,-0.1683 -0.1617,-0.5049 v -1.171499 h 0.4191 v 1.112099 q 0,0.3696 0.3267,0.3696 0.1947,0 0.3003,-0.1386 0.1089,-0.1386 0.1089,-0.4092 v -0.933899 h 0.4191 v 1.808399 h -0.3267 l -0.0363,-0.2739 h -0.0264 q -0.0561,0.132 -0.198,0.2211 -0.1386,0.0858 -0.3663,0.0858 z m 0.5907,0.8283 v -0.3135 q 0,-0.0825 -0.0726,-0.0825 -0.0165,0 -0.033,0.0033 -0.0165,0.0033 -0.033,0.0099 l -0.0231,-0.2244 q 0.0462,-0.0165 0.1188,-0.0297 0.0726,-0.0132 0.1386,-0.0132 0.1419,0 0.2046,0.0594 0.0627,0.0627 0.0627,0.1683 v 0.4224 z m 2.607,-0.2409 q -0.1419,0 -0.2871,-0.0297 -0.1419,-0.0264 -0.2673,-0.0825 v -0.3696 q 0.0924,0.0594 0.2277,0.099 0.1386,0.0396 0.2838,0.0396 0.2046,0 0.3267,-0.099 0.1254,-0.0957 0.1254,-0.3333 v -0.0924 h -0.0198 q -0.0627,0.099 -0.1848,0.165 -0.1221,0.066 -0.3069,0.066 -0.2442,0 -0.3993,-0.1353 -0.1518,-0.1353 -0.1518,-0.4455 v -0.5709 q 0,-0.1947 -0.1056,-0.2673 -0.1056,-0.0759 -0.2475,-0.0759 -0.1452,0 -0.2409,0.0627 -0.0924,0.0594 -0.099,0.1848 l 0.3234,0.1518 -0.033,0.1947 q -0.1221,0 -0.1947,0.0627 -0.0693,0.0627 -0.0693,0.2145 v 0.2343 q 0,0.1353 0.132,0.1353 0.0693,0 0.1188,-0.0198 l 0.0462,0.264 q -0.0627,0.0297 -0.1353,0.0429 -0.0693,0.0165 -0.1485,0.0165 -0.1848,0 -0.3069,-0.0891 -0.1188,-0.0924 -0.1188,-0.3036 v -0.2541 q 0,-0.198 0.0858,-0.2904 0.0858,-0.0924 0.2343,-0.1353 l 0.003,-0.0132 -0.3663,-0.132 v -0.0957 q 0,-0.1584 0.0924,-0.2871 0.0924,-0.1287 0.264,-0.2046 0.1749,-0.0759 0.4158,-0.0759 0.2211,0 0.3927,0.0693 0.1716,0.0693 0.2706,0.2112 0.099,0.1419 0.099,0.3663 v 0.5016 q 0,0.1716 0.0759,0.2508 0.0792,0.0759 0.198,0.0759 0.165,0 0.264,-0.1287 0.099,-0.132 0.099,-0.3465 v -0.960299 h 0.4191 v 1.607099 q 0,0.4158 -0.2079,0.6171 -0.2079,0.2046 -0.6072,0.2046 z m 1.8216,-0.6204 v -1.2276 q 0,-0.1485 -0.0693,-0.2145 -0.0693,-0.0693 -0.2244,-0.0693 -0.1122,0 -0.2079,0.033 -0.0957,0.0297 -0.1815,0.0759 v -0.3465 q 0.0693,-0.033 0.198,-0.066 0.1287,-0.033 0.3036,-0.033 0.1782,0 0.3135,0.0528 0.1353,0.0495 0.2112,0.171599 0.0759,0.1188 0.0759,0.3234 v 1.3002 z m 1.5774,0.033 q -0.2871,0 -0.4455,-0.1221 -0.1584,-0.1221 -0.2211,-0.3399 -0.0627,-0.2178 -0.0627,-0.5049 0,-0.4785 0.1386,-0.693 0.1419,-0.214499 0.4125,-0.214499 0.1188,0 0.2013,0.0429 0.0858,0.0429 0.132,0.151799 h 0.0132 q 0.0396,-0.1122 0.1386,-0.151799 0.099,-0.0429 0.2178,-0.0429 0.4521,0 0.4521,0.471899 v 1.3695 h -0.4191 v -1.3101 q 0,-0.1122 -0.0429,-0.1518 -0.0396,-0.0396 -0.1089,-0.0396 -0.0726,0 -0.1089,0.0396 -0.0363,0.0396 -0.0462,0.132 h -0.1914 q -0.0132,-0.1023 -0.0594,-0.1353 -0.0429,-0.0363 -0.099,-0.0363 -0.1023,0 -0.1551,0.132 -0.0528,0.132 -0.0528,0.4389 0,0.3036 0.0726,0.4719 0.0726,0.165 0.297,0.165 0.0495,0 0.0858,-0.0033 0.0363,-0.0066 0.066,-0.0165 l 0.0429,0.3036 q -0.0528,0.0231 -0.1188,0.033 -0.066,0.0099 -0.1386,0.0099 z m 1.6401,-0.033 v -0.7755 h -0.2112 v -0.2772 h 0.594 v 0.7293 h 0.0297 q 0.1881,0 0.2838,-0.1386 0.099,-0.1419 0.099,-0.4455 0,-0.33 -0.1287,-0.4653 -0.1254,-0.1386 -0.3927,-0.1386 -0.1683,0 -0.3102,0.0462 -0.1386,0.0429 -0.2541,0.1188 v -0.3597 q 0.1023,-0.0594 0.2673,-0.099 0.165,-0.0429 0.3696,-0.0429 0.4653,0 0.6699,0.237599 0.2046,0.2343 0.2046,0.6963 0,0.4389 -0.1947,0.6765 -0.1914,0.2376 -0.66,0.2376 z m 2.1285,0 v -1.2276 q 0,-0.1485 -0.0693,-0.2145 -0.0693,-0.0693 -0.2244,-0.0693 -0.1122,0 -0.2079,0.033 -0.0957,0.0297 -0.1815,0.0759 v -0.3465 q 0.0693,-0.033 0.198,-0.066 0.1287,-0.033 0.3036,-0.033 0.1782,0 0.3135,0.0528 0.1353,0.0495 0.2112,0.171599 0.0759,0.1188 0.0759,0.3234 v 1.3002 z m 0.891,0 v -0.5808 q 0,-0.2079 0.0858,-0.3102 0.0858,-0.1056 0.2343,-0.1485 l 0.003,-0.0132 -0.3564,-0.132 v -0.0957 q 0,-0.1518 0.0924,-0.2805 0.0957,-0.1287 0.2739,-0.2079 0.1782,-0.0792 0.4323,-0.0792 0.231,0 0.4092,0.0726 0.1782,0.0726 0.2805,0.2211 0.1023,0.1485 0.1023,0.3762 v 1.1781 h -0.4191 v -1.1484 q 0,-0.1881 -0.1056,-0.2739 -0.1056,-0.0858 -0.2772,-0.0858 -0.1716,0 -0.264,0.0726 -0.0924,0.0693 -0.0957,0.1749 l 0.3201,0.1518 -0.033,0.1947 q -0.1221,0.0033 -0.1947,0.0825 -0.0693,0.0792 -0.0693,0.231 v 0.6006 z m 2.6235,0.0396 q -0.1947,0 -0.3795,-0.0396 -0.1848,-0.0429 -0.3234,-0.1122 l 0.1188,-0.3333 q 0.1023,0.0495 0.2541,0.099 0.1518,0.0495 0.3201,0.0495 0.1485,0 0.2343,-0.0462 0.0858,-0.0495 0.0858,-0.1452 0,-0.0957 -0.099,-0.1518 -0.0957,-0.0594 -0.2838,-0.1221 -0.1881,-0.0627 -0.3201,-0.1353 -0.132,-0.0726 -0.2013,-0.1782 -0.0693,-0.1056 -0.0693,-0.264 0,-0.2442 0.1881,-0.3762 0.1914,-0.131999 0.5412,-0.131999 0.1749,0 0.3201,0.0297 0.1452,0.0297 0.2277,0.0759 v 0.3366 q -0.0858,-0.0396 -0.2376,-0.0759 -0.1518,-0.0396 -0.3003,-0.0396 -0.1683,0 -0.2442,0.0495 -0.0759,0.0495 -0.0759,0.1221 0,0.0891 0.1023,0.1419 0.1023,0.0495 0.3234,0.1254 0.165,0.0561 0.2871,0.1287 0.1254,0.0726 0.1914,0.1782 0.0693,0.1023 0.0693,0.2607 0,0.1452 -0.0693,0.2706 -0.066,0.1254 -0.2244,0.2046 -0.1584,0.0792 -0.4356,0.0792 z m 1.37939,-1.1319 q -0.2211,0 -0.3102,-0.0957 -0.0858,-0.0957 -0.0858,-0.2178 0,-0.1155 0.0594,-0.2211 l 0.3168,0.0429 q -0.007,0.0198 -0.0132,0.0495 -0.003,0.0264 -0.003,0.0561 0,0.0429 0.0231,0.0693 0.0264,0.0264 0.0891,0.0264 h 0.4125 v 0.2904 z m 0,0.924 q -0.2211,0 -0.3102,-0.0957 -0.0858,-0.0957 -0.0858,-0.2178 0,-0.1155 0.0594,-0.2211 l 0.3168,0.0429 q -0.007,0.0198 -0.0132,0.0495 -0.003,0.0264 -0.003,0.0561 0,0.0429 0.0231,0.0693 0.0264,0.0264 0.0891,0.0264 h 0.4125 v 0.2904 z m 1.65331,0.2079 q -0.4158,0 -0.6006,-0.1914 -0.1815,-0.1914 -0.1815,-0.5544 v -1.102199 h 0.4191 v 1.121999 q 0,0.3861 0.363,0.3861 0.1881,0 0.2772,-0.0957 0.0891,-0.099 0.0891,-0.2904 v -1.121999 h 0.4191 v 1.102199 q 0,0.363 -0.1881,0.5544 -0.1848,0.1914 -0.5973,0.1914 z m 2.05589,0 q -0.4158,0 -0.6006,-0.1914 -0.1815,-0.1914 -0.1815,-0.5544 v -1.102199 h 0.4191 v 1.121999 q 0,0.3861 0.363,0.3861 0.1881,0 0.2772,-0.0957 0.0891,-0.099 0.0891,-0.2904 v -1.121999 h 0.4191 v 1.102199 q 0,0.363 -0.1881,0.5544 -0.1848,0.1914 -0.5973,0.1914 z m 2.6235,-0.0066 q -0.2871,0 -0.4422,-0.1353 -0.1518,-0.1353 -0.1518,-0.3795 0,-0.2673 0.1914,-0.4224 0.1947,-0.1551 0.6204,-0.1848 l 0.3333,-0.0264 v -0.0693 q 0,-0.1815 -0.0924,-0.2574 -0.0891,-0.0792 -0.2871,-0.0792 -0.1683,0 -0.3267,0.0495 -0.1584,0.0495 -0.2838,0.1221 v -0.3597 q 0.0957,-0.0462 0.264,-0.0924 0.1716,-0.0462 0.3927,-0.0462 0.1254,0 0.231,0.0198 0.1056,0.0198 0.1782,0.0726 0.0462,-0.0297 0.0726,-0.0726 0.0264,-0.0429 0.0264,-0.099 h 0.3795 q 0,0.1188 -0.0627,0.217799 -0.0594,0.099 -0.1782,0.1617 0.0495,0.066 0.0726,0.1584 0.0231,0.0924 0.0231,0.2079 v 1.1814 h -0.4092 v -0.7986 l -0.2838,0.0231 q -0.2508,0.0231 -0.3465,0.0924 -0.0957,0.066 -0.0957,0.1881 0,0.1155 0.0726,0.1749 0.0759,0.0561 0.2046,0.0561 0.0462,0 0.0858,-0.0066 0.0429,-0.0099 0.0792,-0.0198 l 0.0462,0.2739 q -0.132,0.0495 -0.3135,0.0495 z m 2.4519,0 q -0.2277,0 -0.3762,-0.0858 -0.1452,-0.0891 -0.2013,-0.231 h -0.0231 l -0.0396,0.2838 h -0.3234 v -1.808399 h 0.4191 v 0.933899 q 0,0.2706 0.1056,0.4092 0.1089,0.1386 0.3069,0.1386 0.3234,0 0.3234,-0.3696 v -1.112099 h 0.4191 v 1.187999 q 0,0.3234 -0.1584,0.4884 -0.1584,0.165 -0.4521,0.165 z m 1.7886,0.0066 q -0.3861,0 -0.5742,-0.1914 -0.1848,-0.1947 -0.1848,-0.5841 0,-0.066 0.003,-0.1551 0.003,-0.0891 0.0132,-0.1617 h 0.7557 v 0.2838 h -0.3597 v 0.0528 q 0,0.2409 0.0825,0.3399 0.0858,0.099 0.2607,0.099 0.1221,0 0.2112,-0.0528 0.0924,-0.0528 0.1386,-0.1815 0.0495,-0.132 0.0495,-0.3663 0,-0.3168 -0.1122,-0.4719 -0.1089,-0.1584 -0.3927,-0.1584 -0.1518,0 -0.3069,0.0429 -0.1518,0.0429 -0.264,0.1089 v -0.3597 q 0.1023,-0.0561 0.2772,-0.0924 0.1782,-0.0396 0.363,-0.0396 0.3102,0 0.4983,0.118799 0.1914,0.1155 0.2772,0.33 0.0891,0.2145 0.0891,0.5049 0,0.4455 -0.1914,0.6897 -0.1881,0.2442 -0.6336,0.2442 z m 1.20781,-0.2508 q 0,-0.1386 0.0726,-0.1947 0.0726,-0.0594 0.1782,-0.0594 0.1023,0 0.1782,0.0594 0.0759,0.0561 0.0759,0.1947 0,0.1353 -0.0759,0.1947 -0.0759,0.0594 -0.1782,0.0594 -0.1056,0 -0.1782,-0.0594 -0.0726,-0.0594 -0.0726,-0.1947 z"
     id="text633"
     style="font-weight:600;font-size:3.3px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#1f2937"
     aria-label="ใบอนุญาตจากระบบ สมอ." />
  <rect
     x="160.1"
     y="54.0"
     width="30.7"
     height="7.0"
     rx="3.5"
     fill="#0d5fac"
     id="rect633" />
  <path
     d="m 166.36786,58.944852 q -0.3933,0 -0.59685,-0.1725 -0.2001,-0.17595 -0.2001,-0.5037 v -0.13455 q 0,-0.14145 0.031,-0.2346 0.0345,-0.09315 0.0897,-0.16905 0.0552,-0.0759 0.0897,-0.13455 0.0379,-0.0621 0.0379,-0.12765 0,-0.0621 -0.031,-0.08625 -0.0276,-0.0276 -0.0759,-0.0276 -0.0621,0 -0.1518,0.0414 l -0.0828,-0.3243 q 0.0966,-0.05175 0.207,-0.069 0.11385,-0.0207 0.2001,-0.0207 0.2277,0 0.32085,0.110401 0.0966,0.10695 0.0966,0.2898 0,0.10695 -0.031,0.18975 -0.0311,0.07935 -0.0794,0.1656 -0.0448,0.07935 -0.0794,0.14835 -0.031,0.069 -0.031,0.2001 v 0.1311 q 0,0.16905 0.0725,0.2484 0.0759,0.0759 0.2139,0.0759 0.14835,0 0.21045,-0.07935 0.0656,-0.0828 0.0656,-0.2208 v -0.33465 q 0,-0.1035 -0.0483,-0.16215 -0.0448,-0.0621 -0.15525,-0.0621 h -0.0173 v -0.27255 h 0.0207 q 0.10695,0 0.1587,-0.05865 0.0517,-0.05865 0.0656,-0.14835 0.0172,-0.09315 0.0172,-0.193201 h 0.51405 q 0,0.210451 -0.0552,0.348451 -0.0552,0.138 -0.1932,0.1863 v 0.0138 q 0.12075,0.0345 0.16215,0.1311 0.0448,0.09315 0.0448,0.2139 v 0.3519 q 0,0.34155 -0.2001,0.5175 -0.2001,0.1725 -0.58995,0.1725 z m -0.7452,-2.190748 v -0.21735 l 0.34845,-0.1449 h 0.37605 v -0.23805 h 0.32775 v 0.23805 h 0.20355 v -0.23805 h 0.3243 v 0.6003 z m 0.96255,-0.78315 v -0.6417 h 0.4485 v 0.6417 z m 1.79746,2.973898 q -0.4209,0 -0.62445,-0.20355 -0.20355,-0.207 -0.20355,-0.61065 0,-0.069 0.003,-0.1656 0.007,-0.10005 0.0172,-0.17595 h 0.828 v 0.32775 h -0.34155 v 0.0483 q 0,0.207 0.0759,0.3036 0.0794,0.09315 0.2415,0.09315 0.1725,0 0.2691,-0.12075 0.0966,-0.1242 0.0966,-0.4485 0,-0.30705 -0.10695,-0.45885 -0.10695,-0.15525 -0.3933,-0.15525 -0.15525,0 -0.32085,0.0483 -0.1656,0.0483 -0.27255,0.10695 v -0.43125 q 0.1104,-0.05865 0.3036,-0.0966 0.19665,-0.0414 0.3864,-0.0414 0.33465,0 0.5382,0.124201 0.207,0.12075 0.30015,0.345 0.0966,0.22425 0.0966,0.5313 0,0.4692 -0.21045,0.7245 -0.21045,0.2553 -0.6831,0.2553 z m 2.09415,0 q -0.3105,0 -0.4968,-0.07245 -0.1863,-0.0759 -0.27255,-0.21045 -0.0828,-0.13455 -0.0828,-0.3105 0,-0.1518 0.0448,-0.24495 0.0483,-0.09315 0.12075,-0.14145 0.0759,-0.05175 0.1518,-0.069 v -0.0207 q -0.1173,-0.03795 -0.21735,-0.1311 -0.10005,-0.0966 -0.10005,-0.2829 0,-0.12765 0.0587,-0.23805 0.0621,-0.1104 0.19665,-0.17595 0.13455,-0.069 0.35535,-0.069 0.10695,0 0.207,0.01725 0.10005,0.0138 0.15525,0.0414 l -0.0793,0.34845 q -0.0276,-0.0069 -0.0759,-0.0138 -0.0448,-0.01035 -0.0932,-0.01035 -0.10695,0 -0.1587,0.05175 -0.0517,0.0483 -0.0517,0.12765 0,0.12765 0.0966,0.16905 0.0966,0.03795 0.21045,0.03795 h 0.0725 v 0.32085 h -0.0725 q -0.14835,0 -0.22425,0.05175 -0.0725,0.05175 -0.0725,0.16905 0,0.0621 0.0276,0.1242 0.031,0.05865 0.1035,0.10005 0.0725,0.03795 0.207,0.03795 0.1932,0 0.2622,-0.0828 0.0725,-0.0828 0.0725,-0.2001 v -1.259251 h 0.5175 v 1.242001 q 0,0.35535 -0.21045,0.5244 -0.207,0.16905 -0.65205,0.16905 z m 0.36225,-2.197651 v -0.78315 h 0.4761 v 0.78315 z m 1.73535,2.197651 q -0.4209,0 -0.62445,-0.20355 -0.20355,-0.207 -0.20355,-0.61065 0,-0.069 0.003,-0.1656 0.007,-0.10005 0.0173,-0.17595 h 0.828 v 0.32775 h -0.34155 v 0.0483 q 0,0.207 0.0759,0.3036 0.0794,0.09315 0.2415,0.09315 0.1725,0 0.2691,-0.12075 0.0966,-0.1242 0.0966,-0.4485 0,-0.30705 -0.10695,-0.45885 -0.10695,-0.15525 -0.3933,-0.15525 -0.15525,0 -0.32085,0.0483 -0.1656,0.0483 -0.27255,0.10695 v -0.43125 q 0.1104,-0.05865 0.3036,-0.0966 0.19665,-0.0414 0.3864,-0.0414 0.33465,0 0.5382,0.124201 0.207,0.12075 0.30015,0.345 0.0966,0.22425 0.0966,0.5313 0,0.4692 -0.21045,0.7245 -0.21045,0.2553 -0.6831,0.2553 z m 2.1459,-1.6767 q 0,-0.1587 0.0863,-0.2208 0.0863,-0.06555 0.21045,-0.06555 0.12075,0 0.207,0.06555 0.0863,0.0621 0.0863,0.2208 0,0.1518 -0.0863,0.2208 -0.0863,0.06555 -0.207,0.06555 -0.1242,0 -0.21045,-0.06555 -0.0863,-0.069 -0.0863,-0.2208 z m 0,1.39035 q 0,-0.1587 0.0863,-0.2208 0.0863,-0.06555 0.21045,-0.06555 0.12075,0 0.207,0.06555 0.0863,0.0621 0.0863,0.2208 0,0.1518 -0.0863,0.2208 -0.0863,0.06555 -0.207,0.06555 -0.1242,0 -0.21045,-0.06555 -0.0863,-0.069 -0.0863,-0.2208 z m 2.7807,-2.221801 q 0.4761,0 0.69345,0.207 0.2208,0.20355 0.2208,0.562351 0,0.2139 -0.0897,0.40365 -0.0897,0.1863 -0.30015,0.30015 -0.207,0.11385 -0.5658,0.11385 h -0.22425 v 0.8763 h -0.52095 v -2.463301 z m -0.0276,0.4278 h -0.23805 v 0.731401 h 0.1725 q 0.2208,0 0.34845,-0.08625 0.1311,-0.0897 0.1311,-0.28635 0,-0.358801 -0.414,-0.358801 z m 1.4076,2.035501 v -2.463301 h 0.52095 v 2.032051 h 1.0005 v 0.43125 z m 1.74225,-0.71415 v -0.4209 h 0.9039 v 0.4209 z m 2.04241,-0.85905 q 0.22425,0 0.4002,0.08625 0.17595,0.08625 0.276,0.25185 0.1035,0.1656 0.1035,0.41055 0,0.4002 -0.2484,0.63135 -0.2484,0.2277 -0.73485,0.2277 -0.1932,0 -0.3657,-0.0345 -0.16905,-0.0345 -0.2967,-0.10005 v -0.4485 q 0.12765,0.06555 0.30705,0.11385 0.1794,0.04485 0.3381,0.04485 0.23115,0 0.3519,-0.09315 0.1242,-0.0966 0.1242,-0.2967 0,-0.3726 -0.49335,-0.3726 -0.0966,0 -0.2001,0.0207 -0.1035,0.01725 -0.1725,0.0345 l -0.207,-0.1104 0.0932,-1.255801 h 1.33515 v 0.4416 h -0.87975 l -0.0448,0.483001 q 0.0587,-0.01035 0.1242,-0.0207 0.069,-0.0138 0.18975,-0.0138 z m 2.78415,0.34155 q 0,0.39675 -0.0862,0.67965 -0.0828,0.2829 -0.27255,0.4347 -0.1863,0.1518 -0.5037,0.1518 -0.44505,0 -0.65205,-0.33465 -0.207,-0.3381 -0.207,-0.9315 0,-0.4002 0.0828,-0.683101 0.0828,-0.2829 0.27255,-0.4347 0.18975,-0.1518 0.5037,-0.1518 0.4416,0 0.65205,0.33465 0.21045,0.334651 0.21045,0.934951 z m -1.20405,0 q 0,0.4209 0.0725,0.6348 0.0725,0.21045 0.2691,0.21045 0.1932,0 0.2691,-0.21045 0.0759,-0.21045 0.0759,-0.6348 0,-0.4209 -0.0759,-0.6348 -0.0759,-0.213901 -0.2691,-0.213901 -0.19665,0 -0.2691,0.213901 -0.0725,0.2139 -0.0725,0.6348 z"
     id="text634"
     style="font-weight:700;font-size:3.45px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#ffffff"
     aria-label="ชื่อย่อ : PL-50" />
  <path
     d="m 164.82308,66.0355 q -0.25915,0 -0.4118,-0.09585 -0.15265,-0.0994 -0.21655,-0.24495 h -0.0319 L 164.09178,66 h -0.45085 v -1.9454 h 0.59995 v 0.86975 q 0,0.3124 0.0923,0.45085 0.0923,0.13845 0.26625,0.13845 0.13135,0 0.1988,-0.08165 0.071,-0.08165 0.071,-0.27335 V 64.0546 h 0.6035 v 1.2496 q 0,0.3479 -0.1633,0.5396 -0.1633,0.1917 -0.48635,0.1917 z m 1.9099,0.0142 q -0.45085,0 -0.6674,-0.213 -0.21655,-0.21655 -0.21655,-0.62835 0,-0.06745 0.004,-0.17395 0.007,-0.11005 0.0178,-0.1846 h 0.89105 v 0.3621 h -0.32305 v 0.04615 q 0,0.35145 0.2911,0.35145 0.1633,0 0.2485,-0.11715 0.0888,-0.11715 0.0888,-0.4189 0,-0.28755 -0.1065,-0.43665 -0.10295,-0.15265 -0.3905,-0.15265 -0.10295,0 -0.2201,0.02485 -0.1136,0.0213 -0.2201,0.06035 -0.10295,0.0355 -0.1704,0.071 V 64.1469 q 0.0816,-0.0426 0.20235,-0.07455 0.1207,-0.03195 0.25915,-0.0497 0.13845,-0.01775 0.2698,-0.01775 0.355,0 0.57155,0.1278 0.2201,0.12425 0.3195,0.35855 0.10295,0.23075 0.10295,0.5467 0,0.4899 -0.2272,0.7526 -0.22365,0.25915 -0.7242,0.25915 z M 168.05358,66 v -0.568 q 0,-0.22365 0.0852,-0.3479 0.0852,-0.1278 0.2556,-0.18105 l 0.004,-0.0142 -0.37985,-0.13845 v -0.08165 q 0,-0.1846 0.1065,-0.3337 0.1065,-0.15265 0.3124,-0.2414 0.20945,-0.08875 0.5112,-0.08875 0.42955,0 0.6674,0.19525 0.23785,0.19525 0.23785,0.57865 V 66 h -0.6035 v -1.18925 q 0,-0.3266 -0.3195,-0.3266 -0.1491,0 -0.21655,0.0639 -0.0674,0.06035 -0.0745,0.14555 l 0.29465,0.13135 -0.0426,0.25205 q -0.1278,0.01065 -0.18105,0.09585 -0.0532,0.08165 -0.0532,0.213 V 66 Z m 2.20455,-0.26625 q 0,-0.17395 0.0959,-0.2414 0.0994,-0.071 0.23785,-0.071 0.1349,0 0.23075,0.071 0.0959,0.06745 0.0959,0.2414 0,0.16685 -0.0959,0.2414 -0.0958,0.071 -0.23075,0.071 -0.13845,0 -0.23785,-0.071 -0.0959,-0.07455 -0.0959,-0.2414 z m 2.79385,-2.3004 q 0.2343,0 0.4189,0.06745 0.18815,0.06745 0.2982,0.20235 0.11005,0.1349 0.11005,0.3408 0,0.23075 -0.1278,0.37985 -0.1278,0.14555 -0.3195,0.23785 0.1278,0.071 0.2485,0.1633 0.1207,0.0923 0.19525,0.21655 0.0781,0.12425 0.0781,0.29465 0,0.3124 -0.23785,0.50765 -0.2343,0.1917 -0.6674,0.1917 -0.45085,0 -0.67805,-0.18815 -0.2272,-0.18815 -0.2272,-0.50055 0,-0.2627 0.1349,-0.41535 0.13845,-0.1562 0.3408,-0.2556 -0.16685,-0.1065 -0.284,-0.2556 -0.1136,-0.15265 -0.1136,-0.37985 0,-0.1988 0.11005,-0.3337 0.1136,-0.13845 0.30175,-0.2059 0.18815,-0.06745 0.4189,-0.06745 z m -0.004,0.43665 q -0.11005,0 -0.1846,0.06035 -0.0746,0.06035 -0.0746,0.1633 0,0.11005 0.0746,0.1846 0.0781,0.07455 0.1846,0.1278 0.0994,-0.0497 0.18105,-0.1207 0.0816,-0.071 0.0816,-0.1917 0,-0.10295 -0.0781,-0.1633 -0.0746,-0.06035 -0.1846,-0.06035 z m -0.3479,1.44485 q 0,0.12425 0.0888,0.20235 0.0888,0.0781 0.25205,0.0781 0.18105,0 0.26625,-0.071 0.0888,-0.07455 0.0888,-0.1988 0,-0.08875 -0.0533,-0.1562 -0.0497,-0.071 -0.12425,-0.1207 -0.071,-0.05325 -0.13845,-0.0923 l -0.0461,-0.0284 q -0.14555,0.071 -0.2414,0.1633 -0.0923,0.0923 -0.0923,0.22365 z M 176.00203,66 h -1.8034 v -0.40825 l 0.62835,-0.63545 q 0.1917,-0.1988 0.3053,-0.3266 0.1136,-0.1278 0.15975,-0.22365 0.0497,-0.0994 0.0497,-0.20945 0,-0.13135 -0.0781,-0.19525 -0.0781,-0.0639 -0.20235,-0.0639 -0.13135,0 -0.2627,0.06745 -0.13135,0.06745 -0.284,0.19525 l -0.33015,-0.38695 q 0.11005,-0.0994 0.2343,-0.1846 0.12425,-0.08875 0.2911,-0.142 0.1704,-0.0568 0.40825,-0.0568 0.2556,0 0.43665,0.0923 0.1846,0.08875 0.284,0.24495 0.10295,0.15265 0.10295,0.35145 0,0.21655 -0.0816,0.3905 -0.0816,0.1704 -0.2414,0.34435 -0.15975,0.1704 -0.3905,0.37985 l -0.2627,0.2414 v 0.0213 h 1.0366 z m 1.15375,-2.56665 q 0.2343,0 0.4189,0.06745 0.18815,0.06745 0.2982,0.20235 0.11005,0.1349 0.11005,0.3408 0,0.23075 -0.1278,0.37985 -0.1278,0.14555 -0.3195,0.23785 0.1278,0.071 0.2485,0.1633 0.1207,0.0923 0.19525,0.21655 0.0781,0.12425 0.0781,0.29465 0,0.3124 -0.23785,0.50765 -0.2343,0.1917 -0.6674,0.1917 -0.45085,0 -0.67805,-0.18815 -0.2272,-0.18815 -0.2272,-0.50055 0,-0.2627 0.1349,-0.41535 0.13845,-0.1562 0.3408,-0.2556 -0.16685,-0.1065 -0.284,-0.2556 -0.1136,-0.15265 -0.1136,-0.37985 0,-0.1988 0.11005,-0.3337 0.1136,-0.13845 0.30175,-0.2059 0.18815,-0.06745 0.4189,-0.06745 z m -0.004,0.43665 q -0.11005,0 -0.1846,0.06035 -0.0746,0.06035 -0.0746,0.1633 0,0.11005 0.0746,0.1846 0.0781,0.07455 0.1846,0.1278 0.0994,-0.0497 0.18105,-0.1207 0.0816,-0.071 0.0816,-0.1917 0,-0.10295 -0.0781,-0.1633 -0.0745,-0.06035 -0.1846,-0.06035 z m -0.3479,1.44485 q 0,0.12425 0.0888,0.20235 0.0888,0.0781 0.25205,0.0781 0.18105,0 0.26625,-0.071 0.0888,-0.07455 0.0888,-0.1988 0,-0.08875 -0.0533,-0.1562 -0.0497,-0.071 -0.12425,-0.1207 -0.071,-0.05325 -0.13845,-0.0923 l -0.0462,-0.0284 q -0.14555,0.071 -0.2414,0.1633 -0.0923,0.0923 -0.0923,0.22365 z M 178.27047,65.29 v -0.4828 h 0.9514 V 65.29 Z m 2.97135,0.71 h -1.8034 v -0.40825 l 0.62835,-0.63545 q 0.1917,-0.1988 0.3053,-0.3266 0.1136,-0.1278 0.15975,-0.22365 0.0497,-0.0994 0.0497,-0.20945 0,-0.13135 -0.0781,-0.19525 -0.0781,-0.0639 -0.20235,-0.0639 -0.13135,0 -0.2627,0.06745 -0.13135,0.06745 -0.284,0.19525 l -0.33015,-0.38695 q 0.11005,-0.0994 0.2343,-0.1846 0.12425,-0.08875 0.2911,-0.142 0.1704,-0.0568 0.40825,-0.0568 0.2556,0 0.43665,0.0923 0.1846,0.08875 0.284,0.24495 0.10295,0.15265 0.10295,0.35145 0,0.21655 -0.0816,0.3905 -0.0816,0.1704 -0.2414,0.34435 -0.15975,0.1704 -0.3905,0.37985 l -0.2627,0.2414 v 0.0213 h 1.0366 z m 1.2283,-1.6401 q 0.22365,0 0.40115,0.0923 0.1775,0.0923 0.28045,0.2698 0.10295,0.1775 0.10295,0.42955 0,0.4189 -0.2556,0.6532 -0.25205,0.23075 -0.76325,0.23075 -0.42955,0 -0.69935,-0.13845 V 65.3894 q 0.13135,0.06745 0.31595,0.11715 0.18815,0.04615 0.3479,0.04615 0.21655,0 0.33015,-0.08875 0.11715,-0.0923 0.11715,-0.2769 0,-0.16685 -0.11715,-0.2556 -0.1136,-0.0923 -0.35145,-0.0923 -0.0959,0 -0.19525,0.0213 -0.0994,0.01775 -0.1704,0.0355 l -0.23075,-0.11715 0.0959,-1.3135 h 1.4058 v 0.50765 h -0.8875 l -0.039,0.42245 q 0.0568,-0.01065 0.1207,-0.0213 0.0674,-0.0142 0.1917,-0.0142 z m 2.94294,1.13245 h -0.2911 V 66 h -0.59285 v -0.50765 h -1.0508 v -0.4331 l 1.0863,-1.59395 h 0.55735 v 1.56555 h 0.2911 z m -0.88395,-0.82715 q 0,-0.071 0.004,-0.17395 0.004,-0.10295 0.007,-0.18815 0.004,-0.08875 0.007,-0.1065 h -0.0178 q -0.0319,0.07455 -0.0639,0.1349 -0.032,0.0568 -0.0781,0.1278 l -0.37985,0.57155 h 0.52185 z m 1.065,0.25915 q 0,-0.21655 0.0284,-0.42955 0.0319,-0.21655 0.1136,-0.40825 0.0816,-0.1917 0.2272,-0.33725 0.14555,-0.1491 0.37275,-0.23075 0.2272,-0.0852 0.5538,-0.0852 0.0745,0 0.1775,0.0071 0.10295,0.0071 0.17395,0.0213 v 0.4757 q -0.071,-0.0142 -0.1562,-0.0213 -0.0816,-0.01065 -0.1846,-0.01065 -0.28755,0 -0.45085,0.08875 -0.15975,0.08875 -0.2272,0.25205 -0.0675,0.1633 -0.0781,0.37985 h 0.0213 q 0.0675,-0.12425 0.1917,-0.20945 0.1278,-0.0852 0.3337,-0.0852 0.3337,0 0.5254,0.213 0.1917,0.213 0.1917,0.59995 0,0.4189 -0.23785,0.65675 -0.2343,0.2343 -0.639,0.2343 -0.2627,0 -0.4757,-0.11715 -0.213,-0.1207 -0.33725,-0.36565 -0.12425,-0.2485 -0.12425,-0.62835 z m 0.92655,0.62835 q 0.1349,0 0.21655,-0.09585 0.0852,-0.09585 0.0852,-0.30175 0,-0.1633 -0.071,-0.25915 -0.071,-0.09585 -0.22365,-0.09585 -0.15265,0 -0.24495,0.0994 -0.0888,0.0994 -0.0888,0.21655 0,0.10295 0.0355,0.2059 0.0355,0.0994 0.1065,0.16685 0.0745,0.0639 0.1846,0.0639 z"
     id="text635"
     style="font-weight:800;font-size:3.55px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#0d5fac"
     aria-label="มอก. 828-2546" />
  <path
     d="m 159.22941,71.0295 q -0.16815,0 -0.27435,-0.07965 -0.10325,-0.0826 -0.10325,-0.2714 v -1.1151 q 0,-0.07965 0.0118,-0.1298 0.0118,-0.05015 0.0443,-0.09735 0.0325,-0.05015 0.0885,-0.118 0.0649,-0.0767 0.10325,-0.1298 0.0383,-0.0531 0.0383,-0.12095 0,-0.15635 -0.2065,-0.15635 -0.0826,0 -0.15045,0.0236 -0.0679,0.0236 -0.118,0.0531 v -0.2891 q 0.0413,-0.0236 0.1416,-0.05015 0.1003,-0.0295 0.23895,-0.0295 0.21535,0 0.34515,0.0944 0.13275,0.0944 0.13275,0.2832 0,0.118 -0.0472,0.2065 -0.0442,0.08555 -0.0973,0.15635 -0.0502,0.0649 -0.0826,0.10915 -0.0324,0.0413 -0.0502,0.08555 -0.0177,0.04425 -0.0177,0.118 v 1.05905 q 0,0.118 0.10915,0.118 0.0265,0 0.0531,-0.0059 0.0295,-0.0059 0.056,-0.01475 l 0.0384,0.2478 q -0.056,0.02655 -0.12095,0.03835 -0.0649,0.01475 -0.13275,0.01475 z m 1.20655,0.0059 q -0.3717,0 -0.5369,-0.1711 -0.16225,-0.1711 -0.16225,-0.4956 v -0.9853 h 0.37465 v 1.003 q 0,0.34515 0.3245,0.34515 0.16815,0 0.2478,-0.08555 0.0796,-0.0885 0.0796,-0.2596 v -1.003 h 0.37465 v 0.9853 q 0,0.3245 -0.16815,0.4956 -0.1652,0.1711 -0.53395,0.1711 z m 1.75525,0 q -0.34515,0 -0.5133,-0.1711 -0.1652,-0.17405 -0.1652,-0.52215 0,-0.059 0.003,-0.13865 0.003,-0.07965 0.0118,-0.14455 h 0.67555 v 0.2537 h -0.32155 v 0.0472 q 0,0.21535 0.0737,0.30385 0.0767,0.0885 0.23305,0.0885 0.10915,0 0.1888,-0.0472 0.0826,-0.0472 0.1239,-0.16225 0.0443,-0.118 0.0443,-0.32745 0,-0.2832 -0.1003,-0.42185 -0.0974,-0.1416 -0.35105,-0.1416 -0.1357,0 -0.27435,0.03835 -0.1357,0.03835 -0.236,0.09735 V 69.466 q 0.0915,-0.05015 0.2478,-0.0826 0.1593,-0.0354 0.3245,-0.0354 0.2773,0 0.44545,0.1062 0.1711,0.10325 0.2478,0.295 0.0796,0.19175 0.0796,0.45135 0,0.39825 -0.1711,0.61655 -0.16815,0.2183 -0.5664,0.2183 z m 1.66675,-0.0059 q -0.2655,0 -0.41005,-0.1475 -0.14455,-0.15045 -0.14455,-0.45135 V 69.3834 h 0.37465 v 0.99415 q 0,0.3304 0.29205,0.3304 0.17405,0 0.26845,-0.1239 0.0974,-0.1239 0.0974,-0.3658 V 69.3834 h 0.37465 V 71 h -0.29205 l -0.0325,-0.24485 h -0.0236 q -0.0502,0.118 -0.177,0.19765 -0.1239,0.0767 -0.32745,0.0767 z m 0.52805,0.74045 V 71.4897 q 0,-0.07375 -0.0649,-0.07375 -0.0147,0 -0.0295,0.0029 -0.0147,0.003 -0.0295,0.0089 l -0.0207,-0.2006 q 0.0413,-0.01475 0.1062,-0.02655 0.0649,-0.0118 0.1239,-0.0118 0.12685,0 0.1829,0.0531 0.056,0.05605 0.056,0.15045 v 0.3776 z m 2.3305,-0.21535 q -0.12685,0 -0.25665,-0.02655 -0.12685,-0.0236 -0.23895,-0.07375 v -0.3304 q 0.0826,0.0531 0.20355,0.0885 0.1239,0.0354 0.2537,0.0354 0.1829,0 0.29205,-0.0885 0.1121,-0.08555 0.1121,-0.29795 v -0.0826 h -0.0177 q -0.056,0.0885 -0.1652,0.1475 -0.10915,0.059 -0.27435,0.059 -0.2183,0 -0.35695,-0.12095 -0.1357,-0.12095 -0.1357,-0.39825 V 69.9557 q 0,-0.17405 -0.0944,-0.23895 -0.0944,-0.06785 -0.22125,-0.06785 -0.1298,0 -0.21535,0.05605 -0.0826,0.0531 -0.0885,0.1652 l 0.2891,0.1357 -0.0295,0.17405 q -0.10915,0 -0.17405,0.05605 -0.0619,0.05605 -0.0619,0.19175 v 0.20945 q 0,0.12095 0.118,0.12095 0.062,0 0.1062,-0.0177 l 0.0413,0.236 q -0.056,0.02655 -0.12095,0.03835 -0.0619,0.01475 -0.13275,0.01475 -0.1652,0 -0.27435,-0.07965 -0.1062,-0.0826 -0.1062,-0.2714 V 70.4513 q 0,-0.177 0.0767,-0.2596 0.0767,-0.0826 0.20945,-0.12095 l 0.003,-0.0118 -0.32745,-0.118 V 69.8554 q 0,-0.1416 0.0826,-0.25665 0.0826,-0.11505 0.236,-0.1829 0.15635,-0.06785 0.3717,-0.06785 0.19765,0 0.35105,0.06195 0.1534,0.06195 0.2419,0.1888 0.0885,0.12685 0.0885,0.32745 v 0.4484 q 0,0.1534 0.0678,0.2242 0.0708,0.06785 0.177,0.06785 0.1475,0 0.236,-0.11505 0.0885,-0.118 0.0885,-0.30975 V 69.3834 h 0.37465 v 1.43665 q 0,0.3717 -0.18585,0.55165 -0.18585,0.1829 -0.5428,0.1829 z M 168.34491,71 v -1.0974 q 0,-0.13275 -0.0619,-0.19175 -0.0619,-0.06195 -0.2006,-0.06195 -0.1003,0 -0.18585,0.0295 -0.0856,0.02655 -0.16225,0.06785 V 69.4365 q 0.0619,-0.0295 0.177,-0.059 0.11505,-0.0295 0.2714,-0.0295 0.1593,0 0.28025,0.0472 0.12095,0.04425 0.1888,0.1534 0.0678,0.1062 0.0678,0.2891 V 71 Z m 1.4101,0.0295 q -0.25665,0 -0.39825,-0.10915 -0.1416,-0.10915 -0.19765,-0.30385 -0.056,-0.1947 -0.056,-0.45135 0,-0.42775 0.1239,-0.6195 0.12685,-0.19175 0.36875,-0.19175 0.1062,0 0.17995,0.03835 0.0767,0.03835 0.118,0.1357 h 0.0118 q 0.0354,-0.1003 0.1239,-0.1357 0.0885,-0.03835 0.1947,-0.03835 0.40415,0 0.40415,0.42185 V 71 h -0.37465 v -1.17115 q 0,-0.1003 -0.0383,-0.1357 -0.0354,-0.0354 -0.0974,-0.0354 -0.0649,0 -0.0974,0.0354 -0.0325,0.0354 -0.0413,0.118 h -0.1711 q -0.0118,-0.09145 -0.0531,-0.12095 -0.0384,-0.03245 -0.0885,-0.03245 -0.0914,0 -0.13865,0.118 -0.0472,0.118 -0.0472,0.39235 0,0.2714 0.0649,0.42185 0.0649,0.1475 0.2655,0.1475 0.0443,0 0.0767,-0.0029 0.0325,-0.0059 0.059,-0.01475 l 0.0383,0.2714 q -0.0472,0.02065 -0.1062,0.0295 -0.059,0.0088 -0.1239,0.0088 z m 3.3453,-1.65495 q 0,0.21535 -0.12685,0.34515 -0.1239,0.12685 -0.32155,0.1711 v 0.0088 q 0.2537,0.03245 0.3835,0.1593 0.1298,0.1239 0.1298,0.33335 0,0.1829 -0.0885,0.32745 -0.0885,0.14455 -0.27435,0.22715 -0.1829,0.0826 -0.472,0.0826 -0.1711,0 -0.3186,-0.0295 -0.1475,-0.02655 -0.2773,-0.08555 V 70.587 q 0.13275,0.06785 0.2832,0.10325 0.15045,0.0354 0.2832,0.0354 0.25665,0 0.36285,-0.09145 0.1062,-0.0944 0.1062,-0.2596 0,-0.15635 -0.1239,-0.23305 -0.1239,-0.0767 -0.413,-0.0767 h -0.177 V 69.7669 h 0.17995 q 0.28025,0 0.38645,-0.0885 0.1062,-0.09145 0.1062,-0.23895 0,-0.12685 -0.0826,-0.19765 -0.0826,-0.0708 -0.2478,-0.0708 -0.1593,0 -0.27435,0.0531 -0.11505,0.05015 -0.2065,0.10915 l -0.177,-0.25665 q 0.118,-0.0885 0.2832,-0.15045 0.16815,-0.06195 0.39235,-0.06195 0.32745,0 0.50445,0.13865 0.17995,0.1357 0.17995,0.3717 z m 1.7641,0.5723 q 0,0.33925 -0.0708,0.58115 -0.0708,0.2419 -0.2301,0.3717 -0.1593,0.1298 -0.42185,0.1298 -0.3717,0 -0.54575,-0.28615 -0.17405,-0.2891 -0.17405,-0.7965 0,-0.3422 0.0708,-0.5841 0.0708,-0.2419 0.22715,-0.3717 0.1593,-0.1298 0.42185,-0.1298 0.36875,0 0.54575,0.28615 0.177,0.28615 0.177,0.79945 z m -1.0679,0 q 0,0.38645 0.0737,0.58115 0.0767,0.1947 0.2714,0.1947 0.19175,0 0.26845,-0.19175 0.0796,-0.1947 0.0796,-0.5841 0,-0.3894 -0.0796,-0.5841 -0.0767,-0.1947 -0.26845,-0.1947 -0.1947,0 -0.2714,0.1947 -0.0737,0.1947 -0.0737,0.5841 z m 2.0355,-1.0797 q 0.1829,0 0.3304,0.05605 0.15045,0.05605 0.236,0.16815 0.0885,0.1121 0.0885,0.28025 0,0.19175 -0.1121,0.3127 -0.1121,0.12095 -0.27435,0.20355 0.12095,0.059 0.2242,0.13865 0.10325,0.0767 0.1652,0.1829 0.0649,0.10325 0.0649,0.24485 0,0.177 -0.0914,0.3068 -0.0915,0.12685 -0.2537,0.19765 -0.1593,0.0708 -0.37465,0.0708 -0.35105,0 -0.53985,-0.15045 -0.1888,-0.15045 -0.1888,-0.413 0,-0.14455 0.056,-0.25075 0.059,-0.10915 0.1534,-0.18585 0.0944,-0.0767 0.2065,-0.1298 -0.14455,-0.0885 -0.2478,-0.2124 -0.1003,-0.12685 -0.1003,-0.3186 0,-0.1652 0.0885,-0.2773 0.0914,-0.1121 0.23895,-0.16815 0.15045,-0.05605 0.3304,-0.05605 z m -0.003,0.28025 q -0.1298,0 -0.21535,0.0649 -0.0826,0.0649 -0.0826,0.1829 0,0.1298 0.0885,0.2065 0.0915,0.07375 0.21535,0.13275 0.12095,-0.0531 0.2065,-0.1298 0.0885,-0.0767 0.0885,-0.20945 0,-0.118 -0.0856,-0.1829 -0.0826,-0.0649 -0.21535,-0.0649 z m -0.36875,1.30095 q 0,0.1298 0.0915,0.21535 0.0915,0.0826 0.2773,0.0826 0.1829,0 0.2773,-0.0826 0.0944,-0.0826 0.0944,-0.21535 0,-0.13275 -0.10915,-0.2183 -0.1062,-0.0885 -0.2478,-0.15635 l -0.0413,-0.02065 q -0.1593,0.0708 -0.25075,0.1652 -0.0915,0.0944 -0.0915,0.2301 z m 2.70221,-1.0738 q 0,0.21535 -0.12685,0.34515 -0.1239,0.12685 -0.32155,0.1711 v 0.0088 q 0.2537,0.03245 0.3835,0.1593 0.1298,0.1239 0.1298,0.33335 0,0.1829 -0.0885,0.32745 -0.0885,0.14455 -0.27435,0.22715 -0.1829,0.0826 -0.472,0.0826 -0.1711,0 -0.3186,-0.0295 -0.1475,-0.02655 -0.2773,-0.08555 V 70.587 q 0.13275,0.06785 0.2832,0.10325 0.15045,0.0354 0.2832,0.0354 0.25665,0 0.36285,-0.09145 0.1062,-0.0944 0.1062,-0.2596 0,-0.15635 -0.1239,-0.23305 -0.1239,-0.0767 -0.413,-0.0767 h -0.177 V 69.7669 h 0.17995 q 0.28025,0 0.38645,-0.0885 0.1062,-0.09145 0.1062,-0.23895 0,-0.12685 -0.0826,-0.19765 -0.0826,-0.0708 -0.2478,-0.0708 -0.1593,0 -0.27435,0.0531 -0.11505,0.05015 -0.2065,0.10915 l -0.177,-0.25665 q 0.118,-0.0885 0.2832,-0.15045 0.16815,-0.06195 0.39235,-0.06195 0.32745,0 0.50445,0.13865 0.17995,0.1357 0.17995,0.3717 z m 0.3009,0.9912 v -0.3127 h 0.7493 v 0.3127 z M 180.46647,71 h -0.3717 v -1.31275 q 0,-0.0944 0.003,-0.2006 0.003,-0.1062 0.009,-0.19765 -0.0295,0.0295 -0.0738,0.0708 -0.0442,0.03835 -0.0914,0.07965 l -0.236,0.1888 -0.18585,-0.2301 0.6372,-0.50445 h 0.30975 z m 0.88795,0 0.8201,-1.78475 h -1.07675 V 68.8937 h 1.475 v 0.25075 L 181.75267,71 Z m 2.8969,-1.20655 q 0,0.17995 -0.0265,0.3599 -0.0266,0.177 -0.0915,0.3363 -0.0649,0.15635 -0.17995,0.28025 -0.11505,0.12095 -0.295,0.19175 -0.177,0.06785 -0.4307,0.06785 -0.059,0 -0.1416,-0.0059 -0.0826,-0.0059 -0.13275,-0.0177 v -0.3068 q 0.0531,0.01475 0.12095,0.0236 0.0678,0.0088 0.13275,0.0088 0.26845,0 0.413,-0.0944 0.1475,-0.09735 0.2065,-0.26255 0.062,-0.1652 0.0708,-0.3717 h -0.0177 q -0.0649,0.10325 -0.17405,0.17405 -0.10915,0.0708 -0.3068,0.0708 -0.26845,0 -0.43365,-0.1711 -0.16225,-0.1711 -0.16225,-0.4838 0,-0.33925 0.1888,-0.531 0.1888,-0.1947 0.51035,-0.1947 0.20945,0 0.3776,0.1003 0.1711,0.1003 0.2714,0.3068 0.1003,0.20355 0.1003,0.5192 z m -0.7434,-0.6195 q -0.15045,0 -0.24485,0.1003 -0.0944,0.1003 -0.0944,0.3127 0,0.1711 0.0797,0.2714 0.0826,0.1003 0.25075,0.1003 0.11505,0 0.19765,-0.0472 0.0856,-0.05015 0.13275,-0.1239 0.0472,-0.0767 0.0472,-0.1593 0,-0.1062 -0.0413,-0.2124 -0.0413,-0.1062 -0.1239,-0.17405 -0.0826,-0.06785 -0.20355,-0.06785 z m 1.72575,0.5015 q 0.2006,0 0.354,0.07375 0.1534,0.0708 0.23895,0.2124 0.0885,0.1416 0.0885,0.34515 0,0.3363 -0.2124,0.531 -0.20945,0.19175 -0.6077,0.19175 -0.1652,0 -0.30975,-0.0295 -0.14455,-0.0295 -0.25075,-0.08555 v -0.3304 q 0.10915,0.059 0.26255,0.09735 0.1534,0.03835 0.2891,0.03835 0.20945,0 0.32745,-0.09145 0.12095,-0.09145 0.12095,-0.28615 0,-0.17405 -0.1121,-0.2655 -0.1121,-0.0944 -0.3481,-0.0944 -0.0826,0 -0.17995,0.01475 -0.0944,0.01475 -0.15635,0.0295 l -0.1593,-0.0885 0.0797,-1.0443 h 1.1092 v 0.3245 h -0.78175 l -0.0443,0.48675 q 0.0502,-0.0088 0.118,-0.0177 0.0678,-0.0118 0.17405,-0.0118 z m 1.9824,-0.78175 -0.7847,2.1063 h -0.34515 l 0.7847,-2.1063 z m 0.86436,-0.02655 q 0.1829,0 0.3304,0.05605 0.15045,0.05605 0.236,0.16815 0.0885,0.1121 0.0885,0.28025 0,0.19175 -0.1121,0.3127 -0.1121,0.12095 -0.27435,0.20355 0.12095,0.059 0.2242,0.13865 0.10325,0.0767 0.1652,0.1829 0.0649,0.10325 0.0649,0.24485 0,0.177 -0.0915,0.3068 -0.0914,0.12685 -0.2537,0.19765 -0.1593,0.0708 -0.37465,0.0708 -0.35105,0 -0.53985,-0.15045 -0.1888,-0.15045 -0.1888,-0.413 0,-0.14455 0.056,-0.25075 0.059,-0.10915 0.1534,-0.18585 0.0944,-0.0767 0.2065,-0.1298 -0.14455,-0.0885 -0.2478,-0.2124 -0.1003,-0.12685 -0.1003,-0.3186 0,-0.1652 0.0885,-0.2773 0.0915,-0.1121 0.23895,-0.16815 0.15045,-0.05605 0.3304,-0.05605 z m -0.003,0.28025 q -0.1298,0 -0.21535,0.0649 -0.0826,0.0649 -0.0826,0.1829 0,0.1298 0.0885,0.2065 0.0915,0.07375 0.21535,0.13275 0.12095,-0.0531 0.2065,-0.1298 0.0885,-0.0767 0.0885,-0.20945 0,-0.118 -0.0855,-0.1829 -0.0826,-0.0649 -0.21535,-0.0649 z m -0.36875,1.30095 q 0,0.1298 0.0915,0.21535 0.0914,0.0826 0.2773,0.0826 0.1829,0 0.2773,-0.0826 0.0944,-0.0826 0.0944,-0.21535 0,-0.13275 -0.10915,-0.2183 -0.1062,-0.0885 -0.2478,-0.15635 l -0.0413,-0.02065 q -0.1593,0.0708 -0.25075,0.1652 -0.0915,0.0944 -0.0915,0.2301 z M 190.49353,71 h -1.44255 v -0.27435 l 0.5369,-0.5428 q 0.1593,-0.16225 0.2596,-0.2773 0.10325,-0.11505 0.15045,-0.21535 0.0502,-0.10325 0.0502,-0.22125 0,-0.14455 -0.0826,-0.21535 -0.0826,-0.07375 -0.2183,-0.07375 -0.13275,0 -0.2478,0.05605 -0.11505,0.0531 -0.23895,0.1534 l -0.20355,-0.24485 q 0.1298,-0.1121 0.295,-0.1947 0.1652,-0.08555 0.41595,-0.08555 0.20355,0 0.35105,0.07375 0.1475,0.0708 0.2242,0.19765 0.0797,0.12685 0.0797,0.295 0,0.1711 -0.0678,0.31565 -0.0679,0.1416 -0.19765,0.28615 -0.12685,0.1416 -0.30385,0.3068 l -0.33335,0.32155 v 0.0177 h 0.9735 z m 0.9617,-2.13285 q 0.1829,0 0.3304,0.05605 0.15045,0.05605 0.236,0.16815 0.0885,0.1121 0.0885,0.28025 0,0.19175 -0.1121,0.3127 -0.1121,0.12095 -0.27435,0.20355 0.12095,0.059 0.2242,0.13865 0.10325,0.0767 0.1652,0.1829 0.0649,0.10325 0.0649,0.24485 0,0.177 -0.0914,0.3068 -0.0915,0.12685 -0.2537,0.19765 -0.1593,0.0708 -0.37465,0.0708 -0.35105,0 -0.53985,-0.15045 -0.1888,-0.15045 -0.1888,-0.413 0,-0.14455 0.056,-0.25075 0.059,-0.10915 0.1534,-0.18585 0.0944,-0.0767 0.2065,-0.1298 -0.14455,-0.0885 -0.2478,-0.2124 -0.1003,-0.12685 -0.1003,-0.3186 0,-0.1652 0.0885,-0.2773 0.0915,-0.1121 0.23895,-0.16815 0.15045,-0.05605 0.3304,-0.05605 z m -0.003,0.28025 q -0.1298,0 -0.21535,0.0649 -0.0826,0.0649 -0.0826,0.1829 0,0.1298 0.0885,0.2065 0.0915,0.07375 0.21535,0.13275 0.12095,-0.0531 0.2065,-0.1298 0.0885,-0.0767 0.0885,-0.20945 0,-0.118 -0.0855,-0.1829 -0.0826,-0.0649 -0.21535,-0.0649 z m -0.36875,1.30095 q 0,0.1298 0.0915,0.21535 0.0915,0.0826 0.2773,0.0826 0.1829,0 0.2773,-0.0826 0.0944,-0.0826 0.0944,-0.21535 0,-0.13275 -0.10915,-0.2183 -0.1062,-0.0885 -0.2478,-0.15635 l -0.0413,-0.02065 q -0.1593,0.0708 -0.25075,0.1652 -0.0915,0.0944 -0.0915,0.2301 z"
     id="text636"
     style="font-weight:600;font-size:2.95px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#1f2937"
     aria-label="ใบอนุญาต 3083-1795/828" />
  <path
     d="m 163.57962,75.0155 q 0,0.341 -0.12925,0.5885 -0.1265,0.24475 -0.38775,0.34925 l 0.473,0.51425 h -0.4675 l -0.36575,-0.44 q -0.011,0 -0.0248,0 -0.011,0 -0.022,0 -0.3135,0 -0.51975,-0.1265 -0.2035,-0.1265 -0.30525,-0.35475 -0.099,-0.22825 -0.099,-0.5335 0,-0.3025 0.099,-0.528 0.10175,-0.22825 0.30525,-0.352 0.20625,-0.1265 0.5225,-0.1265 0.31075,0 0.51425,0.1265 0.20625,0.12375 0.30525,0.352 0.10175,0.2255 0.10175,0.53075 z m -1.47675,0 q 0,0.33275 0.132,0.5225 0.132,0.18975 0.42075,0.18975 0.2915,0 0.42075,-0.18975 0.132,-0.18975 0.132,-0.5225 0,-0.33275 -0.12925,-0.5225 -0.12925,-0.18975 -0.42075,-0.18975 -0.28875,0 -0.4235,0.18975 -0.132,0.18975 -0.132,0.5225 z m 2.453,-0.979 q 0.38775,0 0.572,0.143 0.187,0.143 0.187,0.4345 0,0.143 -0.055,0.24475 -0.0523,0.10175 -0.1375,0.1705 -0.0853,0.066 -0.18425,0.10725 L 165.50187,76 h -0.396 l -0.47025,-0.7755 h -0.286 V 76 h -0.352 v -1.9635 z m -0.022,0.29425 h -0.18425 v 0.605 h 0.19525 q 0.21725,0 0.3135,-0.077 0.099,-0.07975 0.099,-0.23375 0,-0.1595 -0.1045,-0.2255 -0.10175,-0.06875 -0.319,-0.06875 z m 2.79125,-0.02475 q -0.2695,0 -0.418,0.1925 -0.14575,0.1925 -0.14575,0.5225 0,0.33275 0.1375,0.5225 0.1375,0.187 0.4235,0.187 0.12375,0 0.242,-0.02475 0.11825,-0.0275 0.2475,-0.0715 V 75.934 q -0.121,0.0495 -0.24475,0.0715 -0.121,0.022 -0.2805,0.022 -0.3025,0 -0.5005,-0.12375 -0.198,-0.1265 -0.29425,-0.352 -0.0962,-0.22825 -0.0962,-0.5335 0,-0.297 0.10725,-0.5225 0.10725,-0.22825 0.3135,-0.3575 0.209,-0.12925 0.50875,-0.12925 0.1485,0 0.2915,0.03575 0.14575,0.033 0.27225,0.0935 l -0.121,0.28875 q -0.1045,-0.04675 -0.21725,-0.0825 -0.11,-0.0385 -0.2255,-0.0385 z m 2.20825,0.946 q 0,0.37125 -0.1925,0.57475 -0.1925,0.20075 -0.5225,0.20075 -0.2035,0 -0.363,-0.09075 -0.1595,-0.09075 -0.25025,-0.264 -0.0907,-0.17325 -0.0907,-0.42075 0,-0.37125 0.18975,-0.56925 0.1925,-0.20075 0.5225,-0.20075 0.20625,0 0.36575,0.09075 0.1595,0.088 0.25025,0.26125 0.0907,0.1705 0.0907,0.418 z m -1.06425,0 q 0,0.2365 0.0825,0.36575 0.0852,0.12925 0.27225,0.12925 0.187,0 0.2695,-0.12925 0.0853,-0.12925 0.0853,-0.36575 0,-0.2365 -0.0853,-0.363 -0.0825,-0.1265 -0.27225,-0.1265 -0.18425,0 -0.2695,0.1265 -0.0825,0.1265 -0.0825,0.363 z m 1.914,0.7755 q -0.26125,0 -0.42075,-0.19525 -0.1595,-0.19525 -0.1595,-0.57475 0,-0.385 0.16225,-0.58025 0.16225,-0.19525 0.42625,-0.19525 0.165,0 0.2695,0.06325 0.10725,0.06325 0.1705,0.154 h 0.0165 q -0.008,-0.0385 -0.0165,-0.11825 -0.008,-0.07975 -0.008,-0.1485 V 73.91 h 0.3465 V 76 h -0.2695 l -0.0632,-0.19525 h -0.0138 q -0.0632,0.0935 -0.16775,0.1595 -0.1045,0.06325 -0.27225,0.06325 z m 0.1045,-0.2805 q 0.1925,0 0.2695,-0.11 0.0798,-0.11 0.0825,-0.33275 v -0.044 q 0,-0.23925 -0.077,-0.36575 -0.0743,-0.12925 -0.2805,-0.12925 -0.1595,0 -0.24475,0.132 -0.0825,0.12925 -0.0825,0.36575 0,0.2365 0.0853,0.36025 0.0853,0.12375 0.2475,0.12375 z m 1.72425,-1.265 q 0.29975,0 0.473,0.17875 0.176,0.17875 0.176,0.49775 v 0.176 h -0.9845 q 0.005,0.2035 0.11275,0.31625 0.10725,0.11 0.297,0.11 0.143,0 0.2585,-0.0275 0.1155,-0.03025 0.2365,-0.08525 v 0.27775 q -0.11,0.05225 -0.22825,0.077 -0.11825,0.02475 -0.28325,0.02475 -0.21725,0 -0.38775,-0.0825 -0.16775,-0.08525 -0.264,-0.25575 -0.0935,-0.1705 -0.0935,-0.4235 0,-0.38225 0.18975,-0.583 0.18975,-0.20075 0.49775,-0.20075 z m 0,0.25575 q -0.14025,0 -0.22825,0.09075 -0.0853,0.088 -0.099,0.264 h 0.64075 q -0.003,-0.154 -0.0798,-0.253 -0.0742,-0.10175 -0.23375,-0.10175 z M 174.05162,76 v -0.64625 h -0.176 v -0.231 h 0.495 v 0.60775 h 0.0248 q 0.15675,0 0.2365,-0.1155 0.0825,-0.11825 0.0825,-0.37125 0,-0.275 -0.10725,-0.38775 -0.1045,-0.1155 -0.32725,-0.1155 -0.14025,0 -0.2585,0.0385 -0.1155,0.03575 -0.21175,0.099 v -0.29975 q 0.0853,-0.0495 0.22275,-0.0825 0.1375,-0.03575 0.308,-0.03575 0.38775,0 0.55825,0.198 0.1705,0.19525 0.1705,0.58025 0,0.36575 -0.16225,0.56375 -0.1595,0.198 -0.55,0.198 z m 1.84525,0.033 q -0.16225,0 -0.31625,-0.033 -0.154,-0.03575 -0.2695,-0.0935 l 0.099,-0.27775 q 0.0853,0.04125 0.21175,0.0825 0.1265,0.04125 0.26675,0.04125 0.12375,0 0.19525,-0.0385 0.0715,-0.04125 0.0715,-0.121 0,-0.07975 -0.0825,-0.1265 -0.0797,-0.0495 -0.2365,-0.10175 -0.15675,-0.05225 -0.26675,-0.11275 -0.11,-0.0605 -0.16775,-0.1485 -0.0577,-0.088 -0.0577,-0.22 0,-0.2035 0.15675,-0.3135 0.1595,-0.11 0.451,-0.11 0.14575,0 0.26675,0.02475 0.121,0.02475 0.18975,0.06325 v 0.2805 q -0.0715,-0.033 -0.198,-0.06325 -0.1265,-0.033 -0.25025,-0.033 -0.14025,0 -0.2035,0.04125 -0.0633,0.04125 -0.0633,0.10175 0,0.07425 0.0853,0.11825 0.0853,0.04125 0.2695,0.1045 0.1375,0.04675 0.23925,0.10725 0.1045,0.0605 0.1595,0.1485 0.0577,0.08525 0.0577,0.21725 0,0.121 -0.0577,0.2255 -0.055,0.1045 -0.187,0.1705 -0.132,0.066 -0.363,0.066 z m -0.67375,-1.76 v -0.1485 l 0.2475,-0.1045 h 0.97625 v 0.253 z m 1.8425,1.727 -0.451,-1.507 h 0.352 l 0.36025,1.221 h 0.0247 q 0.0495,0 0.0962,-0.0275 0.0495,-0.0275 0.0853,-0.0715 0.0633,-0.0825 0.0935,-0.20075 0.033,-0.11825 0.033,-0.2365 0,-0.198 -0.0825,-0.308 -0.0825,-0.11275 -0.22825,-0.11275 -0.0605,0 -0.099,0.0165 l -0.0687,-0.27225 q 0.0605,-0.0165 0.11275,-0.022 0.055,-0.0055 0.0935,-0.0055 0.27775,0 0.4345,0.15675 0.0962,0.0935 0.143,0.23375 0.0495,0.14025 0.0495,0.3135 0,0.22 -0.0688,0.385 -0.0687,0.165 -0.16775,0.264 -0.0825,0.07975 -0.20625,0.1265 Q 177.45062,76 177.24987,76 Z m 1.8645,0.033 q -0.28875,0 -0.44,-0.132 -0.15125,-0.13475 -0.15125,-0.39325 v -0.132 q 0,-0.121 0.033,-0.19525 0.0358,-0.077 0.077,-0.1375 0.0468,-0.0605 0.077,-0.10725 0.0302,-0.04675 0.0302,-0.10725 0,-0.05225 -0.0275,-0.07425 -0.0247,-0.022 -0.0632,-0.022 -0.055,0 -0.12925,0.03575 l -0.0632,-0.22825 q 0.066,-0.0385 0.1485,-0.05225 0.0853,-0.01375 0.1485,-0.01375 0.1705,0 0.242,0.0825 0.0715,0.0825 0.0715,0.22 0,0.09075 -0.0303,0.15675 -0.0275,0.066 -0.0687,0.132 -0.0412,0.066 -0.0715,0.12375 -0.0275,0.05775 -0.0275,0.16225 v 0.12925 q 0,0.154 0.0687,0.2145 0.0715,0.0605 0.17875,0.0605 0.23925,0 0.23925,-0.2475 V 74.493 h 0.3465 v 1.02575 q 0,0.25025 -0.15125,0.38225 -0.1485,0.132 -0.43725,0.132 z m 1.57025,0 q -0.32175,0 -0.4785,-0.1595 -0.154,-0.16225 -0.154,-0.48675 0,-0.055 0.003,-0.12925 0.003,-0.07425 0.011,-0.13475 h 0.62975 v 0.2365 h -0.29975 v 0.044 q 0,0.20075 0.0687,0.28325 0.0715,0.0825 0.21725,0.0825 0.10175,0 0.176,-0.044 0.077,-0.044 0.1155,-0.15125 0.0412,-0.11 0.0412,-0.30525 0,-0.264 -0.0935,-0.39325 -0.0908,-0.132 -0.32725,-0.132 -0.1265,0 -0.25575,0.03575 -0.1265,0.03575 -0.22,0.09075 V 74.57 q 0.0852,-0.04675 0.231,-0.077 0.1485,-0.033 0.3025,-0.033 0.2585,0 0.41525,0.099 0.1595,0.09625 0.231,0.275 0.0743,0.17875 0.0743,0.42075 0,0.37125 -0.1595,0.57475 -0.15675,0.2035 -0.528,0.2035 z m 1.2925,-0.033 -0.451,-1.507 h 0.352 l 0.36025,1.221 h 0.0247 q 0.0495,0 0.0962,-0.0275 0.0495,-0.0275 0.0853,-0.0715 0.0633,-0.0825 0.0935,-0.20075 0.033,-0.11825 0.033,-0.2365 0,-0.198 -0.0825,-0.308 -0.0825,-0.11275 -0.22825,-0.11275 -0.0605,0 -0.099,0.0165 l -0.0688,-0.27225 q 0.0605,-0.0165 0.11275,-0.022 0.055,-0.0055 0.0935,-0.0055 0.27775,0 0.4345,0.15675 0.0963,0.0935 0.143,0.23375 0.0495,0.14025 0.0495,0.3135 0,0.22 -0.0688,0.385 -0.0687,0.165 -0.16775,0.264 -0.0825,0.07975 -0.20625,0.1265 Q 182.17787,76 181.97712,76 Z m 2.40351,0.0275 q -0.23925,0 -0.3685,-0.11275 -0.1265,-0.11275 -0.1265,-0.31625 0,-0.22275 0.1595,-0.352 0.16225,-0.12925 0.517,-0.154 l 0.27775,-0.022 v -0.05775 q 0,-0.15125 -0.077,-0.2145 -0.0743,-0.066 -0.23925,-0.066 -0.14025,0 -0.27225,0.04125 -0.132,0.04125 -0.2365,0.10175 V 74.5755 q 0.0797,-0.0385 0.22,-0.077 0.143,-0.0385 0.32725,-0.0385 0.1045,0 0.1925,0.0165 0.088,0.0165 0.1485,0.0605 0.0385,-0.02475 0.0605,-0.0605 0.022,-0.03575 0.022,-0.0825 h 0.31625 q 0,0.099 -0.0522,0.1815 -0.0495,0.0825 -0.1485,0.13475 0.0413,0.055 0.0605,0.132 0.0192,0.077 0.0192,0.17325 V 76 h -0.341 v -0.6655 l -0.2365,0.01925 q -0.209,0.01925 -0.28875,0.077 -0.0797,0.055 -0.0797,0.15675 0,0.09625 0.0605,0.14575 0.0633,0.04675 0.1705,0.04675 0.0385,0 0.0715,-0.0055 0.0358,-0.0083 0.066,-0.0165 l 0.0385,0.22825 q -0.11,0.04125 -0.26125,0.04125 z m 2.04325,0 q -0.18975,0 -0.3135,-0.0715 -0.121,-0.07425 -0.16775,-0.1925 h -0.0192 L 185.70613,76 h -0.2695 v -1.507 h 0.34925 v 0.77825 q 0,0.2255 0.088,0.341 0.0907,0.1155 0.25575,0.1155 0.2695,0 0.2695,-0.308 V 74.493 h 0.34925 v 0.99 q 0,0.2695 -0.132,0.407 -0.132,0.1375 -0.37675,0.1375 z m 1.4905,0.0055 q -0.32175,0 -0.4785,-0.1595 -0.154,-0.16225 -0.154,-0.48675 0,-0.055 0.003,-0.12925 0.003,-0.07425 0.011,-0.13475 h 0.62975 v 0.2365 h -0.29975 v 0.044 q 0,0.20075 0.0687,0.28325 0.0715,0.0825 0.21725,0.0825 0.10175,0 0.176,-0.044 0.077,-0.044 0.1155,-0.15125 0.0412,-0.11 0.0412,-0.30525 0,-0.264 -0.0935,-0.39325 -0.0908,-0.132 -0.32725,-0.132 -0.1265,0 -0.25575,0.03575 -0.1265,0.03575 -0.22,0.09075 V 74.57 q 0.0853,-0.04675 0.231,-0.077 0.1485,-0.033 0.3025,-0.033 0.2585,0 0.41525,0.099 0.1595,0.09625 0.231,0.275 0.0743,0.17875 0.0743,0.42075 0,0.37125 -0.1595,0.57475 -0.15675,0.2035 -0.528,0.2035 z m 1.0065,-0.209 q 0,-0.1155 0.0605,-0.16225 0.0605,-0.0495 0.1485,-0.0495 0.0853,0 0.1485,0.0495 0.0632,0.04675 0.0632,0.16225 0,0.11275 -0.0632,0.16225 -0.0633,0.0495 -0.1485,0.0495 -0.088,0 -0.1485,-0.0495 -0.0605,-0.0495 -0.0605,-0.16225 z"
     id="text637"
     style="font-weight:600;font-size:2.75px;font-family:'Noto Sans Thai', sans-serif;text-anchor:middle;fill:#4b5563"
     aria-label="QR Code จริงของ สมอ." />
  <metadata
     id="metadata637">Revised PCC TISI sticker; QR points to https://appdb.tisi.go.th/Q/i.php?d=3030092848</metadata>
</svg>
`,j0=72/25.4,K1=1200,Kn=297,Ct=210,vt=70,Ze=30,zt=4,m5=6,At=zt*m5,Ye=At,i2="stc-label-studio-settings-v1",o2="stc-label-studio-history-v1",a2=10,Zt=(Kn-vt*zt)/2,Yt=(Ct-Ze*m5)/2,et=[{code:"A13-050-0704",wires:7},{code:"A13-050-0604",wires:6},{code:"A13-050-0504",wires:5},{code:"A13-050-0404",wires:4}],dt=ya();let G1;const G={selectedProductCodes:new Set(dt.selectedProductCodes),quantityByProduct:dt.quantityByProduct,length:dt.length,lot:dt.lot,productionDate:dt.productionDate,printOffsetX:dt.printOffsetX,printOffsetY:dt.printOffsetY,previewPage:0,labelSvgUrls:new Map,pdfUrl:"",pdfBytes:null,isDirty:!0};document.querySelector("#app").innerHTML=`
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
`;const Z={productList:document.querySelector("#product-list"),length:document.querySelector("#length"),lot:document.querySelector("#lot"),date:document.querySelector("#production-date"),selectedCount:document.querySelector("#selected-count"),labelCount:document.querySelector("#label-count"),outputSummary:document.querySelector("#output-summary"),pageCount:document.querySelector("#page-count"),preview:document.querySelector("#a4-preview"),pageIndicator:document.querySelector("#page-indicator"),previousPage:document.querySelector("#previous-page"),nextPage:document.querySelector("#next-page"),generate:document.querySelector("#generate-button"),print:document.querySelector("#print-button"),download:document.querySelector("#download-button"),fileStatus:document.querySelector("#file-status"),toast:document.querySelector("#toast"),printRoot:document.querySelector("#print-root"),reviewDialog:document.querySelector("#review-dialog"),reviewMeta:document.querySelector("#review-meta"),reviewProducts:document.querySelector("#review-products"),duplicateLotWarning:document.querySelector("#duplicate-lot-warning"),duplicateLotTitle:document.querySelector("#duplicate-lot-title"),duplicateLotDetail:document.querySelector("#duplicate-lot-detail"),duplicateLotConfirm:document.querySelector("#duplicate-lot-confirm"),confirmGenerate:document.querySelector("#confirm-generate"),historyDialog:document.querySelector("#history-dialog"),historyList:document.querySelector("#history-list"),qrCheck:document.querySelector("#qr-check"),printSettingsDialog:document.querySelector("#print-settings-dialog"),printOffsetX:document.querySelector("#print-offset-x"),printOffsetY:document.querySelector("#print-offset-y")};P5();Z.length.value=String(G.length);Z.lot.value=G.lot;Z.date.value=G.productionDate;ta();Dt();tt();dt.wasRestored&&Fe("เรียกคืนงานล่าสุดแล้ว");function P5(){Z.productList.innerHTML=et.map(n=>{const e=Gr(n.code);return`
    <div class="product-option ${G.selectedProductCodes.has(n.code)?"selected":""}" data-product-code="${n.code}">
      <label class="product-select">
        <input type="checkbox" name="product" value="${n.code}" ${G.selectedProductCodes.has(n.code)?"checked":""} />
        <span class="product-icon"><i data-lucide="package-open"></i></span>
        <span class="product-copy">
          <span class="product-topline">
            <strong>${n.code}</strong>
            <span class="ready"><span></span>พร้อมใช้</span>
          </span>
          <span class="product-name">แผ่นพื้นลวด 4 mm. ${n.wires} เส้น (0.35×0.05 m.)</span>
        </span>
        <span class="selected-check"><i data-lucide="check"></i></span>
      </label>
      <div class="product-quantity" ${G.selectedProductCodes.has(n.code)?"":"hidden"} title="จำนวนที่กำหนดได้สูงสุด ${e} ดวง" aria-label="จำนวนฉลาก ${n.code}">
        <button type="button" data-quantity-action="minus" data-code="${n.code}" title="ลดจำนวน" aria-label="ลดจำนวน ${n.code}" ${G.quantityByProduct[n.code]<=1?"disabled":""}>
          <i data-lucide="minus"></i>
        </button>
        <input class="product-quantity-input" data-code="${n.code}" type="number" min="1" max="${e}" step="1" inputmode="numeric" value="${G.quantityByProduct[n.code]}" aria-label="จำนวนฉลาก ${n.code} สูงสุด ${e}" />
        <button type="button" data-quantity-action="plus" data-code="${n.code}" title="เพิ่มจำนวน" aria-label="เพิ่มจำนวน ${n.code}" ${G.quantityByProduct[n.code]>=e?"disabled":""}>
          <i data-lucide="plus"></i>
        </button>
      </div>
    </div>
  `}).join("")}function ta(){Z.productList.addEventListener("change",n=>{if(n.target.matches(".product-quantity-input"))return;const e=et.find(t=>t.code===n.target.value);if(e){if(n.target.checked){const t=Ye-j5();if(t<=0){Fe("ครบ 24 ดวงแล้ว กรุณาลดจำนวนสินค้าเดิมก่อน"),P5(),Dt();return}G.quantityByProduct[e.code]=Ke(G.quantityByProduct[e.code],1,t),G.selectedProductCodes.add(e.code),Fe(`สินค้า ${e.code} เพิ่มได้สูงสุด ${t} ดวง`)}else G.selectedProductCodes.delete(e.code);G.previewPage=0,P5(),Dt(),nt(),tt()}}),Z.productList.addEventListener("input",n=>{n.target.matches(".product-quantity-input")&&X1(n.target.dataset.code,n.target.value,n.target)}),Z.productList.addEventListener("click",n=>{const e=n.target.closest("[data-quantity-action]");if(!e)return;const t=e.dataset.code,r=e.dataset.quantityAction==="plus"?1:-1;X1(t,G.quantityByProduct[t]+r)}),Z.length.addEventListener("input",()=>{G.length=Number(Z.length.value),Z.length.removeAttribute("aria-invalid"),nt(),tt()}),Z.date.addEventListener("change",()=>{G.productionDate=Z.date.value,Z.date.removeAttribute("aria-invalid"),nt(),tt()}),Z.lot.addEventListener("input",()=>{G.lot=Z.lot.value.trim(),Z.lot.removeAttribute("aria-invalid"),nt(),tt()}),document.querySelector("#generate-lot").addEventListener("click",ha),document.querySelector("#history-button").addEventListener("click",ua),document.querySelector("#reset-button").addEventListener("click",da),document.querySelector("#print-settings-button").addEventListener("click",ia),document.querySelector("#print-settings-close").addEventListener("click",pr),document.querySelector("#save-print-settings").addEventListener("click",oa),document.querySelector("#reset-offset").addEventListener("click",aa),document.querySelector("#download-calibration").addEventListener("click",la),Z.printSettingsDialog.addEventListener("click",n=>{n.target===Z.printSettingsDialog&&pr()}),Z.printOffsetX.addEventListener("input",Dn),Z.printOffsetY.addEventListener("input",Dn),document.querySelector("#history-close").addEventListener("click",Fr),Z.historyDialog.addEventListener("click",n=>{n.target===Z.historyDialog&&Fr()}),Z.historyList.addEventListener("click",fa),Z.previousPage.addEventListener("click",()=>H1(-1)),Z.nextPage.addEventListener("click",()=>H1(1)),Z.generate.addEventListener("click",ra),document.querySelector("#review-close").addEventListener("click",tn),document.querySelector("#review-cancel").addEventListener("click",tn),Z.duplicateLotConfirm.addEventListener("change",()=>{Z.confirmGenerate.disabled=!Z.duplicateLotConfirm.checked}),Z.confirmGenerate.addEventListener("click",()=>{tn(),Ea()}),Z.reviewDialog.addEventListener("click",n=>{n.target===Z.reviewDialog&&tn()}),Z.download.addEventListener("click",Ca),Z.print.addEventListener("click",pa)}function X1(n,e,t=null){const r=Math.round(Number(e)),x=Gr(n);G.quantityByProduct[n]=Number.isFinite(r)?Ke(r,1,x):1,Number.isFinite(r)&&r>x&&Fe(`สินค้า ${n} กำหนดได้สูงสุด ${x} ดวง`),na(),G.previewPage=Math.min(G.previewPage,Nt()-1),nt(),mn(),yn(),Cr()}function na(){Z.productList.querySelectorAll(".product-quantity-input").forEach(n=>{const e=n.dataset.code,t=Gr(e);n.max=String(t),n.value=String(G.quantityByProduct[e]);const r=n.closest(".product-quantity");r.title=`จำนวนที่กำหนดได้สูงสุด ${t} ดวง`,r.querySelector('[data-quantity-action="minus"]').disabled=G.quantityByProduct[e]<=1,r.querySelector('[data-quantity-action="plus"]').disabled=G.quantityByProduct[e]>=t})}function H1(n){G.previewPage=Ke(G.previewPage+n,0,Nt()-1),mn(),yn()}function tt(){if(!L5()){Y1(),mn(),yn(),Cr();return}Y1(),yt().forEach(n=>{G.labelSvgUrls.set(n.code,URL.createObjectURL(new Blob([Kr(n)],{type:"image/svg+xml"})))}),mn(),yn(),Cr()}function Kr(n){const e=new DOMParser().parseFromString(ea,"image/svg+xml"),t=e.documentElement,r=e.querySelector('[aria-label="350 × 50 × 3,000 mm"]'),x=e.querySelector('[aria-label="ลวดอัดแรง Ø4 mm • จำนวน ______ เส้น"]'),i=e.querySelector('[aria-label="LOT : B0001"]'),o=e.querySelector('[aria-label="ผลิตวันที่ : 08/08/2026"]');if(!r||!x||!i||!o)throw new Error("Sticker template data fields were not found");const a=e.createElementNS("http://www.w3.org/2000/svg","g");a.setAttribute("id","dynamic-label-data");const l=r.parentNode;[r,x,i,o].forEach(h=>h.remove()),a.append(u5(e,{x:67.3,y:63.15,size:5.6,weight:700,text:`350 × 50 × ${Zr(G.length)} mm`,label:"ขนาดสินค้า"}),u5(e,{x:67.26,y:68.58,size:3.75,weight:600,text:`ลวดอัดแรง Ø4 mm • จำนวน ${n.wires} เส้น`,label:"จำนวนเส้น"}),u5(e,{x:148.1,y:68.5,size:2.8,weight:700,anchor:"end",fill:"#294d86",text:n.code,label:"รหัสสินค้า"}),u5(e,{x:67.43,y:75.2,size:3.65,weight:700,text:`LOT : ${G.lot}`,label:"LOT"}),u5(e,{x:108.67,y:75.2,size:3.65,weight:700,text:`ผลิตวันที่ : ${s2(G.productionDate)}`,label:"วันที่ผลิต"})),l.append(a);const c=e.createElementNS("http://www.w3.org/2000/svg","style");return c.textContent=`
    @font-face{font-family:'Sarabun';src:url('${O9}') format('woff2');font-weight:400;font-style:normal}
    @font-face{font-family:'Sarabun';src:url('${R9}') format('woff2');font-weight:700;font-style:normal}
  `,(e.querySelector("defs")||t).append(c),new XMLSerializer().serializeToString(e)}function u5(n,{x:e,y:t,size:r,weight:x,text:i,label:o,anchor:a="start",fill:l="#1f2937"}){const c=n.createElementNS("http://www.w3.org/2000/svg","text");return c.setAttribute("x",String(e)),c.setAttribute("y",String(t)),c.setAttribute("fill",l),c.setAttribute("font-family","'Sarabun', Tahoma, sans-serif"),c.setAttribute("font-size",String(r)),c.setAttribute("font-weight",String(x)),c.setAttribute("text-anchor",a),c.setAttribute("aria-label",o),c.textContent=i,c}function yn(){if(!L5()){Z.preview.innerHTML='<div class="preview-empty">กรอกข้อมูลให้ครบ</div>';return}const n=G.previewPage*At,e=Xr().slice(n,n+At);Z.preview.innerHTML=e.map((t,r)=>{const x=Hr(r),i=x.y/Ct*100,o=x.x/Kn*100;return`<img class="sheet-label" style="top:${i}%;left:${o}%" src="${G.labelSvgUrls.get(t.code)}" alt="ฉลาก ${t.code} LOT ${wn(G.lot)}" />`}).join("")}function Cr(){if(!L5()){Z.printRoot.innerHTML="";return}const n=Xr();Z.printRoot.innerHTML=Array.from({length:Nt()},(e,t)=>`<section class="print-page">${n.slice(t*At,(t+1)*At).map((i,o)=>{const a=Hr(o);return`<img style="top:${a.y}mm;left:${a.x}mm" src="${G.labelSvgUrls.get(i.code)}" alt="" />`}).join("")}</section>`).join("")}async function ra(){if(!L5()){c2();return}const n=j5();Z.reviewMeta.innerHTML=`
    <div><dt>ขนาด</dt><dd>350 × 50 × ${Zr(G.length)} mm</dd></div>
    <div><dt>LOT</dt><dd>${wn(G.lot)}</dd></div>
    <div><dt>วันที่ผลิต</dt><dd>${s2(G.productionDate)}</dd></div>
    <div><dt>รวม</dt><dd>${n} ดวง · ${Nt()} หน้า</dd></div>
  `,Z.reviewProducts.innerHTML=yt().map(t=>`
    <div class="review-product-row">
      <span><strong>${t.code}</strong><small>${t.wires} เส้น</small></span>
      <strong>${G.quantityByProduct[t.code]} ดวง</strong>
    </div>
  `).join(""),xa(),Z.qrCheck.className="qr-check checking",Z.qrCheck.textContent="กำลังตรวจสอบ QR Code...",Z.reviewDialog.showModal();const e=await sa(Kr(yt()[0]));Z.qrCheck.className=`qr-check ${e.valid?"valid":"warning"}`,Z.qrCheck.textContent=e.valid?"QR Code อ่านได้ พร้อมสร้างไฟล์":"ไม่สามารถยืนยัน QR Code ได้ กรุณาตรวจตัวอย่างก่อนพิมพ์"}function xa(){const n=G.lot.trim().toLocaleUpperCase("en-US"),e=V5().filter(x=>x.lot.trim().toLocaleUpperCase("en-US")===n),t=e[0],r=e.length>0;Z.duplicateLotWarning.hidden=!r,Z.duplicateLotConfirm.checked=!1,Z.confirmGenerate.disabled=r,Z.confirmGenerate.querySelector("span").textContent=r?"ยืนยันพิมพ์ซ้ำ":"ยืนยันและสร้าง PDF",r&&(Z.duplicateLotTitle.textContent=`พบ LOT ${G.lot} ในประวัติ ${e.length} ครั้ง`,Z.duplicateLotDetail.textContent=`สร้างล่าสุด ${u2(t.createdAt)} กรุณาตรวจสอบก่อนพิมพ์ซ้ำ`)}function tn(){Z.reviewDialog.open&&Z.reviewDialog.close()}function ia(){Z.printOffsetX.value=String(G.printOffsetX),Z.printOffsetY.value=String(G.printOffsetY),Dn(),Z.printSettingsDialog.showModal()}function pr(){Z.printSettingsDialog.open&&Z.printSettingsDialog.close()}function oa(){G.printOffsetX=Ke(Number(Z.printOffsetX.value)||0,-5,5),G.printOffsetY=Ke(Number(Z.printOffsetY.value)||0,-5,5),h2(),nt(),tt(),pr(),Fe(`ชดเชยตำแหน่ง X ${J1(G.printOffsetX)} มม. · Y ${J1(G.printOffsetY)} มม.`)}function aa(){Z.printOffsetX.value="0",Z.printOffsetY.value="0",Dn()}function Dn(){const n=Ke(Number(Z.printOffsetX.value)||0,-5,5),e=Ke(Number(Z.printOffsetY.value)||0,-5,5);document.querySelector("#offset-direction-x").textContent=n===0?"กึ่งกลางแนวนอน":`${Math.abs(n)} มม. ไปทาง${n>0?"ขวา":"ซ้าย"}`,document.querySelector("#offset-direction-y").textContent=e===0?"กึ่งกลางแนวตั้ง":`${Math.abs(e)} มม. ไปทาง${e>0?"ล่าง":"บน"}`}async function la(){const n=document.querySelector("#download-calibration");n.disabled=!0;try{const e=await ot.create(),t=Kn*j0,r=Ct*j0,x=e.addPage([t,r]),i=await e.embedFont(t5.Helvetica),o=await e.embedFont(t5.HelveticaBold),a=R0(.05,.32,.66),l=R0(.35,.4,.45),c=R0(.76,.79,.82);x.drawText("STC PRINTER CALIBRATION - A4 LANDSCAPE - PRINT AT 100%",{x:12*j0,y:r-9*j0,size:9,font:o,color:a}),x.drawText("Measure the printed target shift, then enter the opposite correction in Printer Settings.",{x:12*j0,y:r-14*j0,size:6.5,font:i,color:l});for(let f=0;f<m5;f+=1)for(let v=0;v<zt;v+=1){const C=(Zt+v*vt)*j0,F=(Yt+f*Ze)*j0,p=r-F-Ze*j0;x.drawRectangle({x:C,y:p,width:vt*j0,height:Ze*j0,borderWidth:.35,borderColor:f===0&&v===0?a:c,borderDashArray:f===0&&v===0?void 0:[2,2]})}nn(x,Zt,Yt,a),nn(x,Zt+zt*vt,Yt,a),nn(x,Zt,Yt+m5*Ze,a),nn(x,Zt+zt*vt,Yt+m5*Ze,a),ca(x,i,l,c);const h=await e.save(),s=URL.createObjectURL(new Blob([h],{type:"application/pdf"})),u=document.createElement("a");u.href=s,u.download="STC_printer_calibration_A4.pdf",u.click(),window.setTimeout(()=>URL.revokeObjectURL(s),1e3),Fe("สร้างแผ่นทดสอบ A4 แล้ว")}catch(e){console.error(e),Fe("สร้างแผ่นทดสอบไม่สำเร็จ")}finally{n.disabled=!1}}function nn(n,e,t,r){const x=e*j0,i=(Ct-t)*j0,o=4*j0;n.drawLine({start:{x:x-o,y:i},end:{x:x+o,y:i},thickness:.7,color:r}),n.drawLine({start:{x,y:i-o},end:{x,y:i+o},thickness:.7,color:r}),n.drawCircle({x,y:i,size:1.5*j0,borderWidth:.5,borderColor:r})}function ca(n,e,t,r){n.drawLine({start:{x:98.5*j0,y:(Ct-195)*j0},end:{x:(98.5+100)*j0,y:(Ct-195)*j0},thickness:.5,color:t});for(let o=0;o<=100;o+=1){const a=o%10===0?4:o%5===0?2.5:1.4,l=(98.5+o)*j0,c=(Ct-195)*j0;n.drawLine({start:{x:l,y:c},end:{x:l,y:c-a*j0},thickness:.25,color:o%5===0?t:r}),o%10===0&&n.drawText(String(o),{x:l-2,y:c-7*j0,size:5,font:e,color:t})}n.drawText("100 mm reference ruler",{x:116*j0,y:5*j0,size:6,font:e,color:t})}async function sa(n){const e=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{const t=await f2(e),r=document.createElement("canvas");r.width=1400,r.height=600;const x=r.getContext("2d",{willReadFrequently:!0});x.fillStyle="#ffffff",x.fillRect(0,0,r.width,r.height),x.drawImage(t,0,0,r.width,r.height);const i=x.getImageData(0,0,r.width,r.height),o=M9(i.data,i.width,i.height,{inversionAttempts:"attemptBoth"});return{valid:!!o?.data,data:o?.data||""}}catch{return{valid:!1,data:""}}finally{URL.revokeObjectURL(e)}}function ha(){const e=`PL50-${(G.productionDate||Yr()).replaceAll("-","").slice(2)}-`,t=V5().map(i=>i.lot).filter(i=>i?.startsWith(e)).map(i=>Number(i.slice(e.length))).filter(Number.isFinite),r=G.lot.startsWith(e)?Number(G.lot.slice(e.length)):0,x=Math.max(0,r,...t)+1;G.lot=`${e}${String(x).padStart(3,"0")}`,Z.lot.value=G.lot,Z.lot.removeAttribute("aria-invalid"),nt(),tt(),Fe(`สร้าง LOT ${G.lot} แล้ว`)}function da(){window.confirm("เริ่มงานใหม่และล้างค่าที่กำลังกรอกหรือไม่?")&&(G.selectedProductCodes=new Set([et[0].code]),G.quantityByProduct=Object.fromEntries(et.map(n=>[n.code,Ye])),G.length=3,G.lot="B0001",G.productionDate=Yr(),G.previewPage=0,Z.length.value="3",Z.lot.value=G.lot,Z.date.value=G.productionDate,P5(),Dt(),nt(),tt(),Fe("เริ่มงานใหม่แล้ว"))}function ua(){l2(),Z.historyDialog.showModal()}function Fr(){Z.historyDialog.open&&Z.historyDialog.close()}function l2(){const n=V5();Z.historyList.innerHTML=n.length?n.map(e=>`
    <div class="history-item" data-history-id="${e.id}">
      <button class="history-load" type="button" data-history-action="load" data-id="${e.id}">
        <span><strong>${wn(e.lot)}</strong><small>${u2(e.createdAt)}</small></span>
        <span><strong>${wa(e)} ดวง</strong><small>${e.selectedProductCodes.length} สินค้า · ${ga(e.length)} m</small></span>
      </button>
      <button class="history-delete" type="button" data-history-action="delete" data-id="${e.id}" title="ลบรายการ" aria-label="ลบ ${wn(e.lot)}">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join(""):'<div class="history-empty">ยังไม่มีประวัติงาน</div>',Dt()}function fa(n){const e=n.target.closest("[data-history-action]");if(!e)return;const t=V5(),r=t.find(x=>x.id===e.dataset.id);if(e.dataset.historyAction==="delete"){d2(t.filter(x=>x.id!==e.dataset.id)),l2(),Fe("ลบประวัติแล้ว");return}r&&(va(r),Fr(),Fe(`เรียกคืน LOT ${r.lot} แล้ว`))}function va(n){G.selectedProductCodes=new Set(n.selectedProductCodes),G.quantityByProduct={...n.quantityByProduct},G.length=n.length,G.lot=n.lot,G.productionDate=n.productionDate,G.previewPage=0,Z.length.value=String(G.length),Z.lot.value=G.lot,Z.date.value=G.productionDate,P5(),Dt(),nt(),tt()}function c2(){if(Z.length.toggleAttribute("aria-invalid",!Number.isFinite(G.length)||G.length<=0),Z.date.toggleAttribute("aria-invalid",!G.productionDate),Z.lot.toggleAttribute("aria-invalid",!G.lot),!G.selectedProductCodes.size){Fe("กรุณาเลือกสินค้าอย่างน้อย 1 รายการ"),Z.productList.querySelector("input")?.focus();return}Fe("กรุณากรอกความยาว วันที่ผลิต และ LOT ให้ครบ"),!Number.isFinite(G.length)||G.length<=0?Z.length.focus():G.productionDate?Z.lot.focus():Z.date.focus()}async function Ea(){if(!L5()){c2();return}Z1(!0);try{const n=await ot.create(),e=new Map;for(const l of yt()){const c=await Ba(Kr(l));e.set(l.code,await n.embedPng(c))}const t=Xr(),r=Kn*j0,x=Ct*j0,i=vt*j0,o=Ze*j0;for(let l=0;l<Nt();l+=1){const c=n.addPage([r,x]),h=t.slice(l*At,(l+1)*At);for(let s=0;s<h.length;s+=1){const u=Hr(s),f=u.x*j0,v=x-(u.y+Ze)*j0;c.drawImage(e.get(h[s].code),{x:f,y:v,width:i,height:o})}}const a=await n.save();G.pdfUrl&&URL.revokeObjectURL(G.pdfUrl),G.pdfBytes=a,G.pdfUrl=URL.createObjectURL(new Blob([a],{type:"application/pdf"})),G.isDirty=!1,Da(),Fa(a.length),Fe("สร้างไฟล์ PDF เรียบร้อยแล้ว")}catch(n){console.error(n),Fe("สร้างไฟล์ไม่สำเร็จ กรุณาลองอีกครั้ง")}finally{Z1(!1)}}async function Ba(n){const e=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{const t=await f2(e),r=document.createElement("canvas");r.width=Math.round(vt/25.4*K1),r.height=Math.round(Ze/25.4*K1);const x=r.getContext("2d",{alpha:!1});x.imageSmoothingEnabled=!0,x.imageSmoothingQuality="high",x.fillStyle="#ffffff",x.fillRect(0,0,r.width,r.height),x.drawImage(t,0,0,r.width,r.height);const i=await new Promise((o,a)=>{r.toBlob(l=>l?o(l):a(new Error("PNG rendering failed")),"image/png")});return new Uint8Array(await i.arrayBuffer())}finally{URL.revokeObjectURL(e)}}function Ca(){if(!G.pdfUrl||G.isDirty)return;const n=document.createElement("a");n.href=G.pdfUrl;const e=G.lot.replace(/[^a-zA-Z0-9_-]+/g,"-"),t=yt(),r=t.length===1?t[0].code:`STC_${t.length}-products`;n.download=`${r}_${e}_${Zr(G.length)}mm_${G.productionDate}.pdf`,n.click()}function pa(){!G.pdfUrl||G.isDirty||window.print()}function nt(){h2(),G.isDirty=!0,Z.print.disabled=!0,Z.download.disabled=!0,Z.fileStatus.classList.remove("ready"),Z.fileStatus.innerHTML=`
    <span class="status-icon"><i data-lucide="file-text"></i></span>
    <div><strong>มีการแก้ไขข้อมูล</strong><span>กดสร้างไฟล์ PDF เพื่ออัปเดต</span></div>
  `,Dt()}function Z1(n){Z.generate.disabled=n,Z.generate.classList.toggle("loading",n),Z.generate.querySelector("span").textContent=n?"กำลังสร้างไฟล์…":"สร้างไฟล์ PDF"}function Fa(n){Z.print.disabled=!1,Z.download.disabled=!1,Z.fileStatus.classList.add("ready"),Z.fileStatus.innerHTML=`
    <span class="status-icon"><i data-lucide="check"></i></span>
    <div><strong>ไฟล์พร้อมพิมพ์</strong><span>1200 DPI · ${Nt()} หน้า · ${j5()} ฉลาก · ${Aa(n)}</span></div>
  `,Dt()}function mn(){const n=Nt(),e=j5(),t=G.selectedProductCodes.size,r=Ye-e;Z.selectedCount.textContent=t?`เลือกแล้ว ${t} รายการ · ${e}/${Ye} ดวง · ${r?`เหลือ ${r}`:"เต็มแล้ว"}`:`ยังไม่ได้เลือกสินค้า · เพิ่มได้ ${Ye} ดวง`,Z.labelCount.textContent=`${e} ดวง`,Z.outputSummary.textContent=`รวม ${e} ฉลาก บนกระดาษ A4 แนวนอน`,Z.pageCount.textContent=`${n} หน้า`,Z.pageIndicator.textContent=`${G.previewPage+1} / ${n}`,Z.previousPage.disabled=G.previewPage===0,Z.nextPage.disabled=G.previewPage>=n-1}function L5(){return G.selectedProductCodes.size>0&&Number.isFinite(G.length)&&G.length>0&&!!G.productionDate&&!!G.lot}function Nt(){return Math.max(1,Math.ceil(j5()/At))}function j5(){return yt().reduce((n,e)=>n+G.quantityByProduct[e.code],0)}function Gr(n){const e=yt().filter(t=>t.code!==n).reduce((t,r)=>t+G.quantityByProduct[r.code],0);return Math.max(1,Ye-e)}function yt(){return et.filter(n=>G.selectedProductCodes.has(n.code))}function Xr(){return yt().flatMap(n=>Array.from({length:G.quantityByProduct[n.code]},()=>n))}function Hr(n){const e=n%zt,t=Math.floor(n/zt);return{x:Zt+G.printOffsetX+e*vt,y:Yt+G.printOffsetY+t*Ze}}function Y1(){G.labelSvgUrls.forEach(n=>URL.revokeObjectURL(n)),G.labelSvgUrls.clear()}function ga(n){return Number.isFinite(n)?n.toFixed(2).replace(/\.00$/,"").replace(/(\.\d)0$/,"$1"):""}function s2(n){const[e,t,r]=n.split("-").map(Number);return!e||!t||!r?"":`${String(r).padStart(2,"0")}/${String(t).padStart(2,"0")}/${e}`}function Zr(n){return Number.isFinite(n)?String(Math.round(n*1e3)):""}function Aa(n){return n<1024*1024?`${Math.round(n/1024)} KB`:`${(n/1024/1024).toFixed(1)} MB`}function J1(n){return n>0?`+${n}`:String(n)}function ya(){const n={selectedProductCodes:[et[0].code],quantityByProduct:Object.fromEntries(et.map(e=>[e.code,Ye])),length:3,lot:"B0001",productionDate:Yr(),printOffsetX:0,printOffsetY:0,wasRestored:!1};try{const e=localStorage.getItem(i2);if(!e)return n;const t=JSON.parse(e),r=Array.isArray(t.selectedProductCodes)?t.selectedProductCodes.filter(a=>et.some(l=>l.code===a)):n.selectedProductCodes,x=Object.fromEntries(et.map(a=>{const l=Math.round(Number(t.quantityByProduct?.[a.code]));return[a.code,Number.isFinite(l)?Ke(l,1,Ye):Ye]}));let i=Ye;r.forEach((a,l)=>{const c=r.length-l-1,h=Math.max(1,i-c);x[a]=Ke(x[a],1,h),i-=x[a]});const o=Number(t.length);return{selectedProductCodes:r,quantityByProduct:x,length:Number.isFinite(o)&&o>0?o:n.length,lot:typeof t.lot=="string"?t.lot.slice(0,20):n.lot,productionDate:/^\d{4}-\d{2}-\d{2}$/.test(t.productionDate||"")?t.productionDate:n.productionDate,printOffsetX:Ke(Number(t.printOffsetX)||0,-5,5),printOffsetY:Ke(Number(t.printOffsetY)||0,-5,5),wasRestored:!0}}catch{return n}}function h2(){try{localStorage.setItem(i2,JSON.stringify({selectedProductCodes:[...G.selectedProductCodes],quantityByProduct:G.quantityByProduct,length:G.length,lot:G.lot,productionDate:G.productionDate,printOffsetX:G.printOffsetX,printOffsetY:G.printOffsetY}))}catch{}}function Da(){const n=V5(),e={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,createdAt:new Date().toISOString(),selectedProductCodes:[...G.selectedProductCodes],quantityByProduct:{...G.quantityByProduct},length:G.length,lot:G.lot,productionDate:G.productionDate};d2([e,...n].slice(0,a2))}function V5(){try{const n=JSON.parse(localStorage.getItem(o2)||"[]");return Array.isArray(n)?n.filter(ma).slice(0,a2):[]}catch{return[]}}function d2(n){try{localStorage.setItem(o2,JSON.stringify(n))}catch{}}function ma(n){return n&&typeof n.id=="string"&&typeof n.lot=="string"&&Array.isArray(n.selectedProductCodes)&&n.quantityByProduct}function wa(n){return n.selectedProductCodes.reduce((e,t)=>e+Number(n.quantityByProduct[t]||0),0)}function u2(n){const e=new Date(n);return Number.isNaN(e.getTime())?"":new Intl.DateTimeFormat("th-TH",{dateStyle:"short",timeStyle:"short"}).format(e)}function Yr(){const n=new Date,e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${r}`}function f2(n){return new Promise((e,t)=>{const r=new Image;r.onload=()=>e(r),r.onerror=t,r.src=n})}function wn(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function Ke(n,e,t){return Math.min(t,Math.max(e,n))}function Fe(n){window.clearTimeout(G1),Z.toast.textContent=n,Z.toast.classList.add("show"),G1=window.setTimeout(()=>Z.toast.classList.remove("show"),2600)}function Dt(){const n={Check:I9,ChevronLeft:L9,ChevronRight:j9,Download:V9,FileText:U9,Minus:K9,PackageOpen:G9,Plus:X9,Printer:H9,RefreshCw:Z9,RotateCcw:Y9,SlidersHorizontal:J9,Sparkles:Q9,Trash2:_9,X:$9,History:W9};document.querySelectorAll("[data-lucide]").forEach(e=>{const t=e.getAttribute("data-lucide"),r=n[ba(t)];if(!r)return;const x=N9(r);e.replaceWith(x)})}function ba(n){return n.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}
