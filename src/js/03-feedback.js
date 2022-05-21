
import throttle from "lodash.throttle";
// Відстежуй на формі подію input, і щоразу записуй у локальне
//  сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
};

refs.email.addEventListener('input', throttle(onEmail,500));
refs.message.addEventListener('input', throttle(onTextAreaInput, 500));

populateOnTextArea()

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log("Send Form");
   
    localStorage.removeItem(STORAGE_KEY);
     
};

function onTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

function populateOnTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.message.value = savedMessage;
    }
}

function onEmail() {
    
}
