"use strict";
var a = 10;
var b = 'Pippo';
console.log(a);
console.log(b);
var log = function (msg) {
    if (msg === void 0) { msg = 'This is a test'; }
    return console.log(msg);
};
function sum(a, b) {
    return a + b;
}
function biggerLog(msg) {
    if (msg === void 0) { msg = 'This is a test'; }
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    console.log(msg + "\n  " + other.join(' '));
}
log('Hello!');
log();
biggerLog('Hello', 'a', 'b', 'c', '2');
var c = 3;
c = 'pippo';
var d = [1, 2, 3];
var e = ['a', 'b', 'c'];
var de = d.concat(e);
var first = d[0], second = d[1];
console.log(first);
console.log(second);
var person = {
    firstname: 'Pippo',
    lastname: 'Pluto'
};
var firstname = person.firstname, lastname = person.lastname;
console.log(firstname);
console.log(lastname);
var Person = (function () {
    function Person(firstname, lastname) {
        this.age = 10;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.sayHi = function () {
        return "Hi " + this.firstname;
    };
    Person.prototype.greet = function () {
        return "Hello " + this.firstname + " " + this.lastname;
    };
    return Person;
}());
var pippo = new Person('Pippo', 'Pluto');
console.log(pippo.sayHi());
var pluto = {
    firstname: 'Pluto',
    lastname: 'Pluto',
    age: 10,
    street: 'ppp'
};
var paperino = {
    firstname: 'Paperino',
    lastname: 'Paperino',
    age: 10
};
