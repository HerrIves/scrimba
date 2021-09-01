function getCard(){
    return Math.round(Math.random()*9 + 2);
}

let firstCard = getCard();
let secondCard = getCard();
let sum = firstCard + secondCard;

