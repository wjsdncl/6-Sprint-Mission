export function validateEmail(email) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.trim());
}

export function validateNickname(name) {
  return name.trim().length >= 2;
}

export function validatePassword(password) {
  return password.trim().length >= 8;
}

export function validatePasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

export const errorMessages = {
  email: {
    empty: "이메일을 입력해주세요.",
    invalid: "잘못된 이메일 형식입니다.",
  },
  nickname: {
    empty: "닉네임을 입력해주세요.",
    invalid: "닉네임을 2자 이상 입력해주세요.",
  },
  password: {
    empty: "비밀번호를 입력해주세요.",
    invalid: "비밀번호를 8자 이상 입력해주세요.",
    match: "비밀번호가 일치하지 않습니다.",
  },
};

function showErrorMessage(input, message) {
  const errorMessageElement = input.parentNode.querySelector(".error_msg");
  errorMessageElement.innerText = message;
  errorMessageElement.classList.remove("hide");
  input.classList.add("error_line");
}

function hideErrorMessage(input) {
  const errorMessageElement = input.parentNode.querySelector(".error_msg");
  errorMessageElement.classList.add("hide");
  input.classList.remove("error_line");
}

export function validateInput(input, validationFunction, errorMessage) {
  if (input.value === "") {
    showErrorMessage(input, errorMessage.empty);
    return false;
  } else if (!validationFunction(input.value)) {
    showErrorMessage(input, errorMessage.invalid);
    return false;
  } else {
    hideErrorMessage(input);
    return true;
  }
}

export function validatePasswordMatchInput(
  pswInput,
  pswMatchInput,
  errorMessage
) {
  const isPasswordMatch = validatePasswordMatch(
    pswInput.value,
    pswMatchInput.value
  );

  if (!isPasswordMatch) {
    showErrorMessage(pswMatchInput, errorMessage);
  } else {
    hideErrorMessage(pswMatchInput);
  }
}

// 비밀번호 가리기/표시
export function togglePasswordVisibility(input) {
  input.type = input.type === "text" ? "password" : "text";
}
