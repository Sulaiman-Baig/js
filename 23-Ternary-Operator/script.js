const age = 10;

// Using if statement
if (age >= 18) {
  console.log('you are vote');
} else {
  console.log('You are not Vote');
}

// Using Ternary Operator for Syntax

age >= 18 ? console.log('you are vote') : console.log('You are not Vote');

// Assigning a Conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote!' : 'You cannot Vote';

console.log(canVote);
console.log(canVote2);

//Multiple Statements

const auth = false;
let redirect;

if (auth) {
  alert('Welcome To Dashboard');
  redirect = '/Dashboard';
} else {
  alert('Access Denied');
  redirect = '/Login';
}

// Ternary Operator Using Statement
const redirect = auth
  ? (alert('Welcome To Dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');
console.log(redirect);

auth ? console.log('Welcome To Dashboard') : null;

// And && Operator
auth && console.log('Welcome to Dashboard');
