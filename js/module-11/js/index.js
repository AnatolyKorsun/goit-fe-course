"use strict";

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
  // {
  //   size: 13,
  //   color: "gray",
  //   price: 32000,
  //   release_date: 2016,
  //   name: 'Macbook Air Gray 13"',
  //   img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
  //   descr:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  // },
  // {
  //   size: 13,
  //   color: "black",
  //   price: 35000,
  //   release_date: 2017,
  //   name: 'Macbook Air Black 13"',
  //   img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
  //   descr:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  // },
  // {
  //   size: 15,
  //   color: "white",
  //   price: 45000,
  //   release_date: 2015,
  //   name: 'Macbook Air White 15"',
  //   img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
  //   descr:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  // },
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
  // {
  //   size: 15,
  //   color: "black",
  //   price: 45000,
  //   release_date: 2017,
  //   name: 'Macbook Pro Black 15"',
  //   img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
  //   descr:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  // },
  // {
  //   size: 17,
  //   color: "white",
  //   price: 65000,
  //   release_date: 2015,
  //   name: 'Macbook Air White 17"',
  //   img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
  //   descr:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  // },
  // {
  //   size: 17,
  //   color: "gray",
  //   price: 75000,
  //   release_date: 2016,
  //   name: 'Macbook Pro Gray 17"',
  //   img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
  //   descr:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  // },
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
const clearBtn = document.querySelector('.js-clear');
const color = document.querySelectorAll(".js-color");
const size = document.querySelectorAll(".js-size");
const date = document.querySelectorAll(".js-date");
const root = document.querySelector(".root");
const laptopsCard = root.querySelectorAll('.laptops-cart')

let laptopsFiltred = [];
const filter = { size: [], color: [], release_date: [] };

// const removeLaptops = () =>{

//   laptopsCard.remove();
// }


const filterLaptops = () => {
  laptopsFiltred.splice(0);
  // removeLaptops();
  // location.reload()
  laptops.forEach(value => {
    if ( filter.color.includes(value.color) ||
      filter.size.includes(String(value.size)) ||
      filter.release_date.includes(String(value.release_date))) {
      laptopsFiltred.push(value);
    };
    // laptopsCard.remove();
    build();
  });
event.preventDefault();
console.log('laptopsFiltred:', laptopsFiltred);
};





const takeRequest = () => {
  // location.reload()

  filter.color.splice(0);
  filter.size.splice(0);
  filter.release_date.splice(0);

  color.forEach(value => {
    if (value.checked === true) filter.color.push(value.defaultValue);
  });
  size.forEach(value => {
    if (value.checked === true) filter.size.push(value.defaultValue);
  });
  date.forEach(value => {
    if (value.checked === true) filter.release_date.push(value.defaultValue);
  });
  console.log('filter',filter);
  
  filterLaptops();
  // root.removeChild()
  
};

const clear = () =>{
  console.log ('laptopsCard', laptopsCard);
  // laptopsCard.remove();
  location.reload();
}


const build = () =>{
  // laptopsCard.remove();
  const source = document.querySelector("#cart-id").innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = template(laptopsFiltred);
  // const markup = template(laptops);
  
  // if(root.classList.contains('.laptops-cart')){
  // };
  console.log(root);
  console.log(root.children);
    // .classList.contains('.laptops-cart')
  
  root.insertAdjacentHTML("afterbegin", markup);
};
build();
filterBtn.addEventListener("click", takeRequest);
clearBtn.addEventListener("click",clear);