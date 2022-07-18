const Link = require('../models/link');

module.exports.home = async function(req, res){
    return res.render('home.ejs');
}


module.exports.shortenUrl = async function(req, res){
    try{
        let link = await Link.create({
            fullUrl: req.body.fullUrl
            // shortUrl: *default value will be set*
            // clicks: *default value will be set*
        });
        // new document 'link' is created - with value of one field set by us, and the other two fields are set by default (refer to schema)
        // res.redirect('/');
        return res.render('shortUrl.ejs', {
            link: link
        });

    }catch(err){
        console.log(`Error! Can not shorten the URL - ${err}`);
        return;
    }
}


module.exports.visit = async function(req, res){
    let link = await Link.findOne({shortUrl: req.params.link});
    if(link == null){
        return res.status(404);
    }
    link.clicks++;
    link.save();
    res.redirect(link.fullUrl);
}


module.exports.allUrls = async function(req, res){
    try{
        const links = await Link.find();    // find all the documents in our db
        return res.render('allUrls.ejs', {
            links: links
        });
    }catch(err){
        console.log(`Unexpected error occured - ${err}`);
        return;
    }
}