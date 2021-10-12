let gameresult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);


function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (randomNumber > guessedNumber) {
        gameResult.textContent = "Too Low...Try again!";
        gameResult.style.backgroundColor = '#1e217c';
    } else if (randomNumber < guessedNumber) {
        gameResult.textContent = "Too high...Try again!";
        gameResult.style.backgroundColor = '#1e217c';
    } else if (randomNumber === guessedNumber) {
        gameResult.textContent = "Congratulations....you got it right!";
        gameResult.style.backgroundColor = 'green';

    } else {
        gameResult.textContent = "Invalid Input.....Try again!";
        gameResult.style.backgroundColor = 'red';
    }
}