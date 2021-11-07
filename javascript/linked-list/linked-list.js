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
    let headNode = new Node(value);
    if(!this.head) {
      this.head = headNode;
    } else {
      headNode.next = this.head;
      this.head = headNode;
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
  insertBefore(newValue, value) {
    const node = new Node(newValue);
    let pointer = this.head;

    if (value == this.head.value) {
      node.next = this.head;
      this.head = node;
    } else {

      while (pointer) {
        if (pointer.next.value == value) {
          node.next = pointer.next;
          pointer.next = node;
          break;
        }
        pointer = pointer.next;
      }
    }
  }


  insertAfter(newValue, value) {
    let node = new Node(newValue);
    let pointer = this.head;

    while (pointer) {

      if (pointer.value == value) {
        node.next = pointer.next;
        pointer.next = node;
        break;
      }
      pointer = pointer.next;
    }
  }


// got helped from a youtube channel here is the link [https://www.youtube.com/watch?v=9YddVVsdG5A]
}

module.exports = LinkedList;