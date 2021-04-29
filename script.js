let superDeck = getDeck();  //declare variables only once, either globally or scoped
let playerHand = []; //playerHand is hand van speler, hier worden de kaarten van de speler opgeslagen
let playerTarget = document.getElementById("playerTarget"); //playertarget is piece of HTML where all player cards are shown
let cpuHand = [];
let cpuTarget = document.getElementById("cpuTarget"); //cputarget is piece of HTML where all cpu cards are shown

document.getElementById("draw").addEventListener("click", function () {
    playerHand.push(drawCard());

    showCards(playerHand, playerTarget);
    //for each in playerHand in player target
});

document.getElementById("playGame").addEventListener("click", function () {

    //shuffle deck
    // 2 cards each
    //player input draw or hold
    //show player cards
    superDeck = getDeck();  //deck reset
    playerHand = [];  // array 
    playerHand.push(drawCard());
    playerHand.push(drawCard());
    showCards(playerHand, playerTarget);



    cpuHand = [];  // array 
    cpuHand.push(drawCard());
    cpuHand.push(drawCard());
    showCards(cpuHand, cpuTarget);
});

//hold
document.getElementById("hold").addEventListener("click", function () {
    let cpuScore = calculateScore(cpuHand);
    let playerScore = calculateScore(playerHand);
    if (checkWin(playerScore, cpuScore)) {
        alert("Player won");
    }
    while (cpuScore < 17 && !checkWin/*check if cpu dead or player won*/(playerScore, cpuScore)) { //met Booleans kan je maar 1 ding true of false checken
        cpuHand.push(drawCard());
        cpuScore = calculateScore(cpuHand);
        showCards(cpuHand, cpuTarget);
    }
    if (checkWin (playerScore, cpuScore)){
        alert("Player won");
        
    }
    else {
        alert("CPU won");
    }

});
//cpu slim laten redeneren, functies schrijven voor cpu