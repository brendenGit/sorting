function radixSort(arr) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    let results = arr.slice(); // Copy the array to avoid modifying the original
    const maxDigits = Math.max(...arr).toString().length;

    for (let p = 0; p < maxDigits; p++) {
        // Clear buckets on each iteration
        buckets.forEach(bucket => bucket.length = 0);
        for (let number of results) {
            const digit = getDigit(number, p);
            buckets[digit].push(number);
        }
        results = [].concat(...buckets);
    }
    return results;
}

function getDigit(number, place) {
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

module.exports = radixSort;