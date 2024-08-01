// Feature Request:

// Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.

// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}

// Quicksort
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Sorting Algorithm Script
function sortingAlgorithmScript(arr) {
    console.log('Bubble Sort:', bubbleSort([...arr]));
    console.log('Selection Sort:', selectionSort([...arr]));
    console.log('Quicksort:', quickSort([...arr]));
}
sortingAlgorithmScript([5, 3, 8, 4, 2]);

// Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log('Linear Search Index:', i);
            return i;
        }
    }
    console.log('Linear Search Index: -1');
    return -1;
}

// Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log('Binary Search Index:', mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log('Binary Search Index: -1');
    return -1;
}

// Searching Algorithm Script
function searchingAlgorithmScript(arr, target) {
    console.log('Linear Search:', linearSearch(arr, target));
    console.log('Binary Search:', binarySearch(arr.sort((a, b) => a - b), target));
}

searchingAlgorithmScript([5, 3, 8, 4, 2], 4);

// String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.

// Count Character Occurrences
function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
// Longest Substring Without Repeating Characters
function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let usedChars = {};

    for (let i = 0; i < str.length; i++) {
        if (usedChars[str[i]] !== undefined && usedChars[str[i]] >= start) {
            start = usedChars[str[i]] + 1;
        }
        usedChars[str[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}
// String Algorithm Script
function stringAlgorithmScript(str) {
    console.log('Count Characters:', countCharacters(str));
    console.log('Longest Substring:', longestSubstring(str));
}
stringAlgorithmScript('Harsh');


// Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.

// Rotate Array
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
// Merge Sorted Arrays
function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
// Array Algorithm Script
function arrayAlgorithmScript(arr1, arr2, k) {
    console.log('Rotated Array:', rotateArray(arr1, k));
    console.log('Merged Array:', mergeArrays(arr1, arr2));
}
arrayAlgorithmScript([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 3);

// Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).

// Fibonacci Sequence using Dynamic Programming
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(1); // exclude the first element to match the 1-based sequence
}

// Knapsack Problem using Dynamic Programming
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

// Dynamic Programming Script
function dynamicProgrammingScript(n, values, weights, capacity) {
    console.log('Fibonacci Sequence:', fibonacci(n));
    console.log('Knapsack Problem:', knapsack(values, weights, capacity));
}

dynamicProgrammingScript(10, [60, 100, 120], [10, 20, 30], 50);


// Day 18 Completed...