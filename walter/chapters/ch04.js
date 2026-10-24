// 04 · ПАРТНЁР
CH_V0 = 250.4;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'ПАРТНЁР', T_START);
  hold(T_START, Wt('если') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Jesse = conscience; despise / use / save / use
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  pw('jesse', Wt('совесть') - .3, { x: A1[0] - 360, y: A1[1] - 20, w: 700, rot: -.02, order: 100, caption: capt('ДЖЕССИ', Wt('джесси')), capSize: 30 });
  const cyc = card({ x: A1[0] + 560, y: A1[1] + 20, w: 520, h: 560, rot: .03, order: 110, lined: true, tIn: Wt('мальчишка') - .2, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { drawChecks(g, t, it.cl, `700 34px ${MONO}`); } });
  cyc.cl = [checkLine('ПРЕЗИРАЕТ', Wt('презирает') + .05, 'v', -220, -180), checkLine('ИСПОЛЬЗУЕТ', Wt('использует') + .05, 'v', -220, -80),
    checkLine('СПАСАЕТ', Wt('спасает') + .05, 'v', -220, 20), checkLine('ИСПОЛЬЗУЕТ', Wt('использует', 2) + .05, 'v', -220, 120)];
  card({ x: A1[0] - 360, y: A1[1] + 360, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('СОВЕСТЬ', Wt('совесть') + .1, .45, { size: 70, rot: -.05 })] });
  goTo(A1, Wt('если') + .3, Wt('истории') + .1, A1[0] - 700, A1[1] - 340);
  hold(Wt('истории') + .1, Wt('пинкман') + .5, A1[0] - 330, A1[1] + 40, 1.08, -.015, { dz: .06 });
  camKey(Wt('мальчишка') + .3, A1[0] + 520, A1[1] + 20, 1.1, .015); camKey(Wt('использует', 2) + .6, A1[0] + 520, A1[1] + 60, 1.18, .02);

  // S2 · Jane: love, relapse, the night
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .9);
  pw('jesselove', Wt('влюбляется') - .2, { x: A2[0] - 560, y: A2[1] - 120, w: 560, rot: -.05, order: 200, caption: capt('ДЖЕЙН МАРГОЛИС', Wt('джейн')), capSize: 24 });
  tag({ x: A2[0] - 560, y: A2[1] + 250, w: 380, rot: .04, label: 'СРЫВ', tIn: Wt('срываются') + .05, order: 210, size: 44 });
  const jd = pw('janedie', Wt('однажды') - .1, { x: A2[0] + 300, y: A2[1] + 20, w: 860, rot: .015, order: 220, off: 0 });
  jd.greyAt = t => eio(prog(t, Wt('умирает') - .2, Wt('умирает') + 1.0)) * .85;
  focus(Wt('захлёбывается') - .3, Wt('умирает') + 1.2, [jd], .9);
  const bok = card({ x: A2[0] + 300, y: A2[1] + 460, w: 760, h: 130, rot: -.01, order: 230, lined: false, tIn: Wt('мог') - .2, dur: .25, enter: 'slide', dx: 0, dy: 300,
    text: (g, t) => drawChecks(g, t, bok.cl, `700 40px ${MONO}`) });
  bok.cl = [checkLine('ПЕРЕВЕРНУТЬ НА БОК', Wt('останавливается') + .1, 'x', -320, 0)];
  sfx('heart', Wt('захлёбывается') - .2); sfx('heart', Wt('шаг') + .1); sfx('heart', Wt('останавливается') + .3);
  goTo(A2, Wt('использует', 2) + .6, Wt('=во') + .2, A2[0] - 860, A2[1] - 400);
  hold(Wt('=во') + .2, Wt('срываются') + .5, A2[0] - 540, A2[1] - 20, 1.15, -.02, { dz: .05 });
  camKey(Wt('однажды') + .3, A2[0] + 260, A2[1] + 40, 1.0, .01); camKey(Wt('захлёбывается') + .3, A2[0] + 300, A2[1] - 30, 1.35, .015);
  camKey(Wt('умирает') + .8, A2[0] + 300, A2[1] + 40, 1.45, .02); camKey(Wt('шаг'), A2[0] + 300, A2[1] + 300, 1.05, 0);

  // S3 · "for the family" stops working; he chose the convenient outcome
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, 1);
  const ex = typedCard({ x: A3[0], y: A3[1], w: 900, h: 480, rot: -.015, order: 300, tIn: Wt('=это', 2) - .2, dur: .3, enter: 'slide', dx: 0, dy: 500 },
    [[typed('ОПРАВДАНИЕ:', Wt('оправдание'), .04), -400, -90, `700 38px ${MONO}`], [typed('«РАДИ СЕМЬИ»', Wt('ради'), .05), -400, 10, `800 56px ${SANS}`],
     [typed('Джейн угрожала → не защита', Wt('угрожала'), .03, { silent: true }), -400, 110, `400 30px ${MONO}`], [typed('→ удобный исход', Wt('удобный'), .03), -400, 160, `700 32px ${MONO}`, RED]]);
  ex.stamps = [stamp('НЕ РАБОТАЕТ', Wt('работает'), { x: 220, y: -120, size: 64, rot: -.08, shake: 18 })];
  goTo(A3, Wt('шаг') + 1.2, Wt('=это', 2) + .2, A3[0] - 450, A3[1] - 350);
  hold(Wt('=это', 2) + .2, Wt('исход') + .5, A3[0], A3[1] + 20, 1.15, .01, { dz: .08 });

  // S4 · grieving father, planes collide, pink bear in the pool
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2200, 1);
  pw('grief', Wt('отец') - .2, { x: A4[0] - 620, y: A4[1] - 120, w: 520, rot: -.05, order: 400, caption: capt('ОТЕЦ ДЖЕЙН · ДИСПЕТЧЕР', Wt('авиадиспетчер')), capSize: 20 });
  pw('planes', Wt('сталкиваются') - .4, { x: A4[0] - 20, y: A4[1] - 200, w: 560, rot: .04, order: 401 });
  sfx('boom', Wt('самолёта')); shake(Wt('самолёта'), 20);
  const bear = pw('bearpool', Wt('бассейн') - .3, { x: A4[0] + 300, y: A4[1] + 260, w: 820, rot: -.02, order: 410, off: 3.5 });
  sfx('splash', Wt('падает') + .1);
  card({ x: A4[0] - 300, y: A4[1] + 560, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('ПОСЛЕДСТВИЯ > УОЛТЕР', Wt('последствия'), .7, { size: 54, rot: -.04 })] });
  goTo(A4, Wt('исход') + .5, Wt('через') + .2, A4[0] - 900, A4[1] - 400);
  camKey(Wt('через') + .2, A4[0] - 560, A4[1] - 100, 1.15, -.02); camKey(Wt('сталкиваются') - .1, A4[0] - 40, A4[1] - 160, 1.15, .01);
  camKey(Wt('бассейн') + .1, A4[0] + 280, A4[1] + 250, 1.1, -.01); camKey(Wt('серий') + .4, A4[0] + 320, A4[1] + 240, 1.2, -.015);
  camKey(Wt('последствия') + .1, A4[0] - 60, A4[1] + 300, .82, 0); camKey(T_END, A4[0] - 80, A4[1] + 340, .9, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
