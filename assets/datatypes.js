/**
 * Datatypes Javascript
 * 
 * 1, Kieu du lieu nguyen thuy - Primitive Data
 * - number
 * - string
 * - boolean
 * - undefined
 * - null
 * - symbol
 * 
 * 2, Kieu du lieu phuc tap - Complex Data
 * - Function
 * - Object
 */


var age = 23; // number
var name = 'Hieu' // string
var issSuccess = true; // boolean


// undefined - chua gan gia tri
var a;
console.log(a);


// null - khong co gi
var b = null;
console.log(b);


// Symboll (unique)
var id = Symbol('id');
var id2 = Symbol('id');
console.log(id); 
console.log(id === id2);


// Function 
var myFunction = function() {
    console.log('Hello World');
}
myFunction();


// Object 
var myObject = {
    name: 'Hieu',
    age: 23,
    myFunction: function () {

    }
}
console.log(myObject);


var myArray = [
    'javascript',
    'html',
    'css'
];
console.log(myArray);


// Kiem tra kieu du lieu
console.log(typeof age);
 