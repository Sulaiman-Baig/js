// String
const firstName = 'sara';

// NUmber
const age = 30;
const temp = 98.9;
// const output = age;

// boolean

const haskids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id')

// BigInt
const n =  987656789876545678n;
// const output = n;

// Reference Types

const numbers = [1,2,3,4];
const person = {
    name: 'Brad'
};

function sayHello(){
    console.log('Hello');
}
const output = sayHello;
// const output = person;
// const output = numbers;
// const output =  id;
// const output = score;
// const output = aptNumber;
// const output = haskids;
// const output = temp;
// const output = firstName;
// console.log(firstName, typeof firstName);

console.log(output, typeof output);