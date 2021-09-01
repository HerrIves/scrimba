function getCard(){
    return Math.round(Math.random()*9 + 2);
}
let  age = 16;

//function ageVerify(){
    if (age < 21){
        console.log("You can not enter the club!")
    }else {
        console.log("Welcome!")
    }

let firstCard = getCard();
let secondCard = getCard();
let sum = firstCard + secondCard;

console.log(sum);

if (sum < 21){
    console.log("Do you want to draw a new card?")
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack!")
} else {
    console.log("You're out of the game! 😭")
}