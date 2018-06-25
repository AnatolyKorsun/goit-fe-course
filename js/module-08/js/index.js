"use strict";

const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  },
  {
    preview: "img/preview-7.jpeg",
    fullview: "img/fullview-7.jpeg",
    alt: "alt text 7"
  },
  {
    preview: "img/preview-8.jpeg",
    fullview: "img/fullview-8.jpeg",
    alt: "alt text 8"
  },
  {
    preview: "img/preview-9.jpeg",
    fullview: "img/fullview-9.jpeg",
    alt: "alt text 9"
  },
];

function createFullviewImage(dataFullview) {
  return `
      <div class="fullview">
      <img src="${dataFullview}" alt="alt text 1">
      </div>;`;
};

function createCard(galleryItems) {
  return `<li>
    <img src=${galleryItems.preview} data-fullview=${
    galleryItems.fullview
    } alt="${galleryItems.alt}">
    </li>;
    `;
};

function createGallery(galleryItems) {
  const result =
    `<ul class="preview js-preview">` +
    galleryItems.reduce((acc, obj) => acc + createCard(obj), "") +
    `</ul>;`;
  return result;
};

let dataFullview = galleryItems[0].fullview

function create() {
  const list = document.querySelector(".js-image-gallery");
  list.innerHTML = createFullviewImage(dataFullview) + createGallery(galleryItems);

  const gallery = document.querySelector(".preview");
  gallery.addEventListener("click", onGalleryClick);
};

function onGalleryClick(event) {
  const target = event.target;
  const nodeName = target.nodeName;
  if (nodeName !== 'IMG') return;
  dataFullview = target.getAttribute('data-fullview');
  create()
}
create()