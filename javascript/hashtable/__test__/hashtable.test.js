'use strict';

const Hashmap = require('../Hashtable.js');
let hashmap = new Hashmap(10);

hashmap.add('rami', 'zaitoun');
hashmap.add('merch', 'venssa');


describe('=======>>>>>>> Hashmap <<<<<<<=======', () => {
    it('should successfully add a key/value pair to the hashtable ', () => {

        expect(hashmap.contains('rami')).toEqual(true);
        expect(hashmap.contains('ahmad')).toEqual(false);
    });

    it('should successfully return a value based on a key or a message of nothing found for key:', () => {

        expect(hashmap.get('rami')).toEqual(["for the key 'rami' we found rami: zaitoun"]);
    });
    it('should successfully return null when a key does not exist in the hashtable ', () => {

        expect(hashmap.contains('john')).toEqual(false);
        expect(hashmap.get('john')).toEqual(null);
    });

});