const inputRef = document.querySelector("#validation-input");

const onvalidation = () => {
inputRef.classList.remove('valid', 'invalid');

let classRef = 'invalid'
if (inputRef.value.length === Number(inputRef.dataset.length)) {
  classRef = 'valid';
}

inputRef.classList.add(classRef);

  }
  
  inputRef.addEventListener("blur", onvalidation);
