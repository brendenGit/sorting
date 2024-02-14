function bubbleSort(arr) {
    //bubble up an item to the back of the list if it is higher'
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;