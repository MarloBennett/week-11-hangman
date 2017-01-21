//require the file that contains the word choices
var wordFile = require("./game.js");
//require file that displays letters or dashes
var displayWord = require("./letter.js");
//require file with code to check guesses vs. currentword
var checkWord = require("./word.js");
//require inquirer npm package
var inquirer = require("inquirer");

//gets word choice from file
var currentWord = wordFile.currentChoice;

//store letters guessed
var lettersGuessed = [];

var guessesLeft = currentWord.length + 6;

var loop = 0;

//for checking - show current word
//console.log(currentWord);

//print some intro text for user
console.log("");
console.log("Welcome to Hangman! The theme for this game is 'flowers.'");
console.log("");

var userLetters = function(loop) {

	//export function from word.js
	var hangWord = checkWord.checkLetter(lettersGuessed, currentWord);

	//check if there are any blanks left in the word
	if (hangWord.indexOf("_") < 0) {
		console.log("You win!");
	} 
	//check if all guessed have been used
	else if (loop === guessesLeft) {
		console.log("Sorry, you lose. Your man is hanged! Your word was " + currentWord + ".");
	}
	else {

		if (loop < guessesLeft) {
			//prompt user to guess a new letter
			inquirer.prompt({
				type: "input",
				name: "letter",
				message: "Enter a letter."
			}).then(function(guess){
				//check if the entry is a letter
				if (!(guess.letter.match(/[a-z]/i))) { 
					console.log("");
					console.log("Your choice is not a letter.");
				} 
				//don't allow more than one letter at a time
				else if (guess.letter.length > 1) {
					console.log("");
					console.log("Please enter only one letter.");
				}
				// else, if the letter has already been guessed, tell them and don't add to letters guessed
				else if (lettersGuessed.indexOf(guess.letter) > -1) {
					console.log("");
					console.log("You already tried that letter! Please choose a different letter.");
				}
				//otherwise, add the letter to letters guessed
				else {
					lettersGuessed.push(guess.letter);
					loop++;
				}
				console.log("");
				console.log("Letters guessed: " + lettersGuessed);
				console.log("");

				//call the function again
				userLetters(loop);
			//end of then function	("end of" notes are useful for me - may not be helpful for grading)
			});
		//end of if loop statment
		}
	}
//end of userletters function
}

userLetters(loop);