let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const answer = document.querySelector('.answer');
const maxTries = 3;
let resetButton;
guessField.focus();

answer.textContent = randomNumber;
let guessCount = 0;

function checkNumber() {
    guess = Number(guessField.value);

    if (isNaN(guess)) {
        lastResult.textContent = 'Wrong';
        lowOrHi.textContent = "Don't be naughty! Please enter a number";
    } else {

        guessCount += 1;

        if (guessCount === 1) {
            guesses.textContent = 'Previous Guesses :';
        }
        guesses.textContent += ' ' + guess;

        if (guess === randomNumber) {
            lastResult.textContent = 'Congratulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            gameOver();
        } else if (guessCount === maxTries) {
            lastResult.textContent = '!!!GAME OVER!!!';
            lastResult.style.backgroundColor = 'red';
            lowOrHi.textContent = '';
            gameOver();
        } else if (guess < randomNumber) {
            lastResult.textContent = 'Wrong';
            lowOrHi.textContent = 'Last guess was too low!';
            lastResult.style.backgroundColor = 'red';
        } else if (guess > randomNumber) {
            lastResult.textContent = 'Wrong';
            lowOrHi.textContent = 'Last guess was too high!';
            lastResult.style.backgroundColor = 'red';
        }
    }
    guessField.value = '';
    guessField.focus();
}

function resetGame() {
    guessCount = 0;
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    guessSubmit.disabled = false;
    guessField.disabled = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    answer.textContent = randomNumber;
    document.body.removeChild(resetButton)
}

function gameOver() {
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

guessSubmit.addEventListener('click', checkNumber)