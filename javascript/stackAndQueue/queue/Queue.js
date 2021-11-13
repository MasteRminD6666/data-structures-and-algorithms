'use strict';

class Queue {
  constructor(){
    this.length = 0;
    this.next = null;
  }
  enqueue(value){
    this[this.length] = value;
    if (!this.next) this.next = 0
    this.length++
    return this
  }
  dequeue() {
    // if (this.length === 0) return 'sorry queue is already empty';
    if (this.length === 0) return null;
    let temp = this.next
    let result = this[this.next]
    delete this[this.next]
    this.length--
    this.next = temp + 1
    if (this.length === 0) this.next = null
    return result
  }
  peek(){
    return this[this.next];
  }
  isEmpty(){
  if(this.length === 0) return true;
  return false; 
  }
}

module.exports = Queue; 