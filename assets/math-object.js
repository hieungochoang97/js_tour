/**
 * Math object
 * 
 * 
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */

//  console.log(Math.PI); // so pi
//  console.log(Math.round(1.35)); // lam tron
//  console.log(Math.abs(-100)); // gia tri tuyet doi
//  console.log(Math.ceil(4.00005)); // lam tron tren
//  console.log(Math.floor(5.9)); // lam tron duoi
//  console.log(Math.random()); // tao ra day so ngay nhien

 var random = Math.floor(Math.random() * 10);

 var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
    '50 coins',
    '60 coins',
    '70 coins',
    '80 coins',
    '90 coins',
    '100 coins'
 ];

 console.log(bonus[random]);