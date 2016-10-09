var wordChoices = ["bluebonnet", "rose", "tuplip", "daisy", "sunflower", "lily", "petunia", "poppy", "azalea", "camellia", "carnation", "daffodil", "hibiscus", "iris", "lilac", "orchid", "violet"]; 

//chooses the word to be guessed and makes it exportable
exports.currentChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];