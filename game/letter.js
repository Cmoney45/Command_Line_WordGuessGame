// Creates constructor for the letter
function Letter(input) {
    this.guessedOrNot = false;
    this.character = input.toLowerCase();

};


// Adds a check to see if the letter has been guessed or not. 
Letter.prototype.showLetterCheck = function () {
    if (this.guessedOrNot || this.character === " " || this.character === "-") {
        if (this.character === " " || this.character === "-") {
            this.letterGuessed(this.character);
        };
        return this.character;
    } else {
        return "_"
    };
};

Letter.prototype.letterGuessed = function (guess) {

    if (guess.toLowerCase() === this.character) {
        this.guessedOrNot = true;
    };

};


module.exports = Letter;