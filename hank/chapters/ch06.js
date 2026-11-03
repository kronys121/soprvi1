// 06 · ОДНА МИНУТА  (insert: the anonymous call "двое идут к твоей машине, у тебя одна минута")
CH_V0 = 361.7;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'ОДНА МИНУТА', T_START);
  hold(T_START, Wt('дальше') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Hank in the car: no gun, no badge, no hope — the call (original dub)
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  pw('hankcall', Wt('сидит') - .5, { x: A1[0] - 620, y: A1[1] - 180, w: 480, rot: -.05, order: 100, off: 1, caption: capt('ХЭНК В МАШИНЕ', Wt('машине')), capSize: 22 });
  const no = card({ x: A1[0] - 620, y: A1[1] + 240, w: 480, h: 260, rot: .03, order: 105, lined: true, tIn: Wt('оружия') - .3, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  no.cl = [checkLine('ОРУЖИЕ', Wt('оружия') + .1, 'x', -200, -70), checkLine('ЗНАЧОК', Wt('значка') + .1, 'x', -200, 0), checkLine('НАДЕЖДА', Wt('надежды') + .1, 'x', -200, 70)];
  dlgShot('d_minute', A1[0] + 180, A1[1] - 20, { w: 900, order: 110 });
  const mn = card({ x: A1[0] + 180, y: A1[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  mn.s = stamp('1:00', DLGT.d_minute + 9.4, { size: 90, rot: -.06, shake: 16 });
  goTo(A1, Wt('дальше') + .2, Wt('сцен') + .1, A1[0] - 860, A1[1] - 460);
  hold(Wt('сцен') + .1, Wt('оружия') - .2, A1[0] - 600, A1[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('значка') + .1, A1[0] - 600, A1[1] + 220, 1.1, .015);
  camKey(DLGT.d_minute + .1, A1[0] + 180, A1[1] - 20, 1.08, 0); camKey(DLGT.d_minute + 11.2, A1[0] + 180, A1[1] + 60, 1.2, .01);

  // S2 · he thinks it's a prank — but checks the mirror: Tuco's cousins, the cartel's silent killers, here to avenge their brother
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  card({ x: A2[0] - 560, y: A2[1] - 330, w: 1, h: 1, shadow: 0, lit: false, order: 195, tIn: 0, scrawls: [scrawl('розыгрыш?', Wt('розыгрыш') - .2, .4, { size: 50, rot: -.05 })] });
  pw('mirror', Wt('думает') - .3, { x: A2[0] - 560, y: A2[1] - 20, w: 500, rot: -.04, order: 200, off: 2, caption: capt('ЗЕРКАЛО ЗАДНЕГО ВИДА', Wt('зеркало')), capSize: 20 });
  const cz = pw('axe', Wt('зеркало') + .2, { x: A2[0] + 320, y: A2[1] - 40, w: 760, rot: .015, order: 210, off: 1, caption: capt('ДВОЮРОДНЫЕ БРАТЬЯ ТУКО', Wt('братьев')), capSize: 24 });
  cz.stamps = [stamp('МЕСТЬ ЗА БРАТА', Wt('мстить') - .1, { x: 0, y: 80, size: 60, rot: -.07, shake: 14 })];
  goTo(A2, DLGT.d_minute + 11.4, Wt('думает') + .1, A2[0] - 860, A2[1] - 460);
  hold(Wt('думает') + .1, Wt('зеркало') + .3, A2[0] - 560, A2[1] - 80, 1.08, -.015, { dz: .05 });
  camKey(Wt('видит') + .2, A2[0] + 320, A2[1] - 40, 1.02, .015); camKey(Wt('брата') + .3, A2[0] + 320, A2[1], 1.12, .015);

  // S3 · seconds: several bullets; he pins one with the car; the other walks up with an axe; bleeding, he finds a dropped bullet, loads, shoots
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1.05);
  const c1 = pw('cousins', Wt('секунды') - .5, { x: A3[0] - 560, y: A3[1] - 200, w: 520, rot: -.04, order: 300, off: 3, caption: capt('НЕСКОЛЬКО ПУЛЬ', Wt('пуль') - .2), capSize: 22 });
  sfx('shot', Wt('получает')); sfx('shot', Wt('несколько')); sfx('shot', Wt('пуль'));
  const c2 = pw('cousins', Wt('сдать') - .4, { x: A3[0] - 560, y: A3[1] + 240, w: 520, rot: .03, order: 305, off: 8, caption: capt('ПРИДАВИЛ МАШИНОЙ', Wt('машиной') - .2), capSize: 22 });
  sfx('crash', Wt('придавить'));
  pw('axe', Wt('второй') - .4, { x: A3[0] + 120, y: A3[1] - 200, w: 500, rot: .04, order: 310, off: 5, caption: capt('С ТОПОРОМ', Wt('топором') - .2), capSize: 22 });
  const bl = pw('bullet', Wt('нащупывает') - .5, { x: A3[0] + 120, y: A3[1] + 240, w: 500, rot: -.03, order: 315, off: 2, caption: capt('ВЫПАВШИЙ ПАТРОН', Wt('патрон')), capSize: 22 });
  const sh = pw('shot', Wt('заряжает') - .3, { x: A3[0] + 760, y: A3[1], w: 500, rot: .04, order: 320, off: 4 });
  sh.stamps = [stamp('В ГОЛОВУ', Wt('голову') - .3, { x: 0, y: 60, size: 70, rot: -.08, shake: 22 })];
  sfx('shot', Wt('стреляет') + .1); shake(Wt('стреляет') + .1, 14);
  goTo(A3, Wt('брата') + .6, Wt('секунды') - .2, A3[0] - 860, A3[1] - 460);
  camKey(Wt('секунды') + .1, A3[0] - 540, A3[1] - 180, 1.08, -.015); camKey(Wt('сдать') + .1, A3[0] - 540, A3[1] + 220, 1.08, .015);
  camKey(Wt('второй') + .1, A3[0] + 120, A3[1] - 180, 1.08, -.01); camKey(Wt('нащупывает') + .1, A3[0] + 120, A3[1] + 220, 1.12, .015);
  camKey(Wt('заряжает') + .1, A3[0] + 740, A3[1], 1.1, .01); camKey(Wt('голову') + .3, A3[0] + 740, A3[1] + 20, 1.25, .025);

  // S4 · real courage: not the party with the gun, but lying in blood with one bullet; the man who shook in the elevator beats two killers
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('partygun', Wt('вот') - .2, { x: A4[0] - 560, y: A4[1] - 80, w: 460, rot: -.04, order: 400, off: 2, caption: capt('НЕ ЭТО', Wt('вечеринке') - .1), capSize: 30 });
  pw('shot', Wt('включается') - .5, { x: A4[0] + 40, y: A4[1] - 80, w: 560, rot: .03, order: 410, off: 8, caption: capt('А ЭТО · ОДИН ПАТРОН', Wt('патрон', 2) - .3), capSize: 22 });
  const nt = card({ x: A4[0] - 560, y: A4[1] + 260, w: 1, h: 1, shadow: 0, lit: false, order: 405, tIn: 0, draw: (g, t, it) => { g.strokeStyle = RED; g.lineWidth = 9; const p = Math.min(1, Math.max(0, (t - it.t0) / .3)); g.beginPath(); g.moveTo(-200, -440); g.lineTo(-200 + 400 * p, -440 + 260 * p); g.stroke(); } });
  nt.t0 = Wt('вечеринке') + .2;
  const tr = card({ x: A4[0] + 640, y: A4[1] - 60, w: 460, h: 360, rot: .03, order: 420, lined: false, tIn: Wt('трясло') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -110, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, -20, `800 60px ${SANS}`, INK, 'center'); drawTyped(g, it.c, t, 0, 80, `800 36px ${SANS}`, RED, 'center'); } });
  tr.a = typed('трясло в лифте', Wt('трясло') - .1, .04); tr.b = typed('↓', Wt('побеждает') - .2, .1); tr.c = typed('2 УБИЙЦЫ', Wt('двух') - .1, .06);
  card({ x: A4[0], y: A4[1] - 400, w: 1, h: 1, shadow: 0, lit: false, order: 425, tIn: 0, scrawls: [scrawl('настоящая храбрость', Wt('храбрость') - .3, .5, { size: 54, rot: -.03 })] });
  goTo(A4, Wt('голову') + .7, Wt('вот') + .1, A4[0] - 860, A4[1] - 600);
  hold(Wt('вот') + .1, Wt('пистолетом') + .3, A4[0] - 260, A4[1] - 160, .92, -.01, { dz: .04 });
  camKey(Wt('включается') + .2, A4[0] + 40, A4[1] - 60, 1.02, .01); camKey(Wt('трясло') + .2, A4[0] + 600, A4[1] - 60, 1.05, .015); camKey(Wt('убийц') + .4, A4[0] + 600, A4[1] - 20, 1.12, .015);

  // S5 · the caller, we learn later: Gus Fring — who decided Hank alive suited him better
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, .9);
  pw('gusface', Wt('звонил') - .4, { x: A5[0] - 60, y: A5[1] - 60, w: 820, rot: -.01, order: 500, off: 2, caption: capt('ЗВОНИЛ: ГУС ФРИНГ', Wt('гус') - .1), capSize: 28 });
  const wh = card({ x: A5[0] - 60, y: A5[1] + 420, w: 760, h: 150, rot: -.015, order: 510, lined: false, tIn: Wt('решил') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 15, `800 36px ${SANS}`, INK, 'center') });
  wh.a = typed('живым Хэнк ему выгоднее', Wt('живым') - .2, .03);
  goTo(A5, Wt('убийц') + .7, Wt('звонил') + .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('звонил') + .2, A5[0] - 60, A5[1] - 60, 1.05, 0); camKey(Wt('фринг') + .4, A5[0] - 60, A5[1] - 40, 1.18, .01); camKey(T_END, A5[0] - 60, A5[1] + 200, .95, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}
