const Queue = require('../queue/Queue');

describe('THIS IS THE TEST SUITE FOR QUEUES or Q', () => {
  it('should instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.length).toEqual(0);
    expect(queue.next).toEqual(null);
  });

  it('should successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('first_test_item');
    expect(queue.length).toEqual(1);
    expect(queue.next).toEqual(0);
    expect(queue[queue.next]).toEqual('first_test_item');
  });

  it('should successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('first_test_item');
    queue.enqueue('second_test_item');
    queue.enqueue('third_test_item');
    expect(queue.length).toEqual(3);
    expect(queue.next).toEqual(0);
    expect(queue[queue.next]).toEqual('first_test_item');
    expect(queue[queue.length - 1]).toEqual('third_test_item');
  });

  it('should successfully dequeue out of a queue the expected value',()=>{
    let queue = new Queue();
    queue.enqueue('first_test_item');
    queue.dequeue()
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('should successfully peek into a queue, seeing the expected value',()=>{
    let queue = new Queue();
    queue.enqueue('first_test_item');
    queue.enqueue('second_test_item');
    expect(queue.peek()).toEqual('first_test_item')
  })

  it('should successfully empty a queue after multiple dequeues',()=>{
      let queue = new Queue();
      queue.enqueue('first_test_item');
      queue.enqueue('second_test_item');
      queue.dequeue()
      queue.dequeue()
      expect(queue.isEmpty()).toBeTruthy()
  })

  it('calling peek or dequeue on an empty queue should raise an exception',()=>{
      let q = new Queue()
      expect(q.peek()).toBeFalsy()
      expect(q.dequeue()).toBeFalsy()
  })
}); 