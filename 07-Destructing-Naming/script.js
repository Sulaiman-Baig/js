const firstName = 'Mr';
const lastName = 'Azeem';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Destructing

const todo = {
    id: 1,
    title: 'Take out Trash',
    user: {
            name: 'Azeem',
    },
};

const {
    id: todoId,
    title,
    user: { name },
} = todo;

console.log(todoId);

// Destructure Arrays
const numbers = [23, 67, 33, 49, 52];

const [first,second, ...rest] = numbers;

console.log(first, second, rest);