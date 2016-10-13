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

exports.selectedLetters = lettersGuessed;

var guessesLeft = currentWord.length + 6;

var loop = 0;

//for checking - show current word
console.log(currentWord);

//print some intro text for user
console.log("");
console.log("Welcome to Hangman! The theme for this game is 'flowers.'");
console.log("");

var userLetters = function(loop) {

	var hangWord = checkLetter();

	if (hangWord.indexOf("_") < 0) {
		console.log("You win!");
	} 
	else if (loop === guessesLeft) {
		console.log("Sorry, you lose. Your man is hanged!");
	}
	else {

		if (loop < guessesLeft) {
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
				// else, if the letter has already been chosen, tell them and don't add to letters chosen
				else if (lettersGuessed.indexOf(guess.letter) > -1) {
					console.log("");
					console.log("You already tried that letter! Please choose a different letter.");
				}
				//otherwise, add the letter to letters guessed
				else {
					lettersGuessed.push(guess.letter);
					loop++;
					//run functions to check letter and display word
					//checkLetter();

				}
				console.log("");
				console.log("Letters guessed: " + lettersGuessed);
				console.log("");

				userLetters(loop);
			//end of then function	
			});
		//end of if loop statment
		}
	}
//end of userletters function
}


/*function HangmanWord(word, letters) {
	this.word = word;
	this.letters = letters
}

var gameWord = new HangmanWord(currentWord, lettersGuessed);*/

function checkLetter() {
	
	var hangWord = "";

	for (var i = 0; i < currentWord.length; i++) {
		var currentWordLetter = currentWord[i];

		if (lettersGuessed.indexOf(currentWordLetter) > -1) {
			hangWord = hangWord + " " + currentWordLetter;
		}
		else {
			hangWord = hangWord + " _ ";
		}
	}
	console.log("Your word: " + hangWord);
	console.log("");
	return hangWord;
}


userLetters(loop);