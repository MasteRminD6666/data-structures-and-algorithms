'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');
const LL = require('../linked-list.js');
const zipLists = require('../index').zipLists;
describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  
  it('should create an empty LinkList on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    list.append(first);
    expect(list.head.value).toEqual(1);
    list.append(second);
    expect(list.head.next.value).toEqual(2);

  });

  it('should test for inserting a node at the beginning', () => {
    let list = new LL();
    let first = 100;
    let second = 200;
    list.insert(first);
    expect(list.head.value).toEqual(100);
    list.insert(second);
    expect(list.head.value).toEqual(200);
  });

  it('should test if the linked list includes a value', () => {
    let list = new LL();
    list.append(10);
    list.append(30);
    list.insert(100);
    list.insert(500);
    expect(list.includes(10)).toEqual(true);
    expect(list.includes(15)).toEqual(false);
  });

  it('should return empty when calling includes on empty list', () => {
    let list = new LL();
    expect(list.includes(10)).toEqual('empty list');
  })

  it('should test the function to string', () => {
    let list = new LL();
    list.append(10);
    list.append(30);
    list.insert(100);
    list.insert(500);
    expect(list.toString()).toEqual('{500} -> {100} -> {10} -> {30} -> NULL');
  });

  it(`should print a message of null if list is empty`, () => {
    let list = new LL();
    expect(list.toString()).toEqual(null);
  });

  // it('Zip linked lists',()=>{
  //   const list1 = new LL();
  //   const list2 = new LL();
  //   for(let i=0;i<5;i++){
  //     list1.append(i);
  //   }
  //   for(let i=0;i<5;i++){
  //     list1.append(i+10);
  //   }
  //   expect(zipLists(list1,list2)).toBe('{0} -> {1} -> {2} -> {3} -> {4} -> {10} -> {11} -> {12} -> {13} -> {14}');
  // })
  
});



