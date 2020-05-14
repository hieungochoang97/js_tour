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


console.log('-----------------------------');
// Object constructor

var User = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8';
User .prototype.getClassName = function () {
    return this.className;
};

var author = new User ('Hieu', 'Hoang', 'Avatar');
var user = new User ('Hieu', 'Minh', 'Avatar');


author.title = 'Tu hoc javascript';
user.comment = 'Co gang len nao!!!!'

console.log(author);
console.log(user.className);
console.log(author.getName());

console.log(user.getClassName());



// Object prototype

