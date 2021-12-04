class Person {
  constructor(first, last, gender, age) {
    this.name = { first, last }
    this.gender = gender;
    this.age = age;
  }
  intro() {
    return ("Name is " + this.name.first + " " + this.name.last)
  }
}

class Student extends Person {
  #grade;
  constructor(first, last, gender, age, subject, grade) {
    super(first, last, gender, age);
    // 
    this._subject = subject;
    this.#grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

const p = new Person("John", "Doe", "Male", 200);
const j = new Student("Jongwoo", "Park", "Male", 30, "CoP", 200);

console.log(j.name)      // {first: "Jongwoo", last: "Park"}
console.log(j.grade)     // undefined
console.log(j.subject)   // "CoP"
j.subject = "somoe other one"
console.log(j.subject)   // "some other one" 