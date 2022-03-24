const fs = require('fs')
const path = require('path')

const read = (dir) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, `../model/${dir}`), { encoding: 'utf-8', flag: 'r'}))
}
module.exports = {
    read
}