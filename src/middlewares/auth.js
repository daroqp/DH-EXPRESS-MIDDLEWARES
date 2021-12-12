const users = ["Ada", "Greta", "Vim", "Tim"];

function auth(req, res, next) {

    const { user } = req.query;
    const isValidUser = users.includes( user );
    if( isValidUser ){
        res.render('admin', { user });
    } else {
        const msg = "No tiene privilegios para ingresar"
        res.render("index", { msg })
    }

}


module.exports = auth;