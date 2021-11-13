'use strict';

const Node = require('./node.js');


class Stack {
  constructor(){
    this.length = 0;
    this.top = null;
  }
  push(value) {
    let brandNewNode = new Node(value);
    if(!this.top) {
      this.top = brandNewNode;
      this.length++;
      return this;
    } else {
      let tempNode = this.top;
      this.top = brandNewNode;
      this.top.next = tempNode;
      this.length++;
      return this;
    }
  }  
  pop() {
    if (this.length === 0) return 'sorry - empty stack';
    if (this.length > 1) {
    let topNodeToBeDeleted = this.top;
    let tempNode = this.top.next;
    delete this.top;
    this.top = tempNode;
    --this.length;
    return topNodeToBeDeleted;
    } else {
    let topNodeToBeDeleted = this.top;
    delete this.top;
    --this.length;
    return topNodeToBeDeleted;
    }

  }  
  peek() {
    if(this.length === 0) return 'sorry - empty stack';
    let lastIndexNumber = this.length;
    let result = this.top;
    return `This is the last element at index number ${lastIndexNumber - 1}: ${result}`;
  }  
  isEmpty() {
    if(this.length === 0) return true;
    return false;
  }
}

module.exports = Stack;