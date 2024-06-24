const express = require('express')
const Router = express.Router()
const controller = require('../controller/controller')

Router.post('/register', controller.register)
Router.post('/login', controller.login)

module.exports = Router