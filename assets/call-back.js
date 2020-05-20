// call back

// la ham ( function ) duoc truyen qua doi so
// khi goi ham khac

/**
 * 1. la ham
 * 2. duoc truyen qua doi so
 * 3. duoc goi lai trong ham nhan doi so
 */

// function myFunction(param) {
//     param('Hoc lap trinh');
// }
// function myCallback(value) {
//     console.log('value:', value)
// }
// myFunction(myCallback);


// Array.prototype.map2 = function(callback) {
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i], i);
//     }
// }

// var courses = [
//     'javascript',
//     'html',
//     'css'
// ];

// var htmls = courses.map2(function(course, index) {
//     console.log(index, course);
// });

// var htmls = courses.map(function(get) {
//     return `<h2>${get}</h2>`
// });

// console.log(htmls);

// for (var i = 0; i < htmls.length; i++) {
//     console.log(htmls[i]);
// }


// Bai tap - xay dung cac phuong thuc de lam viec voi array. - Empty elements of array?

var courses = [
    'javascript',
    'html',
    'css'
];

courses.length = 10; // array rong

for (var index in courses) {
    console.log(courses[index]);
}

var cu = new Array(10);

cu.push('java', 'html', 'css');

console.log(cu);