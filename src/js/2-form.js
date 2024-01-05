'use strict';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const savedFormData = JSON.parse(localStorage.getItem(storageKey)) || {};
if (savedFormData.email) {
  form.elements.email.value = savedFormData.email;
}
if (savedFormData.message) {
  form.elements.message.value = savedFormData.message;
}

form.addEventListener('input', (event) => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim()
    };
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem(storageKey);
    form.reset();
  } 
});

