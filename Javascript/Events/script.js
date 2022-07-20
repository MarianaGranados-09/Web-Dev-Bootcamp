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
