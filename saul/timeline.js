// Saul timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 63.55, type: 'break', ch: 1, title: 'ВОЛКИ И ОВЦЫ' },
  { v: 123.25, type: 'break', ch: 2, title: 'СКОЛЬЗКИЙ ДЖИММИ' },
  { v: 179.60, type: 'break', ch: 3, title: 'БРАТ' },
  { v: 265.50, type: 'break', ch: 4, title: 'ПОЧТОВАЯ КОМНАТА' },
  { v: 339.36, type: 'break', ch: 5, title: 'КИМ' },
  { v: 411.07, type: 'break', ch: 6, title: '1261' },
  { v: 499.48, type: 'break', ch: 7, title: 'ФОНАРЬ' },
  { v: 563.57, type: 'break', ch: 8, title: 'ВСЁ ХОРОШО' },
  { v: 636.82, type: 'break', ch: 9, title: 'ПУСТЫНЯ' },
  { v: 690.65, type: 'break', ch: 10, title: 'ХОВАРД' },
  { v: 785.60, type: 'break', ch: 11, title: 'ДЖИН' },
  { v: 842.81, type: 'break', ch: 12, title: 'МАШИНА ВРЕМЕНИ' },
  { v: 894.63, type: 'break', ch: 13, title: '86 ЛЕТ' },
  { v: 982.60, type: 'break', ch: 14, title: 'ВЕРДИКТ' },
  { v: 1068.90, type: 'break', ch: 15, title: '' }
];
const DLG = {};
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
