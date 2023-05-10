-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: domum_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS domum_db;
CREATE DATABASE domum_db;
USE domum_db;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `assessment` decimal(10,0) NOT NULL DEFAULT 0,
  `max_place` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` (`id`, `name`, `description`, `price`, `assessment`, `max_place`, `createdAt`, `updatedAt`) VALUES
(1, 'Senderismo', 'Lorem ipsum dolor', 400, '0', 7, '2023-03-27 16:34:44', '2023-04-03 00:28:05'),
(2, 'Fogata', 'Lorem ipsum dolor', 450, '0', 4, '2023-03-27 16:34:44', '2023-04-03 00:28:05'),
(3, 'Senderismo', 'Lorem ipsum dolor', 380, '0', 8, '2023-03-27 16:34:44', '2023-04-03 00:28:05'),
(4, 'Senderismo', 'Lorem ipsum dolor', 520, '0', 2, '2023-03-27 16:34:44', '2023-04-03 00:28:05'),
(5, 'Actividad', 'lorem impus dolor', 370, '0', 5, '2023-04-04 00:14:00', '2023-04-04 00:18:27'),
(6, 'Senderismo', 'Caminata por senderos o veredas para disfrutar espacios naturales.', 2500, '0', 10, '2023-05-09 07:55:57', '2023-05-09 07:55:57'),
(7, 'Fogata', 'Elemento natural que nos arropa, nos da calor y luz por las noches.', 1000, '0', 30, '2023-05-10 07:11:48', '2023-05-10 07:11:48'),
(8, 'Cabalgata', 'Disfrutar de la naturaleza a caballo', 1500, '0', 1, '2023-05-10 07:17:58', '2023-05-10 07:17:58'),
(9, 'Bicicletas Familiar', 'Paseo en bicicletas para toda la familia', 600, '0', 1, '2023-05-10 07:19:40', '2023-05-10 07:19:40'),
(10, 'Spa', 'El Spa cuenta con Masajes, Jacuzzi y Sauna para que te relarte', 2000, '0', 1, '2023-05-10 07:24:15', '2023-05-10 07:24:15'),
(11, 'Piscina', 'piscina para disfrutar con toda la familia', 1200, '0', 1, '2023-05-10 07:26:20', '2023-05-10 07:26:20'),
(12, 'Piscina Climatizada', 'Piscina Climatizada ideal para distar en familia', 1500, '0', 1, '2023-05-10 07:28:09', '2023-05-10 07:28:09'),
(13, 'Acuagym', 'Acuagym con los profes del complejo Domun ', 1000, '0', 1, '2023-05-10 07:30:23', '2023-05-10 07:30:23'),
(14, 'Kayak', 'Paseo por el lago en kayak duracion de 30min', 700, '0', 1, '2023-05-10 07:32:20', '2023-05-10 07:32:20');

/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_assessment`
--

DROP TABLE IF EXISTS `activity_assessment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_assessment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `assessment` decimal(10,0) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `activity_assessment_FK` (`user_id`),
  KEY `activity_assessment_FK_1` (`activity_id`),
  CONSTRAINT `activity_assessment_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `activity_assessment_FK_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_assessment`
--

LOCK TABLES `activity_assessment` WRITE;
/*!40000 ALTER TABLE `activity_assessment` DISABLE KEYS */;
INSERT INTO `activity_assessment` VALUES (1,1,1,5,'2023-04-21 20:43:03','2023-04-21 20:43:03'),(2,2,1,10,'2023-04-21 20:43:22','2023-04-21 20:43:22'),(3,1,2,5,'2023-04-21 20:44:04','2023-04-21 20:44:04'),(4,2,2,8,'2023-04-21 20:44:04','2023-04-21 20:44:04');
/*!40000 ALTER TABLE `activity_assessment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_hours`
--

DROP TABLE IF EXISTS `activity_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_hours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) NOT NULL,
  `weekday_hours` varchar(100) DEFAULT NULL,
  `second_weekday_hours` varchar(100) DEFAULT NULL,
  `weekend_hours` varchar(100) DEFAULT NULL,
  `second_weekend_hours` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `activity_hours_FK` (`activity_id`),
  CONSTRAINT `activity_hours_FK` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_hours`
--

LOCK TABLES `activity_hours` WRITE;
/*!40000 ALTER TABLE `activity_hours` DISABLE KEYS */;
INSERT INTO `activity_hours` (`id`, `activity_id`, `weekday_hours`, `second_weekday_hours`, `weekend_hours`, `second_weekend_hours`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'desde: 7:00, hasta: 11:00', 'desde 7:00, hasta 11:00', 'desde: 11:00, hasta: 13:00', NULL, '2023-04-13 18:43:34', '2023-04-13 19:07:20'),
(2, 2, 'desde: 8:00, hasta: 11:30', '', 'desde: 6:00, hasta: 10:00', NULL, '2023-04-13 18:45:42', '2023-04-13 18:45:42'),
(3, 3, 'desde: 10:00, hasta: 3:00', 'desde 7:00, hasta 11:00', 'desde: 11:00, hasta: 13:00', NULL, '2023-04-13 18:47:09', '2023-04-13 18:47:09'),
(4, 4, 'desde: 9:00, hasta: 1:00', NULL, NULL, NULL, '2023-04-13 18:47:09', '2023-04-13 18:47:09'),
(5, 5, 'desde: 7:00, hasta: 8:00', NULL, 'desde: 8:00, hasta: 4:00', NULL, '2023-04-13 18:48:18', '2023-04-13 18:48:18'),
(6, 6, 'desde: 08:00, hasta 16:00', NULL, 'desde: 09:30, hasta 16:00', NULL, '2023-05-09 07:55:58', '2023-05-09 07:55:58'),
(7, 7, 'desde: 20:00, hasta 22:00', NULL, 'desde: 20:00, hasta 00:00', NULL, '2023-05-10 07:11:56', '2023-05-10 07:11:56'),
(8, 8, 'desde: 10:00, hasta 16:00', NULL, 'desde: 10:00, hasta 17:00', NULL, '2023-05-10 07:17:59', '2023-05-10 07:17:59'),
(9, 9, 'desde: 10:00, hasta 17:00', NULL, 'desde: 10:00, hasta 18:00', NULL, '2023-05-10 07:19:42', '2023-05-10 07:19:42'),
(10, 10, 'desde: 08:00, hasta 16:00', NULL, 'desde: 09:00, hasta 17:00', NULL, '2023-05-10 07:24:16', '2023-05-10 07:24:16'),
(11, 11, 'desde: 10:00, hasta 19:00', NULL, 'desde: 10:00, hasta 20:00', NULL, '2023-05-10 07:26:21', '2023-05-10 07:26:21'),
(12, 12, 'desde: 10:00, hasta 19:00', NULL, 'desde: 10:00, hasta 19:00', NULL, '2023-05-10 07:28:10', '2023-05-10 07:28:10'),
(13, 13, 'desde: 14:00, hasta 17:00', NULL, 'desde: 13:00, hasta 17:00', NULL, '2023-05-10 07:30:24', '2023-05-10 07:30:24'),
(14, 14, 'desde: 09:00, hasta 17:00', NULL, 'desde: 10:00, hasta 17:00', NULL, '2023-05-10 07:32:21', '2023-05-10 07:32:21');

/*!40000 ALTER TABLE `activity_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_user`
--

DROP TABLE IF EXISTS `activity_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `day` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cart_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `activity_user_FK` (`activity_id`),
  KEY `activity_user_FK_1` (`user_id`),
  KEY `activity_user_FK_2` (`cart_id`),
  CONSTRAINT `activity_user_FK` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`),
  CONSTRAINT `activity_user_FK_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `activity_user_FK_2` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_user`
--

LOCK TABLES `activity_user` WRITE;
/*!40000 ALTER TABLE `activity_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assessment_cottage`
--

DROP TABLE IF EXISTS `assessment_cottage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment_cottage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cottage_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `assessment` decimal(10,0) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `assessment_cottage_FK` (`cottage_id`),
  KEY `assessment_cottage_FK_1` (`user_id`),
  CONSTRAINT `assessment_cottage_FK` FOREIGN KEY (`cottage_id`) REFERENCES `cottages` (`id`),
  CONSTRAINT `assessment_cottage_FK_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment_cottage`
--

LOCK TABLES `assessment_cottage` WRITE;
/*!40000 ALTER TABLE `assessment_cottage` DISABLE KEYS */;
INSERT INTO `assessment_cottage` VALUES (1,1,1,10,'2023-04-21 20:44:20','2023-04-21 20:44:20'),(2,2,1,8,'2023-04-21 20:44:38','2023-04-21 20:44:38'),(3,3,1,7,'2023-04-21 20:45:09','2023-04-21 20:45:09'),(4,1,2,8,'2023-04-21 20:45:13','2023-04-21 20:45:13'),(5,2,2,7,'2023-04-21 20:45:39','2023-04-21 20:45:39'),(6,3,2,8,'2023-04-21 20:45:39','2023-04-21 20:45:39');
/*!40000 ALTER TABLE `assessment_cottage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `order_status` varchar(100) NOT NULL,
  `payment_method` varchar(100) NOT NULL,
  `total_cost` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `cart_FK_2` (`user_id`),
  CONSTRAINT `cart_FK_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cottages`
--

DROP TABLE IF EXISTS `cottages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cottages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `beds` int(11) NOT NULL,
  `assessment` decimal(10,0) NOT NULL DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `guest` int(11) NOT NULL,
  `bedrooms` int(11) NOT NULL,
  `bathrooms` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cottages`
--

LOCK TABLES `cottages` WRITE;
/*!40000 ALTER TABLE `cottages` DISABLE KEYS */;
INSERT INTO `cottages` (`id`, `name`, `price`, `description`, `beds`, `assessment`, `createdAt`, `updatedAt`, `guest`, `bedrooms`, `bathrooms`) VALUES
(1, 'Los Pinos', 9000, 'Patagónica, sobre los árboles.', 3, '0', '2023-03-27 15:58:56', '2023-05-10 14:49:45', 4, 2, 1),
(2, 'El Granero', 8500, 'Típico americano, en 2 plantas con el dormitorio en el altillo, un gran hogar a leña y baño característico del campo.', 3, '0', '2023-03-27 16:05:38', '2023-05-10 14:50:12', 3, 3, 1),
(3, 'Los Naranjos', 9500, 'Moderna, en 2 plantas con camas extragrandes, y un reconfortante jacuzzi doble.', 5, '0', '2023-03-27 16:05:38', '2023-05-10 14:51:23', 6, 3, 2),
(4, 'Los Liquidámbar', 12000, 'Sobre los árboles ambientada a lo María Antonieta.', 3, '0', '2023-03-27 16:05:38', '2023-05-10 14:50:53', 3, 2, 1),

/*!40000 ALTER TABLE `cottages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount_codes`
--

DROP TABLE IF EXISTS `discount_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount_codes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(100) NOT NULL,
  `discount` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount_codes`
--

LOCK TABLES `discount_codes` WRITE;
/*!40000 ALTER TABLE `discount_codes` DISABLE KEYS */;
INSERT INTO `discount_codes` VALUES (1,'unDescuento',10,'2023-04-21 11:38:31','2023-04-21 11:38:31'),(2,'#SuperCodigo',30,'2023-04-21 11:39:28','2023-04-21 11:39:28'),(3,'Verano2023',25,'2023-04-21 11:39:52','2023-04-21 11:39:52');
/*!40000 ALTER TABLE `discount_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cottage_id` int(11) DEFAULT NULL,
  `image` text NOT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `images_FK` (`cottage_id`),
  KEY `images_FK_1` (`activity_id`),
  CONSTRAINT `images_FK` FOREIGN KEY (`cottage_id`) REFERENCES `cottages` (`id`),
  CONSTRAINT `images_FK_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` (`id`, `cottage_id`, `image`, `activity_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, '/images/cottageImages/liquidambar01.jpg', NULL, '2023-04-03 22:51:41', '2023-04-03 22:51:41'),
(2, 1, '/images/cottageImages/liquidambar02.jpg', NULL, '2023-04-03 22:51:59', '2023-04-03 22:51:59'),
(3, 1, '/images/cottageImages/liquidambar03.jpg', NULL, '2023-04-03 22:52:19', '2023-04-03 22:52:19'),
(4, 1, '/images/cottageImages/liquidambar04.jpg', NULL, '2023-04-03 22:53:23', '2023-04-03 22:53:23'),
(5, 1, '/images/cottageImages/liquidambar05.jpg', NULL, '2023-04-03 22:53:23', '2023-04-03 22:53:23'),
(6, 2, '/images/cottageImages/naranjos01.jpg', NULL, '2023-04-03 22:53:24', '2023-04-03 22:53:24'),
(7, 2, '/images/cottageImages/naranjos02.jpg', NULL, '2023-04-03 22:54:32', '2023-04-03 22:55:44'),
(8, 2, '/images/cottageImages/naranjos03.jpg', NULL, '2023-04-03 22:54:32', '2023-04-03 22:55:39'),
(9, 2, '/images/cottageImages/naranjos04.jpg', NULL, '2023-04-03 22:54:32', '2023-04-03 22:55:33'),
(10, 2, '/images/cottageImages/naranjos05.jpg', NULL, '2023-04-03 22:54:32', '2023-04-03 22:55:29'),
(11, 2, '/images/cottageImages/naranjos06.jpg', NULL, '2023-04-03 22:54:32', '2023-04-03 22:55:22'),
(12, 3, '/images/cottageImages/pinos01.jpg', NULL, '2023-04-03 22:54:57', '2023-04-03 22:54:57'),
(13, 3, '/images/cottageImages/pinos02.jpg', NULL, '2023-04-03 22:56:02', '2023-04-03 22:56:02'),
(14, 4, '/images/cottageImages/pinos03.jpg', NULL, '2023-04-03 22:57:28', '2023-04-03 22:57:28'),
(15, 4, '/images/cottageImages/pinos04.jpg', NULL, '2023-04-03 22:57:28', '2023-04-03 22:57:28'),
(16, 5, '/images/cottageImages/pinos05.jpg', NULL, '2023-04-03 22:58:17', '2023-04-03 22:58:17'),
(17, 5, '/images/cottageImages/pinos06.jpg', NULL, '2023-04-03 22:59:07', '2023-04-03 22:59:07'),
(18, NULL, '/images/cottageImages/pinos02.jpg', 1, '2023-04-04 00:12:55', '2023-04-04 00:15:17'),
(19, NULL, '/images/cottageImages/naranjos02.jpg', 1, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(20, NULL, '/images/cottageImages/liquidambar02.jpg', 1, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(21, NULL, '/images/cottageImages/liquidambar03.jpg', 2, '2023-04-04 00:12:55', '2023-04-04 00:23:41'),
(22, NULL, '/images/cottageImages/naranjos04.jpg', 2, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(23, NULL, '/images/cottageImages/pinos05.jpg', 2, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(24, NULL, '/images/cottageImages/pinos06.jpg', 3, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(25, NULL, '/images/cottageImages/liquidambar04.jpg', 3, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(26, NULL, '/images/cottageImages/naranjos01.jpg', 3, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(27, NULL, '/images/cottageImages/pinos04.jpg', 4, '2023-04-04 00:12:55', '2023-04-04 00:15:56'),
(28, NULL, '/images/cottageImages/liquidambar01.jpg', 4, '2023-04-04 00:12:55', '2023-04-04 00:15:57'),
(29, NULL, '/images/cottageImages/naranjos03.jpg', 4, '2023-04-04 00:12:56', '2023-04-04 00:15:57'),
(30, NULL, '/images/cottageImages/naranjos05.jpg', 5, '2023-04-04 00:14:26', '2023-04-04 00:15:57'),
(31, NULL, '/images/cottageImages/naranjos06.jpg', 5, '2023-04-04 00:14:26', '2023-04-04 00:15:57'),
(32, NULL, '/images/cottageImages/pinos05.jpg', 5, '2023-04-04 00:14:26', '2023-04-04 00:15:57'),
(39, NULL, '/images/activityImages/1683618957213_img_activity.jpg', 6, '2023-05-09 07:55:57', '2023-05-09 07:55:57'),
(40, NULL, '/images/activityImages/1683618957306_img_activity.jpg', 6, '2023-05-09 07:55:57', '2023-05-09 07:55:57'),
(41, NULL, '/images/activityImages/1683618957355_img_activity.jpg', 6, '2023-05-09 07:55:57', '2023-05-09 07:55:57'),
(42, NULL, '/images/activityImages/1683702708479_img_activity.jpg', 7, '2023-05-10 07:11:56', '2023-05-10 07:11:56'),
(43, NULL, '/images/activityImages/1683702708480_img_activity.jpg', 7, '2023-05-10 07:11:56', '2023-05-10 07:11:56'),
(44, NULL, '/images/activityImages/1683702708481_img_activity.jpg', 7, '2023-05-10 07:11:56', '2023-05-10 07:11:56'),
(45, NULL, '/images/activityImages/1683703078787_img_activity.jpg', 8, '2023-05-10 07:17:58', '2023-05-10 07:17:58'),
(46, NULL, '/images/activityImages/1683703078796_img_activity.jpg', 8, '2023-05-10 07:17:58', '2023-05-10 07:17:58'),
(47, NULL, '/images/activityImages/1683703078810_img_activity.jpg', 8, '2023-05-10 07:17:58', '2023-05-10 07:17:58'),
(48, NULL, '/images/activityImages/1683703180721_img_activity.jpg', 9, '2023-05-10 07:19:42', '2023-05-10 07:19:42'),
(49, NULL, '/images/activityImages/1683703180774_img_activity.jpg', 9, '2023-05-10 07:19:42', '2023-05-10 07:19:42'),
(50, NULL, '/images/activityImages/1683703180784_img_activity.jpg', 9, '2023-05-10 07:19:42', '2023-05-10 07:19:42'),
(51, NULL, '/images/activityImages/1683703455667_img_activity.jpg', 10, '2023-05-10 07:24:16', '2023-05-10 07:24:16'),
(52, NULL, '/images/activityImages/1683703455667_img_activity.jpg', 10, '2023-05-10 07:24:16', '2023-05-10 07:24:16'),
(53, NULL, '/images/activityImages/1683703455845_img_activity.jpg', 10, '2023-05-10 07:24:16', '2023-05-10 07:24:16'),
(54, NULL, '/images/activityImages/1683703579732_img_activity.jpg', 11, '2023-05-10 07:26:21', '2023-05-10 07:26:21'),
(55, NULL, '/images/activityImages/1683703579835_img_activity.jpg', 11, '2023-05-10 07:26:21', '2023-05-10 07:26:21'),
(56, NULL, '/images/activityImages/1683703580521_img_activity.jpg', 11, '2023-05-10 07:26:21', '2023-05-10 07:26:21'),
(57, NULL, '/images/activityImages/1683703689482_img_activity.jpg', 12, '2023-05-10 07:28:10', '2023-05-10 07:28:10'),
(58, NULL, '/images/activityImages/1683703689488_img_activity.jpg', 12, '2023-05-10 07:28:10', '2023-05-10 07:28:10'),
(59, NULL, '/images/activityImages/1683703689499_img_activity.jpg', 12, '2023-05-10 07:28:10', '2023-05-10 07:28:10'),
(60, NULL, '/images/activityImages/1683703823245_img_activity.jpg', 13, '2023-05-10 07:30:23', '2023-05-10 07:30:23'),
(61, NULL, '/images/activityImages/1683703823273_img_activity.jpg', 13, '2023-05-10 07:30:23', '2023-05-10 07:30:23'),
(62, NULL, '/images/activityImages/1683703823503_img_activity.jpg', 13, '2023-05-10 07:30:23', '2023-05-10 07:30:23'),
(63, NULL, '/images/activityImages/1683703940719_img_activity.jpg', 14, '2023-05-10 07:32:20', '2023-05-10 07:32:20'),
(64, NULL, '/images/activityImages/1683703940725_img_activity.jpg', 14, '2023-05-10 07:32:20', '2023-05-10 07:32:20'),
(65, NULL, '/images/activityImages/1683703940745_img_activity.jpg', 14, '2023-05-10 07:32:20', '2023-05-10 07:32:20');

/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rents`
--

DROP TABLE IF EXISTS `rents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cottage_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_in` date NOT NULL,
  `date_out` date NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cart_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rents_FK` (`cottage_id`),
  KEY `rents_FK_1` (`user_id`),
  KEY `rents_FK_2` (`cart_id`),
  CONSTRAINT `rents_FK` FOREIGN KEY (`cottage_id`) REFERENCES `cottages` (`id`),
  CONSTRAINT `rents_FK_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `rents_FK_2` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rents`
--

LOCK TABLES `rents` WRITE;
/*!40000 ALTER TABLE `rents` DISABLE KEYS */;
/*!40000 ALTER TABLE `rents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user','2023-03-27 15:43:40','2023-03-27 15:43:40'),(2,'admin','2023-03-27 15:47:13','2023-03-27 15:47:13');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cottage_id` int(11) NOT NULL,
  `service` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `services_FK` (`cottage_id`),
  CONSTRAINT `services_FK` FOREIGN KEY (`cottage_id`) REFERENCES `cottages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,1,'Wifi','2023-04-20 16:40:25','2023-04-20 16:40:25'),(2,1,'Cocina','2023-04-20 16:40:42','2023-04-20 16:40:42'),(3,1,'Calefacción','2023-04-20 16:41:31','2023-04-20 16:41:31'),(4,1,'Pileta','2023-04-20 16:41:31','2023-04-20 16:41:31'),(5,2,'WiFi','2023-04-20 16:42:21','2023-04-20 16:42:21'),(6,2,'Cocina','2023-04-20 16:42:21','2023-04-20 16:42:21'),(7,2,'Calefacción','2023-04-20 16:42:21','2023-04-20 16:42:21'),(8,3,'Wifi','2023-04-20 16:42:21','2023-04-20 16:42:21'),(9,3,'Pileta','2023-04-20 16:43:44','2023-04-20 16:43:44'),(10,3,'Cocina','2023-04-20 16:43:44','2023-04-20 16:43:44'),(11,4,'WiFi','2023-04-20 16:43:44','2023-04-20 16:43:44'),(12,4,'Calefacción','2023-04-20 16:43:44','2023-04-20 16:43:44'),(13,4,'Pileta','2023-04-20 16:43:44','2023-04-20 16:43:44'),(14,5,'WiFi','2023-04-20 16:43:44','2023-04-20 16:43:44'),(15,5,'Cocina','2023-04-20 16:43:44','2023-04-20 16:43:44'),(16,5,'Calefacción','2023-04-20 16:43:44','2023-04-20 16:43:44');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(100) DEFAULT NULL,
  `city` text DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `password` text NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `rol_id` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `users_rol_id_IDX` (`rol_id`) USING BTREE,
  KEY `users_address_id_IDX` (`address_id`) USING BTREE,
  CONSTRAINT `users_FK` FOREIGN KEY (`address_id`) REFERENCES `user_address` (`id`),
  CONSTRAINT `users_FK_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'para@probar.com','123456','123456','un','usuario','/images/avatars/usuarioDefault.jpg',NULL,1,'2023-03-27 15:49:13','2023-03-27 16:41:15'),(2,'cosme@gmail.com','123456','123456','cosme','fulanito','/images/avatars/usuarioDefault.jpg',NULL,1,'2023-04-21 20:41:32','2023-04-21 20:41:32'),(3,'usuario@hotmail.com','123456','Contraseña','Carlos','Santana','/images/avatars/usuarioDefault.jpg',NULL,1,'2023-04-21 20:42:39','2023-04-21 20:42:39');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'domum_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-21 20:53:58
