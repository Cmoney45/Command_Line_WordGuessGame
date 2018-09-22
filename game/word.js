const Letter = require(`./letter`);

function Word(wordToGuess) {
    this.actualWord = wordToGuess;
    this.letterArray = [];
    this.solved = false;

};

Word.prototype.generateLetterArray = function () {
    for (let i in this.actualWord) {
        let newletter = new Letter(this.actualWord[i]);
        this.letterArray.push(newletter);
    };
};

Word.prototype.returnWordasString = function () {
    let wordShown = [];

    for (let i in this.letterArray) {
        wordShown.push(this.letterArray[i].showLetterCheck());
    }

    return wordShown.join(" ");
};

Word.prototype.massLetterCheck = function (userGuess) {
    for (let i in this.letterArray) {
        this.letterArray[i].letterGuessed(userGuess)
    }
};

Word.prototype.solvedCheck = function () {
    let falsecount = 0;

    for (let i in this.letterArray) {
        if (this.letterArray[i].guessedOrNot === false) {
            falsecount++;
        }
    };

    if (falsecount === 0) {
        this.solved = true;
    };
};

module.exports = Word;