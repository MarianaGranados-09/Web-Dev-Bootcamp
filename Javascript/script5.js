//setTimeout: two parameters
//number of ms and a function

setTimeout(() =>{
    console.log('Hello');
}, 3000)

//setInterval
//Repeats the function every n seconds, in this case 2s
setInterval(() =>{
    console.log(Math.random());
}, 2000)

//clearInterval is used to stop the cycle

//Filter method: creates a new array with all elements that pass the test
//implemented by the provided function

const nums = [1,2,3,4];
const odds = nums.filter(n => {
    return n%2 === 1; //returns true or false
    //if it returns true, n is added to the filtered array
})

console.log(odds); //1,3

const people = [
    {
        name: 'John',
        age: 35
    },
    {
        name: 'Mike',
        age: 12
    },
    {
        name: 'Tom',
        age: 19
    }
]

const isAdult = people.filter(person => {
    return person.age > 17;
})

console.log(isAdult);

//Some method: similar to every, but returns true if any of the
//array elements pass the test function

const words = ['dog','cat','bag','wagon'];
const numbers = [3,4,2,3]
//Words longer than 4 characters?
words.some(word =>{
    return word.length > 4;
}) //true

//Any words start with z?
words.some(word =>{
    return word[0] === 'z'; //false
})

//Every returns true only if all elements pass the test

//all numbers are less than 5?
const func = numbers.every(number =>{
    return number < 5;
}) //true

console.log(func)


function allEvens(arr)
{ 
    return arr.every(num => num%2 === 0)
}

//Reduce method: executes a reducer function on each element
//of the array, resulting in a single value

const arrPrice = [10,203,20,100];

let total = 0;
// for(let price of arrPrice){
//     total += price;
// }

// console.log(total);

const tot = arrPrice.reduce((total, price) => {
    return total + price;
})

console.log(tot);

const minPrice = arrPrice.reduce((min, price) =>{
    if(price < min){ 
        return price;
    }

    return min;
})

console.log(minPrice);
