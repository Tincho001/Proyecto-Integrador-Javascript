const loginLink = document.getElementById('login-link');
const loginModal = document.querySelector('.login-modal');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const userInfo = document.getElementById('user-info');
const errorMessage = document.getElementById('error-message');

function saveDataToLocalStorage(username) {
  localStorage.setItem('username', username);
}

function loadDataFromLocalStorage() {
  const username = localStorage.getItem('username');
  if (username) {
    const usernameWithParentheses = `(${username})`;
    userInfo.innerText = usernameWithParentheses;
    userInfo.style.display = 'block';
  }
}

function displayErrorMessage(message) {
  errorMessage.innerText = message;
  errorMessage.style.display = 'block';
}

function hideErrorMessage() {
  errorMessage.innerText = '';
  errorMessage.style.display = 'none';
}

function isValidUsername(username) {
  const regex = /^[a-zA-Z]{7}$/;
  return regex.test(username);
}

function isValidPassword(password) {
  const regex = /^[a-zA-Z0-9]{7}$/;
  return regex.test(password);
}

usernameInput.addEventListener('input', () => {
  if (usernameInput.value.length > 7) {
    usernameInput.value = usernameInput.value.slice(0, 7);
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length > 7) {
    passwordInput.value = passwordInput.value.slice(0, 7);
  }
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginModal.style.display = 'block';
});

loginModal.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (!isValidUsername(username)) {
    displayErrorMessage('Su nombre de usuario debe contener 7 letras solamente.');
  } else if (!isValidPassword(password)) {
    displayErrorMessage('Su password debe contener 7 letras o numeros solamente.');
  } else {
    hideErrorMessage();
    saveDataToLocalStorage(username);
    const usernameWithParentheses = `(${username})`;
    userInfo.innerText = usernameWithParentheses;
    userInfo.style.display = 'block';
    loginModal.style.display = 'none';
  }
});

loadDataFromLocalStorage();

