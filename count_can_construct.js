/***
 * Given a Target word and a list of letters.
 * Check the number of ways the word can be constructed from the list.
 * Return Count [int] for result
 * */

// Recursive Solution
function countConstruct(target, wordList) {
    if (target === '') return 1;
    let numWaysCount = 0;
    for (let word of wordList) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWays = countConstruct(suffix, wordList);
            numWaysCount += numWays;
        }
    }
    return numWaysCount;
}

//  Memoized Solution

function memoCountConstruct(target, wordList, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let numWaysCount = 0;
    for (let word of wordList) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWays = memoCountConstruct(suffix, wordList, memo);
            numWaysCount += numWays;
        }
    }
    memo[target] = numWaysCount;
    return numWaysCount;
}

// test_1 = countConstruct('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
// test_2 = countConstruct('bananna', ['an', 'n', 'ban', 'a', 'b']);
// test_3 = countConstruct('test', ['es', 'tt', 'st', 'tes']);
// test_4 = countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);

test_1 = memoCountConstruct('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
test_2 = memoCountConstruct('bananna', ['an', 'n', 'ban', 'a', 'b']);
test_3 = memoCountConstruct('test', ['es', 'tt', 'st', 'tes']);
test_4 = memoCountConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);