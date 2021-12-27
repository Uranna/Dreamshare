import './main.scss';

function addValidateInput() {
  form.querySelector('.send-info__input').classList.add('send-info__input--error');
  document.querySelector('.send-info__bg').classList.add('send-info__bg--active');
}

function removeValidateInput() {
  form.querySelector('.send-info__input').classList.remove('send-info__input--error');
  document.querySelector('.send-info__bg').classList.remove('send-info__bg--active');
}

const form = document.querySelector('.send-info');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  if (formData.get('interests').length == 0) {
    addValidateInput()
  }
  else {
    console.log('Вы ввели:', formData.get('interests'));
    form.reset()
  }
})

form.querySelector('.send-info__input').addEventListener('click', () => {
  if (form.querySelector('.send-info__input').classList.contains('send-info__input--error')) {
    removeValidateInput();
  }
})

document.querySelector('.send-info__bg').addEventListener('click', removeValidateInput)