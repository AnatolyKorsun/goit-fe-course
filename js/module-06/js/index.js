'use strict'

function Hamburger(obj){
this.size = obj.size;
console.log('size',this.size);
this.stuffing = obj.stuffing;
console.log('stuffing',this.stuffing);

this.TOPPING_SPICE =0;
this.TOPPING_SAUSE =0;

// console.log(obj.size);
// console.log(obj.stuffing);

// console.log(Hamburger.SIZES);


// this.size = obj.size;
// this.stuffing = obj.stuffing;

// console.log(this.size);
// console.log(this.stuffing);

// for(const key in Hamburger){
//     if (Hamburger[key] === obj.size ){
//         console.log(Hamburger[key] , obj.size);
//     }
// };

        // console.log(Hamburger.STUFFINGS[obj.stuffing].calories,
// Hamburger.SIZES[obj.size].calories);


// for(const key in Hamburger.SIZES){
//     if (Hamburger[key] === obj.size ){
//         console.log(Object.keys(Hamburger.SIZES));
        console.log('size price:',Hamburger.SIZES[obj.size].price);
        // console.log(Hamburger.SIZES[obj.size].calories);
//     }
// };

// for(const key in Hamburger.STUFFINGS){
//     if (Hamburger[key] === obj.stuffing ){
//         console.log(Object.keys(Hamburger.STUFFINGS));
        console.log('stuffing price:',Hamburger.STUFFINGS[obj.stuffing].price);
        // console.log(Hamburger.STUFFINGS[obj.stuffing].calories);
//     }
// };
// for(const key in Hamburger.TOPPINGS){
//         if (Hamburger[key] === topping && this[topping] !== topping){
//             this[topping] = topping;
//             console.log(Object.keys(Hamburger.TOPPINGS));
//             console.log(Hamburger[key] ,topping);
            
//             console.log(Hamburger.TOPPINGS[topping].price);
//             console.log(Hamburger.TOPPINGS[topping].calories);
//         }
//     };
 
};

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {price: 30,calories: 50, },
    [Hamburger.SIZE_LARGE]: {price: 50,calories: 100, },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {price: 15, calories: 20,},
  [Hamburger.STUFFING_SALAD]: {price: 20, calories: 5,},
  [Hamburger.STUFFING_MEAT]: {price: 35, calories: 50,},
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUSE = 'TOPPING_SAUSE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {price: 10, calories: 0,},
  [Hamburger.TOPPING_SAUSE]: {price: 15, calories: 5,},
};

const hamburger = new Hamburger({ size: Hamburger.SIZE_SMALL,  stuffing: Hamburger.STUFFING_MEAT });

//  * Узнать размер гамбургера
Hamburger.prototype.getSize = function () {return this.size};
// console.log('hamburger size:',hamburger.getSize());

//  * Узнать начинку гамбургера
Hamburger.prototype.getStuffing = function () {return this.stuffing };
//  console.log('stuffing:', hamburger.getStuffing());

//  * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
Hamburger.prototype.addTopping = function (topping) {
        if (Hamburger[topping] === topping && this[topping] !== topping){
            this[topping] = topping;
        }
    };
hamburger.addTopping('TOPPING_SPICE');
hamburger.addTopping('TOPPING_SAUSE');
console.log('topping:',hamburger.TOPPING_SAUSE);
console.log('topping:',hamburger.TOPPING_SPICE);


// * Убрать topping, при условии, что она ранее была добавлена
Hamburger.prototype.removeTopping = function (topping) { 
    if (Hamburger[topping] === topping && this[topping] === topping){
        this[topping] = 0;
    };
 };
//  hamburger.removeTopping('TOPPING_SPICE');
//  hamburger.removeTopping('TOPPING_SAUSE');
//  console.log(hamburger.TOPPING_SPICE);
//  console.log(hamburger.TOPPING_SAUSE);

//  * Получить список toppings
Hamburger.prototype.getToppings = function () { 
    return Hamburger.TOPPINGS
 };
//  console.log(hamburger.getToppings());

 //  * Узнать цену гамбургера
            // console.log(Hamburger.TOPPINGS[].price);
 
Hamburger.prototype.calculatePrice = function () {
    let totalPriceTopping= 0;
    for(const key in Hamburger.TOPPINGS){
                if (Hamburger[key] === this[key]){
                    //  console.log(key);
                     totalPriceTopping += Hamburger.TOPPINGS[key].price;
                };
                        console.log('topping price',totalPriceTopping);
                

            //             this[topping] = topping;
            //             console.log(Object.keys(Hamburger.TOPPINGS));
                        // console.log(totalPriceTopping);
            
            //             console.log(Hamburger.TOPPINGS[topping].price);
            //             console.log(Hamburger.TOPPINGS[topping].calories);
            //         }
                };
            const totalPrice = Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + totalPriceTopping;
    return totalPrice
 };

//  console.log(Hamburger.SIZES[this.size].price);
//  console.log(Hamburger.STUFFINGS[this.stuffing].price);
 
 console.log('total price;',hamburger.calculatePrice());

//  * Узнать калорийность
Hamburger.prototype.calculateCalories = function () { 
    let totalCaloriesTopping= 0;
    for(const key in Hamburger.TOPPINGS){
                if (Hamburger[key] === this[key]){
                    totalCaloriesTopping += Hamburger.TOPPINGS[key].calories;
                };
                        console.log('topping calories',totalCaloriesTopping);
                

                };
            const totalCalories = Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + totalCaloriesTopping;
    return totalCalories
 };

 
 console.log('total calories',hamburger.calculateCalories());
 














/* 
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. 

  
  База гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
	
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
	
  Дополнительно, гамбургер можно: 
	- посыпать приправой (+10 денег, +0 калорий) 
    - полить соусом (+15 денег, +5 калорий)
    

















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

	
    
//     - имена методов начинаются с глагола и имеют вид «сделайЧтоТо»: calculateCalories(), addTopping()
    

//     - в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки), 
//       	а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории 
// 	логично в тот момент, когда это потребуется, а не заранее.
// */