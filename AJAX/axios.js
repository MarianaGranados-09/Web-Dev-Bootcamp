//Axios: a library for making http requests
//makes requests, parses the JSON and adds it onto whatever this response object includes
// axios.get('https://swapi.dev/api/people/1')//returns a promise
// .then((res) => {
//     console.log('Response: ', res);
// }) 
// //Helps us avoid the extra step of parsing JSON with fetch
// .catch((e) => {
//     console.log('Error ',e)
// })


const getStarwars = async(id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }catch(e){
        console.log('Error ',e);
    }
};

getStarwars(10);

//Setting headers with axios
const getData = async () => {
    const headers = { headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', headers)
    let joke = res.data.joke;
    return joke;
}

// getData();

const text = document.querySelector('.text');
const button = document.querySelector('button');

button.addEventListener('click', () =>{
   getData() //ejecuta funcion en su tiempo
   .then((joke) =>{ //cuando termina la funcion, entonces, si es exitosa,
    // el valor obtenido pasa a ser el valor de text
    //pero solo sucede hasta que se cumple la promesa
       text.innerText=joke;
    })
})
