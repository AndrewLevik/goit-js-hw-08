// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("a");
  galleryItem.className = "gallery__item";
  galleryItem.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("data-source", element.original);
  galleryImage.alt = element.description;

  galleryItem.append(galleryImage);

  items.push(galleryItem);
});

gallery.append(...items);


let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "outside",
  captionDelay: 250,
  captionsData: "alt",
});