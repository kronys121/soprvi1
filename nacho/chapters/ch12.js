// 12 · ФИНАЛ — questions, the series shelf, the next case
CH_V0 = 538.04;
const [T_START, T_END] = chRange(12);
FADE_OUT = 1.6;
function buildScenes() {
  const w = (s, n = 1, e = false) => Wt(s, n, e);
  dress(13);
  const q1 = note(-700, -300, T_START + .3, [['БЫЛ ЛИ ШАНС', w('шанс') - .2, 44, RED], ['выйти живым?', w('живым') - .2, 36]], { w: 640, h: 300, shot: false });
  const q2 = note(150, -260, w('кто') - .1, [['КТО ВИНОВАТ?', w('виноват') - .1, 44, RED], ['Гус · Лало · он сам', w('гус') - .1, 34]], { w: 640, h: 300, shot: false });
  S(T_START, -300, -280, .95, 0, { quiet: true, dz: .08 });
  sticky(900, -250, w('напишите') - .05, { rot: .07 }).hands = [hand('пишите!', w('напишите') + .1, .4, { size: 96, rot: -.06 })];
  S(w('напишите') - .2, 400, -260, 1.0, .01);
  slam([['ПОДПИСЫВАЙТЕСЬ', w('подписывайтесь')]], { size: 150, y: H * .82, out: w('досье') - .1, seed: 4, red: [0] });
  const shelf = faces(0, 650, [['waltface', 'УОЛТЕР', w('уолтера')], ['gusface', 'ГУС', w('гуса')], ['jesse', 'ДЖЕССИ', w('джесси')], ['saulface', 'СОЛ', w('сола')], ['hankface', 'ХЭНК', w('хэнка')], ['mikeface', 'МАЙК', w('майка')], ['laloface', 'ЛАЛО', w('саламанку') - .3]], { w: 300, gap: 340 });
  S(w('досье') - .2, 0, 670, .78, 0, { dx: 160 });
  const nx = item({ draw: drawFolder, x: 0, y: 1700, w: 1100, h: 720, rot: -.02, order: ORD++, tIn: w('следующее') - .1, dur: .25, enter: 'slide', dx: 0, dy: 700, tab: 'СЛЕДУЮЩЕЕ ДЕЛО', snd: false,
    text: (g, t, it) => { g.fillStyle = 'rgba(40,25,10,.85)'; g.font = `400 32px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № ????', 0, -230); const p = prog(t, w('столе') - .2, w('столе') + .4); if (p > 0) { g.globalAlpha *= p; g.fillStyle = INK; g.font = `700 230px ${HEAD}`; g.fillText('?', 0, 90); } } });
  sfx('slide', w('следующее') - .3, { dur: .3 });
  S(w('следующее') - .15, 0, 1700, 1.25, -.01, { dz: .14 });
  buildShots(T_END);
  ensureFG([[-2600, 500, 'cup', 1.0, 1.9], [2600, 900, 'smoke', 1.6, 1.5, 0, .7]]);
}
