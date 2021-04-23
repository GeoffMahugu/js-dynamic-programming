/***
 * Given a Target word and a list of letters.
 * Return an array of arrays(2d array) containing ways on how to construct the Target word.
 * Return 2d Array [['ab', 'c' 'de']] for result
 * */

// Recursive solution
function createAllWords(target, wordList) {
    if (target === '') return [[]];
    let constructArray = [];
    for (let word of wordList) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const retrievedWordsArr = createAllWords(suffix, wordList); // [['bc'],['de']]
            const fullWordArr = retrievedWordsArr.map(arrWords => [word, ...arrWords]) // ['a',['bc'],['de']]
            constructArray.push(...fullWordArr);
        }
    }
    return constructArray;
}

// Memoized solution
function memonCreateAllWords(target, wordList, memo = {}) {
    if (target === '') return [[]];
    let constructArray = [];
    for (let word of wordList) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const retrievedWordsArr = createAllWords(suffix, wordList); // [['bc'],['de']]
            const fullWordArr = retrievedWordsArr.map(arrWords => [word, ...arrWords]) // ['a',['bc'],['de']]
            constructArray.push(...fullWordArr);
        }
    }
    return constructArray;
}






test_1 = createAllWords('abcdefgh', ['ab', 'gh', 'abc', 'cd', 'h', 'def']);
test_2 = createAllWords('bananna', ['an', 'n', 'ban', 'a', 'b']);
test_3 = createAllWords('test', ['es', 'tt', 'st', 'tes']);
test_4 = createAllWords('purple', ['purp', 'p', 'ur', 'le', 'purpl']);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);