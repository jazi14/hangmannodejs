// Get the inquirer node, word file
var inquirer = require("inquirer");
var Word = require("./word.js");
// Create variables for use in the game
var letterInput = ""
var counter = 10 
var usedLetters = [];
// get variables from word.js
var userDisplay = Word.userDisplay
var targetWord = Word.targetWord

// constructor function used to create guess
function UserGuess(guess) {
    this.guess = guess;
    letterInput = this.guess;
}
// creates the printInfo method and applies it to all guesses 
UserGuess.prototype.printInfo = function() {
  console.log("Your guess: " + this.guess);
};
// runs inquirer and asks the user to guess a letter which is 
// stored within the variable guesses inside of the .then statement.
function prompt(){
  inquirer.prompt([
    {
      name: "guess",
      message: "What letter is your guess?"
    }
  ]).then(function(guesses) {
    // initializes the variable newGuess to be a UserGuess which will take
    // in all of the user's answers to the questions above
    var newGuess = new UserGuess(guesses.guess);
    // printInfo method is run to show that the newGuess object was successfully created and filled
    newGuess.printInfo();
    // Check to see if the user typed in just one character
    if (letterInput.length === 1) {
      // Adds the guess to an array to show the user what he guessed
      usedLetters.push(letterInput)
      // Run the check letter function
      checkLetter(); 
    }else{
      console.log("Please just type in one letter you haven't already guessed")
      console.log(usedLetters)
      prompt();
    }
 
  });
};
// Check to see if the letter is in the targetWord, and if so to congratulate the user
function checkLetter(){
  if (targetWord.includes(letterInput) && counter > 0) {
    console.log("You got one right!")
    // Changes the userDisplay variable to show the letter the user typed in
    for (var i = 0; i < targetWord.length; i++) {
      if(targetWord.charAt(i) === letterInput){
        userDisplay = userDisplay.split("")
        userDisplay[i] = letterInput
        userDisplay = userDisplay.join("");
        console.log(userDisplay)
        // Creates the win condition if the userDisplay matches the targetWord
          if(userDisplay === targetWord){
            console.log("You win!  I'm impressed!");
        }else{
          prompt();
        }
      };
    };
    // If the counter gets too low the end the game
  }else if(counter === 1){
    console.log("You lose the game.")
  }
  // If they still have changes left mark the counter down one, notify the user and rerun the prompt function
  else{
    console.log("You got one wrong")
    counter--
    console.log("You have " + counter + " chances left.")
    console.log("You've already guessed " + usedLetters)
    console.log(userDisplay)
    prompt();
  }
}
// Send the prompt function to CLI.js so the user only needs to run the one file
module.exports.prompt = prompt;