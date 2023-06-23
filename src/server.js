const dotenv = require('dotenv')
const express = require('express')

// Routes
const auteurRoute = require('./routes/auteur.route')

// Init env
dotenv.config()

const server = express()
server.use(express.json())
server.set('json spaces', 2)

// Decla endpoints
server.use('/', auteurRoute)

// Serveur
const port = Number(process.env.PORT)
server.listen(port)

module.exports = server
