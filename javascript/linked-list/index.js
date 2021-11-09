const linkedList = require('./linked-list.js');

let ll = new linkedList();

console.log('empty list', ll);

ll.append(10);
ll.append(30);
let res = ll.includes(15);
console.log('new list', ll);
console.log('rami test', res, ll);
function zipList(list1, list2) {
    if(list1.head === null) return list2;
    if(list2.head === null) return list1;
  
    let newLinkList = new LL;
    let current = list1.head;
    newLinkList.head = current;
    let list1Counter = list1.head;
    let list2Counter = list2.head
    while(list1Counter && list2Counter) {
      list1Counter = list1Counter.next;
      current.next = list2Counter;
      list2Counter = list2Counter.next;
      current = current.next;
      current.next = list1Counter;
      current = current.next;
    }
    return newLinkList;
  }
 
