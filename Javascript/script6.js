//Default parameters

//numSides is equal to 6 when no parameters are added 
//to the function : function rollDice()
function rollDice(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}


//Spread syntax allow an iterable such as an array to be expanded in places where zero or 
//more arguments (for function calls)  or elements (for array literals) are expected,
//or an object expression to be expanded in places where zero or more key-value pairs are expected

const nums = [1,3,43,54,6,2,32];
console.log(...nums);

//Spread with array literals
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Max'];

const allPets = [...cats, ...dogs]; // makes a different and new array from cats

//Spread with objects
const dataForm = {
    email: 'blue@gmail.com',
    password: '123blue',
    username: 'blue09'
}

const newUser = {...dataForm, id: 2345, isAdmin: false};
console.log(newUser);

//Rest Params
//The arguments object: automatically collects all arguments passed to the function
//Available inside every function
//An array-like object
    //Has a length property
    //No array methods like push or pop
//Contains all arguments passed to the function
//Not available inside arrow functions

// function sum(){
//     console.log(arguments);
// }

// sum(2,13,23,34,34,32,232,23,242,42);

//Rest collects all remaining arguments into an actual array
function mult(...nums){
    console.log(nums);
}

mult(1,2,334,24,242,42,242,42);


//Destructuring: a short clean syntax to 'unpack':
//-values from arrays, properties from objects into distinct variables

const scores = [81323,731313,54353,65756,3435];
const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver] = scores;


const user  = {
    email: 'john@gmail.com',
    password: '123hojn',
    first: 'John',
    last: 'Harvey',
    city: 'San Diego'
}

//const firstName = user.first;
const {email, firstName, lastName} = user;
console.log(email); //john@gmail.com
 console.log(firstName); //John

 const{city: From} = user;
 //makes a variable called From that stores user.city variable
