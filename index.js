const inquirer = require("inquirer");
const Word = require("./game/word");

const dcWordBank = [
    "Batman",
    "Superman",
    "Wonder Woman",
    "Flash",
    "Green Lantern",
    "Martian Manhunter",
    "Cyborg",
    "Hawkgirl",
    "Starfire",
    "Green Arrow",
    "Shazam",
    "Doctor Fate"
];

let guesses = 10;
let currentWord = "";

game();

function game() {
    fullySolved();

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a Letter!",
                name: "guessedLetter"
            }
        ])
        .then(function (res) {
            guessCounter(res.guessedLetter)
            game();
        });
};

function fullySolved() {
    if (currentWord === "" || currentWord.solved) {
        resetBoard();
    }
};


function resetBoard() {
    guesses = 10;
    currentWord = new Word(dcWordBank[Math.floor(Math.random() * dcWordBank.length)])
    currentWord.generateLetterArray();
    console.log("Your next word is:\n")
    console.log(`\n${currentWord.returnWordasString()}\n`)
};

function guessCounter(guess) {
    const wordBefore = currentWord.returnWordasString();
    currentWord.massLetterCheck(guess);
    currentWord.solvedCheck();
    if (wordBefore === currentWord.returnWordasString()) {
        guesses--;
        console.log(`\nINCORRECT!!! Remaining Guesses ${guesses}`)
        console.log(`\n${currentWord.returnWordasString()}\n`)
    } else {
        console.log(`\nCORRECT!!!`)
        console.log(`\n${currentWord.returnWordasString()}\n`)
    }

}