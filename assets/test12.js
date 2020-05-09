/**
 * Bài toán
Tại F8, bạn sẽ được tặng coin sau khi hoàn tất việc xác minh tài khoản khi đăng ký với email và mật khẩu. Với trường hợp đăng ký với google / facebook thì sẽ được tặng coin ngay.

Cho biến socialType thể hiện người dùng đã đăng ký F8 qua kênh nào. Khi socialType có giá trị 'google' hoặc 'facebook' thì người dùng đã đăng ký tài khoản qua mạng xã hội. Khi socialType có giá trị 'email' thì người dùng đăng ký qua email và mật khẩu.

Cho biến isVerified thể hiện người dùng đã xác minh tài khoản hay chưa (trong trường hợp đăng ký với email và mật khẩu). Biến này có kiểu dữ liệu là boolean, true nghĩa là người dùng đã xác minh và false là người dùng chưa xác minh tài khoản.

Bên phải màn hình là đoạn mã kiểm tra xem người dùng đã đủ điều kiện tặng coin hay chưa. Nếu đủ điều kiện tặng coin thì biến result sẽ có giá trị true. Hãy giúp mình hoàn thiện đoạn mã đó.

Bài tập
Trong trường hợp người dùng đăng ký với mạng xã hội biến result cần có giá trị true
Trong trường hợp người dùng đăng ký với email và mật khẩu. Nếu người dùng đã xác minh tài khoản thì result cần có giá trị true
 */

function run(socialType, isVerified) {
    var result;

    if (socialType == 'facebook' || socialType == 'google') {
        result = true;
    } else {
        if (socialType == 'email' && isVerified == true) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

run('facebook', true);

console.log(('facebook', true));





