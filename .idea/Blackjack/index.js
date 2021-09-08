let currentCard = getCard();
let nextCard = getCard();
let cards = [currentCard, nextCard];
let sum = currentCard + nextCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function getCard() {
    return Math.round(Math.random() * 9 + 2);
}

function ageVerify() {
    let age = 16;
    if (age < 21) {
        console.log("You can not enter the club!")
    } else {
        console.log("Welcome!")
    }
}

function startGame(){
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: " + cards[0] + ' ' + cards[1];
    sumEl.innerText = "Sum: " + sum;

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!";
        hasBlackJack =true;
    } else {
        messageEl.textContent = "You're out of the game!";
        isAlive = false;
    }
}

function newCard() {
    console.log('Pick up new Card!');
    nextCard = getCard();
    cards.push(nextCard);
    console.log(cards)
    sum = sum + nextCard;
    renderGame();
}
