// Gus timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 42.44, type: 'break', ch: 1, title: 'ФАСАД' },
  { v: 117.70, type: 'break', ch: 2, title: 'ПРАВИЛА' },
  { v: 150.34, v1: 152.30, type: 'cut', dlg: ['d_kids'] },
  { v: 169.18, v1: 172.55, type: 'cut', dlg: ['d_man'] },
  { v: 208.03, type: 'break', ch: 3, title: 'НОЖ' },
  { v: 240.90, v1: 243.45, type: 'cut', dlg: ['d_work'] },
  { v: 259.68, type: 'break', ch: 4, title: 'ДВАДЦАТЬ ЛЕТ' },
  { v: 315.80, type: 'break', ch: 5, title: 'МЕСТЬ' },
  { v: 376.75, type: 'break', ch: 6, title: 'ШАХМАТЫ' },
  { v: 446.57, type: 'break', ch: 7, title: 'ЛИЦО' },
  { v: 496.40, type: 'break', ch: 8, title: 'ВЕРДИКТ' },
  { v: 583.40, type: 'break', ch: 9, title: '' }
];
const DLG = {"d_man": 11.3, "d_kids": 7.6, "d_work": 7.2};
const PAUSE = 1.0, GAP = .35, VOICE_END = 599.12, TAIL = 5.0;
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
