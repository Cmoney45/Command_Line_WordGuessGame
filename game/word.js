const Letter = require(`./letter`);

function Word (wordToGuess) {
    this.actualWord = wordToGuess;
    this.letterArray = [];
    
};

Word.prototype.generateLetterArray = function () {
    for(let i of this.actualWord){
        let newletter = new Letter();
        this.letterArray.push(newletter);
    };
};

Word.prototype.returnWordasString = function () {
    let wordShown = [];

    for(let i of this.letterArray) {
        wordShown.push(this.letterArray[i].showLetterCheck());
    }

    return wordShown;
};

Word.prototype.massLetterCheck = function () {

};

module.exports = Word;