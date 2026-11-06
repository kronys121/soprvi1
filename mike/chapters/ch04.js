// 04 · БУДКА
CH_V0 = 233.5;
const [T_START, T_END] = chRange(4);
function buildScenes() {
  const D = [0, 0]; divider(D, 4, 'БУДКА', T_START);
  hold(T_START, Wt('начале') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the parking booth at the courthouse: the dullest job; arguing with Jimmy over stickers — a grumpy pensioner
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const bt = card({ x: A1[0] - 360, y: A1[1] - 40, w: 700, h: 440, rot: -.02, order: 100, color: '#f2e6b8', lined: false, tIn: Wt('будке') - .4, dur: .3, enter: 'drop', dx: 0, dy: -300,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 6; g.strokeRect(-320, -190, 640, 380); g.fillStyle = INK; g.font = `800 50px ${SANS}`; g.textAlign = 'center'; g.fillText('PARKING', 0, -110);
      drawTyped(g, it.a, t, 0, -30, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `700 28px ${MONO}`, INK, 'center'); drawStamp(g, it.s, t); } });
  bt.a = typed('будка у здания суда', Wt('парковке') - .2, .03); bt.b = typed('выдаёт талоны', Wt('талоны') - .4, .04);
  bt.s = { text: 'САМАЯ СКУЧНАЯ РАБОТА', t: Wt('скучная') - .1, size: 40, rot: -.08, x: 0, y: 130 };
  pw('saulface', Wt('джимми') - .4, { x: A1[0] + 560, y: A1[1] - 120, w: 420, rot: .04, order: 110, caption: capt('СПОРЫ С ДЖИММИ', Wt('наклеек') - .3), capSize: 20 });
  card({ x: A1[0] + 520, y: A1[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('ворчливый пенсионер', Wt('ворчливым') - .2, .5, { size: 46, rot: -.05 })] });
  goTo(A1, Wt('начале') + .2, Wt('майк') - .2, A1[0] - 760, A1[1] - 400);
  hold(Wt('майк') - .2, Wt('свете') + .3, A1[0] - 360, A1[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('джимми') + .1, A1[0] + 520, A1[1] - 100, 1.05, .015); camKey(Wt('пенсионером') + .3, A1[0] + 500, A1[1] + 160, .95, .01);

  // S2 · Philadelphia detectives arrive; the dull old man calmly outplays two pros — not a single lead
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1800, .85);
  pw('detectives', Wt('детективы') - .4, { x: A2[0] - 400, y: A2[1] - 20, w: 720, rot: -.02, order: 200, off: 2, caption: capt('ДЕТЕКТИВЫ ИЗ ФИЛАДЕЛЬФИИ', Wt('филадельфии') + .1), capSize: 22 });
  const ig = pw('interrog', Wt('переигрывает') - .5, { x: A2[0] + 580, y: A2[1] - 60, w: 440, rot: .04, order: 210, off: 4 });
  ig.stamps = [stamp('НИ ОДНОЙ ЗАЦЕПКИ', Wt('зацепки') - .4, { x: 0, y: 30, size: 40, rot: -.07, shake: 12 })];
  card({ x: A2[0] - 300, y: A2[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('впервые видим, на что он способен', Wt('впервые') - .1, .7, { size: 46, rot: -.03 })] });
  goTo(A2, Wt('пенсионером') + .6, Wt('тут') - .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('тут') - .1, Wt('фенске') + .3, A2[0] - 400, A2[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('переигрывает') + .1, A2[0] + 540, A2[1] - 60, 1.08, .015); camKey(Wt('впервые') + .3, A2[0], A2[1] + 200, .85, 0);

  // S3 · a cop's pension isn't enough: Stacey needs money, Kaylee grows; side jobs — the criminal world finds him
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const mn = card({ x: A3[0] - 520, y: A3[1] - 60, w: 520, h: 380, rot: -.03, order: 300, color: '#eef0e6', lined: false, tIn: Wt('пенсии') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -220, -120, `700 28px ${MONO}`); drawTyped(g, it.b, t, -220, -60, `800 36px ${MONO}`, RED); drawTyped(g, it.c, t, -220, 20, `700 26px ${MONO}`); drawTyped(g, it.d, t, -220, 70, `700 26px ${MONO}`); } });
  mn.a = typed('пенсия полицейского', Wt('пенсии') - .1, .03); mn.b = typed('НЕ ХВАТАЕТ', Wt('хватает') - .3, .05); mn.c = typed('— Стейси нужны деньги', Wt('стейси') - .1, .03); mn.d = typed('— Кейли растёт', Wt('растёт') - .4, .04);
  const jb = card({ x: A3[0] + 300, y: A3[1] - 60, w: 620, h: 360, rot: .02, order: 310, lined: true, tIn: Wt('подработку') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('ПОДРАБОТКА:', -270, -120); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  jb.cl = [checkLine('ОХРАНА', Wt('охрана') + .1, 'v', -250, -40), checkLine('СОПРОВОЖДЕНИЕ', Wt('сопровождение') + .1, 'v', -250, 30), checkLine('ПОСЛОЖНЕЕ…', Wt('посложнее') + .1, 'v', -250, 100)];
  card({ x: A3[0], y: A3[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('преступный мир находит его сам', Wt('находит') - .3, .7, { size: 48, rot: -.03 })] });
  goTo(A3, Wt('способен') + .6, Wt('пенсии') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('пенсии') - .1, Wt('растёт') + .3, A3[0] - 520, A3[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('подработку') + .1, A3[0] + 300, A3[1] - 60, 1.02, .015); camKey(Wt('находит') + .3, A3[0], A3[1] + 200, .85, 0); camKey(T_END, A3[0], A3[1] + 220, .92, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
