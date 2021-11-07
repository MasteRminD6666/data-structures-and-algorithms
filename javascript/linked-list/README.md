## Challenge Description
 - Added  insert before insert after
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called toString (or **str** in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
  "{ a } -> { b } -> { c } -> NULL"
  


## Approach 
#### 1. insert: O(1).
#### 2. includes: O(n).
#### 3. toString: O(n).

**insert**
Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.

**includes**
Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.

**to string**
Arguments: none
Returns: a string representing all the values in the Linked List

**append**
arguments: new value
adds a new node with the given value to the end of the list

**insert before**
arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

**insert after**
arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified

## Solution-WB

![](https://raw.githubusercontent.com/MasteRminD6666/data-structures-and-algorithms/main/javascript/linked-list/rami.png)
