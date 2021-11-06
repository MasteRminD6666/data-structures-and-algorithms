const linkedList = require('./linked-list.js');

let ll = new linkedList();

console.log('empty list', ll);

ll.append(10);
ll.append(30);
let res = ll.includes(15);
console.log('new list', ll);
console.log('rami test', res, ll);
