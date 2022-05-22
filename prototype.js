let User = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;

  this.online = function () {
    console.log(`this user ${this.name} is online`);
  };
  this.offline = function () {
    console.log(`this user ${this.name} is offline`);
  };
};
let user1 = new User("ali", 21, "karachi");
console.log(user1.name)