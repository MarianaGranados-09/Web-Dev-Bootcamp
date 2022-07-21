const color = () => {
    //generate color1
    let val1 = Math.floor(Math.random() * 255);
    //generate color2
    let val2 =  Math.floor(Math.random() * 255);
    //generate color3
    let val3 = Math.floor(Math.random() * 255);

    return `RGB(${val1},${val2},${val3})`;
}

const h1s = document.querySelector('h1');
for(let h1 of h1s){
   h1.addEventListener('click', colorize);
}
//Using 'this' keyword to make code more efficient
//This refers to the element of whatever context it is in
//in this example, this refers to an h1 element
function colorize() {
    this.style.backgroundColor = color();
    this.style.color = color();
}


