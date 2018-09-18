// Creates constructor for the letter
function Letter(input) {
    this.guessedOrNot = false;
    this.character = input;

};


// Adds a check to see if the letter has been guessed or not. 
Letter.prototype.showLetterCheck = function () {
    if (this.guessedOrNot) {
        return this.character;
    } else {
        return "_"
    };
};

Letter.prototype.letterGuessed = function (guess) {

    if (guess === this.character) {
        this.guessedOrNot = true;
    };

};


module.exports = Letter;