/***
 * Given a Target word and a list of letters.
 * Check if the word can be constructed from the list.
 * Return Boolean for result
 * */

// Recursive Solution

function canConstruct(target, wordlist) {
    if (target === '') return true;

    for (let word of wordlist) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordlist)) {
                return true;
            }
        }
    }
    return false;
}

// Memoization Solution
function memoCanConstruct(target, wordlist, memo = {}) {
    if (target in wordlist) return memo[target];
    if (target === '') return true;

    for (let word of wordlist) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (memoCanConstruct(suffix, wordlist, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

// Tabular Solution
// m = target
// n = numbers.length
// Time: O(m^2*n)
// Space: O(m)
function tabularCanConstruct(target, wordlist) {
    const table = Array(target + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordlist) {
                // Check if word is the target slice and update table value at end of slice length.
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    // console.log(table);
    return table[target.length];
}

// test_1 = canConstruct('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
// test_2 = canConstruct('bananna', ['an', 'n', 'ban', 'a', 'b']);
// test_3 = canConstruct('test', ['es', 'tt', 'st', 'tes']);

test_1 = memoCanConstruct('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
test_2 = memoCanConstruct('bananna', ['an', 'n', 'ban', 'a', 'b']);
test_3 = memoCanConstruct('test', ['es', 'tt', 'st', 'tes']);

// test_1 = tabularCanConstruct('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
// test_2 = tabularCanConstruct('bananna', ['an', 'n', 'ban', 'a', 'b']);
// test_3 = tabularCanConstruct('test', ['es', 'tt', 'st', 'tes']);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
