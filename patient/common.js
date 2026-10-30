// Shared scene helpers for chapters 2-11 (chapter.html). Patient chapter keeps its own copy in scenes.js.
const photo = o => item({ draw: drawPhoto, w: 560, ...o, h: o.h || photoH(o.w || 560) });
const card = o => item({ draw: drawCard, ...o });
const vid = (key, t0, off = 0) => ({ vid: key, t0, off });
const FG = [], TAPES = [], SPINE = [], OVERLAYS = [];
const fgProp = o => FG.push({ p: 1.8, s: 1, rot: 0, a: .9, t0: -1e9, t1: 1e9, ...o });
const spinePin = (x, y, t) => { SPINE.push({ x, y, t }); pin(x, y, t, { silent: true, r: 17 }); };
let FADE_IN = .35, FADE_OUT = .4;
function travel(t0, t1) { sfx('whoosh', t0, { dur: t1 - t0 + .25, soft: true }); fast(t0, t1, 6); }
// held framing that keeps drifting: push-in plus a small lateral slide
function hold(t0, t1, x, y, z, r = 0, o = {}) {
  const dz = o.dz ?? .06, dx = o.dx ?? 40, dy = o.dy ?? 10, dr = o.dr ?? .012;
  camKey(t0, x - dx / 2, y - dy / 2, z, r); camKey(t1, x + dx / 2, y + dy / 2, z * (1 + dz), r + dr);
}
// red thread from the previous scene's pin to this scene's pin, laid during the travel
let LASTPIN = null;
function link(x, y, t0, t1) { if (LASTPIN) thread([LASTPIN, [x, y]], t0, t1, { silent: true, under: true }); spinePin(x, y, t1); LASTPIN = [x, y]; }
const typedCard = (o, lines) => {   // lines: [[typedObj, x, y, font, color?, align?], ...]
  const c = card({ lined: true, ...o, text: (g, t) => { for (const [ty, x, y, font, col, al] of lines) drawTyped(g, ty, t, x, y, font, col || INK, al || 'left'); if (o.extra) o.extra(g, t); } });
  return c;
};
const tag = (o) => item({ draw: drawTag, w: 360, h: 96, size: 42, enter: 'pop', dur: .26, ...o });
// chapter divider folder: number stamp + title letters; returns the folder item
function divider(A, num, title, t0) {
  lamp(A[0], A[1] - 200, 1500, .9);
  const f = item({ draw: drawFolder, x: A[0], y: A[1], w: 1200, h: 760, rot: -.015, order: 5, tIn: t0 - .1, enter: 'none', tab: `ГЛАВА ${String(num).padStart(2, '0')}`,
    text: (g, t, it) => {
      g.fillStyle = 'rgba(40,25,10,.8)'; g.font = `400 30px ${MONO}`; g.textAlign = 'center'; g.fillText(typeof CASE_LABEL !== 'undefined' ? CASE_LABEL : 'ДЕЛО № 1999 · Т. СОПРАНО', 0, -250);
      const size = title.length > 14 ? 70 : title.length > 10 ? 112 : title.length > 7 ? 140 : 170; g.font = `800 ${size}px ${SANS}`; g.textBaseline = 'middle'; g.letterSpacing = '10px';
      const total = g.measureText(title).width; let x = -total / 2;
      [...title].forEach((c, k) => { const w = g.measureText(c).width + 10, ts = t0 + .25 + k * .06, p = eout5(prog(t, ts, ts + .35)); if (p > 0) { g.save(); g.translate(x + w / 2, 40 + (1 - p) * 70); g.rotate((1 - p) * (k % 2 ? .25 : -.2)); g.globalAlpha *= clamp(p * 2); g.fillStyle = INK; g.textAlign = 'center'; g.fillText(c, 0, 0); g.restore(); } x += w; });
      g.letterSpacing = '0px'; drawStamp(g, it.s, t);
    } });
  f.s = stamp(String(num).padStart(2, '0'), t0 + .1, { x: 420, y: -220, size: 120, rot: .1, shake: 8 });
  [...title].forEach((c, k) => { if (c !== ' ') sfx('type', t0 + .25 + k * .06 + .3, { heavy: true }); });
  sfx('hitlow', t0 + .1);
  return f;
}
// checkbox line: label + box; mark: 'x' (crossed) or 'v' (checked) drawn by pen at time tm
function checkLine(label, tm, mark, x, y) { sfx('pen', tm, { dur: .25 }); return { label, tm, mark, x, y }; }
function drawChecks(g, t, list, font = `700 40px ${MONO}`) {
  for (const c of list) {
    g.font = font; g.fillStyle = INK; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(c.label, c.x + 70, c.y);
    g.strokeStyle = INK; g.lineWidth = 3; g.strokeRect(c.x, c.y - 24, 48, 48);
    const p = eio(prog(t, c.tm, c.tm + .25)); if (p <= 0) continue;
    g.save(); g.strokeStyle = RED; g.lineWidth = 7; g.lineCap = 'round'; g.beginPath();
    if (c.mark === 'v') { const P = [[c.x + 6, c.y], [c.x + 20, c.y + 18], [c.x + 58, c.y - 34]]; const L = p * 2; g.moveTo(...P[0]); if (L < 1) g.lineTo(lerp(P[0][0], P[1][0], L), lerp(P[0][1], P[1][1], L)); else { g.lineTo(...P[1]); g.lineTo(lerp(P[1][0], P[2][0], L - 1), lerp(P[1][1], P[2][1], L - 1)); } }
    else { const w = g.measureText(c.label).width; g.moveTo(c.x - 8, c.y + 2); g.lineTo(c.x - 8 + (w + 100) * p, c.y - 4); }
    g.stroke(); g.restore();
  }
}
const ensureFG = (pts) => pts.forEach(([x, y, spr, s, p, rot, a]) => fgProp({ x, y, spr, s, p, rot: rot || 0, a: a ?? .9 }));
// original-dialogue playback: a large print plays the clip with its own (dubbed) audio; a red "REC" tag marks it as evidence
function dlgShot(key, x, y, o = {}) {
  const t0 = DLGT[key], d = MEDIA.frames[key] / MEDIA.fps;
  const ph = photo({ x, y, w: o.w || 980, rot: o.rot ?? -.01, order: o.order || 900, tIn: t0 - .25, dur: .3, enter: 'drop', dx: 0, dy: -260, src: vid(key, t0, 0), ...o.extra });
  item({ x: x + (o.w || 980) / 2 - 120, y: y - photoH(o.w || 980) / 2 - 34, w: 220, h: 60, order: (o.order || 900) + 1, shadow: 0, lit: false, tIn: t0 - .1, enter: 'fade', dur: .2,
    draw: (g, t) => { if (t > t0 + d + .3) return; const on = Math.floor(t * 2) % 2 === 0; g.fillStyle = 'rgba(20,16,14,.85)'; g.beginPath(); g.roundRect(-110, -30, 220, 60, 8); g.fill();
      if (on) { g.fillStyle = '#e8352a'; g.beginPath(); g.arc(-70, 0, 13, 0, 7); g.fill(); } g.fillStyle = '#f2ede4'; g.font = `800 30px ${SANS}`; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText('ЗАПИСЬ', -46, 2); } });
  return ph;
}
