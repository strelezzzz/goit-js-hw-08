
// Відстежуй на формі подію input, і щоразу записуй у локальне
//  сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
};

refs.email.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', onTextAreaInput);


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("Send Form");
    evt.currentTarget.reset;
    localStorage.removeItem(STORAGE_KEY);
};

function onTextAreaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, message);
};

function populateOnTextArea(evt) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}


