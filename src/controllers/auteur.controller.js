// Import model
const auteurModel = require('../models/auteur.model')

// Recup tous les auteurs
const getAllAuteurs = (req, res) => {
  auteurModel.getAllAuteursFromDB((err, results) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Une erreur est survenue auteurs.'
      })
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.send(results)
    }
  })
}

const getAuteurById = (req, res) => {
  const id = req.params.id

  // Utilisez l'ID pour effectuer des opérations de récupération de l'auteur par ID
  // par exemple, en utilisant votre modèle auteurModel

  auteurModel.getAuteurByIdFromDB(id, (err, auteur) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération de l'auteur par ID."
      })
    } else {
      if (auteur) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(auteur)
      } else {
        res.status(404).send({
          message: "Auteur introuvable avec l'ID spécifié."
        })
      }
    }
  })
}

const getAuteurByName = (req, res) => {
  const nom = req.params.nom

  auteurModel.getAuteurByNameFromDB(nom, (err, auteur) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération de l'auteur par nom."
      })
    } else {
      if (auteur) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(auteur)
      } else {
        res.status(404).send({
          message: 'Auteur introuvable avec le nom spécifié.'
        })
      }
    }
  })
}

const createAuteur = (req, res) => {
  const nom = req.query.nom
  const prenom = req.query.prenom
  const genreLitt = req.query.genreLitt
  const age = req.query.age

  const nouveauAuteur = {
    nom,
    prenom,
    genreLitt,
    age
  }

  auteurModel.createAuteurInDB(nouveauAuteur, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Une erreur est survenue lors de la création de l\'auteur.'
      })
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(201).send({
        message: 'Nouvel auteur créé avec succès.',
        id: result.insertId
      })
    }
  })
}

const updateAuteur = (req, res) => {
  const id = req.params.id
  const nom = req.query.nom
  const prenom = req.query.prenom
  const genreLitt = req.query.genreLitt
  const age = req.query.age

  const nouveauAuteur = {
    nom,
    prenom,
    genreLitt,
    age,
    id
  }

  res.setHeader('Access-Control-Allow-Origin', '*')
  auteurModel.updateAuteurInDB(nouveauAuteur, (err, result) => {
    if (err) {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(500).send({
        message: err.message || 'Une erreur est survenue lors de la modification de l\'auteur.'
      })
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(201).send({
        message: 'Modification de auteur effectuée avec succès.'
      })
    }
  })
}

const deleteAuteurById = (req, res) => {
  const id = req.params.id

  auteurModel.deleteAuteurByIdFromDB(id, (err, auteur) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Erreur lors de la suppression de l'auteur par ID."
      })
    } else {
      if (auteur) {
        res.send(auteur)
      } else {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(404).send({
          message: 'Auteur supprimé.'
        })
      }
    }
  })
}

module.exports = { getAllAuteurs, getAuteurById, getAuteurByName, createAuteur, updateAuteur, deleteAuteurById }
