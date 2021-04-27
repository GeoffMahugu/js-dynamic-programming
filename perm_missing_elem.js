/**
 * Given an array consisting of N different integers is given. 
 * The array contains integers in the range [1..(N + 1)]
 * Find the missing element
 * Given A = [2,3,1,5]
 *  A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
 * Missing Element is 4
 */
function solution(A) {
    // return an Int
    // Sort Array,
    // Loop throught and check index with value
    // return miss-match val.
    if (!A.length) return 1;
    const sortedArr = A.sort();
    const lastNum = sortedArr.slice(-1)[0];
    const firstNum = sortedArr[0];
    let missingNum = 1;
    for (let i = firstNum; i < lastNum; i++) {
        if (!sortedArr.includes(i)) missingNum = i;
    }
    return missingNum;
}


test_1 = solution([4, 8, 9, 7, 6]); // 5
test_2 = solution([2, 3, 1, 5]); // 4


console.log(`Test_1 -- `, test_1); // [ 9, 7, 6, 3, 8 ]
console.log(`Test_2 -- `, test_2); // [ 4, 7, 5, 2, 3 ]

// This solution needs optimization for time complexity.