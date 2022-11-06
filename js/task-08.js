const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();

    const formReference = event.currentTarget.elements;

    const mail = formReference.email.value.trim();
    const password = formReference.password.value.trim();
    console.log(mail, password);
    
    if(mail === '' || password === '') {
        const message = 'Please fill in all the fields';
        alert(message);
    } else {

    const formData = {
        mail, password,
    };
    console.log(formData);
    event.currentTarget.reset();
}    
};
form.addEventListener ('submit', onFormSubmit);
// <--- Formdata для великої форми зібрати дані
//         console.log(FormData);

// function onFormSubmit (event) {
//         event.preventDefault()
    
//         const formData = new FormData(event.currentTarget) 
//         formData.forEach((value, name) => {
//     console.log(value, name);
//         });
// }