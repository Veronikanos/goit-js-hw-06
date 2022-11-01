const formInputRange = document.querySelector('input#font-size-control');
const formInputText = document.querySelector('span#text');

const handleMouseMoving = (e) => formInputText.style.fontSize = `${e.target.value}px`;

formInputRange.addEventListener('input', handleMouseMoving);