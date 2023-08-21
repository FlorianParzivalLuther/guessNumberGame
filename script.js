'use strict';

let maximum = 20;

let counter = 5;
document.querySelector('.counterscore').textContent = counter;

let secretNumber = Math.floor(Math.random() * maximum) + 1;
console.log(`This is the secret Number: ${secretNumber}`);

document.querySelector('.number').textContent = '?';


//event listener via button click!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //otherwise it retrieves in a string
  console.log(guess, typeof guess);

  //cleanup code

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  function reloadPage() {
    location.reload();
  }



  document.querySelector('.again').addEventListener('click', function () {
    reloadPage();
  });
  //checking if guess is litteler than 1 or bigger as the maximum
  if (!guess || guess < 1 || guess > maximum) {
    // document.querySelector('.message').textContent =
    //   'this is not a valid number!🚧';
    displayMessage('this is not a valid number!🚧');
    --counter;
    document.querySelector('.counterscore').textContent = counter;
  }
  //if the guess is right!
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'you won!🌈';
    displayMessage('you won!🌈');
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').id = 'hiding';
    
    setInterval(reloadPage, 2000);
  }
  //if the guess is wrong
  else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess < secretNumber
        ? //if the guess is litteler than the secretNumber
          'number is to low! try higher⬆️'
        : //if the guess is bigger than the secretNumber
          'number is to high! try lower!⬇️';
    --counter;
    document.querySelector('.counterscore').textContent = counter;
  }

  //if the counter is litteler than 0 -> game over!
  if (counter < 1) {
    // document.querySelector('.message').textContent = 'you loose 🪦';
    displayMessage('you loose 🪦');
    document.querySelector('.check').id = 'hiding';
    setInterval(reloadPage, 1500);
  }
});
