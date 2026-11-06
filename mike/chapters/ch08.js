// 08 · ВЕРНЕР  (inserts: "Ты клянёшься? — Я клянусь..."; "В небе Нью-Мексико видно так много звёзд")
CH_V0 = 435.2;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'ВЕРНЕР', T_START);
  hold(T_START, Wt('грустная') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the saddest story: Werner Ziegler; Gus's superlab under the laundry; German engineers; their chief — kind, smiling, loves his wife and the stars
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('wernerspa', Wt('вернер') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 700, rot: -.02, order: 100, off: 3, caption: capt('ВЕРНЕР ЦИГЛЕР', Wt('циглер')), capSize: 28 });
  const lb = card({ x: A1[0] + 560, y: A1[1] - 60, w: 480, h: 400, rot: .03, order: 110, lined: true, tIn: Wt('строит') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -210, -150, `800 30px ${SANS}`); drawChecks(g, t, it.cl, `700 24px ${MONO}`); } });
  lb.a = typed('СУПЕРЛАБОРАТОРИЯ', Wt('суперлабораторию') - .3, .03);
  lb.cl = [checkLine('ПОД ПРАЧЕЧНОЙ', Wt('прачечной') + .1, 'v', -190, -70), checkLine('ГДЕ ВАРИТ УОЛТЕР', Wt('уолтер') + .1, 'v', -190, -10), checkLine('НЕМЕЦКИЕ ИНЖЕНЕРЫ', Wt('немецкие') + .3, 'v', -190, 50), checkLine('МАЙК ПРИСМАТРИВАЕТ', Wt('присматривает') + .1, 'v', -190, 110)];
  card({ x: A1[0] - 400, y: A1[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('добрый · любит жену · рассказывает о звёздах', Wt('добрый') - .1, 1.2, { size: 38, rot: -.03 })] });
  goTo(A1, Wt('грустная') + .2, Wt('вернер') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('вернер') - .1, Wt('гус') - .2, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('строит') + .1, A1[0] + 520, A1[1] - 40, 1.05, .015); camKey(Wt('добрый') + .2, A1[0] - 300, A1[1] + 200, .92, -.01); camKey(Wt('звёздах') + .4, A1[0] - 200, A1[1] + 220, .98, -.01);

  // S2 · Mike grows attached; Werner can't bear months locked up and runs to see his wife; for Gus — betrayal
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1800, .85);
  pw('mikefinds', Wt('привязывается') - .5, { x: A2[0] - 600, y: A2[1] - 160, w: 480, rot: -.05, order: 200, off: 1 });
  const es = pw('wernergone', Wt('сбегает') - .5, { x: A2[0] + 240, y: A2[1] - 60, w: 760, rot: .015, order: 210, off: 2 });
  es.stamps = [stamp('ПОБЕГ', Wt('сбегает') - .1, { x: 0, y: 70, size: 90, rot: -.08, shake: 16 })];
  const bt = card({ x: A2[0] - 560, y: A2[1] + 260, w: 480, h: 180, rot: .03, order: 220, lined: false, tIn: Wt('предательство') - .5, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `800 38px ${SANS}`, RED, 'center'); } });
  bt.a = typed('для Гуса:', Wt('предательство') - .4, .04); bt.b = typed('ПРЕДАТЕЛЬСТВО', Wt('предательство') - .1, .04);
  goTo(A2, Wt('звёздах') + .8, Wt('привязывается') - .3, A2[0] - 860, A2[1] - 460);
  hold(Wt('привязывается') - .3, Wt('взаперти') - .4, A2[0] - 600, A2[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('сбегает') + .1, A2[0] + 240, A2[1] - 60, 1.02, .015); camKey(Wt('предательство') + .2, A2[0] - 520, A2[1] + 240, 1.08, -.01);

  // S3 · Mike knows how it ends: Gus's people — terrible; Mike himself — at least quick
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .8);
  const ch = card({ x: A3[0] - 100, y: A3[1] - 40, w: 900, h: 420, rot: -.015, order: 300, lined: false, tIn: Wt('понимает') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 170); g.stroke(); drawTyped(g, it.hd, t, 0, -180, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -225, -80, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, 20, `800 40px ${SANS}`, RED, 'center');
      drawTyped(g, it.c, t, 225, -80, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.d, t, 225, 20, `800 40px ${SANS}`, '#555', 'center'); } });
  ch.hd = typed('чем это кончится', Wt('кончится') - .3, .04); ch.a = typed('люди Гуса', Wt('убьют') - .2, .04); ch.b = typed('СТРАШНО', Wt('страшно') - .2, .06);
  ch.c = typed('сам Майк', Wt('сделает') - .2, .04); ch.d = typed('БЫСТРО', Wt('быстро') - .2, .07);
  goTo(A3, Wt('предательство') + .7, Wt('понимает') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('понимает') - .1, Wt('страшно') + .3, A3[0] - 320, A3[1] - 40, 1.08, -.015, { dz: .05 });
  camKey(Wt('быстро') + .3, A3[0] + 130, A3[1] - 20, 1.08, .015);

  // S4 · he finds Werner; night under the stars; Werner understands; asks one thing — don't touch his wife; Mike promises (original dub, two inserts)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1700, .75);
  pw('wernernight', Wt('находит') - .4, { x: A4[0] - 620, y: A4[1] - 180, w: 480, rot: -.05, order: 400, off: 2, caption: capt('НОЧЬ', Wt('ночью')), capSize: 24 });
  const rq = card({ x: A4[0] - 620, y: A4[1] + 240, w: 480, h: 200, rot: .03, order: 405, color: '#f3efe2', lined: false, tIn: Wt('просит') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `700 24px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `400 italic 32px "DejaVu Serif"`, RED, 'center'); } });
  rq.a = typed('одна просьба:', Wt('просит') - .1, .04); rq.b = typed('«не трогайте жену»', Wt('жену') - .6, .04, { silent: true });
  dlgShot('d_swear', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  goTo(A4, Wt('быстро') + .7, Wt('находит') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('находит') - .1, Wt('просит') + .1, A4[0] - 600, A4[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('жену') + .1, A4[0] - 600, A4[1] + 220, 1.1, .015);
  camKey(DLGT.d_swear + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_swear + 12.8, A4[0] + 180, A4[1] + 20, 1.18, .01);

  // S4b · the stars (original dub) — then: "and he shoots"
  const A4b = [-300, 1900]; lamp(A4b[0], A4b[1] - 200, 1600, .7);
  dlgShot('d_stars', A4b[0] - 60, A4b[1] - 40, { w: 900, order: 450 });
  const sh = card({ x: A4b[0] - 60, y: A4b[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 460, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sh.s = stamp('ВЫСТРЕЛ', Wt('стреляет') - .1, { size: 90, rot: -.08, shake: 26 });
  sfx('shot', Wt('стреляет') + .1); shake(Wt('стреляет') + .1, 16);
  goTo(A4b, DLGT.d_swear + 13, DLGT.d_stars - .1, A4b[0] - 860, A4b[1] - 460);
  camKey(DLGT.d_stars + .1, A4b[0] - 60, A4b[1] - 40, 1.08, 0); camKey(DLGT.d_stars + 16.2, A4b[0] - 60, A4b[1] + 20, 1.2, .01); camKey(Wt('стреляет') + .5, A4b[0] - 60, A4b[1] + 200, 1.0, 0);

  // S5 · after that Mike breaks for a long time: drinks, picks fights with street punks, almost asks for it; right is not the same as bearable
  const A5 = [6800, 950]; lamp(A5[0], A5[1] - 200, 1900, .9);
  pw('lab', Wt('ломается') - .5, { x: A5[0] - 400, y: A5[1] - 40, w: 680, rot: -.02, order: 500, off: 2, caption: capt('НАДОЛГО СЛОМАН', Wt('ломается')), capSize: 22 });
  const af = card({ x: A5[0] + 560, y: A5[1] - 60, w: 440, h: 300, rot: .03, order: 510, lined: true, tIn: Wt('пьёт') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  af.cl = [checkLine('ПЬЁТ', Wt('пьёт') + .1, 'v', -190, -70), checkLine('ДРАКИ СО ШПАНОЙ', Wt('шпаной') + .1, 'v', -190, 0), checkLine('ПОДСТАВЛЯЕТСЯ', Wt('подставляется') + .1, 'v', -190, 70)];
  const rb = card({ x: A5[0], y: A5[1] + 400, w: 900, h: 160, rot: -.015, order: 520, lined: false, tIn: Wt('правильное') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, 10, `800 38px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 10, `800 44px ${SANS}`, RED, 'center'); drawTyped(g, it.b, t, 230, 10, `800 38px ${SANS}`, INK, 'center'); } });
  rb.a = typed('ПРАВИЛЬНОЕ', Wt('правильное') - .1, .04); rb.c = typed('≠', Wt('выносимое') - .4, .1); rb.b = typed('ВЫНОСИМОЕ', Wt('выносимое') - .1, .04);
  goTo(A5, Wt('стреляет') + .9, Wt('после') - .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('после') - .1, Wt('ломается') + .4, A5[0] - 400, A5[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('пьёт') + .1, A5[0] + 520, A5[1] - 40, 1.05, .015); camKey(Wt('правильное') + .2, A5[0], A5[1] + 240, .95, 0); camKey(T_END, A5[0], A5[1] + 280, 1.05, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
