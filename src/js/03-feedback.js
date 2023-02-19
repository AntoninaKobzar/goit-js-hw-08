import throttle from "lodash.throttle";


const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector("feedback-form");
const input = document.querySelector("feedback-form input");
const textarea = document.querySelector("feedback-form textarea");
// const parsedData = localStorage.getItem(STORAGE_KEY, JSON.parse(formData));

const formData = {};
populateForm();
form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onFormSubmit);


function onInput(e) {
    
    formData[e.target.name] = e.currentTarget.value;
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    evt.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))) 
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}
function populateForm() {
    const parsedData = localStorage.getItem(STORAGE_KEY, JSON.parse(formData));
    if (parsedData) {
        formKeys = Object.keys(parsedData);
        return formKeys.map(element => {
            document.querySelector(`[name='${element}']`).value = parsedData[element]
        })
    }
}

    




