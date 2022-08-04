const express = require('express');
const app = express()

//console.dir(app)

//Everytime we have an incoming request, this method will run
//two objects automatically passed in:
//-represents the request
//-represents the response
app.use((req, res) => {
    console.log('NEW REQUEST');
    // console.dir(req)7
    //res.send is going to send and generate an HTTP response 
    res.send('<h1>This is my page!</h1>');
    //sending an object through http:
    // res.send({color: 'red'})
})
//adding port to listen to
app.listen(3000, () => {
    console.log('Listening port 3000');
})
