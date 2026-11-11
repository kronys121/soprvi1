// 30-second re-edit sample of the Lalo cold open: voice 0..19.30, two tight dub pieces, then "Кто такой Лало?"
const INTRO = .6, VCUT = 19.30, VEND = 20.62;
const TA = 20.3, DA = 2.96, TB = TA + DA, DB = 4.20, TK = TB + DB + .12;
const offAt = v => v < VCUT ? INTRO : TK - VCUT;
const FILM_END = 30.6;
const chRange = k => [0, FILM_END];
const DLGT = { x_sA: TA, x_sB: TB };
const PIECES = [{ v0: 0, v1: VCUT, off: INTRO }, { v0: VCUT, v1: VEND, off: TK - VCUT }];
if (typeof module !== 'undefined') module.exports = { PIECES, DLGT, FILM_END, chRange, offAt, TA, TB, TK, DA, DB };
