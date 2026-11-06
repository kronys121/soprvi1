// 02 · МЭТТ  (inserts: "Я сломал моего мальчика..."; "Я заставил Мэтта взять деньги. А через два дня его убили.")
CH_V0 = 116.8;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'МЭТТ', T_START);
  hold(T_START, Wt('однажды') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Matt is invited into the system; lost, he comes to his father — Mike tells him the truth and talks him into it
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  const tr = typedCard({ x: A1[0] - 380, y: A1[1] - 60, w: 740, h: 440, rot: -.02, order: 100, tIn: Wt('мэтта') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('«Возьми деньги»', Wt('предложили') - .1, .04), -330, -150, `400 italic 34px "DejaVu Serif"`], [typed('Мэтт растерялся → к отцу', Wt('растерялся') - .3, .03), -330, -80, `700 28px ${MONO}`],
     [typed('— я тоже беру', Wt('тоже') - .2, .04), -310, -10, `700 30px ${MONO}`], [typed('— все берут', Wt('берут') - .3, .04), -310, 50, `700 30px ${MONO}`],
     [typed('— откажешься: опасно', Wt('опасно') - .5, .03), -310, 110, `700 30px ${MONO}`], [typed('УГОВОРИЛ', Wt('уговорил') - .1, .06), -330, 185, `800 40px ${SANS}`, RED]]);
  pw('stacey', Wt('сказал') - .4, { x: A1[0] + 580, y: A1[1] - 60, w: 440, rot: .04, order: 110, off: 6, caption: capt('ХОТЕЛ ЗАЩИТИТЬ', Wt('защитить') - .3), capSize: 20 });
  goTo(A1, Wt('однажды') + .2, Wt('мэтта') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('мэтта') - .1, Wt('отцу') + .3, A1[0] - 380, A1[1] - 120, 1.05, -.015, { dz: .05 });
  camKey(Wt('правду') + .2, A1[0] - 330, A1[1] + 20, 1.08, -.01); camKey(Wt('уговорил') + .3, A1[0] - 300, A1[1] + 100, 1.1, -.01); camKey(Wt('защитить') + .3, A1[0] + 560, A1[1] - 40, 1.08, .015);

  // S2 · he took it, but not at once; Hoffman and Fenske decide he might talk; lured to a night call and shot; blamed on gangs
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1800, .8);
  pw('squadcar', Wt('сомневался') - .4, { x: A2[0] - 560, y: A2[1] - 180, w: 480, rot: -.05, order: 200, off: 2 });
  const hf = card({ x: A2[0] - 560, y: A2[1] + 240, w: 480, h: 220, rot: .03, order: 205, color: '#f3efe2', lined: false, tIn: Wt('хоффман') - .4, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -40, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 20, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 80, `700 24px ${MONO}`, RED, 'center'); } });
  hf.a = typed('ХОФФМАН', Wt('хоффман') - .1, .05); hf.b = typed('ФЕНСКЕ', Wt('фенске') - .1, .05); hf.c = typed('«может нас сдать»', Wt('сдать') - .5, .03);
  const cr = pw('cars', Wt('заманили') - .4, { x: A2[0] + 320, y: A2[1] - 40, w: 760, rot: .015, order: 210, off: 6 });
  cr.stamps = [stamp('ЗАСТРЕЛИЛИ', Wt('застрелили') - .1, { x: 0, y: 70, size: 80, rot: -.08, shake: 20 })];
  sfx('shot', Wt('застрелили') + .1);
  card({ x: A2[0] + 320, y: A2[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('«уличные бандиты»', Wt('бандитов') - .5, .5, { size: 48, rot: -.04 })] });
  goTo(A2, Wt('защитить') + .7, Wt('взял') - .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('взял') - .1, Wt('сомневался') + .3, A2[0] - 560, A2[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('хоффман') + .1, A2[0] - 560, A2[1] + 220, 1.08, .015); camKey(Wt('заманили') + .1, A2[0] + 320, A2[1] - 40, 1.02, .015);
  camKey(Wt('застрелили') + .3, A2[0] + 320, A2[1], 1.18, .02); camKey(Wt('бандитов') + .3, A2[0] + 320, A2[1] + 200, .95, 0);

  // S3 · he tells Stacey — no tears, no shouting, nearly a whisper (original dub, two inserts)
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1800, .8);
  pw('staceyclose', Wt('стейси') - .4, { x: A3[0] - 620, y: A3[1] - 180, w: 480, rot: -.05, order: 300, off: 2, caption: capt('НЕВЕСТКА СТЕЙСИ', Wt('стейси') + .2), capSize: 22 });
  const ws = card({ x: A3[0] - 620, y: A3[1] + 230, w: 480, h: 220, rot: .03, order: 305, lined: true, tIn: Wt('слёз') - .4, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  ws.cl = [checkLine('СЛЁЗЫ', Wt('слёз') + .1, 'x', -200, -60), checkLine('КРИК', Wt('крика') + .1, 'x', -200, 0), checkLine('ПОЧТИ ШЁПОТОМ', Wt('шёпотом') + .1, 'v', -200, 60)];
  dlgShot('d_broke', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  const bk = card({ x: A3[0] + 180, y: A3[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  bk.s = stamp('«Я СЛОМАЛ МОЕГО МАЛЬЧИКА»', DLGT.d_broke + 18.6, { size: 46, rot: -.05, shake: 14 });
  goTo(A3, Wt('бандитов') + .6, Wt('рассказывает') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('рассказывает') - .2, Wt('сериалов') + .3, A3[0] - 600, A3[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('слёз') + .1, A3[0] - 600, A3[1] + 220, 1.1, .015);
  camKey(DLGT.d_broke + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_broke + 25.2, A3[0] + 180, A3[1] + 40, 1.22, .01);

  // S4 · second insert: "I made Matt take the money; two days later they killed him"
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1800, .8);
  dlgShot('d_twodays', A4[0] - 60, A4[1] - 40, { w: 900, order: 400 });
  const td = card({ x: A4[0] - 60, y: A4[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  td.s = stamp('ЧЕРЕЗ ДВА ДНЯ', DLGT.d_twodays + 7, { size: 64, rot: -.06, shake: 16 });
  goTo(A4, DLGT.d_broke + 25.5, DLGT.d_twodays - .1, A4[0] - 860, A4[1] - 460);
  camKey(DLGT.d_twodays + .1, A4[0] - 60, A4[1] - 40, 1.08, 0); camKey(DLGT.d_twodays + 9.2, A4[0] - 60, A4[1] + 20, 1.2, .01);

  // S5 · the key line: not "they killed my son" — "I broke him"; the real culprit is himself
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const kl = card({ x: A5[0] - 100, y: A5[1] - 40, w: 900, h: 460, rot: -.015, order: 500, lined: false, tIn: Wt('главная') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.hd, t, 0, -170, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, 0, -80, `400 italic 40px "DejaVu Serif"`, '#888', 'center'); drawPen(g, it.p, t); drawTyped(g, it.b, t, 0, 20, `700 italic 52px "DejaVu Serif"`, RED, 'center');
      drawTyped(g, it.c, t, 0, 130, `800 34px ${SANS}`, INK, 'center'); } });
  kl.hd = typed('главная фраза для понимания Майка', Wt('главная') - .1, .025); kl.a = typed('«моего сына убили»', Wt('моего') - .2, .04, { silent: true });
  kl.p = pen([[-210, -88], [210, -94]], Wt('убили') + .4, .3, { width: 7 }); kl.b = typed('«я его сломал»', Wt('сломал') - .5, .05, { silent: true });
  kl.c = typed('ВИНОВНИК — ОН САМ', Wt('виновник') - .3, .04);
  goTo(A5, DLGT.d_twodays + 9.3, Wt('главная') + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('главная') + .1, Wt('убили') + .5, A5[0] - 100, A5[1] - 120, 1.05, -.01, { dz: .05 });
  camKey(Wt('сломал') + .3, A5[0] - 100, A5[1] - 40, 1.12, 0); camKey(Wt('виновник') + .4, A5[0] - 100, A5[1] + 80, 1.1, -.01); camKey(T_END, A5[0] - 100, A5[1] + 90, 1.16, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
