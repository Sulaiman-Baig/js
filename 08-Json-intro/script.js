const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the Body',
};

// Convert to JSON String
const str = JSON.stringify(post);
console.log(str.id);

// Parse Json
const obj = JSON.parse(str);
console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the Body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the Body',
  },
];

const str2 = JSON.stringify(posts);

console.log(obj);
console.log(str2);
console.log(post);
