// 09 · СВОБОДА  (insert: "Тогда сам и стреляй")
CH_V0 = 493.0;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'СВОБОДА', T_START);
  hold(T_START, Wt('финале') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the machine gun; Jesse survives; strangles Todd with the same chain
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .9);
  pw('machinegun', Wt('возвращается') - .3, { x: A1[0] - 560, y: A1[1] - 140, w: 520, rot: -.05, order: 100, off: 0, caption: capt('ПУЛЕМЁТ', Wt('пулемёта')), capSize: 26 });
  sfx('shot', Wt('расстреливает') + .1); shake(Wt('расстреливает') + .1, 14);
  pw('jchained', Wt('выживает') - .3, { x: A1[0] - 560, y: A1[1] + 240, w: 520, rot: .04, order: 110, off: 0, caption: capt('ДЖЕССИ ЖИВ', Wt('выживает')), capSize: 26 });
  const td = pw('jtodd', Wt('душит') - .3, { x: A1[0] + 300, y: A1[1] + 20, w: 820, rot: .015, order: 120, off: 2 });
  td.stamps = [stamp('ТОЙ САМОЙ ЦЕПЬЮ', Wt('цепью') + .1, { x: 0, y: 80, size: 56, rot: -.07, shake: 16 })];
  goTo(A1, Wt('финале') + .3, Wt('уолтер') + .1, A1[0] - 860, A1[1] - 440);
  hold(Wt('уолтер') + .1, Wt('пулемёта') + .4, A1[0] - 540, A1[1] - 120, 1.08, -.02, { dz: .05 });
  camKey(Wt('выживает') + .2, A1[0] - 540, A1[1] + 220, 1.05, -.01); camKey(Wt('душит') + .2, A1[0] + 300, A1[1] + 20, 1.08, .01);
  camKey(Wt('держали') + .4, A1[0] + 300, A1[1] + 40, 1.2, .015);

  // S2 · the gun offered; Jesse refuses (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .9);
  const of = typedCard({ x: A2[0] - 640, y: A2[1] - 300, w: 480, h: 180, rot: -.04, order: 200, tIn: Wt('протягивает') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200 },
    [[typed('УОЛТЕР:', Wt('протягивает'), .05), -200, -20, `700 32px ${MONO}`], [typed('«выстрели»', Wt('выстрелить') - .2, .05), -200, 40, `400 italic 34px "DejaVu Serif"`]]);
  dlgShot('d_self', A2[0] + 60, A2[1] - 20, { w: 940, order: 210 });
  dlgShot('d_self2', A2[0] + 120, A2[1] + 40, { w: 940, order: 220, rot: .02 });
  const nr = card({ x: A2[0] + 100, y: A2[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 230, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nr.s = stamp('ОТКАЗ', DLGT.d_self2 + 2.6, { size: 96, rot: -.07, shake: 18 });
  goTo(A2, Wt('держали') + .5, Wt('потом') + .1, A2[0] - 900, A2[1] - 440);
  hold(Wt('потом') + .1, DLGT.d_self - .3, A2[0] - 600, A2[1] - 260, 1.12, -.015, { dz: .05 });
  camKey(DLGT.d_self + .1, A2[0] + 60, A2[1] - 20, 1.1, 0); camKey(DLGT.d_self2 + 3.6, A2[0] + 120, A2[1] + 60, 1.25, .01);

  // S3 · his only real victory: he no longer does what Walter asks
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, 1);
  const vc = typedCard({ x: A3[0], y: A3[1] - 40, w: 900, h: 320, rot: -.015, order: 300, lined: false, tIn: DLGT.d_self2 + 3.6, dur: .3, enter: 'slide', dx: 0, dy: 500 },
    [[typed('ЕДИНСТВЕННАЯ ПОБЕДА:', Wt('единственная'), .035), -400, -60, `700 38px ${MONO}`], [typed('больше не делает,', Wt('больше') - .1, .035), -400, 20, `800 46px ${SANS}`],
     [typed('о чём просит Уолтер', Wt('просит', 2) - .4, .035), -400, 90, `800 46px ${SANS}`, RED]]);
  goTo(A3, DLGT.d_self2 + 3.7, Wt('единственная') + .1, A3[0] - 600, A3[1] - 440);
  hold(Wt('единственная') + .1, Wt('просит', 2) + .4, A3[0], A3[1] - 40, 1.1, .01, { dz: .06 });

  // S4 · the car through the gate, into the night, screaming and laughing
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, .9);
  const fr = pw('jfree', Wt('садится') - .3, { x: A4[0], y: A4[1] - 20, w: 1000, rot: -.01, order: 400, off: 0 });
  card({ x: A4[0], y: A4[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, scrawls: [scrawl('КРИЧИТ И СМЕЁТСЯ', Wt('кричит') - .2, .55, { size: 64, rot: -.04 })] });
  goTo(A4, Wt('просит', 2) + .5, Wt('садится') + .1, A4[0] - 700, A4[1] - 520);
  camKey(Wt('садится') + .1, A4[0], A4[1] - 20, 1.0, 0); camKey(Wt('одновременно') + .3, A4[0], A4[1], 1.15, .01);

  // S5 · afterwards: old friends who never betrayed him, the money, a man who helps people vanish,
  //      a last memory of Jane — and a road out, alone and free
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1);
  const fd = card({ x: A5[0] - 520, y: A5[1] - 200, w: 520, h: 320, rot: -.04, order: 500, lined: true, tIn: Wt('прячется') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('НЕ ПРЕДАЛИ:', -220, -90); drawChecks(g, t, it.cl, `700 34px ${MONO}`); } });
  fd.cl = [checkLine('СКИННИ ПИТ', Wt('скинни') + .2, 'v', -200, -10), checkLine('БАРСУК', Wt('барсука') + .1, 'v', -200, 70)];
  const st = card({ x: A5[0] - 520, y: A5[1] + 220, w: 520, h: 280, rot: .03, order: 510, lined: true, tIn: Wt('достаёт') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  st.cl = [checkLine('ДЕНЬГИ', Wt('деньги') + .05, 'v', -210, -60), checkLine('ИСЧЕЗНУТЬ', Wt('исчезнуть') + .05, 'v', -210, 20), checkLine('ПОСЛЕДНЕЕ: ДЖЕЙН', Wt('джейн') + .1, 'v', -210, 100)];
  pw('jjane', Wt('воспоминании') - .4, { x: A5[0] + 340, y: A5[1] - 160, w: 640, rot: .03, order: 520, off: 6, caption: capt('КУДА БЫ УЕХАТЬ', Wt('уехать') - .3), capSize: 24 });
  pw('rvdesert', Wt('конце') - .4, { x: A5[0] + 380, y: A5[1] + 270, w: 600, rot: -.03, order: 530, off: 2 });
  const fz = card({ x: A5[0] + 380, y: A5[1] + 570, w: 1, h: 1, shadow: 0, lit: false, order: 540, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  fz.s = stamp('СВОБОДЕН', Wt('свободный'), { size: 80, rot: -.06, shake: 16 });
  camKey(Wt('сцену') - .3, A4[0], A4[1] + 10, 1.3, .015);
  goTo(A5, Wt('сцену') - .2, Wt('прячется') + .1, A5[0] - 860, A5[1] - 500);
  hold(Wt('прячется') + .1, Wt('предали') + .3, A5[0] - 520, A5[1] - 180, 1.12, -.015, { dz: .04 });
  camKey(Wt('достаёт') + .2, A5[0] - 520, A5[1] + 200, 1.08, -.01); camKey(Wt('воспоминании') + .2, A5[0] + 320, A5[1] - 150, 1.05, .015);
  camKey(Wt('конце') + .2, A5[0] + 380, A5[1] + 280, 1.05, -.01); camKey(Wt('свободный') + .3, A5[0] + 380, A5[1] + 380, 1.0, -.01);
  camKey(T_END, A5[0] + 380, A5[1] + 340, 1.15, -.015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
