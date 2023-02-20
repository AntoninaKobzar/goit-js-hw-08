import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";
const formData = {};
const refs = {
    form: document.querySelector("feedback-form"),
    textarea: document.querySelector("feedback-form textarea"),
    input: document.querySelector("feedback-form input"),
    
};


refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

refs.form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
});

populateTextarea();

function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY,message);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("send form");
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY,JSON.parse(formData));
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}
   




