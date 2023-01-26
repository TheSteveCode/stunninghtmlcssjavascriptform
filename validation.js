const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = element => {
    
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
     errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    
}

const isValidEmail = email => {
    
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
}

const validateInputs = () => {
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'username required');
    } else {
        setSuccess(username);
    }
    
    if(emailValue === '') {
        setError(email, 'email required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'write a valid email');
    } else {
        setSuccess(email);
    }
    
    if(passwordValue === '') {
        setError(password, 'password required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'More than 8 characters');
    } else {
        setSuccess(password);
    }
    
    if(password2Value === '') {
        setError(password2, 'please, confirm password');
    } else if (password2Value !== passwordValue) {
        setError(password2, 'don\'t match');
    } else {
        setSuccess(password2);
    }
    
};


