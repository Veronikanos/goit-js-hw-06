const categories = document.querySelector('#categories');
const items = categories.children;

console.log(`Number of categories: ${items.length}`);

for (let i of items){
	const header = i.firstElementChild;
	console.log(`Category: ${header.textContent} \nElement: ${header.nextElementSibling.children.length}`);
}