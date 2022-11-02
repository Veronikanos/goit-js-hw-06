function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('button.change-color');
const body = document.body;
const bgColorSpanElement = document.querySelector('span.color');

function onButtonClick(){
	const newColor = getRandomHexColor();
	body.style.backgroundColor = newColor;
	bgColorSpanElement.textContent = newColor;
}

buttonChangeColor.addEventListener('click', onButtonClick);