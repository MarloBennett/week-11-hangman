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

//store letters guessed and be able to export to words.js
exports.lettersGuessed = "";

//for checking - show current word
console.log(currentWord);

//print some intro text for user
console.log("");
console.log("Welcome to Hangman! The theme for this game is 'flowers.'");
console.log("");

var userLetters = function() {

	inquirer.prompt({
		type: "input",
		name: "letter",
		message: "Enter a letter."
	}).then(function(guess){
		//check if the entry is a letter
/*		if (!(letter.match(/[a-z]/i))) { 
			console.log("Your choice is not a letter.");
		} 
		// else, if the letter has already been chosen, tell them and don't add to letters chosen
		else if (lettersGuessed.indexOf(letter) > -1) {
			console.log("You already tried that letter! Please choose a different letter.");
		}
		//otherwise, add the letter to letters guessed
		else {
			lettersGuessed.push(guess.letter);
		}*/
		lettersGuessed.push(guess.letter);
		console.log(lettersGuessed);
	})
}

userLetters();