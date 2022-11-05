const decrementBtnRef = document.querySelector('[data-action="decrement"]')
const incrementBtnRef = document.querySelector('[data-action="increment"]')
const valueRef = document.querySelector('#value')

let counterValue = 0

const updateValueUI = () => (valueRef.textContent = counterValue)

const incrementBtnHandler = () => {
  counterValue += 1
  valueRef.textContent = counterValue
}

const decrementBtnHandler = () => {
  counterValue -= 1
  valueRef.textContent = counterValue
}

incrementBtnRef.addEventListener('click', incrementBtnHandler)

decrementBtnRef.addEventListener('click', decrementBtnHandler)



















// const counterValue = 0;

// const buttonRef = document.querySelectorAll('#counter button');
// console.log(buttonRef);

// const counterValueRef = document.querySelector('#value');
// console.log(counterValueRef);

// const handleTargetButtonClick = () => {
//     console.log(buttonRef[0].dataset.action);
//     console.log(buttonRef[1].dataset.action);

//     return counterValueRef;
// };

// buttonRef.addEventListener('click', handleClick);

    // // Отримати посилання на кнопки та на span. 
    // ПОвішати на кнпоки слухачі кліків. 
    // Якщо клік, то додати 1 або відняти 1. 
    // І результат вивести у спан  
    
    // // 
