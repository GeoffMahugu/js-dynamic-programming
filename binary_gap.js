/***
 * Given a number N, return the highest Binary gap
 * Write a function solution(N) that return the highest binay gap
 * 9 has a binary rep of 1001 and thus the binary gap is 2
 * 529 has a binary rep of 1000010001 contains two binary gaps: one of length 4 and one of length 3.
 * 15 has binary representation 1111 and has no binary gaps.
 * 32 has binary representation 100000 and has no binary gaps.
 * Return 3
 * */


function solution(N) {
    // return int
    // return 0 if no binary gab.
    const binaryRep = N.toString(2);
    if (binaryRep[0] === 0) return 0;
    let binarysplit = (binaryRep.slice(1));

    if (!binarysplit.includes(1)) return 0;

    binarysplit = binarysplit.split(1);
    let sliceCount = Number();
    for (let num of binarysplit) {
        const getCount = num.length;
        if (getCount >= sliceCount) sliceCount = getCount;
    }
    return sliceCount;
}

test_1 = solution(529);
test_2 = solution(32);
test_3 = solution(10);
test_4 = solution(15);


console.log(`Test_1 -- `, test_1); // 4
console.log(`Test_2 -- `, test_2); // 0
console.log(`Test_3 -- `, test_3); // 1
console.log(`Test_4 -- `, test_4); // 0




