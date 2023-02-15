const signInBtnEl = document.getElementById('sign-in-btn');
const userInfoEl = document.getElementById('user-info');
const userNameEl = document.getElementById('user-name');

const userInfoKey = 'userInfo';

const useLoginFromStorage = localStorage.getItem(userInfoKey);

if (useLoginFromStorage) {
  const userInfo = JSON.parse(useLoginFromStorage);
  console.log('User sign in date', userInfo.date);
  onSignIn(userInfo.login);
}

function onSignIn(login) {
  signInBtnEl.classList.add('hidden');
  userInfoEl.classList.remove('hidden');
  localStorage.setItem(userInfoKey, JSON.stringify({ 
    login,
    date: new Date().toISOString(),
  }))
  userNameEl.innerText = login;
}

function onSignOut() {
  signInBtnEl.classList.remove('hidden');
  userInfoEl.classList.add('hidden');
  localStorage.removeItem(userInfoKey);
  userNameEl.innerText = '';
}

function validateUser(login, password) {
  switch (login) {
    case 'Viktor':
      return password === '1234';
    case 'Admin':
      return password === 'qwerty';
    default:
      return false;
  }
}

document.getElementById('sign-out-btn').onclick = onSignOut;

// Modal
document.getElementById('sign-in-btn').onclick = () => {
  document.getElementById('backdrop').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('backdrop').classList.add('hidden');
}

const backdrop = document.getElementById('backdrop');
backdrop.onclick = (e) => {
  if (e.target === backdrop) {
    closeModal();
  }
}

// Form
document.getElementById('form').onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formValue = Object.fromEntries(formData);
  
  if (validateUser(formValue.login, formValue.password)) {
    onSignIn(formValue.login);
    closeModal();
  } else {
    alert('Wrong credentials!');
  }
}
