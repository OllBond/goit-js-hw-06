const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListRef = document.querySelector('#ingredients');

const elementIngridientsRef = ingredients.map(ingredient => {

  const itemRef = document.createElement('li');
itemRef.textContent = ingredient;
itemRef.classList.add('item');
return itemRef;

});

// console.log(elementIngridientsRef);
ingridientsListRef.append(...elementIngridientsRef);


// for(const ingredient of ingredients) { 
// const itemRef = document.createElement('li');
// itemRef.textContent = ingredient;
// itemRef.classList.add('item');
// ingridientsListRef.append(itemRef);
// }



