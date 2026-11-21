// 11 · ФИНАЛ — questions, the dossier shelf, the next case
CH_V0 = 653.58;
const [T_START, T_END] = chRange(10);
FADE_OUT = 1.6;
function buildScenes() {
  const w = (s, n = 1, e = false) => Wt(s, n, e);
  dress(13);
  const q1 = note(-700, -300, T_START + .3, [['БЫЛ ЛИ ВЫХОД', w('выход') - .2, 44, RED], ['у Пусси?', w('пусси') - .2, 36]], { w: 640, h: 300, shot: false });
  const q2 = note(150, -260, w('правильно') - .1, [['ПРАВ ЛИ ТОНИ', w('правильно') + .05, 42, RED], ['в лодке?', w('поступил') + .1, 30]], { w: 640, h: 300, shot: false });
  S(T_START, -300, -280, .95, 0, { quiet: true, dz: .08 });
  sticky(900, -250, w('напишите') - .05, { rot: .07 }).hands = [hand('пишите!', w('напишите') + .1, .4, { size: 96, rot: -.06 })];
  S(w('напишите') - .2, 400, -260, 1.0, .01);
  slam([['ПОДПИСЫВАЙТЕСЬ', w('подписывайтесь')]], { size: 150, y: H * .82, out: w('досье') - .1, seed: 4, red: [0] });
  faces(0, 650, [['tonyface', 'ТОНИ СОПРАНО', w('сопрано')], ['chrisface', 'КРИСТОФЕР', w('кристофера')], ['waltface', 'УОЛТЕР УАЙТ', w('уолтера')]], { w: 380, gap: 480 });
  S(w('досье') - .2, 0, 670, .95, 0, { dx: 140 });
  const nx = item({ draw: drawFolder, x: 0, y: 1700, w: 1100, h: 720, rot: -.02, order: ORD++, tIn: w('следующее') - .1, dur: .25, enter: 'slide', dx: 0, dy: 700, tab: 'СЛЕДУЮЩЕЕ ДЕЛО', snd: false,
    text: (g, t, it) => { g.fillStyle = 'rgba(40,25,10,.85)'; g.font = `400 32px ${MONO}`; g.textAlign = 'center'; g.fillText('ДЕЛО № ????', 0, -230); const p = prog(t, w('столе') - .2, w('столе') + .4); if (p > 0) { g.globalAlpha *= p; g.fillStyle = INK; g.font = `700 230px ${HEAD}`; g.fillText('?', 0, 90); } } });
  sfx('slide', w('следующее') - .3, { dur: .3 });
  S(w('следующее') - .15, 0, 1700, 1.25, -.01, { dz: .14 });
  buildShots(T_END);
  ensureFG([[-2600, 500, 'cup', 1.0, 1.9], [2600, 900, 'smoke', 1.6, 1.5, 0, .7]]);
}
