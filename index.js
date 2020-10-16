// JS variables

const form = document.querySelector('form');
const input = document.querySelector('input');
const submitButton = document.querySelector('button');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');


// capitalize first letter
function capitalizeFirstLetter(input) {
    return `${input.charAt(0).toUpperCase()}${input.slice(1)}`
}



// function fieldRequired
function fieldRequired(inputArray) {

    inputArray.forEach((input) => {
        const formControl = input.parentElement;
        if (input.value === '') {
            formControl.querySelector('small').innerText = `${capitalizeFirstLetter(input.id)} is required`;
            formControl.classList.add('error')
        }

        else {
            formControl.classList.add('success');
        }
    })
}


// checkUsername function
function checkUsername(input) {
    const formControl = input.parentElement;
    if (input.value.length < 3) {
        formControl.querySelector('small').innerText = `${capitalizeFirstLetter(input.id)} must be at least 3 characters`;
        formControl.className = 'form-control error';
    }
    else if (input.value.length > 20) {
        formControl.querySelector('small').innerText = `${capitalizeFirstLetter(input.id)} must be less than 20 characters`;
        formControl.className = 'form-control error';
    }

    else {
        formControl.querySelector('small').innerText = ``;
        formControl.className = 'form-control success';
    }
}


// function validate Email
function validateEmail(emailInput) {
    var re = /\S+@\S+\.\S+/;
    const formControl = emailInput.parentElement;
    console.log(formControl);
    if (re.test(emailInput.value)) {
        formControl.querySelector('small').classList = 'form-control success';
        formControl.querySelector('small').innerText = ``;
    }
    else {
        formControl.className = 'form-control error';
        formControl.querySelector('small').innerText = `${capitalizeFirstLetter(emailInput.id)} is not valid`;
    }
}


// fucntion passwordLengthValidate
function passwordLengthValidate(inputPassword) {
    const formControl = inputPassword.parentElement;
    if (inputPassword.value.length) {
        formControl.className = 'form-control success';
        formControl.querySelector('small').innerText = ``;
    }
    else {
        formControl.querySelector('small').innerText = `Password must be at least 6 character`;
        formControl.className = 'form-control error';
    }

}


// function match passwords
function matchPasswords(inputPassword, inputConfirmPassword) {
    const formControl = inputConfirmPassword.parentElement;
    if ((inputPassword.value === inputConfirmPassword.value) && (inputConfirmPassword.value !== '')) {
        formControl.className = 'form-control success';
        formControl.querySelector('small').innerText = ``;
    }
    else {
        formControl.className = 'form-control error';
        formControl.querySelector('small').innerText = `Passwords do not match`;
    }
}



// Submit event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    fieldRequired([username, email, password, confirmPassword]);
    checkUsername(username);

    validateEmail(email);

    passwordLengthValidate(password);

    matchPasswords(password, confirmPassword);


});