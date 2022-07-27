//Async functions help us write clean asynchronous code
//Newer and cleaner syntax for working with async code
//Syntax makeup for promises

//Async keyword 
//Async functions always return a promise.
//If the function returns a value. the promise will be solved with that value.
//If the function throws an exception, the promise will be rejected.

// async function hello(){
//     return 'HEY!';
// }

// hello();
// //Promise resolved

// async function error(){
//     throw new Error('Timeout!');
// }

// error();
// //Promise rejected Error: Timeout!

// const info =  async () => {
//     throw new Error('Timeout2')
//     return 'data from facebook.net';
// }

// info().then((data) => {
//     console.log('PROMISE RESOLVED ', data);
// })

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'ilovebread123') return 'WELCOME '+username;
    throw 'Invalid username or password'
}

login('goofy13', 'ilovebread123')
.then(msg => {
    console.log('Logged in');
    console.log(msg);
})
.catch(err => {
    console.log("ERROR");
    console.log(err);
})

//Await keyword: allows us to write async code that looks like sync

//We can only use the await keyword inside of functions declared with async

//await will pause the execution of the function, waiting for a promise to be resolved.

async function rainbow() {
    await delayColor('red', 1000)
    await delayColor('orange', 1000)
    await delayColor('yellow', 1000)
    await delayColor('green', 1000)
    await delayColor('blue', 1000)
    await delayColor('indigo', 1000)
    await delayColor('violet', 1000)
    return 'ALL DONE!'
}

rainbow().then(() => console.log("End of rainbow"))

async function printRainbow(){
    await rainbow();
    console.log('END');
}
    
printRainbow();
