
function partition(arr, start, end) {

    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] <= pivotValue) {

            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    quickSortIterative(arr, start, index - 1);
    quickSortIterative(arr, index + 1, end);
}

function quickSortIterative(arr) {
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);


    while (stack[stack.length - 1] >= 0) {

        let end = stack.pop();
        let start = stack.pop();

        let pivotIndex = partition(arr, start, end);


        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}


module.exports = { partition, quickSortIterative, quickSortRecursive };