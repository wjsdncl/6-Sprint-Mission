const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(
    emailInput.value.trim()
);
const isValidName = nameInput.value.trim().length > 2;
const isValidPassword = passwordInput.value.trim().length >= 8;
const isPasswordMatch = passwordInput.value === passwordConfirmInput.value;
