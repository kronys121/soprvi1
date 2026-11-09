// 04 · НЕМЕЦ — Werner escapes; Fred at Travel Wire; the phone call; Werner dies
CH_V0 = 197.67;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'НЕМЕЦ', T_START);
  hold(T_START, Wt('копать') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Gus's people are nervous: the German engineer Werner Ziegler escaped — he builds a secret underground lab
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('wernerface', Wt('сбежал') - .5, { x: A1[0] - 560, y: A1[1] - 100, w: 460, rot: -.04, order: 100, caption: capt('ВЕРНЕР ЦИГЛЕР', Wt('циглер') - .2), capSize: 22 });
  const es = card({ x: A1[0] + 260, y: A1[1] - 60, w: 620, h: 380, rot: .02, order: 110, lined: true, tIn: Wt('инженер') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -270, -120, `800 36px ${SANS}`, RED); drawTyped(g, it.b, t, -270, -40, `700 26px ${MONO}`); drawTyped(g, it.c, t, -270, 20, `700 26px ${MONO}`); drawTyped(g, it.d, t, -270, 100, `800 30px ${SANS}`); } });
  es.a = typed('СБЕЖАЛ', Wt('сбежал') - .1, .06); es.b = typed('немецкий инженер', Wt('инженер') - .3, .03); es.c = typed('строит для Гуса:', Wt('строит') - .1, .03); es.d = typed('ПОДЗЕМНАЯ ЛАБОРАТОРИЯ', Wt('подземную') - .2, .03);
  goTo(A1, Wt('копать') + .2, Wt('замечает') - .1, A1[0] - 860, A1[1] - 460);
  camKey(Wt('сбежал') + .1, A1[0] - 540, A1[1] - 80, 1.05, -.015); camKey(Wt('инженер') + .2, A1[0] + 240, A1[1] - 40, 1.02, .015); camKey(Wt('лабораторию') + .3, A1[0] + 240, A1[1] + 20, 1.1, .015);

  // S2 · follows Mike to the wire transfer place; asks the clerk; the clerk refuses; Lalo kills him, watches the cameras, burns the place
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  pw('travelwire', Wt('переводов') - .6, { x: A2[0] - 640, y: A2[1] - 180, w: 440, rot: -.05, order: 200, off: 1, caption: capt('ПУНКТ ПЕРЕВОДОВ', Wt('переводов')), capSize: 20 });
  pw('fred', Wt('требует') - .5, { x: A2[0] + 20, y: A2[1] - 80, w: 560, rot: .02, order: 210, off: 1 });
  pw('fredno', Wt('отказывается') - .5, { x: A2[0] - 640, y: A2[1] + 240, w: 440, rot: .04, order: 215, off: 1, caption: capt('ОТКАЗАЛСЯ', Wt('отказывается')), capSize: 20 });
  const fc = pw('fredcam', Wt('камер') - .6, { x: A2[0] + 640, y: A2[1] - 100, w: 440, rot: .04, order: 220, off: 1, caption: capt('ЗАПИСИ КАМЕР', Wt('камер')), capSize: 20 });
  const ac = card({ x: A2[0] + 300, y: A2[1] + 360, w: 600, h: 200, rot: -.02, order: 230, lined: true, tIn: Wt('убивает') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  ac.cl = [checkLine('УБИЛ СЛУЖАЩЕГО', Wt('убивает') + .2, 'v', -260, -50), checkLine('ПОСМОТРЕЛ КАМЕРЫ', Wt('камер') + .1, 'v', -260, 10), checkLine('ПОДЖЁГ ЗДАНИЕ', Wt('поджигает') + .2, 'v', -260, 70)];
  goTo(A2, Wt('лабораторию') + .7, Wt('следит') - .1, A2[0] - 860, A2[1] - 460);
  camKey(Wt('переводов') + .1, A2[0] - 620, A2[1] - 160, 1.08, -.015); camKey(Wt('требует') + .1, A2[0] + 20, A2[1] - 60, 1.05, .01);
  camKey(Wt('отказывается') + .1, A2[0] - 620, A2[1] + 220, 1.08, -.01); camKey(Wt('убивает') + .2, A2[0] + 300, A2[1] + 200, .9, 0);
  camKey(Wt('поджигает') + .6, A2[0] + 300, A2[1] + 220, .95, .01);

  // S3 · scarier than all Salamancas: no shooting — sits at the phone, calls resorts, finds Werner, poses as Gus's man; Werner talks about the build
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('lalopc', Wt('страшнее') - .6, { x: A3[0] - 620, y: A3[1] - 160, w: 440, rot: -.05, order: 300, off: 1 });
  const nt = typedCard({ x: A3[0] - 620, y: A3[1] + 220, w: 440, h: 170, rot: .03, order: 305, tIn: Wt('стреляет') - .4, dur: .3, enter: 'slide', dx: -300, dy: 200 },
    [[typed('не стреляет', Wt('стреляет') - .2, .04), -180, -25, `700 28px ${MONO}`, '#777'], [typed('ЗВОНИТ', Wt('телефон') - .2, .05), -180, 40, `800 40px ${SANS}`, RED]]);
  pw('lalophone', Wt('обзванивает') - .4, { x: A3[0] + 60, y: A3[1] - 60, w: 520, rot: .02, order: 310, off: 1, caption: capt('«Я ОТ ГУСА»', Wt('представляется') + .2), capSize: 22 });
  pw('wernerphone', Wt('подозревая') - .6, { x: A3[0] + 680, y: A3[1] - 80, w: 440, rot: .04, order: 320, off: 2, caption: capt('РАССКАЗЫВАЕТ О СТРОЙКЕ', Wt('строительстве') - .3), capSize: 18 });
  sfx('ring', Wt('телефон') + .1);
  goTo(A3, Wt('поджигает') + .9, Wt('дальше') - .1, A3[0] - 860, A3[1] - 460);
  camKey(Wt('страшнее'), A3[0] - 600, A3[1] - 120, 1.08, -.015); camKey(Wt('телефон') + .1, A3[0] - 600, A3[1] + 180, 1.05, -.01);
  camKey(Wt('курорты'), A3[0] + 60, A3[1] - 40, 1.05, .01); camKey(Wt('вернер', 3) + .1, A3[0] + 660, A3[1] - 60, 1.08, .015);

  // S4 · Mike cuts the call; but Lalo knows: Gus has a secret, underground; Werner must die — Mike kills him; one call killed a man he never saw
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, .95);
  const sc = card({ x: A4[0] - 400, y: A4[1] - 60, w: 620, h: 300, rot: -.02, order: 400, color: '#f3efe2', lined: false, tIn: Wt('успевает') - .4, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.z, t, 0, -110, `800 28px ${SANS}`, '#777', 'center'); drawTyped(g, it.a, t, 0, -50, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 20, `800 44px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 90, `800 44px ${SANS}`, RED, 'center'); } });
  sc.z = typed('ЗВОНОК ОБОРВАН', Wt('оборвать') - .2, .04); sc.a = typed('Лало знает главное:', Wt('знает') - .1, .03); sc.b = typed('У ГУСА ЕСТЬ ТАЙНА', Wt('тайна') - .3, .04); sc.c = typed('ПОД ЗЕМЛЁЙ', Wt('землёй') - .3, .05);
  const wd = pw('wernerend', Wt('умереть') - .6, { x: A4[0] + 560, y: A4[1] - 60, w: 480, rot: .04, order: 410, off: 1, caption: capt('МАЙК УБИВАЕТ ВЕРНЕРА', Wt('убивает') - .2), capSize: 20 });
  card({ x: A4[0] + 100, y: A4[1] + 360, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('один звонок — одна смерть', Wt('звонком') - .3, .8, { size: 48, rot: -.03 })] });
  goTo(A4, Wt('строительстве') + .6, Wt('успевает') - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('успевает') - .2, Wt('землёй') + .3, A4[0] - 400, A4[1] - 40, 1.05, -.01, { dz: .05 });
  camKey(Wt('умереть'), A4[0] + 540, A4[1] - 40, 1.05, .015); camKey(Wt('звонком') + .2, A4[0] + 100, A4[1] + 200, .9, 0); camKey(T_END, A4[0] + 100, A4[1] + 220, .98, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
