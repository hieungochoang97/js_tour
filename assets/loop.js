// vong lap - loop

/**
 * For - lặp với điều kiện đúng
 * for/in - lặp qua key của đối tượng
 * for/of - lặp qua value của đối tượng
 * while - lặp khi điều kiện đúng
 * do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

 // for loop

//  for (var i = 1; i <= 20; i++) {
//      console.log(i);
//  }


// var myArray = [
//     'Javascript',
//     'Html',
//     'Css',
//     'Dart',
//     'Ruby',
//     'Python'
// ];
// var arrayLength = myArray.length;
// for (i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

/**=========================================== */

// For/in loop

// var myInfo = {
//     name: 'Ngoc hieu',
//     age: 23
// }
// for (var key in myInfo) {
//     console.log(key);
//     console.log(myInfo[key]);
// }

// /**=========================================== */

// var languages = [
//     'JS',
//     'HTML',
//     'CSS'
// ];

// for (var key in languages) {
//     console.log(key);
//     console.log(languages[key]);
// }


// /**=========================================== */

// var myString = 'Javascript';

// console.log(myString);

// for (var key in myString) {
//     // console.log(key);
//     console.log(myString[key]);
// }


// For/of loop

// var languages = [
//     'Javascript',
//     'HMTL',
//     'CSS'
// ]

// for (var value of languages) {
//     console.log(value);
// }

// // /**=========================================== */

// var myString = 'ABCDEF';

// for (var value of myString) {
//     console.log(value);
// }

// // /**=========================================== */

// var myInfo = {
//     name: 'Ngoc Hieu',
//     age: 23
// };

// for (var value of Object.keys(myInfo)) {
//     console.log(value);
// }

// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }


// White loop

// var i = 0;

// while (i <= 20) {
//     i++;
//     console.log(i);
// }

/**=========================================== */

// var myArr = [
//     'JS',
//     'HMTL',
//     'CSS'
// ];

// var i = 0;

// while (i < myArr.length) {
//     console.log(myArr[i]);
//     i++;
// }


// do/while loop

var i = 0;

do {
    i++;
    console.log(i);
} while (i < 10);

/**=========================================== */
var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('Nap the lan +', i);

    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3);