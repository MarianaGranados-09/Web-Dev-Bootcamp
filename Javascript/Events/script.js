//Simple event when a user clicks on something
function func(){
    alert("Don't click on the button!!");
}

const btn = document.querySelector('#v2');
btn.onclick = function(){
    alert('CLICKED!');
}

function scream(){
    alert('mouse enter!!')
}
//mouse enter
//setting a property to be a function 
btn.onmouseenter = scream;
//addEventListener: specify the event type and a callback to run
// const button = document.querySelector('h1');
// //'use a generic method'
// button.addEventListener('click', () => {
//     alert('YOU CLICKED!');
// })

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function() {
    alert('clicked v3');
})
//once: true, invokes at most once after being added
btn3.addEventListener('click', func, {once: true});
