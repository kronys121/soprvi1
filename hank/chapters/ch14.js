// 14 · ОЗИМАНДИЯ  (inserts: "ты самый умный... он всё решил ещё десять минут назад"; "меня зовут начальник отдела Шрейдер")
CH_V0 = 863.8;
const [T_START, T_END] = chRange(14);
function buildScenes() {
  const D = [0, 0]; divider(D, 14, 'ОЗИМАНДИЯ', T_START);
  hold(T_START, Wt('сцена') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · one of the best scenes in TV history: Hank wounded, Jack aims; Walt in cuffs offers all his money — $80 million — for Hank's life
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1.05);
  pw('hankground', Wt('сцена') + .3, { x: A1[0] - 620, y: A1[1] - 180, w: 480, rot: -.05, order: 100, off: 1, caption: capt('ХЭНК РАНЕН', Wt('раненый')), capSize: 22 });
  pw('jackgun', Wt('джек') - .4, { x: A1[0] - 620, y: A1[1] + 240, w: 480, rot: .04, order: 105, off: 2, caption: capt('ДЖЕК ЦЕЛИТСЯ', Wt('целится')), capSize: 22 });
  const wb = pw('waltbegs', Wt('закованный') - .5, { x: A1[0] + 300, y: A1[1] - 40, w: 760, rot: .015, order: 110, off: 3, caption: capt('УОЛТЕР В НАРУЧНИКАХ', Wt('наручники')), capSize: 24 });
  const mo = card({ x: A1[0] + 300, y: A1[1] + 420, w: 620, h: 150, rot: -.02, order: 120, color: '#e9efe0', lined: false, tIn: Wt('предлагает') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 20, `800 60px ${MONO}`, '#2c5a2a', 'center') });
  mo.a = typed('$80 000 000', Wt('восемьдесят') - .1, .06);
  wb.stamps = [stamp('ЗА ЖИЗНЬ ХЭНКА', Wt('обмен') - .1, { x: 0, y: -100, size: 54, rot: -.06, shake: 14 })];
  goTo(A1, Wt('сцена') + .2, Wt('лучшей') - .2, A1[0] - 860, A1[1] - 460);
  hold(Wt('лучшей') - .2, Wt('раненый') + .3, A1[0] - 600, A1[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('целится') + .1, A1[0] - 600, A1[1] + 220, 1.08, .015); camKey(Wt('закованный') + .1, A1[0] + 300, A1[1] - 40, 1.02, .015);
  camKey(Wt('восемьдесят') + .3, A1[0] + 300, A1[1] + 260, .98, -.01); camKey(Wt('хэнка') + .3, A1[0] + 300, A1[1] + 200, 1.05, -.01);

  // S2 · Hank looks on calmly: "you're the smartest guy I ever met... he made up his mind ten minutes ago" (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  pw('hankfinal', Wt('смотрит') - .4, { x: A2[0] - 620, y: A2[1] - 160, w: 480, rot: -.05, order: 200, off: 1, caption: capt('СПОКОЙНО', Wt('спокойно')), capSize: 26 });
  dlgShot('d_tenmin', A2[0] + 180, A2[1] - 20, { w: 900, order: 210 });
  const tm = card({ x: A2[0] + 180, y: A2[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  tm.s = stamp('10 МИНУТ НАЗАД', DLGT.d_tenmin + 15.4, { size: 62, rot: -.06, shake: 14 });
  goTo(A2, Wt('хэнка') + .5, Wt('хэнк', 3) - .2, A2[0] - 860, A2[1] - 460);
  camKey(Wt('хэнк', 3) - .1, A2[0] - 600, A2[1] - 140, 1.08, -.015); camKey(DLGT.d_tenmin - .3, A2[0] - 600, A2[1] - 120, 1.15, -.02);
  camKey(DLGT.d_tenmin + .1, A2[0] + 180, A2[1] - 20, 1.08, 0); camKey(DLGT.d_tenmin + 17.3, A2[0] + 180, A2[1] + 40, 1.22, .01);

  // S3 · he turns to his killer: no begging, no bargaining — his rank and his name (original dub); and tells Jack where to go
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  const nb = card({ x: A3[0] - 620, y: A3[1] - 160, w: 480, h: 300, rot: -.03, order: 300, lined: true, tIn: Wt('поворачивается') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 30px ${MONO}`) });
  nb.cl = [checkLine('ПРОСИТ', Wt('просит') + .1, 'x', -200, -60), checkLine('ТОРГУЕТСЯ', Wt('торгуется') + .1, 'x', -200, 20)];
  dlgShot('d_asac', A3[0] + 180, A3[1] - 20, { w: 900, order: 310 });
  const as = card({ x: A3[0] - 620, y: A3[1] + 300, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  as.s = stamp('АГЕНТ ШРЕЙДЕР', DLGT.d_asac + 22.6, { size: 56, rot: -.07, shake: 16 });
  card({ x: A3[0] + 180, y: A3[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 330, tIn: 0, scrawls: [scrawl('и посылает Джека к чёрту', Wt('посылает') - .2, .6, { size: 52, rot: -.04 })] });
  goTo(A3, DLGT.d_tenmin + 17.5, Wt('потом') + .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('потом') + .1, Wt('торгуется') + .4, A3[0] - 600, A3[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(DLGT.d_asac + .1, A3[0] + 180, A3[1] - 20, 1.08, 0); camKey(DLGT.d_asac + 21, A3[0] + 180, A3[1], 1.2, .01);
  camKey(DLGT.d_asac + 23.2, A3[0] - 400, A3[1] + 200, .9, -.01); camKey(Wt('чёрту') + .2, A3[0] + 100, A3[1] + 300, .95, .01);

  // S4 · the shot; Walt falls to his knees and howls; Hank buried in the same hole where Walt's money lay
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1.05);
  const sf = pw('shotflash', Wt('выстрел') - .3, { x: A4[0] - 300, y: A4[1] - 160, w: 620, rot: -.02, order: 400, off: 0 });
  sfx('shot', Wt('выстрел') - .05); shake(Wt('выстрел') - .05, 26);
  pw('waltcollapse', Wt('падает') - .4, { x: A4[0] + 540, y: A4[1] - 160, w: 500, rot: .04, order: 410, off: 1, caption: capt('НА КОЛЕНИ · ВОЕТ', Wt('воет') - .2), capSize: 22 });
  const gv = pw('barrels', Wt('закапывают') - .4, { x: A4[0] + 100, y: A4[1] + 300, w: 600, rot: -.02, order: 420, off: 2, caption: capt('ТА ЖЕ ЯМА, ГДЕ ЛЕЖАЛИ ДЕНЬГИ', Wt('яме') + .1), capSize: 20 });
  goTo(A4, Wt('чёрту') + .5, Wt('выстрел') - .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('выстрел'), A4[0] - 300, A4[1] - 160, 1.2, .02); camKey(Wt('падает') + .1, A4[0] + 520, A4[1] - 160, 1.08, .015);
  camKey(Wt('закапывают') + .2, A4[0] + 100, A4[1] + 280, 1.05, -.01); camKey(Wt('уолтера') + .3, A4[0] + 100, A4[1] + 300, 1.12, -.01);

  // S5 · remember the pilot: bragging with a gun at the party — and now dying on the sand without lowering his eyes; the bravado was armour; when fear really came, he needed none
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2000, 1);
  pw('partygun', Wt('вспомните') - .4, { x: A5[0] - 560, y: A5[1] - 80, w: 480, rot: -.04, order: 500, off: 3, caption: capt('1 СЕРИЯ · ПИСТОЛЕТ НА ВЕЧЕРИНКЕ', Wt('вечеринке') - .3), capSize: 18 });
  pw('hankfinal', Wt('умирает') - .5, { x: A5[0] + 100, y: A5[1] - 80, w: 560, rot: .03, order: 510, off: 6, caption: capt('НЕ ОПУСТИВ ГЛАЗ', Wt('глаз') - .3), capSize: 22 });
  const ar = card({ x: A5[0] + 760, y: A5[1] - 60, w: 440, h: 400, rot: .03, order: 520, lined: true, tIn: Wt('бравада') - .5, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawChecks(g, t, it.cl, `700 26px ${MONO}`); drawTyped(g, it.a, t, -180, 140, `800 32px ${SANS}`, RED); } });
  ar.cl = [checkLine('БРАВАДА', Wt('бравада') + .1, 'x', -180, -130), checkLine('ШУТКИ', Wt('шутки') + .1, 'x', -180, -60), checkLine('ПИВО', Wt('пиво') + .1, 'x', -180, 10)];
  ar.a = typed('= СПРЯТАТЬ СТРАХ', Wt('спрятать') - .2, .04);
  card({ x: A5[0] + 100, y: A5[1] + 420, w: 1, h: 1, shadow: 0, lit: false, order: 530, tIn: 0, scrawls: [scrawl('броня больше не нужна', Wt('броня') - .6, .6, { size: 56, rot: -.04 })] });
  goTo(A5, Wt('уолтера') + .5, Wt('вспомните') + .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('вспомните') + .2, A5[0] - 540, A5[1] - 80, 1.08, -.015); camKey(Wt('умирает') + .1, A5[0] + 100, A5[1] - 80, 1.05, .01);
  camKey(Wt('всегда') + .3, A5[0] + 100, A5[1] - 40, .82, 0); camKey(Wt('бравада') + .2, A5[0] + 720, A5[1] - 60, 1.05, .015);
  camKey(Wt('страх', 2) + .2, A5[0] + 300, A5[1] + 200, .85, 0); camKey(T_END, A5[0] + 200, A5[1] + 260, .92, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
