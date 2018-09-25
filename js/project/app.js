const grid = document.querySelector(".grid");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const spinner = document.querySelector(".spinner-overlay");
const loadMoreBtn = document.querySelector(".load-more");
const favoriteBtn = document.querySelector(".menu__link");
const favorite = document.querySelector(".favorite");

// ------------------------------------------------------------
const modalContent = document.querySelector(".modal-content");
const modalBackdrop = document.querySelector(".js-modal-backdrop");
const closeModal = document.querySelector(".js-close-modal");
const modalHidden = document.querySelector(".modal-hidden");
const modalImg = modalContent.getElementsByTagName("IMG");
// ------------------------------------------------------------
console.log(modalImg);

let currentPage = 1;
let currentQuery = "";

const API_KEY = "5837779-ac3ba737206b541ae294f1119";

const toggleSpinner = () => spinner.classList.toggle("visible");

const showLoadMoreBtn = () => {
  if (!loadMoreBtn.classList.contains("visible")) {
    loadMoreBtn.classList.add("visible");
  }
};

const resetCurrentPage = () => {
  currentPage = 1;
};

const incrementCurrentPage = () => {
  currentPage += 1;
};

const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);

const fetchImages = ({ query, count, page }) => {
  const url = `https://pixabay.com/api/?image_type=photo&q=${query}&per_page=${count}&page=${page}&key=${API_KEY}`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("error: " + response.statusText);
    })
    .then(data => data.hits)
    .catch(err => console.log(err));
};

const createGridItems = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="grid-item">
      <img src=${item.webformatURL} id="${item.id}" lowsrc="${item.largeImageURL}" alt="photo" >
        <button type="submit" class="favoriteBtn">Favorite</button>
      </div>`,
    ""
  );
};

const updatePhotosGrid = markup => {
  grid.insertAdjacentHTML("beforeend", markup);
  const favoriteBtn = document.querySelectorAll(".favoriteBtn");
};

const resetPhotosGrid = () => {
  grid.innerHTML = "";
};

const handleFetch = params => {
  toggleSpinner();

  fetchImages(params).then(photos => {
    const markup = createGridItems(photos);
    updatePhotosGrid(markup);
    toggleSpinner();
    scrollToBottom();
  });
};

const handleFormSumit = e => {
  loadMoreBtn.style.display = "block";
  grid.style.display = "grid";
  favorite.style.display = "none";

  e.preventDefault();

  resetCurrentPage();
  resetPhotosGrid();

  currentQuery = input.value;

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage
  });

  e.target.reset();
  showLoadMoreBtn();
};

const hanelLoadMoreClick = () => {
  incrementCurrentPage();

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage
  });
};

const setStorage = value => {
  localStorage.setItem("favorite", JSON.stringify(value));
};

const storageGet = () => {
  const data = localStorage.getItem("favorite");
  return data ? JSON.parse(data) : [];
};

let searchId;
let favoriteImgs = storageGet();
// let favoriteImgs = [];

const addToFavorite = event => {
  if (event.target.className === "favoriteBtn") {
    const contain = favoriteImgs.find(
      elem => elem.id === event.target.previousElementSibling.id
    );
    if (!contain) {
      favoriteImgs.unshift({
        src: `${event.target.previousElementSibling.src}`,
        id: `${event.target.previousElementSibling.id}`
      });
    }
    setStorage(favoriteImgs);
  }
};

const openModal = event => {
  if (event.target.tagName === "IMG") {
    modalHidden.classList.remove("modal-hidden");
    if (modalContent.firstElementChild.tagName === "IMG") {
      modalContent.removeChild(modalContent.firstElementChild);
    }

    const articleTmp = event => {
      return `
    <img src=${event.target.lowsrc} id="${event.target.id}" alt="photo">`;
    };

    modalContent.insertAdjacentHTML("afterbegin", articleTmp(event));
  }
};

const articleTmp = items => {
  return `<div class="favorite-item">
  <img src=${items.src} id="${items.id}" alt="photo">
  <button type=" submit " class="removeButton">Remove URL</button>
</div>`;
};

const markup = () => {
  return favoriteImgs.reduce((acc, element) => acc + articleTmp(element), "");
};

const openFavorite = () => {
  loadMoreBtn.style.display = "none";

  grid.style.display = "none";
  favorite.style.display = "grid";
  while (favorite.childNodes.length) {
    favorite.removeChild(favorite.firstChild);
  }
  favorite.insertAdjacentHTML("beforeend", markup());
};

const removeFavorite = event => {
  if (event.target.className === "removeButton") {
    searchId = event.target.previousElementSibling.id;
    console.log(searchId);
    for (let i = favoriteImgs.length - 1; i >= 0; i--) {
      let value = favoriteImgs[i];
      if (value !== null) {
        if (value.id === searchId) {
          favoriteImgs.splice(favoriteImgs.indexOf(value), 1);
          setStorage(favoriteImgs);
          event.target.parentNode.remove();
        }
      }
    }
  }
};
// -------------------------------------------------?

// console.log(modalHidden);

// openModals.addEventListener('click', e => modalHidden.classList.remove('modal-hidden'));

closeModal.addEventListener("click", e =>
  modalHidden.classList.add("modal-hidden")
);

modalBackdrop.addEventListener("click", e => {
  if (modalHidden !== event.target) return;
  modalHidden.classList.add("modal-hidden");
});
// -----------------------------------------------

grid.addEventListener("click", addToFavorite);
grid.addEventListener("click", openModal);
favoriteBtn.addEventListener("click", openFavorite);
favorite.addEventListener("click", removeFavorite);
form.addEventListener("submit", handleFormSumit);
loadMoreBtn.addEventListener("click", hanelLoadMoreClick);
