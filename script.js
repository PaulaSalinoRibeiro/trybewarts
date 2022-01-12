const email = document.querySelector('[name=email]');
const password = document.querySelector('[name=password]');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', checkLogin);

window.onload = function () {
  btnSubmit.disabled = true;
  function checkBoxVerifired() {
    if (checkBox.checked === true) {
      btnSubmit.disabled = false;
    }
  }
  checkBox.addEventListener('click', checkBoxVerifired);
};
