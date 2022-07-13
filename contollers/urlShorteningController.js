const Link = require('../models/link');

module.exports.shortenUrl = async function(req, res){
    try{
        return res.render('home',{
            title: "We are here to shorten your URL ;)"
            // Logic for shortening URL here...
        });

    }catch(err){
        console.log(`${err} - Error! url can not be shortened`)
    }
}