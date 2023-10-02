// Working with Strings

let x;
const name = 'John';
const age = 33;

x = 'Hello, My Name is' + name + ' and I am ' + age + ' years old ';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = new String('Hello World');


// const s = 'Hello World';
let q = 'Kingadword';

x = typeof s;

y = q.length;
x = s.length;


// Access value by Key
x = s[2];

console.log('before',s);


x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(3);
x = s.indexOf('c');
x = s.substring(2, 5);
x = s.substring(7);
x = s.slice(-11, -4);
x = '             Hello World';
x = x.trim();
x = s.replace('World','john');
x = s.includes('Hell');
x = s.valueOf();
x = s.split('');

console.log(x);
