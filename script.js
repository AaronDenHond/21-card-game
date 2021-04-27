let superDeck = getDeck();  //declare variables only once, either globally or scoped
let playerDeck = [];
let playerTarget = document.getElementById("playerTarget");
let cpuDeck = [];
let cpuTarget = document.getElementById("cpuTarget");

document.getElementById("draw").addEventListener("click", function () {
    playerDeck.push(drawCard());
    console.log(playerDeck);
    console.log(superDeck);
    showCards(playerDeck, playerTarget);
    //for each in playerdeck in player target
});

document.getElementById("playGame").addEventListener("click", function () {

    //shuffle deck
    // 2 cards each
    //player input draw or hold
    //show player cards
    superDeck = getDeck();  //deck reset
    playerDeck = [];  // array 
    playerDeck.push(drawCard());
    playerDeck.push(drawCard());
    showCards(playerDeck, playerTarget);



    cpuDeck = [];  // array 
    cpuDeck.push(drawCard());
    cpuDeck.push(drawCard());
    showCards(cpuDeck, cpuTarget);
});

document.getElementById("hold").addEventListener("click", function (){
let cpuscore = calculateScore(cpuDeck);
let playerscore = calculateScore(playerDeck);
if (cpuscore > playerscore){
    alert("Game lost")
} else if (cpuscore == 21) {
    alert("Game lost")
}
  cpuDeck.push(drawCard());
  showCards(cpuDeck, cpuTarget);
  if (cpuscore > playerscore){
    alert("Game lost")
} else if (cpuscore == 21) {
    alert("Game lost")
}
});

//cpu slim laten redeneren, functies schrijven voor cpu