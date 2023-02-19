import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector("feedback-form"),
    email: document.querySelector("feedback-form input"),
    textarea:document.querySelector("feedback-form textarea"),
}

refs.form.addEventListener("submit", onFormSubmit);
refs.email.addEventListener("input", onInput);
refs.textarea.addEventListener("input", throttle(onTextarea, 500));

const formData = {};
const STORAGE_KEY = "feedback-form-state";

populateForm();

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onTextarea(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
    evt.preventDefault();
    const savedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
    const parsedData = localStorage.getItem(STORAGE_KEY, JSON.parse(savedData));
    console.log(parsedData);


    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}




