const divRef = document.querySelector('#controls');
const divBoxesREf = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
inputRef.value;
const buttonCreateREf = document.querySelector('[data-create]');
const buttonDestroyREf = document.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonCreateREf.addEventListener('click', onClick);

function onClick() {
  const amount = inputRef.valueAsNumber;
  if (!amount) return;

  const markup = createBoxes(amount);
  addMarkup(markup);
}

function createBoxes(amount) {
  const markup = [];

  let divNumber = 30;

  for (let i = 0; i < amount; i += 1) {
    const divCreateNewRef = `<div class="item" style="height: ${divNumber}px; width:${divNumber}px;
    background: ${getRandomHexColor()}"></div>`;
    markup.push(divCreateNewRef);
    divNumber += 10;
  }
  return markup.join('');
}
function addMarkup(markup = '') {
  divBoxesREf.innerHTML = markup;
}
buttonDestroyREf.addEventListener('click', () => {
  addMarkup();
  inputRef.value = '';
});

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
