// 04 · ДВАДЦАТЬ ЛЕТ
CH_V0 = 259.6;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'ДВАДЦАТЬ ЛЕТ', T_START);
  hold(T_START, Wt('откуда') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · origin: Chile, someone powerful, no papers
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  pw('gdesert', Wt('гус') - .3, { x: A1[0] - 440, y: A1[1] - 20, w: 680, rot: -.02, order: 100, off: 3.5, caption: capt('ГУСТАВО ФРИНГ', Wt('гус')), capSize: 26 });
  const og = card({ x: A1[0] + 520, y: A1[1] - 20, w: 540, h: 480, rot: .03, order: 110, lined: true, tIn: Wt('чили') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, -160, `700 34px ${MONO}`); drawTyped(g, it.b, t, -230, -80, `400 32px ${MONO}`); drawTyped(g, it.c, t, -230, 0, `400 32px ${MONO}`); drawTyped(g, it.d, t, -230, 80, `400 32px ${MONO}`); drawStamp(g, it.s, t); } });
  og.a = typed('ПРОИСХОЖДЕНИЕ:', Wt('приехал'), .04); og.b = typed('страна: ЧИЛИ', Wt('чили'), .04);
  og.c = typed('прошлое: «влиятелен»', Wt('влиятельным') - .3, .03); og.d = typed('документы: —', Wt('документам'), .05);
  og.s = stamp('НЕТ ДАННЫХ', Wt('существует'), { x: 0, y: 170, size: 64, rot: -.08, shake: 14 });
  goTo(A1, Wt('откуда') + .3, Wt('намёками') + .1, A1[0] - 760, A1[1] - 380);
  hold(Wt('намёками') + .1, Wt('чили') + .2, A1[0] - 400, A1[1] - 40, 1.08, -.015, { dz: .05 });
  camKey(Wt('картеле') + .2, A1[0] + 420, A1[1] - 40, 1.05, .01); camKey(Wt('существует') + .5, A1[0] + 500, A1[1] + 60, 1.12, .015);

  // S2 · 1989, Mexico: young Gus and Max pitch meth to Don Eladio
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  typedCard({ x: A2[0] - 640, y: A2[1] - 380, w: 520, h: 150, rot: -.04, order: 200, lined: false, tIn: Wt('но') - .1, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('1989 · МЕКСИКА', Wt('но') + .3, .05), 0, 16, `800 46px ${SANS}`, INK, 'center']]);
  pw('villa', Wt('историю') - .2, { x: A2[0] - 560, y: A2[1] - 20, w: 560, rot: -.04, order: 210, off: 0, caption: capt('ВИЛЛА ДОНА ЭЛАДИО', Wt('эладио')), capSize: 22 });
  pw('gmax', Wt('молодой') - .2, { x: A2[0] + 260, y: A2[1] - 160, w: 640, rot: .03, order: 220, off: 1, caption: capt('ГУС И МАКС АРСИНЬЕГА, ХИМИК', Wt('максимино')), capSize: 20 });
  pw('gyoung', Wt('предлагают') - .2, { x: A2[0] + 380, y: A2[1] + 280, w: 560, rot: -.03, order: 230, off: 1, caption: capt('МЕТ ВМЕСТО КОКАИНА', Wt('кокаина') - .3), capSize: 22 });
  goTo(A2, Wt('существует') + .5, Wt('но') + .1, A2[0] - 900, A2[1] - 420);
  hold(Wt('но') + .1, Wt('мексика') + .2, A2[0] - 560, A2[1] - 220, 1.05, -.02, { dz: .05 });
  camKey(Wt('молодой') + .2, A2[0] + 240, A2[1] - 150, 1.05, .01); camKey(Wt('предлагают') + .2, A2[0] + 360, A2[1] + 260, 1.05, -.01);

  // S3 · Hector shoots Max; Gus held face to his friend's body
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, .95);
  const sh = pw('maxshot', Wt('эладио', 2) - .2, { x: A3[0] - 480, y: A3[1] - 100, w: 620, rot: -.04, order: 300, off: 0, caption: capt('ВЫСТРЕЛ ГЕКТОРА', Wt('стреляет')), capSize: 24 });
  sfx('shot', Wt('стреляет') + .1); shake(Wt('стреляет') + .1, 20);
  const mp = pw('maxpool', Wt('гуса') - .3, { x: A3[0] + 340, y: A3[1] + 40, w: 800, rot: .015, order: 310, off: 1 });
  mp.greyAt = t => eio(prog(t, Wt('друга'), Wt('друга') + 1.0)) * .75;
  focus(Wt('держат') - .2, Wt('помнил') + .6, [mp], .85);
  card({ x: A3[0] + 340, y: A3[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('ЧТОБЫ ПОМНИЛ', Wt('помнил') - .3, .5, { size: 66, rot: -.05 })] });
  goTo(A3, Wt('предлагают') + 1.6, Wt('эладио', 2) + .1, A3[0] - 860, A3[1] - 420);
  camKey(Wt('эладио', 2) + .1, A3[0] - 460, A3[1] - 90, 1.1, -.02); camKey(Wt('стреляет') + .3, A3[0] - 470, A3[1] - 100, 1.25, -.025);
  camKey(Wt('гуса') + .2, A3[0] + 320, A3[1] + 40, 1.1, .01); camKey(Wt('живых') + .3, A3[0] + 340, A3[1] + 60, 1.3, .015); camKey(Wt('помнил') + .5, A3[0] + 300, A3[1] + 220, 1.0, .01);

  // S4 · who was Max to him? The scholarship in Max's name -> Gale
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  tag({ x: A4[0] - 560, y: A4[1] - 330, w: 440, rot: -.05, label: 'КЕМ БЫЛ МАКС?', tIn: Wt('=кем') - .05, order: 400, size: 40 });
  const sc = typedCard({ x: A4[0] - 380, y: A4[1] + 20, w: 760, h: 380, rot: -.02, order: 410, tIn: Wt('=кем') + .3, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('СТИПЕНДИЯ ПО ХИМИИ', Wt('стипендию'), .035), -340, -110, `800 40px ${SANS}`], [typed('им. Максимино Арсиньеги', Wt('химии'), .03), -340, -40, `400 32px ${MONO}`],
     [typed('Университет Нью-Мексико', Wt('университете'), .03), -340, 20, `400 32px ${MONO}`], [typed('учредитель: Г. ФРИНГ', Wt('учредил') - .2, .035), -340, 100, `700 34px ${MONO}`, RED]]);
  pw('galesing', Wt('гейла') - .6, { x: A4[0] + 560, y: A4[1] - 40, w: 520, rot: .04, order: 420, off: 1, caption: capt('СТИПЕНДИАТ: ГЕЙЛ', Wt('гейла')), capSize: 24 });
  thread([[A4[0] - 40, A4[1] - 150], [A4[0] + 560, A4[1] - 230]], Wt('этой') - .1, Wt('гейла') + .2, {});
  pin(A4[0] - 40, A4[1] - 150, Wt('этой'), { silent: true }); pin(A4[0] + 560, A4[1] - 230, Wt('гейла'), { silent: true });
  goTo(A4, Wt('помнил') + .5, Wt('сериале') + .1, A4[0] - 860, A4[1] - 400);
  hold(Wt('сериале') + .1, Wt('гуса', 2) + .2, A4[0] - 520, A4[1] - 280, 1.1, -.02, { dz: .05 });
  camKey(Wt('стипендию') + .3, A4[0] - 360, A4[1] + 20, 1.05, -.015); camKey(Wt('этой') + .2, A4[0] + 100, A4[1] - 20, .88, 0);
  camKey(T_END, A4[0] + 160, A4[1] - 20, .95, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
