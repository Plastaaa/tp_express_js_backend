CREATE TABLE `dbtpbackjs`.`auteur` (`id` INT NOT NULL AUTO_INCREMENT , `nom` VARCHAR(64) NOT NULL , `prenom` VARCHAR(64) NOT NULL , `genreLitt` VARCHAR(64) NOT NULL , `age` INT(3) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `auteur` (`id`, `nom`, `prenom`, `genreLitt`, `age`) VALUES ('1', 'Dupont', 'Michel', 'Policier', '99'), ('2', 'Miche', 'Robert', 'Jeunesse', '67'), ('3', 'Baidou', 'Alfred', 'Roman', '79'), ('4', 'Uizad', 'Alicia', 'Psychologie', '32'), ('5', 'Frand', 'Guy', 'Policier', '99');