// Lalo timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 19.30, v1: 19.30, type: 'cut', dlg: ['d_saul'] },
  { v: 59.74, type: 'break', ch: 1, title: 'ИМЯ' },
  { v: 90.47, type: 'break', ch: 2, title: 'ПЛЕМЯННИК' },
  { v: 112.70, v1: 112.70, type: 'cut', dlg: ['d_gus'] },
  { v: 146.65, type: 'break', ch: 3, title: 'КОЛОКОЛЬЧИК' },
  { v: 197.67, type: 'break', ch: 4, title: 'НЕМЕЦ' },
  { v: 260.95, type: 'break', ch: 5, title: 'АДВОКАТ' },
  { v: 337.10, type: 'break', ch: 6, title: 'ЗАЛОГ' },
  { v: 402.79, type: 'break', ch: 7, title: 'КИМ' },
  { v: 436.39, v1: 436.39, type: 'cut', dlg: ['d_kim'] },
  { v: 444.04, type: 'break', ch: 8, title: 'ПРЕДАТЕЛЬ' },
  { v: 467.41, v1: 467.41, type: 'cut', dlg: ['d_attack'] },
  { v: 481.06, type: 'break', ch: 9, title: 'МЕРТВЕЦ' },
  { v: 540.96, type: 'break', ch: 10, title: 'ГЕРМАНИЯ' },
  { v: 592.58, type: 'break', ch: 11, title: 'ХОВАРД' },
  { v: 613.92, v1: 613.92, type: 'cut', dlg: ['d_how1', 'd_how2'] },
  { v: 645.32, type: 'break', ch: 12, title: 'ЛАБОРАТОРИЯ' },
  { v: 664.23, v1: 664.23, type: 'cut', dlg: ['d_lab'] },
  { v: 696.65, type: 'break', ch: 13, title: 'ВЕРДИКТ' },
  { v: 798.32, v1: 800.62, type: 'cut', dlg: ['d_never'] },
  { v: 806.05, type: 'break', ch: 14, title: '' }
];
const DLG = {"d_saul": 19.8, "d_gus": 28.1, "d_kim": 23.7, "d_attack": 16.0, "d_how1": 10.8, "d_how2": 14.8, "d_lab": 22.8, "d_never": 19.2};
const PAUSE = 1.0, GAP = .35, VOICE_END = 830.33, TAIL = 5.0;
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
