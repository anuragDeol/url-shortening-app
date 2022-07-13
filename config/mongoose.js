const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/url-shortener-db');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error connecting to MongoDB Databse"));

db.once('open', function(){
    console.log("Successfully connected to MongoDB Databse");
});

module.exports = db;

