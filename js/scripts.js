function validateEmail() {
  let value = emailInput.value;

  if (!value) {
    showErrorMessage(emailInput, "Email is a required field.");
    return false;
  }

  if (value.indexOf("@") === -1) {
    showErrorMessage(emailInput, "You must enter a valid email address.");
    return false;
  }

  if (value.indexOf(".") === -1) {
    showErrorMessage(emailInput, "You must enter a valid email address.");
    return false;
  }

  showErrorMessage(emailInput, null);
  return true;
}
let value = emailInput.value;

emailInput.addEventListener("input", validateEmail);
