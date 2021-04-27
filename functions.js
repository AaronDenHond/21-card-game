function getDeck() {
    let suits = ["spades", "diamonds", "clubs", "hearts"];   // for array deck
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // for array deck
    let deck = new Array();


    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { value: values[x], suit: suits[i] };
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
