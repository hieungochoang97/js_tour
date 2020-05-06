/**
 * Cho biến x, y và z là các giá trị số ngẫu nhiên:

    Nhân đôi giá trị của x
    Chia 3 giá trị của y
    Gán z bằng số dư của z / 2
 */

function run(x, y, z) {
    
    x = x * 2;
    y = y / 3; 
    z = z % 2;

    return 'x is ' + x + ' and y is ' + y + ' and z is ' + z;
}

run(1, 3, 3);

console.log(run(1, 3, 3));
