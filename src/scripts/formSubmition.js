const form = document.querySelector('.form');
const formInputName = document.querySelector('.form__input-name');
const formInputEmail = document.querySelector('.form__input-email');
const formNotification = document.querySelector('.form__notification');

form.addEventListener('submit', onFormSubmit);

export function onFormSubmit(event) {
  const {
    elements: { name, email },
  } = event.currentTarget;

  if (name.value === '' || email.value === '') {
    formNotification.classList.remove('is-hidden');
    event.preventDefault();
    return;
  }
}

formInputName.addEventListener('change', onInputChange);
formInputEmail.addEventListener('change', onInputChange);

export function onInputChange() {
  if (formInputName.value != '' && formInputEmail.value != '') {
    formNotification.classList.add('is-hidden');
  }
}
