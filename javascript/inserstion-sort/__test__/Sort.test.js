"use strict";

const insertionSort = require("../insertion");
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
describe("Insertion Sort", () => {
    beforeEach(() => {
        consoleSpy.mockClear()
      })
    it("Can successfully sort an array", () => {
        expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
    });
 
    // it("Cant sort empty array", () => {
    //     insertionSort([]).printResults()
    //     expect(console.log).toBeCalledTimes(1)
    // });
    it("Can sort an array with negative numbers", () => {
        expect(insertionSort([-8, 4, 23, 42, 16, 15])).toEqual([-8, 4, 15, 16, 23, 42]);
    });
});