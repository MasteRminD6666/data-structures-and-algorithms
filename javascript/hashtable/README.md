# Hashtables
# Author: Rami Zaitoun

## Challenge

Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

hashtables (because they are array like structures have a Big O: Time O(1) in best case scenario (only one entry at hash position))

adding a linked list at every position of the hash array when we first store data there (key, value pair - as an array of 2 values)

## Links

- [Link to PR]()


### UML Hashmap

![uml hashmap](../assets/Hashmap.jpg)

# Testing 

![uml hashmap](../assets/tested.PNG)


## Approach & Efficiency

1. TIME: O(1) - best case scenario.
1. SPACE: O(n)

## Resources


- [Free Code Map](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/#:~:text=Hash%20Tables%20are%20a%20data,put%20into%20the%20table%20beforehand.)
