// Christopher timeline: voice time -> film time. Breaks add a pause before a chapter divider;
// cuts insert the original (Russian dub) dialogue clip (v1 > v removes the narrated quote it replaces).
const INTRO = 1.2;                         // cold open before the first word
const EVENTS = [
  { v: 29.55, v1: 29.55, type: 'cut', dlg: ['d_crash'] },
  { v: 58.43, type: 'break', ch: 1, title: 'ПЛЕМЯННИК' },
  { v: 152.24, type: 'break', ch: 2, title: 'ЛЕГЕНДА' },
  { v: 221.14, type: 'break', ch: 3, title: 'ТРИ ЧАСА' },
  { v: 258.50, v1: 258.50, type: 'cut', dlg: ['d_hell1', 'd_hell2'] },
  { v: 280.07, type: 'break', ch: 4, title: 'ПОСВЯЩЕНИЕ' },
  { v: 359.02, type: 'break', ch: 5, title: 'ПУСТОШИ' },
  { v: 414.00, type: 'break', ch: 6, title: 'ИГЛА' },
  { v: 479.07, type: 'break', ch: 7, title: 'АДРИАНА' },
  { v: 532.06, v1: 532.06, type: 'cut', dlg: ['d_conf', 'd_conf2'] },
  { v: 558.57, type: 'break', ch: 8, title: 'ГОЛЛИВУД' },
  { v: 630.31, v1: 631.85, type: 'cut', dlg: ['d_jt'] },
  { v: 640.30, type: 'break', ch: 9, title: 'АВАРИЯ' },
  { v: 697.14, type: 'break', ch: 10, title: 'ВЕРДИКТ' },
  { v: 780.845, type: 'break', ch: 11, title: '' }
];
const DLG = {"d_crash": 6.6, "d_hell1": 11.2, "d_hell2": 14.6, "d_conf": 5.7, "d_conf2": 4.0, "d_jt": 8.1};
const PAUSE = 1.8, GAP = .35, VOICE_END = 800.45, TAIL = 5.0;
// build pieces
const PIECES = []; const DLGT = {};          // DLGT: dialogue key -> film start time
(function () {
  let off = INTRO, v = 0;
  for (const e of EVENTS) {
    PIECES.push({ v0: v, v1: e.v, off }); v = e.v;
    if (e.type === 'break') { off += PAUSE; e.t = e.v + off; }
    else {
      let t = e.v + off + GAP; e.t = t;
      e.dlg.forEach((k, i) => { DLGT[k] = t; t += DLG[k] + (i < e.dlg.length - 1 ? .3 : 0); });
      t += GAP; e.tEnd = t; off = t - e.v1; v = e.v1;
    }
  }
  PIECES.push({ v0: v, v1: VOICE_END + 1, off });
})();
const offAt = vv => { for (const p of PIECES) if (vv >= p.v0 - 1e-6 && vv < p.v1) return p.off; return PIECES[PIECES.length - 1].off; };
const FILM_END = VOICE_END + PIECES[PIECES.length - 1].off + TAIL;
const breaks = EVENTS.filter(e => e.type === 'break');
// chapter k occupies [start, end): chapter 0 = cold open + intro (0 .. first divider)
const chRange = k => {
  const i = breaks.findIndex(b => b.ch === k);
  const start = k === 0 ? 0 : breaks[i - 0].t - PAUSE;
  const nb = k === 0 ? breaks[0] : breaks[i + 1];
  const end = nb ? nb.t - PAUSE : FILM_END;
  return [start, end];
};
if (typeof module !== 'undefined') module.exports = { EVENTS, PIECES, DLGT, offAt, chRange, FILM_END, breaks };
