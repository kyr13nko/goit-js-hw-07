import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryList.addEventListener("click", onGalleryListClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        (document.innerHTML = `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `)
    )
    .join("");
}

function onGalleryListClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalWindow = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", onPushKeyEscClose),
      onClose: () => window.removeEventListener("keydown", onPushKeyEscClose),
    }
  );

  modalWindow.show();

  function onPushKeyEscClose(event) {
    const ESC_KEY = "Escape";
    if (event.code === ESC_KEY) {
      modalWindow.close();
    }
  }
}
