'use strict';

const Stack = require('./stack/Stack');

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value) {
        if (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(value);
        if (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        return this.stack1;
    }

    dequeue() {
        if (this.stack1.length === 0) {
            return null;
        }
        let result = this.stack1.peek();
        this.stack1.pop();
        return result;
    }
    // TODO check how to do it in another way 
}
// const rami = new PseudoQueue()
// console.log('test1', rami.enqueue(1));
// console.log('test2', rami.enqueue(2));
// console.log('test3', rami.enqueue(3));

module.exports = PseudoQueue;