
class SiteController {

    //[GET]/
    index(req,res){
        res.render('home')
    }
    search(req,res){
        res.sen('Show')
    }
}

module.exports  = new SiteController