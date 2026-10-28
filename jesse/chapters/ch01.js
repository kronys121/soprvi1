// 01 · УЧЕНИК  (insert: parents throw him out)
CH_V0 = 38.5;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'УЧЕНИК', T_START);
  hold(T_START, Wt('знакомимся') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the raid, the half-naked kid on the roofs, Walter recognises his former student
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  typedCard({ x: A1[0] - 640, y: A1[1] - 360, w: 520, h: 150, rot: -.04, order: 100, lined: false, tIn: Wt('первой') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('S01E01 · «PILOT»', Wt('первой'), .03), 0, 14, `700 36px ${MONO}`, INK, 'center']]);
  const es = pw('jescape', Wt('облаву') - .3, { x: A1[0] + 60, y: A1[1] - 20, w: 900, rot: .015, order: 110, off: 3 });
  es.stamps = [stamp('УЗНАЛ', Wt('узнаёт') + .1, { x: 200, y: 140, size: 70, rot: -.08, shake: 14 })];
  const gr = typedCard({ x: A1[0] + 760, y: A1[1] + 320, w: 420, h: 200, rot: .05, order: 120, tIn: Wt('поставил') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200 },
    [[typed('ХИМИЯ:', Wt('поставил'), .05), -170, -20, `700 36px ${MONO}`], [typed('«2»', Wt('двойку'), .1, { heavy: true }), -170, 60, `800 70px ${SANS}`, RED]]);
  goTo(A1, Wt('знакомимся') + .3, Wt('серии') + .1, A1[0] - 900, A1[1] - 420);
  hold(Wt('серии') + .1, Wt('нарколабораторию') + .3, A1[0] - 520, A1[1] - 240, 1.05, -.02, { dz: .05 });
  camKey(Wt('вылезает') + .2, A1[0] + 60, A1[1] - 20, 1.08, .01); camKey(Wt('ученика') + .4, A1[0] + 60, A1[1], 1.2, .015);
  camKey(Wt('химии') + .4, A1[0] + 520, A1[1] + 200, .9, .015);

  // S2 · Captain Cook, chili powder; thrown out, brother held up as an example, the aunt's house
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('firstcook', Wt('мелкий') - .3, { x: A2[0] - 560, y: A2[1] - 120, w: 560, rot: -.04, order: 200, off: 3, caption: capt('КАПИТАН КУК', Wt('кук') - .2), capSize: 28 });
  tag({ x: A2[0] - 560, y: A2[1] + 240, w: 460, rot: .04, label: 'ФИРМА: ЧИЛИ', tIn: Wt('чили') + .05, order: 210, size: 40 });
  const fam = card({ x: A2[0] + 340, y: A2[1] - 20, w: 620, h: 520, rot: .02, order: 220, lined: true, tIn: Wt('родители') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'left'; g.fillText('СЕМЬЯ:', -270, -180); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  fam.cl = [checkLine('ВЫГНАЛИ ИЗ ДОМА', Wt('выгнали') + .2, 'x', -250, -100), checkLine('БРАТ — В ПРИМЕР', Wt('пример') - .2, 'x', -250, -20), checkLine('ДРУЗЬЯ', Wt('друзья') + .1, 'v', -250, 60), checkLine('ДОМ ПОКОЙНОЙ ТЁТИ', Wt('тёти') - .2, 'v', -250, 140)];
  goTo(A2, Wt('химии') + .5, Wt('джесси') + .1, A2[0] - 860, A2[1] - 420);
  hold(Wt('джесси') + .1, Wt('метамфетамине') + .3, A2[0] - 520, A2[1] - 20, 1.08, -.015, { dz: .05 });
  camKey(Wt('родители') + .2, A2[0] + 320, A2[1] - 20, 1.05, .01); camKey(Wt('тёти') + .5, A2[0] + 340, A2[1] + 40, 1.1, .015);

  // S3 · the joint is the brother's; Jesse takes the blame -> "Ты должен уйти" (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('parents', Wt('находят') - .3, { x: A3[0] - 600, y: A3[1] - 160, w: 520, rot: -.04, order: 300, off: 1, caption: capt('КОСЯК — БРАТА', Wt('брату') - .2), capSize: 24 });
  tag({ x: A3[0] - 600, y: A3[1] + 200, w: 440, rot: .04, label: 'ВИНА НА СЕБЯ', tIn: Wt('вину') + .05, order: 310, size: 40 });
  dlgShot('d_leave', A3[0] + 300, A3[1] - 20, { w: 900, order: 320 });
  card({ x: A3[0] + 300, y: A3[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 330, tIn: 0, scrawls: [scrawl('ПЛАТИТ ЗА ЧУЖОЕ', Wt('чужое') - .4, .5, { size: 60, rot: -.04 })] });
  goTo(A3, Wt('тёти') + .5, Wt('одной') + .1, A3[0] - 860, A3[1] - 420);
  hold(Wt('одной') + .1, Wt('дверь') + .3, A3[0] - 560, A3[1] - 80, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_leave - .1, A3[0] + 300, A3[1] - 20, 1.1, 0); camKey(DLGT.d_leave + 11.3, A3[0] + 300, A3[1] + 40, 1.22, .01);
  camKey(Wt('чужое') + .3, A3[0] + 300, A3[1] + 200, 1.0, .01);

  // S4 · Walter's deal: I cook, you sell — Jesse is a tool from day one
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const dl = typedCard({ x: A4[0] - 380, y: A4[1] - 100, w: 680, h: 300, rot: -.02, order: 400, lined: false, tIn: Wt('сделку') - .3, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('СДЕЛКА:', Wt('сделку'), .05), -300, -60, `700 36px ${MONO}`], [typed('я варю,', Wt('варю') - .1, .05), -300, 10, `800 46px ${SANS}`], [typed('ты продаёшь', Wt('продаёшь') - .2, .05), -300, 80, `800 46px ${SANS}`]]);
  pw('rvdust', Wt('потому') - .3, { x: A4[0] + 480, y: A4[1] - 60, w: 560, rot: .04, order: 410, off: 1 });
  const tl = card({ x: A4[0] - 60, y: A4[1] + 240, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  tl.s = stamp('ИНСТРУМЕНТ', Wt('инструмент') - .1, { size: 86, rot: -.07, shake: 18 });
  goTo(A4, Wt('чужое') + .3, Wt('уолтер', 2) + .1, A4[0] - 860, A4[1] - 420);
  hold(Wt('уолтер', 2) + .1, Wt('продаёшь') + .4, A4[0] - 380, A4[1] - 100, 1.12, -.015, { dz: .05 });
  camKey(Wt('рукой') + .2, A4[0] + 460, A4[1] - 60, 1.05, .015); camKey(Wt('конца') + .2, A4[0] - 40, A4[1] + 120, .9, 0); camKey(T_END, A4[0] - 60, A4[1] + 160, 1.0, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
