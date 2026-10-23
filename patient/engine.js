// Dossier engine: world of desk items, spline camera, sub-frame motion blur, DOF, typed text, stamps, threads.
// Relies on ../intro/lib.js (W, H, clamp, lerp, prog, eases, rng, mk, makeGrain, applyGrain, vignette).
const OFF = 12.0;                       // voice offset on the final timeline
const VFPS = MEDIA.fps;
const SANS = '"Inter Display"', MONO = '"DejaVu Sans Mono"';
const RED = '#b8261e', PAPER = '#ebe5d8', INK = '#1d1915', MANILA = '#c9a86a';

// ---------- words ----------
const norm = s => s.toLowerCase().replace(/ё/g, 'е').replace(/[«»"(),.:;!?—–\-]/g, '');
function Wt(word, n = 1, end = false) {
  let c = 0; const q = norm(word);
  for (const [s, e, w] of WORDS) if (norm(w).startsWith(q) && ++c === n) return (end ? e : s) + OFF;
  throw new Error('word not found: ' + word + ' #' + n);
}

// ---------- registries ----------
const ITEMS = [], THREADS = [], PINS = [], CAMK = [], SHAKES = [], SFX = [], FOCUS = [], FAST = [], FX = [];
const sfx = (type, t, o = {}) => SFX.push({ type, t: +t.toFixed(4), ...o });
const fast = (t0, t1, n = 4) => FAST.push([t0, t1, n]);
window.getSfx = () => SFX.slice().sort((a, b) => a.t - b.t);

// ---------- images ----------
const IMG = new Map();
function need(url) {
  let e = IMG.get(url);
  if (!e) {
    const im = new Image(); e = { im, ok: false };
    e.p = new Promise(res => { im.onload = () => { e.ok = true; res(); }; im.onerror = () => { console.log('missing ' + url); res(); }; });
    im.src = url; IMG.set(url, e);
    if (IMG.size > 600) for (const k of IMG.keys()) { if (!k.includes('/stills/')) { IMG.delete(k); break; } }
  }
  return e.p;
}
const got = url => { const e = IMG.get(url); return e && e.ok ? e.im : null; };
const stillUrl = k => `assets/stills/${k}.jpg`;
function frameUrl(key, ct) {
  const n = clamp(Math.floor(ct * VFPS) + 1, 1, MEDIA.frames[key]);
  return `assets/frames/${key}/f${String(n).padStart(5, '0')}.jpg`;
}
// media source descriptor -> url at time t
// {still:'k'} | {vid:'k', t0:T, off:0, hold:true}  (video starts playing at T, clip-time = off + (t - t0))
function srcUrl(src, t) {
  if (!src) return null;
  if (typeof src === 'function') return srcUrl(src(t), t);
  if (src.still) return stillUrl(src.still);
  return frameUrl(src.vid, (src.off || 0) + Math.max(0, t - src.t0));
}

// ---------- camera ----------
const camKey = (t, x, y, z, r = 0) => CAMK.push({ t, x, y, z: Math.log(z), r });
const shake = (t, a) => SHAKES.push([t, a]);
function herm(keys, t, f) {
  if (t <= keys[0].t) return keys[0][f];
  const n = keys.length; if (t >= keys[n - 1].t) return keys[n - 1][f];
  let i = 0; while (keys[i + 1].t < t) i++;
  const a = keys[i], b = keys[i + 1], h = b.t - a.t, u = (t - a.t) / h;
  const slope = (p, q) => (q[f] - p[f]) / (q.t - p.t);
  const tan = j => {
    if (j === 0 || j === n - 1) return 0;
    const s0 = slope(keys[j - 1], keys[j]), s1 = slope(keys[j], keys[j + 1]);
    if (s0 * s1 <= 0) return 0;                                  // no overshoot at reversals
    const m = (keys[j + 1][f] - keys[j - 1][f]) / (keys[j + 1].t - keys[j - 1].t);
    return Math.sign(m) * Math.min(Math.abs(m), 3 * Math.abs(s0), 3 * Math.abs(s1));
  };
  const m0 = tan(i) * h, m1 = tan(i + 1) * h, u2 = u * u, u3 = u2 * u;
  return (2 * u3 - 3 * u2 + 1) * a[f] + (u3 - 2 * u2 + u) * m0 + (-2 * u3 + 3 * u2) * b[f] + (u3 - u2) * m1;
}
function camAt(t) {
  let x = herm(CAMK, t, 'x'), y = herm(CAMK, t, 'y'), z = Math.exp(herm(CAMK, t, 'z')), r = herm(CAMK, t, 'r');
  // handheld drift: slow, low-amplitude, independent axes
  x += (9 * Math.sin(t * .63) + 5 * Math.sin(t * 1.37 + 1)) / z; y += (7 * Math.sin(t * .51 + 2) + 4 * Math.sin(t * 1.19)) / z;
  r += .0035 * Math.sin(t * .43 + .5);
  for (const [t0, a] of SHAKES) { const d = t - t0; if (d < 0 || d > .6) continue; const k = Math.exp(-d * 9) * a; x += k * Math.sin(d * 83) / z; y += k * Math.cos(d * 67) / z; r += k * .0009 * Math.sin(d * 51); }
  return { x, y, z, r };
}
function camSpeed(t) {   // screen px per frame
  const a = camAt(t), b = camAt(t - 1 / 60);
  return Math.hypot(a.x - b.x, a.y - b.y) * a.z + Math.abs(Math.log(a.z / b.z)) * 1100 + Math.abs(a.r - b.r) * 900;
}

// ---------- items ----------
class Item {
  constructor(o) {
    Object.assign(this, { x: 0, y: 0, rot: 0, w: 100, h: 100, tIn: -1e9, tOut: 1e9, enter: 'none', dur: .32, dx: 0, dy: -260, drot: .25,
      L0: 0, shadow: 1, lit: true, exit: null, order: ITEMS.length, snd: true }, o);
    ITEMS.push(this);
    if (this.snd && this.enter === 'drop') { sfx('drop', this.tIn, { size: this.w }); fast(this.tIn - this.dur, this.tIn + .05, 3); }
    if (this.snd && this.enter === 'slide') sfx('slide', this.tIn - this.dur, { dur: this.dur });
    if (this.snd && this.enter === 'pop') sfx('tick', this.tIn - this.dur * .5);
    if (this.exit && this.exit.type === 'fly') { sfx('whoosh', this.exit.t, { dur: this.exit.dur + .3 }); fast(this.exit.t, this.exit.t + this.exit.dur, 6); }
    if (this.exit && this.exit.type === 'slideout') sfx('slide', this.exit.t, { dur: this.exit.dur });
  }
  state(t) {
    const ex = this.exit;
    if (t < this.tIn - this.dur || t > this.tOut || (ex && t > ex.t + ex.dur + .05 && ex.gone)) return null;
    let x = this.x, y = this.y, r = this.rot, s = 1, L = this.L0, a = 1;
    if (this.enter === 'drop') {
      const p = prog(t, this.tIn - this.dur, this.tIn), e = p * p;
      x += (1 - e) * this.dx; y += (1 - e) * this.dy; r += (1 - e) * this.drot; L += (1 - e) * 1.1; a = clamp(p * 5);
      const d = t - this.tIn; if (d > 0) s *= 1 - Math.exp(-d * 14) * Math.sin(d * 38) * .02;
    } else if (this.enter === 'slide') {
      const p = eout(prog(t, this.tIn - this.dur, this.tIn));
      x += (1 - p) * this.dx; y += (1 - p) * this.dy; r += (1 - p) * this.drot; L += (1 - p) * .08; a = clamp(p * 4);
    } else if (this.enter === 'pop') {
      const p = prog(t, this.tIn - this.dur, this.tIn); s *= p <= 0 ? 0 : back(p, 2.4); a = clamp(p * 4); L += (1 - p) * .25;
    } else if (this.enter === 'fade') a = prog(t, this.tIn - this.dur, this.tIn);
    if (ex) {
      const q = ex.type === 'fly' ? ein(prog(t, ex.t, ex.t + ex.dur)) : eio(prog(t, ex.t, ex.t + ex.dur));
      x += q * (ex.dx || 0); y += q * (ex.dy || 0); r += q * (ex.drot || 0); L += q * (ex.L || 0); if (ex.fade) a *= 1 - q;
      if (ex.type === 'fly') { const lift = Math.sin(Math.PI * clamp(prog(t, ex.t - .12, ex.t + .1))) * .08; L += lift; }
    }
    if (this.anim) this.anim(t, this);
    return { x, y, r, s, L, a };
  }
}
const item = o => new Item(o);

// ---------- light: warm lamp pools fixed in the world ----------
const LAMPS = [];
const lamp = (x, y, r = 1500, k = 1) => LAMPS.push({ x, y, r, k });
function lightAt(x, y) {
  let b = 0; for (const l of LAMPS) { const d = Math.hypot(x - l.x, y - l.y) / l.r; b = Math.max(b, l.k * Math.exp(-d * d * 1.6)); }
  return .5 + .5 * clamp(b);
}

// ---------- sprites / textures ----------
let SHADOW, WOOD, DUSTSP, PROPS = {};
function buildSprites() {
  SHADOW = mk(256, 256); { const g = SHADOW.getContext('2d'); g.filter = 'blur(26px)'; g.fillStyle = '#000'; g.fillRect(48, 48, 160, 160); }
  WOOD = mk(1024, 1024); {
    const g = WOOD.getContext('2d'), r = rng(5);
    const bg = g.createLinearGradient(0, 0, 1024, 1024); bg.addColorStop(0, '#2b1e15'); bg.addColorStop(.5, '#241912'); bg.addColorStop(1, '#2d2016');
    g.fillStyle = bg; g.fillRect(0, 0, 1024, 1024);
    for (let i = 0; i < 260; i++) {
      const y0 = r() * 1024, a = .025 + r() * .06, w = .6 + r() * 2.4, ph = r() * 6, f = .004 + r() * .006, am = 4 + r() * 14;
      g.strokeStyle = r() < .5 ? `rgba(0,0,0,${a * 1.6})` : `rgba(255,200,150,${a * .5})`; g.lineWidth = w; g.beginPath();
      for (let x = -8; x <= 1032; x += 16) { const yy = y0 + Math.sin(x * f + ph) * am + Math.sin(x * f * 3.1 + ph * 2) * am * .25; x < 0 ? g.moveTo(x, yy) : g.lineTo(x, yy); }
      g.stroke();
    }
    // tile seam: mirror-blend vertically so the pattern repeats softly
    const id = g.getImageData(0, 0, 1024, 1024), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const n = (r() - .5) * 10; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    g.putImageData(id, 0, 0);
  }
  DUSTSP = mk(64, 64); { const g = DUSTSP.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,235,200,.9)'); gr.addColorStop(.4, 'rgba(255,235,200,.25)'); gr.addColorStop(1, 'rgba(255,235,200,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }
  // out-of-focus foreground props (pre-blurred)
  const prop = (w, h, fn, blur) => { const c = mk(w, h), g = c.getContext('2d'); g.filter = `blur(${blur}px)`; fn(g); return c; };
  PROPS.ashtray = prop(900, 900, g => { g.strokeStyle = 'rgba(30,26,22,.95)'; g.lineWidth = 90; g.beginPath(); g.arc(450, 450, 300, 0, 7); g.stroke(); g.strokeStyle = 'rgba(160,150,130,.25)'; g.lineWidth = 14; g.beginPath(); g.arc(450, 450, 345, 3.6, 5.4); g.stroke(); }, 28);
  PROPS.pen = prop(1400, 260, g => { g.fillStyle = 'rgba(14,12,11,.95)'; g.beginPath(); g.roundRect(80, 90, 1240, 80, 40); g.fill(); g.fillStyle = 'rgba(190,160,90,.5)'; g.fillRect(980, 92, 60, 76); }, 22);
  PROPS.cup = prop(1000, 1000, g => { g.fillStyle = 'rgba(20,16,13,.95)'; g.beginPath(); g.arc(500, 500, 360, 0, 7); g.fill(); g.strokeStyle = 'rgba(230,220,200,.35)'; g.lineWidth = 26; g.beginPath(); g.arc(500, 500, 340, 3.3, 5.6); g.stroke(); }, 34);
  PROPS.smoke = prop(1200, 1200, g => { const r = rng(9); for (let i = 0; i < 14; i++) { const x = 300 + r() * 600, y = 300 + r() * 600, rr = 120 + r() * 220, gr = g.createRadialGradient(x, y, 0, x, y, rr); gr.addColorStop(0, 'rgba(225,220,205,.16)'); gr.addColorStop(1, 'rgba(225,220,205,0)'); g.fillStyle = gr; g.fillRect(x - rr, y - rr, rr * 2, rr * 2); } }, 20);
}
const PAPERC = new Map();
function paper(w, h, color = PAPER, lined = false, seed = 1) {
  if (!isFinite(w) || !isFinite(h)) throw new Error('paper size ' + w + 'x' + h + ' seed ' + seed);
  const key = [w, h, color, lined, seed].join('|'); if (PAPERC.has(key)) return PAPERC.get(key);
  const c = mk(w, h), g = c.getContext('2d'), r = rng(seed * 131 + w);
  g.fillStyle = color; g.fillRect(0, 0, w, h);
  const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, 'rgba(255,255,255,.16)'); gr.addColorStop(1, 'rgba(60,40,10,.14)'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let i = 0; i < w * h / 900; i++) { g.fillStyle = `rgba(${r() < .5 ? '0,0,0' : '255,255,255'},${.02 + r() * .04})`; g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2); }
  if (lined) { g.strokeStyle = 'rgba(184,38,30,.5)'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(0, 78); g.lineTo(w, 78); g.stroke(); g.strokeStyle = 'rgba(60,90,140,.2)'; g.lineWidth = 1.5; for (let y = 130; y < h; y += 52) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); } }
  const vg = g.createRadialGradient(w / 2, h / 2, Math.min(w, h) * .3, w / 2, h / 2, Math.max(w, h) * .75); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(70,45,15,.16)'); g.fillStyle = vg; g.fillRect(0, 0, w, h);
  PAPERC.set(key, c); return c;
}

// ---------- typed text / stamps / pen ----------
function typed(str, t0, per = .05, o = {}) {
  [...str].forEach((ch, k) => { if (ch !== ' ' && !o.silent) sfx('type', t0 + (k + 1) * per - .008, { heavy: !!o.heavy }); });
  return { str, t0, per };
}
function drawTyped(g, ty, t, x, y, font, color = INK, align = 'left') {
  const n = Math.floor(clamp((t - ty.t0) / ty.per, 0, ty.str.length)); if (n <= 0) return;
  g.font = font; g.fillStyle = color; g.textAlign = align; g.textBaseline = 'alphabetic'; g.fillText(ty.str.slice(0, n), x, y);
}
const HOLES = []; { const r = rng(77); for (let i = 0; i < 70; i++) HOLES.push([r() * 2 - 1, r() * 2 - 1, .3 + r() * 1.5]); }
function stamp(text, t, o = {}) { sfx('stamp', t, { big: o.size > 90 }); shake(t, o.shake ?? 10); fast(t - .14, t + .02, 4); return { text, t, ...o }; }
function drawStamp(g, st, t) {
  const p = prog(t, st.t - .14, st.t); if (p <= 0) return;
  const size = st.size || 72, s = lerp(2.5, 1, ein(p)) * (1 + .03 * Math.exp(-Math.max(0, t - st.t) * 7));
  g.save(); g.translate(st.x || 0, st.y || 0); g.rotate(st.rot ?? -.08); g.scale(s, s); g.globalAlpha *= clamp(p * 2) * (st.alpha ?? .92);
  g.font = `800 ${size}px ${SANS}`; g.letterSpacing = `${size * .08}px`;
  const w = g.measureText(st.text).width + size * .7, h = size * 1.45, col = st.color || RED;
  g.strokeStyle = col; g.fillStyle = col; g.lineWidth = size * .09; g.strokeRect(-w / 2, -h / 2, w, h);
  g.lineWidth = size * .03; g.strokeRect(-w / 2 + size * .14, -h / 2 + size * .14, w - size * .28, h - size * .28);
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(st.text, size * .04, size * .05); g.letterSpacing = '0px';
  g.globalCompositeOperation = 'destination-out'; g.fillStyle = '#000';
  for (const [u, v, r] of HOLES) { g.beginPath(); g.arc(u * w / 2, v * h / 2, r * size * .045, 0, 7); g.fill(); }
  g.restore();
}
function pen(pts, t0, dur, o = {}) { sfx('pen', t0, { dur }); return { pts, t0, dur, ...o }; }
function drawPen(g, pn, t) {
  const p = eio(prog(t, pn.t0, pn.t0 + pn.dur)); if (p <= 0) return;
  const P = pn.pts; let L = 0; const seg = []; for (let i = 1; i < P.length; i++) { const l = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); seg.push(l); L += l; }
  let left = L * p; g.save(); g.strokeStyle = pn.color || RED; g.lineWidth = pn.width || 8; g.lineCap = 'round'; g.lineJoin = 'round'; g.globalAlpha *= .9;
  g.beginPath(); g.moveTo(P[0][0], P[0][1]);
  for (let i = 1; i < P.length && left > 0; i++) { const k = Math.min(1, left / seg[i - 1]); g.lineTo(lerp(P[i - 1][0], P[i][0], k), lerp(P[i - 1][1], P[i][1], k)); left -= seg[i - 1]; }
  g.stroke(); g.restore();
}
// handwritten red word: revealed left-to-right
function scrawl(text, t0, dur, o = {}) { sfx('pen', t0, { dur }); return { text, t0, dur, ...o }; }
function drawScrawl(g, sc, t) {
  const p = prog(t, sc.t0, sc.t0 + sc.dur); if (p <= 0) return;
  const size = sc.size || 80; g.save(); g.translate(sc.x || 0, sc.y || 0); g.rotate(sc.rot ?? -.06); g.transform(1, 0, -.22, 1, 0, 0);
  g.font = `800 ${size}px ${SANS}`; const w = g.measureText(sc.text).width;
  g.beginPath(); g.rect(-w / 2 - 20, -size, (w + 40) * eout(p), size * 1.6); g.clip();
  g.fillStyle = sc.color || RED; g.globalAlpha *= .9; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(sc.text, 0, 0); g.restore();
}

// ---------- props drawing ----------
// photo print with white border; image area keeps 704x400 aspect
function photoH(w) { return 20 + (w - 40) / 1.76 + 78; }
function drawPhoto(g, t, it) {
  const w = it.w, h = it.h, iw = w - 40, ih = iw / 1.76;
  g.drawImage(paper(w, h, '#eee9de', false, it.order), -w / 2, -h / 2);
  const url = srcUrl(it.src, t), im = url && got(url);
  if (im) g.drawImage(im, -w / 2 + 20, -h / 2 + 20, iw, ih); else { g.fillStyle = '#222'; g.fillRect(-w / 2 + 20, -h / 2 + 20, iw, ih); }
  // print sheen + inner edge
  const gr = g.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2); gr.addColorStop(0, 'rgba(255,255,255,.07)'); gr.addColorStop(.5, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,.08)');
  g.fillStyle = gr; g.fillRect(-w / 2 + 20, -h / 2 + 20, iw, ih); g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 1.5; g.strokeRect(-w / 2 + 20, -h / 2 + 20, iw, ih);
  if (it.caption) drawTyped(g, it.caption, t, 0, h / 2 - 28, `700 ${it.capSize || 30}px ${MONO}`, INK, 'center');
  if (it.stamps) for (const s of it.stamps) drawStamp(g, s, t);
  if (it.pens) for (const p of it.pens) drawPen(g, p, t);
  if (it.clip) drawClip(g, it.clip.x, -h / 2 - 6, t);
}
function drawClip(g, x, y) {  // paperclip
  g.save(); g.translate(x, y); g.strokeStyle = 'rgba(205,210,215,.95)'; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.moveTo(-10, 40); g.lineTo(-10, -18); g.arc(0, -18, 10, Math.PI, 0); g.lineTo(10, 52); g.arc(-2, 52, 12, 0, Math.PI); g.lineTo(-14, -6); g.stroke();
  g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 2; g.beginPath(); g.moveTo(-8, 42); g.lineTo(-8, -16); g.stroke(); g.restore();
}
function drawCard(g, t, it) {
  const w = it.w, h = it.h; g.drawImage(paper(w, h, it.color || PAPER, it.lined, it.order), -w / 2, -h / 2);
  if (it.text) it.text(g, t, it);
  if (it.stamps) for (const s of it.stamps) drawStamp(g, s, t);
  if (it.pens) for (const p of it.pens) drawPen(g, p, t);
  if (it.scrawls) for (const s of it.scrawls) drawScrawl(g, s, t);
  if (it.clip) drawClip(g, it.clip.x, -h / 2 - 6, t);
}
function drawFolder(g, t, it) {
  const w = it.w, h = it.h;
  g.fillStyle = '#b48f55'; g.beginPath(); g.roundRect(-w / 2 + 30, -h / 2 - 46, 260, 60, 10); g.fill();
  g.drawImage(paper(w, h, '#c4a167', false, it.order + 7), -w / 2, -h / 2);
  g.fillStyle = INK; g.font = `800 30px ${MONO}`; g.textAlign = 'left'; if (it.tab) g.fillText(it.tab, -w / 2 + 52, -h / 2 - 8);
  if (it.text) it.text(g, t, it);
}
function drawTag(g, t, it) {
  const w = it.w, h = it.h; g.save();
  g.beginPath(); g.moveTo(-w / 2 + 34, -h / 2); g.lineTo(w / 2, -h / 2); g.lineTo(w / 2, h / 2); g.lineTo(-w / 2 + 34, h / 2); g.lineTo(-w / 2, h / 2 - 30); g.lineTo(-w / 2, -h / 2 + 30); g.closePath();
  g.clip(); g.drawImage(paper(w, h, '#d9bf86', false, it.order + 3), -w / 2, -h / 2); g.restore();
  g.fillStyle = 'rgba(30,20,10,.65)'; g.beginPath(); g.arc(-w / 2 + 26, 0, 9, 0, 7); g.fill();
  g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 3; g.beginPath(); g.arc(-w / 2 + 26, 0, 14, 0, 7); g.stroke();
  g.fillStyle = INK; g.font = `800 ${it.size || 40}px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.letterSpacing = '3px';
  g.fillText(it.label, 16, 3); g.letterSpacing = '0px';
}

// ---------- threads / pins ----------
function thread(pts, t0, t1, o = {}) { if (!o.silent) sfx('zip', t0, { dur: t1 - t0 }); THREADS.push({ pts, t0, t1, ...o }); }
const pin = (x, y, t, o = {}) => { if (!o.silent) sfx('pin', t); PINS.push({ x, y, t, ...o }); };
function drawThreads(g, t, z = 1, under = false) {
  const zk = Math.max(1, .55 / z);   // keep threads/pins legible on wide shots
  g.save(); g.lineCap = 'round'; g.lineJoin = 'round';
  for (const th of THREADS) {
    if (!!th.under !== under) continue;
    const p = th.t1 > th.t0 ? eio(prog(t, th.t0, th.t1)) : (t >= th.t0 ? 1 : 0); if (p <= 0) continue;
    const P = th.pts, N = 24, pts = [];
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], b = P[i + 1], len = Math.hypot(b[0] - a[0], b[1] - a[1]), sag = Math.min(90, len * .05) * (th.sag ?? 1);
      for (let k = 0; k <= N; k++) { const u = k / N; pts.push([lerp(a[0], b[0], u), lerp(a[1], b[1], u) + Math.sin(u * Math.PI) * sag]); }
    }
    const n = Math.max(2, Math.floor(pts.length * p));
    g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = ((th.width || 5) + 1) * zk; g.beginPath(); pts.slice(0, n).forEach(([x, y], i) => i ? g.lineTo(x + 6, y + 8) : g.moveTo(x + 6, y + 8)); g.stroke();
    g.strokeStyle = th.color || '#c62a22'; g.lineWidth = (th.width || 5) * zk; g.beginPath(); pts.slice(0, n).forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.stroke();
  }
  if (under) { g.restore(); return; }
  for (const pn of PINS) {
    if (t < pn.t) continue; const s = 1 + .5 * Math.exp(-(t - pn.t) * 18), r = (pn.r || 15) * s * zk;
    g.fillStyle = 'rgba(0,0,0,.4)'; g.beginPath(); g.arc(pn.x + 6, pn.y + 8, r, 0, 7); g.fill();
    const pg = g.createRadialGradient(pn.x - 4, pn.y - 4, 1, pn.x, pn.y, r); pg.addColorStop(0, pn.c0 || '#ff7a6a'); pg.addColorStop(1, pn.c1 || '#8e1610');
    g.fillStyle = pg; g.beginPath(); g.arc(pn.x, pn.y, r, 0, 7); g.fill();
  }
  g.restore();
}

// ---------- focus (DOF) windows ----------
// focus(t0, t1, items[], amount): outside the focused items the scene is blurred
const focus = (t0, t1, items, amt = 1, ramp = .45) => FOCUS.push({ t0, t1, items, amt, ramp });
function focusAt(t) {
  let best = null, a = 0;
  for (const f of FOCUS) { const k = f.amt * Math.min(clamp((t - f.t0) / f.ramp), clamp((f.t1 - t) / f.ramp)); if (k > a) { a = k; best = f; } }
  return { amt: a, items: best ? best.items : [] };
}
const fxAt = (name, t) => { let v = 0; for (const f of FX) if (f.name === name) v = Math.max(v, f.fn(t)); return v; };
