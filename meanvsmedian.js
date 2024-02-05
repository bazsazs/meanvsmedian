function meanVsMedian(arr) {
    const mean = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const median = sortedArr[Math.floor(sortedArr.length / 2)];

    if (mean > median) {
        return 'mean';
    } else if (median > mean) {
        return 'median';
    } else {
        return 'same';
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const result = meanVsMedian(arr);
console.log(result); // Output will be 'median'
