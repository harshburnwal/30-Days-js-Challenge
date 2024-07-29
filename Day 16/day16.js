// Day 16: Recursion

// Tasks/Activities:
// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55


// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr, n) {
    if (n <= 0) return 0;
    return sumArray(arr, n - 1) + arr[n - 1];
}
let array = [1, 2, 3, 4, 5];
console.log(sumArray(array, array.length));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr, n) {
    if (n === 1) return arr[0];
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
}
console.log(maxArray(array, array.length));


// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArray, 5));
console.log(binarySearch(sortedArray, 10));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target, n) {
    if (n <= 0) return 0;
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}
console.log(countOccurrences(array, 3, array.length));
console.log(countOccurrences(array, 10, array.length));


// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

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
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
inOrderTraversal(root);

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function treeDepth(node) {
    if (node === null) return 0;
    let leftDepth = treeDepth(node.left);
    let rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
console.log(treeDepth(root));

// Day 16 Completed...