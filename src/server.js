const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const path = require('path')
const ejs = require('ejs')


app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))
app.use(express.static(__dirname + '/public'))

const homePageController = require('./controller/homePageController')
const singlePageController = require('./controller/singlePageController')
const notFoundController = require('./controller/notFoundController')

app.get('/', homePageController.GET)
app.get('/:userName', singlePageController.GET)
app.use('/*', notFoundController.GET)

app.listen(PORT, console.log(PORT))