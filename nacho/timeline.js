// Nacho timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.2;                         // cold open before the first word
const EVENTS = [
  { v: 25.10, v1: 25.10, type: 'cut', dlg: ['d_saul2'] },
  { v: 48.55, type: 'break', ch: 1, title: 'НАПАРНИК' },
  { v: 104.43, type: 'break', ch: 2, title: 'ОТЕЦ' },
  { v: 126.58, v1: 126.58, type: 'cut', dlg: ['d_police'] },
  { v: 141.15, type: 'break', ch: 3, title: 'ТУКО' },
  { v: 167.69, v1: 167.69, type: 'cut', dlg: ['d_mike'] },
  { v: 180.97, type: 'break', ch: 4, title: 'ГЕКТОР' },
  { v: 209.42, type: 'break', ch: 5, title: 'ТАБЛЕТКИ' },
  { v: 261.10, type: 'break', ch: 6, title: 'ПОВОДОК' },
  { v: 302.40, type: 'break', ch: 7, title: 'ЛАЛО' },
  { v: 341.52, v1: 341.52, type: 'cut', dlg: ['d_out'] },
  { v: 346.43, type: 'break', ch: 8, title: 'ВОРОТА' },
  { v: 381.51, v1: 381.51, type: 'cut', dlg: ['d_night', 'd_toast'] },
  { v: 391.93, type: 'break', ch: 9, title: 'БЕГЛЕЦ' },
  { v: 413.93, v1: 413.93, type: 'cut', dlg: ['d_call1', 'd_call2'] },
  { v: 430.14, type: 'break', ch: 10, title: 'ПРИЗНАНИЕ' },
  { v: 450.11, v1: 450.11, type: 'cut', dlg: ['d_conf'] },
  { v: 478.80, type: 'break', ch: 11, title: 'ВЕРДИКТ' },
  { v: 538.04, type: 'break', ch: 12, title: '' }
];
const DLG = {"d_saul2": 2.96, "d_police": 9.1, "d_mike": 3.6, "d_out": 13.7, "d_night": 17.0, "d_toast": 5.2, "d_call1": 14.5, "d_call2": 11.1, "d_conf": 7.5};
const PAUSE = 1.8, GAP = .35, VOICE_END = 562.97, TAIL = 5.0;
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
