var languages = [
    'HTML',
    'CSS',
    'JAVASCRIPT'
];

// toString
console.log(languages.toString());

// join
console.log(languages.join(' - '));

// pop - xoa element cuoi array tra ve phan tu da xoa
console.log(languages.pop());

// push - them phan tu vao cuoi mang tra ve do dai mang
console.log(languages.push('Dart', 'Java', 'ABC'));

// shift - xoa phan tu dau va tra ve gia tri
console.log(languages.shift());

// unshift - them phan tu vao dau mang tra ve do dai mang
console.log(languages.unshift('IOS', 'ANDROID'));

// splicing - xoa (vi tri con tro, vi tri xoa, them phan tu), chen
languages.splice(1, 0, 'TOOL');

// concat - noi 2 mang
var languages2 = [
    'APP',
    'ACC'
]

// console.log(languages.concat(languages2));

// // cat phan tu (start num, end num)
// console.log(languages.splice(0, 3));


/** ============= */

/**
 * Cho biến input là mảng bất kì. Hãy chuyển đổi kiểu dữ liệu của input sang chuỗi và gán cho biến result.

Ví dụ:

Input: [1, 2, 3] - Output: '1,2,3'
Input: ['Javascript', 'PHP'] - Output: 'Javascript,PHP'
 */

function arrayToString(input) {
    var result = input.toString();
    return result;
}
arrayToString([
    1,
    2,
    3
]);
console.log(arrayToString([
    1,
    2,
    3
]));

/**
 * Cho trước biến input là array bất kì. Hãy chuyển đổi kiểu dữ liệu biến input sang chuỗi, mỗi giá trị của các phần tử được cách nhau bằng dấu ' - ', gán giá trị sau chuyển đổi cho biến result.

Ví dụ:

Input: [1, 2, 3] - Output: '1 - 2 - 3'
Input: ['Chicken', 'Tiger', 'Monkey'] - Output: 'Chicken - Tiger - Monkey'
 */

 
function arrayToString(input) {
    var result = input.toString();
    result = input.join(' - ');
    return result;
}
arrayToString([
    1,
    2,
    3
]);
console.log(arrayToString([
    1,
    2,
    3
]));


/**
 * Cho biến anArray là mảng bất kì.

Nếu mảng có ít hơn 3 phần tử thì hãy xóa một phần tử đầu mảng đi
Nếu mảng có nhiều hơn 2 phần tử thì hãy xóa hai phần tử cuối mảng đi
Ví dụ:

Input: [10] - Output: []
Input: [6, 8] - Output: [8]
Input: [1, 2, 3, 4] - Output: [1, 2]
 */

function run(anArray) {
    console.log(anArray.length);
    if (anArray.length < 3) {
        anArray.shift();
    } else if (anArray.length > 2) {
        anArray.pop();
        anArray.pop();
    }
    return anArray;
}
run([10, 10, 10, 10]);
var x = run([10, 10, 10, 10]);
console.log(x);

/**
 * Cho biến animals là mảng chứa tên các loài động vật. Hãy thêm tên các loài động vật khác vào mảng animals tuân thủ theo các yêu cầu sau:

Nếu mảng không có phần tử nào, hãy thêm hai phần tử Cat, Mouse vào mảng
Nếu mảng có một phần tử, hãy thêm phần tử Elephant vào đầu mảng
Nếu mảng có trên hai phần tử, hãy xóa phần tử thứ hai đi và thêm hai phần tử Monkey, Tiger vào vị trí đã xóa
 */

function run(animals) {
    if (animals.length <= 0) {
        animals.push('Cat', 'Mouse');
    }   else if (animals.length <= 1) {
        animals.unshift('Elephant');
        } else if (animals.length >= 2) {
            animals.splice(1, 1, 'Monkey', 'Tiger');
    }
    return animals;
}
run(['dog', 'cat']);
console.log(run(['dog', 'cat']));

/**
 * Một website nọ có chức năng tải thêm (load more) tại trang danh sách sản phẩm. Cứ mỗi khi người dùng kéo con lăn chuột xuống (scroll down) cuối danh sách sản phẩm là sẽ tải thêm 10 sản phẩm.

Diễn dải
Về mặt logic xử lý phía sau giao diện web, bài toán trên sẽ sử dụng kỹ thuật nối mảng. Thứ tự thực hiện các công việc thường diễn ra như sau:

Khi load trang web, tải sẵn một số lượng sản phẩm nhất định (mảng A)
Khi scroll down cuối danh sách, tải thêm một số lượng sản phẩm nhất định (mảng B)
Thực hiện nối mảng A và mảng B thành một mảng duy nhất sau đó hiển thị ra giao diện người dùng
Lúc này chúng ta chưa xây dựng website như bài toán trên nêu ra. Tuy nhiên logic chúng ta sử dụng để giải bài tập này chính là logic chúng ta sẽ sử dụng để giải bài toán thực tế trên trong tương lai.

Bài tập
Cho biến products và newProducts là hai mảng chứa danh sách các sản phẩm. Mảng products được sử dụng để hiển thị sản phẩm ra giao diện người dùng. Mảng newProducts là mảng mới được trả về từ máy chủ.

Yêu cầu: Hãy thực hiện nối mảng products và mảng newProducts với nhau và gán kết quả vào biến output.
 */
function joinTwoArrays(products, newProducts) {
    var output;
    output = products.concat(newProducts);
    return output;
}
joinTwoArrays(['Sản phẩm 1'], ['Sản phẩm 2', 'Sản phẩm 3']);
console.log(joinTwoArrays(['Sản phẩm 1'], ['Sản phẩm 2', 'Sản phẩm 3']));

