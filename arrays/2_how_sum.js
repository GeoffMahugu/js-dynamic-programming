/***
 * Given a Target and an array of numbers, 
 * Return an array of numbers equivalent to the sum of the target
 * Return [a+b+c]=Target as result
 * */

// Tabular solution
// m = target
// n = numbers.length
// Time: O(m^2*n)
// Space: O(m)


function howSum(target, numbers) {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; ++i) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }
    return table[target];
}


test_1 = howSum(7, [2, 3]);
test_2 = howSum(7, [5, 2, 3, 4, 7]);
test_3 = howSum(7, [2, 4]);
test_4 = howSum(8, [2, 3, 5]);
test_5 = howSum(300, [7, 14]);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);
console.log(`Test_5 -- `, test_5);