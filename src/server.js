const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')

// Routes
const auteurRoute = require('./routes/auteur.route')

// Init env
dotenv.config()

const server = express()
server.use(express.json())
server.set('json spaces', 2)

// Ajout de l'orgine pour les CORS
const corsOptions = {
  origin: '*'
}
server.use(cors(corsOptions))

// Declaration endpoint
server.use('/', auteurRoute)

// Serveur
const port = Number(process.env.PORT)
server.listen(port)

module.exports = server
