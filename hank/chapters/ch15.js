// 15 · ВЕРДИКТ  (insert: "Это GPS-координаты... Там найдут Хэнка и Стива Гомеса.")
CH_V0 = 936.1;
const [T_START, T_END] = chRange(15);
function buildScenes() {
  const D = [0, 0]; divider(D, 15, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('кто') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · so who is Hank Schrader? a comic character who turned out a tragic hero? too simple
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  mugBoard(A1, { still: 'hankface' }, typed('ШРЕЙДЕР, ХЭНК', Wt('шрейдер') - .3, .045), typed('комический? трагический?', Wt('трагическим') - .3, .03, { silent: true }), { order: 100 });
  const sp = card({ x: A1[0] + 760, y: A1[1] + 280, w: 1, h: 1, shadow: 0, lit: false, order: 110, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sp.s = stamp('СЛИШКОМ ПРОСТО', Wt('просто') - .2, { size: 60, rot: -.08, shake: 14 });
  goTo(A1, Wt('кто') + .2, Wt('такой') + .1, A1[0] - 760, A1[1] - 500);
  hold(Wt('такой') + .1, Wt('героем') + .3, A1[0], A1[1] - 20, 1.0, .01, { dz: .05 });
  camKey(Wt('просто') + .2, A1[0] + 400, A1[1] + 160, .95, .015);

  // S2 · Hank is Walt's mirror: both feared looking weak; Walt became a monster to be respected; Hank stayed himself — and his pride killed him
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const mr = card({ x: A2[0] - 100, y: A2[1] - 40, w: 920, h: 480, rot: -.015, order: 200, lined: false, tIn: Wt('зеркало') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 200); g.stroke(); drawTyped(g, it.hd, t, 0, -195, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -230, -110, `800 38px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -230, -40, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, -230, 30, `800 34px ${SANS}`, '#888', 'center');
      drawTyped(g, it.d, t, 230, -110, `800 38px ${SANS}`, INK, 'center'); drawTyped(g, it.e, t, 230, -40, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.f, t, 230, 30, `800 34px ${SANS}`, INK, 'center'); drawTyped(g, it.g2, t, 230, 140, `800 36px ${SANS}`, RED, 'center'); } });
  mr.hd = typed('общий страх: выглядеть слабым', Wt('зеркало') + .3, .03);
  mr.a = typed('УОЛТЕР', Wt('уолтер', 2) - .1, .06); mr.b = typed('стал Хайзенбергом', Wt('хайзенберга') - .3, .03); mr.c = typed('ЧУДОВИЩЕ', Wt('чудовищем') - .1, .05);
  mr.d = typed('ХЭНК', Wt('=хэнк', 3) - .1, .06); mr.e = typed('остался собой', Wt('остался') - .1, .04); mr.f = typed('атаки · костыли · гордость', Wt('паническими') - .2, .03); mr.g2 = typed('ГОРДОСТЬ УБИЛА', Wt('убила') - .4, .04);
  goTo(A2, Wt('просто') + .7, Wt('зеркало') - .2, A2[0] - 860, A2[1] - 460);
  hold(Wt('зеркало') - .2, Wt('слабыми') + .3, A2[0] - 100, A2[1] - 140, 1.0, -.01, { dz: .04 });
  camKey(Wt('уважали') + .3, A2[0] - 330, A2[1] - 40, 1.12, -.015); camKey(Wt('гордостью') + .3, A2[0] + 130, A2[1] - 40, 1.12, .015); camKey(Wt('убила') + .4, A2[0] + 130, A2[1] + 60, 1.2, .015);

  // S3 · but in one thing he won: Walt did it all for himself; Hank died for what he believed — he could have looked away, kept career and family; he drove to the desert to cuff the man he loved like a brother
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('waltface', Wt('финале') - .4, { x: A3[0] - 620, y: A3[1] - 180, w: 460, rot: -.05, order: 300, caption: capt('УОЛТЕР: «РАДИ СЕБЯ»', Wt('себя') - .2), capSize: 20 });
  const wn = card({ x: A3[0] - 620, y: A3[1] + 240, w: 480, h: 200, rot: .03, order: 305, lined: false, tIn: Wt('нравилось') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `400 italic 30px "DejaVu Serif"`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `400 italic 30px "DejaVu Serif"`, INK, 'center'); } });
  wn.a = typed('«мне это нравилось»', Wt('нравилось') - .1, .04, { silent: true }); wn.b = typed('«я чувствовал себя живым»', Wt('живым') - .5, .04, { silent: true });
  const hk = pw('cuffs', Wt('умер') - .5, { x: A3[0] + 320, y: A3[1] - 40, w: 720, rot: .015, order: 310, off: 4, caption: capt('ХЭНК: «РАДИ ТОГО, ВО ЧТО ВЕРИЛ»', Wt('верил') - .3), capSize: 20 });
  const cn = card({ x: A3[0] + 320, y: A3[1] + 420, w: 620, h: 220, rot: -.02, order: 320, lined: true, tIn: Wt('отвернуться') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 24px ${MONO}`) });
  cn.cl = [checkLine('МОГ ОТВЕРНУТЬСЯ', Wt('отвернуться') + .1, 'x', -280, -60), checkLine('МОГ ПРОМОЛЧАТЬ', Wt('промолчать') + .1, 'x', -280, 0), checkLine('МОГ СОХРАНИТЬ КАРЬЕРУ', Wt('карьеру') + .1, 'x', -280, 60)];
  card({ x: A3[0] + 320, y: A3[1] - 420, w: 1, h: 1, shadow: 0, lit: false, order: 330, tIn: 0, scrawls: [scrawl('любил как брата', Wt('любил') - .2, .5, { size: 52, rot: -.04 })] });
  goTo(A3, Wt('убила') + .7, Wt('одном') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('одном') + .1, Wt('себя') + .4, A3[0] - 600, A3[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('нравилось') + .1, A3[0] - 600, A3[1] + 220, 1.1, .015); camKey(Wt('умер') + .2, A3[0] + 320, A3[1] - 40, 1.02, .015);
  camKey(Wt('отвернуться') + .2, A3[0] + 320, A3[1] + 300, 1.05, -.01); camKey(Wt('пустыню') + .3, A3[0] + 320, A3[1] - 100, .95, .01); camKey(Wt('брата') + .4, A3[0] + 320, A3[1] - 200, 1.05, .01);

  // S4 · and last: in the finale Walt gives Skyler the coordinates of the grave (original dub) — even Heisenberg admitted Hank was the only truly good man
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .9);
  pw('ticket', Wt('последнее') - .4, { x: A4[0] - 620, y: A4[1] - 180, w: 480, rot: -.05, order: 400, off: 2, caption: capt('ЛОТЕРЕЙНЫЙ БИЛЕТ · КООРДИНАТЫ', Wt('координаты') - .3), capSize: 18 });
  const fr = card({ x: A4[0] - 620, y: A4[1] + 240, w: 480, h: 200, rot: .03, order: 405, lined: false, tIn: Wt('выторговать') - .4, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, -200, -30, `700 26px ${MONO}`); drawTyped(g, it.b, t, -200, 30, `700 26px ${MONO}`); } });
  fr.a = typed('Скайлер — свобода', Wt('свободу') - .4, .03); fr.b = typed('Мари — похоронить мужа', Wt('похоронить') - .3, .03);
  dlgShot('d_coords', A4[0] + 180, A4[1] - 20, { w: 900, order: 410 });
  const gm = card({ x: A4[0] + 180, y: A4[1] + 470, w: 860, h: 170, rot: -.015, order: 420, lined: false, tIn: Wt('=хайзенберг') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -390, -20, `700 26px ${MONO}`); drawTyped(g, it.b, t, -390, 40, `800 34px ${SANS}`, RED); } });
  gm.a = typed('даже Хайзенберг признал:', Wt('=хайзенберг') - .2, .03); gm.b = typed('ЕДИНСТВЕННЫЙ ХОРОШИЙ ЧЕЛОВЕК', Wt('единственным') - .3, .03);
  goTo(A4, Wt('брата') + .6, Wt('последнее') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('последнее') - .1, Wt('гомес') + .3, A4[0] - 600, A4[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('свободу') + .1, A4[0] - 600, A4[1] + 220, 1.08, .015);
  camKey(DLGT.d_coords + .1, A4[0] + 180, A4[1] - 20, 1.08, 0); camKey(DLGT.d_coords + 15, A4[0] + 180, A4[1] + 40, 1.15, .01);
  camKey(Wt('=хайзенберг') + .2, A4[0] + 180, A4[1] + 300, 1.0, -.01); camKey(T_END, A4[0] + 180, A4[1] + 340, 1.1, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
