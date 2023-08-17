'use strict';

let maximum = 20;

let counter = 5;
document.querySelector('.counterscore').textContent = counter;

let secretNumber = Math.floor(Math.random() * maximum) + 1;
console.log(`This is the secret Number: ${secretNumber}`);

document.querySelector('.number').textContent = '?';

document.querySelector('.again').addEventListener('click', function () {
  reloadPage();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //otherwise it retrieves in a string
  console.log(guess, typeof guess);


  if (!guess || guess < 1 || guess > maximum) {
    document.querySelector('.message').textContent =
      'this is not a valid number!🚧';
    --counter;
    document.querySelector('.counterscore').textContent = counter;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'you won!🌈';
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').id = 'hiding';
    setInterval(reloadPage, 2000);
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess < secretNumber
        ? 'number is to low! try higher⬆️'
        : 'number is to high! try lower!⬇️';
    --counter;
    document.querySelector('.counterscore').textContent = counter;
  }

  if (counter < 1) {
    document.querySelector('.message').textContent = 'you loose 🪦';
    document.querySelector('.check').id = 'hiding';
    setInterval(reloadPage, 1500);
  }
});

function reloadPage() {
  location.reload();
}
