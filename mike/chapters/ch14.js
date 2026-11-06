// 14 · РЕКА  (inserts: Walt "имена твоих девяти человек" + Mike "знал бы своё место"; Walt "можно было избежать" + Mike "дай помереть спокойно")
CH_V0 = 735.8;
const [T_START, T_END] = chRange(14);
function buildScenes() {
  const D = [0, 0]; divider(D, 14, 'РЕКА', T_START);
  hold(T_START, Wt('шрейдер') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Hank gets on Mike's trail; Kaylee's account frozen, the money he saved for years — taken
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('hankface', Wt('шрейдер') - .3, { x: A1[0] - 620, y: A1[1] - 160, w: 400, rot: -.05, order: 100, caption: capt('ХЭНК НА СЛЕДЕ', Wt('след')), capSize: 22 });
  const bk = pw('bank', Wt('счёт') - .4, { x: A1[0] + 200, y: A1[1] - 40, w: 760, rot: .015, order: 110, off: 3, caption: capt('СЧЁТ КЕЙЛИ', Wt('кейли')), capSize: 24 });
  bk.stamps = [stamp('ЗАМОРОЖЕН', Wt('замораживают') - .1, { x: 0, y: 60, size: 80, rot: -.08, shake: 16 })];
  card({ x: A1[0] - 560, y: A1[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('годами — внучке', Wt('годами') - .2, .6, { size: 44, rot: -.04 })] });
  goTo(A1, Wt('шрейдер') + .2, Wt('выходит') + .2, A1[0] - 760, A1[1] - 400);
  camKey(Wt('след'), A1[0] - 560, A1[1] - 120, 1.05, -.015); camKey(Wt('счёт') + .1, A1[0] + 200, A1[1] - 40, 1.02, .015);
  camKey(Wt('годами'), A1[0] - 100, A1[1] + 120, .9, 0);

  // S2 · it's over: says goodbye to Kaylee in the park, leaves her on the swings, walks away when he sees police; tries to run
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  card({ x: A2[0] - 560, y: A2[1] - 320, w: 1, h: 1, shadow: 0, lit: false, order: 190, tIn: 0, scrawls: [scrawl('всё кончено', Wt('кончено') - .4, .5, { size: 52, rot: -.05 })] });
  pw('park', Wt('прощается') - .4, { x: A2[0] - 360, y: A2[1] - 20, w: 720, rot: -.015, order: 200, off: 2, caption: capt('ПРОЩАНИЕ', Wt('прощается')), capSize: 24 });
  pw('leavekaylee', Wt('качелях') - .4, { x: A2[0] + 560, y: A2[1] - 140, w: 440, rot: .04, order: 210, off: 2, caption: capt('НА КАЧЕЛЯХ', Wt('качелях')), capSize: 20 });
  pw('parkcall', Wt('полицию') - .5, { x: A2[0] + 560, y: A2[1] + 240, w: 440, rot: -.03, order: 220, off: 2, caption: capt('ПОЛИЦИЯ', Wt('полицию')), capSize: 20 });
  goTo(A2, Wt('забирают') + .4, Wt('кончено') - .2, A2[0] - 860, A2[1] - 440);
  camKey(Wt('прощается'), A2[0] - 360, A2[1] - 20, 1.05, -.015); camKey(Wt('качелях') + .1, A2[0] + 540, A2[1] - 120, 1.1, .015);
  camKey(Wt('видит') + .1, A2[0] + 540, A2[1] + 220, 1.1, -.01);

  // S3 · Walter brings him a bag of money and demands the names of the nine (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('riverarrive', Wt('привозит') - .4, { x: A3[0] - 620, y: A3[1] - 140, w: 480, rot: -.05, order: 300, off: 2, caption: capt('СУМКА С ДЕНЬГАМИ', Wt('деньгами')), capSize: 22 });
  const dm = card({ x: A3[0] - 620, y: A3[1] + 260, w: 480, h: 180, rot: .03, order: 305, color: '#f3efe2', lined: false, tIn: Wt('требует') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `800 36px ${SANS}`, RED, 'center'); } });
  dm.a = typed('требует:', Wt('требует') - .1, .05); dm.b = typed('ИМЕНА ДЕВЯТЕРЫХ', Wt('имена') - .1, .04);
  dlgShot('d_names', A3[0] + 200, A3[1] - 20, { w: 880, order: 310 });
  goTo(A3, Wt('уехать') + .3, Wt('привозит') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('привозит') - .2, DLGT.d_names - .2, A3[0] - 560, A3[1] + 40, 1.0, -.015, { dz: .05 });
  camKey(DLGT.d_names + .1, A3[0] + 200, A3[1] - 20, 1.08, 0); camKey(DLGT.d_names + 8.1, A3[0] + 200, A3[1] + 20, 1.16, .01);

  // S3b · the argument: everything fell apart because of Walter's pride (original dub)
  const A3b = [6800, 950]; lamp(A3b[0], A3b[1] - 200, 1900, .9);
  dlgShot('d_place', A3b[0] - 60, A3b[1] - 40, { w: 900, order: 350 });
  const pr = card({ x: A3b[0] - 60, y: A3b[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 360, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  pr.s = stamp('ГОРДОСТЬ', DLGT.d_place + 12, { size: 70, rot: -.06, shake: 14 });
  goTo(A3b, DLGT.d_names + 8.2, DLGT.d_place - .1, A3b[0] - 860, A3b[1] - 460);
  camKey(DLGT.d_place + .1, A3b[0] - 60, A3b[1] - 40, 1.08, 0); camKey(DLGT.d_place + 17.1, A3b[0] - 60, A3b[1] + 80, 1.12, .01);

  // S4 · Walter can't take it: shoots Mike in the stomach; wounded, Mike drives to the river, sits on the bank
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const sh = pw('shot7', Wt('выдерживает') - .4, { x: A4[0] - 380, y: A4[1] - 60, w: 720, rot: -.015, order: 400, off: 2 });
  sh.stamps = [stamp('ВЫСТРЕЛ', Wt('стреляет') + .1, { x: 0, y: 70, size: 96, rot: -.08, shake: 22 })];
  sfx('shot', Wt('стреляет') + .1); shake(Wt('стреляет') + .1, 18);
  pw('riverbank', Wt('реке') - .4, { x: A4[0] + 600, y: A4[1] - 40, w: 480, rot: .04, order: 410, off: 2, caption: capt('У РЕКИ', Wt('берегу')), capSize: 22 });
  goTo(A4, DLGT.d_place + 17.3, Wt('выдерживает') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('выдерживает') - .1, Wt('раненый'), A4[0] - 380, A4[1] - 60, 1.05, -.015, { dz: .06 });
  camKey(Wt('уезжает'), A4[0] + 580, A4[1] - 40, 1.05, .015); camKey(Wt('берегу') + .4, A4[0] + 580, A4[1] - 20, 1.12, .015);

  // S5 · Walter follows: apologizes, explains, justifies; Mike's last words (original dub)
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1800, .8);
  pw('riverwalt', Wt('идёт') - .4, { x: A5[0] - 600, y: A5[1] - 140, w: 460, rot: -.05, order: 500, off: 2 });
  const ex = typedCard({ x: A5[0] - 600, y: A5[1] + 260, w: 460, h: 220, rot: .03, order: 505, tIn: Wt('извиняться') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200 },
    [[typed('извиняется', Wt('извиняться') - .1, .04), -180, -60, `700 28px ${MONO}`], [typed('объясняет', Wt('объяснять') - .1, .04), -180, 0, `700 28px ${MONO}`], [typed('оправдывается', Wt('оправдываться') - .1, .04), -180, 60, `700 28px ${MONO}`]]);
  dlgShot('d_avoid', A5[0] + 220, A5[1] - 20, { w: 860, order: 510 });
  dlgShot('d_peace', A5[0] + 240, A5[1] - 10, { w: 880, order: 520 });
  goTo(A5, Wt('берегу') + .5, Wt('идёт') - .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('идёт') - .1, Wt('жизни') + .3, A5[0] - 560, A5[1] + 40, 1.0, -.015, { dz: .05 });
  camKey(DLGT.d_avoid + .1, A5[0] + 220, A5[1] - 20, 1.08, 0); camKey(DLGT.d_peace + .1, A5[0] + 240, A5[1] - 10, 1.14, 0); camKey(DLGT.d_peace + 3.5, A5[0] + 240, A5[1] + 10, 1.22, .01);

  // S6 · dies looking at the river — quietly, no drama, as he lived; a minute later Walter understands he killed him for nothing
  const A6 = [-300, 3600]; lamp(A6[0], A6[1] - 200, 1800, .75);
  const rd = pw('riverdeath', Wt('умирает') - .4, { x: A6[0] - 300, y: A6[1] - 60, w: 800, rot: -.015, order: 600, off: 2, caption: capt('ТИХО, БЕЗ ДРАМЫ', Wt('драмы') - .3), capSize: 24 });
  const zr = card({ x: A6[0] + 640, y: A6[1] - 20, w: 440, h: 320, rot: .03, order: 610, color: '#f3efe2', lined: false, tIn: Wt('минуту') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -80, `800 56px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 0, 0, `700 24px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, 0, 50, `700 24px ${MONO}`, INK, 'center'); } });
  zr.a = typed('ЗРЯ', Wt('зря') - .1, .08); zr.b = typed('имена можно было', Wt('получить') - .1, .03); zr.c = typed('получить у другого', Wt('другого') - .3, .03);
  goTo(A6, DLGT.d_peace + 3.6, Wt('умирает') - .1, A6[0] - 860, A6[1] - 460);
  hold(Wt('умирает') - .1, Wt('жил') + .4, A6[0] - 300, A6[1] - 60, 1.05, -.01, { dz: .08 });
  camKey(Wt('минуту'), A6[0] + 620, A6[1] - 20, 1.05, .015); camKey(T_END, A6[0] + 620, A6[1] + 20, 1.14, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
