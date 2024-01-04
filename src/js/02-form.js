'use strict';

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (event) => {
    if ((event.target.tagName === "input" || event.target.tagName === "textarea")) {
        saveToLocalStorage();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        email: form.querySelector("[name='email']").value,
        message: form.querySelector("[name='message']").value
    };

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    form.reset();
});

const saveToLocalStorage = () => {
        const formData = {
            email: form.querySelector("[name='email']").value,
            message: form.querySelector("[name='message']").value
        };
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const restoreFormLocalStorage = () => {
        const storedData = localStorage.getItem("feedback-form-state");
        if (storedData) {
            const formData = JSON.parse(storedData);
            form.querySelector("[name='email']").value = formData.email;
            form.querySelector("[name='message']").value = formData.message;
        }
};

restoreFormLocalStorage();

