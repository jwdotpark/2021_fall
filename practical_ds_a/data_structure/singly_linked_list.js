class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// linked list has a pointer to the head of the list and a pointer to the tail.

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     current = current.next;
  //   }
  // }
}

const list = new SinglyLinkedList()
list.push("goodbye");
list.push("cruel");
list.push("world");

console.log(list);
