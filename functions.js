function getDeck() {
    let suits = ["spades", "diamonds", "clubs", "hearts"];   // for array deck
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // for array deck
    let deck = new Array();
    let realValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];


    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { value: values[x], suit: suits[i], realValue: realValues[x] };
            deck.push(card);


        }
    }

    return deck;


}


function drawCard() {
    let rand = Math.floor(Math.random() * superDeck.length);
    let card = superDeck[rand];
    superDeck.splice(rand, 1); //kaart verwijderd
    return (card);


}

function showCards(deck, target) {
    let returnString = ""; // per click return string leeggemaakt
    let score = 0;
    deck.forEach((element) => {
        let cardText = element.suit + " " + element.value + " ";
        returnString += cardText;
        score += element.realValue;

    });
    returnString += " score is " + score;
    target.innerHTML = returnString;
}

function calculateScore(deck) {

    let score = 0;
    deck.forEach((element) => {


        score += element.realValue;

    });
    return score;
}
