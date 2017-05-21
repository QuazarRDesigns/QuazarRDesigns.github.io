function hamburgerMenu() {
	var hamburger = document.querySelector('.hamburger'),
		nav = document.querySelector('.nav');

	function openHamburger() {
		hamburger.style.display = 'none';
		nav.classList.toggle('show-nav');
	}

	hamburger.addEventListener('click', openHamburger);
}

function addFormValidation(theForm) {

	if (theForm === null || theForm.tagName.toUpperCase() !== 'FORM') {
		throw new Error('expected first parameter to addFormValidation to be a FORM.');
	}

	//Disable HTML5 validation.
	theForm.noValidate = true;

	// Declare all form fields nodeList variable.
	var elements = theForm.elements;

	//Iteration variable.
	var i = 0;

	// Assume no errors are present.
	var isError = false;

	//When form elements lose focus.
	for (i = 0; i < elements.length; i += 1) {
		elements[i].addEventListener('blur', blurvalidate);
	}

	function blurvalidate(evt) {
		// If field is not valid flag with an error.
		if (!isFieldValid(evt.target)) {
			isError = true;
		}
	}

	// When form is submitted.
	theForm.addEventListener('submit', validate);

	function validate(evt) {
		// Assume no errors are present.
		isError = false;

		// Loop through all form fields.
		for (i = 0; i < elements.length; i += 1) {
			// If field is not valid flag with an error.
			if (!isFieldValid(elements[i])) {
				isError = true;
			}
		}
		// If error flag present stop form from submitting.
		if (isError) {
			evt.preventDefault();
		}
	}

	//Checks whether field is valid.
	function isFieldValid(field) {
		var errorMessage = "";

		//If the field doesn't need to be validated return true.
		if (!needsToBeValidated(field)) {
			return true;
		}

		//Throws error if field doesn't have a id or length.
		if (field.id.length === 0 && field.name.length === 0) {
			console.error('error: ', field);
			throw new Error('found a field that is missing an id and/or name attribute. name should be there. id is' +
				' required for determining the field\'s error message element.');
		}

		//Declares errorSpan variable.
		var errorSpan = document.querySelector('#' + field.id + '-error');

		//Throws error if field doesn't have a error span in the HTML.
		if (errorSpan === null) {
			console.error('error: ', field);
			throw new Error('could not find the #' + field.id + '-error element. It\'s needed for error messages' +
				' if #' + field.id + ' is ever invalid.');
		}

		//Resets error message.
		errorSpan.classList.remove('danger');
		errorSpan.innerHTML = "";

		//First name length error message.
		if (field.id === 'firstname' && field.value.length < 2) {
			errorMessage = 'Must be 2 or more characters long.';
		}

		//Email error message.
		if (field.type === 'email' && !isEmail(field.value)) {
			errorMessage = 'Must be a valid email address.';
		}

		//Phone number error message
		if (field.id === 'phone' && !isPhoneNum(field.value)) {
			errorMessage = 'Must be a valid phone number.';
		}

		//Make sure number values are between set min and max
		if (field.type === 'number' && field.required && isWithinNumberRange(field)) {
			errorMessage = 'Must enter a number between ' + field.min + ' and ' + field.max + '.';
		}

		//if the field is type number and not empty make field required and round the number.
		if (field.type === 'number' && field.value.trim() !== '') {
			//Set field to required
			field.required = true;
			//Force the input to be rounded up visually.
			field.value = Math.round(Number(field.value));
		}

		if (field.type === 'number' && field.value.trim() === '') {
			field.required = false;
		}

		//Checks whether field is empty.
		if (field.required && field.value.trim() === '') {
			errorMessage = 'This field is required.';
		}

		//If error message isn't empty displays error message.
		if (errorMessage !== '') {
			field.classList.add('invalid');
			errorSpan.classList.add('danger');
			errorSpan.innerHTML = errorMessage;
			return false;
		}

		//If no error massages make field valid.
		field.classList.remove('invalid');
		return true;
	}

	// Checks if field needs to be validated by default.
	function needsToBeValidated(field) {
		//Returns true if the field input type doesn't match the array and visible.
		return (field.offsetWidth > 0 || field.offsetHeight > 0) && ['submit', 'reset', 'button', 'hidden', 'fieldset'].indexOf(field.type) === -1;
	}

	//Checks whether field input is a valid email.
	function isEmail(input) {
		return input.match(/^([a-z0-9_.\-+]+)@([\da-z.\-]+)\.([a-z\.]{2,})$/);
	}

	//Checks whether field input is a valid 6 or more character password.
	function isPhoneNum(input) {
		return input.match(/^((03|04|06|07|09)\d{7})|((021|022|025|027|028|029)\d{6,8})|((0508|0800|0900)\d{5,8})$/);
	}

	function isWithinNumberRange(field) {
		var numberInput = Math.round(Number(field.value));
		return numberInput > Number(field.max) || numberInput < Number(field.min);
	}

	//Declares radio button variables.
	var fakeRadioButtons = document.querySelectorAll('span[id$="-fakeradio"]');

	//Adds onchange event listeners to radio buttons.
	for (i = 0; i < fakeRadioButtons.length; i += 1) {
		fakeRadioButtons[i].addEventListener('click', check);
	}

	function check(evt) {
		evt.target.previousElementSibling.checked = true;
	}
	
	//if transport required, set make the accomodation field to required.
	if (document.querySelector('input#transport').checked) {
		document.querySelector('input#accommodation').required = true;
	}
}

hamburgerMenu();
