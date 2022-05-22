import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
//оголошення змінних
const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea');
const email = document.querySelector('input');
// вішаю   на форму сабміт ,щоб ресетнути форму і очистити localStorage:
form.addEventListener('submit', onFormSubmit);
//вішаю на форму слухач на  інпут - зчитувати рядки введені користувачем:
form.addEventListener('input', throttle(onFormInput, 500));
//перевірка на данні у локальному сховищі
checkOnInput();
//Очищаємо форму та локальне сховище, при Submit
function onFormSubmit(evt) {
  if (email.value === '' || message.value === '') {
    return alert('Будь ласка заповніть всі поля!');
  }
  evt.preventDefault();
  evt.target.reset();
  const STORAGE_KEY = 'feedback-form-state';
  //   console.log({ email: email.value, message: message.value });
  localStorage.removeItem(STORAGE_KEY);
}
//Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message.
function onFormInput(evt) {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; //забираємо об'єкт зі сховища, використовуємо метод JSON.parse . Якщо там null, то присвоюємо пустий об'єкт;
  const { name, value } = evt.target; //деструктуризація ; витягуємо name та value з поточного івенту.
  formData[name] = value; //записуємо значення в об'єкт formData;
  //   console.log(JSON.stringify(formData)); // перевірка об'єкту в консолі перед записом в  локал сторейдж
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); //записуємо данні в локал сторейдж
}

function checkOnInput() {
  const formData = STORAGE_KEY; //копіюємо  локал сторейдж
  const savedMessage = JSON.parse(localStorage.getItem(formData)); //розпарсимо копію (посилання) об'єкта з локал сторейдж
  //якщо об'єкт присутній, то:
  if (savedMessage) {
    email.value = savedMessage.email || '';
    message.value = savedMessage.message || '';
  }
}
