'use strict';

const LL = require('../linked-list.js');

function zipList(list1, list2) {
  if(list1.head === null) return list2;
  if(list2.head === null) return list1;

  let newLinkList = new LL;
  current = list1.head;
  // newLinkList.next = list2.head;
  let list1Counter = list1.head;
  let list2Counter = list2.head
  while(list1Counter && list2Counter) {
    list1Counter = list1Counter.next;
    newLinkList.next = list2Counter;
    list2Counter = list2Counter.next;
    newLinkList = newLinkList.next;
    newLinkList.next = list1Counter;
    newLinkList = newLinkList.next;
  }
  return newLinkList;
}
console.log(zipList(ll, ll2).toString());