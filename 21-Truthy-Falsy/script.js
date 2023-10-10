// Falsy Values;
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

// Truthy Values;
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// This is Truthy Values
const email = 'test@test.com';
if (email) {
  console.log('You Passed in an Email');
}
console.log(Boolean(email));

// This is Falsy Value
const x = false;
if (x) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}
console.log(Boolean(x));

//This is Falsy Value
const z = '';
if (z) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}
console.log(Boolean(z));

//This is Truthy Value
const y = true;
if (y) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}
console.log(Boolean(y));

// THis is Truthy value
const a = true;
if (a) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}
console.log(Boolean(a));

// This is Truthy Value
const b = '0';
if (x) {
  console.log('This is Truthy');
} else {
  console.log('This is Falsy');
}
console.log(Boolean(b));

// This is Truthy Value
const c = ' ';
if (c) {
  console.log('This is Truthy');
} else {
  console.log('This is Falsy');
}
console.log(Boolean(c));

// This is Truthy Value

const d = 'true';
if (d) {
  console.log('This is Truthy');
} else {
  console.log('This is Falsy');
}
console.log(Boolean(d));

// This is Truthy Value

const e = function () {};
if (e) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}
console.log(Boolean(e));

// Truthy and Falsy caveats
const children = 3;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please Enter Number of children');
}

// Checking for Empty Arrays
const posts = ['Post One'];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty Objects

const user = {
  name: 'Brad',
};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equalityt (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
