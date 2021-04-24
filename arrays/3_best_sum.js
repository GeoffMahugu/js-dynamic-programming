/***
 * Given a Target and an array of numbers, 
 * Return an array with the least amount of numbers suming up to the target value
 * Given bestSum(5, [2,1,3,6])
 * Return [2,3]
 * */

// Tabular solution
// m = target
// n = numbers.length
// Time: O(mn)
// Space: O(m)
function bestSum(target, numbers) {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; ++i) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                if (!table[i + num] || combination.length < table[i + num].lenght) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }
    return table[target];
}

test_1 = bestSum(7, [2, 3]);
test_2 = bestSum(7, [5, 2, 3, 4, 7]);
test_3 = bestSum(7, [2, 4]);
test_4 = bestSum(8, [2, 3, 5]);
test_5 = bestSum(300, [7, 14]);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);
console.log(`Test_5 -- `, test_5);