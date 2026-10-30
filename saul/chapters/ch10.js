// 10 · ХОВАРД  (inserts: Howard — "вы просто кайфанули"; Kim — "вместе мы — отрава")
CH_V0 = 690.6;
const [T_START, T_END] = chRange(10);
function buildScenes() {
  const D = [0, 0]; divider(D, 10, 'ХОВАРД', T_START);
  hold(T_START, Wt('временем') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Kim proposes the last con: destroy Howard Hamlin — not a villain, just smug and happy
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const tg = pw('howard', Wt('сама') - .2, { x: A1[0] - 400, y: A1[1] - 20, w: 700, rot: -.02, order: 100, off: 1, caption: capt('ХОВАРД ХЭМЛИН', Wt('хэмлина')), capSize: 26 });
  tg.stamps = [stamp('ЦЕЛЬ', Wt('уничтожить') + .1, { x: 200, y: -120, size: 70, rot: .08, shake: 14 })];
  const wh = card({ x: A1[0] + 560, y: A1[1] - 40, w: 500, h: 400, rot: .03, order: 110, lined: true, tIn: Wt('злодея') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  wh.cl = [checkLine('ЗЛОДЕЙ', Wt('злодея') + .1, 'x', -200, -120), checkLine('ПРЕСТУПНИК', Wt('преступника') + .1, 'x', -200, -40), checkLine('ВЫСОКОМЕРНЫЙ', Wt('высокомерного') + .1, 'v', -200, 40), checkLine('СЧАСТЛИВЫЙ', Wt('счастливого') + .1, 'v', -200, 120)];
  card({ x: A1[0] - 400, y: A1[1] - 420, w: 1, h: 1, shadow: 0, lit: false, order: 105, tIn: 0, scrawls: [scrawl('идея Ким', Wt('предлагает') - .1, .4, { size: 46, rot: -.05 })] });
  goTo(A1, Wt('временем') + .3, Wt('сама') + .1, A1[0] - 760, A1[1] - 460);
  hold(Wt('сама') + .1, Wt('хэмлина') + .4, A1[0] - 400, A1[1] - 120, 1.02, -.015, { dz: .05 });
  camKey(Wt('злодея') + .2, A1[0] + 500, A1[1] - 40, 1.05, .015); camKey(Wt('мешал') + .4, A1[0] + 520, A1[1] + 20, 1.12, .015);

  // S2 · months of planted evidence; a "drug addict" in front of all Albuquerque; they love doing it together
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const ev = typedCard({ x: A2[0] - 300, y: A2[1] - 60, w: 820, h: 460, rot: -.02, order: 200, tIn: Wt('месяцами') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('ОПЕРАЦИЯ «ХОВАРД»', Wt('месяцами') - .1, .04), -370, -160, `800 38px ${SANS}`], [typed('— месяцами', Wt('месяцами') + .4, .04), -350, -80, `700 30px ${MONO}`],
     [typed('— фальшивые улики', Wt('фальшивые') - .1, .035), -350, -20, `700 30px ${MONO}`], [typed('— «наркоман» на весь город', Wt('наркоманом') - .2, .03), -350, 40, `700 30px ${MONO}`],
     [typed('мотив: ИМ НРАВИТСЯ', Wt('нравится') - .2, .04), -370, 150, `800 40px ${SANS}`, RED]]);
  pw('kimlaugh', Wt('счёты') - .4, { x: A2[0] + 640, y: A2[1] - 40, w: 440, rot: .04, order: 210, off: 6, caption: capt('ВМЕСТЕ', Wt('вместе', 2)), capSize: 24 });
  goTo(A2, Wt('мешал') + .8, Wt('месяцами') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('месяцами') + .1, Wt('альбукерке') + .3, A2[0] - 300, A2[1] - 120, 1.08, -.015, { dz: .05 });
  camKey(Wt('счёты') + .2, A2[0] + 200, A2[1] - 40, .92, .01); camKey(Wt('делать') + .5, A2[0] - 100, A2[1] + 100, 1.05, -.01);

  // S3 · Howard comes to their home; he figured it out; he doesn't shout (original dub)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .85);
  pw('candle', Wt('вечером') - .4, { x: A3[0] - 620, y: A3[1] - 200, w: 480, rot: -.05, order: 300, off: 6, caption: capt('ВЕЧЕР · ИХ КВАРТИРА', Wt('домой')), capSize: 20 });
  const dg = card({ x: A3[0] - 620, y: A3[1] + 230, w: 480, h: 180, rot: .03, order: 305, lined: false, tIn: Wt('догадался') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `700 28px ${MONO}`, INK, 'center'); } });
  dg.a = typed('ДОГАДАЛСЯ', Wt('догадался') - .1, .05); dg.b = typed('не кричит', Wt('кричит') - .3, .04);
  dlgShot('d_howard', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  goTo(A3, Wt('делать') + 1.0, Wt('вечером') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('вечером') + .1, Wt('догадался') - .1, A3[0] - 600, A3[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('кричит') - .3, A3[0] - 600, A3[1] + 200, 1.1, .015);
  camKey(DLGT.d_howard + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_howard + 24.7, A3[0] + 180, A3[1] + 40, 1.22, .01);

  // S4 · Lalo walks in; one shot; Howard buried under Gus Fring's superlab
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1800, .8);
  const sh = pw('lalo', Wt('дверь') - .5, { x: A4[0] - 120, y: A4[1] - 40, w: 900, rot: -.01, order: 400, off: 4 });
  sh.stamps = [stamp('ОДИН ВЫСТРЕЛ', Wt('выстрел') - .1, { x: 0, y: 100, size: 72, rot: -.07, shake: 26 })];
  const bu = card({ x: A4[0] - 120, y: A4[1] + 470, w: 760, h: 150, rot: -.02, order: 410, color: '#d9d4c7', lined: false, tIn: Wt('закапывают') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -340, -20, `700 28px ${MONO}`); drawTyped(g, it.b, t, -340, 40, `800 34px ${SANS}`, RED); } });
  bu.a = typed('в фундаменте суперлаборатории', Wt('фундамент') - .1, .03); bu.b = typed('ГУСА ФРИНГА', Wt('гуса') - .1, .05);
  goTo(A4, DLGT.d_howard + 24.9, Wt('момент') + .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('лало') + .1, A4[0] - 120, A4[1] - 40, 1.1, 0); camKey(Wt('выстрел') + .1, A4[0] - 120, A4[1] - 40, 1.3, .03); camKey(Wt('гостиной') + .3, A4[0] - 120, A4[1] - 20, 1.15, 0);
  camKey(Wt('фундамент') + .2, A4[0] - 120, A4[1] + 300, .95, -.01);

  // S5 · Kim can't bear it: "together we're poison" (original dub); she leaves the law for sprinklers in Florida
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, .95);
  pw('breakup', Wt('выдерживает') - .5, { x: A5[0] - 620, y: A5[1] - 200, w: 480, rot: -.05, order: 500, off: 2, caption: capt('КИМ УХОДИТ', Wt('уходит')), capSize: 22 });
  dlgShot('d_poison', A5[0] + 180, A5[1] - 20, { w: 900, order: 510 });
  pw('kimoffice', Wt('флориду') - .5, { x: A5[0] - 620, y: A5[1] + 220, w: 480, rot: .04, order: 520, off: 2, caption: capt('ФЛОРИДА · ПОЛИВОЧНЫЕ СИСТЕМЫ', Wt('поливочных')), capSize: 18 });
  card({ x: A5[0] + 180, y: A5[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 530, tIn: 0, scrawls: [scrawl('чтобы наказать себя', Wt('наказать') - .2, .6, { size: 52, rot: -.04 })] });
  goTo(A5, Wt('фундамент') + 1.6, Wt('выдерживает') - .2, A5[0] - 860, A5[1] - 460);
  hold(Wt('выдерживает') - .2, DLGT.d_poison - .3, A5[0] - 600, A5[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_poison + .1, A5[0] + 180, A5[1] - 20, 1.08, 0); camKey(DLGT.d_poison + 11.5, A5[0] + 180, A5[1] + 20, 1.2, .01);
  camKey(Wt('флориду') + .2, A5[0] - 560, A5[1] + 200, 1.08, -.015); camKey(Wt('наказать') + .3, A5[0] - 100, A5[1] + 260, .9, 0);

  // S6 · alone: no brother, no Kim, no one left to be ashamed before; Saul for good — "Better Call Saul"
  const A6 = [6800, 950]; lamp(A6[0], A6[1] - 200, 2000, 1);
  const al = card({ x: A6[0] - 420, y: A6[1] - 80, w: 560, h: 420, rot: -.03, order: 600, lined: true, tIn: Wt('остаётся') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 30px ${MONO}`; g.textAlign = 'left'; g.fillText('ОСТАЛОСЬ:', -240, -150); drawChecks(g, t, it.cl, `700 30px ${MONO}`); drawTyped(g, it.a, t, 0, 160, `800 40px ${SANS}`, RED, 'center'); } });
  al.cl = [checkLine('БРАТ', Wt('брата') + .1, 'x', -220, -70), checkLine('КИМ', Wt('ким', 4) + .1, 'x', -220, 0), checkLine('СТЫД', Wt('стыдно') + .1, 'x', -220, 70)];
  al.a = typed('ОДИН', Wt('один', 2) - .1, .08);
  const sf = pw('saulface', Wt('окончательно') - .5, { x: A6[0] + 380, y: A6[1] - 120, w: 560, rot: .03, order: 610 });
  const bc = card({ x: A6[0] + 380, y: A6[1] + 320, w: 620, h: 170, rot: -.03, order: 620, color: '#f2d27a', lined: false, tIn: Wt('лучше') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 15, `800 50px ${SANS}`, '#1f2a44', 'center') });
  bc.a = typed('BETTER CALL SAUL!', Wt('лучше') - .1, .04);
  goTo(A6, Wt('наказать') + 1.0, Wt('джимми', 3) + .1, A6[0] - 860, A6[1] - 460);
  hold(Wt('джимми', 3) + .1, Wt('стыдно') + .4, A6[0] - 420, A6[1] - 80, 1.05, -.015, { dz: .05 });
  camKey(Wt('окончательно') + .2, A6[0] + 380, A6[1] - 120, 1.05, .015); camKey(Wt('лучше') + .2, A6[0] + 380, A6[1] + 200, 1.05, -.01);
  camKey(Wt('понятно') + .3, A6[0], A6[1] + 60, .82, 0); camKey(T_END, A6[0], A6[1] + 80, .9, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
