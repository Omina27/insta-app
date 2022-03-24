const { read } = require('../utils/FS')

const GET = (req, res) => {
    const { userName } = req.params

    const userData = read('users.json').find(e => e.username == userName)
    const userPosts = read('posts.json').filter(e => e.userId == userName)

    console.log(userData, userPosts);
    if(!userData){
        return res.render('notFound')
    }

    res.render('singlePage', {userData, userPosts})
}
module.exports = {
    GET
}