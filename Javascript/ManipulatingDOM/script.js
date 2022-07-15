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
