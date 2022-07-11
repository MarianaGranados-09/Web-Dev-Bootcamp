//Loops in javascript
//Syntax:
for(let i = 1; i<=10; i++){
    console.log(i);
}

//C++ equivalent
/*
for(int i=0; i<=10;i++){
    cout<<i<<endl;
}
*/

//Looping over arrays
const colors = ['blue','red','green'];
for(let i=0;i<3;i++){
    console.log(i, colors[i]);
}

//while loop
while(num < 10){
    console.log(num);
    num++;
}

//For of loop
const fruits = ['apple', 'pear','banana'];
for(let fruit of fruits){
    console.log(fruit);
}

const Seating = [
    ['John', 'Lucas'],
    ['Elf', 'Juan'],
    ['Mar', 'Tim']
]

for(let row of Seating){
    console.log(row);
    for(let student of row){
        console.log(student);
    }
}

//Iterating over objects:
const ages = {
    john: 30,
    ann: 29,
    sam: 11,
    amy: 23
}
//We use 'in' to iterate over an object
for(let person in ages){
    console.log(`${person} is age ${ages[person]}`);
}

let total = 0;
let len = Object.values(ages);
for(let score of Object.values(ages)){
    total+=score; //total = total + each score values, in this case, each key property of ages.
}

console.log(`The average age is ${total/len.length}`);
