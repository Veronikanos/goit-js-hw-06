const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const showValue = document.querySelector('#value');
let counterValue = 0;

const targetButtonClickHandler = (e) => {
    counterValue = +e.target.innerText;
    showValue.innerHTML = +showValue.innerHTML + counterValue;
};

decrementButton.addEventListener('click', targetButtonClickHandler);
incrementButton.addEventListener('click', targetButtonClickHandler);