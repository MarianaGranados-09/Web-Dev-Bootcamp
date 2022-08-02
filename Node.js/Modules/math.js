const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x *x;

//object - exporting empty object
//module.exports

//object - exporting empty object
//module.exports = 'Hello!' //exports string

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

//Exporting and object:
const maths = {
    add: add,
    PI: PI,
    square: square
}

module.exports = maths;