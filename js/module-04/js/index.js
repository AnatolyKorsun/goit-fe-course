'use strict'

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

/*
  Создайте объект кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того
  хватает денег или нет, уведомляет покупателя о результате.
*/

/*
  Есть заранее известная база данных товаров, 
  в формате "имя-товара":"цена за одну единицу"
*/





function Cashier(name, product) {
    this.name = name;
    this.products = products;
    this.countTotalPrice = function(order){
        console.log(order);
        // для кожного кляча
        // візьми ключ заказа
        // порівняй його з ключем продуктів

        // так-добав в тотал кількісь*ціну 

        // ні порівняй наступний товар

        
    }

    this.serve = function(order){
        console.log('serve', this);


    }
    }
    
    
    const cashier = new Cashier('Mango', products);
    console.log(cashier);
    

    const cashiertwo = new Cashier('Poly', products);
    console.log(cashiertwo);
    



    const order = {
        bread: 2,
        milk: 2,
        apples: 1,
        cheese: 1
    };

    cashier.serve(order);
    cashiertwo.serve(order);

    cashier.countTotalPrice(order);
    cashiertwo.countTotalPrice(order);



  /* 
    Необходимо создать функцию-конструктор Cashier для объектов кассира,
    чтобы можно было создать сколько угодно кассиров.
    
    Поля объекта кассира: 
      - name - строка, имя, передается при вызове конструктора
      
      - products - объект база данных продуктов, передается при вызове конструктора
      
      - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
      
      - customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 
      
      - changeAmount - число, сдача, всегда начинается с 0
      
      - countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products
        
      - getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая 
          сумма покупок из поля totalPrice. Ожидает ввода пользователя и записывает результат ввода в поле customerMoney.
          Проверить что пользователь ввел число. Также customerMoney должна быть не меньше чем totalPrice. 
          Просит покупателя ввести сумму до тех пор, пока не будет введена корректная сумма - число, 
          равное или больше чем totalPrice. Если пользователь нажмет Cancel, то функция возвращает null.
          
      - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
      
      - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
      
      - serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
          вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
          countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
          строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
          Вызывает метод reset при любом исходе обслуживания.
  */

//   function Cashier(name, products) {
    // код
    // не забывайте о this при обращении к свойствам и методам будущего объекта
//   }

  /*
    В метод serve будут передаваться объекты следующего формата. "имя-продукта": "количество-единиц"
  */
//   const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1
//   };

  /*
    Ниже приведен пример использования.
  */

//   const cashier = new Cashier('Mango', products);

//   cashier.serve(order);
  /*
    При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
    Далее выполнение идет по вышеописанному алгоритму.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const shop = {
//     products: [
//       { name: 'apples', amount: 100, price: 30 },
//       { name: 'grapes', amount: 150, price: 40 },
//       { name: 'bananas', amount: 200, price: 50 },
//     ],
//     addProduct(product) {
//       this.products.push(product);
//     },
//     findProduct(productName) {
//       for (const elem of this.products) {
//         if (elem.name === productName) {
//           return elem;
//         }
//       }
//     },
//     addProductAmount(productName, num) {
//       console.log(`Adding ${num} ${productName}`);
  
//       const product = this.findProduct(productName);
//       product.amount += num;
//     },
//     subtractProductAmount(productName, num) {
//       console.log(`Selling ${num} ${productName}`);
  
//       const product = this.findProduct(productName);
//       product.amount -= num;
//     },
//     getAllProducts() {
//       return this.products;
//     },
//   };


  
// function Shop({ products = [], managers = [] }) {
//     this.products = products;
//     this.managers = managers;
  
//     this.addManager = function(params) {
//       const manager = new Manager(params);
  
//       this.managers.push(manager);
//     };
  
//     this.makeSale = function(managerName, productName) {
//       for (const manager of this.managers) {
//         if (manager.name === managerName) {
//           manager.sell(productName, this.products);
//         }
//       }
//     };
  
//     this.addProduct = function(product) {
//       this.products.push(product);
//     };
  
//     this.findProduct = function(productName) {
//       for (const elem of this.products) {
//         if (elem.name === productName) {
//           return elem;
//         }
//       }
//     };
  
//     this.addProductAmount = function(productName, num) {
//       console.log(`Adding ${num} ${productName}`);
  
//       const product = this.findProduct(productName);
//       product.amount += num;
//     };
  
//     this.subtractProductAmount = function(productName, num) {
//       console.log(`Selling ${num} ${productName}`);
  
//       const product = this.findProduct(productName);
//       product.amount -= num;
//     };
  
//     this.getAllProducts = function() {
//       return this.products;
//     };
//   }
  
//   function Manager({ name = 'manager', salesCount = 0 }) {
//     this.name = name;
//     this.salesCount = salesCount;
  
//     this.sell = function(productName, products) {
//       console.log('inside Manager.sell, productName: ', productName);
//       console.log('inside Manager.sell, products: ', products);
  
//       console.log(`Selling ${productName}`);
  
//       this.salesCount += 1;
//     };
//   }
  
//   const products = [
//     { name: 'apples', amount: 100, price: 30 },
//     { name: 'grapes', amount: 150, price: 40 },
//     { name: 'bananas', amount: 200, price: 50 },
//   ];
  
//   const shopA = new Shop({
//     products: products,
//   });
  
//   shopA.addManager({
//     name: 'Mango',
//     salesCount: 10,
//   });
  
//   shopA.addManager({
//     name: 'Poly',
//     salesCount: 20,
//   });
  
//   shopA.makeSale('Mango', 'apples')*/