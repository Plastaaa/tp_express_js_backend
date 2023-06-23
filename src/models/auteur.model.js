/* eslint-disable no-unused-vars */
const db = require('../db/db-connect')
db.connect()

// Création d'un constructeur
const AuteurConstructor = function (auteur) {
  this.id = auteur.id
  this.nom = auteur.nom
  this.prenom = auteur.prenom
  this.genreLitt = auteur.genreLitt
  this.age = auteur.age
}

// Recup tous les auteurs
const getAllAuteursFromDB = result => {
  db.query('SELECT * FROM auteur;', (err, res) => {
    if (err) {
      console.log('Erreur recup tous les auteurs')
      result(err)
    } else {
      result(null, res)
    }
  })
}

const getAuteurByIdFromDB = (id, callback) => {
  const query = 'SELECT * FROM auteur WHERE id = ?'
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log('Erreur lors de la récupération de l\'auteur par ID :', err)
      callback(err, null)
    } else {
      if (result.length > 0) {
        const auteur = result[0]
        callback(null, auteur)
      } else {
        // Aucun auteur trouvé avec l'ID spécifié
        callback(null, null)
      }
    }
  })
}

const getAuteurByNameFromDB = (nom, callback) => {
  const query = 'SELECT * FROM auteur WHERE nom = ?'
  db.query(query, [nom], (err, result) => {
    if (err) {
      console.log('Erreur lors de la récupération de l\'auteur par Nom :', err)
      callback(err, null)
    } else {
      if (result.length > 0) {
        const auteur = result[0]
        callback(null, auteur)
      } else {
        callback(null, null)
      }
    }
  })
}

const createAuteurInDB = (nouveauAuteur, callback) => {
  const { nom, prenom, genreLitt, age } = nouveauAuteur
  const query = 'INSERT INTO auteur (nom, prenom, genreLitt, age) VALUES (?, ?, ?, ?)'
  const values = [nom, prenom, genreLitt, age]

  db.query(query, values, (err, result) => {
    if (err) {
      console.log('Erreur lors de la création de l\'auteur :', err)
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

const updateAuteurInDB = (nouveauAuteur, callback) => {
  const { nom, prenom, genreLitt, age, id } = nouveauAuteur
  const query = 'UPDATE auteur SET nom = ?, prenom = ?, genreLitt = ?, age = ? WHERE id = ?'
  const values = [nom, prenom, genreLitt, age, id]

  db.query(query, values, (err, result) => {
    if (err) {
      console.log('Erreur lors de la création de l\'auteur :', err)
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

const deleteAuteurByIdFromDB = (id, callback) => {
  const query = 'DELETE FROM auteur WHERE id = ?'
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log('Erreur lors de la récupération de l\'auteur par ID :', err)
      callback(err, null)
    } else {
      if (result.length > 0) {
        const auteur = result[0]
        callback(null, auteur)
      } else {
        callback(null, null)
      }
    }
  })
}

module.exports = { getAllAuteursFromDB, getAuteurByIdFromDB, getAuteurByNameFromDB, createAuteurInDB, updateAuteurInDB, deleteAuteurByIdFromDB }
