const words = ['javascript', 'challenge', 'programming', 'developer', 'algorithm'];
let currentWord = '';
let scrambledWord = '';
let score = 0;

const scrambledWordElement = document.getElementById('scrambled-word');
const userGuessElement = document.getElementById('user-guess');
const submitButton = document.getElementById('submit-guess');
const messageElement = document.getElementById('message');
const scoreElement = document.getElementById('score');

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    scrambledWordElement.textContent = scrambledWord;
    userGuessElement.value = '';
    messageElement.textContent = '';
}

function checkGuess() {
    const userGuess = userGuessElement.value.toLowerCase();
    if (userGuess === currentWord) {
        score++;
        scoreElement.textContent = score;
        messageElement.textContent = 'Correct! Great job!';
        setTimeout(newWord, 1500);
    } else {
        messageElement.textContent = 'Incorrect. Try again!';
    }
}

submitButton.addEventListener('click', checkGuess);
userGuessElement.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

newWord(); // Start the game