const express = require('express');
const app = express()

//console.dir(app)

//Everytime we have an incoming request, this method will run
//two objects automatically passed in:
//-represents the request
//-represents the response
// app.use((req, res) => {
//     console.log('NEW REQUEST');
//     // console.dir(req)7
//     //res.send is going to send and generate an HTTP response 
//     res.send('<h1>This is my page!</h1>');
//     //sending an object through http:
//     // res.send({color: 'red'})
// })

//adding port to listen to
app.listen(3000, () => {
    console.log('Listening port 3000');
})

//routing: taking incoming requests and a path that is requested
//and matching that to some code in some response: 
// /cats = 'meow'
// /dogs = 'woof'

//.get method expects two things: paths we are matching and callback function

app.get('/cats', (req, res) => {
    res.send('MEOW');
})
app.get('/dogs', (req, res) => {
    res.send('WOOF');
})

//.post method 
app.post('/cats', (req, res) => {
    res.send('POST MEOW');
})
