function checkWin(reboard) {
  if (test(game.algo.checkAi()) == 'hu') return 2;
  else if (test(game.algo.checkAi()) == 'ai') return 3;
  else if ((reboard.filter(_ => _ !== game.players.human && _ !== game.players.bot)).length === 0) return 1;
}