// 06 · ГЕКТОР  (inserts: Hector's man "скажите полиции, что пистолет был ваш"; Gus "случайный прохожий... Гектор убил этого человека")
CH_V0 = 333.3;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'ГЕКТОР', T_START);
  hold(T_START, Wt('дядя') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Tuco's uncle Hector: demands Mike change his testimony and take the blame; threatens his family
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  const hc = typedCard({ x: A1[0] - 400, y: A1[1] - 60, w: 720, h: 400, rot: -.02, order: 100, tIn: Wt('гектор') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ГЕКТОР САЛАМАНКА', Wt('гектор') - .1, .04), -320, -130, `800 40px ${SANS}`, RED], [typed('глава семьи · жестокий · мстительный', Wt('глава') - .2, .025), -320, -60, `700 24px ${MONO}`],
     [typed('требует: взять вину на себя', Wt('показания') - .5, .03), -320, 20, `700 28px ${MONO}`], [typed('угрожает семье', Wt('угрожает') - .1, .04), -320, 100, `800 34px ${SANS}`, RED]]);
  pw('dinermike', Wt('требует') - .5, { x: A1[0] + 580, y: A1[1] - 60, w: 440, rot: .04, order: 110, off: 2 });
  goTo(A1, Wt('дядя') + .2, Wt('гектор') - .2, A1[0] - 760, A1[1] - 400);
  hold(Wt('гектор') - .2, Wt('требует') + .3, A1[0] - 400, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('угрожает') + .3, A1[0] + 100, A1[1] - 20, .9, .01);

  // S1b · the diner (original dub)
  const A1b = [6800, 950]; lamp(A1b[0], A1b[1] - 200, 1900, .9);
  dlgShot('d_hector', A1b[0] - 60, A1b[1] - 40, { w: 900, order: 150 });
  goTo(A1b, Wt('майка', 2) + .3, DLGT.d_hector - .1, A1b[0] - 860, A1b[1] - 460);
  camKey(DLGT.d_hector + .1, A1b[0] - 60, A1b[1] - 40, 1.08, 0); camKey(DLGT.d_hector + 28.8, A1b[0] - 60, A1b[1] + 20, 1.2, .01);

  // S2 · a step deeper: he robs Hector's money truck — clean, no casualties, the driver left tied in the desert
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  pw('stakeout', Wt('впервые') - .4, { x: A2[0] - 600, y: A2[1] - 160, w: 460, rot: -.05, order: 200, off: 1, caption: capt('ШАГ ГЛУБЖЕ', Wt('глубже')), capSize: 22 });
  const hs = pw('heist', Wt('грабит') - .4, { x: A2[0] + 200, y: A2[1] - 60, w: 760, rot: .015, order: 210, off: 2, caption: capt('ГРУЗОВИК ГЕКТОРА', Wt('деньгами')), capSize: 24 });
  hs.stamps = [stamp('БЕЗ ЖЕРТВ', Wt('жертв') - .2, { x: 0, y: 70, size: 70, rot: -.08, shake: 14 })];
  pw('tied', Wt('водителя') - .4, { x: A2[0] - 560, y: A2[1] + 260, w: 480, rot: .04, order: 220, off: 2, caption: capt('ВОДИТЕЛЬ СВЯЗАН · ПУСТЫНЯ', Wt('пустыне')), capSize: 18 });
  goTo(A2, DLGT.d_hector + 29, Wt('тут') - .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('тут') - .1, Wt('грабит') - .2, A2[0] - 600, A2[1] - 160, 1.05, -.015, { dz: .05 });
  camKey(Wt('грабит') + .1, A2[0] + 200, A2[1] - 60, 1.02, .015); camKey(Wt('водителя') + .1, A2[0] - 520, A2[1] + 240, 1.08, -.01);

  // S3 · a passer-by stops to help — Hector's men kill him; (original dub: Gus lays it out)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  const pb = card({ x: A3[0] - 560, y: A3[1] - 120, w: 500, h: 380, rot: -.03, order: 300, color: '#f3efe2', lined: false, tIn: Wt('мимо') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -210, -110, `700 28px ${MONO}`); drawTyped(g, it.b, t, -210, -50, `700 28px ${MONO}`); drawTyped(g, it.c, t, -210, 40, `800 40px ${SANS}`, RED); drawTyped(g, it.d, t, -210, 110, `700 24px ${MONO}`, '#666'); } });
  pb.a = typed('случайный прохожий', Wt('случайный') - .1, .03); pb.b = typed('хотел помочь', Wt('помочь') - .4, .04); pb.c = typed('УБИТ', Wt('убивают') - .1, .08); pb.d = typed('просто остановился', Wt('остановился') - .6, .03);
  dlgShot('d_passer', A3[0] + 200, A3[1] - 20, { w: 880, order: 310 });
  goTo(A3, Wt('пустыне') + .6, Wt('мимо') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('мимо') - .1, Wt('остановился') + .3, A3[0] - 560, A3[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_passer + .1, A3[0] + 200, A3[1] - 20, 1.08, 0); camKey(DLGT.d_passer + 14.3, A3[0] + 200, A3[1] + 40, 1.2, .01);

  // S4 · his fault: he finds the dead man's family and secretly gives them money — as if money fixes anything
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const gf = card({ x: A4[0] - 100, y: A4[1] - 40, w: 860, h: 420, rot: -.015, order: 400, lined: false, tIn: Wt('планировал') - .5, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -380, -130, `700 30px ${MONO}`, '#666'); drawTyped(g, it.b, t, -380, -60, `800 44px ${SANS}`, RED);
      drawTyped(g, it.c, t, -380, 30, `700 28px ${MONO}`); drawTyped(g, it.d, t, -380, 130, `400 italic 32px "DejaVu Serif"`); } });
  gf.a = typed('не планировал', Wt('планировал') - .3, .04); gf.b = typed('НО ЭТО ЕГО ВИНА', Wt('вина') - .5, .04);
  gf.c = typed('→ деньги семье убитого, тайно', Wt('семью') - .3, .03); gf.d = typed('как будто деньгами можно что-то исправить', Wt('исправить') - 1.4, .025, { silent: true });
  goTo(A4, DLGT.d_passer + 14.5, Wt('майк', 3) - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('майк', 3) - .2, Wt('виноват') + .3, A4[0] - 100, A4[1] - 100, 1.05, -.01, { dz: .05 });
  camKey(Wt('исправить') + .3, A4[0] - 100, A4[1] + 60, 1.1, -.01);

  // S5 · he decides to kill Hector: sniper on the hill, Hector in the sights; a car horn; a note: "DON'T" — left by Gus Fring
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1.05);
  pw('scope', Wt('решает') - .4, { x: A5[0] - 560, y: A5[1] - 160, w: 480, rot: -.05, order: 500, off: 2, caption: capt('ГЕКТОР НА ПРИЦЕЛЕ', Wt('прицеле')), capSize: 22 });
  pw('sniper', Wt('лежит') - .4, { x: A5[0] - 560, y: A5[1] + 260, w: 480, rot: .04, order: 505, off: 2 });
  pw('horn', Wt('сигналит') - .5, { x: A5[0] + 260, y: A5[1] - 160, w: 520, rot: .03, order: 510, off: 2, caption: capt('СИГНАЛ', Wt('сигналит')), capSize: 22 });
  const nt = card({ x: A5[0] + 300, y: A5[1] + 280, w: 520, h: 300, rot: -.03, order: 520, color: '#fbf8ee', lined: false, tIn: Wt('стекле') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, 0, `700 italic 90px "DejaVu Serif"`, INK, 'center'); drawTyped(g, it.b, t, 0, 100, `700 26px ${MONO}`, RED, 'center'); } });
  nt.a = typed('«Не надо»', Wt('надо') - .5, .08, { silent: true }); nt.b = typed('— Гус Фринг', Wt('фринг') - .3, .05);
  goTo(A5, Wt('исправить') + .6, Wt('решает') - .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('решает') - .1, Wt('прицеле') + .3, A5[0] - 560, A5[1] + 40, .98, -.015, { dz: .05 });
  camKey(Wt('сигналит') + .1, A5[0] + 260, A5[1] - 140, 1.08, .015); camKey(Wt('стекле') + .1, A5[0] + 300, A5[1] + 260, 1.1, -.01);
  camKey(Wt('фринг') + .3, A5[0] + 300, A5[1] + 270, 1.2, -.015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
