// Lam viec voi chuoi 

var myString = ' Tu hoc js tai google js js js google ';
console.log(myString);
// leghth
console.log(myString.length); 

// indexOf
console.log(myString.indexOf('js', 20));
console.log(myString.lastIndexOf('js'));
// console.log(myString.search('js'));

// cut string (start num, end num)
console.log(myString.slice(3, 9));

// replace - ghi đè/ sửa
console.log(myString.replace('js', 'javascript'));
console.log(myString.replace(/js/g, 'javascript'));

// convert to uper case -> chữ thường -> chữ hoa
console.log(myString.toUpperCase());
 
// convert to lower case - chữ hoa -> chữ thường
console.log(myString.toLowerCase());

// trim - cắt khoảng trắng thừa 2 bên
console.log(myString.trim());

//split - điểm chung để cắt tách
var languages = 'javascript, php, ruby';
console.log(languages.split(','))

var a = 'javascript';
console.log(a.split(''));

//get a character by index - lấy giá trị theo index
var myString2 = 'Hoang Ngoc Hieu';

console.log(myString2.charAt(11));
console.log(myString2[11]);



// WORK
/**
 * Cho trước biến commentText là một chuỗi bất kì. Hãy lưu độ dài chuỗi của commentText vào biến textLength.
 */

// function run(commentText) {
    
//     var textLength = commentText.length;

//     return textLength;
// }

// run('Tu hoc Javascript');
// console.log(run('Tu hoc Javascript'));


/**
 * Cho statusText là một biến có thể là bất cứ kiểu dữ liệu gì.

Nếu statusText là chuỗi và có độ dài từ 1 trở lên hãy gán true cho result.
Các trường hợp khác hãy gán false cho result.
 */

// function run(statusText) {
    
//     if (statusText.length > 1) {
//         result = true;
//     } else {
//         result = false;
//     }

//     return result;
// }

// run('10');
// console.log(run('10'));

/**
 * Cho trước biến title và description là các chuỗi có nội dung bất kì.

Nếu cả hai biến cho trước giá trị đều có chứa chuỗi Javascript thì gán true cho result.
Trường hợp khác gán false cho result.
 */

// function run(title, description) {
    
//     if (title.indexOf('Javascript') != -1 && description.indexOf('Javascript') != -1) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// run ('Javascript cơ bản', 'Học Javascript cơ bản tại F8');

// console.log(run ('Javascript cơ bản', 'Học Javascript cơ bản tại F8'));

/** 
 * Cho trước biến title có giá trị 'Học Javascript tại F8'.

Cắt lấy chuỗi Javascript từ biến cho trước và lưu vào biến language
Cắt phần chuỗi còn lại (từ sau chuỗi Javascript) và lưu vào biến rest
 */

// function run(title) {

//     var language = title.slice(4, 14);
//     var rest = title.slice(14);

//     return `Language is ${language} and rest is ${rest}`;
// }

// run('Học Javascript tại F8');

// console.log(run('Học Javascript tại F8'));


/**
 * Cho biến content là chuỗi bất kì có chứa một hoặc nhiều chuỗi JS. Hãy thay thế toàn bộ chuỗi JS tìm được trong giá trị của biến content thành Javascript.
 */


// function run(content) {

//     return content.replace('JS', 'Javascript');
//     // return content.replace(/JS/g, 'Javascript');

// }

// run('JS và js');

// console.log(run('JS và js'));



/**
 * Cho biến a và b có giá trị là các chuỗi bất kì.

Hãy chuyển đổi toàn bộ giá trị của biến a trở thành kiểu chữ thường
Hãy chuyển đổi toàn bộ giá trị của biến b trở thành kiểu chữ IN HOA
 */

// function run(a, b) {

//     a = a.toLowerCase();
//     b = b.toUpperCase();
//     return a + '|' + b;

// }

// run('HI', 'hi');

// console.log(run('HI', 'hi'));



/**
 * Cho trước biết statusText có giá trị là chuỗi bất kì, biến này là tượng trưng cho giá trị người dùng nhập vào khi đăng status lên trang cá nhân - nội dung status của người dùng viết sẽ được lưu vào biến này.

Vì là dữ liệu người dùng tự nhập nên đôi khi họ sẽ viết thừa những khoảng trắng (dấu space) ở trước hoặc sau nội dung chính. Việc này đôi khi gây ra những vấn đề / bug trong ứng dụng của chúng ta.

Yêu cầu: Hãy loại bỏ khoảng trắng thừa ở phía trước và sau nội dung của biến statusText
 */


// function trimText(statusText) {

//     return statusText.trim();

// }

// trimText('   askjdhaskjdhsakjdh   ');

// console.log(trimText('   askjdhaskjdhsakjdh   '));