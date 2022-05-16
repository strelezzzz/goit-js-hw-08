import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImg = createImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImg);

function createImgMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                                class="gallery__image"
                                src="${preview}"
                                alt="${description}"
                            />
                        </a>
                    </div>
                    `;
    })
    .join('');
}
// 2.Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
//  Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

// 3.Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
//  Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

let lightbox = new SimpleLightbox('.gallery__item a ', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.dir(lightbox);
