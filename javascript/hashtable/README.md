# Hashtables
Hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
# Author: Rami Zaitoun

## Challenge

Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

I took the implementation path, where I start writing code and tests my result step by step. 

got helped form someone on github i understand his code and tried to modify his code 

# Testing 

![Testing](https://github.com/MasteRminD6666/data-structures-and-algorithms/blob/main/javascript/hashtable/__test__/assets/tested.PNG)


## Approach & Efficiency

- add: O(n)
- get: O(1)
- contains: O(1)
- hash: O(1)




## Got Helped from [Fizzo](https://github.com/fizzo999) refactoring the code 
## Resources
- [Free Code Map](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/#:~:text=Hash%20Tables%20are%20a%20data,put%20into%20the%20table%20beforehand.)
