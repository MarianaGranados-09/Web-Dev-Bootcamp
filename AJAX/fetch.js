//Fetch allows us to make request using a function
//Fetch API
//The newer way of making requests via JS
//Supports promises unlike XHRs
fetch('https://swapi.dev/api/people/1') //fetch is going to return a promise, sending a request to the url first
.then((res) => { //promise is resolved
    console.log('Resolved', res);
    //method added onto this fetch response object
    //res.json on this response object because it had an incomplete body
    return res.json() //also returns a promise
})
.then((data) => {
    console.log('JSON done', data);
    return fetch('https://swapi.dev/api/people/2');
})
.then((res) => {
    console.log('Second request solved');
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log('Error!', e);
})

//Using await and async:
const loadSwPeople12 = async () => {
   try{
    const res = await fetch('https://swapi.dev/api/peodsaple/1')
    const data = await res.json();
    console.log(data);

    const res2 = await fetch('https://swapi.dev/api/people/2')
    const data2 = await res2.json();
    console.log(data2);
   }catch(e){
       console.log('Error', e); //Error SyntaxError: JSON.parse: unexpected character at line 2 column 1 of the JSON data
   }
}

loadSwPeople12();
