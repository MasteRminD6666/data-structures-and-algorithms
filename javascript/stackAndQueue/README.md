# Challenge Summary

stacks and queues
## Author : Rami Zaitoun
## Challenge Description

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
- Should raise exception when called on empty stack
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
- This object should be aware of a default empty value assigned to front when the queue is created.
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
- Should raise exception when called on empty queue
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
- Should raise exception when called on empty queue
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency

| **_Stack method_** | Big O | **_Queue method_** | Big O |
| ------------------ | ----- | ------------------ | ----- |
| push(value)        | O(1)  | enqueue(value)     | O(1)  |
| pop()              | O(1)  | dequeue()          | O(1)  |
| peek()             | O(1)  | peek()             | O(1)  |
| isEmpty()          | O(1)  | isEmpty()          | O(1)  |

## Solution

## Structure and Testing
![Testing](https://github.com/MasteRminD6666/data-structures-and-algorithms/blob/main/javascript/stackAndQueue/solved.PNG?raw=true)

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception
