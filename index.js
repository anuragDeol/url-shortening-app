const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');    // database
const Link = require('./models/link');      // 'Link' model

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.listen(port, function(err){
    if(err){
        console.log(`Unexpected error ${err} occured in running the server!`);
    }
    console.log(`Success! Your server is up and running on port ${port}!`);
})