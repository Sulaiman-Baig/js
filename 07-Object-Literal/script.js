let x;
const person = {
    name: 'Azeem',
    age: 30,
    isAdmin: true,
    address: {
        street: 'Samanabad',
        city: 'Faisalabad',
        state: 'Punjab',
    },
    hobbies: ['long Drive ferari','Swimming'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Azeem';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet =  function () {
    console.log(`Hello, My Name is ${this.name}`);
};

person.greet();

const person = {
'first name': 'Muhammad',
'last name': 'Azeem',
};

x = person2['first name'];

console.log(x);