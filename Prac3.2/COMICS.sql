-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: COMICS
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `COMICS`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `COMICS` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `COMICS`;

--
-- Table structure for table `Author`
--

DROP TABLE IF EXISTS `Author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Author`
--

LOCK TABLES `Author` WRITE;
/*!40000 ALTER TABLE `Author` DISABLE KEYS */;
INSERT INTO `Author` VALUES (1,'John Broome'),(2,'Gardner Fox'),(3,'Jim Shooter'),(4,'Mark Millar'),(5,'Alan Moore'),(6,'Martin Nodell'),(7,'Bill Finger'),(8,'Stan Lee');
/*!40000 ALTER TABLE `Author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comics`
--

DROP TABLE IF EXISTS `Comics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `author` int(11) NOT NULL,
  `coverPage` varchar(32) NOT NULL,
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  CONSTRAINT `Comics_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Author` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comics`
--

LOCK TABLES `Comics` WRITE;
/*!40000 ALTER TABLE `Comics` DISABLE KEYS */;
INSERT INTO `Comics` VALUES (1,'Civil War','En una batalla entre Nitro y los Nuevos Guerreros,\nNitro exploto, aparentemente matando al equipo y a muchos civiles. Esto provoco\nque los Estados Unidos crearan el registro \'Arma Viviente de Destruccion Masiva\',\npara todos los individuos con superpoderes, lo que causo la division entre los heroes\nsobre aceptar el registro o no.',4,'http://bit.ly/2PCdZdg',2006),(2,'The Flash','Un superheroe capaz de correr a increibles velocidades,\na la par de una abrumadora velocidad de pensamiento, lectura y reaccion,\nademas de ser capaz de atravesar las paredes vibrando rapidamente.',1,'http://bit.ly/2Ef8pvk',1959),(3,'Secret Wars','Una entidad cosmica conocida como el Beyonder\nreune a una gran cantidad de superheroes y supervillanos en Mundo de Batalla,\nun planeta creado por el Beyonder, para ver quien ganaria en una batalla del\nbien contra el mal.',3,'http://bit.ly/2B9cwWw',1984),(4,'La broma asesina','Relato de la enesima huida del Joker de Arkham,\ndonde se nos contara por un lado sus origenes, ademas de su plan para\ndesquiciar al comisario Gordon, provocando su encuntro con Batman.',5,'http://bit.ly/2rvV1LD',1988);
/*!40000 ALTER TABLE `Comics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-14 14:49:35
