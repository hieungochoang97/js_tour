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

// var i = 0;

// var totalCoin = courses.reduce(function (total, course) {
//     return total + course.coin;
// }, 0);

// console.log(totalCoin);


var number = [100, 200, 300, 400 ,500, 600];

var totalCoin = number.reduce(function (total, number) {
    return total + number;
}, 0);

console.log(totalCoin);





// bai tap co ban 

// flat - Làm phẳng mảng từ Depth array - 'mảng sâu' 

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOut, depthItem) {
    return flatOut.concat(depthItem);
}, []); 

// console.log(flatArray);


// lấy ra các khóa học và đưa vào mảng mới

var topics = [
    {
        topic: 'Front-End',
        courses: [
            {
            id: 1,
            title: 'HMTL, CSS'
            },
            {
                id: 2,
                title: 'JS'
            }
        ],
    },
    {
        topic: 'Back-end',
        courses: [
            {
            id: 3,
            title: 'PHP'
            },
            {
                id: 4,
                title: 'React native'
            }
        ],
    },
];


// note

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newCourses);

var html = newCourses.map(function (course) {
    return `
        <div><h2>${course.title}</h2>
        <p>${course.id}</p>
        </div>
    `;
});

console.log(html.join(''));