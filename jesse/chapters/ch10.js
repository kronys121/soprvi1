// 10 · ВЕРДИКТ
CH_V0 = 554.3;
const [T_START, T_END] = chRange(10);
function buildScenes() {
  const D = [0, 0]; divider(D, 10, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('почему') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · he is the only one who pays: Walter dies in his lab, Gus straightens his tie; Jesse loses everything
  const A1 = [2200, -200]; lamp(A1[0], A1[1] - 200, 2300, 1);
  typedCard({ x: A1[0], y: A1[1] - 420, w: 780, h: 150, rot: -.015, order: 100, lined: false, tIn: Wt('единственный') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('ЕДИНСТВЕННЫЙ, КТО ПЛАТИТ', Wt('платит') - .4, .035), 0, 18, `800 46px ${SANS}`, INK, 'center']]);
  pw('death', Wt('уолтер') - .3, { x: A1[0] - 640, y: A1[1] - 40, w: 460, rot: -.05, order: 110, off: 2, caption: capt('УОЛТЕР: ЛАБОРАТОРИЯ', Wt('любил')), capSize: 20 });
  pw('gus', Wt('гус') - .3, { x: A1[0] - 140, y: A1[1] - 40, w: 460, rot: .03, order: 120, caption: capt('ГУС: ГАЛСТУК', Wt('галстуком')), capSize: 20 });
  const ls = card({ x: A1[0] + 560, y: A1[1] - 20, w: 480, h: 500, rot: .03, order: 130, lined: true, tIn: Wt('теряет') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ДЖЕССИ ТЕРЯЕТ:', -200, -180); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  ls.cl = [checkLine('ДЖЕЙН', Wt('джейн') + .1, 'x', -190, -100), checkLine('АНДРЕА', Wt('андреа') + .1, 'x', -190, -30), checkLine('ДРУЗЕЙ', Wt('друзей') + .1, 'x', -190, 40), checkLine('ГОДЫ ЖИЗНИ', Wt('жизни') + .1, 'x', -190, 110), checkLine('ПОЧТИ СЕБЯ', Wt('себя') + .05, 'x', -190, 180)];
  card({ x: A1[0] - 400, y: A1[1] + 360, w: 1, h: 1, shadow: 0, lit: false, order: 140, tIn: 0, scrawls: [scrawl('ГРЕХИ — НЕ ЕГО', Wt('грехи') - .1, .55, { size: 60, rot: -.04 })] });
  goTo(A1, Wt('почему') + .3, Wt('история') + .1, A1[0] - 900, A1[1] - 600);
  hold(Wt('история') + .1, Wt('платит') + .4, A1[0], A1[1] - 300, 1.05, -.01, { dz: .04 });
  camKey(Wt('уолтер') + .2, A1[0] - 400, A1[1] - 20, 1.0, -.01); camKey(Wt('теряет') + .2, A1[0] + 520, A1[1] - 20, 1.05, .015);
  camKey(Wt('себя') + .4, A1[0] + 540, A1[1] + 60, 1.1, .015); camKey(Wt('его') + .4, A1[0] - 100, A1[1] + 160, .85, 0);

  // S2 · the only one who never stops feeling: Walter justifies everything, Gus shows nothing
  const A2 = [4600, 0]; lamp(A2[0], A2[1] - 200, 2200, 1);
  const fl = card({ x: A2[0], y: A2[1] - 20, w: 1100, h: 460, rot: -.01, order: 200, lined: false, tIn: Wt('ещё') - .2, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; for (const x of [-183, 183]) { g.beginPath(); g.moveTo(x, -180); g.lineTo(x, 180); g.stroke(); }
      drawTyped(g, it.a, t, -366, -110, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.a2, t, -366, -20, `700 28px ${MONO}`, INK, 'center');
      drawTyped(g, it.b, t, 0, -110, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b2, t, 0, -20, `700 28px ${MONO}`, INK, 'center');
      drawTyped(g, it.c, t, 366, -110, `800 40px ${SANS}`, RED, 'center'); drawTyped(g, it.c2, t, 366, -20, `700 28px ${MONO}`, RED, 'center'); drawTyped(g, it.c3, t, 366, 30, `700 28px ${MONO}`, RED, 'center'); } });
  fl.a = typed('УОЛТЕР', Wt('уолтер', 2) - .1, .05); fl.a2 = typed('оправдывает всё', Wt('оправдывать') - .1, .035);
  fl.b = typed('ГУС', Wt('=гус', 2) - .1, .06); fl.b2 = typed('не показывает', Wt('показывать') - .2, .035);
  fl.c = typed('ДЖЕССИ', Wt('джесси', 3) - .1, .05); fl.c2 = typed('каждая смерть', Wt('каждая') - .1, .035); fl.c3 = typed('остаётся в нём', Wt('остаётся') - .1, .035);
  goTo(A2, Wt('его') + .4, Wt('ещё') + .1, A2[0] - 900, A2[1] - 460);
  hold(Wt('ещё') + .1, Wt('нём') + .6, A2[0], A2[1] - 20, 1.0, -.01, { dz: .05 });

  // S3 · no adult ever cared for him: parents, Walter, Gus and Mike; only Skinny Pete and Badger
  const A3 = [4600, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  const ad = card({ x: A3[0] - 360, y: A3[1] - 20, w: 700, h: 560, rot: -.02, order: 300, lined: true, tIn: Wt('деталь') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ВЗРОСЛЫЕ РЯДОМ:', -320, -220); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  ad.cl = [checkLine('РОДИТЕЛИ — ОТКАЗАЛИСЬ', Wt('отказались') + .05, 'x', -300, -140), checkLine('УОЛТЕР — ИСПОЛЬЗОВАЛ', Wt('использовал') + .2, 'x', -300, -60),
    checkLine('ГУС И МАЙК — СОТРУДНИК', Wt('сотрудника') + .05, 'x', -300, 20), checkLine('ПИТ И БАРСУК — РЯДОМ', Wt('барсук') + .1, 'v', -300, 120)];
  pw('parents', Wt('родители') - .4, { x: A3[0] + 520, y: A3[1] - 200, w: 440, rot: .05, order: 310, off: 4 });
  pw('mike', Wt('майк') - .4, { x: A3[0] + 560, y: A3[1] + 200, w: 400, rot: -.04, order: 320 });
  goTo(A3, Wt('нём') + .6, Wt('одна') + .1, A3[0] - 860, A3[1] - 440);
  hold(Wt('одна') + .1, Wt('позаботился') + .4, A3[0] - 360, A3[1] - 20, 1.1, -.015, { dz: .05 });
  camKey(Wt('родители') + .2, A3[0] + 80, A3[1] - 40, .9, .01); camKey(Wt('барсук') + .4, A3[0] - 300, A3[1] + 100, 1.1, -.01);

  // S4 · we rooted for Walter because we wanted to be him; we feared for Jesse like for a little brother
  const A4 = [2200, 1900]; lamp(A4[0], A4[1] - 200, 2200, 1);
  pw('walthat', Wt('болели') - .4, { x: A4[0] - 460, y: A4[1] - 40, w: 560, rot: -.04, order: 400, caption: capt('ХОТЕЛИ БЫТЬ ИМ', Wt('быть') - .2), capSize: 24 });
  pw('jesse', Wt('боялись') - .5, { x: A4[0] + 460, y: A4[1] - 40, w: 560, rot: .04, order: 410, caption: capt('БОЯЛИСЬ ЗА НЕГО', Wt('боялись')), capSize: 24 });
  card({ x: A4[0] + 460, y: A4[1] + 320, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('МЛАДШИЙ БРАТ', Wt('младшего') - .2, .45, { size: 62, rot: -.05 })] });
  const lst = pw('jfree', Wt('последняя') - .5, { x: A4[0], y: A4[1] + 480, w: 760, rot: -.015, order: 430, off: 9 });
  lst.stamps = [stamp('САМЫЙ СЧАСТЛИВЫЙ КАДР', Wt('счастливый') - .1, { x: 0, y: 70, size: 50, rot: -.06, shake: 14 })];
  goTo(A4, Wt('барсук') + .5, Wt('=мы') + .1, A4[0] - 900, A4[1] - 500);
  hold(Wt('=мы') + .1, Wt('=им') + .4, A4[0] - 460, A4[1] - 40, 1.05, -.015, { dz: .04 });
  camKey(Wt('боялись') + .2, A4[0] + 460, A4[1] - 40, 1.05, .015); camKey(Wt('компанией') + .3, A4[0] + 300, A4[1] + 120, .92, .01);
  camKey(Wt('последняя') + .2, A4[0], A4[1] + 460, 1.05, 0); camKey(T_END, A4[0], A4[1] + 470, 1.2, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
