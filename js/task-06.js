const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlur);

function onBlur(event) {
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);

    input.value.length === inputLength ? input.classList.add("valid") : input.classList.add("invalid");

    // if (input.value.length === inputLength) {
    //   input.classList.remove("invalid");
    //   input.classList.add("valid");
      
    // } 
    // else {
    //   input.classList.remove("valid");
    //   input.classList.add("invalid");
    // }
  }

