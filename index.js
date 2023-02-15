let user = null;

function validateUser(login, password) {
  switch (login) {
    case 'Viktor':
      return password === '1234';
    default:
      return false;
  }
}

function onSignIn(userLogin) {
  user = {
    login: userLogin,
  };

  document.getElementById('sign-in-btn').classList.add('hidden');

  const userInfoEl = document.getElementById('user-info');
  userInfoEl.classList.remove('hidden');
  document.getElementById('user-name').innerHTML = user.login;
}

function onSignOut() {
  user = null;

  document.getElementById('sign-in-btn').classList.remove('hidden');

  const userInfoEl = document.getElementById('user-info');
  userInfoEl.classList.add('hidden');
  document.getElementById('user-name').innerHTML = '';
}

document.getElementById('sign-out-btn').onclick = onSignOut;

// Form
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

document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formValue = Object.fromEntries(formData);

  if (validateUser(formValue.login, formValue.password)) {
    onSignIn(formValue.login);
    closeModal();
  } else {
    alert('Wrong Login or Password');
  }
}
