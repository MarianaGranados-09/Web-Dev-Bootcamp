document.querySelector('h1')
document.querySelector('h1')
const h1 = document.querySelector('h1');
console.dir(h1)

//changes inner text to lolol
const gr= document.querySelector('p').innerText = 'lolol';
console.log(gr);

document.querySelector('p').textContent
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a temporibus iusto modi qui eligendi harum animi consequatur dicta laudantium vero eveniet adipisci, blanditiis quisquam aliquam quasi accusamus fuga mollitia." 

//change facebook link using anchors object properties
document.querySelector('a').hash = 'facebook.com/';

document.querySelector('h1').innerHTML; //return text as well as the tags used 

//Attributes: href, or title on an image
document.querySelector('img')

const ima = document.querySelector('img');
//ima.src get the source from javascript, while ima.getAttribute gets the source from the html file

// ima.src = "https://images.pexels.com/photos/12383337/pexels-photo-12383337.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

// ima.getAttribute('src') = "https://images.pexels.com/photos/12383337/pexels-photo-12383337.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 

//we can also use setAtrribute to set a title, a link, ...
ima.setAttribute('id', '#build')

//Changing style for all anchor links:
const allLinks = document.querySelectorAll('a');

for(let link of allLinks){
    link.style.color = 'goldenrod';
    link.style.textDecorationColor = 'olive';
}

//getting actual styles using window object:
window.getComputedStyle(h1);
window.getComputedStyle(h1).color; 
window.getComputedStyle(h1).fontSize;

const cont = document.querySelector('#container');
cont.style.textAlign = 'center';

const img = document.querySelector('img');
img.style.width = '150px'
img.style.borderRadius = '50%';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');
let count = 0;
for(let span of spans){
    span.style.color = colors[count];
    count++;
}

const h2 = document.querySelector('h2');
h2.getAttribute('class');
h2.setAttribute("class", 'purple');
h2.setAttribute('class', 'border');

let currentClasses = h2.getAttribute('class');
h2.setAttribute('class',`${currentClasses} purple`);

//Using classList to add new classes to an element
//Add a new class:
h2.classList.add('purple');
h2.classList.add('border');
//Remove a class:
h2.classList.remove('border');

//Check whether a class exists or not: (returns true or false)
h2.classList.contains('border'); //false
h2.classList.toggle('purple');

li.classList.toggle('highlight');

// WRITE YOUR CODE IN HERE:
const lis = document.querySelectorAll('li');
for(let li of lis){
    li.classList.toggle('highlight');
}
/*
lis.forEach(li => {
    li.classList.toggle('highlight');
})*/

const firstBold = document.querySelector('b');
//firstBold =   <b>Silkie</b>
firstBold.parentElement //gives the element paragraph
firstBold.parentElement.parentElement // //gives the element body

const paragraph = firstBold.parentElement;
paragraph.childElementCount; // tells us how many child elements there are
//[b, b, a, a] //gives us an html collection that is iterable
firstBold.nextElementSibling; //return next sibling element
firstBold.previousElementSibling;

//Create a new element
const newImg = document.createElement('img');

//Accessing object properties:
console.dir(newImg);
//Add a source for the image 
newImg.src = 'https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&w=600';

//How to add the image to the page? 
//to the body of the page:
document.body.appendChild(newImg);

const H3 = document.createElement('h3');
H3.innerText = 'HELLO!';
document.body.appendChild(H3)

//Add element to page using append only allows us to add multiple elements created
const p = document.querySelector('p');
p.append('i am new text!');

//Or we can use prepend to add an element to the beginning of a section
p.prepend('i am first');

//Or we can use insertAdjacentElement(position, element)
//position: beforebegin, afterbegin, beforeend, afterend
const htwo = document.createElement('h2');
htwo.innerText = 'HEL';
p.insertAdjacentElement('afterend', htwo);

//removing elements
//removing first element from a list by getting its parent element which a ul
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

const imgg = document.querySelector('img');
img.remove();





