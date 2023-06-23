// Import express
const router = require('express').Router()

// Definition des constantes
const {
  getAllAuteurs,
  getAuteurById,
  getAuteurByName,
  createAuteur,
  updateAuteur,
  deleteAuteurById
} = require('../controllers/auteur.controller')

// Definition des routes
// auteur
router.get('/auteur/', getAllAuteurs)

router.get('/auteur/:id', getAuteurById)

router.get('/auteur/nom/:nom', getAuteurByName)

router.post('/auteur', createAuteur)

router.put('/auteur/:id', updateAuteur)

router.delete('/auteur/:id', deleteAuteurById)

// Ouvrage
// router.get('/auteur/:id/ouvrage', getOuvrageByAuteurId)

module.exports = router
