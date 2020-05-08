/**
 * Cho trước biến a và b là các số nguyên ngẫu nhiên:

        Hãy tăng giá trị của biến a lên 1
        Hãy giảm giá trị của biến b xuống 1
 */

function run(a, b) {

    a++;
    b--;

    return 'a is ' + a + ' and b is ' + b;

}

run(2, 2);
var c = run(2, 2);

console.log(c);


/**
 * Cho trước a và b là các số nguyên ngẫu nhiên:

Hãy giảm giá trị biến a xuống 1 và gán cho biến c
Hãy tăng giá trị biến b lên 1 và gán cho biến d
 */

function run(a, b) {

    var c = --a;
    var d = ++b;

    return 'c is ' + c + ' and d is ' + d;
    
}

run(1, 2);
console.log(run(1, 2));