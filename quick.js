/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx, endIdx) {
    const pivot = arr[startIdx];
    let swapIdx = startIdx;

    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }

    [arr[startIdx], arr[swapIdx]] = [arr[swapIdx], arr[startIdx]];
    return swapIdx;
}

function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx < rightIdx) {
        let pivotIndex = pivot(arr, leftIdx, rightIdx);
        quickSort(arr, leftIdx, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, rightIdx);
    }
    return arr;
}

const test = quickSort([10,5,6,2,22,11,3])
console.log(test);

module.exports = quickSort;