// JS objects are going to help store multiple pieces of data together in some sort of structure.

//Objects are collections of properties, propertires are a key-value pair.

//Rather than accessing data using an index, we use custom keys.

const fitBitData = {
    totalSteps : 308727,
    totalMiles: 211.9,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
};
//Values can be any type of variable
const person = {
    firstName: 'Mark', lastName: 'Jagger'
};

//Getting data out of objects
person['firstName'] //prints out 'Mark'
fitBitData.totalMiles //print out 211.9

//changing the key value of a property
person.firstName = 'John';
//adding a property and a key value
person.age = 40;
person.sex = 'M';

console.log(person.sex);

//Nesting arrays in objects
//Array of objects
//Or objects with properties whose key values are arrays

//Array of objects
const shoppingCart = [
{
    product: 'Eggs',
    price: 1.20,
    quantity: 1,
},
{
    product: 'Ham',
    price: 20,
    quantity: 5,
},
{
    product: 'Milk',
    price: 2.20,
    quantity: 2
}
]

//Object containing arrays
const student = {
    firstName: 'Luis',
    lastName: 'Jones',
    favColors: ['blue','red','brown'],
    //Nesting an object inside an object
    exams: {midterm: 92, final: 88}
}

const comments = [
    {username: 'Tam', text: 'lol', likes: 32},
    {username: 'John', text: 'xoxo', likes: 3423}
]

//Accessing first comment:
comments[1]
//Accessing text from first comment
comments[1].text //'lol'
