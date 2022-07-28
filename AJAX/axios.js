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
