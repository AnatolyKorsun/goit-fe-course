let userInput;
const numbers = [];
let total = 0;
let max;

while (userInput !== null) {
  userInput = prompt("Введіть число");
  isValid = Number(userInput);

  if (!Number.isNaN(isValid)) {
    numbers.push(isValid);
  }
  console.log(numbers);

  if (Number.isNaN(isValid)) {
    alert("Не вірний ввод");
  }
}

if (userInput === null) {
  for (let i = 0, max = numbers.length; i < max; i += 1) {
    total += numbers[i];
  }
}
alert(`Загальна сума чисел дорівнює ${total}`);
