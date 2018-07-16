'use strict'

const allUsers = document.querySelector('.js-allUsers');
const usersList = document.querySelector('.js-item');
const userByIdBtn = document.querySelector('.js-userById');
const input = document.querySelector('.js-input');
const userIdList = document.querySelector('.js-showUserById');
const name = document.querySelector('.js-name');
const age = document.querySelector('.js-age');
const addUserBtn = document.querySelector('.js-addUser');
const removeBtn = document.querySelector('.js-removeById')
const removeinput = document.querySelector('.js-removeinput')

let currencies = {};

const createUsersList = () => {
    currencies.forEach(user => {
        const item = document.createElement("li");
        item.textContent = `id: ${user.id}   name:${user.name}    age: ${user.age}`;
        item.classList.add("js-item");
        usersList.appendChild(item);
    });
};

const getAllUsers = () => {
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            currencies = data.data;
            console.log(currencies)
            createUsersList();
        })
        .catch(err => {
            console.error("Error: ", err);
        });
};

const getUserById = (id) => {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            const item = document.createElement("p");
            item.textContent = `id: ${data.data.id}   name:${data.data.name}    age: ${data.data.age}`;
            userIdList.appendChild(item);
        })
        .catch(err => {
            console.error("Error: ", err);
        });
};
const getById = () => {
    if (input.value) {
        getUserById(input.value)
    };
};


const addUser = (newName, newAge) => {
    const newPost = {
        name: newName,
        age: newAge,
    };
    fetch('https://test-users-api.herokuapp.com/user/', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "aplication/json; charset=UTF-8"
        }
    })
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => console.log(data))
    // console.log(age, name)
};
const createUser = () => {
    if (age.value & name.value) {
        addUser(name.value, age.value)
        // console.log(age.value)
        // console.log(name.value)

        // addUser(name.value, age.value)
    }
};

const removeUser = (id) => {
    fetch('https://test-users-api.herokuapp.com/users/:id' , {
        method: 'DELETE'
    })
        .then(() => alert("success"))
            .catch(error => console.log('Erroe:', error)
            )}
const removeId = () => {
    if (removeinput.value) {
        removeUser(removeinput.value)
    };
};



allUsers.addEventListener("click", getAllUsers);
userByIdBtn.addEventListener("click", getById);
addUserBtn.addEventListener("click", createUser);
removeBtn.addEventListener("click", removeId);



//     user это объект с новыми полями name и age.
//   Документацию по бэкенду и пример использования прочитайте 

// Написать функции которые




// 3 Имя + Возвраст и создаст -  ПОСТ
// - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

// 4 Удалить по 1Д
// - функция removeUser(id) - должна удалять из БД юзера по указанному id.

// 5 Обновить
// - функция updateUser(id, user) - должна обновлять данные пользователя по id. 

