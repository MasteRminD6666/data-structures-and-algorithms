'use strict';

const { partition, quickSortIterative, quickSortRecursive } = require('../QuickSort');

describe('it should test sort method', () => {

    it('tests quick sort iterative', () => {
        let arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
        quickSortIterative(arr);
        expect(arr).toEqual([-4, -2, 0, 1, 2, 4, 5, 6, 7]);
        console.log(arr);
    });

    it('tests quick sort recursive', () => {
        let arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
        quickSortRecursive(arr);
        expect(arr).toEqual([-4, -2, 0, 1, 2, 4, 5, 6, 7]);
        console.log(arr);
    });

    it('tests partition', () => {
        let arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
        partition(arr);
        expect(arr).toEqual([7, -2, 4, 1, 6, 5, 0, -4, 2]);
        console.log(arr);
    });

});