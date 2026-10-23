// Voice placement on the final timeline. Each chapter after the first gets a 1 s pause for its divider.
// v0: voice time where the segment starts; off: final T = voice time + off.
const SEGS = [
  { v0: 0.0, off: 12.0, ch: 1, title: 'ПАЦИЕНТ' },
  { v0: 112.5, off: 13.5, ch: 2, title: 'СЫН' },
  { v0: 174.2, off: 14.5, ch: 3, title: 'ОТЕЦ' },
  { v0: 235.4, off: 15.5, ch: 4, title: 'МУЖ' },
  { v0: 270.3, off: 16.5, ch: 5, title: 'БОСС' },
  { v0: 332.4, off: 17.5, ch: 6, title: 'ХУЖЕ НЕГО' },
  { v0: 365.2, off: 18.5, ch: 7, title: 'АКТЁР' },
  { v0: 387.4, off: 19.5, ch: 8, title: 'МЕЛФИ' },
  { v0: 440.9, off: 20.5, ch: 9, title: 'ФИНАЛ' },
  { v0: 462.5, off: 21.5, ch: 10, title: 'ВЕРДИКТ' },
  { v0: 481.2, off: 22.5, ch: 11, title: '' }
];
const VOICE_END = 491.05, FILM_END = 516.5;
const offAt = v => { let o = SEGS[0].off; for (const s of SEGS) if (v >= s.v0 - 1e-6) o = s.off; return o; };
// chapter k occupies [start, end) on the final timeline; chapter 1 (patient) is the special 14.4-125 build
const chRange = k => {
  const i = SEGS.findIndex(s => s.ch === k), s = SEGS[i], n = SEGS[i + 1];
  const start = k === 2 ? 125.0 : s.v0 + SEGS[i - 1].off;
  const end = n ? n.v0 + s.off : FILM_END;
  return [start, end];
};
if (typeof module !== 'undefined') module.exports = { SEGS, VOICE_END, FILM_END, offAt, chRange };
