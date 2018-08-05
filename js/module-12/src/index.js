import "./style.css";
import "./test.scss";



import articleTmp from "./templates/grid-item.hbs";
import * as storage from "./services/storage";
console.log('storage' , storage);

const article = articleTmp({ URL: "yahoo", text: "qwe" });
console.log(article);

// ============================= storage
// const persistedPhotos = storage.get();
// const fetchedPhotos = [];

// if (persistedPhotos) {
//   hydratePhotosGrid(persistedPhotos);
// }

// function hydratePhotosGrid(photos) {
//   const markup = createGridItems(photos);
//   updatePhotosGrid(markup);
// }
// function updatePhotosGrid(markup) {
//   grid.insertAdjacentHTML("beforeend", markup);
// }
// ===============================
const grid = document.querySelector(".grid");
const form = document.querySelector(".form");
const input = document.querySelector(".input");


const addedUrl = ['qwe','qwe','qwe'];
storage.set(addedUrl);

const persistedUrl = storage.get();
console.log('persistedUrl' ,persistedUrl);

if (persistedUrl) {
  hydrateUrlGrid(persistedUrl);
}

function hydrateUrlGrid(persistedUrl) {
  const markup = createGridItems(persistedUrl);
console.log('markup' ,markup);
  updatePhotosGrid(markup);
}

function updatePhotosGrid(markup) {
  grid.insertAdjacentHTML("beforeend", markup);
}

function createGridItems(items) {
console.log('items', items);
    
      return items.reduce((markup, item) => markup + articleTmp(item), "");
    }
    
   

// ============================================================================

// form.addEventListener("submit", handleFormSumit);
// loadMoreBtn.addEventListener("click", hanelLoadMoreClick);

// ============= Helpers

// function createGridItems(items) {
//   return items.reduce((markup, item) => markup + gridItemTpl(item), "");
// }

// function updatePhotosGrid(markup) {
//   grid.insertAdjacentHTML("beforeend", markup);
// }

// function hanelLoadMoreClick() {
//   incrementCurrentPage();

//   handleFetch({
//     query: currentQuery,
//     count: 9,
//     page: currentPage
//   });
// }

// function toggleSpinner() {
//   return spinner.classList.toggle("visible");
// }

// function showLoadMoreBtn() {
//   if (!loadMoreBtn.classList.contains("visible")) {
//     loadMoreBtn.classList.add("visible");
//   }
// }

// function resetCurrentPage() {
//   currentPage = 1;
// }

// function incrementCurrentPage() {
//   currentPage += 1;
// }

// function scrollToBottom() {
//   scrollTo(0, document.body.scrollHeight);
// }

// function resetPhotosGrid() {
//   grid.innerHTML = "";
// }

// function handleFetch(params) {
//   toggleSpinner();

//   fetchImages(params).then(photos => {
//     fetchedPhotos.push(...photos);
//     storage.set(fetchedPhotos);

//     const markup = createGridItems(photos);
//     updatePhotosGrid(markup);
//     toggleSpinner();
//     scrollToBottom();
//   });
// }

// function handleFormSumit(e) {
//   e.preventDefault();

//   resetCurrentPage();
//   resetPhotosGrid();

//   currentQuery = input.value;

//   handleFetch({
//     query: currentQuery,
//     count: 9,
//     page: currentPage
//   });

//   e.target.reset();
//   showLoadMoreBtn();
// }
