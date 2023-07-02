import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        (document.innerHTML = `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `)
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionDelay: 250,
});
