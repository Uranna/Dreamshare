import './main.scss';

const form = document.querySelector('.send-info');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  if (formData.get('interests').length == 0) {
    form.querySelector('.send-info__input').classList.add('send-info__input--error');
  }

  console.log('Вы ввели:', formData.get('interests'));
  form.reset()
})