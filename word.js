var mainFile = require("./main.js");
var wordFile2 = require("./game.js");

//gets letters guessed from main file
var userLetters = mainFile.selectedLetters;

//gets current word from game.js file
var currentWord2 = wordFile2.currentChoice;

//var guessesRemaining = currentWord2.length + 6;

console.log("user letters from words.js file " + userLetters);

function HangmanWord() {

}
