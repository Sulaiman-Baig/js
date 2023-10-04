// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';
var age = 30;

console.log(firstName, lastName,age);


// Naming Conventions
// -Only Letters, Numbers, Underscores and dollar signs
// - can't start with a number

// Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

//Re-assigning Variables
age = 31;
console.log(age);

let score;

score = 1;
console.log(score);

if(true){
    score = score + 1;
}

console.log(score)

const x  = 100;
// x = 200;

const arr = [1, 2, 3, 4];
arr.push(5);
let score1;

console.log(arr);

const person = {
    name: 'Brad',
};

person.name = 'John';
person.email = 'brad@gmail.com';

console.log(person);

// Declare Multiple Values at Once
let a, b, c;
const d = 10, e = 20, f = 30;

console.log(d);
console.log(a);

const Direction = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
};


// Enum Types in Javascript
function sayDirection(direction) {
    switch(direction){
        case Direction.UP:
            console.log('We are going up!');
            break;

            case Direction.DOWN:
                console.log("are going to Down");
                break;

                case Direction.LEFT:
                    console.log("We are going to Left");
                    break;

                    case Direction.right:
                        console.log("We are going to UP!");
                        break;
    }
}

sayDirection(Direction.UP);
sayDirection(Direction.LEFT);
sayDirection(Direction.RIGHT);
sayDirection(Direction.DOWN);