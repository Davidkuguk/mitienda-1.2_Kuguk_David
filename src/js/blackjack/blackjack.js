const suits = ['Corazon', 'Trebol', 'Diamante', 'Picas'];
const values = [
  'A',
  'K',
  'Q',
  'J',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];

const game = {
  dealerCards: [],
  playerCards: [],
  dealerScore: 0,
  playerScore: 0,
  deck: [],
};

function createDeck(num) {
  num = num || 1;
  game.deck.length = 0;
  for (let i = 0; i < num; i++) {
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        const card = {
          suit: suits[suitIdx],
          value: values[valueIdx],
        };
        game.deck.push(card);
      }
    }
  }
}

function shuffleDeck() {
  for (let i = 0; i < game.deck.length; i++) {
    const swapIdx = Math.trunc(Math.random() * game.deck.length);
    const tmp = game.deck[swapIdx];
    game.deck[swapIdx] = game.deck[i];
    game.deck[i] = tmp;
  }
}

function initialTurn() {
  console.log(game.deck.length);
  game.playerCards.length = 0;
  game.dealerCards.length = 0;
  for (let i = 0; i < 2; i++) {
    game.playerCards.push(game.deck.shift());
    game.dealerCards.push(game.deck.shift());
  }
  game.dealerScore = getScore(game.dealerCards);
  game.playerScore = getScore(game.playerCards);
}

function getCardNumericValue(card) {
  switch (card.value) {
    case 'A':
      return 11;
    case 'K':
    case 'Q':
    case 'J':
      return 10;
    default:
      return +card.value;
  }
}

function getScore(cards) {
  let score = 0;
  let hasAce = 0;
  for (let i = 0; i < cards.length; i++) {
    score += getCardNumericValue(cards[i]);
    if (cards[i].value === 'A') {
      hasAce++;
    }
  }
  while (hasAce > 0 && score > 21) {
    score -= 10;
    hasAce--;
  }
  return score;
}

function getNextCard(cards) {
  cards.push(game.deck.shift());
}

function playDealer() {
  game.dealerScore = getScore(game.dealerCards);
  while (
    game.playerScore <= 21
		&& game.dealerScore < game.playerScore
		&& game.dealerScore < 21
  ) {
    getNextCard(game.dealerCards);
    game.dealerScore = getScore(game.dealerCards);
  }
}

function playPlayer() {
  getNextCard(game.playerCards);
  game.playerScore = getScore(game.playerCards);
}

function cardsToString(cards) {
  let str = '';
  for (let i = 0; i < cards.length; i++) {
    str += `${cards[i].suit}-${cards[i].value}; `;
  }
  return str;
}

function checkBlackJack(cards) {
  return getScore(cards) === 21;
}

function isPlayerScoreUpperLimit() {
  return game.playerScore >= 21;
}

function checkPlayerWinner() {
  return !!(game.playerScore <= 21
		&& (game.dealerScore > 21 || game.playerScore >= game.dealerScore));
}

function checkDealerWinner() {
  return !!(game.dealerScore <= 21
		&& (game.playerScore > 21 || game.dealerScore >= game.playerScore));
}

function playGame() {
  if (game.deck.length < suits.length * values.length * 4 * 0.15) {
    createDeck(4);
    shuffleDeck();
  }
  initialTurn();
}

function getFirstRound(cards, player) {
  return player ? cardsToString(cards) : cardsToString([cards[0]]);
}
