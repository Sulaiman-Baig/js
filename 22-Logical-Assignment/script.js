// ||= Assigns the right side value only.if the left is a falsy value.

let a = null;

// if (!a) {
//   a = 30;
// }
// a = a || 10;

a ||= 10;

console.log(a);

// &&= Assigns the right side value only.if the left is a truthy value.

let b = 10;

if (b) {
  b = 20;
}

b = b && 20;

b && 20;

console.log(b);

// ??= Assigns the right side value only.if the left is a null or undefined.

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
