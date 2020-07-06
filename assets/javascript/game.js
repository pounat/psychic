var letterList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerLetter = null;

var wins = 0;
var loses = 0;

var guessedLetters = [];

var guessesLeft = 12;


var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var updateLetterToGuess  = function() {
    computerLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(computerLetter);
};

var updateGuessedSoFar = function() {
    document.querySelector("#guessesSoFar").innerHTML = guessedLetters.join(', ');
};

var reset = function() {
    guessesLeft = 12;
    guessedLetters = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessedSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
    guessesLeft--;
    updateGuessesLeft();

    var letter = event.key.toLowerCase();
    console.log(letter);

    guessedLetters.push(letter);
    updateGuessedSoFar();

    if (letter === computerLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        alert("Nice! Letter to guess was '" + computerLetter + "'");

        reset();
    }

    if (guessesLeft === 0) {
        loses++;
        document.querySelector("#loses").innerHTML = loses;
        alert("Sorry! The letter to guess was '" + computerLetter + "'");

        reset();
    };
    
};