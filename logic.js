// 1. User guesses a letter.
// 	1a. Need to capture the letter pressed.
// 	1b. Need to display letter pressed in html.
// 2. Computer generates a random letter.
// 	2a. Need to capture the letter pressed.
// 	1b. Need to display letter pressed in html.
// 3. If the letter the user guesses is the same as the letter the computer guesses it's a win.
// 4. If the letter the user guesses isn't the same as the letter the computer guesses, it's a loss.
// 	3/4a. Need to compare user guess to computer guess.
// 	3/4b. Need wins to update in html if win.
// 	3/4c. Need losses to update in html if loss.
// 	3/4d. Need lives to reduce as incorrect guesses are guessed in html. 

// Possible numbers to guess.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Holds numbers that player guesses.
var playerGuess = [];
// Will be a number from the numbers array.
var compGuess = null;
// To track guesses used and guesses left. 
var totGuesses = 4;
var guessesLeft = 4;
// To track wins and losses.
var wins = 0;
var losses = 0;
// Alert message if an invalid key is pressed. 
var invalidKey = ["You have made an invalid selection. Plese select a number 1-9 to play the game."];

// FUNCTIONS TO UPDATE HTML WITH RESULTS ---------------------
// Will display the udpated quantity of guesses remaining in HTML.
var updateGuessesLeft = function() {
	document.querySelector("#guessesRemain").innerHTML = guessesLeft;
};
// Will generate a random number aka computer guess. 
var updateCompGuess = function() {
	this.compGuess = this.letters[Math.floor(Math.random() * this.numbers.length)];
};
// Will display the numbers that the player has guessed so far. 
var updatePlayerGuesses = function() {
	document.querySelector("#numGuessed").innerHTML = playerGuess.join(", ");
};
// Will alert if invalid key is pressed.
var alertInvalidKey = function() {
	document.querySelector("#wrongKeyPressed").innerHTML = alert(invalidKey);
}
// Will restart the game when the lives reach 0.

// GAME LOGIC --------------------

//GENERATE RANDOM NUMBER FUNCTION.
var 



