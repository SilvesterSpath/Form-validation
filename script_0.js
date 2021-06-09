const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('submit');
//const formControl = document.querySelectorAll('.form-control');

/* button.addEventListener('click', () => {
  formControl.forEach((i) => {
    i.classList.add('success');
  });
}); */

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (username.value === '') {
    showError(username, 'Username is required!');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required!');
  } else if (!validateEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'Password is required!');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'Confirm password!');
  } else {
    showSuccess(password2);
  }
});

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
