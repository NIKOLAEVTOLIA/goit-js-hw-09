'use strict';

let formSubmitted = false;
const storageKey = "feedback-form-state";
const formSubmittedKey = "form-submitted";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (event) => {
    if ((event.target.tagName === "input" || event.target.tagName === "textarea")) {
        saveToLocalStorage();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

     
    const emailValue = form.querySelector("[name='email']").value;
    const messageValue = form.querySelector("[name='message']").value;

    if (emailValue.trim() !== '' && messageValue.trim() !== '') {
        const formData = {
            email: emailValue,
            message: messageValue
        };
    
        console.log(formData);

        localStorage.setItem(formSubmittedKey, "true");
        localStorage.removeItem(storageKey);
        form.reset();
        
    } else {
        console.log("Будь ласка, заповніть всі поля форми.");
    }
});

const saveToLocalStorage = () => {
    const formData = {
        email: form.querySelector("[name='email']").value.trim(),
        message: form.querySelector("[name='message']").value.trim()
    };
    localStorage.setItem(storageKey, JSON.stringify(formData));
};

const restoreFormLocalStorage = () => {
    const storedData = localStorage.getItem(storageKey);
    const formSubmittedIndicator = localStorage.getItem(formSubmittedKey);

    if (storedData && !formSubmittedIndicator) {
        const formData = JSON.parse(storedData);
            
        form.querySelector("[name='email']").value = formData.email;
        form.querySelector("[name='message']").value = formData.message;
        }
};

restoreFormLocalStorage();

