const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);

// Same with forEach
const doubleNumbers2 = [];

numbers.forEach((number) => {
  doubleNumbers2.push(number * 5);
});

console.log(doubleNumbers2);

const companies = [
  { name: 'Company one', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2007 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an Array of Company Names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Create an array with just company & Category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// Create an Array of objects with the name & the length of each company in years
// console.log(companyInfo);

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + 'Years',
  };
});

// console.log(companyYears);

//Chain map Methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })

  .map(function (sqrt) {
    return sqrt * 2;
  })

  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble2);

//Chainning Differnt Methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
