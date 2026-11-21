// 08 · ВЫПУСКНОЙ — Meadow's graduation the same evening, Angie waiting for Sal
CH_V0 = 523.57;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const w = (s, n = 1, e = false) => Wt(s, n, e);
  dress(9); opener(8, 'ВЫПУСКНОЙ');
  P('c8_grad', w('вечер') - .2, -1250, -560, { w: 660, rot: -.02, bri: 1.2, chain: 'start', label: 'ВЫПУСКНОЙ МЕДОУ' });
  P('meadow', w('медоу') - .2, -400, -580, { w: 600, rot: .03, bri: 1.2, cap: 'окончила школу', capd: .6 });
  P('c8_hug', w('улыбается') - .3, 450, -560, { w: 660, rot: -.02, bri: 1.2, cap: 'улыбается', capd: .3 });
  const pa = P('angie', w('энджи') - .5, 1300, -560, { w: 640, rot: .02, bri: 1.25, label: 'ЭНДЖИ БОНПЕНСЬЕРО' });
  slam([['«ОН ТАКОЙ', w('эгоист') - .4], ['ЭГОИСТ»', w('эгоист')]], { size: 170, y: H * .78, out: w('знает') - .1, seed: 3, red: [1] });
  P('tonysea', w('океана') - .4, -800, 1400, { w: 680, rot: .02, bri: 1.2, cap: 'на дне океана', capd: .4 });
  const nk = note(150, 1400, w('никто') - .2, [['НИКТО', w('никто') - .05, 40], ['ей не скажет', w('скажет') - .2, 32, RED]], { w: 520, h: 260 });
  slam([['НЕЛЬЗЯ', w('нельзя')], ['ОПЛАКАТЬ', w('оплакать')]], { size: 180, y: H * .5, out: w('даже', 2) - .1, seed: 5, red: [1] });
  const pt = P('tonyboat', w('даже', 2) - .2, 1000, 1400, { w: 600, rot: -.02, bri: 1.25, cap: 'нажал на курок', capd: 1.0 });
  buildShots(T_END);
  ensureFG([[-2600, 500, 'pen', 1.2, 1.85, .4], [2600, 900, 'smoke', 1.6, 1.5, 0, .7]]);
}
