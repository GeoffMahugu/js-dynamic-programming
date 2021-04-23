/***
 * Given a Target and an array of numbers, return boolean on 
 * weather or not you can generate the target from the list of values
 * Return Boolean for result
 * */

// Tabular solution
// m = target
// n = numbers.length
// Time: O(mn)
//  Space: O(m)
function canSum(target, numbers) {
    const table = Array(target + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[target];
}

test_1 = canSum(7, [2, 3]);
test_2 = canSum(7, [5, 2, 3, 4, 7]);
test_3 = canSum(7, [2, 4]);
test_4 = canSum(8, [2, 3, 5]);
test_5 = canSum(300, [7, 14]);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);
console.log(`Test_5 -- `, test_5);