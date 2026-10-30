// Saul timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 63.55, type: 'break', ch: 1, title: 'ВОЛКИ И ОВЦЫ' },
  { v: 95.69, v1: 95.69, type: 'cut', dlg: ['d_wolves'] },
  { v: 123.25, type: 'break', ch: 2, title: 'СКОЛЬЗКИЙ ДЖИММИ' },
  { v: 179.60, type: 'break', ch: 3, title: 'БРАТ' },
  { v: 237.95, v1: 248.35, type: 'cut', dlg: ['d_chimp'] },
  { v: 265.50, type: 'break', ch: 4, title: 'ПОЧТОВАЯ КОМНАТА' },
  { v: 339.36, type: 'break', ch: 5, title: 'КИМ' },
  { v: 411.07, type: 'break', ch: 6, title: '1261' },
  { v: 493.38, v1: 493.38, type: 'cut', dlg: ['d_battery'] },
  { v: 499.48, type: 'break', ch: 7, title: 'ФОНАРЬ' },
  { v: 510.05, v1: 513.20, type: 'cut', dlg: ['d_meant'] },
  { v: 552.55, v1: 554.60, type: 'cut', dlg: ['d_cross'] },
  { v: 563.57, type: 'break', ch: 8, title: 'ВСЁ ХОРОШО' },
  { v: 590.95, v1: 590.95, type: 'cut', dlg: ['d_jazz'] },
  { v: 601.20, v1: 602.45, type: 'cut', dlg: ['d_sall'] },
  { v: 636.82, type: 'break', ch: 9, title: 'ПУСТЫНЯ' },
  { v: 663.95, v1: 663.95, type: 'cut', dlg: ['d_desert'] },
  { v: 690.65, type: 'break', ch: 10, title: 'ХОВАРД' },
  { v: 727.80, v1: 733.10, type: 'cut', dlg: ['d_howard'] },
  { v: 750.60, v1: 750.60, type: 'cut', dlg: ['d_poison'] },
  { v: 785.60, type: 'break', ch: 11, title: 'ДЖИН' },
  { v: 842.81, type: 'break', ch: 12, title: 'МАШИНА ВРЕМЕНИ' },
  { v: 868.31, v1: 868.31, type: 'cut', dlg: ['d_regret'] },
  { v: 884.50, v1: 889.70, type: 'cut', dlg: ['d_chucktrail'] },
  { v: 894.63, type: 'break', ch: 13, title: '86 ЛЕТ' },
  { v: 950.00, v1: 952.40, type: 'cut', dlg: ['d_name'] },
  { v: 982.60, type: 'break', ch: 14, title: 'ВЕРДИКТ' },
  { v: 1068.90, type: 'break', ch: 15, title: '' }
];
const DLG = {"d_chimp": 15.4, "d_wolves": 10.8, "d_desert": 19.8, "d_howard": 24.9, "d_poison": 11.7, "d_name": 4.8, "d_chucktrail": 10.8, "d_regret": 18.9, "d_battery": 26.2, "d_meant": 13.0, "d_cross": 3.7, "d_jazz": 12.2, "d_sall": 15.8};
const PAUSE = 1.0, GAP = .35, VOICE_END = 1091.74, TAIL = 5.0;
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
