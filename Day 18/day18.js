// Day 18: Algorithms

// Tasks/Activities
// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log('Bubble Sorted Array:', arr);
    return arr;
}

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

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
    console.log('Selection Sorted Array:', arr);
    return arr;
}

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

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
console.log('Quicksorted Array:', quickSort([3, 6, 8, 10, 1, 2, 1]));


// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

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

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

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


// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log('Character Counts:', charCount);
    return charCount;
}
const str = "hello world";
countCharacters(str);

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

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
    console.log('Longest Substring Length:', maxLength);
    return maxLength;
}
const str1 = "hello world";
longestSubstring(str1);

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log('Rotated Array:', rotateArray([1, 2, 3, 4, 5], 2));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

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
console.log('Merged Array:', mergeArrays([1, 3, 5], [2, 4, 6]));


// Activity 5: Dynamic Programming (Optional)

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log('Fibonacci Sequence:', fib.slice(1));
    return fib.slice(1);
}
fibonacci(10);

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    console.log("Maximum value: ", dp[n][capacity]);
    return dp[n][capacity];
}
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
knapsack(values, weights, capacity);


// Day 18 Completed...