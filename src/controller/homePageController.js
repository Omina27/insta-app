const { read } = require('../utils/FS')

const GET = (req, res) => {
 
    res.render('homePage')
}
module.exports = {
    GET
}