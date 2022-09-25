// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const galleryMarkup = createImageGalleryMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);

imageContainer.addEventListener('click', onImageContainerClick);

function createImageGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div  class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img 
        class ="gallery__image"
        src ="${preview}"
        // data-source="${original}"
        alt ="${description}"/>
</a></div>`;
    })

    .join('');
}

function onImageContainerClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
