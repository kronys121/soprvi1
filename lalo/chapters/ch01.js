// 01 · ИМЯ — the Salamanca family; Hector's stroke; the nephew arrives
CH_V0 = 59.74;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'ИМЯ', T_START);
  hold(T_START, Wt('понять') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the family: bloody enforcers of Don Eladio's cartel — Hector, Tuco, the twins; Saul fears the name more than the police
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1);
  pw('eladioface', Wt('картеля') - .5, { x: A1[0] - 640, y: A1[1] - 160, w: 420, rot: -.05, order: 100, caption: capt('ДОН ЭЛАДИО', Wt('эладио') - .2), capSize: 22 });
  const fam = card({ x: A1[0] + 60, y: A1[1] - 60, w: 560, h: 460, rot: .015, order: 110, lined: true, tIn: Wt('саламанки') - .4, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -170, `800 46px ${SANS}`, RED, 'center'); drawChecks(g, t, it.cl, `700 30px ${MONO}`); drawTyped(g, it.b, t, 0, 190, `700 24px ${MONO}`, '#666', 'center'); } });
  fam.a = typed('САЛАМАНКИ', Wt('саламанки') - .1, .05); fam.b = typed('берут силой · запугивают', Wt('силой') - .2, .03);
  fam.cl = [checkLine('ГЕКТОР', Wt('гектор') + .1, 'v', -200, -80), checkLine('ТУКО', Wt('туко') + .1, 'v', -200, -10), checkLine('БЛИЗНЕЦЫ', Wt('близнецы') + .1, 'v', -200, 60)];
  pw('twins', Wt('прячутся') - .5, { x: A1[0] + 720, y: A1[1] - 140, w: 440, rot: .04, order: 120, off: 1 });
  pw('saulface', Wt('боится') - .4, { x: A1[0] + 720, y: A1[1] + 260, w: 380, rot: -.04, order: 125, caption: capt('СОЛ БОИТСЯ ФАМИЛИИ', Wt('фамилии') - .2), capSize: 18 });
  goTo(A1, Wt('понять') + .2, Wt('семью') - .2, A1[0] - 860, A1[1] - 460);
  camKey(Wt('семью'), A1[0] - 620, A1[1] - 140, 1.05, -.015); camKey(Wt('саламанки') + .2, A1[0] + 60, A1[1] - 40, 1.0, .01);
  camKey(Wt('прячутся'), A1[0] + 700, A1[1] - 120, 1.05, .015); camKey(Wt('гудман') + .1, A1[0] + 700, A1[1] + 240, 1.08, -.01);

  // S2 · Hector's stroke; Albuquerque needs a new master; the nephew comes from Mexico — smartest, most beloved, most patient
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const hc = pw('hectorface', Wt('инсульт') - .6, { x: A2[0] - 560, y: A2[1] - 60, w: 480, rot: -.04, order: 200 });
  hc.stamps = [stamp('ИНСУЛЬТ', Wt('инсульт') + .1, { x: 0, y: 120, size: 66, rot: -.08, shake: 14 })];
  card({ x: A2[0] - 560, y: A2[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 205, tIn: 0, scrawls: [scrawl('нужен новый хозяин', Wt('хозяин') - .5, .6, { size: 44, rot: -.04 })] });
  pw('lalosun', Wt('племянник') - .5, { x: A2[0] + 200, y: A2[1] - 100, w: 560, rot: .02, order: 210, caption: capt('ПЛЕМЯННИК ИЗ МЕКСИКИ', Wt('мексики') - .2), capSize: 22 });
  const tr = typedCard({ x: A2[0] + 200, y: A2[1] + 330, w: 560, h: 200, rot: -.02, order: 220, tIn: Wt('умный') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300 },
    [[typed('самый УМНЫЙ', Wt('умный') - .2, .04), -230, -40, `800 32px ${SANS}`], [typed('самый ЛЮБИМЫЙ', Wt('любимый') - .2, .04), -230, 10, `800 32px ${SANS}`], [typed('самый ТЕРПЕЛИВЫЙ', Wt('терпеливый') - .2, .04), -230, 60, `800 32px ${SANS}`, RED]]);
  goTo(A2, Wt('полиции') + .4, Wt('гектора') - .2, A2[0] - 860, A2[1] - 440);
  camKey(Wt('инсульт'), A2[0] - 560, A2[1] - 40, 1.08, -.015); camKey(Wt('хозяин'), A2[0] - 560, A2[1] + 160, 1.0, -.01);
  camKey(Wt('племянник') + .1, A2[0] + 200, A2[1] - 80, 1.02, .015); camKey(Wt('умный') + .1, A2[0] + 200, A2[1] + 200, .98, .01); camKey(T_END, A2[0] + 200, A2[1] + 240, 1.06, .01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}
