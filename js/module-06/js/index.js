'use strict'

class Hamburger {
    constructor(obj) {
        this.size = obj.size;
        this.stuffing = obj.stuffing;
        this.TOPPING_SPICE = 0;
        this.TOPPING_SAUSE = 0;

        this.getSize = function () {
            return this.size
        };

        this.getStuffing = function () {
            return this.stuffing
        };

        this.addTopping = function (topping) {
            if (Hamburger[topping] === topping && this[topping] !== topping) {
                this[topping] = topping;
            };
        };

        this.removeTopping = function (topping) {
            if (Hamburger[topping] === topping && this[topping] === topping) {
                this[topping] = 0;
            };
        };

        this.removeTopping = function (topping) {
            if (Hamburger[topping] === topping && this[topping] === topping) {
                this[topping] = 0;
            };
        };

        this.getToppings = function () {
            return Hamburger.TOPPINGS
        };

        this.calculatePrice = function () {
            let totalPriceTopping = 0;
            for (const key in Hamburger.TOPPINGS) {
                if (Hamburger[key] === this[key]) {
                    totalPriceTopping += Hamburger.TOPPINGS[key].price;
                };
            };
            const totalPrice = Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + totalPriceTopping;
            return totalPrice
        };

        this.calculateCalories = function () {
            let totalCaloriesTopping = 0;
            for (const key in Hamburger.TOPPINGS) {
                if (Hamburger[key] === this[key]) {
                    totalCaloriesTopping += Hamburger.TOPPINGS[key].calories;
                };
            };
            const totalCalories = Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + totalCaloriesTopping;
            return totalCalories
        };
    };
};

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: { price: 30, calories: 50, },
    [Hamburger.SIZE_LARGE]: { price: 50, calories: 100, },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: { price: 15, calories: 20, },
    [Hamburger.STUFFING_SALAD]: { price: 20, calories: 5, },
    [Hamburger.STUFFING_MEAT]: { price: 35, calories: 50, },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUSE = 'TOPPING_SAUSE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: { price: 10, calories: 0, },
    [Hamburger.TOPPING_SAUSE]: { price: 15, calories: 5, },
};

const hamburger = new Hamburger({ size: Hamburger.SIZE_SMALL, stuffing: Hamburger.STUFFING_MEAT });

//  * Узнать размер гамбургера
console.log('hamburger size:', hamburger.getSize());

//  * Узнать начинку гамбургера
console.log('stuffing:', hamburger.getStuffing());

//  * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
hamburger.addTopping('TOPPING_SPICE');
hamburger.addTopping('TOPPING_SAUSE');
console.log('topping:', hamburger.TOPPING_SAUSE);
console.log('topping:', hamburger.TOPPING_SPICE);


// * Убрать topping, при условии, что она ранее была добавлена
hamburger.removeTopping('TOPPING_SPICE');
hamburger.removeTopping('TOPPING_SAUSE');
console.log(hamburger.TOPPING_SPICE);
console.log(hamburger.TOPPING_SAUSE);

//  * Получить список toppings
console.log(hamburger.getToppings());

//  * Узнать цену гамбургера
console.log('total price;', hamburger.calculatePrice());

//  * Узнать калорийность
console.log('total calories', hamburger.calculateCalories());