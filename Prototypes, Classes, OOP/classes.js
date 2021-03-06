//A JS class is a blueprint for creating objects, a class encapsulates data and functions
//that manipulate data

//"ES6 classes are just special functions"

//Instead of using a constructor/prototype pattern, it uses the class keyword
//In the Person class, the constructor() is where you can initialize the properties of an instance
//of an instance, js automatically calls the constructor() method when you instantiate an object of the class

class createPerson{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

//The following creates a new Person object, which will automatically call the constructor() of the Person class:
let john = new createPerson('John Doe', 12);
//The getName() is called a method of the Person class
let name = john.getName();
let age  = john.getAge();
console.log(name);
console.log(age);

//Same constructor and one method for each pet
class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Methods
    eat(){
        return this.name+" is eating";
    }
}
//Extends keyword "includes" the Pet class inside Cat class
class Cat extends Pet{ 
    //additional information for cat:
    constructor(name, age, lives){
        //instead of duplicating the this.parameter, we use the super keyword
        //which is going to reference the class that we are extending from
        super(name, age);
        this.lives = lives;
    }
    meow(){
        return 'MEOW';
    }
}
//Instance of cat class
// const rusty  = new Cat('Rusty', 9);
// console.log(rusty.eat());

class Dog extends Pet{
    bark(){
        return "WOOF";
    }
}
