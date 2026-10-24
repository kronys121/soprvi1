// 01 · УЧИТЕЛЬ
CH_V0 = 48.3;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'УЧИТЕЛЬ', T_START);
  hold(T_START, Wt('пятьдесят') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · profile card: 50, chemistry teacher, car wash
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  const prof = typedCard({ x: A1[0] - 520, y: A1[1] - 40, w: 640, h: 620, rot: -.03, order: 100, tIn: Wt('пятьдесят') + .1, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('АНКЕТА', Wt('пятьдесят') + .2, .05), -280, -220, `800 44px ${SANS}`], [typed('ВОЗРАСТ: 50', Wt('лет'), .04), -280, -120, `700 36px ${MONO}`],
     [typed('УЧИТЕЛЬ ХИМИИ', Wt('учитель'), .035), -280, -50, `700 36px ${MONO}`], [typed('+ АВТОМОЙКА', Wt('автомойке'), .04), -280, 20, `700 36px ${MONO}`],
     [typed('ЖЕНА (БЕРЕМЕННА)', Wt('беременная'), .03), -280, 110, `400 30px ${MONO}`], [typed('СЫН', Wt('сын-подросток'), .05), -280, 165, `400 30px ${MONO}`], [typed('КРЕДИТ ЗА ДОМ', Wt('кредит'), .03), -280, 220, `400 30px ${MONO}`]]);
  pw('class', Wt('учитель') - .1, { x: A1[0] + 260, y: A1[1] - 250, w: 560, rot: .04, order: 110 });
  pw('carwash', Wt('после') + .1, { x: A1[0] + 330, y: A1[1] + 230, w: 560, rot: -.04, order: 111 });
  goTo(A1, Wt('пятьдесят') + .3, Wt('лет') + .1, A1[0] - 800, A1[1] - 380);
  hold(Wt('лет') + .1, Wt('альбукерке') + .2, A1[0] - 300, A1[1] - 150, 1.08, -.015, { dz: .05 });
  camKey(Wt('после') + .5, A1[0] + 300, A1[1] + 100, 1.05, .01); camKey(Wt('учеников') + .3, A1[0] + 320, A1[1] + 200, 1.12, .015);
  camKey(Wt('беременная') + .2, A1[0] - 500, A1[1] + 80, 1.12, -.015); camKey(Wt('дом') + .5, A1[0] - 480, A1[1] + 130, 1.18, -.02);

  // S2 · birthday party: Hank takes the spotlight
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const pt = pw('party', Wt('собственном') - .1, { x: A2[0], y: A2[1], w: 860, rot: .015, order: 200, off: 0 });
  tag({ x: A2[0] + 520, y: A2[1] - 330, w: 300, rot: .06, label: 'ХЭНК', tIn: Wt('хэнк') + .05, order: 210 });
  tag({ x: A2[0] - 520, y: A2[1] + 360, w: 480, rot: -.05, label: 'ИМЕНИННИК?', tIn: Wt('стороне') + .05, order: 211 });
  goTo(A2, Wt('дом') + .5, Wt('собственном') + .2, A2[0] - 430, A2[1] - 320);
  hold(Wt('собственном') + .2, Wt('внимание') + .6, A2[0], A2[1] + 20, 1.02, .01, { dz: .1 });

  // S3 · diagnosis: cancer
  const A3 = [4400, 1800]; lamp(A3[0], A3[1] - 200, 1800, 1);
  pw('diagnosis', Wt('врач') - .2, { x: A3[0] - 300, y: A3[1], w: 760, rot: -.02, order: 300 });
  const mc = typedCard({ x: A3[0] + 560, y: A3[1] + 60, w: 540, h: 480, rot: .03, order: 310, tIn: Wt('говорит') - .1, dur: .3, enter: 'slide', dx: 500, dy: 0 },
    [[typed('ДИАГНОЗ', Wt('говорит'), .05), -240, -160, `800 44px ${SANS}`], [typed('РАК ЛЁГКИХ', Wt('рак'), .05), -240, -60, `700 40px ${MONO}`], [typed('III СТАДИЯ', Wt('лёгких') + .2, .05, { silent: true }), -240, 0, `400 32px ${MONO}`]]);
  mc.stamps = [stamp('НЕОПЕРАБЕЛЬНЫЙ', Wt('неоперабельный') + .1, { x: 0, y: 140, size: 44, rot: -.08, shake: 18 })];
  sfx('heart', Wt('рак') - .4); sfx('boom', Wt('неоперабельный') + .1);
  goTo(A3, Wt('внимание') + .6, Wt('=а') + .1, A3[0] - 700, A3[1] - 300);
  hold(Wt('=а') + .1, Wt('неоперабельный') + 1.2, A3[0] + 100, A3[1] + 20, 1.0, .015, { dz: .15 });

  // S4 · not greed but humiliation: Gray Matter sold for $5000
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2200, 1);
  const hc = typedCard({ x: A4[0] - 650, y: A4[1] - 320, w: 560, h: 200, rot: -.04, order: 400, lined: false, tIn: Wt('сериал') - .1, dur: .3, enter: 'slide', dx: -400, dy: 0 },
    [[typed('ЖАДНОСТЬ', Wt('жадности'), .05), 0, -20, `800 50px ${SANS}`, INK, 'center'], [typed('УНИЖЕНИЕ', Wt('унижения'), .05, { heavy: true }), 0, 55, `800 50px ${SANS}`, RED, 'center']]);
  hc.pens = [pen([[-140, -26], [140, -34]], Wt('=а', 2) - .1, .22, { width: 9 })];
  item({ draw: drawFolder, x: A4[0] + 120, y: A4[1] + 80, w: 900, h: 600, rot: .02, order: 410, tIn: Wt('серое') - .3, dur: .35, enter: 'slide', dx: 600, dy: 300, tab: 'GRAY MATTER',
    text: (g, t, it) => { g.fillStyle = INK; g.font = `800 64px ${SANS}`; g.textAlign = 'center'; g.fillText('«СЕРОЕ ВЕЩЕСТВО»', 0, -150);
      g.font = `700 36px ${MONO}`; drawTyped(g, it.a, t, 0, -40, `700 40px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 60, `700 40px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, 0, 170, `800 56px ${MONO}`, RED, 'center'); } });
  const gm = ITEMS[ITEMS.length - 1]; gm.a = typed('ДОЛЯ УОЛТЕРА: $5 000', Wt('пять') - .1, .03); gm.b = typed('СТОИМОСТЬ СЕЙЧАС:', Wt('компания'), .03); gm.c = typed('$ 2 000 000 000+', Wt('миллиардную'), .04);
  pw('gretchen', Wt('эллиоттом') - .2, { x: A4[0] + 760, y: A4[1] - 330, w: 440, rot: .07, order: 420, caption: capt('ЭЛЛИОТТ И ГРЕТХЕН', Wt('гретхен')), capSize: 22 });
  card({ x: A4[0] + 120, y: A4[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 430, tIn: 0, scrawls: [scrawl('ГЕНИЙ, КОТОРЫЙ ПРОИГРАЛ', Wt('гениальный'), .7, { size: 54, rot: -.04 })] });
  goTo(A4, Wt('неоперабельный') + 1.2, Wt('сериал') + .2, A4[0] - 900, A4[1] - 420);
  hold(Wt('сериал') + .2, Wt('унижения') + .6, A4[0] - 600, A4[1] - 280, 1.3, -.02, { dz: .05 });
  camKey(Wt('молодости'), A4[0] + 300, A4[1] - 80, .95, .01); camKey(Wt('долларов') + .3, A4[0] + 120, A4[1] + 40, 1.12, .01);
  camKey(Wt('корпорацию') + .4, A4[0] + 140, A4[1] + 150, 1.0, 0); camKey(Wt('проиграл') + .5, A4[0] + 140, A4[1] + 260, 1.05, -.01);

  // S5 · a story of justice — and the trap
  const A5 = [-200, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  const sc = card({ x: A5[0] - 300, y: A5[1], w: 760, h: 520, rot: -.02, order: 500, lined: true, tIn: Wt('поэтому') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.hd, t, -340, -100, `700 36px ${MONO}`); drawChecks(g, t, it.cl); } });
  sc.hd = typed('ПОЧЕМУ МЫ НА ЕГО СТОРОНЕ', Wt('поэтому'), .025);
  sc.cl = [checkLine('У НЕГО ОТНЯЛИ ВСЁ', Wt('отняли') + .1, 'v', -300, 0), checkLine('ДЕНЬГИ ДЛЯ СЕМЬИ', Wt('семье') + .2, 'v', -300, 90), checkLine('ЕМУ ОСТАЛОСЬ НЕДОЛГО', Wt('жив') + .1, 'v', -300, 180)];
  pw('waltface', Wt('тихий') - .1, { x: A5[0] + 520, y: A5[1] - 160, w: 520, rot: .05, order: 510 });
  const trap = card({ x: A5[0] + 100, y: A5[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  trap.s = stamp('ЛОВУШКА', Wt('ловушка') + .05, { size: 110, rot: -.08, shake: 20 });
  goTo(A5, Wt('проиграл') + .5, Wt('поэтому') + .2, A5[0] - 700, A5[1] - 330);
  hold(Wt('поэтому') + .2, Wt('стороне', 2) + .4, A5[0] - 100, A5[1] + 30, .98, -.01, { dz: .1 });
  camKey(Wt('именно'), A5[0] + 60, A5[1] + 250, 1.1, .01); camKey(T_END, A5[0] + 90, A5[1] + 330, 1.25, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
