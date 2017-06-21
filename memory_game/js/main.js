console.log("Up and running!");

// cards on table
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

// user first flip
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push('cardOne');
console.log("User flipped " + cardOne);

cardsInPlay.push('cardTwo');
console.log("User flipped " + cardTwo);

// if two cards are selected,
if (cardsInPlay.length === 2) {
// if they match,
	if (cardsInPlay[1] === cardsInPlay[1]) {
		alert("You Found A Match!");
	} else {
		alert("Sorry, Try Again.");
	}
}