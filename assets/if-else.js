/**
 * If - Else
 */

 /** Cac gia tri khi convert sang boolean la false:
  * 0
  * false
  * '' - ""
  * undefined
  * NaN
  * null
  */

var isSuccess = 1 < 2;

if (isSuccess) {

    console.log('Dung');

} else {

    console.log('Sai');

}

/**--------------------- */

var fullName = 'Ngoc Hieu';

if (fullName) {

    console.log('Dung');

} else {

    console.log('Sai');

}


// Câu lệnh rẽ nhánh IF - ELSE

var date = 3;

if (date === 2) {
    console.log('day la thu 2');
} else if (date === 3) {
    console.log('day la thu 3');
} else if (date === 4) {
    console.log('day la thu 4');
} else {
    console.log('No day');
}
