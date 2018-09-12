const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const spinner = document.querySelector('.spinner-overlay');
const loadMoreBtn = document.querySelector('.load-more');
                                                            // add favorite Tolik
const favorite = document.querySelector('.menu__link')
const main = document.querySelector('.main')


let currentPage = 1;
let currentQuery = '';

const API_KEY = '5837779-ac3ba737206b541ae294f1119';

const toggleSpinner = () => spinner.classList.toggle('visible');

                                                             // Changes by Tolik
 const setStorage = (value) => {
  localStorage.setItem('favorite-image', JSON.stringify(value));
};


 const getStorage = () => {
  const data = localStorage.getItem('favorite-image');
  return data ? JSON.parse(data) : [];
};


setStorage('wha')


const favoriteUrls = getStorage()
main.classList.toggle('visible');
console.log(favoriteUrls ); 


createFavoriteItems = (favoriteUrls) =>{
console.log(favoriteUrls);

} 



                                                                                  // Changes by Tolik


const showLoadMoreBtn = () => {
  if (!loadMoreBtn.classList.contains('visible')) {
    loadMoreBtn.classList.add('visible');
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

      throw new Error('error: ' + response.statusText);
    })
    .then(data => data.hits)
    .catch(err => console.log(err));
};

const createGridItems = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="grid-item">
        <img src=${item.webformatURL} alt="photo">
      </div>`,
    '',
  );
};

const updatePhotosGrid = markup => {
  grid.insertAdjacentHTML('beforeend', markup);
};

const resetPhotosGrid = () => {
  grid.innerHTML = '';
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
  e.preventDefault();

  resetCurrentPage();
  resetPhotosGrid();

  currentQuery = input.value;

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
  });

  e.target.reset();
  showLoadMoreBtn();
  // const gridItem = document.querySelectorAll(".grid-item") 
  // console.log(gridItem); 
};

const hanelLoadMoreClick = () => {
  incrementCurrentPage();

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
  });
};


form.addEventListener('submit', handleFormSumit);
loadMoreBtn.addEventListener('click', hanelLoadMoreClick);
                                        // add addEventListener  tolik
favorite.addEventListener('click', createFavoriteItems );