// Object

var a = 'Tu hoc';

var myInfo = {
    name: 'Ngoc Hieu',
    age: '23',
    address: 'Ha Noi',
    [a]: 'Front-end',
    getName: function() {
        return this.name;
    }
};

//lay value
var key = 'address';
console.log(myInfo[key]);

//add key
myInfo.email = 'Tu hoc lap trinh';
console.log(myInfo);

//lay value
console.log(myInfo.address);
//lay value
console.log(myInfo['address']);

console.log(myInfo.getName());


// function --> phuong thuc / method
// other --> thuoc tinh / property