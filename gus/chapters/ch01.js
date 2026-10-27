// 01 · ФАСАД
CH_V0 = 42.4;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'ФАСАД', T_START);
  hold(T_START, Wt('впервые') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the manager: profile card, Pollos sign, the neat uniform
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, 1);
  pw('gpollos', Wt('менеджер') - .3, { x: A1[0] - 420, y: A1[1] - 20, w: 700, rot: -.02, order: 100, off: 0, caption: capt('S02E11 · «MANDALA»', Wt('втором')), capSize: 24 });
  const lp = card({ x: A1[0] + 520, y: A1[1] - 280, w: 500, h: 260, rot: .05, order: 110, color: '#f6d34a', lined: false, tIn: Wt('лос') - .2, dur: .3, enter: 'slide', dx: 500, dy: -200,
    text: (g) => { g.fillStyle = '#b8261e'; g.font = `800 50px ${SANS}`; g.textAlign = 'center'; g.fillText('LOS POLLOS', 0, -18); g.fillText('HERMANOS', 0, 48); } });
  const mg = card({ x: A1[0] + 540, y: A1[1] + 160, w: 520, h: 380, rot: -.03, order: 120, lined: true, tIn: Wt('аккуратный') - .3, dur: .3, enter: 'slide', dx: 500, dy: 200,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'left'; g.fillText('МЕНЕДЖЕР:', -220, -120); drawChecks(g, t, it.cl, `700 32px ${MONO}`); } });
  mg.cl = [checkLine('АККУРАТНЫЙ', Wt('аккуратный') + .2, 'v', -200, -40), checkLine('ФИРМЕННАЯ РУБАШКА', Wt('рубашке') + .1, 'v', -200, 40), checkLine('ДЕЖУРНАЯ УЛЫБКА', Wt('улыбкой') + .1, 'v', -200, 120)];
  goTo(A1, Wt('впервые') + .3, Wt('сезоне') + .1, A1[0] - 760, A1[1] - 340);
  hold(Wt('сезоне') + .1, Wt('херманос') - .2, A1[0] - 380, A1[1] - 30, 1.08, -.015, { dz: .05 });
  camKey(Wt('херманос') + .3, A1[0] + 420, A1[1] - 120, 1.0, .01); camKey(Wt('улыбкой') + .5, A1[0] + 500, A1[1] + 120, 1.05, .015);

  // S2 · Walter and Jesse come to sell; Jesse late and high; Gus refuses
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('gtable', Wt('приходят') - .3, { x: A2[0] - 560, y: A2[1] - 140, w: 600, rot: -.04, order: 200, off: 0, caption: capt('ПРЕДЛОЖЕНИЕ: МЕТАМФЕТАМИН', Wt('метамфетамин')), capSize: 20 });
  tag({ x: A2[0] - 560, y: A2[1] + 230, w: 520, rot: .04, label: 'ДЖЕССИ: ОПОЗДАЛ', tIn: Wt('опоздал') + .05, order: 210, size: 36 });
  const rj = pw('greject', Wt('гус') - .3, { x: A2[0] + 240, y: A2[1] + 20, w: 760, rot: .02, order: 220, off: 2 });
  rj.stamps = [stamp('ОТКАЗ', Wt('отказывается') + .1, { x: 150, y: 150, size: 90, rot: -.08, shake: 18 })];
  typedCard({ x: A2[0] + 360, y: A2[1] + 470, w: 760, h: 130, rot: -.02, order: 230, lined: false, tIn: Wt('ведёт') - .3, dur: .25, enter: 'slide', dx: 0, dy: 300 },
    [[typed('ПРАВИЛО: нельзя доверять — не работаю', Wt('ведёт'), .03), -350, 12, `700 30px ${MONO}`]]);
  goTo(A2, Wt('улыбкой') + .5, Wt('уолтер') + .2, A2[0] - 860, A2[1] - 420);
  hold(Wt('уолтер') + .2, Wt('речь') + .2, A2[0] - 540, A2[1] - 100, 1.1, -.02, { dz: .05 });
  camKey(Wt('кайфом') + .2, A2[0] - 400, A2[1] + 120, 1.0, -.01); camKey(Wt('отказывается') + .4, A2[0] + 240, A2[1] + 30, 1.1, .01);
  camKey(Wt('доверять') + .4, A2[0] + 300, A2[1] + 220, .95, .01);

  // S3 · Walter delivers alone; the deal costs him his daughter's birth
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const dl = typedCard({ x: A3[0] - 400, y: A3[1] - 60, w: 760, h: 420, rot: -.02, order: 300, tIn: Wt('только') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('S02E12 · «PHOENIX»', Wt('только'), .03), -340, -130, `700 34px ${MONO}`], [typed('Уолтер везёт товар один', Wt('одиночку') - .2, .03), -340, -50, `400 32px ${MONO}`],
     [typed('Гус: «ДА»', Wt('соглашается') - .2, .05), -340, 40, `800 50px ${SANS}`], [typed('цена: роды дочери', Wt('рождение') - .2, .035), -340, 130, `700 34px ${MONO}`, RED]]);
  dl.stamps = [stamp('СДЕЛКА', Wt('соглашается') + .2, { x: 220, y: 30, size: 70, rot: -.1, shake: 14 })];
  pw('waltface', Wt('пропускает') - .3, { x: A3[0] + 560, y: A3[1] - 40, w: 460, rot: .05, order: 310, caption: capt('ПРОПУСТИЛ', Wt('пропускает')), capSize: 26 });
  goTo(A3, Wt('доверять') + .4, Wt('только') + .1, A3[0] - 820, A3[1] - 420);
  hold(Wt('только') + .1, Wt('соглашается') + .6, A3[0] - 380, A3[1] - 60, 1.08, -.015, { dz: .05 });
  camKey(Wt('пропускает') + .2, A3[0] + 100, A3[1] + 20, .9, .01); camKey(Wt('дочери') + .5, A3[0] + 120, A3[1] + 40, .95, .015);

  // S4 · hiding in plain sight: ad face, town, charity, Hank shakes his hand
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  typedCard({ x: A4[0], y: A4[1] - 420, w: 900, h: 150, rot: -.015, order: 400, lined: false, tIn: Wt('приём') - .2, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('ПРЯЧЕТСЯ НА ВИДУ', Wt('прячется'), .04), 0, 18, `800 56px ${SANS}`, INK, 'center']]);
  pw('gpollos2', Wt('лицо') - .3, { x: A4[0] - 520, y: A4[1] - 40, w: 520, rot: -.05, order: 410, off: 2, caption: capt('ЛИЦО ГОРОДА', Wt('городе')), capSize: 24 });
  const hk = pw('ginterview', Wt('хэнк') - .3, { x: A4[0] + 300, y: A4[1] + 20, w: 720, rot: .03, order: 420, off: 6 });
  tag({ x: A4[0] + 560, y: A4[1] - 290, w: 460, rot: .06, label: 'РУКОПОЖАТИЕ DEA', tIn: Wt('пожимает') + .05, order: 430, size: 36 });
  card({ x: A4[0] - 100, y: A4[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 440, tIn: 0, scrawls: [scrawl('НАРКОБАРОН ЗА КАССОЙ', Wt('наркобарона') - .1, .6, { size: 56, rot: -.04 })] });
  goTo(A4, Wt('дочери') + .5, Wt('=это') + .1, A4[0] - 700, A4[1] - 600);
  hold(Wt('=это') + .1, Wt('месте') + .2, A4[0], A4[1] - 340, 1.05, -.01, { dz: .05 });
  camKey(Wt('лицо') + .2, A4[0] - 460, A4[1] - 40, 1.05, -.015); camKey(Wt('хэнк') + .2, A4[0] + 280, A4[1] + 20, 1.05, .01);
  camKey(Wt('никто') + .2, A4[0] - 40, A4[1] + 200, .85, 0); camKey(Wt('фастфуда') + .4, A4[0] - 60, A4[1] + 260, .92, -.01);

  // S5 · the office: nothing extra -> "safe"
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, 1);
  pw('goffice', Wt('офисе') - .3, { x: A5[0] - 480, y: A5[1] - 40, w: 640, rot: -.03, order: 500, off: 4 });
  const of = card({ x: A5[0] + 420, y: A5[1] - 20, w: 520, h: 420, rot: .03, order: 510, lined: true, tIn: Wt('лишнего') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 34px ${MONO}`) });
  of.cl = [checkLine('РОВНЫЙ СТОЛ', Wt('стол') + .05, 'v', -200, -120), checkLine('КОСТЮМ', Wt('костюм') + .05, 'v', -200, -40), checkLine('ОЧКИ', Wt('пятна') - .2, 'v', -200, 40)];
  of.stamps = [stamp('БЕЗОПАСЕН', Wt('безопасен') - .1, { x: 0, y: 140, size: 64, rot: -.08, shake: 14 })];
  goTo(A5, Wt('фастфуда') + .4, Wt('офисе') + .1, A5[0] - 860, A5[1] - 400);
  hold(Wt('офисе') + .1, Wt('лишнего') + .2, A5[0] - 440, A5[1] - 30, 1.08, -.015, { dz: .05 });
  camKey(Wt('пятна') + .3, A5[0] + 380, A5[1] + 20, 1.05, .015); camKey(Wt('безопасен') + .5, A5[0] + 400, A5[1] + 60, 1.15, .02);

  // S6 · "I hide in plain sight, same as you" -> Walter wants to be seen, Gus does not
  const A6 = [2000, 3900]; lamp(A6[0], A6[1] - 200, 2000, 1);
  typedCard({ x: A6[0], y: A6[1] - 380, w: 900, h: 170, rot: -.015, order: 600, lined: false, tIn: Wt('позже') - .2, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('«Я прячусь на виду, как и ты»', Wt('прячусь') - .2, .035), 0, 20, `700 italic 46px "DejaVu Serif"`, INK, 'center']]);
  pw('walthat', Wt('уолтер', 5) - .2, { x: A6[0] - 440, y: A6[1] + 60, w: 600, rot: -.04, order: 610, caption: capt('ХОЧЕТ, ЧТОБЫ ЗАМЕТИЛИ', Wt('заметили') - .3), capSize: 22 });
  pw('gelevator', Wt('гус', 5) - .2, { x: A6[0] + 440, y: A6[1] + 60, w: 600, rot: .04, order: 620, off: 4, caption: capt('ЧТОБЫ НЕ ЗАМЕЧАЛИ', Wt('замечали') - .3), capSize: 22 });
  goTo(A6, Wt('безопасен') + .5, Wt('позже') + .1, A6[0] - 700, A6[1] - 600);
  hold(Wt('позже') + .1, Wt('получается') + .3, A6[0], A6[1] - 300, 1.05, -.01, { dz: .05 });
  camKey(Wt('мечтал') + .2, A6[0] - 400, A6[1] + 60, 1.05, -.015); camKey(Wt('старается') + .2, A6[0] + 400, A6[1] + 60, 1.05, .015);
  camKey(T_END, A6[0] + 420, A6[1] + 70, 1.2, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
