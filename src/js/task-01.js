const catRef = document.querySelectorAll('.item');
console.log('Number of categories:',catRef.length);

const itemRef = document.querySelectorAll('.item'); 
itemRef.forEach(elem => {
console.log('Category:', elem.firstElementChild.textContent);
console.log('Elements:',elem.lastElementChild.children.length);
});



const itemRef = document.querySelectorAll('.item'); 
itemRef.forEach(elem => {
console.log('Category:', elem.firstElementChild.textContent);
console.log('Elements:',elem.lastElementChild.children.length);
});