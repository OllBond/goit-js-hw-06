const divRef = document.querySelector('#controls');
const divBoxesREf = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
inputRef.value;
const buttonCreateREf = document.querySelector('[data-create]'); 
const buttonDestroyREf = document.querySelector('[data-destroy]');


function createBoxes(amount) {

let divNumber = 30;

  for ( let i = 0; i < inputRef.value; i+=1 ) {

    const divCreateNewRef = document.createElement('div');
    divBoxesREf.append(divCreateNewRef);

    divCreateNewRef.style.width = `${divNumber}px`;
    divCreateNewRef.style.height = `${divNumber}px`;
    
    divNumber += 10;
  }  
}
buttonCreateREf.addEventListener('click', createBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
