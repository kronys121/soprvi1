// 00 · cold open (BB 2x08: Saul at the grave, "Lalo didn't send you?") + intro + dossier
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · 2009, Breaking Bad season 2: Walt and Jesse take Saul to the desert, a dug grave
  const A0 = [0, 0]; lamp(A0[0], A0[1] - 200, 2200, 1);
  const yr = card({ x: A0[0] - 640, y: A0[1] - 280, w: 460, h: 170, rot: -.04, order: 90, color: '#f3efe2', lined: false, tIn: .1, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `800 56px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 46, `700 24px ${MONO}`, '#666', 'center'); } });
  yr.a = typed('2009', Wt('две'), .08); yr.b = typed('«ВО ВСЕ ТЯЖКИЕ» · 2×08', Wt('второй') - .1, .03);
  pw('saulsign', Wt('сола') - .5, { x: A0[0] - 640, y: A0[1] + 120, w: 440, rot: .03, order: 100, off: 1, caption: capt('АДВОКАТ СОЛ ГУДМАН', Wt('гудмана') - .2), capSize: 18 });
  pw('saulmask', Wt('увозят') - .4, { x: A0[0] - 60, y: A0[1] - 60, w: 520, rot: -.02, order: 110, off: 1 });
  const gr = pw('saulgrave', Wt('ямой') - .5, { x: A0[0] + 560, y: A0[1] + 20, w: 560, rot: .03, order: 120, off: 1, caption: capt('ЕГО МОГИЛА?', Wt('могила') - .3), capSize: 22 });
  const q = card({ x: A0[0] + 40, y: A0[1] + 400, w: 900, h: 150, rot: -.015, order: 130, lined: false, tIn: Wt('кричит') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -8, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 44, `700 26px ${MONO}`, RED, 'center'); } });
  q.a = typed('«Я НИ ПРИ ЧЁМ! ЭТО ВСЁ ИГНАСИО!»', Wt('ни') - .1, .03); q.b = typed('…а потом: «вас не Лало прислал?»', Wt('спрашивает') - .1, .03);
  camKey(0, A0[0] - 620, A0[1] - 160, 1.05, -.015); camKey(Wt('сола') + .2, A0[0] - 620, A0[1] + 80, 1.08, -.01);
  camKey(Wt('увозят') + .1, A0[0] - 60, A0[1] - 40, 1.02, .01); camKey(Wt('ямой') + .1, A0[0] + 540, A0[1] + 20, 1.05, .015);
  camKey(Wt('кричит') + .2, A0[0] + 40, A0[1] + 300, .92, 0); camKey(Wt('прислал') + .2, A0[0] + 40, A0[1] + 340, .98, 0);

  // S0b · original scene (dub)
  const A0b = [2600, 0]; lamp(A0b[0], A0b[1] - 200, 1900, .9);
  dlgShot('d_saul', A0b[0], A0b[1] - 20, { w: 940, order: 150 });
  goTo(A0b, Wt('прислал') + .4, DLGT.d_saul - .1, A0b[0] - 860, A0b[1] - 460);
  camKey(DLGT.d_saul + .1, A0b[0], A0b[1] - 20, 1.08, 0); camKey(DLGT.d_saul + 19.6, A0b[0], A0b[1] + 30, 1.18, .01);

  // S1 · who is Lalo? never explained; nine years; then in Better Call Saul he appears — smiling, charming, fun
  const A1 = [5200, 0]; lamp(A1[0], A1[1] - 200, 2100, 1);
  const wq = card({ x: A1[0] - 520, y: A1[1] - 180, w: 620, h: 300, rot: -.03, order: 200, color: '#f3efe2', lined: false, tIn: Wt('кто') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -40, `800 60px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 50, `700 26px ${MONO}`, '#777', 'center'); } });
  wq.a = typed('КТО ТАКОЙ ЛАЛО?', Wt('кто') - .1, .05); wq.b = typed('ответа нет', Wt('объяснил') - .3, .05);
  card({ x: A1[0] - 520, y: A1[1] + 170, w: 1, h: 1, shadow: 0, lit: false, order: 205, tIn: 0, scrawls: [scrawl('9 лет тишины', Wt('девять') - .2, .6, { size: 50, rot: -.05 })] });
  const ls = pw('lalosmile', Wt('появляется') - .5, { x: A1[0] + 360, y: A1[1] - 60, w: 700, rot: .02, order: 210, off: 1, caption: capt('«ЛУЧШЕ ЗВОНИТЕ СОЛУ»', Wt('звоните') - .2), capSize: 22 });
  const ad = typedCard({ x: A1[0] + 360, y: A1[1] + 360, w: 700, h: 110, rot: -.02, order: 220, tIn: Wt('улыбчивый') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('УЛЫБЧИВЫЙ · ОБАЯТЕЛЬНЫЙ · ВЕСЁЛЫЙ', Wt('улыбчивый') - .1, .03), 0, 10, `800 28px ${SANS}`, INK, 'center']]);
  goTo(A1, DLGT.d_saul + 19.9, Wt('кто') - .2, A1[0] - 860, A1[1] - 460);
  hold(Wt('кто') - .2, Wt('лет') + .4, A1[0] - 520, A1[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('появляется') + .2, A1[0] + 360, A1[1] - 40, 1.0, .015); camKey(Wt('улыбчивый') + .3, A1[0] + 360, A1[1] + 140, .95, .01);

  // S2 · jokes, gifts, charm — and maybe the most dangerous man; one of few to outplay Gus; closer than anyone before Walter
  const A2 = [7800, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  pw('lalonacho', Wt('шутит') - .4, { x: A2[0] - 600, y: A2[1] - 140, w: 460, rot: -.04, order: 300, off: 1, caption: capt('ШУТИТ', Wt('шутит')), capSize: 20 });
  pw('bellring', Wt('дарит') - .4, { x: A2[0] - 600, y: A2[1] + 240, w: 460, rot: .03, order: 305, off: 1, caption: capt('ДАРИТ ПОДАРКИ', Wt('подарки') - .2), capSize: 20 });
  const dg = pw('lalogrin', Wt('опасный') - .8, { x: A2[0] + 60, y: A2[1] - 40, w: 560, rot: .02, order: 310 });
  dg.stamps = [stamp('САМЫЙ ОПАСНЫЙ', Wt('опасный') + .1, { x: 0, y: 140, size: 54, rot: -.07, shake: 14 })];
  pw('gusface', Wt('переиграть') - .5, { x: A2[0] + 640, y: A2[1] - 120, w: 400, rot: .05, order: 320, caption: capt('ПЕРЕИГРАЛ ГУСА', Wt('фринга') - .2), capSize: 20 });
  pw('walthat', Wt('уолтера') - .5, { x: A2[0] + 640, y: A2[1] + 280, w: 360, rot: -.04, order: 325, caption: capt('…ДО УОЛТЕРА УАЙТА', Wt('уайта') - .3), capSize: 18 });
  goTo(A2, Wt('весёлый') + .4, Wt('шутит') - .3, A2[0] - 860, A2[1] - 460);
  camKey(Wt('шутит') + .1, A2[0] - 600, A2[1] - 120, 1.08, -.015); camKey(Wt('подарки'), A2[0] - 600, A2[1] + 220, 1.08, .01);
  camKey(Wt('опасный') - .4, A2[0] + 60, A2[1] - 20, 1.0, .01); camKey(Wt('переиграть') + .1, A2[0] + 620, A2[1] - 100, 1.08, .015);
  camKey(Wt('уолтера') + .1, A2[0] + 620, A2[1] + 260, 1.1, -.01);

  // S3 · the dossier on Eduardo Salamanca, "Lalo"; spoilers
  const A4 = [5200, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  mugBoard(A4, { still: 'laloface' }, typed('САЛАМАНКА, ЭДУАРДО', Wt('досье'), .045), typed('он же «Лало»', Wt('просто') + .3, .04, { silent: true }), { order: 500 });
  const st6 = card({ x: A4[0] + 300, y: A4[1] - 300, w: 1, h: 1, shadow: 0, order: 540, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('шести') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  goTo(A4, Wt('уайта') + .5, Wt('сегодня') + .1, A4[0] - 600, A4[1] - 420);
  hold(Wt('сегодня') + .1, Wt('дальше') - .2, A4[0], A4[1] - 40, 1.05, .01, { dz: .06 });
  camKey(Wt('дальше') + .3, A4[0] + 200, A4[1] - 60, 1.02, -.02); camKey(T_END, A4[0] + 260, A4[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6400, 900, 'cup', 1.0, 1.9], [9000, 700, 'pen', 1.2, 1.85, .4], [4000, 2600, 'smoke', 1.6, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
