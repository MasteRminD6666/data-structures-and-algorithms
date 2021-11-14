'use strict';
const PseudoQueue = require('../PseudoQueue');

describe("PesudoQueue",()=>{
    it('enqueue one value ',()=>{
        let push = new PseudoQueue();
        push.enqueue(99);
        expect(push.stack1.length).toEqual(1);
    })

    it('enqueue more than one value',()=>{
        let pop = new PseudoQueue();
        pop.enqueue(4);
        pop.enqueue(6);
        pop.enqueue(200);
        pop.enqueue(666);
        expect(pop.stack1.length).toEqual(4);
        // expect(testQueue[queue.stack1.length]).toEqual(999);
    })

    it('empty stack should throw error',()=>{
        let q = new PseudoQueue();
        expect(q.dequeue()).toBeFalsy();
    })



   
})

 