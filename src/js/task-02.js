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

// console.log(ingridientsListRef);

// const ingredientsListRef = document.querySelector('#ingredients')

// const createItem = (text) => {
//   const ingredientItemRef = document.createElement('li')
//   ingredientItemRef.textContent = text;
//   ingredientItemRef.classList.add('item');
//   return ingredientItemRef;
// }

// const insertItems = (array) => {
//   ingredientsListRef.append(...array.map((element) => createItem(element)))
// }

// insertItems(ingredients);
