const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// Short Version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Some with ForEach

// const evenNumbers = [];
// Numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 2011, end: 2016 },
  { name: 'Company Eight', category: 'Technology', start: 1981, end: 1989 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
// console.log(companies);

// Get Only Retail Companiese

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

// console.log(retailCompanies);

// Get Companies that Started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
// console.log(earlyCompanies);

// Get Companies that Lasted 10 Years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(longCompanies);
