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

test_1 = countConstruct('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
test_2 = countConstruct('bananna', ['an', 'n', 'ban', 'a', 'b']);
test_3 = countConstruct('test', ['es', 'tt', 'st', 'tes']);
test_4 = countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);