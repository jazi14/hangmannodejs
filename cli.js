// Take in information from letter and word.js
var Word = require("./word.js");
var Letter = require("./letter.js");


// Get the inquirer node
var inquirer = require("inquirer");


// Create a function to ask the user if they want to start the game
function startGame(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play Hangman?  It's a challenge!",
            choices: ["Yes", "Maybe Later"],
            name: "answer"
        }
    ]).then(function(inquirerResponse) {
        if (inquirerResponse.answer === "Yes") {
            console.log("Guess a letter")
            console.log(Word.userDisplay)
            // Start the prompt function from the letter.js file which runs all the other functions
            Letter.prompt();


        }else{
            console.log("Ok, maybe later")
        }
    });
}
// Start the game as soon as this file runs
startGame();