const express = require('express');
const app = express()

//console.dir(app)

//Everytime we have an incoming request, this method will run
app.use(() => {
    console.log('NEW REQUEST');
})
//adding port to listen to
app.listen(3000, () => {
    console.log('Listening port 3000');
})