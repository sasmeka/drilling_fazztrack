// import express framework
const express = require('express')
const route = express.Router()
// import controllers
const control = require('../controllers/user')

route.get('/', control.getAllData)

//export
module.exports = route