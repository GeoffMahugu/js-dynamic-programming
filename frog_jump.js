/***
 * Given a frog at position X and wants to get to position Y and frog can only jump a distance of D
 * Write a function solution(X,Y,D) that return the number of steps the frog needs to jump in order 
 * to get as close to the target as possible.
 * Give  
 * X = 10
  Y = 85
  D = 30

 * Return 3
 * */


function solution(X, Y, D) {
    const returnCount = Math.round((Y - X) / D);
    return returnCount;
}

test_1 = solution(10, 85, 30);
test_2 = solution(55, 200, 15);


console.log(`Test_1 -- `, test_1); // 3
console.log(`Test_2 -- `, test_2); // 10



