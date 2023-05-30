const loginInput = document.querySelector('.trybewarts-login input:nth-child(1)'); // input do usuario
const passwordInput = document.querySelector('.trybewarts-login input:nth-child(2)'); // input da senha
const loginButton = document.querySelector('.trybewarts-login button'); // botão do login

// checa o login

loginButton.addEventListener('click', () => {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    return alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});

function updateButtonState() {
  const checkbox = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');

  if (checkbox.checked) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
  }
}
updateButtonState();

function updateCharacterCount() {
  const textarea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  const maxLength = 500;
  const remainingCharacters = maxLength - textarea.value.length;
  counter.textContent = remainingCharacters;
}
updateCharacterCount();

const form = document.getElementById('evaluation-form');
const formData = document.createElement('div');
formData.id = 'form-data';

function getSelectedSubjects() {
  const selectedSubjects = Array.from(document.querySelectorAll('.subject:checked'))
    .map((subject) => subject.value);
  return selectedSubjects;
}

function buildContent(name, feedback) {
  const formContent = `
    <p>Nome: ${name.firstName} ${name.lastName}</p>
    <p>Email: ${feedback.email}</p>
    <p>Casa: ${feedback.house}</p>
    <p>Família: ${feedback.family}</p>
    <p>Matérias: ${feedback.subjects.join(', ')}</p>
    <p>Avaliação: ${feedback.rate ? feedback.rate.value : 'N/A'}</p>
    <p>Observações: ${feedback.comment || 'N/A'}</p>
  `;
  return formContent;
}

function handleSubmit(event) {
  event.preventDefault();

  const name = {
    firstName: document.getElementById('input-name').value,
    lastName: document.getElementById('input-lastname').value,
  };
  const feedback = {
    email: document.getElementById('input-email').value,
    house: document.getElementById('house').value,
    family: document.querySelector('input[name="family"]:checked').value,
    rate: document.querySelector('input[name="rate"]:checked'),
    comment: document.getElementById('textarea').value,
    subjects: getSelectedSubjects(), // Chamada da função getSelectedSubjects() aqui
  };
  const formContent = buildContent(name, feedback);
  formData.innerHTML = formContent;
  form.style.display = 'none';
  form.insertAdjacentElement('afterend', formData);
}

form.addEventListener('submit', handleSubmit);
