'use strict'

const allUsers = document.querySelector('.js-allUsers')

const getAllUsers = () =>{
    console.log('wha');
    fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => response.json())
    .then(data => console.log(data));

    // const createGridItems = items => {
        //   return items.reduce(
        //     (markup, item) =>
        //       markup +
        //       `<div class="grid-item">
        //         <img src=${item.webformatURL} alt="photo">
        //       </div>`,
        //     '',
        //   );
}


allUsers.addEventListener('click', getAllUsers);






//     user это объект с новыми полями name и age.
//   Документацию по бэкенду и пример использования прочитайте 
//   в документации https://github.com/trostinsky/users-api#users-api.
//   Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
//   А так же панелью для вывода результатов операций с бэкендом.


// Написать функции которые

// 1 получат всех пользователей
//  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

// 2 получит пользователя по 1д
// - функция getUserById(id) - должна вернуть пользователя с переданным id.

// 3 Имя + Возвраст и создаст -  ПОСТ
// - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

// 4 Удалить по 1Д
// - функция removeUser(id) - должна удалять из БД юзера по указанному id.

// 5 Обновить
// - функция updateUser(id, user) - должна обновлять данные пользователя по id. 






// const grid = document.querySelector('.grid');
// const form = document.querySelector('.form');
// const input = document.querySelector('.input');
// const spinner = document.querySelector('.spinner-overlay');
// const loadMoreBtn = document.querySelector('.load-more');
// let currentPage = 1;
// let currentQuery = '';

// const API_KEY = '5837779-ac3ba737206b541ae294f1119';

// const toggleSpinner = () => spinner.classList.toggle('visible');

// const showLoadMoreBtn = () => {
//   if (!loadMoreBtn.classList.contains('visible')) {
//     loadMoreBtn.classList.add('visible');
//   }
// };

// const resetCurrentPage = () => {
//   currentPage = 1;
// };

// const incrementCurrentPage = () => {
//   currentPage += 1;
// };

// const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);

// const fetchImages = ({ query, count, page }) => {
//   const url = `https://pixabay.com/api/?image_type=photo&q=${query}&per_page=${count}&page=${page}&key=${API_KEY}`;

//   return fetch(url)
//     .then(response => {
//       if (response.ok) return response.json();

//       throw new Error('error: ' + response.statusText);
//     })
//     .then(data => data.hits)
//     .catch(err => console.log(err));
// };

// const createGridItems = items => {
//   return items.reduce(
//     (markup, item) =>
//       markup +
//       `<div class="grid-item">
//         <img src=${item.webformatURL} alt="photo">
//       </div>`,
//     '',
//   );
// };

// const updatePhotosGrid = markup => {
//   grid.insertAdjacentHTML('beforeend', markup);
// };

// const resetPhotosGrid = () => {
//   grid.innerHTML = '';
// };

// const handleFetch = params => {
//   toggleSpinner();

//   fetchImages(params).then(photos => {
//     const markup = createGridItems(photos);
//     updatePhotosGrid(markup);
//     toggleSpinner();
//     scrollToBottom();
//   });
// };

// const handleFormSumit = e => {
//   e.preventDefault();

//   resetCurrentPage();
//   resetPhotosGrid();

//   currentQuery = input.value;

//   handleFetch({
//     query: currentQuery,
//     count: 9,
//     page: currentPage,
//   });

//   e.target.reset();
//   showLoadMoreBtn();
// };

// const hanelLoadMoreClick = () => {
//   incrementCurrentPage();

//   handleFetch({
//     query: currentQuery,
//     count: 9,
//     page: currentPage,
//   });
// };

// form.addEventListener('submit', handleFormSumit);
// loadMoreBtn.addEventListener('click', hanelLoadMoreClick);