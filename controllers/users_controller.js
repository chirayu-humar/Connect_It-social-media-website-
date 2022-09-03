module.exports.profile = function(req, res){
    // return res.send('<h1>Users controller is accisible</h1>')
    return res.render('user_profile',{
        title: 'profile page'
    })
}