/***
 * Given an array of numbers
 * Write a function function solution(A) that takes in an array of numbers and returns the umber that is not paired
 * and moves the other elements to the right by 1 index.
 * Given A = [9,3,9,3,9,7,9]
    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
 * Return 7
 * */


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const pairHash = {};
    for (let i of A) {
        if (pairHash[i]) {
            pairHash[i] += 1
        } else {
            pairHash[i] = 1
        }
    }
    for (let n in pairHash) {
        if (pairHash[n] === 1) return Number(n);
    }
}

test_1 = solution([9, 3, 9, 3, 9, 7, 9]);
test_2 = solution([2, 4, 2, 3, 6, 4, 2, 6]);


console.log(`Test_1 -- `, test_1); // 7
console.log(`Test_2 -- `, test_2); // 3