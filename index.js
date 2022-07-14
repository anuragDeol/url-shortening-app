const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');    // database

// import node-sass-middleware
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src: './assets/scss',   // middleware will pick scss files from here to convert them into css
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',    // we want our code in multiple lines
    prefix: '/css'  // where should my server lookout for css files
}));

app.use(express.urlencoded({extended: false}));

app.use(express.static('./assets'));

// set up 'ejs' as our view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// root route
app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log(`Unexpected error ${err} occured in running the server!`);
    }
    console.log(`Success! Your server is up and running on port ${port}!`);
})