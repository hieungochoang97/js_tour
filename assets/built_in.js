/*
Alert
Console
Confirm
Prompt
Set timeout
Set interval
*/

var fullName = 'Hoang Ngoc Hieu';

alert(fullName);
console.log(fullName);

confirm('Tuoi cua ban la:');

prompt('tuoi cua ban la:');

setTimeout(function() {
    alert('thong bao');
}, 1000) // thực hiện câu lệnh sau 1 khoảng thời gian

setInterval(function() {
    console.log('day la log');
}, 1000); //chạy 1 đoạn code liên tục sau 1 khoảng thời gian.