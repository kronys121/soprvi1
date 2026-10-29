// 03 · ДЖЕЙН
CH_V0 = 151.7;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'ДЖЕЙН', T_START);
  hold(T_START, Wt('втором') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Jane: the landlady next door, draws, clean; next to her he looks like a normal guy
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .95);
  pw('jjane', Wt('влюбляется') - .3, { x: A1[0] - 360, y: A1[1] - 20, w: 820, rot: -.015, order: 100, off: 0, caption: capt('ДЖЕЙН МАРГОЛИС', Wt('марголис')), capSize: 28 });
  const jn = card({ x: A1[0] + 560, y: A1[1] - 20, w: 480, h: 420, rot: .03, order: 110, lined: true, tIn: Wt('рисует') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  jn.cl = [checkLine('СОСЕДКА', Wt('соседку') + .1, 'v', -190, -120), checkLine('РИСУЕТ', Wt('рисует') + .1, 'v', -190, -40), checkLine('В ЗАВЯЗКЕ', Wt('завязке') + .1, 'v', -190, 40)];
  card({ x: A1[0] - 360, y: A1[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('НОРМАЛЬНАЯ ЖИЗНЬ', Wt('нормальной') - .2, .5, { size: 60, rot: -.04 })] });
  goTo(A1, Wt('втором') + .3, Wt('джесси') + .1, A1[0] - 860, A1[1] - 400);
  hold(Wt('джесси') + .1, Wt('квартиру') + .3, A1[0] - 360, A1[1] - 20, 1.08, -.015, { dz: .05 });
  camKey(Wt('рисует') + .2, A1[0] + 520, A1[1] - 20, 1.05, .015); camKey(Wt('впервые') + .2, A1[0] - 200, A1[1] + 120, .92, 0);

  // S2 · heroin, dreams of leaving; Walter in the bedroom; Jane chokes; he does nothing
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .9);
  pw('jjane3', Wt('героин') - .5, { x: A2[0] - 600, y: A2[1] - 180, w: 520, rot: -.05, order: 200, off: 1, caption: capt('ГЕРОИН', Wt('героин')), capSize: 26 });
  tag({ x: A2[0] - 600, y: A2[1] + 180, w: 420, rot: .04, label: 'МЕЧТА: УЕХАТЬ', tIn: Wt('уехать') - .1, order: 210, size: 38 });
  const jd = pw('janedie', Wt('спальню') - .3, { x: A2[0] + 260, y: A2[1] + 20, w: 860, rot: .015, order: 220, off: 0 });
  jd.greyAt = t => eio(prog(t, Wt('рвотой'), Wt('рвотой') + 1.0)) * .85;
  focus(Wt('захлёбывается') - .3, Wt('делает') + .6, [jd], .9);
  jd.stamps = [stamp('НИЧЕГО НЕ СДЕЛАЛ', Wt('делает') - .1, { x: 0, y: 80, size: 54, rot: -.07, shake: 16 })];
  sfx('heart', Wt('захлёбывается') - .2); sfx('heart', Wt('стоит') + .1);
  goTo(A2, Wt('жизни') + .4, Wt('вместе') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('вместе') + .1, Wt('уехать') + .4, A2[0] - 580, A2[1] - 20, 1.08, -.02, { dz: .05 });
  camKey(Wt('спальню') + .2, A2[0] + 240, A2[1] + 20, 1.0, .01); camKey(Wt('захлёбывается') + .3, A2[0] + 260, A2[1], 1.35, .015);
  camKey(Wt('делает') + .5, A2[0] + 260, A2[1] + 40, 1.2, .01);

  // S3 · morning: he finds her; he thinks he killed her; Walter lets him think so and hugs him
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('jfind', Wt('утром') - .3, { x: A3[0] - 520, y: A3[1] - 100, w: 640, rot: -.03, order: 300, off: 1 });
  const bl = typedCard({ x: A3[0] - 520, y: A3[1] + 300, w: 620, h: 210, rot: .02, order: 310, tIn: Wt('уверен') - .3, dur: .3, enter: 'slide', dx: -400, dy: 300 },
    [[typed('«это я её убил»', Wt('убил') - .3, .04), -280, -20, `400 italic 36px "DejaVu Serif"`], [typed('принёс · не уследил', Wt('принёс'), .035), -280, 50, `700 30px ${MONO}`, RED]]);
  const hg = pw('jhug', Wt('обнимает') - .4, { x: A3[0] + 420, y: A3[1] + 20, w: 700, rot: .02, order: 320, off: 4 });
  hg.stamps = [stamp('ВИНА УОЛТЕРА', Wt('вина') + .1, { x: 0, y: 70, size: 60, rot: -.07, shake: 16 })];
  tag({ x: A3[0] + 700, y: A3[1] - 290, w: 380, rot: .06, label: '№ 1', tIn: Wt('первый') + .05, order: 330, size: 44 });
  goTo(A3, Wt('делает') + .5, Wt('утром') + .1, A3[0] - 860, A3[1] - 420);
  hold(Wt('утром') + .1, Wt('там') + .3, A3[0] - 500, A3[1] - 80, 1.1, -.015, { dz: .05 });
  camKey(Wt('уверен') + .2, A3[0] - 480, A3[1] + 200, 1.05, -.01); camKey(Wt('обнимает') + .2, A3[0] + 400, A3[1] + 20, 1.05, .01);
  camKey(Wt('последний') + .3, A3[0] + 420, A3[1] - 40, 1.15, .015);

  // S4 · Jane's father, the air traffic controller: two planes; one death becomes ~150; rehab
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  pw('grief', Wt('отец') - .3, { x: A4[0] - 600, y: A4[1] - 160, w: 500, rot: -.05, order: 400, caption: capt('ОТЕЦ ДЖЕЙН · ДИСПЕТЧЕР', Wt('авиадиспетчером')), capSize: 20 });
  pw('planes', Wt('сталкиваются') - .5, { x: A4[0] + 40, y: A4[1] - 160, w: 560, rot: .04, order: 410 });
  sfx('boom', Wt('самолёта')); shake(Wt('самолёта'), 20);
  const ct = card({ x: A4[0] + 640, y: A4[1] + 100, w: 440, h: 300, rot: -.03, order: 420, lined: false, tIn: Wt('одна') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t) => { const p = eio(prog(t, Wt('превращается'), Wt('сотни') + .3)), n = Math.round(1 + 166 * p);
      g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'center'; g.fillText('ЖЕРТВЫ', 0, -80); g.fillStyle = RED; g.font = `800 110px ${SANS}`; g.fillText(String(n), 0, 50); } });
  for (let k = 0; k < 10; k++) sfx('tick', Wt('превращается') + k * .14);
  pw('jgrief', Wt('клинику') - .4, { x: A4[0] - 200, y: A4[1] + 330, w: 520, rot: -.03, order: 430, off: 1, caption: capt('ДЖЕССИ — В КЛИНИКУ', Wt('клинику')), capSize: 20 });
  goTo(A4, Wt('последний') + .5, Wt('отец') + .1, A4[0] - 860, A4[1] - 440);
  camKey(Wt('отец') + .1, A4[0] - 580, A4[1] - 150, 1.1, -.02); camKey(Wt('сталкиваются') - .1, A4[0] + 20, A4[1] - 150, 1.1, .01);
  camKey(Wt('превращается') + .1, A4[0] + 600, A4[1] + 100, 1.1, .015); camKey(Wt('клинику') + .3, A4[0] - 180, A4[1] + 300, 1.05, -.01);
  camKey(T_END, A4[0] - 160, A4[1] + 320, 1.15, -.015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
