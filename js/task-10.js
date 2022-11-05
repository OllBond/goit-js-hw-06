const divRef = document.querySelector('#controls');
const divBoxesREf = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
inputRef.value;
const buttonCreateREf = document.querySelector('[data-create]'); 
const buttonDestroyREf = document.querySelector('[data-destroy]');

function createBoxes(amount) {

  const divCreateREf = document.createElement('div');

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
