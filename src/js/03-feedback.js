import throttle from "lodash.throttle";


refs.form.addEventListener("submit", onFormSubmit);
refs.input.addEventListener("input", onInput);
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


// refs.form.addEventListener("input", e => {
// })
// refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

// function onTextareaInput(evt) {
//     // const message = evt.target.value;
//     return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };

// function onFormSubmit(evt){
//     evt.preventDefault();

//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     console.log(formData);
// };

