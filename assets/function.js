function show() {
    console.log('Hello');
} // function

show(); // call function

// mot khoi ma, lam 1 viec cu the.


/**
 * Tạo hàm showMessage
Trong hàm vừa tạo, thêm console.log('Học JS tại F8');
Gọi tới hàm vừa tạo
Code viết trong cặp ngoặc {} của hàm chỉ được thực thi khi hàm được gọi.
 */
function showMessage() {
    console.log('Học JS tại F8');
}
showMessage();


/**Tham so trong function */

function writeLog (message, message2) {
    console.log(message, message2);
}
writeLog('test', 'test');

// Arguments?

function write() {
    console.log(arguments);
}
write('a', 'b', 'c', '4');

function write() {
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - `; 
    }
    console.log(myString);
}
write('a', 'b', 'c', 'd');

/**
 * Tạo hàm showMessage và định nghĩa tham số message cho hàm này
Trong cặp {} của hàm vừa tạo thêm mã sau: alert(message);
Gọi hàm showMessage và truyền đối số cho tham số message là một chuỗi bất kì
 */

 function showMessage(message) {
    alert(message);
 }
 showMessage('Javascript');

 /**
  * Tạo hàm writeLog, định nghĩa 2 tham số là prefix và message
Thêm vào trong cặp {} của hàm nội dung: console.log(prefix + ': ' + message);
Gọi hàm writeLog và truyền đối số cho hai tham số đã định nghĩa phía trên với nội dung là các chuỗi tùy ý.
Bài tập trên là ví dụ cho việc tạo hàm writeLog phục vụ công việc ghi lại log khi chương trình của bạn thực thi. Prefix là tiền tố cho nội dung log, message là nội dung log
  */

function writeLog(prefix, message) {
    console.log(prefix + ': ' + message);
}
writeLog('Ho ten', 'Hoang Ngoc Hieu');