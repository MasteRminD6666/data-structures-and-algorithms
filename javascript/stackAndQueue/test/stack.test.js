'use strict';

const Stack = require('../stack/Stack');

describe('THIS IS THE TEST RUN FOR STACK', () => {

  it('should instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.length).toEqual(0);
  });

  it('should successfully push into a stack', () => {
    let stack = new Stack();
    stack.push('first_test_item');
    expect(stack.length).toEqual(1);
    expect(stack[stack.length-1]).toEqual('first_test_item')
  });

  it('should successfully push multiple values into a stack', () => {
    let stack = new Stack();
    stack.push('first_test_item');
    stack.push('second_test_item');
    stack.push('third_test_item');
    expect(stack.length).toEqual(3);
    expect(stack[stack.length-1]).toEqual('third_test_item');
  });

  it('should successfully pop out of a stack the expected value',()=>{
    let stack = new Stack();
    stack.push('firest_test_item');
    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('should successfully peek into a stack, seeing the expected value',()=>{
    let stack = new Stack();
    stack.push('first_test_item');
    stack.push('second_test_item');
    expect(stack.peek()).toEqual('second_test_item')
  })

  it('should successfully empty a stack after multiple pops',()=>{
      let stack = new Stack();
      stack.push('first_test_item');
      stack.push('second_test_item');
      stack.pop()
      stack.pop()
      expect(stack.isEmpty()).toBeTruthy()
  })

  it('calling peek or pop on an empty stack should raise an exception',()=>{
      let q = new Stack()
      expect(q.peek()).toBeFalsy()
      expect(q.pop()).toBeFalsy()
  })
}); 