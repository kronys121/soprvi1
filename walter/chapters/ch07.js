// 07 · ОЗИМАНДИЯ  (insert: "I watched Jane die")
CH_V0 = 440.0;
const [T_START, T_END] = chRange(7);
function buildScenes() {
  const D = [0, 0]; divider(D, 7, 'ОЗИМАНДИЯ', T_START);
  hold(T_START, Wt('серия') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Shelley's poem: ruins in the desert
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  const poem = typedCard({ x: A1[0] - 300, y: A1[1], w: 820, h: 520, rot: -.02, order: 100, color: '#efe9da', lined: false, tIn: Wt('серия') + .1, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('S05E14 · «OZYMANDIAS»', Wt('озимандия'), .03), -360, -170, `700 34px ${MONO}`], [typed('П. Б. Шелли, 1818', Wt('шелли'), .04), -360, -100, `400 28px "DejaVu Serif"`, '#5a4a3a'],
     [typed('«Я — Озимандия, царь царей!', Wt('царе') - .1, .03, { silent: true }), -360, 0, `400 italic 30px "DejaVu Serif"`], [typed('Взгляните на мои деянья…»', Wt('империи'), .03, { silent: true }), -360, 50, `400 italic 30px "DejaVu Serif"`],
     [typed('…вокруг — пустыня', Wt('обломки'), .04, { silent: true }), -360, 140, `400 italic 30px "DejaVu Serif"`, RED]]);
  pw('walkaway', Wt('пустыне') - .4, { x: A1[0] + 560, y: A1[1] - 60, w: 520, rot: .05, order: 110, off: 0 });
  goTo(A1, Wt('серия') + .3, Wt('озимандия') + .1, A1[0] - 760, A1[1] - 340);
  hold(Wt('озимандия') + .1, Wt('телевидения') + .4, A1[0] - 300, A1[1] - 60, 1.15, -.015, { dz: .05 });
  camKey(Wt('название') + .2, A1[0] - 100, A1[1] + 20, .95, 0); camKey(Wt('пустыне') + .4, A1[0] + 300, A1[1] + 20, 1.0, .015);

  // S2 · Hank finds Leaves of Grass; arrest in the same desert
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('leaves', Wt('хэнк') - .2, { x: A2[0] - 520, y: A2[1] - 120, w: 560, rot: -.05, order: 200, off: 2, caption: capt('«ЛИСТЬЯ ТРАВЫ» · «В.В.»', Wt('уитмена')), capSize: 22 });
  const ar = pw('arrest', Wt('арестовывает') - .2, { x: A2[0] + 260, y: A2[1] + 40, w: 760, rot: .02, order: 210, off: 3 });
  ar.stamps = [stamp('АРЕСТ', Wt('уолтера') + .1, { x: 0, y: 60, size: 84, rot: -.08, shake: 16 })];
  goTo(A2, Wt('пустыне') + .6, Wt('хэнк') + .1, A2[0] - 800, A2[1] - 380);
  hold(Wt('хэнк') + .1, Wt('гейла') + .4, A2[0] - 480, A2[1] - 80, 1.15, -.02, { dz: .05 });
  camKey(Wt('арестовывает') + .2, A2[0] + 240, A2[1] + 20, 1.05, .01); camKey(Wt('начинал') + .4, A2[0] + 260, A2[1] + 40, 1.15, .015);

  // S3 · the neo-Nazis arrive; Walter begs; Hank dies; money taken; Jesse enslaved
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2200, 1);
  pw('shootout', Wt('приезжают') - .2, { x: A3[0] - 620, y: A3[1] - 160, w: 520, rot: -.05, order: 300, off: 1 });
  const hd = pw('hankdie', Wt('умоляет') - .2, { x: A3[0], y: A3[1] - 20, w: 700, rot: .015, order: 310, off: 0 });
  hd.greyAt = t => eio(prog(t, Wt('погибает'), Wt('погибает') + .9)) * .9;
  const bid = typedCard({ x: A3[0] + 640, y: A3[1] - 200, w: 460, h: 220, rot: .05, order: 320, tIn: Wt('предлагает') - .2, dur: .3, enter: 'slide', dx: 400, dy: -200 },
    [[typed('ВЫКУП:', Wt('предлагает'), .05), -190, -30, `700 36px ${MONO}`], [typed('$ 80 000 000', Wt('восемьдесят'), .05, { heavy: true }), -190, 40, `800 46px ${MONO}`, RED]]);
  bid.pens = [pen([[-200, 30], [200, 20]], Wt('забирают') - .1, .25, { width: 8 })];
  sfx('shot', Wt('погибает') - .3); shake(Wt('погибает') - .3, 22);
  const sl = pw('barrels', Wt('отдают') - .2, { x: A3[0] + 560, y: A3[1] + 300, w: 520, rot: -.04, order: 330, off: 0 });
  sl.stamps = [stamp('РАБСТВО', Wt('рабство'), { x: 0, y: 40, size: 66, rot: -.08, shake: 12 })];
  card({ x: A3[0] - 300, y: A3[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 340, tIn: 0, scrawls: [scrawl('САМ РАЗРУШИЛ', Wt('разрушил') - .1, .45, { size: 66, rot: -.05 })] });
  goTo(A3, Wt('начинал') + .4, Wt('=и') + .2, A3[0] - 900, A3[1] - 400);
  camKey(Wt('приезжают') + .2, A3[0] - 560, A3[1] - 130, 1.15, -.02); camKey(Wt('умоляет') + .2, A3[0] + 20, A3[1] - 20, 1.1, .01);
  camKey(Wt('восемьдесят') + .1, A3[0] + 400, A3[1] - 120, 1.0, .015); camKey(Wt('погибает') + .3, A3[0] + 20, A3[1] - 10, 1.3, .01);
  camKey(Wt('рабство') + .1, A3[0] + 520, A3[1] + 280, 1.15, -.01); camKey(Wt('империю') + .3, A3[0] - 100, A3[1] + 260, .85, 0);

  // S4 · the truth to Jesse (original dub: "I watched Jane die")
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const jt = pw('janetruth', Wt('напоследок') - .3, { x: A4[0] - 720, y: A4[1] - 260, w: 460, rot: -.05, order: 395, off: 0 });
  tag({ x: A4[0] - 720, y: A4[1] + 40, w: 360, rot: .04, label: 'ПРАВДА', tIn: Wt('правду') + .05, order: 396, size: 40 });
  dlgShot('d_jane1', A4[0] - 40, A4[1] - 20, { w: 940, order: 400 });
  dlgShot('d_jane2', A4[0] + 40, A4[1] + 40, { w: 940, order: 410, rot: .02 });
  const tr = card({ x: A4[0], y: A4[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  tr.s = stamp('ПРИЗНАНИЕ', DLGT.d_jane2 + 4.6, { size: 72, rot: -.06, shake: 16 });
  goTo(A4, Wt('империю') + .3, Wt('напоследок') + .2, A4[0] - 700, A4[1] - 400);
  hold(Wt('напоследок') + .2, DLGT.d_jane1 - .2, A4[0] - 620, A4[1] - 180, 1.0, -.015, { dz: .06 });
  camKey(DLGT.d_jane1, A4[0] - 40, A4[1] - 20, 1.15, 0); camKey(DLGT.d_jane2 + 5.6, A4[0] + 40, A4[1] + 60, 1.3, .01);

  // S5 · home: horror, son calls police, kidnapping, the phone call
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1);
  pw('kidnap', DLGT.d_jane2 + 5.2, { x: A5[0] - 560, y: A5[1] - 120, w: 560, rot: -.05, order: 500, off: 0 });
  tag({ x: A5[0] - 560, y: A5[1] + 260, w: 420, rot: .04, label: 'СЫН: 911', tIn: Wt('полицию') + .05, order: 510, size: 40 });
  const pc = pw('phonecall', Wt('звонит', 2) - .2, { x: A5[0] + 260, y: A5[1] + 20, w: 780, rot: .02, order: 520, off: 2 });
  tag({ x: A5[0] + 660, y: A5[1] - 330, w: 460, rot: .06, label: 'ПРОСЛУШКА', tIn: Wt('прослушивают') + .05, order: 530, size: 40 });
  pc.stamps = [stamp('ВИНА НА МНЕ', Wt('вину') + .1, { x: 0, y: 70, size: 60, rot: -.08, shake: 14 })];
  goTo(A5, DLGT.d_jane2 + 6.0, Wt('возвращается') + .2, A5[0] - 860, A5[1] - 380);
  hold(Wt('возвращается') + .2, Wt('дочь') + .3, A5[0] - 520, A5[1] - 20, 1.12, -.02, { dz: .05 });
  camKey(Wt('звонит', 2) + .2, A5[0] + 240, A5[1] - 20, 1.0, .01); camKey(Wt('прослушивают') + .3, A5[0] + 360, A5[1] - 100, 1.05, .015);
  camKey(Wt('заботу'), A5[0] + 260, A5[1] + 60, 1.15, .01); camKey(T_END, A5[0] + 260, A5[1] + 100, 1.25, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
