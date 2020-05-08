/**
 * Tạo biến age lưu số tuổi bất kì
Tạo biến pi để lưu số PI (làm tròn tới 2 số thập phân)
Tạo biến bonusPoint gán giá trị là số điểm bạn sẽ đạt được nếu vượt qua toàn bộ test case của bài tập này
 */

 var age = 23;
 var pi = 3.14;
 var bonusPoint = 69;

 /**
  * Tạo biến fullName và gán tên bất kì.
Tạo biến myGirlFriendName và gán tên gấu của bạn. Nếu không có gấu thì gán chuỗi gì cũng được.
Tạo biến currentLanguage và gán giá trị là tên ngôn ngữ lập trình bạn đang học tại khóa học này.
  */

  var fullName = 'Hoang Ngoc Hieu';
  var myGirlFriendName = 'Nguyen Minh Hieu';
  var currentLanguage = 'javascript';

  /**
   * Kiểm tra biến input có phải là chuỗi hay không. Là chuỗi gán true cho output, không phải là chuỗi gán false cho output.
   */

  function run(input) {
    var output;
    
    if(typeof input === 'string') {
        output = true;
    } else {
        output = false;
    }

    return output;
}

run(123);

console.log(run(123));
