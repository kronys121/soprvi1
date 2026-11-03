// 04 · ЭЛЬ-ПАСО
CH_V0 = 244.3;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'ЭЛЬ-ПАСО', T_START);
  hold(T_START, Wt('дают') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · El Paso with Mexican colleagues; the first desert run: what the cartel left the police — a head on a turtle
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1.05);
  pw('elpaso', Wt('эль-пасо') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 1, caption: capt('ЭЛЬ-ПАСО · ГРАНИЦА', Wt('коллегами')), capSize: 24 });
  const tt = pw('turtle', Wt('голову') - .5, { x: A1[0] + 560, y: A1[1] - 40, w: 500, rot: .04, order: 110, off: 1, caption: capt('ГОЛОВА НА ЧЕРЕПАХЕ', Wt('черепахи') - .3), capSize: 22 });
  tag({ x: A1[0] + 560, y: A1[1] - 360, w: 380, rot: .06, label: 'ПОДАРОК КАРТЕЛЯ', tIn: Wt('картель') - .05, order: 120, size: 32 });
  goTo(A1, Wt('дают') + .2, Wt('эль-пасо') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('эль-пасо') - .1, Wt('полиции') + .1, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('голову') + .1, A1[0] + 520, A1[1] - 40, 1.08, .015); camKey(Wt('черепахи') + .5, A1[0] + 540, A1[1] - 20, 1.18, .015);

  // S2 · the head explodes; people torn apart in front of Hank; he survives, barely hurt — but inside it breaks for good
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  const ex = pw('explosion', Wt('пока') - .2, { x: A2[0] - 300, y: A2[1] - 40, w: 820, rot: -.015, order: 200, off: 2 });
  ex.stamps = [stamp('ВЗРЫВ', Wt('взрывается') - .05, { x: 0, y: 80, size: 100, rot: -.07, shake: 30 })];
  sfx('boom', Wt('взрывается') - .05); shake(Wt('взрывается') - .05, .6, 24);
  const sv = pw('hankshock', Wt('выживает') - .4, { x: A2[0] + 640, y: A2[1] - 160, w: 440, rot: .05, order: 210, off: 6, caption: capt('ВЫЖИЛ · ПОЧТИ НЕ РАНЕН', Wt('ранен') - .3), capSize: 18 });
  card({ x: A2[0] + 600, y: A2[1] + 280, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('внутри — сломалось', Wt('ломается') - .3, .5, { size: 50, rot: -.05 })] });
  goTo(A2, Wt('черепахи') + .7, Wt('пока') + .1, A2[0] - 860, A2[1] - 440);
  camKey(Wt('пока') + .2, A2[0] - 300, A2[1] - 40, 1.05, -.01); camKey(Wt('взрывается') + .1, A2[0] - 300, A2[1] - 40, 1.28, .03); camKey(Wt('=хэнка') + .2, A2[0] - 300, A2[1], 1.1, 0);
  camKey(Wt('выживает') + .2, A2[0] + 600, A2[1] - 140, 1.08, .015); camKey(Wt('окончательно') + .4, A2[0] + 560, A2[1] + 160, 1.0, .01);

  // S3 · back in Albuquerque; offered the border promotion again — he finds an excuse; no one knows why, not even he says it
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const rf = card({ x: A3[0] - 120, y: A3[1] - 60, w: 860, h: 400, rot: -.015, order: 300, lined: true, tIn: Wt('вскоре') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -380, -120, `700 30px ${MONO}`); drawTyped(g, it.b, t, -380, -50, `700 30px ${MONO}`); drawTyped(g, it.c, t, -380, 30, `800 46px ${SANS}`, RED); drawTyped(g, it.d, t, -380, 120, `700 28px ${MONO}`, '#666'); } });
  rf.a = typed('снова в Альбукерке', Wt('альбукерке') - .3, .03); rf.b = typed('повышение на границе?', Wt('повышение') - .2, .03); rf.c = typed('ОТКАЗ', Wt('отказаться') - .2, .07);
  rf.d = typed('причина: никто не знает', Wt('никто') - .1, .03);
  pw('hankoffice', Wt('называет') - .8, { x: A3[0] + 640, y: A3[1] + 320, w: 400, rot: .05, order: 310, off: 9 });
  goTo(A3, Wt('окончательно') + .8, Wt('вскоре') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('вскоре') + .1, Wt('отказаться') + .5, A3[0] - 120, A3[1] - 60, 1.08, -.01, { dz: .05 });
  camKey(Wt('никто') + .2, A3[0] + 100, A3[1] + 80, .92, .01); camKey(Wt('называет') + .3, A3[0] + 300, A3[1] + 200, .95, .01);

  // S4 · the parallel: Walt grows bolder, Hank shakes; one learns he's stronger, the other weaker — same table every Sunday
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const pa = card({ x: A4[0] - 100, y: A4[1] - 60, w: 900, h: 460, rot: -.015, order: 400, lined: false, tIn: Wt('обратите') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -165); g.lineTo(0, 190); g.stroke(); drawTyped(g, it.h, t, 0, -195, `700 26px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -225, -125, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, -60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, -225, 30, `800 40px ${SANS}`, RED, 'center');
      drawTyped(g, it.d, t, 225, -125, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.e, t, 225, -60, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.f, t, 225, 30, `800 40px ${SANS}`, '#888', 'center'); } });
  pa.h = typed('одна и та же линия, два человека', Wt('обратите') + .1, .03); pa.a = typed('УОЛТЕР ↑', Wt('уолтер') - .1, .05); pa.b = typed('всё смелее', Wt('смелее') - .3, .04); pa.c = typed('СИЛЬНЕЕ', Wt('сильнее') - .1, .06);
  pa.d = typed('ХЭНК ↓', Wt('=хэнка', 2) - .3, .05); pa.e = typed('трясёт', Wt('трясёт') - .2, .05); pa.f = typed('СЛАБЕЕ', Wt('слабее') - .1, .06);
  pw('dinner', Wt('двое') - .4, { x: A4[0] - 100, y: A4[1] + 470, w: 520, rot: .02, order: 410, off: 6, caption: capt('КАЖДОЕ ВОСКРЕСЕНЬЕ · ОДИН СТОЛ', Wt('воскресенье')), capSize: 18 });
  goTo(A4, Wt('называет') + .6, Wt('обратите') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('обратите') + .1, Wt('линией') + .3, A4[0] - 100, A4[1] - 60, 1.02, -.01, { dz: .05 });
  camKey(Wt('смелее') + .2, A4[0] - 320, A4[1] - 60, 1.1, -.015); camKey(Wt('трясёт') + .2, A4[0] + 130, A4[1] - 60, 1.1, .015);
  camKey(Wt('считать') + .3, A4[0] - 100, A4[1] + 40, .95, 0); camKey(Wt('двое') + .3, A4[0] - 100, A4[1] + 380, 1.0, -.01); camKey(T_END, A4[0] - 100, A4[1] + 420, 1.1, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
