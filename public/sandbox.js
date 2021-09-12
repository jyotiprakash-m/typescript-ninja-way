"use strict";
var greet;
greet = function () {
    console.log("Hello,World!");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 56, "Nisha");
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
var greetSinglePerson = function (user, uid) {
    console.log("Hello, " + user.name + " your age is " + user.age + " and id is " + uid);
};
greetSinglePerson({
    name: "Jyoti",
    age: 23,
    school: 'ssvm'
}, 86453569);
// Function signature
// let treet:Function;
// Example - 1
var treet;
treet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// Example -2
var calc;
calc = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(45, 98, 'sub'));
// Example - 3 
// This is function signature
var logDetails;
logDetails = function (ninja) {
    console.log("Hello " + ninja.name + ", Your age is " + ninja.age);
};
logDetails({ name: "jyoti", age: 56 });
