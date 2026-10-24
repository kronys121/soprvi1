// Walter timeline: voice time -> film time. Breaks add a 1 s pause before a chapter divider;
// cuts remove a narrated quote and insert the original (Russian dub) dialogue clip instead.
const INTRO = 1.6;                         // cold open before the first word
const EVENTS = [
  { v: 48.33, type: 'break', ch: 1, title: 'УЧИТЕЛЬ' },
  { v: 116.30, type: 'break', ch: 2, title: 'ХАЙЗЕНБЕРГ' },
  { v: 185.90, type: 'break', ch: 3, title: 'СЕМЬЯ' },
  { v: 250.50, type: 'break', ch: 4, title: 'ПАРТНЁР' },
  { v: 318.17, type: 'break', ch: 5, title: 'ИМПЕРИЯ' },
  { v: 380.30, type: 'break', ch: 6, title: 'СКАЖИ МОЁ ИМЯ' },
  { v: 387.80, v1: 394.10, type: 'cut', dlg: ['d_knocks'] },
  { v: 400.12, v1: 404.98, type: 'cut', dlg: ['d_say'] },
  { v: 440.10, type: 'break', ch: 7, title: 'ОЗИМАНДИЯ' },
  { v: 487.08, v1: 490.95, type: 'cut', dlg: ['d_jane1', 'd_jane2'] },
  { v: 510.56, type: 'break', ch: 8, title: 'ПРИЗНАНИЕ' },
  { v: 519.92, v1: 522.15, type: 'cut', dlg: ['d_son1', 'd_son2'] },
  { v: 535.85, v1: 543.75, type: 'cut', dlg: ['d_forme'] },
  { v: 572.37, type: 'break', ch: 9, title: 'ВЕРДИКТ' },
  { v: 630.09, type: 'break', ch: 10, title: '' }
];
const DLG = { d_knocks: 10.5, d_say: 14.8, d_jane1: 3.1, d_jane2: 5.7, d_son1: 3.7, d_son2: 1.9, d_forme: 16.2 };
const PAUSE = 1.0, GAP = .35, VOICE_END = 645.62, TAIL = 5.0;
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
