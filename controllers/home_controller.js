module.exports.home = function(req,res){
    // return res.end('<h1>Express is up for connect_It</h1>')
    //we have already deffined the view engine in index.js file
    return res.render('home', { 
        title: " home page"
    });
}