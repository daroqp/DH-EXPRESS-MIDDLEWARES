
module.exports = {
    index: (req, res) => {
        const msg = undefined
        res.render('index', { msg })
    },
    admin: (req, res) => {
        res.render('admin')
    },
    services: (req, res) => {
        res.render('services')
    }
}