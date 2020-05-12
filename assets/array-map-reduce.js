// Array map() method

var arr =
    [{ field: 'name', value: 'Ngoc Hieu' },
    { field: 'age', value: 23 },
    { field: 'address', value: 'Hà Nội' }]
;

function courses(a) {
    return {
        field: a.field,
        value: `Ho va ten: ${a.value}`,
        Level: 135,
    };
}

var newCourses = arr.map(courses);
// console.log(newCourses);


//===========================================

// Array reduce() method

var courses = [
    {
        id: 1,
        name: 'Hoang Ngoc Hieu',
        coin: 100000
    },
    {
        id: 2,
        name: 'Nguyen Minh Hieu',
        coin: 20000
    },
    {
        id: 3,
        name: 'Trieu Van Tu',
        coin: 50000
    },
    {
        id: 4,
        name: 'Xinzhao',
        coin: 0
    },
    {
        id: 5,
        name: 'Yasuo',
        coin: 10000000
    },
    {
        id: 5,
        name: 'Zed',
        coin: 0
    },
    {
        id: 6,
        name: 'Nguyen Minh Hieu',
        coin: 40000
    }
];


// var totalcoin = 0;
// for (var course of courses) {
//     totalcoin += course.coin;
// }
// console.log(totalcoin);

var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'luot chay:': i,
        'bien tich tru:': accumulator,
        'Gia khoa hoc:': currentValue.coin,
    });
    console.log(currentValue);

    return accumulator + currentValue.coin;
}

var tootalCoin = courses.reduce(coinHandler, 0);
console.log(tootalCoin);