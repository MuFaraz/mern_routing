class User {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
class Admin extends User {
  constructor(name, age, address, rights) {
    super(name, age, address);
  }
}

let user = new User("faraz", 12, "karachi");

// Human class 

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// student class 
class Student extends Human {
  constructor(name, age, kuch_bhi) {
    super(name, age);
    this.kuch_bhi = kuch_bhi;
  }
  detail() {
    console.log(
      `This is student class ${this.name} ${this.age} ${this.kuch_bhi}`
    );
  }
}
class Teacher extends Human {
  constructor(name, age, kuch_bhi_teacher) {
    super(name, age);
    this.kuch_bhi_teacher = kuch_bhi_teacher;
  }

  detail() {
    console.log(
      `This is teacher class ${this.name} ${this.age} ${this.kuch_bhi_teacher}`
    );
  }
}

let student = new Student("faraz", 19, "hello world");
let teacher = new Teacher("faraz", 24, "hello world 123");
teacher.detail();
student.detail();
