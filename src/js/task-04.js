const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const showValue = document.querySelector('#value');
let counterValue = 0;

const targetButtonClickHandler = (val) => {
    counterValue -= val;
    showValue.innerHTML = counterValue;
};

decrementButton.addEventListener('click', function (){targetButtonClickHandler(1);});
incrementButton.addEventListener('click', function (){targetButtonClickHandler(-1);});