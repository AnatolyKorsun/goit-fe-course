"use strict";

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.countTotalPrice = function(order) {
    let totalPrice = 0;
    for (const keys in order) {
      for (const key in products) {
        if (keys === key) {
          const howMatch = order[keys] * products[key];
          totalPrice += howMatch;
        }
      }
    }
    this.totalPrice = totalPrice;
    return totalPrice;
  };

  this.getCustomerMoney = function(totalPrice) {
    let userInput;
    while (userInput !== null) {
      userInput = prompt(`Общая сумма по заказу ${totalPrice} грн.`);
      let customerMoney = Number(userInput);
      if (customerMoney >= totalPrice) {
        this.customerMoney = customerMoney;
        return customerMoney;
      }
    }
    if (userInput === null) {
      return userInput;
    }
  };

  this.countChange = function(totalPrice, customerMoney) {
    if (customerMoney !== null) {
      this.changeAmount = customerMoney - totalPrice;
    }
  };

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };

  this.serve = function(order) {
    const totalPrice = this.countTotalPrice(order);
    const costumerMoney = this.getCustomerMoney(totalPrice);
    const changeAmount = this.countChange(totalPrice, costumerMoney);
    if (this.changeAmount > 0) {
      alert(`Спасибо за покупку, ваша сдача ${this.changeAmount} грн`);
    } else if (this.changeAmount === 0 && this.customerMoney !== 0) {
      alert(`Спасибо за покупку.`);
    } else {
      alert(`Очень жаль, что-то пошло не так, приходите еще.`);
    }
    const reset = this.reset();
  };
}

const cashier = new Cashier("Mango", products);

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

cashier.serve(order);
