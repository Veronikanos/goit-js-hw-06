const inputElement = document.querySelector('input');
const inputLength = +inputElement.getAttribute('data-length');
const inputId = inputElement.getAttribute('id');

function handleInputLength(e){
	if (e.currentTarget.value.length === inputLength) {
		inputElement.classList.contains("invalid") ? inputElement.classList.replace("invalid", "valid") : inputElement.classList.add("valid");
	} 
	else {
		inputElement.classList.contains("valid") ? inputElement.classList.replace("valid", "invalid") : inputElement.classList.add("invalid");
	}
}

inputElement.addEventListener('blur', handleInputLength);