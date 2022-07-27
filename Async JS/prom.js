//promises in js
//a promise is an object representing the eventual
//completion or failure of an asynchronous operation

//like making a request, getting some data from some other location
//getting data from a movies like IMDB api or netflix api

//make request would be some function implemented that checks if
//this request works, then call this function

//if it didnt work, then call second function
// makeRequest(() => {

// }, 
// () => {

// })

//Success is first callback
//failure is second

//So if it takes more than 2 sec, we'll get a connection timeout
//otherwise we'll call success
// const requestCallback = (url, success, failure) => {
//     const delay = 2000;
//     setTimeout(() => {
//         if(delay > 4000){
//             failure('Connection Timeout');
//         }
//         else{
//             success('Here is your data from '+ url);
//         }
//     }, delay)
// }
//does not expect callbacks to be passed

//A promise is a returned object to which you attach callbacks, instead
//of passing callbacks into a function 

//The function returns a promise object everytime it is called
//The chosen callback will run depending on whether the promise was rejected or resolved

// requestCallback('movies.com', (message) =>{
//     console.log("CONNECTION SUCCESSFUL");
//     console.log(message);
// }, (err) => {
//     console.log('CONNECTION FAILED', err);
// })


const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = 4000;
        setTimeout(() => {
            if(delay > 3000){
                reject('Connection Timeout');
            }
            else{
                resolve('Here is your data from '+url);
            }
        }, delay)
    })
}


// const req = requestPromise('yelp.com/api/coffee');
// req.then(() => {
//     console.log('PROMISE RESOLVED')
//     console.log('IT WORKED');
// }).catch(() => { //if rejected this function runs
//     console.log('PROMISE REJECTED')
//     console.log('ERROR');
// })

//Returns a promise object
requestPromise('yelp.com/api/coffee')
    .then(() => {
        console.log('PROMISE RESOLVED')
        console.log('IT WORKED');
    }).catch(() => { //if rejected this function runs
        console.log('PROMISE REJECTED')
        console.log('ERROR');
    })
const delayColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayColor('red', 1000)
    .then(() => delayColor('orange', 1000))
    .then(() => delayColor('yellow', 1000))
    .then(() => delayColor('red', 1000))
    .then(() => delayColor('teal', 1000))


