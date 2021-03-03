'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let inputNumber = 0;

const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
};

const resetGame = function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  inputNumber = 0;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};

document.querySelector('.guess').value = '';

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('body').addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowDown': //up
      inputNumber--;
      if (inputNumber <= 1) inputNumber = 1;
      document.querySelector('.guess').value = inputNumber;
      break;

    case 'ArrowUp': //down
      inputNumber++;
      if (inputNumber >= 20) inputNumber = 20;
      document.querySelector('.guess').value = inputNumber;
      break;

    case 'Space':
      checkGuess();
      break;

    case 'Escape':
      resetGame();
      break;
  }
});

document.querySelector('.check').addEventListener('click', checkGuess);
