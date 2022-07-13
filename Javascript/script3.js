//MAP method: creates a new array with the results of calling a callback
//on every element in the arrray

const texts = ['rofl', 'lol','omg'];

const caps = texts.map(function(t) {
    return t.toUpperCase();
})

texts; //['rofl', 'lol','omg'];
caps; //['ROFL', 'LOL','OMG'];

const numbers = [1,2,3,4,5,6];

const doubles = numbers.map(function(num){
    return num * 2;
})

console.log(doubles);

const names = movies.map(function(movie){
    return movie.title;
})


console.log(names);

//Returns the first name of each character
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(names){
    return names.first;
})

//Arrow functions: syntactically compact alternative to a regular function expression

const sum = (x,y) =>{
    return x + y;
}

const square = (x) => {
    return x*x;
}

console.log(square(2));

//Implicit return 
const isEven = num =>(
    num%2 === 0
);
    
//one-liner implicit return:
const isTen = num => num === 10;

console.log(isTen(11));

const add = (a,b) => a+b;

console.log(add(5,4));
