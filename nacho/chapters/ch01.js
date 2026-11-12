// 01 · НАПАРНИК — Tuco's right hand, Jimmy, the Kettlemans
CH_V0 = 48.55;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const w = (s, n = 1, e = false) => Wt(s, n, e);
  dress(2); opener(1, 'НАПАРНИК');

  // Tuco's right hand; Tuco explosive — Nacho calm
  P('desert_tn', w('знакомимся') + .05, -1250, -560, { w: 700, rot: -.03, bri: 1.25, label: 'ТУКО И НАЧО · 1×02', chain: 'start' });
  const tc = P('tucoface', w('взрывной') - .05, -400, -620, { w: 520, rot: .04, bri: 1.25, z: 2.1 });
  tc.stamps = [stamp('ВЗРЫВНОЙ', w('взрывной') + .15, { x: 0, y: -60, size: 52, rot: -.1 }), stamp('НЕПРЕДСКАЗУЕМЫЙ', w('непредсказуемый') + .2, { x: 0, y: 40, size: 40, rot: .06 })];
  const nf = P('nachoface', w('противоположность') - .25, 380, -560, { w: 540, rot: -.03, bri: 1.2, z: 2.0 });
  nf.cap = hand('на шаг впереди', w('шаг') - .05, .45, { size: 62 });
  slam([['СПОКОЙНЫЙ', w('спокойный')], ['ВНИМАТЕЛЬНЫЙ', w('внимательный')]], { size: 130, y: H * .2, out: w('впереди') - .1, seed: 4 });

  // Jimmy bargains for two skaters
  P('skaters', w('замечает') + .05, 1250, -500, { w: 640, rot: .03, bri: 1.25, cap: 'двое скейтеров', capColor: INK });
  P('jimmytalk', w('выторговывает') - .1, -1100, 420, { w: 660, rot: -.02, bri: 1.2, label: 'ДЖИММИ МАКГИЛЛ' });
  S(w('видит') - .05, -1100, 370, 2.6, -.01, { dz: .1 });

  // Nacho brings a job: the Kettlemans stole 1.6 million
  P('n_office', w('приходит') + .05, -250, 420, { w: 640, rot: .03, bri: 1.6, cap: 'офис Джимми' });
  const kn = note(600, 380, w('кеттлманов') + .05, [['СЕМЬЯ КЕТТЛМАН', w('кеттлманов') + .1, 36], ['$1 600 000', w('миллиона') - .1, 64, RED], ['наводка = 10%', w('долю') - .2, 32]], { w: 640, h: 400 });
  kn.pens = [pen([[-180, 30], [180, 30]], w('ограбим') + .1, .3)];

  // Jimmy refuses, warns them; staged kidnapping; Nacho arrested
  const jr = P('jimmyoffice', w('отказывается') - .05, 1350, 450, { w: 600, rot: -.04, bri: 1.6, off: 1 });
  jr.stamps = [stamp('ОТКАЗ', w('отказывается') + .3, { x: 0, y: -40, size: 80, rot: -.12 })];
  sticky(1500, 900, w('анонимно') - .05, { rot: .08 }).hands = [hand('анонимный звонок', w('анонимно') + .1, .4, { size: 54, y: -10, rot: -.06 })];
  S(w('анонимно') - .2, 1450, 800, 1.6, .02);
  slam([['ПОХИЩЕНИЕ?', w('похищение')]], { size: 170, y: H * .5, out: w('подозрение') + .2, seed: 8, red: [0] });
  const ja = P('jail2', w('арестовывают') - .1, -1200, 1350, { w: 640, rot: .03, bri: 1.6, stamp: ['АРЕСТОВАН', w('арестовывают') + .25] });
  P('jail', w('камеры') - .05, -350, 1380, { w: 600, rot: -.03, bri: 1.6, cap: 'вытащи — или конец', capd: .8 });
  slam([['ТЕБЕ', w('тебе')], ['КОНЕЦ', w('конец')]], { size: 170, y: H * .8, out: w('находит') - .15, seed: 2, red: [1] });

  // the tent in the woods behind their own house
  P('woods', w('находит') - .05, 500, 1350, { w: 620, rot: .02, bri: 1.4 });
  P('tent', w('палатке') - .1, 1300, 1380, { w: 640, rot: -.03, bri: 1.8, cap: 'палатка за домом', capd: .5 });

  // the start of a long story
  WIDE(w('так') - .05, 0, 400, .42, { to: [0, 450, .5] });
  thread([[-1300, -820], [1300, 1100]], w('свяжет') - .1, w('свяжет') + .8, {});

  buildShots(T_END);
  ensureFG([[-2600, 500, 'pen', 1.2, 1.85, .4], [2600, 100, 'smoke', 1.6, 1.5, 0, .7]]);
}
