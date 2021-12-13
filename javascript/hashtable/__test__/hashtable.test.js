'use strict';
const Hashmap = require('../Hashtable.js');
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