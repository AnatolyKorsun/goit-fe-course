import "./style.css";
import articleTmp from "./templates/grid-item.hbs";
import * as storage from "./services/storage.js";

const grid = document.querySelector(".grid");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = form.querySelector(".button");

const bookmarks = storage.get();

const markup = () => {
  return bookmarks.reduce((acc, element) => acc + articleTmp(element), "");
};

const build = () => {
  grid.insertAdjacentHTML("beforeend", markup());
};

if (bookmarks) {
  build();
}

const contains = () => {
  if (input.value) {
    const contain = bookmarks.find(elem => elem.item === input.value);
    if (!contain) {
      bookmarks.unshift({ item: `${input.value}` });
      storage.set(bookmarks);
      build();
    } else alert("address exists");
  } else alert("enter the address");
};

const addUrl = () => {
  if (input.value) {
    bookmarks.unshift({ item: `${input.value}` });
    markup();
  }
};

const removeBtn = document.querySelectorAll(".remove");

const removeBookmarks = event => {
  if (event.target.tagName === "BUTTON") {
    let searchName = event.target.previousElementSibling.textContent;
    let index = bookmarks.findIndex(el => el.item === searchName);
    event.target.parentNode.remove();
    bookmarks.splice(index, 1);
    storage.set(bookmarks);
  }
};

btn.addEventListener("click", contains);
grid.addEventListener("click", removeBookmarks);
