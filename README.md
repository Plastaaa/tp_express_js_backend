# Backend Express JS

Ce travail pratique autour de la bibliothèque Express JS s'appuie sur une base de données MySQL.

## Installation

Pour installer le projet utilisez [npm]([https://www.npmjs.com]) à la racine du projet.

```bash
npm install
```

Puis exécuter la commande suivante : 

```bash
npm run start
```

## Utilisation des routes

Les routes suivantes sont définies par défaut dans ce projet, elles permettent d'accèder aux données. Pensez à remplacer "localhost:8081" par l'adresse de votre serveur NodeJS local ou distant.

```js
//Adresse de test : localhost:8081/auteur
router.get('/auteur/', getAllAuteurs)

//Adresse de test : localhost:8081/auteur/1
router.get('/auteur/:id', getAuteurById)

//Adresse de test : localhost:8081/auteur/nom/Test
router.get('/auteur/nom/:nom', getAuteurByName)

//Adresse de test : localhost:8081/auteur?nom=Michel&prenom=Platini&genreLitt=Football&age=69
router.post('/auteur', createAuteur)

//Adresse de test : localhost:8081/auteur/1?nom=King&prenom=Stephen&genreLitt=Horreur&age=67
router.put('/auteur/:id', updateAuteur)

//Adresse de test : localhost:8081/auteur/2
router.delete('/auteur/:id', deleteAuteurById)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
