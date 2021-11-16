const Node = require('./Node');


class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

    if (value != "dog" && value != "cat") {
      return "Can only accept cat or dog";
    }


    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

  }

  dequeue() {
    if (!this.front) {
      return 'Animal Shelter is Empty';
    }
    let holder = this.front;

    this.front = holder.next;
    holder.next = null;
    return holder.value;
  }
}
module.exports = AnimalShelter;
