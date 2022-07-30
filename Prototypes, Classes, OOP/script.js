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

