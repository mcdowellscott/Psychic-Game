// Define alphabet letters that computer can pick from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set the initial global variables
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
// numberOfGuesses is an array that will hold all the user's guesses in each round
var numberOfGuesses = [];
// userGuess is what the user picks by pressing a key
var userGuess;
// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " remainingGuesses: " + remainingGuesses + " Guesses so far: " + numberOfGuesses + " Computer picked: " + letterToBeGuessed);
var answer = true;
var playagain = true;


// start listening for events
document.onkeyup = function (event) {
	console.log(event);
	// When user presses a key, it records it and saves to userGuess
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	// Add the user's guess to numberOfGuesses array but 
	// only if it wasn't already previously picked by the user
	// also make sure that the character user picks is within
	// the alphabet, and not any non-usable character
	if (numberOfGuesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
		numberOfGuesses[numberOfGuesses.length] = userGuess;
		console.log("# of guessesarray", numberOfGuesses);
		// if it is a new letter then decrease remaining guesses by 1
		remainingGuesses--;
		console.log("# of remainingGuesses", remainingGuesses);
	}
	// Displaying progress to HTML
	var html = "<h1>Wins: " + wins + "</h1>" + "<h1>Losses: " + losses + "</h1>" + "<h1>Guesses Left: " + remainingGuesses + "</h1>" + "<h1>Your guesses so far: " + numberOfGuesses + "</h1>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;
	// if letterToBeGuessed is same as userGuess then record it as a win
	// and then reset remainingGuesses to 9, and empty the numberOfGuesses array
	// also have the computer make a new random pick
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		playagain = confirm("You WON.  Would you like to play again?");
		if (playagain) {
			remainingGuesses = 9;
			numberOfGuesses = [];
			letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
			console.log("Wins: " + wins + " Losses: " + losses + " remainingGuesses: " + remainingGuesses + " Guesses so far: " + numberOfGuesses + " Computer picked: " + letterToBeGuessed);
		} else {
			alert("Thank you for playing!!");
		}
	}


	// if remainingGuesses gets to 0 then record it as a loss
	// and then reset remainingGuesses to 9, and empty the numberOfGuesses array
	// also have the computer make a new random pick
	if (remainingGuesses == 0) {
		losses++;
		console.log("You lost!");
		playagain = confirm("You LOST.  The correct letter was " + letterToBeGuessed + ". Would you like to play again?");
		if (playagain) {
			remainingGuesses = 9;
			numberOfGuesses = [];
			letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
			console.log("Wins: " + wins + " Losses: " + losses + " remainingGuesses: " + remainingGuesses + " Guesses so far: " + numberOfGuesses + " Computer picked: " + letterToBeGuessed);
		} else {
			document.querySelector("#game").innerHTML = "<h1> Thank you for playing</h1>"
		}
	}


}