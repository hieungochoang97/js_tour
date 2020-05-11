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


/** LAM VIEC VOI MANG P2 */
/*
    Array methods :
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Hoang Ngoc Hieu',
        coin: 100000
    },
    {
        id: 2,
        name: 'Nguyen Minh Hieu',
        coin: 20000
    },
    {
        id: 3,
        name: 'Trieu Van Tu',
        coin: 50000
    },
    {
        id: 4,
        name: 'Xinzhao',
        coin: 0
    },
    {
        id: 5,
        name: 'Yasuo',
        coin: 10000000
    },
    {
        id: 5,
        name: 'Zed',
        coin: 0
    },
    {
        id: 6,
        name: 'Nguyen Minh Hieu',
        coin: 40000
    }
];

courses.forEach(function(course) {
    console.log(course);
}) // call back

console.log('========================');

var isFree = courses.every(function(course, index) {
    console.log(index);
    return course.coin === 0;
})
console.log(isFree);

console.log('========================');

var isFree = courses.some(function(course, index) {
    console.log(index);
    return course.coin === 0;
})
console.log(isFree);

console.log('========================');

var course = courses.find(function(course, index) {
    return course.name === 'Nguyen Minh Hieu';
})
console.log(course);

console.log('========================');

var course = courses.filter(function(course, index) {
    return course.name === 'Nguyen Minh Hieu';
})
console.log(course); 