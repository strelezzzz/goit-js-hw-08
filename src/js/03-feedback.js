
// Відстежуй на формі подію input, і щоразу записуй у локальне
//  сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    email: document.querySelector(".feedback-form input"),
    massage: document.querySelector(".feedback-form textarea"),
};

refs.email.addEventListener('submit', onEmailInput);
refs.massage.addEventListener('input', onTextAreaInput);




