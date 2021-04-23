/**
 * You are a taveler in a 2D grid. You begin at the top-lefy corner and tour
 * goal is to travel to the bottom right corner. You can only move down/right.
 *
 * Q: How many ways can you travel to the goal on a grid with dimensions m*n
 * Write a function 'gridTravelller(m,n) to do the calculation'
 * */


// Tabular Solution
// O(mn)
function gridTraveller(m, n) {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];

            if (table[i + 1]) table[i + 1][j] += current;
            if ([j + 1]) table[i][j + 1] += current;
        }
    }
    return table[m][n];
}

test_1 = gridTraveller(1, 1);
test_2 = gridTraveller(2, 3);
test_3 = gridTraveller(3, 2);
test_4 = gridTraveller(3, 3);
test_5 = gridTraveller(18, 18);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);
console.log(`Test_5 -- `, test_5);