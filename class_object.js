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
  test(){
      console.log("test")
  }
}
// student class 
class Student extends Human {
  constructor(name, age, fees) {
    super(name, age);
    this.fees = fees;
  }
  detail() {
    console.log(
      `This is student class ${this.name} ${this.age} ${this.fees}`
    );
  }
}
class Teacher extends Human {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  detail() {
    console.log(
      `This is teacher class ${this.name} ${this.age} ${this.salary}`
    );
  }
}

let student = new Student("faraz", 19, "hello world");
let teacher = new Teacher("faraz", 24, "hello world 123");
teacher.detail();
student.detail();