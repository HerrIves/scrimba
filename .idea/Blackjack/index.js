let currentCards = getCard();
let nextCard = getCard();
let sum = currentCards + nextCard;

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
function startGame() {

    document.getElementById('cards-el').textContent = "Cards: " + currentCards + ' ' + nextCard;
    document.getElementById('sum-el').innerText = "Sum: " + sum;

    let messageEl = document.getElementById('message-el');

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!";
    } else {
        messageEl.textContent = "You're out of the game!";
    }
}

function newCard() {
    console.log('Pick up new Card!');
    nextCard = getCard();
    sum = sum + nextCard;

    startGame();
}
