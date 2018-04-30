const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let max = 3;
let userInput;

for (let i = 0; i < max; i += 1) {

    userInput = prompt("Введіть пароль");

    if (userInput === null) {
        break;
    }

    if (passwords.includes(userInput)) {
        alert("Ласкаво просимо")
        break;
    }

    else if (max - i - 1 !== 0) {
        alert(`Не вірний пароль, у вас залишилось ${max - 1 - i} спроб.`);
    }

    else if (i < max) {
        alert('Спроби закінчилися. Акаунт заблоковано.');
    }
}