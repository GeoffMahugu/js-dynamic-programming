/***
 * Given an array and number, shift elements of the array A by 1, last index being first
 * Write a function function solution(A, K) that shifts last index to first index 
 * and moves the other elements to the right by 1 index.
 * Given A = [3, 8, 9, 7, 6] ; K = 3
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 * Return [9, 7, 6, 3, 8]
 * */


function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let shuffArray = A;
    for (let count = 1; count <= K; count++) {
        const newArr = [];
        const lastIndex = shuffArray.slice(-1)[0];
        newArr[0] = lastIndex;
        for (let num = 0; num <= (shuffArray.length - 2); num++) {
            newArr.push(shuffArray[num])
        }
        shuffArray = newArr;
    }
    return shuffArray;
}

test_1 = solution([3, 8, 9, 7, 6], 3);
test_2 = solution([5, 2, 3, 4, 7], 7);


console.log(`Test_1 -- `, test_1); // [ 9, 7, 6, 3, 8 ]
console.log(`Test_2 -- `, test_2); // [ 4, 7, 5, 2, 3 ]