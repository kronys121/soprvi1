// 05 · СОБАКА  (insert: the support group)
CH_V0 = 271.6;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'СОБАКА', T_START);
  hold(T_START, Wt('начале') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the endless party: music, strangers, money, drugs — anything but silence
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  pw('jparty', Wt('превращает') - .3, { x: A1[0] - 380, y: A1[1] - 40, w: 760, rot: -.02, order: 100, off: 1, caption: capt('ДОМ ДЖЕССИ · S04', Wt('вечеринку')), capSize: 24 });
  const pt = card({ x: A1[0] + 560, y: A1[1] - 60, w: 460, h: 440, rot: .03, order: 110, lined: true, tIn: Wt('музыка') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  pt.cl = [checkLine('МУЗЫКА', Wt('музыка') + .1, 'v', -180, -140), checkLine('НЕЗНАКОМЦЫ', Wt('людей') + .05, 'v', -180, -60), checkLine('ДЕНЬГИ', Wt('деньги') + .05, 'v', -180, 20), checkLine('НАРКОТИКИ', Wt('наркотики') + .05, 'v', -180, 100)];
  pw('jparty2', Wt('всё') - .3, { x: A1[0] + 60, y: A1[1] + 400, w: 520, rot: .04, order: 120, off: 2 });
  card({ x: A1[0] + 520, y: A1[1] + 380, w: 1, h: 1, shadow: 0, lit: false, order: 130, tIn: 0, scrawls: [scrawl('ТОЛЬКО НЕ ТИШИНА', Wt('тишиной') - .4, .5, { size: 56, rot: -.05 })] });
  goTo(A1, Wt('начале') + .3, Wt('сезона') + .1, A1[0] - 860, A1[1] - 420);
  hold(Wt('сезона') + .1, Wt('вечеринку') + .4, A1[0] - 380, A1[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('музыка') + .3, A1[0] + 500, A1[1] - 40, 1.05, .015); camKey(Wt('всё') + .3, A1[0] + 300, A1[1] + 380, .95, 0);

  // S2 · the support group and the "dog" story — we know it's Gale
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const gp = pw('jgroup', Wt('собрание') - .3, { x: A2[0] - 300, y: A2[1] - 20, w: 820, rot: -.015, order: 200, off: 2, caption: capt('ГРУППА ПОДДЕРЖКИ · S04E07', Wt('поддержки')), capSize: 22 });
  const dg = typedCard({ x: A2[0] + 620, y: A2[1] - 200, w: 460, h: 220, rot: .05, order: 210, tIn: Wt('собаку') - .3, dur: .3, enter: 'slide', dx: 400, dy: -200 },
    [[typed('«УСЫПИЛ СОБАКУ»', Wt('усыпил') - .2, .035), -200, -20, `700 32px ${MONO}`], [typed('без причины', Wt('причины') - .2, .04), -200, 40, `400 30px ${MONO}`]]);
  dg.pens = [pen([[-210, -30], [210, -36]], Wt('гейла') - .3, .3, { width: 8 })];
  pw('gale', Wt('знаем') - .3, { x: A2[0] + 620, y: A2[1] + 220, w: 440, rot: -.04, order: 220, off: 6, caption: capt('НА САМОМ ДЕЛЕ: ГЕЙЛ', Wt('гейла')), capSize: 22 });
  goTo(A2, Wt('тишиной') + .5, Wt('потом') + .1, A2[0] - 860, A2[1] - 420);
  hold(Wt('потом') + .1, Wt('собаку') + .3, A2[0] - 300, A2[1] - 20, 1.08, -.015, { dz: .05 });
  camKey(Wt('усыпил') + .2, A2[0] + 520, A2[1] - 160, 1.05, .01); camKey(Wt('гейла') + .4, A2[0] + 560, A2[1] + 160, 1.05, .015);

  // S3 · meanwhile, a professional: Mike's errands, Mexico — the cook impresses the cartel
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('gsniper', Wt('=при') - .3, { x: A3[0] - 600, y: A3[1] - 160, w: 520, rot: -.04, order: 300, off: 8, caption: capt('С МАЙКОМ НА ЗАДАНИЯХ', Wt('задания')), capSize: 20 });
  pw('mexlab', Wt('мексике') - .4, { x: A3[0] - 600, y: A3[1] + 220, w: 520, rot: .04, order: 310, off: 0, caption: capt('МЕКСИКА · ЛАБОРАТОРИЯ КАРТЕЛЯ', Wt('картеля')), capSize: 18 });
  const mj = pw('mexjesse', Wt('варит') - .3, { x: A3[0] + 240, y: A3[1] - 20, w: 760, rot: .02, order: 320, off: 4 });
  mj.stamps = [stamp('ПРОФЕССИОНАЛ', Wt('профессионалом') - .3, { x: 0, y: 70, size: 66, rot: -.07, shake: 14 })];
  tag({ x: A3[0] + 600, y: A3[1] - 320, w: 420, rot: .06, label: 'БЫЛ «2» ПО ХИМИИ', tIn: Wt('двоечник') + .05, order: 330, size: 34 });
  goTo(A3, Wt('гейла') + .6, Wt('=при') + .1, A3[0] - 900, A3[1] - 460);
  hold(Wt('=при') + .1, Wt('задания') + .4, A3[0] - 580, A3[1] - 140, 1.08, -.015, { dz: .05 });
  camKey(Wt('мексике') + .3, A3[0] - 580, A3[1] + 200, 1.05, -.01); camKey(Wt('варит') + .2, A3[0] + 240, A3[1] - 20, 1.05, .01);
  camKey(Wt('профессионалом') + .4, A3[0] + 300, A3[1] - 40, 1.12, .015); camKey(Wt('спасает') + .4, A3[0] + 100, A3[1] + 100, .9, 0);

  // S4 · "don't judge, accept" -> he explodes (original dub); he wants to be told it was terrible
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const rule = typedCard({ x: A4[0] - 620, y: A4[1] - 280, w: 520, h: 200, rot: -.04, order: 400, lined: false, tIn: Wt('ведущий') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200 },
    [[typed('«не судить —', Wt('судить') - .3, .04), -230, -20, `400 italic 34px "DejaVu Serif"`], [typed('принять»', Wt('принять') - .2, .04), -230, 40, `400 italic 34px "DejaVu Serif"`]]);
  dlgShot('d_dog', A4[0] + 200, A4[1] - 20, { w: 940, order: 410 });
  const ns = card({ x: A4[0] + 200, y: A4[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  ns.s = stamp('НЕ ПРОЩАЙТЕ МЕНЯ', DLGT.d_dog + 14.0, { size: 62, rot: -.06, shake: 16 });
  goTo(A4, Wt('спасает') + .5, Wt('ведущий') + .1, A4[0] - 860, A4[1] - 440);
  hold(Wt('ведущий') + .1, DLGT.d_dog - .3, A4[0] - 560, A4[1] - 240, 1.1, -.015, { dz: .05 });
  camKey(DLGT.d_dog + .1, A4[0] + 200, A4[1] - 20, 1.08, 0); camKey(DLGT.d_dog + 16.7, A4[0] + 200, A4[1] + 40, 1.2, .01);

  // S5 · the difference: Walter always finds an excuse; Jesse accepts none
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('walthat', Wt('этом', 2) - .4, { x: A5[0] - 440, y: A5[1] - 20, w: 560, rot: -.04, order: 500, caption: capt('УОЛТЕР: ВСЕГДА ОПРАВДАНИЕ', Wt('оправдание') - .3), capSize: 20 });
  const jf = pw('jface4', Wt('джесси', 4) - .3, { x: A5[0] + 440, y: A5[1] - 20, w: 560, rot: .04, order: 510, off: 3, caption: capt('ДЖЕССИ: НИ ОДНОГО', Wt('одного') - .3), capSize: 20 });
  goTo(A5, DLGT.d_dog + 16.8, Wt('этом', 2) + .1, A5[0] - 400, A5[1] - 600);
  hold(Wt('этом', 2) + .1, Wt('уолтера') + .3, A5[0], A5[1] - 20, .95, -.01, { dz: .04 });
  camKey(Wt('оправдание') + .2, A5[0] - 420, A5[1] - 20, 1.08, -.015); camKey(T_END, A5[0] + 440, A5[1] - 10, 1.15, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
