"use strict";

// const laptops = {
//           size: 13,
//           color: 'white',
//           price: 28000,
//           release_date: 2015,
//           name: 'Macbook Air White 13"',
//           img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
//           descr:
//             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
//         };

const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const filterBtn = document.querySelector(".js-filter");
const checkbox = document.querySelectorAll(".js");
// const checkboxSize = document.querySelectorAll(".js-size");
// const checkboxDate = document.querySelectorAll(".js-date");
// console.log(checkboxColor);
// console.log(checkboxSize);
// console.log(checkboxDate);

// подивись  по кожному фыльтру чи чекбокс вибраний
//  якщо вибраний запиши в обэкт фыльтр
// якщо в фыльтрі є значення запиши обєкт в відфільтрований



const filter = { size: [], color: ['black'], release_date: [] };
console.log(filter);


 const choiceParameters = () => {

checkbox.forEach(value){
    
}




    // checkboxColor.reduce((acc, color) => {
    // if (color.checked) {
        // filter.color.push(color.value);
        // console.log(filter);
    // }
//   });



};

const laptopsFiltred = [];
const build = laptops.forEach(value => {
  if (
    filter.size.includes(value.size) ||
    filter.color.includes(value.color) ||
    filter.release_date.includes(value.release_date)
  ) {
    laptopsFiltred.push(value);
  }
});

const root = document.querySelector(".root");
const source = document.querySelector("#cart-id").innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(filter);
root.insertAdjacentHTML("afterbegin", markup);

filterBtn.addEventListener("click", choiceParameters);
// checkboxColor.addEventListener("checked",choiceColor)
// checkboxSize
// checkboxDate
