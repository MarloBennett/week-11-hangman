
//require file with display letter vs. underscore function
var getCharacter = require("./letter.js");

var checkLetter = function(lettersGuessed, word) {
	
	var hangWord = "";

	// Iterate over each letter in the word
	for (var i = 0; i < word.length; i++) {
		var currentWordLetter = word[i];

		// use imported function to append either the letter itself (if it was guesssed) or a "_" if it wasn't guessed
		hangWord = hangWord + getCharacter.characterToDisplay(lettersGuessed, currentWordLetter);

	}
	console.log("Your word: " + hangWord);
	console.log("");
	return hangWord;
}

//make exportable
exports.checkLetter = checkLetter;