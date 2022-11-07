const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


inputRef.addEventListener('input', onInputChange);

function onInputChange (event) {

spanRef.textContent = event.currentTarget.value;
console.log(event.currentTarget.value);
if (event.currentTarget.value === '') {
    spanRef.textContent = 'Anonymous';
} 
}

// 2 спосіб
// inputRef.addEventListener('input', onInputChange);

// function onInputChange (event) {

// const value = event.currentTarget.value.trim();
// spanRef.textContent = value ? value : 'Anonymous';

// }