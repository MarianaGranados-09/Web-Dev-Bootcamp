const form = document.querySelector('#shelterform');
const input  = document.querySelector('#catName');
const list = document.querySelector('#cats')

form.addEventListener('submit', function(e){
    //prevent the default behavior of the form which is to send you to a new URL
    e.preventDefault();
    //console.log('SUBMITTED!')
    const catName = input.value; //input value from form
    const newLI = document.createElement('LI'); //we create a new list element
    newLI.innerText = catName; //Change new list text to catName from input
    list.append(newLI); //add new value to unordered list
    input.value = ""; //clear input box
})  