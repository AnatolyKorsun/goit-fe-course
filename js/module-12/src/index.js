import "./style.css";
import "./test.scss";
import articleTmp from "./templates/grid-item.hbs";
import * as storage from "./services/storage";

const grid = document.querySelector(".grid");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = form.querySelector(".button");

// let two = { 2: "12", 3: "51" };

// localStorage.setItem('one',two);
// console.log(localStorage.getItem('one'));
// localStorage.getItem('one');

// storage.set('');

// const one = storage.get()
// // const two = { 2: "12", 3: "51" };
// const tree = Object.assign(one, two);
// storage.set(tree);
// console.log(tree);

// hydratePhotosGrid(['sdf','sdf','fgh']);

// console.log(articleTmp({ item: "ef" }));



const two = [
  { item: "1" },
  { item: "2" },
  { item: "3" },
  { item: "4" },
  { item: "5" },
  { item: "6" },
];



const contains =()=>{ 
  if(input.value)
  two.forEach(elem => {
    if(!input.value & elem.item === input.value){
      alert('asdasd');
      // break
      }

    })
    };


// contains();




const markup = () => {
  return two.reduce((acc, element) => acc + articleTmp(element), "");
};
markup();
grid.insertAdjacentHTML("beforeend", markup());



const addUrl = () => {
  if (input.value) {
    two.unshift({ item: `${input.value}` });
    markup();
    console.log(two)
  }
  event.preventDefault();
};



// btn.addEventListener("click", addUrl);
btn.addEventListener("click", contains);






/* 
  
  Реализуйте следующий функционал:
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
      

    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/
