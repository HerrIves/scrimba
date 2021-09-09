let currentCard = getRandomCard();
let nextCard = getRandomCard();
let cards = [currentCard, nextCard];
let sum = currentCard + nextCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function getRandomCard() {
    let i = Math.round(Math.random() * 12 + 1);

     if(i === 1){return 10;}
     else if(i > 10){return 10;}
     else return i;
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

    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        console.log(cardsEl.textContent);
        cardsEl.textContent += cards[i] + " ";
        console.log(cards[i]);
        console.log(cardsEl.textContent)
    }
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
    nextCard = getRandomCard();
    cards.push(nextCard);
    console.log(cards)
    sum = sum + nextCard;
    renderGame();
}
