
const formElement = document.querySelector('form.login-form');

function onSubmitForm(e) {
	e.preventDefault();

	const formElements = e.currentTarget.elements;
	if (!formElements.email.value || !formElements.password.value){
		alert('Bсі поля повинні бути заповнені');
	} else {
		const dataFormInput = {
			mail: formElements.email.value,
			password: formElements.password.value,
		};
		console.log(dataFormInput);
		formElement.reset();
	}
}

formElement.addEventListener('submit', onSubmitForm);