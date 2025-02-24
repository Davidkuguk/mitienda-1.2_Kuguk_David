// DOM variables
const dealerDOM = {
  cards: document.getElementById('cards-dealer'),
  score: document.getElementById('score-dealer'),
  result: document.getElementById('result-dealer'),
};
const playerDOM = {
  cards: document.getElementById('cards-player'),
  score: document.getElementById('score-player'),
  result: document.getElementById('result-player'),
};
const playerButtons = document.getElementById('player-buttons');
const newGameButton = document.getElementById('new-game-button');
const stayButton = document.getElementById('stay-button');
const hitButton = document.getElementById('hit-button');

function cleanGame() {
  dealerDOM.cards.innerHTML = '';
  dealerDOM.score.innerHTML = '';
  dealerDOM.result.innerHTML = '';
  playerDOM.cards.innerHTML = '';
  playerDOM.score.innerHTML = '';
  playerDOM.result.innerHTML = '';
}

function showGameButtons() {
  newGameButton.classList.add('d-none');
  playerButtons.classList.remove('d-none');
}
function hideGameButtons() {
  newGameButton.classList.remove('d-none');
  playerButtons.classList.add('d-none');
}

// Mostrar los estados quedad dividido para el dealer, el player y la ronda inicial.
// Conseguimos no mostrar todas las cartas del dealer a lo largo de la partida.
function showStatusPlayer() {
  playerDOM.cards.innerHTML = cardsToString(game.playerCards);
  playerDOM.score.innerHTML = getScore(game.playerCards);
}

function showStatusDealer() {
  dealerDOM.cards.innerHTML = cardsToString(game.dealerCards);
  dealerDOM.score.innerHTML = getScore(game.dealerCards);
}

function showInitStatus() {
  playerDOM.cards.innerHTML = getFirstRound(game.playerCards, true);
  playerDOM.score.innerHTML = getScore(game.playerCards);
  dealerDOM.cards.innerHTML = getFirstRound(game.dealerCards, false);
  dealerDOM.score.innerHTML = '-';
}

function showWinners() {
  showStatusPlayer();
  showStatusDealer();
  playerDOM.result.innerHTML = checkPlayerWinner() ? 'Ganador' : 'Perdedor';
  dealerDOM.result.innerHTML = checkDealerWinner() ? 'Ganador' : 'Perdedor';
}

newGameButton.addEventListener('click', () => {
  cleanGame();
  playGame();
  // Revisamos BlackJack de la primera ronda.
  const bjDealer = checkBlackJack(game.dealerCards);
  const bjPlayer = checkBlackJack(game.playerCards);
  // Ningún jugador en la mesa tiene BlackJack
  if (!bjDealer && !bjPlayer) {
    showGameButtons();
    showInitStatus();
  } else { // Un jugador tiene BlackJack
    // Jugador tiene BlackJack dejamos que juegue el dealer
    if (bjPlayer) {
      playDealer();
    }
    // La partida finaliza independientemente del tipo del BlackJack
    showWinners();
    hideGameButtons();
  }
});

hitButton.addEventListener('click', () => {
  playPlayer();
  if (isPlayerScoreUpperLimit()) {
    playDealer();
    showWinners();
    hideGameButtons();
  }
  showStatusPlayer();
});

stayButton.addEventListener('click', () => {
  playDealer();
  showWinners();
  hideGameButtons();
});
