// function solution(A) {
//     let missingInt = 1;
//     const sortedArr = A.sort();

//     if (sortedArr[0] < 1) return 1;

//     for (let i = 1; i <= sortedArr.length; i++) {
//         // console.log(i, sortedArr[i - 1]);
//         if (i !== sortedArr[i - 1]) missingInt = i;
//     }
//     if (missingInt === 1 && A.length > 1) {
//         missingInt = A.length + 1;
//     }
//     return missingInt;
// }
// test_1 = solution([1, 3, 6, 4, 1, 2]);
// test_2 = solution([1, 2, 3]);
// test_3 = solution([-1, 13]);

// console.log(test_1);
// console.log(test_2);
// console.log(test_3);



// function solution(S) {
//     var occurrences = new Array(26);
//     for (var i = 0; i < occurrences.length; i++) {
//         occurrences[i] = 0;
//     }

//     for (var id in S) {
//         occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
//     }
//     var best_char = 'a';
//     var best_res = occurrences[0];

//     for (var i = 1; i < 26; i++) {
//         if (occurrences[i] > best_res) {
//             best_char = String.fromCharCode('a'.charCodeAt(0) + i);
//             best_res = occurrences[i];
//         }
//     }

//     return best_char;
// }
// // solution('hello');
// console.log(solution('ccbbaa'));
// console.log(solution('aabbcc'));
// console.log(solution('aabbbcc'));


import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const { debounce } = lodash;

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class


export default function Autocomplete() {
    const [value, setValue] = useState('');

    const search = event => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        queryResults(nextValue);
    };

    const queryResults = useCallback(
        debounce(nextValue => sendRequest(nextValue), DEBOUNCE_DELAY),
        [],
    );

    const sendRequest = async () => {
        const results = await axios.get(ITEMS_API_URL);
        console.log(results.data);
    };

    return (
        <div className="wrapper">
            <div className="control">
                <input type="text" onChange="{search}" className="input" />
            </div>
            <div className="list is-hoverable" />
        </div>
    );
}
