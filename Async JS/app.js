//Call stack
//The mechanism the JS interpreter uses to keep track of its
//place in a script that call multiple functions. How JS knows what
//function is currently being run and what functions are called from
//within that function, etc.

//A stack is a basic data structure in CS


//JS is single threaded, meaning that at any given point in time, that single
//JS thread is running at most one line of JS code

//Callbacks

//Browsers come with web APIs that are able to handle certain tasks in the
//background (making requests or setTimeout)

//The JS call stack recognizes these web API functions and passes them off
//to the browser to take care of

//Once the browser finishes those tasks, they return and are pushed
//onto the stack as a callback

console.log('Sending request to server.');
setTimeout( () => {
    console.log('Here is your data from the server...');
}, 3000)
console.log('End of file.');