let greet: Function;


greet = () => {
    console.log("Hello,World!")
}

type num = number


const add = (a: num, b: number, c: number | string = 10): void => {
    console.log(a + b)
    console.log(c)
}

add(5, 56, "Nisha");

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 7)
// console.log(result)

type greeting = {
    name: string,
    age: number,
    school: string

}
// Very useful type aliases
type userIdType = string | number;
const greetSinglePerson = (user: greeting, uid: userIdType) => {
    console.log(`Hello, ${user.name} your age is ${user.age} and id is ${uid}`)
}

greetSinglePerson({
    name: "Jyoti",
    age: 23,
    school: 'ssvm'
}, 86453569)


// Function signature

// let treet:Function;

// Example - 1
let treet: (a: string, b: string) => void;

treet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// Example -2

let calc: (a: number, b: number, c: string) => void;

calc = (numOne: number, numTwo: number, action: string): number => {
    if (action == "add") {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}
console.log(calc(45, 98, 'sub'))

// Example - 3 

// This is function signature
let logDetails: (obj: { name: string, age: number }) => void;

// Define type
type person = {
    name: string,
    age: number
}

logDetails = (ninja: person) => {
    console.log(`Hello ${ninja.name}, Your age is ${ninja.age}`)
}

logDetails({ name: "jyoti", age: 56 })
