class Person {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  getInfo() {
    return this.age + " years old " + "and weighs " + this.weight + "kg.";
  }
}

// child class
class Employee extends Person {
  constructor(age, weight, salary) {
    super(age, weight);
    this.salary = salary;
  }

  // override
  getInfo() {
    return "My salary is " + this.salary + " and " + super.getInfo();
  }
}

const person = new Person(50, 90);
const employee = new Employee(30, 70, 99999);

// same method, different result
console.log(person.getInfo()); // 50 years old and weighs 90 kilo.
console.log(employee.getInfo()); // 30 years old and weighs 70 kilo. My salary is 99999