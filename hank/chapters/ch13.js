// 13 · ТОХАДЖИЛИ  (inserts: Hank calls Marie "я его взял... я люблю тебя")
CH_V0 = 801.3;
const [T_START, T_END] = chRange(13);
function buildScenes() {
  const D = [0, 0]; divider(D, 13, 'ТОХАДЖИЛИ', T_START);
  hold(T_START, Wt('устраивают') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the trap: Walt is told his buried money is about to be found; he races in panic to the To'hajiilee reservation
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1.05);
  const tp = typedCard({ x: A1[0] - 400, y: A1[1] - 60, w: 700, h: 380, rot: -.02, order: 100, tIn: Wt('устраивают') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ЛОВУШКА', Wt('ловушку') - .3, .06), -300, -110, `800 44px ${SANS}`, RED], [typed('«твои деньги в пустыне', Wt('деньги') - .3, .03), -300, -30, `400 italic 30px "DejaVu Serif"`],
     [typed('вот-вот найдут»', Wt('вот-вот') - .1, .04), -300, 30, `400 italic 30px "DejaVu Serif"`], [typed('Хэнк + Джесси', Wt('хэнк') - .1, .04), -300, 120, `700 28px ${MONO}`]]);
  pw('waltrun', Wt('панике') - .5, { x: A1[0] + 560, y: A1[1] - 40, w: 480, rot: .04, order: 110, off: 2, caption: capt('В ПАНИКЕ · ТОХАДЖИЛИ', Wt('тохаджили') - .3), capSize: 20 });
  goTo(A1, Wt('устраивают') + .2, Wt('ловушку') - .2, A1[0] - 760, A1[1] - 400);
  hold(Wt('ловушку') - .2, Wt('найдут') + .3, A1[0] - 400, A1[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('панике') + .2, A1[0] + 520, A1[1] - 40, 1.08, .015); camKey(Wt('тохаджили') + .5, A1[0] + 540, A1[1] - 20, 1.15, .015);

  // S2 · there in the middle of the desert Hank waits; Walt comes out with his hands up; cuffs; his rights — the moment he lived for
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1.05);
  pw('hankgun', Wt('посреди') - .5, { x: A2[0] - 560, y: A2[1] - 200, w: 480, rot: -.05, order: 200, off: 2, caption: capt('ЕГО ЖДЁТ ХЭНК', Wt('ждёт')), capSize: 22 });
  pw('handsup', Wt('выходит') - .4, { x: A2[0] - 560, y: A2[1] + 230, w: 480, rot: .04, order: 205, off: 3, caption: capt('РУКИ ВВЕРХ', Wt('руками') - .2), capSize: 22 });
  const cf = pw('cuffs', Wt('надевает') - .4, { x: A2[0] + 320, y: A2[1] - 40, w: 760, rot: .015, order: 210, off: 1 });
  cf.stamps = [stamp('АРЕСТОВАН', Wt('наручники') - .1, { x: 0, y: 80, size: 80, rot: -.08, shake: 18 })];
  sfx('zip', Wt('наручники'));
  card({ x: A2[0] + 320, y: A2[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, scrawls: [scrawl('момент, ради которого он жил', Wt('ради') - .3, .6, { size: 48, rot: -.04 })] });
  goTo(A2, Wt('тохаджили') + .7, Wt('посреди') - .2, A2[0] - 860, A2[1] - 460);
  hold(Wt('посреди') - .2, Wt('хэнк', 2) + .3, A2[0] - 560, A2[1] - 200, 1.08, -.015, { dz: .05 });
  camKey(Wt('выходит') + .1, A2[0] - 560, A2[1] + 220, 1.08, .015); camKey(Wt('надевает') + .1, A2[0] + 320, A2[1] - 40, 1.02, .015);
  camKey(Wt('права') + .3, A2[0] + 320, A2[1] + 40, 1.12, .015); camKey(Wt('сериал') + .3, A2[0] + 320, A2[1] + 200, .92, 0);

  // S3 · he calls Marie: "I got him" — and "I love you" (original dub); for the first time in ages, truly happy
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1.05);
  dlgShot('d_gotyou', A3[0] - 300, A3[1] - 60, { w: 760, order: 300 });
  dlgShot('d_love', A3[0] + 560, A3[1] + 100, { w: 620, rot: .03, order: 310 });
  const hp = card({ x: A3[0] + 100, y: A3[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  hp.s = stamp('СЧАСТЛИВ', Wt('счастлив') - .3, { size: 84, rot: -.07, shake: 14 });
  goTo(A3, Wt('сериал') + .6, DLGT.d_gotyou - .2, A3[0] - 860, A3[1] - 460);
  camKey(DLGT.d_gotyou + .1, A3[0] - 300, A3[1] - 60, 1.1, 0); camKey(DLGT.d_gotyou + 9, A3[0] - 280, A3[1] - 40, 1.2, .01);
  camKey(DLGT.d_love + .2, A3[0] + 560, A3[1] + 100, 1.2, .01); camKey(DLGT.d_love + 11.6, A3[0] + 560, A3[1] + 120, 1.3, .015);
  camKey(Wt('счастлив') + .3, A3[0] + 150, A3[1] + 220, .82, 0);

  // S4 · but before surrendering, Walt had called Jack's gang; he tried to call it off when he saw Hank — too late; cars on the horizon
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const wc = pw('waltcall', Wt('успел') - .5, { x: A4[0] - 400, y: A4[1] - 40, w: 720, rot: -.02, order: 400, off: 4, caption: capt('ЗВОНОК БАНДЕ ДЯДИ ДЖЕКА', Wt('джека') - .2), capSize: 22 });
  wc.stamps = [stamp('ПОЗДНО', Wt('поздно') - .1, { x: 0, y: 70, size: 90, rot: -.08, shake: 18 })];
  pw('jackarrive', Wt('горизонте') - .5, { x: A4[0] + 580, y: A4[1] - 40, w: 460, rot: .04, order: 410, off: 2, caption: capt('МАШИНЫ НА ГОРИЗОНТЕ', Wt('машины')), capSize: 20 });
  goTo(A4, Wt('счастлив') + .8, Wt('одного') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('одного') + .1, Wt('подмогу') + .3, A4[0] - 400, A4[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('поздно') + .3, A4[0] - 380, A4[1], 1.15, -.01); camKey(Wt('горизонте') + .2, A4[0] + 540, A4[1] - 40, 1.08, .015);

  // S5 · last chapter's mistake comes back: no backup — only he and Gomez, since nobody knows; two against a gang; Gomez dies, Hank wounded on the sand
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1.05);
  const nb = card({ x: A5[0] - 560, y: A5[1] - 160, w: 480, h: 360, rot: -.03, order: 500, lined: true, tIn: Wt('ошибка') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -200, -120, `800 30px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  nb.a = typed('ОШИБКА ВЕРНУЛАСЬ', Wt('ошибка') - .1, .03);
  nb.cl = [checkLine('ПОДКРЕПЛЕНИЕ', Wt('подкрепления') + .1, 'x', -190, -40), checkLine('ТОЛЬКО ОН И ГОМЕС', Wt('гомес') + .1, 'v', -190, 30), checkLine('НИКТО НЕ ЗНАЕТ', Wt('никто') + .1, 'v', -190, 100)];
  const so = pw('shootout', Wt('перестрелка') - .5, { x: A5[0] + 260, y: A5[1] - 160, w: 620, rot: .02, order: 510, off: 4, caption: capt('ДВОЕ ПРОТИВ БАНДЫ', Wt('банды') - .3), capSize: 22 });
  sfx('shot', Wt('перестрелка')); sfx('shot', Wt('двое') + .2); sfx('shot', Wt('банды'));
  const gz = pw('gomezdead', Wt('=гомес', 2) - .4, { x: A5[0] - 300, y: A5[1] + 330, w: 440, rot: -.04, order: 520, off: 1 });
  gz.stamps = [stamp('ГОМЕС ПОГИБ', Wt('погибает') - .1, { x: 0, y: 20, size: 50, rot: -.07, shake: 14 })];
  pw('hankwounded', Wt('ранен') - .4, { x: A5[0] + 360, y: A5[1] + 330, w: 460, rot: .04, order: 530, off: 2, caption: capt('ХЭНК РАНЕН', Wt('песке') - .3), capSize: 22 });
  goTo(A5, Wt('машины') + .7, Wt('ошибка') - .2, A5[0] - 860, A5[1] - 460);
  hold(Wt('ошибка') - .2, Wt('никто') + .4, A5[0] - 560, A5[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('перестрелка') + .1, A5[0] + 260, A5[1] - 160, 1.02, .015); camKey(Wt('погибает') + .1, A5[0] - 300, A5[1] + 300, 1.08, -.015);
  camKey(Wt('ранен') + .2, A5[0] + 340, A5[1] + 320, 1.1, .015); camKey(T_END, A5[0] + 360, A5[1] + 330, 1.2, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
