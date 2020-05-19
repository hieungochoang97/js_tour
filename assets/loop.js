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


var myArray = [
    'Javascript',
    'Html',
    'Css',
    'Dart',
    'Ruby',
    'Python'
];

var arrayLength = myArray.length;

for (i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

