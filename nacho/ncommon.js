// Nacho-specific helpers on top of patient/common.js + fx2.js (loaded after this file, so only use fx2 inside functions).
const CASE_LABEL = 'ДЕЛО № 0627 · И. ВАРГА';
const TAPE_TEXT = 'СПОЙЛЕРЫ · «ЛУЧШЕ ЗВОНИТЕ СОЛУ» · ВСЕ 6 СЕЗОНОВ · ';
const BCS = '«ЛУЧШЕ ЗВОНИТЕ СОЛУ»';

// ---- shot list: S(t, x, y, z) starts a hard-cut shot; each shot creeps until the next one ----
const SH = [];
function S(t, x, y, z, r = 0, o = {}) { SH.push({ t, x, y, z, r, o }); }
function buildShots(tEnd) {
  SH.sort((a, b) => a.t - b.t);
  const L = SH.filter((s, i) => i === 0 || s.t - SH[i - 1].t > .12);
  L.forEach((s, i) => {
    const t1 = i < L.length - 1 ? L[i + 1].t : tEnd, o = s.o, tc = seg(s.t, i === 0 || o.quiet);
    if (o.to) { ck(tc, s.x, s.y, s.z, s.r); ck(Math.max(t1, tc + .1), o.to[0], o.to[1], o.to[2], o.to[3] ?? s.r); return; }
    const dz = o.dz ?? .06, dx = o.dx ?? 40, dy = o.dy ?? 10, dr = o.dr ?? .008;
    ck(tc, s.x - dx / 2, s.y - dy / 2, s.z, s.r); ck(Math.max(t1, tc + .1), s.x + dx / 2, s.y + dy / 2, s.z * (1 + dz), s.r + dr);
  });
}

// ---- standard chapter desk: leather blotter, lamps, scattered props ----
function dress(seed = 1) {
  const r = rng(seed * 17 + 3);
  lamp(-900, -500, 1900, 1); lamp(900, -300, 1900, 1); lamp(-700, 900, 1800, .95); lamp(900, 1000, 1800, 1); lamp(0, 200, 2200, .7);
  blotter(0, 250, 5000, 3500);
  mug(-2150 + r() * 200, -900 + r() * 300, { rot: r() * 3 }); ashtray(2150 - r() * 150, -700 + r() * 400);
  recorder(-2200, 900 + r() * 300, { rot: .1 - r() * .2, label: 'ДЕЛО 0627 · ВАРГА' });
  pencil(1900, 1500, -.3 + r() * .3); pencil(-1500, -1450, .2);
  casings(2100, 400, [[0, 0, r() * 3], [90, 50, r() * 3], [-60, 90, r() * 3]]);
  clipsScatter(-1300, 1700, [[0, 0, .6], [90, 60, 2.2], [-50, 110, -1]]); clipsScatter(1200, -1500, [[0, 0, 1.1], [70, 40, -.4]]);
}

// ---- chapter opening: folder card, hard cut on it ----
function opener(num, title) {
  const A = [0, -2600]; divider(A, num, title, T_START);
  S(T_START, A[0], A[1] + 10, .98, -.01, { quiet: true, dz: .1 });
  return A;
}

// ---- polaroid with an automatic hard-cut shot on it ----
let ORD = 100, PREVPIN = null;
function P(src, t, x, y, o = {}) {
  const w = o.w || 620;
  const p = polaroid(src, t, { x, y, w, rot: o.rot ?? 0, order: o.order ?? ORD++, off: o.off || 0, bri: o.bri, playFor: o.playFor, zoom: o.zoom, fx: o.fx, fy: o.fy, flash: o.flash, shake: o.shake, paint: o.paint, tapes: o.tapes, dy: o.dy });
  if (o.cap) p.cap = hand(o.cap, t + (o.capd ?? .35), o.capdur ?? .4, { size: o.capSize || Math.round(w * .12), color: o.capColor });
  if (o.label) p.label = dymo(o.label, t + (o.labd ?? .3), { size: o.labSize || Math.round(w * .058) });
  if (o.stamp) p.stamps = [stamp(o.stamp[0], o.stamp[1], { x: o.stamp[2] ?? 0, y: o.stamp[3] ?? -40, size: o.stamp[4] || Math.round(w * .11), rot: -.12 })];
  if (o.shot !== false) {
    const h = 20 + (w - 40) / 1.778 + w * .2;
    S(t - (o.lead ?? .22), x + (o.sx || 0), y + (o.sy ?? h * .04), o.z ?? 1920 * (o.fill ?? .62) / w, (o.rot ?? 0) * .5 + (o.sr || 0), o.so || {});
  }
  if (o.chain !== false) {
    const h = 20 + (w - 40) / 1.778 + w * .2, pp = [x, y - h / 2 + 26];
    if (PREVPIN && o.chain !== 'start') thread([PREVPIN, pp], t + .1, t + .45, { silent: true, under: true });
    pin(pp[0], pp[1], t + .05, { silent: true }); PREVPIN = pp;
  }
  return p;
}
// wide establishing shot of the whole board
const WIDE = (t, x = 0, y = 150, z = .5, o = {}) => S(t, x, y, z, 0, { dz: .08, ...o });

// index card with typed lines: lines = [[text, t, size?, color?]]
function note(x, y, t, lines, o = {}) {
  const w = o.w || 620, h = o.h || 140 + lines.length * 70, n = lines.length;
  const L = lines.map(([s, tt, size, col], k) => [typed(s, tt, o.per ?? .035), o.align === 'left' ? -w / 2 + 50 : 0, (k - (n - 1) / 2) * 72 + 14, `${col === RED || o.bold ? 800 : 700} ${size || 34}px ${col === RED || o.bold ? SANS : MONO}`, col || INK, o.align || 'center']);
  const c = typedCard({ x, y, w, h, rot: o.rot ?? .02, order: o.order ?? ORD++, tIn: t, dur: .25, enter: 'slide', dx: o.dx ?? 500, dy: o.dy ?? 120 }, L);
  sfx('slide', t - .2, { dur: .22 });
  if (o.shot !== false) S(t - .15, x, y, o.z ?? 1920 * .5 / w, (o.rot ?? .02) * .5);
  return c;
}
// face chain: small stills in a row with arrows drawn between them
function faces(x, y, list, o = {}) {   // list: [[still, label, t]]
  const w = o.w || 380, gap = o.gap || 520;
  return list.map(([k, lab, t], i) => {
    const px = x + (i - (list.length - 1) / 2) * gap;
    const p = polaroid(k, t, { x: px, y, w, rot: (i % 2 ? .04 : -.04), order: ORD++, bri: 1.25, flash: .15, shake: 4 });
    p.label = dymo(lab, t + .2, { size: 26 });
    if (i > 0) p.pens = [mark([[-w * .95, 0], [-w * .62, 0]], t + .1, .18, { width: 12 }), mark([[-w * .7, -26], [-w * .62, 0], [-w * .7, 26]], t + .26, .1, { width: 12 })];
    return p;
  });
}
// dialogue insert played full-screen as found tape (camera holds behind it)
function tape(key, o = {}) {
  const t0 = DLGT[key], d = DLG[key];
  fullClip(key, t0, { dur: d, ...o });
  flash(t0, .45); glitch(t0 + d - .08, .16);
  sfx('riser', t0 - 1.0, { dur: 1.0 }); sfx('whoosh', t0 - .4, { dur: .42 });
  return [t0, t0 + d];
}
