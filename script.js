const email = document.querySelector('[name=email]');
const password = document.querySelector('[name=password]');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const textArea = document.getElementById('text-area');
const counter = document.getElementById('counter');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', checkLogin);

window.onload = function () {
  // Referência:https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
  btnSubmit.disabled = true;
  function checkBoxVerifired() {
    if (checkBox.checked === true) {
      btnSubmit.disabled = false;
    }
  }
  checkBox.addEventListener('click', checkBoxVerifired);
};

function countCharacts() {
  const characts = textArea.value;
  const count = (500 - characts.length);
  counter.innerText = count;
}

textArea.addEventListener('keyup', countCharacts);

// Requisito 21 > conteúdo dentro da tag form