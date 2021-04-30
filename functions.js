//function 1 : making a carddeck
function getDeck() {
    let suits = ["♠", "♦", "♣", "♥"];   // for array deck
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // for array deck
    let newDeck = new Array();
    let realValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];


    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = {
                value: values[x],  //card is an object? properties value,suit and realvalue?
                suit: suits[i],
                realValue: realValues[x]
            };
            newDeck.push(card);


        }
    }

    return newDeck;


}

// function 2 : drawing a card
function drawCard() {
    let rand = Math.floor(Math.random() * superDeck.length); //math.random (tss 0 en 1) superdeck.length recalculate deck length cause we lose cards per draw (first 52)
    let card = superDeck[rand]; //uit superdeck random index, krijg random waarde via random index, je spreekt index aan
    superDeck.splice(rand, 1); //kaart verwijderd, want anders mogelijk duplicaten
    return (card); //krijg 1 kaart 


}

//function 3 : showing cards in UI, making cards visible
function showCards(hand, target) { //showcards van hand(zowel computer als player)
    let returnString = ""; // per click return string leeggemaakt
    let score = 0;
    hand.forEach((element) => {
        let cardText = element.suit + " " + element.value + " ";
        returnString += cardText;
        score += element.realValue;

    });
    returnString += " score is " + score;
    target.innerHTML = returnString;
}

//function 4 : calculating the score
function calculateScore(hand) {

    let score = 0;
    hand.forEach((element) => {


        score += element.realValue;

    });
    return score;
}
//check if dead first, then check if win in one function
function checkWin(playerScore, cpuScore) {
    if (playerScore > 21) { //player dead
        return false;
    }


    if (cpuScore > 21) { //cpu dead
        return true;
    }

    else if (cpuScore == 21 || cpuScore > playerScore) {      //player loses
        return false;
    }
    else if (cpuScore < 17) {
        return false;
    }
    else if (cpuScore == playerScore)
        return false;
    else {
        return true;                       //player wins
    }

}



