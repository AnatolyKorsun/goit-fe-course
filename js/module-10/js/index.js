"use strict";

const allUsers = document.querySelector(".js-allUsers");
const usersList = document.querySelector(".js-item");
const userByIdBtn = document.querySelector(".js-userById");
const input = document.querySelector(".js-input");
const userIdList = document.querySelector(".js-showUserById");
const name = document.querySelector(".js-name");
const age = document.querySelector(".js-age");
const addUserBtn = document.querySelector(".js-addUser");
const removeBtn = document.querySelector(".js-removeById");
const removeinput = document.querySelector(".js-removeinput");
const updateUser = document.querySelector(".js-updateUser");
const updateName = document.querySelector(".js-updateName");
const updateAge = document.querySelector(".js-updateAge");
const updateId = document.querySelector(".js-updateId");

let listOfUsers = {};

const createUsersList = () => {
  listOfUsers.forEach(user => {
    const item = document.createElement("li");
    item.textContent = `id: ${user.id}   name:${user.name}    age: ${user.age}`;
    item.classList.add("js-item");
    usersList.appendChild(item);
  });
};

const getAllUsers = () => {
  fetch("https://test-users-api.herokuapp.com/users/")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      listOfUsers = data.data;
      createUsersList();
    })
    .catch(err => {
      console.error("Error: ", err);
    });
};

const getUserById = id => {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      const item = document.createElement("p");
      item.textContent = `id: ${data.data.id}   name:${
        data.data.name
      }    age: ${data.data.age}`;
      userIdList.appendChild(item);
    })
    .catch(err => {
      console.error("Error: ", err);
    });
};
const getById = () => {
  if (input.value) {
    getUserById(input.value);
  }
};

const addUser = (newName, newAge) => {
  const newPost = {
    name: newName,
    age: newAge
  };
  fetch("https://test-users-api.herokuapp.com/users", {
    method: "POST",
    body: JSON.stringify({ name: newName, age: newAge }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        alert("success");
        return response.json();
      }
    })
    .then(data => console.log(data))
    .catch(error => console.log("Erroe:", error));
};
const createUser = () => {
  if ((Number(age.value) !== null) & (name.value !== "")) {
    addUser(name.value, Number(age.value));
  }
};

const removeUser = id => {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        alert("success");
      }
    })
    .catch(error => console.log("Erroe:", error));
};
const removeId = () => {
  if (removeinput.value) {
    removeUser(removeinput.value);
    getAllUsers();
  }
};

const updateUserById = (id, user) => {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        alert("success");
      }
    })
    .catch(error => console.log("Erroe:", error));
};

const updateValidity = () => {
  const newAge = Number(updateAge.value);
  const newName = updateName.value;
  const user = { name: newName, age: newAge };

  if ((newAge !== null) & (newName !== "") & (updateId.value !== "")) {
    updateUserById(updateId.value, user);
  }
};

allUsers.addEventListener("click", getAllUsers);
userByIdBtn.addEventListener("click", getById);
addUserBtn.addEventListener("click", createUser);
removeBtn.addEventListener("click", removeId);
updateUser.addEventListener("click", updateValidity);
