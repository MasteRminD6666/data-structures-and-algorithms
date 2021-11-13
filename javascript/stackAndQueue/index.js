'use strict';

const Stack = require('./stack-and-queue');
const Queue = require('./queue/Queue');

let stack = new Stack();

console.log('empty stack', stack);
console.log('stack with 1 item', stack.push('first'));
console.log('stack with 2 items', stack.push('second'));
console.log('stack with 3 items', stack.push('third'));
console.log('stack with 3 items', stack.peek());
console.log('stack after peek', stack);

console.log('popped off the stack', stack.pop());

console.log('stack after pop:', stack);

console.log('stack with 2 items', stack.peek());

console.log('popped off the stack', stack.pop());

console.log('empty stack', stack.isEmpty());
console.log('popped off the stack', stack.pop());

console.log('empty stack', stack);
console.log('empty stack', stack.isEmpty());

console.log('empty stack attempting to be popped', stack.pop());
console.log('===================================RAMI===================================')

let queue = new Queue();

console.log('empty queue', queue);
console.log('queue with 1 item', queue.enqueue('first'));
console.log('queue with 2 items', queue.enqueue('second'));
console.log('queue with 3 items', queue.enqueue('third'));
console.log('queue with 3 items', queue.peek());
console.log('queue after peek', queue);

console.log('popped off the queue', queue.dequeue());

console.log('queue after dequeue:', queue);

console.log('queue with 2 items', queue.peek());

console.log('dequeueped off the queue', queue.dequeue());

console.log('empty queue', queue.isEmpty());
console.log('dequeueped off the queue', queue.dequeue());

console.log('empty queue', queue);
console.log('empty queue', queue.isEmpty());

console.log('empty queue attempting to be dequeue', queue.dequeue()); 