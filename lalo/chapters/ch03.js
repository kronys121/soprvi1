// 03 · КОЛОКОЛЬЧИК — the bell for Hector
CH_V0 = 146.65;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'КОЛОКОЛЬЧИК', T_START);
  hold(T_START, Wt('приезжает') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the nursing home; great Hector can't speak, moves one finger
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('casa', Wt('дом') - .5, { x: A1[0] - 600, y: A1[1] - 140, w: 460, rot: -.05, order: 100, off: 1, caption: capt('ДОМ ПРЕСТАРЕЛЫХ', Wt('престарелых') - .2), capSize: 20 });
  pw('lalohector', Wt('великий') - .5, { x: A1[0] + 100, y: A1[1] - 40, w: 680, rot: .015, order: 110, off: 2 });
  const hf = typedCard({ x: A1[0] - 600, y: A1[1] + 270, w: 460, h: 160, rot: .03, order: 105, tIn: Wt('говорить') - .4, dur: .3, enter: 'slide', dx: -300, dy: 200 },
    [[typed('не говорит', Wt('говорить') - .2, .04), -190, -20, `700 28px ${MONO}`], [typed('один палец', Wt('пальцем') - .3, .04), -190, 35, `800 32px ${SANS}`, RED]]);
  goTo(A1, Wt('приезжает') + .2, Wt('дом') - .3, A1[0] - 860, A1[1] - 460);
  camKey(Wt('дом') + .1, A1[0] - 600, A1[1] - 120, 1.05, -.015); camKey(Wt('великий') + .1, A1[0] + 100, A1[1] - 20, 1.02, .01);
  camKey(Wt('пальцем') - .2, A1[0] - 560, A1[1] + 200, 1.0, -.01);

  // S2 · hangs a desk bell from an old hotel on his wheelchair; a story only the two of them know
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const bg = pw('bellgift', Wt('вешает') - .5, { x: A2[0] - 300, y: A2[1] - 60, w: 760, rot: -.015, order: 200, off: 1, caption: capt('КОЛОКОЛЬЧИК ИЗ СТАРОЙ ГОСТИНИЦЫ', Wt('гостиницы') - .3), capSize: 22 });
  card({ x: A2[0] + 620, y: A2[1] + 160, w: 1, h: 1, shadow: 0, lit: false, order: 210, tIn: 0, scrawls: [scrawl('история для двоих', Wt('историей') - .2, .7, { size: 46, rot: -.05 })] });
  sfx('bell', Wt('звонок') + .1);
  goTo(A2, Wt('пальцем') + .6, Wt('вешает') - .2, A2[0] - 860, A2[1] - 440);
  hold(Wt('вешает') - .2, Wt('двое') + .3, A2[0] - 200, A2[1] - 20, 1.02, -.01, { dz: .06 });

  // S3 · the same bell he rings for the last time in Breaking Bad, blowing himself up with Gus; the gift outlives Lalo
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .95);
  pw('bellring', Wt('тот') - .5, { x: A3[0] - 400, y: A3[1] - 60, w: 640, rot: -.02, order: 300, off: 1 });
  const bb = card({ x: A3[0] + 520, y: A3[1] - 80, w: 480, h: 360, rot: .03, order: 310, color: '#f3efe2', lined: false, tIn: Wt('последний') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -110, `700 22px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, -40, `800 38px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 30, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.d, t, 0, 120, `800 30px ${SANS}`, RED, 'center'); } });
  bb.a = typed('«ВО ВСЕ ТЯЖКИЕ» · 4×13', Wt('последний') - .2, .03); bb.b = typed('ПОСЛЕДНИЙ ЗВОНОК', Wt('позвонит') - .3, .04); bb.c = typed('взрыв вместе с Гусом', Wt('взорвёт') - .2, .03); bb.d = typed('подарок пережил Лало', Wt('переживёт') - .3, .03);
  shake(Wt('взорвёт') + .2, 12); sfx('hitlow', Wt('взорвёт') + .2);
  goTo(A3, Wt('двое') + .6, Wt('тот') - .2, A3[0] - 860, A3[1] - 460);
  camKey(Wt('тот') + .1, A3[0] - 400, A3[1] - 40, 1.05, -.015); camKey(Wt('последний') + .2, A3[0] + 500, A3[1] - 60, 1.05, .015); camKey(Wt('переживёт') + .5, A3[0] + 500, A3[1] - 20, 1.12, .015);

  // S4 · the bell is a language: Hector gives orders again; Lalo gave his uncle a voice
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('hectorface', Wt('язык') - .5, { x: A4[0] - 420, y: A4[1] - 80, w: 560, rot: -.02, order: 400 });
  const lg = typedCard({ x: A4[0] + 500, y: A4[1] - 60, w: 460, h: 260, rot: .03, order: 410, tIn: Wt('язык') - .2, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('ЗВОНОК = ЯЗЫК', Wt('язык'), .04), 0, -60, `800 34px ${SANS}`, INK, 'center'], [typed('снова отдаёт приказы', Wt('приказы') - .5, .03), 0, 10, `700 24px ${MONO}`, INK, 'center'], [typed('ВЕРНУЛ ДЯДЕ ГОЛОС', Wt('голос') - .5, .04), 0, 80, `800 30px ${SANS}`, RED, 'center']]);
  goTo(A4, Wt('лало', 3) + .4, Wt('язык') - .4, A4[0] - 860, A4[1] - 460);
  camKey(Wt('язык'), A4[0] - 300, A4[1] - 60, 1.0, -.01); camKey(Wt('приказы'), A4[0] + 480, A4[1] - 40, 1.08, .015);

  // S5 · Lalo truly loves Hector: not fear, not service — love; family
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('lalohector', Wt('любит') - .5, { x: A5[0] - 360, y: A5[1] - 80, w: 680, rot: -.015, order: 500, off: 6 });
  const lv = card({ x: A5[0] + 580, y: A5[1] - 40, w: 440, h: 300, rot: .03, order: 510, lined: true, tIn: Wt('боится') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  lv.cl = [checkLine('БОИТСЯ', Wt('боится') + .1, 'x', -170, -80), checkLine('СЛУЖИТ', Wt('служит') + .1, 'x', -170, 0), checkLine('ЛЮБИТ', Wt('любит', 2) + .1, 'v', -170, 80)];
  card({ x: A5[0] + 100, y: A5[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, scrawls: [scrawl('родной человек', Wt('родной') - .2, .6, { size: 52, rot: -.04 })] });
  goTo(A5, Wt('голос') + .5, Wt('вещь') - .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('вещь') - .1, Wt('боится') - .2, A5[0] - 360, A5[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('любит', 2) + .2, A5[0] + 560, A5[1] - 20, 1.08, .015); camKey(Wt('родной') + .2, A5[0] + 100, A5[1] + 200, .92, 0); camKey(T_END, A5[0] + 100, A5[1] + 220, 1.0, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
