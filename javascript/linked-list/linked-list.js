'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let brandNewNode = new Node(value);
    if(!this.head) {
      this.head = brandNewNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = brandNewNode;
    }
    // the whole list
    return this;
  }

  insert(value) {
    let brandNewHeadNode = new Node(value);
    if(!this.head) {
      this.head = brandNewHeadNode;
    } else {
      brandNewHeadNode.next = this.head;
      this.head = brandNewHeadNode;
    }
    return this;
  }

  includes(value) {
    if(!this.head) {
      console.log('empty list');
      return('empty list');
    } else {
      let current = this.head;
      while(current.next) {
        if(current.value === value) {
          console.log('WE FOUND IT', current);
          return true;
        }
        current = current.next;
      }
      return false;
    }
    return this;
  }

  toString() {
    let solution = ''
    if(!this.head) {
      console.log('empty list');
      return null;
    } else {
      let current = this.head;
      while(current.next) {
        solution = solution + `{${current.value}} -> `;
        current = current.next;
      }
      solution = solution + `{${current.value}} -> NULL`
    }
    console.log('=============================', solution); 
    return solution;
  }

  // findMiddle() {
   
  //   return this;
  // }
  // reverse() {
   
  //   return this;
  // }
}

module.exports = LinkedList;