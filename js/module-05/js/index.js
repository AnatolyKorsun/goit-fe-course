'use strict'

function SocialBook(users = [], posts = {}) {
    this.users = users;
    this.posts = posts;

    this.getId = () => "-" + Math.random().toString(36).substr(2, 9);

    this.getAllUsers = (users) => {
        let allUsers = [];
        users.forEach(user => {
            allUsers.push(user.id);
        });
        return allUsers;
    };

    this.getUserByLogin = (login) => {
        const userByLogin = this.users.find(user => user.login === login);
        return userByLogin;
    };

    this.getUserStatus = (id) => {
        const user = this.users.find(user => user.id === id);
        if (user.isActive === true) {
            return 'active';
        }
        else return 'inactive';
    };

    this.addUser = (user) => {
        user.id = this.getId();
        user.isActave = false;
        this.users.push(user);
    }

    this.removeUserById = (userId) => {
        this.users = this.users.filter(user => user.id !== userId);
    };

    this.getUsersCount = () => {
       const count = this.users.reduce((count, user, ind) => count = ind + 1);
       return count;
    }

    // - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId
    this.getUserPosts = (userId) =>{ 
        const postt = this.posts[userId].map(post => postt.push(post.text)); 
        console.log (postt);
    }



};

const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false },
];

const initialPosts = {
    "-s19a6hqce": [
        { id: "-5sgljaskg", text: "post #1", likes: 3 },
        { id: "-199hb6igr", text: "post #2", likes: 5 },
        { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
        { id: "-5tu69g5rf", text: "post #1", likes: 8 },
        { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
        { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
        { id: "-i03pbhy3s", text: "post #2", likes: 45 }
    ],
};

const socialBook = new SocialBook(initialUsers, initialPosts);
// console.log(socialBook);
// socialBook.addPost('id',{...}); записать пост 


const allUsers = socialBook.getAllUsers(initialUsers);
// console.log('allUsers: ', allUsers);

const userByLogin = socialBook.getUserByLogin('polysweet@skynet.ze');
// console.log('userByLogin:', userByLogin);

const userStatus = socialBook.getUserStatus('-e51cpd4di');
// console.log('userStatus:', userStatus);

const addUser = socialBook.addUser({ login: 'Anatoly@gmail.com', password: 'Korsun', });
// console.log(socialBook.users);

// console.log(socialBook.users);
const removeById = socialBook.removeUserById('-e51cpd4di');
// console.log(socialBook.users);

const count = socialBook.getUsersCount();
// console.log('Общее количество пользователей :' ,count);

// const post = socialBook.getUserPosts('-s19a6hqce');
console.log(socialBook.posts);





// const getId = () => "-" + Math.random().toString(36).substr(2, 9);
// const user = { id: getId(), name: 'Mango' };
// const user1 = { id: getId(), name: 'Mango' };
// console.log(user);
// console.log(user1);


//   ОБЯЗАТЕЛЬНО ПРИ ВЫПОЛНЕНИИ: 
//     - при работе с коллекциями данных использовать функциональные методы массивов, никаких for и т. п.

//   Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
//     - users - массив пользователей. Каждый пользователь это объект с полями:
//         id - уникальный идентификатор
//         login - почта
//         password - пароль
//         isActive - статус активности
//     - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
//       являются массивы постов пользователя. Каждый пост состоит из:
//         id - уникальный идентификатор
//         text - текст поста
//         likes - количество лайков поста
/*
  Для создания уникального идентификатора для поля id, используйте 
  вспомогательную функцию getId(), возвращающую уникальную строку.
  
  К примеру: const user = { id: getId(), name: 'Mango' };
*/
// const getId = () => "-" + Math.random().toString(36).substr(2, 9);




/*
  ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***
  Добавьте в SocialBook следующие методы для работы с постами пользователей:

    - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId
    
    - addPost(userId, post) - добавляет post в поле posts объекта socialBook по ключу userId. 
    
    - removePost(userId, postId) - удаляет post с id равным postId из поля posts 
      объекта socialBook по ключу userId
      
    - getAllLikes(userId) - возвращает сумму всех полей likes постов пользователя с id равным userId
          
    - addPostLike(userId, postId) - увеличивает значение поля likes на 1 у поста с id равным postId, 
      для пользователя с id равным userId
    
    - getPostsCount(userId) - возвращает общее количество постов пользователя с id равным userId
*/