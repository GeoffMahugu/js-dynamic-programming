/**
 * 
    Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.

    twoNumberSum(5, [1, 2, 3, 4]);
    If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum. You can assume that there will be at most one pair of numbers summing up to the target sum.

    Tests to run
    twoNumberSum(10, [3,5,-4,8,11,1,-1,6]);
    twoNumberSum(15, [15]);
    twoNumberSum(-5, [-7, -5, -3, -1, 0, 1, 3, 5, 7]);
 * 
 * */





// Solution 1 - O(n^2)
function twoNumberSum(target, arr) {
    // Add Edge cases - Empty array, 
    // 1. First loop through. 
    // 2. Second loop 
    //    - Check if current == init current pass
    //    - Check if sum to target
    // No value return empty
    let returnVal = [];
    for (let curr of arr) {
        for (let next of arr) {
            if (next !== curr) {
                // proceed
                const sumation = curr + next;
                if (sumation === target) {
                    returnVal = [curr, next];
                }
            }
        }
    }
    return returnVal;
}

// Solution 2
function twoNumberSum(target, arr) {
    let sumComplementMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (sumComplementMap.has((target - arr[i]))) {
            return [(target - arr[i]), arr[i]];
        }
        sumComplementMap.set(arr[i], 1);
    }
    return [];
}

test_1 = twoNumberSum(5, [1, 2, 3]);
test_2 = twoNumberSum(10, [3, 5, -4, 8, 11, 1, -1, 6]);
test_3 = twoNumberSum(15, [15]);
test_4 = twoNumberSum(-5, [-7, -5, -3, -1, 0, 1, 3, 5, 7]);

console.log('Test 1', test_1);
console.log('Test 2', test_2);
console.log('Test 3', test_3);
console.log('Test 4', test_4);
