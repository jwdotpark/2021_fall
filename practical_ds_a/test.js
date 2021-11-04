// class Student {
//   constructor(firstName, lastName, point, items) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.point = point; 
//     this.items = [];
//   }
//   // method
//   fullName() {
//     return `Full name is ${this.firstName} ${this.lastName}.`;
//   }
//   markPoint(n) {
//     this.point += n;
//     return `${this.firstName} ${this.lastName} got ${this.point} grade point.`;
//   }
//   addItems(item) {
//     this.items.push(item);
//     return `${this.firstName} got ${this.items}. `;
//   }
// }

// let firstStudent = new Student("Jongwoo", "Park", 1);
// let secondStudent = new Student("John", "Doe", -2);
// let okja = new Student("Okja", "The Cute Dog", 3, "Carrot");
// okja.addItems("Apple");
// console.log(okja.addItems("Sausage"));
// console.log(okja.addItems("Gum"));

// // console.log(okja)

// piece of data: val
// reference to next node: next

class Node {
  constructor(val) {
    this.val = val;
    // it's the beginning, there's nothing to come after it
    this.next = null;
  }
}

let first = new Node("Hi");
first.next= new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you?");

console.log(first);