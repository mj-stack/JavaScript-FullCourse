const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.body.addEventListener('keydown', (event) => {
     if (event.key === 'r') {
      playGame('rock');
     } else if (event.key === 'p') {
      playGame('paper');
     } else if (event.key === 's') {
      playGame('scissors');
     } else if (event.key === 'a') {
      autoPlay();
     } else if (event.key === 'Backspace') {
      resetScore();
     }
  }
);

function showResetConfirmation() {
  const resetConfirmation = document.querySelector('.js-reset-confirmation');
  resetConfirmation.innerHTML = `
    <p>Are you sure you want to reset the score?</p>
    <button class="confirmation-button js-confirmation-button-yes">Yes</button>
    <button class="confirmation-button js-confirmation-button-no">No</button>
  `;

  document.querySelector('.js-confirmation-button-yes').addEventListener('click', () => {
    resetScore();
    resetConfirmation.innerHTML = '';
  });
  
  document.querySelector('.js-confirmation-button-no').addEventListener('click', () => {
    resetConfirmation.innerHTML = '';
  });
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScoreElement();
}

document.querySelector('.js-reset-score').addEventListener('click', () => {
  showResetConfirmation();
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove)
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button').innerHTML = 'Stop Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
  }
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}-emoji.png" class="move-icon"> 
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  const scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >=0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}