let superDeck = getDeck();
let playerDeck = [];
let playerTarget = document.getElementById("playerTarget");


document.getElementById("draw").addEventListener("click", function () {
    playerDeck.push(drawCard());
    console.log(playerDeck);
    console.log(superDeck);
    let returnString = ""; // per click return string leeggemaakt

    playerDeck.forEach((element) => {
        let cardText = element.suit + " " + element.value + " ";
        returnString += cardText;
    });
    playerTarget.innerHTML = returnString;
    //for each in playerdeck in player target
});
