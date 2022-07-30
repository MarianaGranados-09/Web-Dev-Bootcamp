//Prototypes are the main mechanism which js objects inherit features from one another
//A prototype is the template object
 
//The js prototype property allows you to add new properties to object constructors
// function person(first, last, age){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }

// person.prototype.gender = 'male';
// //It also allows you to add new methods to objects
// person.prototype.Fullname = function(){
//     return this.firstName+" "+this.lastName;
// }

//OOP concepts: breaking things up into distinct patterns of objects
//factory functions are functions that return objects

let person1 = {
    id: 1030,
    age: 20,
    name: 'Mark',
    getId(){
        return this.id;
    },
};

console.log(person1.getId());
//The person1 object has 3 properties and one method that returns the id
//Suppose we want to create another similar object called person2
let person2 = {
    id: 1031,
    age: 22,
    name: 'Maggie',
    getId(){
        return this.id;
    },
};

console.log(person2.getId());

//To avoid copying the person1 and person2 objects, we can define a function that creates the person object
function createPerson(id, age, name){
    return{
        id: id,
        age: age,
        name: name,
        getId(){
            return this.id;
        },
    };
}

//when a function creates and returns a new object, it's called a factory function
//Creating a new person object from createPerson:
let person3 = createPerson(1032, 21, 'John');
console.log(person3.getId());

//Constructor functions are used to define a custom type and the new operator to create multiple objects from this type
//A constructor function should be called only with the new operator

//constructor function called Person
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

//To create a new instance of the Person, we use the new operator
let person = new Person('Mike', 'Doe');

//The new operator does the following:
//-Creates a new empty object and assigns it to the this variable
//-Assigns the arguments 'mike' and 'doe' to the firstName and lastName properties of the object
//-Returns the this value

//Adding methods to js constructor functions

//An object may have many methods that manipulate its data, to add a method to an object created via the constuctor function, 
//you can use the this keyword:

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        return this.firstName+' '+this.lastName;
    };
}


