// Mike timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 76.79, type: 'break', ch: 1, title: 'ФИЛАДЕЛЬФИЯ' },
  { v: 116.89, type: 'break', ch: 2, title: 'МЭТТ' },
  { v: 170.54, v1: 170.54, type: 'cut', dlg: ['d_broke', 'd_twodays'] },
  { v: 188.20, type: 'break', ch: 3, title: 'ДВОЕ' },
  { v: 233.62, type: 'break', ch: 4, title: 'БУДКА' },
  { v: 282.84, type: 'break', ch: 5, title: 'ТУКО' },
  { v: 314.92, v1: 314.92, type: 'cut', dlg: ['d_notuco'] },
  { v: 333.36, type: 'break', ch: 6, title: 'ГЕКТОР' },
  { v: 346.05, v1: 346.05, type: 'cut', dlg: ['d_hector'] },
  { v: 364.33, v1: 364.33, type: 'cut', dlg: ['d_passer'] },
  { v: 391.66, type: 'break', ch: 7, title: 'ГУС' },
  { v: 396.81, v1: 396.81, type: 'cut', dlg: ['d_gusmeet'] },
  { v: 435.35, type: 'break', ch: 8, title: 'ВЕРНЕР' },
  { v: 486.06, v1: 486.06, type: 'cut', dlg: ['d_swear', 'd_stars'] },
  { v: 499.78, type: 'break', ch: 9, title: 'НАЧО' },
  { v: 554.16, type: 'break', ch: 10, title: 'ПОЛУМЕРЫ' },
  { v: 584.03, v1: 584.03, type: 'cut', dlg: ['d_halfm'] },
  { v: 604.84, type: 'break', ch: 11, title: 'ДЖЕССИ' },
  { v: 630.61, v1: 630.61, type: 'cut', dlg: ['d_woke'] },
  { v: 642.69, type: 'break', ch: 12, title: 'УОЛТЕР' },
  { v: 664.62, v1: 664.62, type: 'cut', dlg: ['d_moon'] },
  { v: 682.61, type: 'break', ch: 13, title: 'ДЕВЯТЬ' },
  { v: 698.90, v1: 698.90, type: 'cut', dlg: ['d_mymen'] },
  { v: 735.88, type: 'break', ch: 14, title: 'РЕКА' },
  { v: 757.55, v1: 769.10, type: 'cut', dlg: ['d_names', 'd_place'] },
  { v: 784.79, v1: 784.79, type: 'cut', dlg: ['d_avoid', 'd_peace'] },
  { v: 795.90, type: 'break', ch: 15, title: 'ВЕРДИКТ' },
  { v: 854.25, type: 'break', ch: 16, title: '' }
];
const DLG = {"d_halfm": 29.4, "d_woke": 13.2, "d_broke": 25.5, "d_twodays": 9.3, "d_notuco": 30.6, "d_hector": 29.0, "d_gusmeet": 29.3, "d_passer": 14.5, "d_swear": 13.0, "d_stars": 16.4, "d_mymen": 38.2, "d_names": 8.3, "d_place": 17.3, "d_avoid": 7.7, "d_peace": 3.6, "d_moon": 21.0};
const PAUSE = 1.0, GAP = .35, VOICE_END = 876.88, TAIL = 5.0;
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
