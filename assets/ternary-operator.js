var course = {
    name: 'html',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('mien phi');
// }


// Toan tu 3 ngoi - ternary operator

var result = course.coin > 0 ? `${course.coin} Coins` : `Mien phi`;
console.log(result);