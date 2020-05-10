function show() {
    console.log('Hello');
} // function

show(); // call function

// // mot khoi ma, lam 1 viec cu the.


// /**
//  * Tạo hàm showMessage
// Trong hàm vừa tạo, thêm console.log('Học JS tại F8');
// Gọi tới hàm vừa tạo
// Code viết trong cặp ngoặc {} của hàm chỉ được thực thi khi hàm được gọi.
//  */
function showMessage() {
    console.log('Học JS tại F8');
}
showMessage();


// /**Tham so trong function */

function writeLog (message, message2) {
    console.log(message, message2);
}
writeLog('test', 'test');

// // Arguments?

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

// /**
//  * Tạo hàm showMessage và định nghĩa tham số message cho hàm này
// Trong cặp {} của hàm vừa tạo thêm mã sau: alert(message);
// Gọi hàm showMessage và truyền đối số cho tham số message là một chuỗi bất kì
//  */

 function showMessage(message) {
    alert(message);
 }
 showMessage('Javascript');

//  /**
//   * Tạo hàm writeLog, định nghĩa 2 tham số là prefix và message
// Thêm vào trong cặp {} của hàm nội dung: console.log(prefix + ': ' + message);
// Gọi hàm writeLog và truyền đối số cho hai tham số đã định nghĩa phía trên với nội dung là các chuỗi tùy ý.
// Bài tập trên là ví dụ cho việc tạo hàm writeLog phục vụ công việc ghi lại log khi chương trình của bạn thực thi. Prefix là tiền tố cho nội dung log, message là nội dung log
//   */

function writeLog(prefix, message) {
    console.log(prefix + ': ' + message);
}
writeLog('Ho ten', 'Hoang Ngoc Hieu');




/** Return trong function */

function plus(a, b) {
    return a + b;
}
var result = plus(2, 8);
console.log(result);


/**Hiểu hơn về function */

// Function trung ten

function a() {
    console.log('a2');
}
function a() {
    console.log('a2'); // function duoc thuc thi
}
a();


// khai bao bien trong ham

function a() {
    var fullName = 'Hoang Ngoc Hieu'
    console.log(fullName); //chi su dung trong ham
}
a();


// function trong function 

function b() {
    function b2() {
        console.log('message 2');
    }
    b2();
}


/**Tạo hàm checkPositiveInteger có tham số là number, hàm này dùng để kiểm tra một số có phải là số nguyên dương hay không.

Nếu number là số nguyên dương hàm sẽ return true
Nếu number không phải số nguyên dương hàm sẽ return false */

function checkPositiveInteger(number) {
    if(number > 0) {
        return true;
    } else {
        return false;
    }
}
var check = checkPositiveInteger(1);
console.log(check);


/**Viết hàm calculateTriangleArea để tính diện tích tam giác. Hàm này nhận hai tham số là a (cạnh đáy), h (chiều cao) và hàm sẽ trả về giá trị là diện tích của tam giác được tính từ hai tham số đã cho. a và h sẽ được truyền các giá trị số nguyên bất kì từ hệ thống test case.

Yêu cầu:

Hãy tạo hàm theo đúng mô tả trên
Trường hợp có một trong các đầu vào không hợp lệ (không phải là số dương) hàm sẽ trả về false */

function calculateTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return false;
    } else {
        return (a * h)/2;
    }
}
var cal = calculateTriangleArea(3.14, 10);
console.log(cal);


/**Viết hàm kiểm tra một chuỗi có nằm trong một chuỗi khác hay không. Đặt tên hàm này là stringInString, hàm có hai tham số lần lượt là needle (chuỗi muốn tìm) và haystack (chuỗi gốc, giá trị của needle sẽ được tìm xem có tồn tại trong haystack hay không)

Yêu cầu:

Tạo hàm stringInString theo mô tả trên
Nếu needle được tìm thấy trong haystack hàm sẽ trả về true
Nếu không tìm thấy needle trong haystack hàm sẽ trả về false
Nếu một trong các giá trị đầu vào không phải chuỗi hàm sẽ trả về false */

function stringInString(needle, haystack) {
    if (needle == 'Javascript') {
        return true;
    } else {
        return false;
    }   
}
var c = stringInString('Javascript', 'Học Javascript tại F8');
console.log(c);

// Cac loai function
/**
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

 function showGame() {
     console.log('Declaration function');
 }

 var showGame2 = function() {
    console.log('Expression function');
 }


 showGame2();