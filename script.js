const email = document.querySelector('[name=email]');
const password = document.querySelector('[name=password]');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const fieldsForm = document.getElementById('evaluation-form');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', checkLogin);

window.onload = () => {
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

function learn() {
  const material = document.querySelectorAll('.subject:checked'); // Dica de resolução monitoria Summer(David Gonzaga)
  const mat = [];
  for (let i = 0; i < material.length; i += 1) {
    mat.push(material[i].value);
  }
  return mat.join(', ');
}

function checkInputs(event) { // Dica de resolução Diogo Pantaleão
  event.preventDefault();
  const paragph = document.createElement('p');
  paragph.innerText = `Nome: ${fieldsForm['input-name'].value} ${fieldsForm['input-lastname'].value}
                        Email: ${fieldsForm['input-email'].value}
                        Casa: ${fieldsForm.house.value}
                        Família: ${fieldsForm.family.value}
                        Matérias: ${learn()}
                        Avaliação: ${fieldsForm.rate.value}
                        Observações: ${fieldsForm.textarea.value}`;
  fieldsForm.innerHTML = '';
  fieldsForm.appendChild(paragph);
}

btnSubmit.addEventListener('click', checkInputs);
