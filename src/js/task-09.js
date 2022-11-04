const refs = {
buttonRef: document.querySelector('.change-color'),
spanRef: document.querySelector('.color'), 
bodyRef: document.body,
};


const onButtonClick = (event) => {
  refs.bodyRef.style.backgroundColor = getRandomHexColor(); 
  refs.spanRef.textContent = refs.bodyRef.style.backgroundColor;
};

refs.buttonRef.addEventListener('click', onButtonClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
