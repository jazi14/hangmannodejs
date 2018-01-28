// Get a random word
var randomWord = require("random-word");

// Create a variable to hold a random word
var targetWord = randomWord();

// Create an empty string to hold the dashes displayed to a user
var userDisplay = "";

// Use an for loop to create a second string made out of the dashes of the first.
for (var i = 0; i < targetWord.length; i++) {
	a = "-"
	userDisplay = userDisplay.concat(a);
}

// Export the variables for use in other files
module.exports.userDisplay = userDisplay;
module.exports.targetWord = targetWord;
