/***
 * Given a number, return the nth Fibonacci number
 * Return Count [int] for result
 * */

//  Recursive solution
function fib(num) {
    if (num <= 2) return 1;
    const result = fib(num - 1) + fib(num - 2);
    return result;
}
//  Memoized solution
function memFib(num, memo = {}) {
    if (num in memo) return memo[num];
    if (num <= 2) return 1;
    const result = fib(num - 1) + fib(num - 2);
    memo[num] = result;
    return result;
}

// Tabulation solution
// O(n)
function iterFib(n) {
    const table = Array(n + 1).fill(0);
    // console.log(table);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    // console.log(table);

    return table[n];
}


iterFib(10);

// test_1 = fib(7);
// test_2 = fib(9);
// test_3 = fib(12);
// test_4 = fib(21);

// test_1 = memFib(7);
// test_2 = memFib(9);
// test_3 = memFib(12);
// test_4 = memFib(21);

test_1 = iterFib(7);
test_2 = iterFib(9);
test_3 = iterFib(12);
test_4 = iterFib(21);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);
