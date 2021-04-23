/***
 * Given a Target word and a list of letters.
 * Check if the word can be constructed from the list.
 * Return Boolean for result
 * */

// Recursive Solution

// function canSearch(target, wordlist) {
//     if (target === '') return true;

//     for (let word of wordlist) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             if (canSearch(suffix, wordlist)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Memoization Solution
function canSearch(target, wordlist, memo = {}) {
    if (target in wordlist) return memo[target];
    if (target === '') return true;

    for (let word of wordlist) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canSearch(suffix, wordlist, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

test_1 = canSearch('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
test_2 = canSearch('bananna', ['an', 'n', 'ban', 'a', 'b']);
test_3 = canSearch('test', ['es', 'tt', 'st', 'tes']);
console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
