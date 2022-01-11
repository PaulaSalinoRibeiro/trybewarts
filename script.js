const email = document.querySelector('[name=email]');
const password = document.querySelector('[name=password]');
const btnLogin = document.getElementById('btn-login');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', checkLogin);
