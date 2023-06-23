/* eslint-disable no-unused-vars */
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerGeneration = {
  swaggerDefinition: {
    openapi: 'x3.0.0',
    info: {
      title: 'API MANGE ET ANIME',
      version: '0.1.0'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['src/routes/*.js']
}

const swaggerSpec = swaggerJsDoc(swaggerGeneration)

// Importation des modules
const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')

// Définition des constantes qui utilise le middleware
const getConfigSwagger = require('./swagger.middleware')

// Définition des routes
router.use('/doc', swaggerUi.serve)
router.get('/doc', swaggerUi.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = router
