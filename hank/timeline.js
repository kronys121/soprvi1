// Hank timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 59.26, type: 'break', ch: 1, title: 'ПИВО И ПИСТОЛЕТ' },
  { v: 74.26, v1: 82.85, type: 'cut', dlg: ['d_men'] },
  { v: 138.38, type: 'break', ch: 2, title: 'ТУКО' },
  { v: 190.82, type: 'break', ch: 3, title: 'ЛИФТ' },
  { v: 244.38, type: 'break', ch: 4, title: 'ЭЛЬ-ПАСО' },
  { v: 301.84, type: 'break', ch: 5, title: 'ФУРГОН' },
  { v: 323.27, v1: 327.39, type: 'cut', dlg: ['d_fakecall'] },
  { v: 361.75, v1: 361.75, type: 'cut', dlg: ['d_gusname'] },
  { v: 361.77, type: 'break', ch: 6, title: 'ОДНА МИНУТА' },
  { v: 369.77, v1: 376.79, type: 'cut', dlg: ['d_minute'] },
  { v: 426.80, type: 'break', ch: 7, title: 'МИНЕРАЛЫ' },
  { v: 485.97, v1: 490.84, type: 'cut', dlg: ['d_minerals'] },
  { v: 500.23, type: 'break', ch: 8, title: 'W.W.' },
  { v: 518.42, v1: 527.10, type: 'cut', dlg: ['d_ww'] },
  { v: 556.87, v1: 559.52, type: 'cut', dlg: ['d_genius'] },
  { v: 566.00, type: 'break', ch: 9, title: 'ЦЫПЛЁНОК' },
  { v: 621.30, type: 'break', ch: 10, title: 'ТУАЛЕТ' },
  { v: 664.85, v1: 664.85, type: 'cut', dlg: ['d_toilet'] },
  { v: 682.34, type: 'break', ch: 11, title: 'ГАРАЖ' },
  { v: 706.72, v1: 712.00, type: 'cut', dlg: ['d_garage1'] },
  { v: 720.66, v1: 722.89, type: 'cut', dlg: ['d_garage2'] },
  { v: 731.85, type: 'break', ch: 12, title: 'КАРЬЕРА' },
  { v: 754.53, v1: 754.53, type: 'cut', dlg: ['d_career'] },
  { v: 783.72, v1: 783.72, type: 'cut', dlg: ['d_dvd'] },
  { v: 801.41, type: 'break', ch: 13, title: 'ТОХАДЖИЛИ' },
  { v: 824.22, v1: 828.10, type: 'cut', dlg: ['d_gotyou', 'd_love'] },
  { v: 863.80, type: 'break', ch: 14, title: 'ОЗИМАНДИЯ' },
  { v: 884.07, v1: 893.86, type: 'cut', dlg: ['d_tenmin'] },
  { v: 898.51, v1: 902.80, type: 'cut', dlg: ['d_asac'] },
  { v: 936.18, type: 'break', ch: 15, title: 'ВЕРДИКТ' },
  { v: 997.50, v1: 997.50, type: 'cut', dlg: ['d_coords'] },
  { v: 1005.30, type: 'break', ch: 16, title: '' }
];
const DLG = {"d_men": 8.2, "d_minute": 11.4, "d_fakecall": 14.3, "d_gusname": 12.3, "d_minerals": 4.3, "d_ww": 19.3, "d_genius": 10.2, "d_toilet": 24.9, "d_garage1": 6.7, "d_garage2": 16.2, "d_career": 20.9, "d_dvd": 18.6, "d_gotyou": 9.1, "d_love": 11.8, "d_tenmin": 17.5, "d_asac": 24.42, "d_coords": 15.2};
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
