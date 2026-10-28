// Jesse timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 38.58, type: 'break', ch: 1, title: 'УЧЕНИК' },
  { v: 82.25, v1: 82.25, type: 'cut', dlg: ['d_leave'] },
  { v: 103.10, type: 'break', ch: 2, title: 'ЛИШНИЙ' },
  { v: 134.90, v1: 134.90, type: 'cut', dlg: ['d_science'] },
  { v: 151.80, type: 'break', ch: 3, title: 'ДЖЕЙН' },
  { v: 221.70, type: 'break', ch: 4, title: 'ГЕЙЛ' },
  { v: 271.71, type: 'break', ch: 5, title: 'СОБАКА' },
  { v: 327.18, v1: 327.18, type: 'cut', dlg: ['d_dog'] },
  { v: 342.00, type: 'break', ch: 6, title: 'ДЕТИ' },
  { v: 387.35, type: 'break', ch: 7, title: 'ДЕНЬГИ' },
  { v: 438.40, type: 'break', ch: 8, title: 'ЯМА' },
  { v: 456.22, v1: 458.26, type: 'cut', dlg: ['d_jane1', 'd_jane2'] },
  { v: 493.10, type: 'break', ch: 9, title: 'СВОБОДА' },
  { v: 512.96, v1: 512.96, type: 'cut', dlg: ['d_self', 'd_self2'] },
  { v: 554.45, type: 'break', ch: 10, title: 'ВЕРДИКТ' },
  { v: 629.50, type: 'break', ch: 11, title: '' }
];
const DLG = {"d_jane1": 3.1, "d_jane2": 5.7, "d_leave": 11.4, "d_science": 4.6, "d_dog": 16.8, "d_self": 12.1, "d_self2": 3.6};
const PAUSE = 1.0, GAP = .35, VOICE_END = 645.96, TAIL = 5.0;
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
