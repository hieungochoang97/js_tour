// /**
//  * Tạo biến age lưu số tuổi bất kì
// Tạo biến pi để lưu số PI (làm tròn tới 2 số thập phân)
// Tạo biến bonusPoint gán giá trị là số điểm bạn sẽ đạt được nếu vượt qua toàn bộ test case của bài tập này
//  */

//  var age = 23;
//  var pi = 3.14;
//  var bonusPoint = 69;

//  /**
//   * Tạo biến fullName và gán tên bất kì.
// Tạo biến myGirlFriendName và gán tên gấu của bạn. Nếu không có gấu thì gán chuỗi gì cũng được.
// Tạo biến currentLanguage và gán giá trị là tên ngôn ngữ lập trình bạn đang học tại khóa học này.
//   */

//   var fullName = 'Hoang Ngoc Hieu';
//   var myGirlFriendName = 'Nguyen Minh Hieu';
//   var currentLanguage = 'javascript';

//   /**
//    * Kiểm tra biến input có phải là chuỗi hay không. Là chuỗi gán true cho output, không phải là chuỗi gán false cho output.
//    */

//   function run(input) {
//     var output;
    
//     if(typeof input === 'string') {
//         output = true;
//     } else {
//         output = false;
//     }

//     return output;
// }

// run(123);

// console.log(run(123));



/**================NUMBER=============== */

var pi = 3.14;
var a = 20;
var d = 100000.00000;
var c = a / 'ac';

console.log(c);

console.log(isNaN(c)); // kiem tra co phai NaN

console.log(a.toString()); //number type -> string type

console.log(pi.toFixed()); // làm tròn số

console.log(d.toFixed(2)); // lấy 2 số sau dấu chấm

/**
 * Cho biến number có thể là số bất kì. Hãy chuyển đổi kiểu dữ liệu của biến number sang string.
 */

// function numberToString(number) {
//   return number.toString();
// }

// numberToString(30101997);
// console.log(numberToString(30101997));


/**
 * Cho biến pi có giá trị là 3.141592653589793. Hãy rút gọn giá trị đó chỉ còn hai số phần thập phân.
 */

// function run(pi) {
//   return pi.toFixed(2);
// }

// run(3.141592653589793);
// console.log(run(3.141592653589793));


/**
 * Cho trước biến number có giá trị là một số bất kì. Hãy kiếm tra xem number có phải là số nguyên dương hay không và lưu kết quả vào biến result.
 */

// function run(number) {
    
//   if (number > 0) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }

// run(0);
// var x = run(0);
// console.log(x);