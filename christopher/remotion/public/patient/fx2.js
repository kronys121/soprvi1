// v2 kit on top of engine.js/common.js: hard cuts, richer desk objects, screen-space montage effects.
// Needs the page to define EXTRA (array of t => url) and to load the Caveat / Oswald fonts.
const HAND = '"Caveat"', HEAD = '"Oswald"';

// ---------- camera with hard cuts ----------
// seg(t) starts a new shot at a frame boundary; ck() adds a key to the current shot. The spline never crosses a cut.
const SEG = [];
function seg(t, quiet) { const tc = Math.round(t * 60) / 60 - .0125; SEG.push({ t0: tc, keys: [] }); if (!quiet && SEG.length > 1) sfx('cut', tc); return tc; }
function ck(t, x, y, z, r = 0) { SEG[SEG.length - 1].keys.push({ t, x, y, z: Math.log(z), r }); }
// a shot that keeps creeping: push-in plus a small slide
function shot(t0, t1, x, y, z, r = 0, o = {}) {
  const tc = seg(t0, o.quiet), dz = o.dz ?? .07, dx = o.dx ?? 30, dy = o.dy ?? 8, dr = o.dr ?? .01;
  ck(tc, x - dx / 2, y - dy / 2, z, r); ck(t1, x + dx / 2, y + dy / 2, z * (1 + dz), r + dr); return tc;
}
function camAt(t) {
  let s = SEG[0]; for (const q of SEG) if (t >= q.t0) s = q;
  const K = s.keys;
  let x = herm(K, t, 'x'), y = herm(K, t, 'y'), z = Math.exp(herm(K, t, 'z')), r = herm(K, t, 'r');
  x += (9 * Math.sin(t * .63) + 5 * Math.sin(t * 1.37 + 1) + 2 * Math.sin(t * 3.1)) / z; y += (7 * Math.sin(t * .51 + 2) + 4 * Math.sin(t * 1.19) + 2 * Math.sin(t * 2.7 + 1)) / z;
  r += .0035 * Math.sin(t * .43 + .5);
  for (const [t0, a] of SHAKES) { const d = t - t0; if (d < 0 || d > .6) continue; const k = Math.exp(-d * 9) * a; x += k * Math.sin(d * 83) / z; y += k * Math.cos(d * 67) / z; r += k * .0009 * Math.sin(d * 51); }
  return { x, y, z, r };
}
function camSpeed(t) {
  for (const q of SEG) if (t >= q.t0 && t - 1 / 60 < q.t0) return 0;      // the cut frame itself is sharp
  const a = camAt(t), b = camAt(t - 1 / 60);
  return Math.hypot(a.x - b.x, a.y - b.y) * a.z + Math.abs(Math.log(a.z / b.z)) * 1100 + Math.abs(a.r - b.r) * 900;
}
function checkCam() { for (const s of SEG) { s.keys.sort((a, b) => a.t - b.t); for (let i = 1; i < s.keys.length; i++) if (s.keys[i].t - s.keys[i - 1].t < .02) console.log('[err] camera keys too close at ' + s.keys[i].t.toFixed(3)); } }

// ---------- small drawing helpers ----------
function roundShadow(g, x, y, rx, ry, a = .5, blur = 30) { g.save(); g.filter = `blur(${blur}px)`; g.fillStyle = `rgba(0,0,0,${a})`; g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, 7); g.fill(); g.restore(); }
const SPR = new Map();
function sprite(key, w, h, fn) { let c = SPR.get(key); if (!c) { c = mk(w, h); const g = c.getContext('2d'); g.translate(w / 2, h / 2); fn(g); SPR.set(key, c); } return c; }
// marker stroke (pen with its own sound)
function mark(pts, t0, dur, o = {}) { sfx('marker', t0, { dur }); return { pts, t0, dur, width: 9, ...o }; }
function ringPts(cx, cy, rx, ry, turns = 1.12, seed = 1) { const r = rng(seed), P = [], n = 40, a0 = -2.2 + r(); for (let i = 0; i <= n * turns; i++) { const a = a0 + i / n * 6.283, k = 1 + .05 * Math.sin(i * .7 + seed) + (i / n) * .035; P.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]); } return P; }
// handwriting revealed left to right
function hand(text, t0, dur, o = {}) { if (!o.silent) sfx('marker', t0, { dur, soft: true }); return { text, t0, dur, ...o }; }
function drawHand(g, h, t) {
  const p = prog(t, h.t0, h.t0 + h.dur); if (p <= 0) return;
  const size = h.size || 70; g.save(); g.translate(h.x || 0, h.y || 0); g.rotate(h.rot ?? -.04);
  g.font = `700 ${size}px ${HAND}`; const w = g.measureText(h.text).width, al = h.align || 'center', x0 = al === 'center' ? -w / 2 : 0;
  g.beginPath(); g.rect(x0 - 10, -size, (w + 20) * eout(p), size * 1.5); g.clip();
  g.fillStyle = h.color || RED; g.globalAlpha *= .92; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(h.text, x0, 0); g.restore();
}
// embossed label-maker strip
function dymo(text, t, o = {}) { if (!o.silent) sfx('label', t); return { text, t, ...o }; }
function drawDymo(g, d, t) {
  const p = prog(t, d.t - .1, d.t); if (p <= 0) return;
  const size = d.size || 40; g.save(); g.translate(d.x || 0, d.y || 0); g.rotate(d.rot ?? -.02); const s = lerp(1.5, 1, eout(p)); g.scale(s, s); g.globalAlpha *= clamp(p * 3);
  g.font = `700 ${size}px ${MONO}`; g.letterSpacing = `${size * .14}px`; const w = g.measureText(d.text).width + size * 1.1, h = size * 1.5;
  g.shadowColor = 'rgba(0,0,0,.5)'; g.shadowBlur = 10; g.shadowOffsetY = 5; g.fillStyle = d.bg || '#17130f'; g.beginPath(); g.roundRect(-w / 2, -h / 2, w, h, 4); g.fill(); g.shadowColor = 'transparent';
  const gl = g.createLinearGradient(0, -h / 2, 0, h / 2); gl.addColorStop(0, 'rgba(255,255,255,.16)'); gl.addColorStop(.35, 'rgba(255,255,255,0)'); gl.addColorStop(1, 'rgba(0,0,0,.25)'); g.fillStyle = gl; g.fillRect(-w / 2, -h / 2, w, h);
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = 'rgba(0,0,0,.6)'; g.fillText(d.text, size * .07 + 2, size * .06 + 3); g.fillStyle = d.fg || '#f1ece2'; g.fillText(d.text, size * .07, size * .06);
  g.letterSpacing = '0px'; g.restore();
}

// ---------- desk dressing ----------
let LEATHER;
function blotter(x, y, w, h) {
  return item({ x, y, w, h, order: -100, shadow: .7, lit: false, snd: false, draw: (g, t, it) => {
    if (!LEATHER) { const c = mk(256, 256), q = c.getContext('2d'), r = rng(41); q.fillStyle = '#1b2a22'; q.fillRect(0, 0, 256, 256); for (let i = 0; i < 2600; i++) { q.fillStyle = `rgba(${r() < .5 ? '0,0,0' : '170,210,180'},${.03 + r() * .05})`; q.beginPath(); q.arc(r() * 256, r() * 256, .6 + r() * 1.6, 0, 7); q.fill(); } LEATHER = g.createPattern(c, 'repeat'); }
    g.save(); g.beginPath(); g.roundRect(-w / 2, -h / 2, w, h, 36); g.clip(); g.fillStyle = LEATHER; g.fillRect(-w / 2, -h / 2, w, h);
    g.fillStyle = 'rgba(0,0,0,.5)'; g.fillRect(-w / 2, -h / 2, w, h);
    g.globalCompositeOperation = 'screen';
    for (const l of LAMPS) { const lx = l.x - it.x, ly = l.y - it.y, gr = g.createRadialGradient(lx, ly, 0, lx, ly, l.r); gr.addColorStop(0, `rgba(118,112,82,${.36 * l.k})`); gr.addColorStop(.55, `rgba(64,70,52,${.16 * l.k})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(lx - l.r, ly - l.r, l.r * 2, l.r * 2); }
    g.globalCompositeOperation = 'source-over'; g.restore();
    g.strokeStyle = 'rgba(205,190,140,.35)'; g.lineWidth = 4; g.setLineDash([22, 16]); g.beginPath(); g.roundRect(-w / 2 + 46, -h / 2 + 46, w - 92, h - 92, 20); g.stroke(); g.setLineDash([]);
    g.strokeStyle = 'rgba(0,0,0,.5)'; g.lineWidth = 10; g.beginPath(); g.roundRect(-w / 2, -h / 2, w, h, 36); g.stroke();
    for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { g.fillStyle = '#4a3020'; g.beginPath(); g.moveTo(sx * w / 2, sy * h / 2); g.lineTo(sx * (w / 2 - 260), sy * h / 2); g.lineTo(sx * w / 2, sy * (h / 2 - 260)); g.closePath(); g.fill(); g.strokeStyle = 'rgba(215,190,140,.3)'; g.lineWidth = 3; g.beginPath(); g.moveTo(sx * (w / 2 - 236), sy * (h / 2 - 12)); g.lineTo(sx * (w / 2 - 12), sy * (h / 2 - 236)); g.stroke(); }
  } });
}
function mug(x, y, o = {}) {
  return item({ x, y, w: 460, h: 400, rot: o.rot || 0, order: o.order ?? 40, shadow: 0, lit: false, snd: false, draw: (g, t) => {
    g.strokeStyle = 'rgba(70,40,15,.28)'; g.lineWidth = 9; g.beginPath(); g.arc(-150, 130, 150, .4, 5.2); g.stroke(); g.lineWidth = 3; g.beginPath(); g.arc(-146, 126, 162, 1.2, 3.9); g.stroke();
    roundShadow(g, 26, 34, 190, 180, .55, 28);
    g.fillStyle = '#d9d2c3'; g.beginPath(); g.roundRect(120, -42, 140, 84, 40); g.fill(); g.fillStyle = '#1a1512'; g.beginPath(); g.roundRect(150, -18, 82, 36, 18); g.fill();
    const cg = g.createRadialGradient(-50, -60, 20, 0, 0, 175); cg.addColorStop(0, '#f6f1e6'); cg.addColorStop(1, '#b9b1a0'); g.fillStyle = cg; g.beginPath(); g.arc(0, 0, 172, 0, 7); g.fill();
    g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 3; g.beginPath(); g.arc(0, 0, 172, 0, 7); g.stroke();
    const kg = g.createRadialGradient(40, 50, 10, 0, 0, 142); kg.addColorStop(0, '#4a2c16'); kg.addColorStop(1, '#1d1009'); g.fillStyle = kg; g.beginPath(); g.arc(0, 0, 142, 0, 7); g.fill();
    g.strokeStyle = 'rgba(255,240,215,.35)'; g.lineWidth = 10; g.lineCap = 'round'; g.beginPath(); g.arc(0, 0, 112, 3.5 + .05 * Math.sin(t * .9), 4.6 + .05 * Math.sin(t * .9)); g.stroke();
    g.save(); g.globalCompositeOperation = 'screen'; g.filter = 'blur(22px)';
    for (let k = 0; k < 4; k++) { const u = (t * .12 + k / 4) % 1, a = Math.sin(u * Math.PI) * .2; g.fillStyle = `rgba(235,230,215,${a})`; g.beginPath(); g.ellipse(30 * Math.sin(t * .6 + k * 2) + (u - .5) * 60, -u * 150 + 30, 60 + u * 70, 46 + u * 60, k, 0, 7); g.fill(); }
    g.restore();
  } });
}
function ashtray(x, y, o = {}) {
  return item({ x, y, w: 460, h: 460, rot: o.rot || 0, order: o.order ?? 40, shadow: 0, lit: false, snd: false, draw: (g, t) => {
    roundShadow(g, 24, 30, 215, 205, .55, 28);
    const og = g.createRadialGradient(-70, -80, 30, 0, 0, 215); og.addColorStop(0, '#5d6b70'); og.addColorStop(1, '#1d2428'); g.fillStyle = og; g.beginPath(); g.arc(0, 0, 205, 0, 7); g.fill();
    g.fillStyle = '#0e1214'; g.beginPath(); g.arc(0, 0, 140, 0, 7); g.fill();
    g.strokeStyle = 'rgba(200,225,235,.35)'; g.lineWidth = 6; g.beginPath(); g.arc(0, 0, 198, 3.4, 4.9); g.stroke(); g.lineWidth = 3; g.beginPath(); g.arc(0, 0, 146, .3, 1.5); g.stroke();
    const r = rng(8); for (let i = 0; i < 60; i++) { const a = r() * 7, d = r() * 110; g.fillStyle = `rgba(${150 + r() * 60 | 0},${150 + r() * 50 | 0},${140 + r() * 40 | 0},${.25 + r() * .5})`; g.beginPath(); g.arc(Math.cos(a) * d, Math.sin(a) * d, 2 + r() * 7, 0, 7); g.fill(); }
    g.save(); g.rotate(-.5); g.fillStyle = 'rgba(0,0,0,.4)'; g.fillRect(-40, 6, 250, 26);
    g.fillStyle = '#ece6da'; g.fillRect(-40, -12, 190, 26); g.fillStyle = '#c98a3c'; g.fillRect(150, -12, 62, 26);
    g.fillStyle = '#6b655c'; g.fillRect(-58, -12, 18, 26); const em = .6 + .4 * Math.sin(t * 2.3) * Math.sin(t * .7);
    g.globalCompositeOperation = 'lighter'; const eg = g.createRadialGradient(-62, 1, 0, -62, 1, 40); eg.addColorStop(0, `rgba(255,120,40,${.9 * em})`); eg.addColorStop(1, 'rgba(255,80,20,0)'); g.fillStyle = eg; g.fillRect(-110, -45, 96, 92); g.restore();
    g.save(); g.globalCompositeOperation = 'screen'; g.filter = 'blur(16px)';
    for (let k = 0; k < 9; k++) { const u = (t * .16 + k / 9) % 1, a = Math.sin(u * Math.PI) * .2 * (1 - u * .5); const px = -70 + Math.sin(u * 5 + t * .5 + k) * (20 + u * 90) + u * 120, py = 40 - u * 520; g.fillStyle = `rgba(215,220,225,${a})`; g.beginPath(); g.ellipse(px, py, 26 + u * 90, 34 + u * 110, u * 2, 0, 7); g.fill(); }
    g.restore();
  } });
}
function recorder(x, y, o = {}) {
  return item({ x, y, w: 620, h: 400, rot: o.rot || 0, order: o.order ?? 40, shadow: 1, lit: true, snd: false, draw: (g, t) => {
    const bg = g.createLinearGradient(0, -200, 0, 200); bg.addColorStop(0, '#3b3d40'); bg.addColorStop(1, '#232527'); g.fillStyle = bg; g.beginPath(); g.roundRect(-310, -200, 620, 400, 26); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 3; g.beginPath(); g.roundRect(-304, -194, 608, 388, 22); g.stroke();
    g.fillStyle = '#0d0e0f'; g.beginPath(); g.roundRect(-270, -160, 360, 200, 14); g.fill();
    g.fillStyle = '#c9b88c'; g.beginPath(); g.roundRect(-250, -146, 320, 60, 6); g.fill(); g.fillStyle = INK; g.font = `700 34px ${HAND}`; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(o.label || 'ДЕЛО 1108 · сторона А', -236, -114);
    for (const [cx, sp] of [[-180, 2.2], [0, 1.4]]) { g.fillStyle = '#2a2420'; g.beginPath(); g.arc(cx, -20, 52, 0, 7); g.fill(); g.fillStyle = '#e9e4d8'; g.beginPath(); g.arc(cx, -20, 30, 0, 7); g.fill(); g.strokeStyle = '#15120f'; g.lineWidth = 7; for (let k = 0; k < 3; k++) { const a = t * sp + k * 2.094; g.beginPath(); g.moveTo(cx, -20); g.lineTo(cx + Math.cos(a) * 28, -20 + Math.sin(a) * 28); g.stroke(); } }
    g.strokeStyle = 'rgba(120,80,50,.8)'; g.lineWidth = 4; g.beginPath(); g.moveTo(-180, 32); g.lineTo(0, 32); g.stroke();
    for (let i = 0; i < 6; i++) for (let j = 0; j < 9; j++) { g.fillStyle = 'rgba(0,0,0,.65)'; g.beginPath(); g.arc(128 + i * 28, -150 + j * 26, 7, 0, 7); g.fill(); }
    ['#2b2d30', '#2b2d30', '#8e1c16', '#2b2d30', '#2b2d30'].forEach((c, k) => { g.fillStyle = c; g.beginPath(); g.roundRect(-270 + k * 74, 84, 62, 84, 8); g.fill(); g.fillStyle = 'rgba(255,255,255,.14)'; g.fillRect(-270 + k * 74, 84, 62, 10); });
    if (Math.floor(t * 1.6) % 2 === 0) { g.save(); g.globalCompositeOperation = 'lighter'; const lg = g.createRadialGradient(250, 130, 0, 250, 130, 36); lg.addColorStop(0, 'rgba(255,60,40,1)'); lg.addColorStop(1, 'rgba(255,40,20,0)'); g.fillStyle = lg; g.fillRect(210, 90, 80, 80); g.restore(); }
    g.fillStyle = '#5a1512'; g.beginPath(); g.arc(250, 130, 9, 0, 7); g.fill(); g.fillStyle = 'rgba(230,225,215,.7)'; g.font = `700 22px ${MONO}`; g.textAlign = 'center'; g.fillText('REC', 250, 168);
  } });
}
function pencil(x, y, rot = 0, o = {}) {
  return item({ x, y, w: 760, h: 40, rot, order: o.order ?? 45, shadow: 0, lit: true, snd: false, draw: g => {
    g.fillStyle = 'rgba(0,0,0,.4)'; g.filter = 'blur(8px)'; g.fillRect(-370, 4, 740, 30); g.filter = 'none';
    const yg = g.createLinearGradient(0, -15, 0, 15); yg.addColorStop(0, '#f1c232'); yg.addColorStop(.5, '#d9a514'); yg.addColorStop(1, '#a87c0c'); g.fillStyle = yg; g.fillRect(-300, -15, 590, 30);
    g.fillStyle = '#b9bdc2'; g.fillRect(-340, -15, 40, 30); g.fillStyle = '#d98a86'; g.beginPath(); g.roundRect(-378, -15, 40, 30, 8); g.fill();
    g.fillStyle = '#e2c79a'; g.beginPath(); g.moveTo(290, -15); g.lineTo(356, 0); g.lineTo(290, 15); g.fill(); g.fillStyle = '#2a2623'; g.beginPath(); g.moveTo(338, -4); g.lineTo(358, 0); g.lineTo(338, 4); g.fill();
  } });
}
function casings(x, y, list, o = {}) {   // list: [[dx, dy, rot], ...]
  return item({ x, y, w: 300, h: 220, order: o.order ?? 46, shadow: 0, lit: true, snd: false, draw: g => {
    for (const [dx, dy, r] of list) { g.save(); g.translate(dx, dy); g.rotate(r); g.fillStyle = 'rgba(0,0,0,.45)'; g.filter = 'blur(6px)'; g.fillRect(-36, 4, 80, 26); g.filter = 'none';
      const bg = g.createLinearGradient(0, -13, 0, 13); bg.addColorStop(0, '#f0d58a'); bg.addColorStop(.45, '#c89a3a'); bg.addColorStop(1, '#7a5a1c'); g.fillStyle = bg; g.beginPath(); g.roundRect(-40, -13, 76, 26, 4); g.fill();
      g.fillStyle = '#8a6a26'; g.fillRect(30, -15, 9, 30); g.fillStyle = 'rgba(255,255,255,.45)'; g.fillRect(-36, -9, 62, 4); g.restore(); }
  } });
}

// ---------- evidence objects ----------
// instant-photo print with tape: brighter image, handwritten caption or label strip
function polaroid(src, t, o = {}) {
  const w = o.w || 560, iw = w - 40, ih = iw / 1.778, h = 20 + ih + w * .2;
  const it = item({ x: o.x, y: o.y, w, h, rot: o.rot || 0, order: o.order, tIn: t, dur: o.dur ?? .17, enter: 'drop', dx: o.dx ?? 30, dy: o.dy ?? -150, drot: o.drot ?? .16, snd: false,
    src: typeof src === 'string' ? (MEDIA.frames[src] ? (o.playFor ? (tt => ({ vid: src, t0: tt, off: (o.off || 0) + Math.min(Math.max(0, tt - t + .2), o.playFor) })) : vid(src, t - .2, o.off || 0)) : { still: src }) : src,
    draw: (g, tt, me) => {
      g.drawImage(paper(w, h, '#f1ece1', false, me.order), -w / 2, -h / 2);
      const url = srcUrl(me.src, tt), im = url && got(url);
      g.fillStyle = '#111'; g.fillRect(-iw / 2, -h / 2 + 20, iw, ih);
      if (im) { g.save(); g.beginPath(); g.rect(-iw / 2, -h / 2 + 20, iw, ih); g.clip(); g.filter = `brightness(${o.bri ?? 1.5}) contrast(1.06) saturate(1.12)`; const zz = o.zoom || 1, fx = o.fx ?? .5, fy = o.fy ?? .5; g.drawImage(im, -iw / 2 - (zz - 1) * iw * fx, -h / 2 + 20 - (zz - 1) * ih * fy, iw * zz, ih * zz); g.restore(); }
      if (o.paint) { g.save(); g.translate(0, -h / 2 + 20 + ih / 2); o.paint(g, tt, iw, ih); g.restore(); }
      const gr = g.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2); gr.addColorStop(0, 'rgba(255,255,255,.1)'); gr.addColorStop(.5, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,.1)'); g.fillStyle = gr; g.fillRect(-iw / 2, -h / 2 + 20, iw, ih);
      g.strokeStyle = 'rgba(0,0,0,.3)'; g.lineWidth = 1.5; g.strokeRect(-iw / 2, -h / 2 + 20, iw, ih);
      if (me.pens) { g.save(); g.translate(0, -h / 2 + 20 + ih / 2); for (const p of me.pens) drawPen(g, p, tt); g.restore(); }
      if (me.cap) drawHand(g, { x: 0, y: h / 2 - w * .1, ...me.cap }, tt);
      if (me.label) drawDymo(g, { x: 0, y: h / 2 - w * .1, ...me.label }, tt);
      if (me.stamps) for (const s of me.stamps) drawStamp(g, s, tt);
      if (o.tape !== false) for (const sx of (o.tapes || [-1, 1])) { g.save(); g.translate(sx * (w / 2 - 34), -h / 2 + 6); g.rotate(sx * .62 + .08); g.fillStyle = 'rgba(214,200,150,.72)'; g.fillRect(-62, -19, 124, 38); g.fillStyle = 'rgba(255,255,255,.2)'; g.fillRect(-62, -19, 124, 7); g.strokeStyle = 'rgba(120,100,60,.35)'; g.lineWidth = 1; g.strokeRect(-62, -19, 124, 38); g.restore(); }
    } });
  sfx('shutter', t - .12); sfx('slap', t, { size: w }); fast(t - .17, t + .05, 4); if (o.flash !== 0) flash(t - .1, o.flash ?? .32); shake(t, o.shake ?? 7);
  it.pens = []; it.iw = iw; it.ih = ih; return it;
}
function calendarPage(x, y, t, o = {}) {
  sfx('slap', t, { size: 500 });
  return item({ x, y, w: 440, h: 520, rot: o.rot ?? -.05, order: o.order ?? 100, tIn: t, dur: .2, enter: 'drop', dx: -40, dy: -200, drot: -.2, snd: false, draw: (g, tt, it) => {
    g.drawImage(paper(440, 520, '#f3efe6', false, 3), -220, -260);
    g.fillStyle = '#a4221b'; g.fillRect(-220, -260, 440, 104); for (let k = 0; k < 7; k++) { g.fillStyle = '#17120f'; g.beginPath(); g.arc(-180 + k * 60, -238, 9, 0, 7); g.fill(); }
    g.fillStyle = '#f3efe6'; g.font = `600 34px ${HEAD}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.letterSpacing = '5px'; g.fillText(o.head || 'АЛЬБУКЕРКЕ · НЬЮ-МЕКСИКО', 0, -196); g.letterSpacing = '0px';
    g.fillStyle = INK; g.font = `700 212px ${HEAD}`; g.fillText(o.big || '2009', 0, 14);
    g.fillStyle = '#6b6258'; g.font = `500 32px ${HEAD}`; g.letterSpacing = '6px'; g.fillText(o.foot || 'ГОД', 0, 168); g.letterSpacing = '0px';
    g.fillStyle = 'rgba(0,0,0,.08)'; g.beginPath(); g.moveTo(220, 260); g.lineTo(140, 260); g.lineTo(220, 190); g.fill();
    if (it.pens) for (const p of it.pens) drawPen(g, p, tt);
  } });
}
function clapper(x, y, tIn, tClap, lines, o = {}) {
  sfx('slide', tIn - .25, { dur: .25 }); sfx('clap', tClap); shake(tClap, 12); flash(tClap, .22);
  return item({ x, y, w: 700, h: 560, rot: o.rot ?? .03, order: o.order ?? 110, tIn, dur: .26, enter: 'slide', dx: 500, dy: -260, drot: .25, snd: false, draw: (g, t) => {
    g.fillStyle = '#131110'; g.beginPath(); g.roundRect(-350, -150, 700, 430, 10); g.fill(); g.strokeStyle = 'rgba(255,255,255,.14)'; g.lineWidth = 3; g.strokeRect(-342, -142, 684, 414);
    g.strokeStyle = 'rgba(240,235,225,.75)'; g.lineWidth = 3; g.beginPath(); g.moveTo(-342, -30); g.lineTo(342, -30); g.moveTo(-342, 80); g.lineTo(342, 80); g.moveTo(-342, 180); g.lineTo(342, 180); g.moveTo(0, 80); g.lineTo(0, 272); g.stroke();
    g.fillStyle = 'rgba(235,230,220,.6)'; g.font = `500 22px ${HEAD}`; g.textAlign = 'left'; g.textBaseline = 'alphabetic'; g.letterSpacing = '3px';
    g.fillText('СЕРИАЛ', -326, -112); g.fillText('СЕЗОН', -326, 108); g.fillText('СЕРИЯ', 16, 108); g.fillText('ГОД', -326, 208); g.fillText('СЦЕНА', 16, 208); g.letterSpacing = '0px';
    lines.forEach(([txt, x0, y0, sz, tt]) => drawHand(g, { text: txt, t0: tt, dur: .3, x: x0, y: y0, size: sz, color: '#f4f0e6', rot: -.02, align: 'left' }, t));
    const a = t < tClap - .09 ? -.36 : lerp(-.36, 0, ein(prog(t, tClap - .09, tClap)));
    const stick = (yy, ang) => { g.save(); g.translate(-350, yy); g.rotate(ang); g.fillStyle = '#131110'; g.fillRect(0, -44, 700, 88); g.save(); g.beginPath(); g.rect(0, -44, 700, 88); g.clip(); g.fillStyle = '#ece7dc'; for (let k = -1; k < 8; k++) { g.beginPath(); g.moveTo(k * 100 + 20, 44); g.lineTo(k * 100 + 70, 44); g.lineTo(k * 100 + 130, -44); g.lineTo(k * 100 + 80, -44); g.fill(); } g.restore(); g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 3; g.strokeRect(0, -44, 700, 88); g.restore(); };
    stick(-196, 0); g.save(); g.globalAlpha *= .35; g.fillStyle = '#000'; g.translate(-350, -284); g.rotate(a * .5); g.fillRect(0, -30, 700, 80); g.restore(); stick(-284, a);
    g.fillStyle = '#8f9499'; g.beginPath(); g.arc(-330, -240, 16, 0, 7); g.fill();
  } });
}
function bizCard(x, y, t, o = {}) {
  sfx('slide', t - .22, { dur: .22 }); sfx('card', t);
  return item({ x, y, w: 640, h: 360, rot: o.rot ?? -.06, order: o.order ?? 120, tIn: t, dur: .22, enter: 'slide', dx: -700, dy: 120, drot: -.3, snd: false, draw: (g, tt, it) => {
    g.drawImage(paper(640, 360, '#f2d84a', false, 5), -320, -180);
    g.strokeStyle = '#a4221b'; g.lineWidth = 8; g.strokeRect(-300, -160, 600, 320);
    g.fillStyle = '#a4221b'; g.font = `700 76px ${HEAD}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('ЛУЧШЕ ЗВОНИТЕ', 0, -86); g.font = `700 104px ${HEAD}`; g.fillText('СОЛУ!', 0, 6);
    g.fillStyle = '#1d1915'; g.font = `600 34px ${HEAD}`; g.letterSpacing = '4px'; g.fillText('СОЛ ГУДМАН · АДВОКАТ', 0, 92); g.letterSpacing = '0px'; g.font = `700 26px ${MONO}`; g.fillText('(505) 503-4455', 0, 134);
    if (it.pens) for (const p of it.pens) drawPen(g, p, tt);
  } });
}
// folded desert map; route = points in map coordinates drawn as a dashed red line, then an X
function desertMap(x, y, t, o = {}) {
  const w = 1240, h = 820; sfx('unfold', t - .1);
  const it = item({ x, y, w, h, rot: o.rot ?? .02, order: o.order ?? 90, tIn: t, dur: .3, enter: 'slide', dx: 0, dy: 700, drot: .1, snd: false, draw: (g, tt, me) => {
    const c = sprite('map', w, h, q => {
      q.drawImage(paper(w, h, '#dcc9a0', false, 9), -w / 2, -h / 2); const r = rng(21);
      q.strokeStyle = 'rgba(120,90,50,.28)'; q.lineWidth = 2; for (let k = 0; k < 26; k++) { const cx = (r() - .5) * w, cy = (r() - .5) * h, rr = 40 + r() * 160; for (let j = 0; j < 3; j++) { q.beginPath(); q.ellipse(cx, cy, rr * (1 - j * .28), rr * .6 * (1 - j * .28), r() * 3, 0, 7); q.stroke(); } }
      q.strokeStyle = 'rgba(60,110,150,.55)'; q.lineWidth = 7; q.beginPath(); q.moveTo(-330, -410); q.bezierCurveTo(-280, -200, -420, -40, -350, 120); q.bezierCurveTo(-300, 250, -380, 330, -340, 410); q.stroke();
      q.strokeStyle = 'rgba(70,60,50,.6)'; q.lineWidth = 5; q.beginPath(); q.moveTo(-620, -150); q.lineTo(-330, -170); q.lineTo(-40, -120); q.lineTo(260, -210); q.lineTo(620, -180); q.stroke(); q.beginPath(); q.moveTo(-300, -410); q.lineTo(-330, -170); q.lineTo(-250, 120); q.lineTo(-300, 410); q.stroke();
      q.lineWidth = 2.5; q.setLineDash([10, 8]); q.beginPath(); q.moveTo(-330, -170); q.lineTo(-120, 60); q.lineTo(120, 150); q.lineTo(420, 110); q.stroke(); q.setLineDash([]);
      q.fillStyle = INK; q.beginPath(); q.arc(-330, -170, 15, 0, 7); q.fill(); q.fillStyle = '#dcc9a0'; q.beginPath(); q.arc(-330, -170, 6, 0, 7); q.fill();
      q.fillStyle = INK; q.font = `600 34px ${HEAD}`; q.letterSpacing = '4px'; q.textAlign = 'left'; q.fillText('АЛЬБУКЕРКЕ', -306, -198);
      q.fillStyle = 'rgba(80,60,35,.55)'; q.font = `600 70px ${HEAD}`; q.letterSpacing = '26px'; q.fillText('НЬЮ-МЕКСИКО', -110, -310); q.font = `500 30px ${HEAD}`; q.letterSpacing = '12px'; q.fillText('ПУСТЫНЯ', 180, 300); q.fillText('РИО-ГРАНДЕ', -590, 250); q.letterSpacing = '0px';
      q.strokeStyle = 'rgba(80,60,35,.6)'; q.lineWidth = 3; q.beginPath(); q.arc(520, -300, 56, 0, 7); q.stroke(); q.beginPath(); q.moveTo(520, -372); q.lineTo(520, -228); q.moveTo(448, -300); q.lineTo(592, -300); q.stroke(); q.fillStyle = 'rgba(80,60,35,.8)'; q.font = `700 30px ${HEAD}`; q.textAlign = 'center'; q.fillText('С', 520, -384);
      for (const fx of [-w / 6, w / 6]) { const gr = q.createLinearGradient(fx - 26, 0, fx + 26, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(.48, 'rgba(0,0,0,.16)'); gr.addColorStop(.52, 'rgba(255,255,255,.2)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); q.fillStyle = gr; q.fillRect(fx - 26, -h / 2, 52, h); }
      const gh = q.createLinearGradient(0, -24, 0, 24); gh.addColorStop(0, 'rgba(0,0,0,0)'); gh.addColorStop(.48, 'rgba(0,0,0,.14)'); gh.addColorStop(.52, 'rgba(255,255,255,.18)'); gh.addColorStop(1, 'rgba(0,0,0,0)'); q.fillStyle = gh; q.fillRect(-w / 2, -24, w, 48);
    });
    const p = eout(prog(tt, t - .05, t + .4)); g.save(); g.scale(lerp(.36, 1, p), 1); g.drawImage(c, -w / 2, -h / 2); if (p < 1) { g.fillStyle = `rgba(0,0,0,${.3 * (1 - p)})`; g.fillRect(-w / 2, -h / 2, w, h); }
    if (me.route) { const R = me.route, q = prog(tt, R.t0, R.t1); if (q > 0) { let L = 0; const sg = []; for (let i = 1; i < R.pts.length; i++) { const l = Math.hypot(R.pts[i][0] - R.pts[i - 1][0], R.pts[i][1] - R.pts[i - 1][1]); sg.push(l); L += l; }
        let left = L * q; g.strokeStyle = RED; g.lineWidth = 9; g.lineCap = 'round'; g.setLineDash([26, 20]); g.beginPath(); g.moveTo(...R.pts[0]); let hx = R.pts[0][0], hy = R.pts[0][1];
        for (let i = 1; i < R.pts.length && left > 0; i++) { const k = Math.min(1, left / sg[i - 1]); hx = lerp(R.pts[i - 1][0], R.pts[i][0], k); hy = lerp(R.pts[i - 1][1], R.pts[i][1], k); g.lineTo(hx, hy); left -= sg[i - 1]; } g.stroke(); g.setLineDash([]);
        if (q < 1) { g.fillStyle = RED; g.beginPath(); g.arc(hx, hy, 15, 0, 7); g.fill(); } } }
    if (me.pens) for (const pn of me.pens) drawPen(g, pn, tt);
    if (me.hands) for (const hd of me.hands) drawHand(g, hd, tt);
    g.restore();
  } });
  it.pens = []; it.hands = []; return it;
}
function sticky(x, y, t, o = {}) {
  sfx('slap', t, { size: 300 });
  const it = item({ x, y, w: 340, h: 340, rot: o.rot ?? .07, order: o.order ?? 300, tIn: t, dur: .16, enter: 'drop', dx: 40, dy: -160, drot: .25, snd: false, draw: (g, tt, me) => {
    g.drawImage(paper(340, 340, o.color || '#f1dc5b', false, 11), -170, -170);
    const gr = g.createLinearGradient(0, -170, 0, -110); gr.addColorStop(0, 'rgba(0,0,0,.14)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(-170, -170, 340, 60);
    g.fillStyle = 'rgba(0,0,0,.1)'; g.beginPath(); g.moveTo(170, 170); g.lineTo(96, 170); g.lineTo(170, 100); g.fill();
    if (me.hands) for (const hd of me.hands) drawHand(g, hd, tt); if (me.pens) for (const p of me.pens) drawPen(g, p, tt);
  } });
  it.hands = []; it.pens = []; return it;
}

// ---------- screen-space montage effects (post overlays) ----------
function flash(t, a = .35) { OVERLAYS.push((g, tt) => { const d = tt - t; if (d < 0 || d > .5) return; g.save(); g.globalCompositeOperation = 'screen'; g.fillStyle = `rgba(255,244,222,${a * Math.exp(-d * 13)})`; g.fillRect(0, 0, W, H); g.restore(); }); }
function leak(t0, dur = .7, o = {}) { OVERLAYS.push((g, tt) => { const p = prog(tt, t0, t0 + dur); if (p <= 0 || p >= 1) return; const x = lerp(-400, W + 400, p) * (o.dir || 1) + (o.dir === -1 ? W : 0), a = Math.sin(p * Math.PI) * (o.a ?? .5); g.save(); g.globalCompositeOperation = 'screen'; const gr = g.createRadialGradient(x, H * .3, 0, x, H * .3, 900); gr.addColorStop(0, `rgba(255,150,60,${a})`); gr.addColorStop(.5, `rgba(255,70,30,${a * .4})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, W, H); g.restore(); }); }
function blackout(t0, t1, fade = 0) { OVERLAYS.push((g, tt) => { if (tt < t0 || tt > t1 + fade) return; g.fillStyle = `rgba(4,3,3,${tt > t1 ? 1 - (tt - t1) / fade : 1})`; g.fillRect(0, 0, W, H); }); }
// lamp switched on at t: dark, two flickers, steady
function lampOn(t) { sfx('lamp', t); OVERLAYS.push((g, tt) => { const d = tt - t; let a = d < 0 ? .93 : d < .05 ? .25 : d < .11 ? .8 : d < .16 ? .1 : d < .22 ? .5 : d < .6 ? .12 * (1 - (d - .22) / .38) : 0; if (a <= 0) return; g.fillStyle = `rgba(3,2,2,${a})`; g.fillRect(0, 0, W, H); }); }
// headline strips slammed onto the screen, one per word group: words = [[text, t], ...]
function slam(words, o = {}) {
  const size = o.size || 150, y0 = o.y ?? H * .5, tOut = o.out ?? 1e9, r = rng(o.seed || 5); let wsum = 0;
  const g0 = mk(8, 8).getContext('2d'); g0.font = `700 ${size}px ${HEAD}`; const ws = words.map(([txt]) => g0.measureText(txt).width + size * .5), gap = size * .16; wsum = ws.reduce((a, b) => a + b, 0) + gap * (words.length - 1);
  let x = (o.x ?? W / 2) - wsum / 2; const L = words.map(([txt, t], k) => { const e = { txt, t, w: ws[k], x: x + ws[k] / 2, rot: (r() - .5) * .09, dy: (r() - .5) * size * .16, red: o.red && o.red.includes(k) }; x += ws[k] + gap; sfx('slamword', t, { big: e.red }); shake(t, o.shake ?? 9); return e; });
  OVERLAYS.push((g, tt) => { for (const e of L) { const p = prog(tt, e.t - .09, e.t); if (p <= 0) continue; const q = ein(prog(tt, tOut, tOut + .22)); if (q >= 1) continue;
      const s = lerp(2.6, 1, ein(p)) * (1 + .04 * Math.exp(-Math.max(0, tt - e.t) * 9)); g.save(); g.translate(e.x + q * (e.x - W / 2) * 2.4, y0 + e.dy + q * 900); g.rotate(e.rot + q * e.rot * 9); g.scale(s, s); g.globalAlpha = clamp(p * 3);
      g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = 28; g.shadowOffsetY = 16; g.fillStyle = e.red ? '#a4221b' : '#efe9dc'; g.fillRect(-e.w / 2, -size * .62, e.w, size * 1.24); g.shadowColor = 'transparent';
      g.fillStyle = 'rgba(0,0,0,.06)'; for (let k = 0; k < 5; k++) g.fillRect(-e.w / 2, -size * .62 + k * size * .27, e.w, 2);
      g.font = `700 ${size}px ${HEAD}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = e.red ? '#f4efe4' : '#16120f'; g.fillText(e.txt, 0, size * .05); g.restore(); } });
  return L;
}
// full-screen playback of a clip as a found tape: subs = [[a, b, text, hiWord], ...] in clip seconds; punch = [[a, scale, fx, fy], ...]
let SCAN;
function fullClip(key, t0, o = {}) {
  const d = o.dur || MEDIA.frames[key] / MEDIA.fps, t1 = t0 + d; EXTRA.push(t => t >= t0 - .05 && t < t1 ? frameUrl(key, Math.max(0, t - t0)) : null);
  sfx('tapeon', t0, { dur: d });
  OVERLAYS.push((g, t) => {
    if (t < t0 || t >= t1) return; const ct = t - t0, im = got(frameUrl(key, ct));
    if (!SCAN) { SCAN = mk(W, H); const q = SCAN.getContext('2d'); q.fillStyle = 'rgba(0,0,0,.2)'; for (let y = 0; y < H; y += 4) q.fillRect(0, y, W, 2); }
    g.fillStyle = '#050505'; g.fillRect(0, 0, W, H);
    let sc = 1.02 + ct * (o.creep ?? .012), fx = .5, fy = .5; for (const [a, s, x, y] of (o.punch || [])) if (ct >= a) { sc = s + (ct - a) * .012; fx = x; fy = y; }
    const jx = Math.sin(t * 331) * 1.2;
    if (im) { g.save(); g.filter = `brightness(${o.bri ?? 1.55}) contrast(1.08) saturate(1.15)`; const w = W * sc, h = H * sc; g.drawImage(im, -(w - W) * fx + jx, -(h - H) * fy, w, h); g.restore();
      g.save(); g.globalCompositeOperation = 'screen'; g.globalAlpha = .1; g.drawImage(g.canvas, 5, 0); g.restore(); }
    g.drawImage(SCAN, 0, (Math.floor(t * 30) % 2) * 2);
    const by = H - ((t * 190) % (H + 300)); g.fillStyle = 'rgba(255,255,255,.05)'; g.fillRect(0, by, W, 46); g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(0, by + 46, W, 5);
    const r = rng(Math.floor(t * 60) + 7); for (let k = 0; k < 26; k++) { g.fillStyle = `rgba(255,255,255,${.25 + r() * .5})`; g.fillRect(r() * W, H - 16 + r() * 14, 20 + r() * 120, 2); }
    g.font = `700 54px ${MONO}`; g.textBaseline = 'top'; g.textAlign = 'left'; g.shadowColor = 'rgba(0,0,0,.8)'; g.shadowBlur = 6; g.fillStyle = '#f2f2ea'; g.fillText('▶ PLAY', 70, 56);
    const src = (o.tc || 0) + ct, mm = Math.floor(src / 60) % 60, ss = Math.floor(src) % 60, ff = Math.floor(src * 25) % 25; g.fillText(`0:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}:${String(ff).padStart(2, '0')}`, 70, H - 104);
    g.textAlign = 'right'; g.fillText(o.tag || '', W - 70, 56); if (Math.floor(t * 2) % 2 === 0) { g.fillStyle = '#e8352a'; g.beginPath(); g.arc(W - 90, H - 80, 14, 0, 7); g.fill(); } g.shadowColor = 'transparent';
    for (const [a, b, text, hi] of (o.subs || [])) { if (ct < a || ct >= b) continue; const size = 82; g.font = `600 ${size}px ${HEAD}`; g.textBaseline = 'middle'; const parts = hi ? text.split(hi) : [text]; const tw = g.measureText(text).width; let x = W / 2 - tw / 2; const y = H - 190, pp = eout(prog(ct, a, a + .1));
      g.save(); g.translate(0, (1 - pp) * 24); g.globalAlpha = pp; g.fillStyle = 'rgba(8,6,5,.72)'; g.fillRect(x - 34, y - size * .68, tw + 68, size * 1.36); g.textAlign = 'left';
      parts.forEach((pt, k) => { g.fillStyle = '#f4f0e6'; g.fillText(pt, x, y + 4); x += g.measureText(pt).width; if (k < parts.length - 1) { const hw = g.measureText(hi).width; g.fillStyle = '#b8261e'; g.fillRect(x - 8, y - size * .56, hw + 16, size * 1.12); g.fillStyle = '#fff'; g.fillText(hi, x, y + 4); x += hw; } }); g.restore(); }
    const v = g.createRadialGradient(W / 2, H / 2, H * .45, W / 2, H / 2, H * 1.05); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.55)'); g.fillStyle = v; g.fillRect(0, 0, W, H);
  });
  return t1;
}
// tape glitch over whatever is on screen: displaced slices and noise
function glitch(t0, dur = .16) { sfx('glitch', t0, { dur }); OVERLAYS.push((g, t) => { if (t < t0 || t >= t0 + dur) return; const r = rng(Math.floor(t * 60) * 13 + 1), c = g.canvas; px.setTransform(1, 0, 0, 1, 0, 0); px.globalAlpha = 1; px.drawImage(c, 0, 0);
    for (let k = 0; k < 16; k++) { const y = r() * H, h = 10 + r() * 90, dx = (r() - .5) * 420; g.drawImage(POST, 0, y, W, h, dx, y, W, h); }
    for (let k = 0; k < 40; k++) { g.fillStyle = `rgba(${r() < .5 ? '255,255,255' : '10,10,10'},${.3 + r() * .6})`; g.fillRect(r() * W, r() * H, 60 + r() * 500, 2 + r() * 8); }
    g.save(); g.globalCompositeOperation = 'screen'; g.fillStyle = `rgba(${r() < .5 ? '255,40,40' : '40,90,255'},.18)`; g.fillRect(0, r() * H, W, 120 + r() * 200); g.restore(); }); }
function clipsScatter(x, y, list, o = {}) {   // loose paperclips: [[dx, dy, rot], ...]
  return item({ x, y, w: 300, h: 300, order: o.order ?? 44, shadow: 0, lit: true, snd: false, draw: g => { for (const [dx, dy, r] of list) { g.save(); g.translate(dx, dy); g.rotate(r); drawClip(g, 0, 0); g.restore(); } } });
}
