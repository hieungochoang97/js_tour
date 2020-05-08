/**
 * Tại một website bán sách online. Để mua được một cuốn sách bạn cần có số tiền tối thiểu bằng tiền của cuốn sách muốn mua. Nếu số tiền trong tài khoản không đủ thì không thể mua được sách.

Cho trước biến bookCoin là giá tiền của cuốn sách và biến userCoin là số tiền người dùng hiện có.
 */

function run(bookCoin, userCoin) {

    if (userCoin >= bookCoin) {

        return 'Bạn có thể mua cuốn sách này!';

    } else {

        return 'Bạn không thể mua cuốn sách này!';

    }

}

run(700, 50);

console.log(run(700, 50));