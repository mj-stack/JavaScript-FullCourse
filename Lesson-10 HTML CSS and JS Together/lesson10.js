const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function toggleButton(buttonName) {
  const gamingButton = document.querySelector(buttonName);
  if (!(gamingButton.classList.contains('is-toggled'))) {
    gamingButton.classList.add('is-toggled');
  } else {
    gamingButton.classList.remove('is-toggled');
  }
}

function checkButton(button) {
  const multipleButtons = document.querySelector(button);

  if (!multipleButtons.classList.contains('is-toggled')) {
    turnOffPreviousButton();
    multipleButtons.classList.add('is-toggled');
  } else {
    multipleButtons.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}