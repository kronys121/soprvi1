// Pussy timeline: voice time -> film time. Breaks add a pause before a chapter divider;
// cuts insert the original (Russian dub) dialogue clip.
const INTRO = 1.2;
const EVENTS = [
  { v: 25.27, v1: 25.27, type: 'cut', dlg: ['d_face'] },
  { v: 53.59, type: 'break', ch: 1, title: 'ДРУГ' },
  { v: 118.10, type: 'break', ch: 2, title: 'ИСЧЕЗНОВЕНИЕ' },
  { v: 178.06, v1: 178.06, type: 'cut', dlg: ['d_nothing'] },
  { v: 208.01, type: 'break', ch: 3, title: 'ВОЗВРАЩЕНИЕ' },
  { v: 272.33, type: 'break', ch: 4, title: 'ДВОЙНАЯ ЖИЗНЬ' },
  { v: 366.74, type: 'break', ch: 5, title: 'ПОРУЧИТЕЛЬ' },
  { v: 413.38, v1: 413.38, type: 'cut', dlg: ['d_aj'] },
  { v: 418.24, type: 'break', ch: 6, title: 'РЫБА' },
  { v: 431.77, v1: 431.77, type: 'cut', dlg: ['d_fish'] },
  { v: 467.55, type: 'break', ch: 7, title: 'ЛОДКА' },
  { v: 477.45, v1: 477.45, type: 'cut', dlg: ['d_confess'] },
  { v: 523.57, type: 'break', ch: 8, title: 'ВЫПУСКНОЙ' },
  { v: 559.68, type: 'break', ch: 9, title: 'ВЕРДИКТ' },
  { v: 653.58, type: 'break', ch: 10, title: '' }
];
const DLG = {"d_face": 3.8, "d_nothing": 14.7, "d_aj": 6.5, "d_fish": 12.6, "d_confess": 14.3};
const PAUSE = 1.8, GAP = .35, VOICE_END = 671.75, TAIL = 5.0;
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
