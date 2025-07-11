let isTextareaValid = true;
let isfullnameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let ispasswordConfirmIdentical = false;
let isBirthdateValid = false;

const textarea = document.getElementById('profile');
const errorMessage = document.getElementById('error-message-profile');
const countingText = document.getElementById('counting-text');

textarea.addEventListener('input', () => {
    if (textarea.value.length > 200) {
        errorMessage.style.display = 'block';
        isTextareaValid = false;
    } else {
        errorMessage.style.display = 'none';
        isTextareaValid = true;
    }

    let numberOfChars = textarea.value.length;
    let numberOfCharsLeft = 200 - numberOfChars;

    countingText.textContent = numberOfCharsLeft < 0
        ? '0 chars left'
        : numberOfCharsLeft + ' chars left';
});

const fullname = document.getElementById('fullname');
const errorMessageFullname = document.getElementById('error-message-fullname');
const errorIconFullname = document.getElementById('error-icon-fullname');
const errorIconFullnameIcon = errorIconFullname.querySelector('img');

fullname.addEventListener('blur', () => {
    if (fullname.value.length < 2) {
        errorMessageFullname.style.display = 'block';
        errorIconFullname.style.display = 'block';
        errorIconFullnameIcon.src = 'icons/x-mark.svg';
        isfullnameValid = false;
    } else {
        errorMessageFullname.style.display = 'none';
        errorIconFullnameIcon.src = 'icons/check.svg';
        isfullnameValid = true;
    }
});

const email = document.getElementById('email');
const errorMessageEmail = document.getElementById('error-message-email');
const errorIconEmail = document.getElementById('error-icon-email');
const errorIconEmailIcon = errorIconEmail.querySelector('img');

email.addEventListener('blur', () => {
    if (!email.checkValidity()) {
        errorMessageEmail.style.display = 'block';
        errorIconEmail.style.display = 'block';
        errorIconEmailIcon.src = 'icons/x-mark.svg';
        isEmailValid = false;
    } else {
        errorMessageEmail.style.display = 'none';
        errorIconEmailIcon.src = 'icons/check.svg';
        isEmailValid = true;
    }
});

const password = document.getElementById('password');
const errorMessagePassword = document.getElementById('error-message-password');
const errorIconPassword = document.getElementById('error-icon-password');
const errorIconPasswordIcon = errorIconPassword.querySelector('img');

password.addEventListener('blur', () => {
    if (password.value.length < 6) {
        errorMessagePassword.style.display = 'block';
        errorIconPassword.style.display = 'block';
        errorIconPasswordIcon.src = 'icons/x-mark.svg';
        isPasswordValid = false;

    } else {
        errorMessagePassword.style.display = 'none';
        errorIconPasswordIcon.src = 'icons/check.svg';
        isPasswordValid = true;
    }
});

const passwordConfirm = document.getElementById('password-confirm');
const errorMessagePasswordConfirm = document.getElementById('error-message-password-confirm');
const errorIconPasswordConfirm = document.getElementById('error-icon-password-confirm');
const errorIconPasswordConfirmIcon = errorIconPasswordConfirm.querySelector('img');

passwordConfirm.addEventListener('blur', () => {
    if (passwordConfirm.value != password.value) {
        errorMessagePasswordConfirm.style.display = 'block';
        errorIconPasswordConfirm.style.display = 'block';
        errorIconPasswordConfirmIcon.src = 'icons/x-mark.svg';
        ispasswordConfirmIdentical = false;

    } else {
        errorMessagePasswordConfirm.style.display = 'none';
        errorIconPasswordConfirmIcon.src = 'icons/check.svg';
        ispasswordConfirmIdentical = true;
    }
});

const birthdate = document.getElementById('birthdate');
const errorMessageBirthdate = document.getElementById('error-message-birthdate');
const errorIconBirthdate = document.getElementById('error-icon-birthdate');
const errorIconBirthdateIcon = errorIconBirthdate.querySelector('img');

birthdate.addEventListener('blur', () => {
    if (!is18OrOlder(birthdate.value)) {
        errorMessageBirthdate.style.display = 'block';
        errorIconBirthdate.style.display = 'block';
        errorIconBirthdateIcon.src = 'icons/x-mark.svg';
        isBirthdateValid = false;
    } else {
        errorMessageBirthdate.style.display = 'none';
        errorIconBirthdateIcon.src = 'icons/check.svg';
        isBirthdateValid = true;
    }
});

function is18OrOlder(birthdateStr) {
    const birthdate = new Date(birthdateStr);
    const today = new Date();

    const age18Date = new Date(birthdate);
    age18Date.setFullYear(age18Date.getFullYear() + 18);

    return today >= age18Date;
}

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();

    textarea.dispatchEvent(new Event('input'));
    fullname.dispatchEvent(new Event('blur'));
    email.dispatchEvent(new Event('blur'));
    password.dispatchEvent(new Event('blur'));
    passwordConfirm.dispatchEvent(new Event('blur'));
    birthdate.dispatchEvent(new Event('blur'));

    if (isTextareaValid
        && isfullnameValid
        && isEmailValid
        && isPasswordValid
        && ispasswordConfirmIdentical
        && isBirthdateValid) {
        window.location.href = 'response.html';
    }
});