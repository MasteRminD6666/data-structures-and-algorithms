'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
    }
    add(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    getList() {
        if (!this.head) return 'no-list';

        let current = this.head;
        let counter = 1;
        let resultsArr = [];

        while (current) {

            resultsArr[counter - 1] = current.val;
            current = current.next;
            counter++;
        }

        return resultsArr;
    }
}

class Hashmap {
    constructor(size) {
        this.storage = new Array(size);
        this.size = size;
    }

    hash(key) {
        return key.split('').reduce((acc, curr) => {
            return acc + curr.charCodeAt(0);
        }, 0) * 19 % this.size;
    }

    add(key, val) {
        let hash = this.hash(key);
        let getListResult;

        if (!this.storage[hash]) {
            let ll = new LL();
            ll.add([key, val]);
            this.storage[hash] = ll;
        } else {
            this.storage[hash].add([key, val]);
            getListResult = this.storage[hash].getList();
            console.log(` already an entry at hashmap position ${hash} ====>>>>>`, getListResult);
        }
    }

    get(key) {
        let hash = this.hash(key);

        if (!this.storage[hash]) {
            console.log('\n no value for that key !!!');
            return null;
        } else {
            let node = this.storage[hash];
            let thisNode = node.head;
            let result = [];

            while (thisNode) {
                if (thisNode.val[0] === key) {
                    result.push(`for the key '${key}' we found ${thisNode.val[0]}: ${thisNode.val[1]}`);
                }
                thisNode = thisNode.next;
            }
            return result.length > 0 ? result : `nothing found for key:${key}`;
        }
    }

    contains(key) {
        let hash = this.hash(key);

        if (!this.storage[hash]) {

            return false;
        } else {
            let node = this.storage[hash];
            let thisNode = node.head;

            while (thisNode) {
                if (thisNode.val[0] === key) {

                    return true;
                }
                thisNode = thisNode.next;
            }

            return false;
        }
    }
}

let hashmap = new Hashmap(10);

hashmap.add('rami', 'test');
console.log('getting ... rami', hashmap.get('rami'));
console.log(hashmap.contains('rami'));


module.exports = Hashmap;