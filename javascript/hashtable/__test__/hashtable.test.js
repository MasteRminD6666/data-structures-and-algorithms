'use strict';
const { Hashmap, leftJoin } = require('../Hashtable.js');

const BinaryTree = require('../../trees/index').BinaryTree
const Node = require('../../trees/index').Node;
describe('Hash Map', () => {
  test('should create a hash map with pre defined size', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap).toBeDefined();
    expect(hashMap.size).toBe(5000);
    expect(hashMap.storage.length).toBe(5000);
  });

  test('should add elements of key and values to hash map', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.storage[hashMap.code('one')]).toBeDefined();
    expect(hashMap.storage[hashMap.code('two')]).toBeDefined();
    expect(hashMap.storage[hashMap.code('three')]).toBeDefined();
  });

  test('should get the value of a key if exist', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.get('one')).toBe('test1');
    expect(hashMap.get('two')).toBe('test2');

  });

  test('should check if a key is saved in the map', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.contains('one')).toBeTruthy();
    expect(hashMap.contains('two')).toBeTruthy();
    expect(hashMap.contains('four')).toBeFalsy();
  });

  test('should return indexes of keys', () => {
    const hashMap = new Hashmap(5000);
    hashMap.add('one', 'test1');
    hashMap.add('two', 'test2');
    hashMap.add('three', 'test3');
    expect(hashMap.hash('one')).toBe(hashMap.code('one'));
    expect(hashMap.hash('two')).toBe(hashMap.code('two'));
    expect(hashMap.hash('three')).toBe(hashMap.code('three'));
  });

});
describe('Hash Map Repeated Words', () => {
  const case1 = 'Nory was a Catholic because her mother was  Catholic,.';
  const case2 =
    'It was the best of times, it was the worst of times, it was the age of wisdom,';
  const case3 = 'we work hard play hard ';
  test(' Case 1', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case1)).toBe('was');
  });

  test(' Case 2', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case2)).toBe('it');
  });

  test(' Case 3', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case3)).toBe('hard');
  });
});

describe(' LEFT JOIN', () => {
  const map1 = new Hashmap(1000);
  map1.add('a', 'aa');
  map1.add('b', 'bb');
  map1.add('c', 'cc');
  const map2 = new Hashmap(1000);
  map2.add('a', 'ao');
  map2.add('c', 'co');
  map2.add('d', 'dd');
  it('should return a left join between two hash maps', () => {
    const arr = leftJoin(map1, map2);
    console.log(arr[0].toString());
    expect(arr[0].toString()).toBe('a,aa,ao');
    expect(arr[1].toString()).toBe('b,bb,null');
    expect(arr[2].toString()).toBe('c,cc,co');
  });
});