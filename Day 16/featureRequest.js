// Feature Request:

// Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(factorial(5));
console.log(fibonacci(6));

// Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.

function sumArray(arr, n) {
    if (n <= 0) return 0;
    return sumArray(arr, n - 1) + arr[n - 1];
}
function maxArray(arr, n) {
    if (n === 1) return arr[0];
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
}
let array = [1, 2, 3, 4, 5];
console.log(sumArray(array, array.length));
console.log(maxArray(array, array.length));

// String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}
console.log(reverseString("hello"));
console.log(isPalindrome("racecar"));

// Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}
function countOccurrences(arr, target, n) {
    if (n <= 0) return 0;
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArray, 5));
console.log(countOccurrences(array, 3, array.length));

// Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}
function treeDepth(node) {
    if (node === null) return 0;
    let leftDepth = treeDepth(node.left);
    let rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
inOrderTraversal(root);
console.log(treeDepth(root));

// Day 16 Completed...