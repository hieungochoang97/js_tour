var myArray = [
    'Html',
    'CSS',
    'Javascript',
    'Bootstrap',
    null,
    undefined,
    function() {

    }
];

console.log(myArray);
console.log(myArray[3]); // lay phan tu so 3

/**
 * Cho biến couldBeAnything có thể là bất cứ kiểu dữ liệu gì. Hãy kiểm tra nếu biến cho trước là array thì gán true cho result. Các trường hợp khác gán false cho result.
 */

// function checkIsArray(couldBeAnything) {
//     if (Array.isArray(couldBeAnything)) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }
// checkIsArray(['a','b','c']);
// console.log(checkIsArray(['a','b','c']));

/**
 * Cho biến input có thể là array bất kì. Hãy gán cho biến result có giá trị bằng giá trị của phần tử cuối cùng trong mảng input.
 */

function getLastElementOfArray(input) {

    var result;
    result = input[input.length - 1];
    return result;
}
getLastElementOfArray([
    1,
    2,
    3
]);
console.log(getLastElementOfArray([
    1,
    2,
    3
]));