import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";
const formData = {};
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
    
};


populateTextarea();
refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

refs.form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(JSON.stringify(formData));
});


function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY,message);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    console.log(STORAGE_KEY);
    // newData = JSON.parse(savedMessage);
    // if (savedMessage) {
    //     formKeys = Object.keys(newData);
    //     formKeys.map(element => {
    //         document.querySelector(`[name='${element}']`).value = newData[element]
    //     })
    // }
};



