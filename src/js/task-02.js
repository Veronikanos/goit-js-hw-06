const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const items = ingredients.map(i => {
	const item = document.createElement('li');
	item.classList.add('item');
	item.textContent = i;
	return item;
});


listIngredients.append(...items);

