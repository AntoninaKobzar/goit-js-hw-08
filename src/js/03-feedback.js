import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    email: document.querySelector(".feedback-form input"),
};
const formData = {};
const STORAGE_KEY = "feedback-form-state";
const parsedData = localStorage.getItem(STORAGE_KEY, JSON.parse(formData));
// const savedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));

populateMessageOutput();

refs.form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
})
refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
    // const message = evt.target.value;
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt){
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};

