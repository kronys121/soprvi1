// Hank timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 59.26, type: 'break', ch: 1, title: 'ПИВО И ПИСТОЛЕТ' },
  { v: 138.38, type: 'break', ch: 2, title: 'ТУКО' },
  { v: 190.82, type: 'break', ch: 3, title: 'ЛИФТ' },
  { v: 244.38, type: 'break', ch: 4, title: 'ЭЛЬ-ПАСО' },
  { v: 301.84, type: 'break', ch: 5, title: 'ФУРГОН' },
  { v: 361.77, type: 'break', ch: 6, title: 'ОДНА МИНУТА' },
  { v: 426.80, type: 'break', ch: 7, title: 'МИНЕРАЛЫ' },
  { v: 500.23, type: 'break', ch: 8, title: 'W.W.' },
  { v: 566.00, type: 'break', ch: 9, title: 'ЦЫПЛЁНОК' },
  { v: 621.30, type: 'break', ch: 10, title: 'ТУАЛЕТ' },
  { v: 682.34, type: 'break', ch: 11, title: 'ГАРАЖ' },
  { v: 731.85, type: 'break', ch: 12, title: 'КАРЬЕРА' },
  { v: 801.41, type: 'break', ch: 13, title: 'ТОХАДЖИЛИ' },
  { v: 863.80, type: 'break', ch: 14, title: 'ОЗИМАНДИЯ' },
  { v: 936.18, type: 'break', ch: 15, title: 'ВЕРДИКТ' },
  { v: 1005.30, type: 'break', ch: 16, title: '' }
];
const DLG = {};
const PAUSE = 1.0, GAP = .35, VOICE_END = 1029.28, TAIL = 5.0;
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
