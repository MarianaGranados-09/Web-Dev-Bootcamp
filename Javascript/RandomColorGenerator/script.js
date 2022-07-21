const change = document.querySelector('#change');
const btn  = document.querySelector('button');

btn.addEventListener('click', () => {
    const newColor = color();
    change.innerText = newColor;
    document.body.style.background = newColor;
    //document.body.style.background = rgb(val1,val2,val3);
})

const color = () => {
     //generate color1
     let val1 = Math.floor(Math.random() * 255);
     //generate color2
     let val2 =  Math.floor(Math.random() * 255);
     //generate color3
     let val3 = Math.floor(Math.random() * 255);

     return `RGB(${val1},${val2},${val3})`;
}