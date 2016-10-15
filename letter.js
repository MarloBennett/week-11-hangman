// return the current word letter if it has been guessed, or return a line
var characterToDisplay = function(lettersGuessed, currentWordLetter) {
	
	//check if letters guessed are part of the current word
	if (lettersGuessed.indexOf(currentWordLetter) > -1) {
			//if so, return the letter
			return currentWordLetter;
		}
		else {
			//if not, return an underscore
			return " _ ";
		}
}

//make exportable
exports.characterToDisplay = characterToDisplay;