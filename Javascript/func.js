//Function expressions

const square = function (num){
    return num*num;
}

console.log(square(7));

//High order functions
//Functions that operate on/with other functions.
//They can accept other functions as arguments and return a function as well.
 
//Function that will accept another function, which will be rollDice()
function callTwice(func){
    func();
    func();
}

//We define a function 
function rollDice(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDice);

//Returning functions
function makeFunc(min,max){
    return function(num){
        return num >= min && num <= max;
    }
}

console.log(makeFunc(1,10));

//Methods: we can add functions as properties on objects
const math = {
    PI: 3.1415,
    multiply: function(x, y){
        return x*y;
    },
    divide: function(x, y){
        return x/y;
    }
}
console.log(math);
console.log(math.divide(4,2)); //2
console.log(math.multiply(2,3)); //6

//Shorthand methods
const mathShort = {
    euler: 1,
    add(x,y){
        return x+y;
    }
}

console.log(mathShort.add(3,45));

//This in methods: we use the keyword 'this' to access other properties on 
//the same object

const cat = {
    name: 'Potato',
    color: 'grey',
    age: 2,
    meow(){
        console.log('MEOW');
        console.log('His age is '+this.age);
    }
}

cat.meow();

//Using try/catch
//Catching errors and preventing them from breaking or stopping
//the execution of out code

try{
    hello.toUpperCase();
} catch{
    console.log('ERROR')
}
