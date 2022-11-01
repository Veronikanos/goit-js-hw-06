const inputForm = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');
const showInputName = (e) => {
	console.log(e.currentTarget.value);
	nameOutput.textContent = e.currentTarget.value || "Anonymous";
};

inputForm.addEventListener('input', showInputName);

