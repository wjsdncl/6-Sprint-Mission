import { validateEmail, validatePassword } from "/js/utils/validator.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("psw");
const submitButton = document.getElementById("btn");

function validateInputs() {
    const isValidEmail = validateEmail(emailInput.value);
    const isValidPassword = validatePassword(passwordInput.value);

    submitButton.disabled = !(isValidEmail && isValidPassword);
}

// 입력값이 변경될 때마다 검사
emailInput.addEventListener("input", validateInputs);
passwordInput.addEventListener("input", validateInputs);
