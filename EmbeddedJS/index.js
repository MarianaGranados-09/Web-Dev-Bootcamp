const express = require('express');
const app = express();

//npm i ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
    res.render('home.ejs');
})
app.get('/rand', (req, res) => {
    //Generate number here
    let numRand = Math.floor(Math.random() * 10) +1;
    res.render('random', {rand: numRand})
})
app.get('/r/:subreddit', (req, res ) => {
    const { subreddit } = req.params;
    res.render('subreddit', {subreddit});
})
//http://localhost:3000/r/dogs

app.listen(3000, () => {
    console.log("Listening on port 3000");
})
