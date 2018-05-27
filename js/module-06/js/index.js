'use strict'

function Guest (name, age){
    this.name = name;
    this.age = age;
};

const mango = new Guest('Mango', 25);
const Poly = new Guest('Poly', 25);

console.log(mango);
console.log(Guest);

Guest.prototype.showName = function(){
    return this.name
};

console.log('mango.showName:', mango.showName());
console.log( Poly.showName);

// // console.log('wha');


// function Hamburger(ham){

//         Hamburger.SIZE_SMALL = 'SIZE_SMALL';
//         Hamburger.SIZE_LARGE = 'SIZE_LARGE';
//         Hamburger.SIZES = {
//             [Hamburger.SIZE_SMALL]: { price: 30,  calories: 50,},
//             [Hamburger.SIZE_LARGE]: { price: 50,  calories: 100,},
//             };

//          Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
//          Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
//          Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
//          Hamburger.STUFFINGS = {
//             [Hamburger.STUFFING_CHEESE]: { price: 15, calories: 20,},
//             [Hamburger.STUFFING_SALAD]: { price: 20, calories: 5,},
//             [Hamburger.STUFFING_MEAT]: { price: 35, calories: 15,},
//             };

//          Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
//          Hamburger.TOPPING_SAUCE = 'TOPPING_SAUSE';
//          Hamburger.TOPPINGS = {
//             [Hamburger.TOPPING_SPICE]: {price: 10, calories: 0,},
//             [Hamburger.TOPPING_SAUSE]: {price: 15, calories: 5,},
//             };

//         console.log(ham);
//         this.size = name;
//         // this.stuffing = stuffing;

//         this.getFullInfo = function(){
//             console.log(this.size);
//         };

        



// };

// // const hamb = Object.create(Hamburger);
// // hamb.pole = 'true'
// // humb.prototype.construcotr = Hamburger;
// const hamb = new Hamburger({pole:'10', mango:'15'});
//     // { size: Hamburger.SIZE_SMALL, stuffing: Hamburger.STUFFING_CHEESE});

// console.log(hamb);
// // const hamp = object.create(Hamburger);
// // hamb.__proto__ = Hamburger;
// console.log(`hamb:${hamb}`);

// console.log(hamb.SIZE_SMALL);


// hamb.getFullInfo();




  
//   База гамбургера может быть большой или маленькой (обязательно):
// 	- маленькая (+30 денег, +50 калорий) константа
// 	- большая (+50 денег, +100 калорий) константа
	
//   Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// 	- сыром (+15 денег, +20 калорий) константа
// 	- салатом (+20 денег, +5 калорий) константа
// 	- мясом (+35 денег, +15 калорий) константа
	
//   Дополнительно, гамбургер можно: 
// 	- посыпать приправой (+10 денег, +0 калорий) 
// 	- полить соусом (+15 денег, +5 калорий)


//   Типы начинок и размеры надо сделать константами. Никаких магических строк 
//   и чисел быть не должно.

//   Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. 
//   Используте ООП подход, создайте класс Hamburger, константы, методы 
//   для выбора опций и рассчета нужных величин. 

//   Класс Hamburger, получает на вход информацию о гамбургере, а на выходе 
//   дает информацию о каллориях и цене. 
 
// */
// /**
// * Класс, объекты которого описывают параметры гамбургера. 
// * 
// * @constructor
// * @param {String} size - Размер
// * @param {String} stuffing - Начинка
// * @throws {HamburgerException} - При неправильном использовании (только в доп. задании)
// */
// function Hamburger({ size, stuffing }) { ... } 
// /* Размеры, виды начинок и добавок добавить как статические свойства класса. К примеру: */
// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_LARGE = ...
// Hamburger.SIZES = {
//   [Hamburger.SIZE_SMALL]: {
//     price: 30,
//     calories: 50,
//   },
// };
// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD = ...
// Hamburger.STUFFING_MEAT = ...
// Hamburger.STUFFINGS = {
//   [Hamburger.STUFFING_CHEESE]: {
//     price: 15,
//     calories: 20,
//   },
// };
// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE = ...
// Hamburger.TOPPINGS = {
//   [Hamburger.TOPPING_SPICE]: {
//     price: 10,
//     calories: 0,
//   },
// };








// /**
// * Добавить topping к гамбургеру. Можно добавить несколько
// * topping, при условии, что они разные.
// * 
// * @param {String} topping - Тип добавки
// * @throws {HamburgerException} - При неправильном использовании (только в доп. задании)
// */
// Hamburger.prototype.addTopping = function (topping) { ... }


// /**
//  * Убрать topping, при условии, что она ранее была 
//  * добавлена.
//  * 
//  * @param {String} topping - Тип добавки
//  * @throws {HamburgerException} - При неправильном использовании (только в доп. задании)
//  */
// Hamburger.prototype.removeTopping = function (topping) { ... }


// /**
//  * Получить список toppings
//  *
//  * @return {Array} - Массив добавленных topping, содержит значения констант
//  *                   Hamburger.TOPPING_*
//  */
// Hamburger.prototype.getToppings = function () { ... }


// /**
//  * Узнать размер гамбургера
//  *
//  * @return {String} - размер гамбургера
//  */
// Hamburger.prototype.getSize = function () { ... }


// /**
//  * Узнать начинку гамбургера
//  *
//  * @return {String} - начинка гамбургера
//  */
// Hamburger.prototype.getStuffing = function () { ... }


// /**
//  * Узнать цену гамбургера
//  * @return {Number} - Цена в деньгах
//  */
// Hamburger.prototype.calculatePrice = function () { ... }


// /**
//  * Узнать калорийность
//  *
//  * @return {Number} - Калорийность в калориях
//  */
// Hamburger.prototype.calculateCalories = function () { ... }


// const hamburger = new Hamburger({ 
//   size: Hamburger.SIZE_SMALL, 
//   stuffing: Hamburger.STUFFING_CHEESE
// });


// // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);


// // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());


// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());


// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);


// // А сколько теперь стоит? 
// console.log("Price with sauce: ", hamburger.calculatePrice());


// // Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false


// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);


// // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
// 





/*
//   Обратите внимание в коде выше на такие моменты:
//     - класс не взаимодействует с внешним миром. Это не его дело, этим занимается другой код, 
//     	а класс живет в изоляции от мира
//     - обязательные параметры (размер и начинка) мы передаем через конструктор, 
//     	чтобы нельзя было создать объект, не указав их
//     - необязательные (добавка) добавляем через методы
//     - имена методов начинаются с глагола и имеют вид «сделайЧтоТо»: calculateCalories(), addTopping()
//     - типы начинок обозначены "константами" с понятными именами (на самом деле просто свойствами, 
//       	написанным заглавными буквами, которые мы договорились считать "константами")
//     - объект создается через конструктор - функцию, которая задает начальные значения полей. 
//       	Имя конструктора пишется с большой буквы и обычно является существительным: new Hamburger(...)
//     - в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки), 
//       	а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории 
// 	логично в тот момент, когда это потребуется, а не заранее.
//   При решении задачи в ООП стиле, необходимо ответить на вопросы:	
//     - какие есть сущности, для которых мы сделаем классы? (Гамбургер).
//     - какие у них есть свойства (размер, начинка, добавки). Цена или калории не являются свойствами так 
//       как они вычисляются из других свойств и хранить их не надо.
//     - что мы хотим от них получить (какие у них должны быть методы). Например, сколько стоит гамбургер?
//     - как сущности связаны? У нас одна сущность «Гамбургер» и она ни с чем не связана.
// */







// /*
//   ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***
//   Код должен быть защищен от ошибок. Представьте, что классом будет 
//   пользоваться другой программист. Если он передает неправильный тип 
//   гамбургера, например, или неправильный вид добавки, должно выбрасываться 
//   исключение (ошибка не должна молча игнорироваться).
//   При неправильном использовании класс сообщает об этом с помощью выброса исключения.
// */
// /**
//  * Представляет информацию об ошибке в ходе работы с гамбургером. 
//  * Подробности хранятся в свойстве message.
//  * @constructor 
//  */
// function HamburgerException (...) { ... }
// // не передали обязательные параметры
// const h2 = new Hamburger(); // => HamburgerException: no size given
// // передаем некорректные значения, добавку вместо размера
// const h3 = new Hamburger({
//   size: Hamburger.TOPPING_SPICE, 
//   stuffing: Hamburger.TOPPING_SPICE
// }); 
// // => HamburgerException: invalid size 'TOPPING_SPICE'
// // добавляем много добавок
// const h4 = new Hamburger({
//   size: Hamburger.SIZE_SMALL, 
//   stuffing: Hamburger.STUFFING_CHEESE
// });
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE); 
// // => HamburgerException: duplicate topping 'SAUCE'