//Ajax: Asynchronous Javascript And XML
//Making requests to load information or to send info interacting with some server behind the scenes

//The endpoint responds with info in a format called JSON

//The term API stands for application programming interface
//Refers to any interface for one computer to interact or communicate with another piece of software

//APIs are interfaces that are web based, HTTP based 

//Very few APIs respond with XML nowadays, it has been replaced with JSON
//AJAJ: Async Javascript And Json

//Json stands for Java Script Object Notation
//Json is just a format for sending data for serializing of for sending info from
//an API to my browser... Its a way of formatting data that is consistent and predictable

//To manipulate JSON we need to ask js to turn the string into a valid js object
//Method: JSON.parse(string)

//JSON :{"ticker":{"base":"BTC","target":"USD","price":"22727.11209235","volume":"16597.41660917","change":"-33.64639233"},"timestamp":1658958544,"success":true,"error":""}
const data = `{"ticker":{"base":"BTC","target":"USD","price":"22727.11209235","volume":"16597.41660917","change":"-33.64639233"},"timestamp":1658958544,"success":true,"error":""}`;
const dataJ = JSON.parse(data);
console.log(dataJ)
//logs out:

// {
//     ticker: {
//       base: 'BTC',
//       target: 'USD',
//       price: '22727.11209235',
//       volume: '16597.41660917',
//       change: '-33.64639233'
//     },
//     timestamp: 1658958544,
//     success: true,
//     error: ''
//   }

console.log(dataJ.ticker.base);

//Turn a js object to JSON: we use stringify, this is useful to send information to an API

const dog = {
    breed: 'lab',
    color: 'black',
    owner: undefined
}

const Jdog = JSON.stringify(dog);
console.log(Jdog);
//logs out: {"breed":"lab","color":"black"}

//Postman/Hoppscotch is a tool we use to make HTTP request to test out different APIs to save
//requests; make API calls

//HTTP verbs: GET, POST, PUT, DELETE... (Different types of request we can send)
//GET: receive information - getting stuff from api
//POST: data is being sent somewhere
