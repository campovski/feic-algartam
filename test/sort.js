const assert = require('assert');
const sort = require('../src/sort');

describe('Sort', function () {
    it('should return sorted array with bubbleSort', function () {
        const array = [6, 4, 7, 8, 1, 3, 0, 2, 5, 9];
        const sorted = sort.bubbleSort(array);
        for (let i = 0; i < sorted.length; i++) {
            assert.strictEqual(sorted[i], i);
        }
    });

    it('should return sorted array with insertionSort', function () {
        const array = [6, 4, 7, 8, 1, 3, 0, 2, 5, 9];
        const sorted = sort.insertionSort(array);
        for (let i = 0; i < sorted.length; i++) {
            assert.strictEqual(sorted[i], i);
        }
    });

    it('should return sorted array with selectionSort', function () {
        const array = [6, 4, 7, 8, 1, 3, 0, 2, 5, 9];
        const sorted = sort.selectionSort(array);
        for (let i = 0; i < sorted.length; i++) {
            assert.strictEqual(sorted[i], i);
        }
    });
});
