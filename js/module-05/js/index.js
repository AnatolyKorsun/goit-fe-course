"use strict";

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getId = () =>
    "-" +
    Math.random()
      .toString(36)
      .substr(2, 9);

 this.getAllUsers = users => this.users;
    

  this.getUserByLogin = login => {
    const userByLogin = this.users.find(user => user.login === login);
    return userByLogin;
  };

  this.getUserStatus = userId => {
    const user = this.users.find(user => user.id === userId);
    if (user.isActive === true) {
      return "active";
    } else return "inactive";
  };

  this.addUser = user => {
    user.id = this.getId();
    user.isActave = false;
    this.users.push(user);
  };

  this.removeUserById = userId => {
    this.users = this.users.filter(user => user.id !== userId);
  };

  this.getUsersCount = () => this.users.length;

  this.getUserPosts = userId => this.posts[userId].map(post => post.text);

  this.addPost = (userId, post) => this.posts[userId].push(post);

  this.removePost = (userId, postId) =>
    (this.posts[userId] = this.posts[userId].filter(
      post => post.id !== postId
    ));

  this.getAllLikes = userId =>
    this.posts[userId].reduce((likes, user) => likes + user.likes, 0);

  this.addPostLike = (userId, postId) =>
    (this.posts[userId] = this.posts[userId].map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));

  this.getPostCount = userId => this.posts[userId].length;
}

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
  ]
};

const initialUsers = [
  {
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const socialBook = new SocialBook(initialUsers, initialPosts);

// const allUsers = socialBook.getAllUsers(initialUsers);
// console.log('allUsers: ', allUsers);

// const userByLogin = socialBook.getUserByLogin("polysweet@skynet.ze");
// console.log('userByLogin:', userByLogin);

// const userStatus = socialBook.getUserStatus("-e51cpd4di");
// console.log("userStatus:", userStatus);

// const addUser = socialBook.addUser({
//   login: "Anatoly@gmail.com",
//   password: "Korsun"
// });
// console.log(socialBook.users);

// const removeById = socialBook.removeUserById("-e51cpd4di");
// console.log(socialBook.users);

// const count = socialBook.getUsersCount();
// console.log(count);

// const post = socialBook.getUserPosts("-qkpzenjxe");
// console.log('user posts: ',post);

// socialBook.addPost("-qkpzenjxe", {
//   id: "-hy0eyw5qo",
//   text: "add post ",
//   likes: 777
// });
// console.log(socialBook.posts);

// socialBook.removePost("-e51cpd4di", "-9y6nkmlj4");
// console.log(socialBook.posts);

// const likes = socialBook.getAllLikes("-qkpzenjxe");
// console.log('All likes: ', likes);

// socialBook.addPostLike("-s19a6hqce", "-hy0eyw5qo");
// console.log(socialBook.posts);

// const postCount = socialBook.getPostCount("-qkpzenjxe");
// console.log('Post count: ',postCount);


