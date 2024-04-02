import {
    validateEmail,
    validateNickname,
    validatePassword,
    validatePasswordMatch,
} from "/js/utils/validator.js";

const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("psw");
const passwordConfirmInput = document.getElementById("psw_chk");
const submitButton = document.getElementById("btn");

// 입력값이 변경될 때마다 검사
emailInput.addEventListener("input", validateInputs);
nicknameInput.addEventListener("input", validateInputs);
passwordInput.addEventListener("input", validateInputs);
passwordConfirmInput.addEventListener("input", validateInputs);

function validateInputs() {
    const isValidEmail = validateEmail(emailInput.value);
    const isValidNickname = validateNickname(nicknameInput.value);
    const isValidPassword = validatePassword(passwordInput.value);
    const isPasswordMatch = validatePasswordMatch(
        passwordInput.value,
        passwordConfirmInput.value
    );
    submitButton.disabled = !(
        isValidEmail &&
        isValidNickname &&
        isValidPassword &&
        isPasswordMatch
    );
}
