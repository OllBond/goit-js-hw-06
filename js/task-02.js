const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListRef = document.querySelector('#ingredients');
for(const ingredient of ingredients) { 
const itemRef = document.createElement('li');
itemRef.textContent = ingredient;
itemRef.classList.add('item');
ingridientsListRef.append(itemRef);
}



