'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const checkIfLoginExist = function(login, logins) {
  for (const value of logins) {
    let inExist;
    if (value === login) {
      inExist = true;
      return inExist;
    }
  }
};

const checkLoginValidity = function(login) {
  let isValid;
  if (login.length < 4 || login.length > 15) {
    isValid = false;
  }
  return isValid;
};

const addLogin = function(login, logins) {
  if (checkLoginValidity(login) === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  }
  if (checkIfLoginExist(login, logins) === true) {
    console.log("Такой логин уже используется!");
    return;
  } else {
    logins.push(login);
    console.log("Логин успешно добавлен");
  }
};
addLogin("Mango", logins);


