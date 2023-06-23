// Importation modules nécessaires
const dotenv = require('dotenv')
const mysql = require('mysql')

// Init env
dotenv.config()

// Connexion à la base de données
const dbCo = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME
})

module.exports = dbCo
