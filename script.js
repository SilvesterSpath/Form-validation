const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('submit');
const inputs = [username, email, password, password2];

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired(inputs);
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
  isValid(email);
  checkMatch(password, password2);
});

// Check password match
function checkMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords doesn't match");
  } else {
    showSuccess(input2);
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length === 0) {
    return;
  }
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} character!`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} character!`
    );
  } else {
    showSuccess(input);
  }
}

// Check email valid
function isValid(email) {
  if (!validateEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
}

// Check required fields
function checkRequired(inputs) {
  inputs.forEach((i) => {
    if (i.value.trim() === '') {
      console.log(i.id);
      showError(i, `${getFieldName(i)} is required`);
    } else {
      showSuccess(i);
    }
  });
}

// Get fieldname with uppercase first char
function getFieldName(input) {
  const fieldName = input.id;
  const nameCapitalized =
    fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  return nameCapitalized;
}

getFieldName(username);

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
