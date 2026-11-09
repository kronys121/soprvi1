// 06 · ЗАЛОГ — friend of the cartel; burning Gus's restaurant; Gus's hands tied; bail $7M; the desert; Lalo free
CH_V0 = 337.10;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'ЗАЛОГ', T_START);
  hold(T_START, Wt('обещает') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · "friend of the cartel"; suspects Gus set the police on him; from jail orders Nacho to burn a Gus restaurant
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('lalojimmy7', Wt('обещает') - .3, { x: A1[0] - 380, y: A1[1] - 80, w: 680, rot: -.015, order: 100, off: 1 });
  const fr = card({ x: A1[0] - 380, y: A1[1] + 330, w: 620, h: 120, rot: .02, order: 105, color: '#f3efe2', lined: false, tIn: Wt('другом') - .4, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 12, `800 36px ${SANS}`, RED, 'center') });
  fr.a = typed('«ДРУГ КАРТЕЛЯ»', Wt('другом') - .2, .05);
  const or = typedCard({ x: A1[0] + 560, y: A1[1] - 60, w: 440, h: 280, rot: .03, order: 110, tIn: Wt('подозревает') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('ПРИКАЗ ИЗ ТЮРЬМЫ:', Wt('тюрьмы') - .3, .03), -180, -70, `700 24px ${MONO}`, '#777'], [typed('сжечь ресторан', Wt('сжечь') - .2, .04), -180, 0, `800 34px ${SANS}`], [typed('ГУСА', Wt('ресторанов') + .1, .06), -180, 60, `800 40px ${SANS}`, RED]]);
  goTo(A1, Wt('обещает') - .2, Wt('обещает') + .3, A1[0] - 860, A1[1] - 460);
  camKey(Wt('станет'), A1[0] - 380, A1[1] - 60, 1.02, -.01); camKey(Wt('другом') + .3, A1[0] - 380, A1[1] + 160, .95, -.01);
  camKey(Wt('подозревает') + .2, A1[0] + 540, A1[1] - 40, 1.05, .015);

  // S2 · Gus's hands are tied: Lalo is Hector's beloved nephew and Eladio's favourite; killing him = war; Gus lets his own restaurant burn
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  const tie = card({ x: A2[0] - 560, y: A2[1] - 60, w: 520, h: 420, rot: -.02, order: 200, lined: true, tIn: Wt('связан') - .4, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -230, -150, `800 30px ${SANS}`); drawChecks(g, t, it.cl, `700 24px ${MONO}`); } });
  tie.a = typed('ПОЧЕМУ ГУС ТЕРПИТ:', Wt('связан') - .2, .03);
  tie.cl = [checkLine('ПЛЕМЯННИК ГЕКТОРА', Wt('племянник') + .2, 'v', -220, -70), checkLine('ЛЮБИМЕЦ ЭЛАДИО', Wt('эладио') + .2, 'v', -220, 0), checkLine('СМЕРТЬ = ВОЙНА', Wt('войну') + .1, 'v', -220, 70)];
  pw('gusalone', Wt('позволяет') - .6, { x: A2[0] + 240, y: A2[1] - 160, w: 520, rot: .02, order: 210, off: 1 });
  const fi = pw('pollosfire', Wt('горит') - 1.2, { x: A2[0] + 240, y: A2[1] + 260, w: 640, rot: -.02, order: 220, off: 1, caption: capt('ГУС МОЛЧА СМОТРИТ', Wt('молча') - .2), capSize: 22 });
  goTo(A2, Wt('ресторанов') + .6, Wt('здесь') - .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('здесь') - .1, Wt('войну') + .3, A2[0] - 560, A2[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('позволяет'), A2[0] + 240, A2[1] - 140, 1.05, .015); camKey(Wt('прощает') - .2, A2[0] + 240, A2[1] + 240, 1.0, .01); camKey(Wt('заведение') + .4, A2[0] + 240, A2[1] + 260, 1.08, .01);

  // S3 · bail: first denied, then $7M cash; Jimmy agrees to fetch it from the cousins for $100k
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  pw('lalocourt', Wt('отказывают') - .6, { x: A3[0] - 620, y: A3[1] - 140, w: 440, rot: -.05, order: 300, off: 1, caption: capt('В ЗАЛОГЕ ОТКАЗАНО', Wt('отказывают')), capSize: 18 });
  const bl = card({ x: A3[0] + 60, y: A3[1] - 80, w: 560, h: 300, rot: .015, order: 310, color: '#f3efe2', lined: false, tIn: Wt('назначает') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -70, `700 26px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, 20, `800 72px ${SANS}`, RED, 'center'); drawTyped(g, it.c, t, 0, 90, `700 26px ${MONO}`, INK, 'center'); } });
  bl.a = typed('ЗАЛОГ', Wt('назначает') + .2, .05); bl.b = typed('$7 000 000', Wt('семь') - .1, .07); bl.c = typed('наличными', Wt('наличными') - .1, .04);
  pw('bailmoney', Wt('наличными') - .2, { x: A3[0] + 60, y: A3[1] + 320, w: 520, rot: -.02, order: 315, off: 1 });
  pw('cousins', Wt('кузенов') - .5, { x: A3[0] + 700, y: A3[1] - 100, w: 420, rot: .04, order: 320, off: 1, caption: capt('ЗА $100 000', Wt('тысяч') - .2), capSize: 20 });
  goTo(A3, Wt('заведение') + .7, Wt('сначала') - .1, A3[0] - 860, A3[1] - 460);
  camKey(Wt('сначала') + .2, A3[0] - 600, A3[1] - 120, 1.08, -.015); camKey(Wt('назначает') + .2, A3[0] + 60, A3[1] + 60, .92, .01);
  camKey(Wt('кузенов'), A3[0] + 680, A3[1] - 80, 1.05, .015);

  // S4 · ambush on the way back; Mike saves him; more than a day on foot through the desert with the bags
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const am = pw('ambush', Wt('нападают') - .6, { x: A4[0] - 380, y: A4[1] - 80, w: 680, rot: -.015, order: 400, off: 1 });
  am.stamps = [stamp('ЗАСАДА', Wt('нападают') + .1, { x: 0, y: 120, size: 70, rot: -.07, shake: 18 })]; sfx('shot', Wt('нападают') - .2);
  pw('mikesniper', Wt('спасает') - .4, { x: A4[0] + 560, y: A4[1] - 120, w: 420, rot: .04, order: 410, off: 1, caption: capt('СПАСАЕТ МАЙК', Wt('майк')), capSize: 20 });
  pw('walk', Wt('суток') - .6, { x: A4[0] + 560, y: A4[1] + 280, w: 460, rot: -.03, order: 420, off: 1, caption: capt('БОЛЬШЕ СУТОК ПЕШКОМ', Wt('пешком') - .2), capSize: 18 });
  goTo(A4, Wt('тысяч') + .7, Wt('обратном') - .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('обратном') - .1, Wt('нападают') + .6, A4[0] - 380, A4[1] - 60, 1.05, -.015, { dz: .06 });
  camKey(Wt('спасает') + .1, A4[0] + 540, A4[1] - 100, 1.08, .015); camKey(Wt('суток'), A4[0] + 540, A4[1] + 260, 1.05, -.01);

  // S5 · Jimmy pays: "drove alone, car broke, walked"; Lalo free — but not the kind who takes words on faith
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('laloout', Wt('вносит') - .5, { x: A5[0] - 380, y: A5[1] - 80, w: 680, rot: -.015, order: 500, off: 1 });
  const ly = typedCard({ x: A5[0] + 560, y: A5[1] - 60, w: 440, h: 280, rot: .03, order: 510, tIn: Wt('ехал') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('ВЕРСИЯ ДЖИММИ:', Wt('ехал') - .3, .03), -180, -80, `700 22px ${MONO}`, '#777'], [typed('— ехал один', Wt('ехал'), .04), -180, -20, `700 28px ${MONO}`], [typed('— машина сломалась', Wt('сломалась') - .3, .03), -180, 30, `700 28px ${MONO}`], [typed('— шёл пешком', Wt('шёл') - .1, .04), -180, 80, `700 28px ${MONO}`]]);
  const nv = card({ x: A5[0] + 100, y: A5[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nv.s = stamp('НЕ ВЕРИТ НА СЛОВО', Wt('слово') - .1, { size: 64, rot: -.05, shake: 16 });
  goTo(A5, Wt('денег') + .6, Wt('вносит') - .2, A5[0] - 860, A5[1] - 460);
  camKey(Wt('вносит') + .1, A5[0] - 380, A5[1] - 60, 1.02, -.01); camKey(Wt('ехал') + .2, A5[0] + 540, A5[1] - 40, 1.05, .015);
  camKey(Wt('свободу') + .1, A5[0] + 100, A5[1] + 220, .92, 0); camKey(T_END, A5[0] + 100, A5[1] + 280, 1.0, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
