const form = document.querySelector('.form');
const formInput = document.querySelectorAll('.input');
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

for (let i = 0; i < formInput.length; i += 1) {
  formInput[i].addEventListener('change', onInputChange);
}

export function onInputChange() {
  if (formInput.value != '') {
    formNotification.classList.add('is-hidden');
  }
}
