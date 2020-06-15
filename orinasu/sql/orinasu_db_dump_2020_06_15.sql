-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: orinasu_db
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calendar` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `yotei` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `memo` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `date` (`date`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES (4,'0000-00-00','','fff'),(13,'2020-06-14','予定','予定'),(14,'2020-06-01','１日','メモ'),(15,'2020-06-04','4日の予定','4日のメモ'),(16,'2020-06-30','月末予定','月末'),(17,'2020-05-11','','GWあけ。'),(18,'2021-01-02','1/2','1/2');
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `calendar_join`
--

DROP TABLE IF EXISTS `calendar_join`;
/*!50001 DROP VIEW IF EXISTS `calendar_join`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `calendar_join` (
  `id` tinyint NOT NULL,
  `日付` tinyint NOT NULL,
  `予定` tinyint NOT NULL,
  `メモ` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'バッグ'),(2,'ポーチ'),(3,'お財布'),(4,'マスク'),(5,'アクセサリ');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `index_access_log`
--

DROP TABLE IF EXISTS `index_access_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `index_access_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `ip_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `index_access_log`
--

LOCK TABLES `index_access_log` WRITE;
/*!40000 ALTER TABLE `index_access_log` DISABLE KEYS */;
INSERT INTO `index_access_log` VALUES (1,'2020-05-18 10:01:05','192.168.1.15','ok'),(2,'2020-05-18 10:01:09','192.168.1.15','ok'),(3,'2020-05-18 10:18:38','192.168.1.15','ok'),(4,'2020-05-18 11:41:11','192.168.1.15','ok'),(5,'2020-05-18 11:41:48','192.168.1.15','ok'),(6,'2020-05-18 13:06:42','192.168.1.15','ok'),(7,'2020-05-18 13:31:45','192.168.1.15','ok'),(8,'2020-05-18 13:33:50','192.168.1.15','ok'),(9,'2020-05-18 13:34:45','192.168.1.15','ok'),(10,'2020-05-18 13:36:31','192.168.1.15','ok'),(11,'2020-05-18 13:38:34','192.168.1.15','ok'),(12,'2020-05-18 13:40:57','192.168.1.15','ok'),(13,'2020-05-18 13:41:26','192.168.1.15','ok'),(14,'2020-05-18 13:49:47','192.168.1.15','ok'),(15,'2020-05-18 13:50:20','192.168.1.15','ok'),(16,'2020-05-18 13:50:36','192.168.1.15','ok'),(17,'2020-05-18 14:02:17','192.168.1.15','ok'),(18,'2020-05-18 14:02:51','192.168.1.15','ok'),(19,'2020-05-18 14:08:03','192.168.1.15','ok'),(20,'2020-05-18 14:08:44','192.168.1.15','ok'),(21,'2020-05-18 14:09:08','192.168.1.15','ok'),(22,'2020-05-18 14:12:05','192.168.1.15','ok'),(23,'2020-05-18 14:13:03','192.168.1.15','ok'),(24,'2020-05-18 14:13:25','192.168.1.15','ok'),(25,'2020-05-18 16:49:54','192.168.1.15','ok'),(26,'2020-05-18 17:02:53','192.168.1.15','ok'),(27,'2020-05-18 17:04:49','192.168.1.15','ok'),(28,'2020-05-18 17:05:44','192.168.1.15','ok'),(29,'2020-05-18 17:07:16','192.168.1.15','ok'),(30,'2020-05-18 17:08:12','192.168.1.15','ok'),(31,'2020-05-18 18:01:45','192.168.1.15','ok'),(32,'2020-05-18 18:02:33','192.168.1.15','ok'),(33,'2020-05-18 18:02:56','192.168.1.15','ok'),(34,'2020-05-18 18:03:49','192.168.1.15','ok'),(35,'2020-05-18 18:04:58','192.168.1.15','ok'),(36,'2020-05-18 18:06:00','192.168.1.15','ok'),(37,'2020-05-18 18:06:46','192.168.1.15','ok'),(38,'2020-05-18 18:06:54','192.168.1.15','ok'),(39,'2020-05-18 18:08:12','192.168.1.15','ok'),(40,'2020-05-18 18:08:58','192.168.1.15','ok'),(41,'2020-05-18 18:10:58','192.168.1.15','ok'),(42,'2020-05-18 18:11:40','192.168.1.15','ok'),(43,'2020-05-18 18:12:36','192.168.1.15','ok'),(44,'2020-05-18 18:13:57','192.168.1.15','ok'),(45,'2020-05-18 18:15:56','192.168.1.15','ok'),(46,'2020-05-18 18:16:31','192.168.1.15','ok'),(47,'2020-05-18 18:16:44','192.168.1.15','ok'),(48,'2020-05-18 18:19:09','192.168.1.15','ok'),(49,'2020-05-18 18:21:51','192.168.1.15','ok'),(50,'2020-05-18 18:22:02','192.168.1.15','ok'),(51,'2020-05-18 18:22:12','192.168.1.15','ok'),(52,'2020-05-18 18:22:23','192.168.1.15','ok'),(53,'2020-05-18 18:22:35','192.168.1.15','ok'),(54,'2020-05-18 18:25:28','192.168.1.15','ok'),(55,'2020-05-18 18:25:59','192.168.1.15','ok'),(56,'2020-05-18 18:26:50','192.168.1.15','ok'),(57,'2020-05-18 18:28:10','192.168.1.15','ok'),(58,'2020-05-18 18:30:11','192.168.1.15','ok'),(59,'2020-05-18 20:03:46','192.168.1.15','ok'),(60,'2020-05-18 20:04:08','192.168.1.15','ok'),(61,'2020-05-18 20:06:03','192.168.1.15','ok'),(62,'2020-05-18 20:07:32','192.168.1.15','ok'),(63,'2020-05-18 20:10:16','192.168.1.15','ok'),(64,'2020-05-18 20:12:10','192.168.1.15','ok'),(65,'2020-05-18 20:28:20','192.168.1.15','ok'),(66,'2020-05-19 05:45:37','192.168.1.15','ok'),(67,'2020-05-19 05:47:02','192.168.1.15','ok'),(68,'2020-05-19 05:48:43','192.168.1.15','ok'),(69,'2020-05-19 05:49:47','192.168.1.15','ok'),(70,'2020-05-19 05:51:12','192.168.1.15','ok'),(71,'2020-05-19 05:52:45','192.168.1.15','ok'),(72,'2020-05-19 05:53:09','192.168.1.15','ok'),(73,'2020-05-19 05:56:09','192.168.1.15','ok'),(74,'2020-05-19 05:58:53','192.168.1.15','ok'),(75,'2020-05-19 05:59:55','192.168.1.15','ok'),(76,'2020-05-19 06:00:15','192.168.1.15','ok'),(77,'2020-05-19 06:00:47','192.168.1.15','ok'),(78,'2020-05-19 06:01:08','192.168.1.15','ok'),(79,'2020-05-19 06:01:44','192.168.1.15','ok'),(80,'2020-05-19 06:05:52','192.168.1.15','ok'),(81,'2020-05-19 06:21:23','192.168.1.15','ok'),(82,'2020-05-19 06:21:44','192.168.1.15','ok'),(83,'2020-05-19 06:22:29','192.168.1.15','ok'),(84,'2020-05-19 06:26:05','192.168.1.15','ok'),(85,'2020-05-19 06:27:56','192.168.1.15','ok'),(86,'2020-05-19 06:33:03','192.168.1.15','ok'),(87,'2020-05-19 06:33:49','192.168.1.15','ok'),(88,'2020-05-19 06:35:12','192.168.1.15','ok'),(89,'2020-05-19 06:49:43','192.168.1.15','ok'),(90,'2020-05-19 06:50:35','192.168.1.15','ok'),(91,'2020-05-19 06:50:59','192.168.1.15','ok'),(92,'2020-05-19 06:51:13','192.168.1.15','ok'),(93,'2020-05-19 06:56:01','192.168.1.15','ok'),(94,'2020-05-19 06:56:49','192.168.1.15','ok'),(95,'2020-05-19 06:59:21','192.168.1.15','ok'),(96,'2020-05-19 07:00:01','192.168.1.15','ok'),(97,'2020-05-19 07:04:05','192.168.1.15','ok'),(98,'2020-05-19 07:06:29','192.168.1.15','ok'),(99,'2020-05-19 07:53:44','192.168.1.15','ok'),(100,'2020-05-30 06:07:56','192.168.1.15','ok'),(101,'2020-05-30 06:08:53','192.168.1.15','ok'),(102,'2020-05-30 06:09:05','192.168.1.15','ok'),(103,'2020-05-30 06:10:05','192.168.1.15','ok'),(104,'2020-05-30 06:10:21','192.168.1.15','ok'),(105,'2020-05-30 06:10:39','192.168.1.15','ok'),(106,'2020-05-30 06:11:11','192.168.1.15','ok'),(107,'2020-05-30 06:11:28','192.168.1.15','ok'),(108,'2020-05-30 06:13:40','192.168.1.15','ok'),(109,'2020-05-30 06:14:11','192.168.1.15','ok'),(110,'2020-05-30 06:14:53','192.168.1.15','ok'),(111,'2020-05-30 06:15:14','192.168.1.15','ok'),(112,'2020-05-30 06:15:43','192.168.1.15','ok'),(113,'2020-05-30 06:16:52','192.168.1.15','ok'),(114,'2020-05-30 07:00:04','192.168.1.15','ok'),(115,'2020-05-30 07:00:22','192.168.1.15','ok'),(116,'2020-05-30 07:03:43','192.168.1.15','ok'),(117,'2020-05-30 07:12:35','192.168.1.15','ok'),(118,'2020-05-30 07:15:12','192.168.1.15','ok'),(119,'2020-05-30 07:19:57','192.168.1.15','ok'),(120,'2020-05-30 07:21:48','192.168.1.15','ok'),(121,'2020-05-30 07:22:20','192.168.1.15','ok'),(122,'2020-05-30 07:23:52','192.168.1.15','ok'),(123,'2020-05-30 07:25:13','192.168.1.15','ok'),(124,'2020-05-30 07:25:35','192.168.1.15','ok'),(125,'2020-05-30 07:26:35','192.168.1.15','ok'),(126,'2020-05-30 07:27:28','192.168.1.15','ok'),(127,'2020-05-31 06:04:05','192.168.1.15','ok'),(128,'2020-05-31 06:04:17','192.168.1.15','ok'),(129,'2020-05-31 06:07:11','192.168.1.15','ok'),(130,'2020-05-31 07:00:06','192.168.1.15','ok');
/*!40000 ALTER TABLE `index_access_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ip_address`
--

DROP TABLE IF EXISTS `ip_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ip_address` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ip_address` (`ip_address`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ip_address`
--

LOCK TABLES `ip_address` WRITE;
/*!40000 ALTER TABLE `ip_address` DISABLE KEYS */;
INSERT INTO `ip_address` VALUES (9,'192.168.1.10'),(10,'192.168.1.12'),(11,'192.168.1.13'),(12,'192.168.1.15'),(1,'192.168.1.2'),(2,'192.168.1.3'),(3,'192.168.1.4'),(4,'192.168.1.5'),(5,'192.168.1.6'),(6,'192.168.1.7'),(7,'192.168.1.8'),(8,'192.168.1.9');
/*!40000 ALTER TABLE `ip_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `myouji` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `namae` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `sun` tinyint(3) unsigned DEFAULT NULL,
  `mon` tinyint(3) unsigned DEFAULT NULL,
  `tue` tinyint(3) unsigned DEFAULT NULL,
  `wed` tinyint(3) unsigned DEFAULT NULL,
  `thu` tinyint(3) unsigned DEFAULT NULL,
  `fri` tinyint(3) unsigned DEFAULT NULL,
  `sat` tinyint(3) unsigned DEFAULT NULL,
  `bikou` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `members_index` (`namae`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'星','健一',0,1,0,1,0,0,2,'利用'),(2,'田中','太郎',0,1,1,0,0,2,0,'利用中'),(3,'佐藤','健一',0,0,2,2,2,2,0,'利用開始'),(4,'おりなす','太郎',0,1,2,2,2,2,0,'おりなす'),(5,'田中','花子',0,2,2,2,2,2,2,'花子'),(6,'おりなす','花子',0,2,0,2,0,2,0,'花子'),(8,'佐藤','正一',0,1,0,1,0,1,0,'佐藤です。'),(15,'薬師丸','ひろ子',0,2,0,2,0,0,2,'ひげき');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `members_join`
--

DROP TABLE IF EXISTS `members_join`;
/*!50001 DROP VIEW IF EXISTS `members_join`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `members_join` (
  `id` tinyint NOT NULL,
  `姓` tinyint NOT NULL,
  `名` tinyint NOT NULL,
  `日` tinyint NOT NULL,
  `月` tinyint NOT NULL,
  `火` tinyint NOT NULL,
  `水` tinyint NOT NULL,
  `木` tinyint NOT NULL,
  `金` tinyint NOT NULL,
  `土` tinyint NOT NULL,
  `備考` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `password`
--

DROP TABLE IF EXISTS `password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password`
--

LOCK TABLES `password` WRITE;
/*!40000 ALTER TABLE `password` DISABLE KEYS */;
INSERT INTO `password` VALUES (1,'orinasu_admin','2020-05-18 10:00:47','2020-05-18 10:00:47'),(2,'orinasu_user','2020-05-18 10:00:47','2020-05-18 10:00:47');
/*!40000 ALTER TABLE `password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category` tinyint(4) DEFAULT NULL,
  `tax` tinyint(3) unsigned DEFAULT NULL,
  `round_type` tinyint(3) unsigned DEFAULT NULL,
  `product_name` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sales_date` date DEFAULT NULL,
  `place` varchar(180) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customer` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tanka` int(10) unsigned DEFAULT NULL,
  `kosuu` int(10) unsigned DEFAULT NULL,
  `tyousei` int(11) DEFAULT NULL,
  `uriage` int(11) DEFAULT NULL,
  `bikou` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_index` (`product_name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,0,1,0,'花柄バッグ','2020-05-18','大丸','田中',100,1,0,648,'売れました。良かった。'),(2,0,0,0,'花柄マスク','2020-05-18','大丸','田中',100,1,0,400,'花柄です。'),(3,4,0,0,'ブローチ','2020-05-18','セントラル','佐藤',100,100,0,10000,'ブローチ');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `products_join`
--

DROP TABLE IF EXISTS `products_join`;
/*!50001 DROP VIEW IF EXISTS `products_join`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `products_join` (
  `id` tinyint NOT NULL,
  `カテゴリー` tinyint NOT NULL,
  `消費税` tinyint NOT NULL,
  `端数処理` tinyint NOT NULL,
  `商品名` tinyint NOT NULL,
  `販売日` tinyint NOT NULL,
  `販売場所` tinyint NOT NULL,
  `顧客名` tinyint NOT NULL,
  `商品単価` tinyint NOT NULL,
  `販売個数` tinyint NOT NULL,
  `調整額` tinyint NOT NULL,
  `売上額` tinyint NOT NULL,
  `備考` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `riyou_keitai`
--

DROP TABLE IF EXISTS `riyou_keitai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `riyou_keitai` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(16) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riyou_keitai`
--

LOCK TABLES `riyou_keitai` WRITE;
/*!40000 ALTER TABLE `riyou_keitai` DISABLE KEYS */;
INSERT INTO `riyou_keitai` VALUES (1,'利用なし'),(2,'終日'),(3,'午前'),(4,'午後');
/*!40000 ALTER TABLE `riyou_keitai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `round_type`
--

DROP TABLE IF EXISTS `round_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `round_type` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `round_type`
--

LOCK TABLES `round_type` WRITE;
/*!40000 ALTER TABLE `round_type` DISABLE KEYS */;
INSERT INTO `round_type` VALUES (1,'四捨五入'),(2,'切り上げ'),(3,'切り捨て');
/*!40000 ALTER TABLE `round_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_access_log`
--

DROP TABLE IF EXISTS `table_access_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_access_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `table_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `query` text COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_access_log`
--

LOCK TABLES `table_access_log` WRITE;
/*!40000 ALTER TABLE `table_access_log` DISABLE KEYS */;
INSERT INTO `table_access_log` VALUES (1,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"星\",\"健一\",0,1,0,1,0,0,2,\"利用中\");','2020-05-18 10:02:52'),(2,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"田中\",\"太郎\",0,1,1,0,0,2,0,\"利用中\");','2020-05-18 10:03:38'),(3,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"佐藤\",\"健一\",0,0,2,2,2,2,0,\"利用開始\");','2020-05-18 10:06:34'),(4,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"おりなす\",\"太郎\",0,1,2,2,2,2,0,\"おりなす\");','2020-05-18 10:06:59'),(5,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"田中\",\"花子\",0,2,2,2,2,2,2,\"花子\");','2020-05-18 10:07:59'),(6,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(0,1,0,\"花柄バッグ\",\"2020-05-18\",\"大丸\",\"田中\",200,3,0,648,\"売れました。\");','2020-05-18 10:10:12'),(7,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(3,0,0,\"花柄マスク\",\"2020-05-18\",\"大丸\",\"田中\",200,2,0,400,\"花柄\");','2020-05-18 10:11:48'),(8,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"おりなす\",\"花子\",0,2,0,2,0,2,0,\"花子\");','2020-05-18 11:45:14'),(9,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(4,0,0,\"ブローチ\",\"2020-05-18\",\"セントラル\",\"\",100,100,0,10000,\"ブローチ\");','2020-05-18 11:45:48'),(10,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"佐藤\",\"正一\",0,1,0,0,0,2,0,\"さとう\");','2020-05-18 13:07:20'),(11,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(0,1,0,\"子供向けマスク\",\"2020-05-18\",\"大丸\",\"\",500,10,0,5400,\"うれた\");','2020-05-18 17:03:42'),(12,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(0,1,0,\"子供向けバッグ\",\"2020-05-18\",\"セントラル\",\"\",1000,3,0,3240,\"売れた\");','2020-05-18 17:04:12'),(13,'192.168.1.15','products','update products set category=4,tax=0,round_type=0,product_name=\"ブローチ\",sales_date=\"2020-05-18\",place=\"セントラル\",customer=\"佐藤\",tanka=100,kosuu=100,tyousei=0,uriage=10000,bikou=\"ブローチ\" where id=3;','2020-05-19 06:10:05'),(14,'192.168.1.15','products','update products set category=0,tax=1,round_type=0,product_name=\"子供向けマスク\",sales_date=\"2020-05-18\",place=\"大丸\",customer=\"山田\",tanka=500,kosuu=10,tyousei=0,uriage=5400,bikou=\"うれた\" where id=4;','2020-05-19 06:10:20'),(15,'192.168.1.15','members','update members set myouji=\"佐藤\",namae=\"正一\",sun=0,mon=1,tue=0,wed=0,thu=0,fri=2,sat=0,bikou=\"さとうです。\" where id=7;','2020-05-19 07:04:20'),(16,'192.168.1.15','members','delete from members where id=7;','2020-05-19 07:04:29'),(17,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"佐藤\",\"正一\",0,1,0,1,0,1,0,\"佐藤です。\");','2020-05-19 07:05:00'),(18,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(0,2,0,\"花柄バッグ\",\"2020-05-19\",\"西友\",\"\",10000,3,0,33000,\"売れました\");','2020-05-19 07:06:13'),(19,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"午後\",\"太郎\",0,3,3,3,3,3,2,\"午後です。\");','2020-05-30 07:16:36'),(20,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"出川\",\"哲郎\",0,0,2,0,0,2,0,\"いってQ\");','2020-06-01 07:29:27'),(21,'192.168.1.15','members','update members set myouji=\"出川\",namae=\"哲郎\",sun=0,mon=2,tue=2,wed=0,thu=0,fri=2,sat=0,bikou=\"いってQ\" where id=10;','2020-06-01 07:29:38'),(22,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"t\",\"\",0,0,0,0,0,0,0,\"\");','2020-06-05 08:10:22'),(23,'192.168.1.15','members','delete from members where id=11;','2020-06-05 08:10:38'),(24,'192.168.1.15','members','delete from members where id=11;','2020-06-05 08:10:39'),(25,'192.168.1.15','products','update products set category=0,tax=1,round_type=0,product_name=\"花柄バッグ\",sales_date=\"2020-05-18\",place=\"大丸\",customer=\"田中\",tanka=100,kosuu=1,tyousei=0,uriage=648,bikou=\"売れました。良かったです。\" where id=1;','2020-06-07 06:13:55'),(26,'192.168.1.15','products','delete from products where id=5;','2020-06-07 06:14:13'),(27,'192.168.1.15','products','delete from products where id=5;','2020-06-07 06:14:14'),(28,'192.168.1.15','products','delete from products where id=4;','2020-06-07 06:14:22'),(29,'192.168.1.15','products','delete from products where id=4;','2020-06-07 06:14:23'),(30,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(1,1,0,\"ポーチ\",\"2020-06-07\",\"だいまる\",\"加藤\",110,1,0,119,\"うれた\");','2020-06-07 07:13:31'),(31,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(2,1,0,\"おさいふ\",\"2020-06-07\",\"marui\",\"はやし\",100,1,0,108,\"おさいふ\");','2020-06-07 07:28:35'),(32,'192.168.1.15','products','delete from products where id=7;','2020-06-07 07:28:55'),(33,'192.168.1.15','products','delete from products where id=7;','2020-06-07 07:28:57'),(34,'192.168.1.15','products','delete from products where id=8;','2020-06-07 07:29:17'),(35,'192.168.1.15','products','delete from products where id=8;','2020-06-07 07:29:18'),(36,'192.168.1.15','products','delete from products where id=6;','2020-06-07 07:29:29'),(37,'192.168.1.15','products','delete from products where id=6;','2020-06-07 07:29:31'),(38,'192.168.1.15','products','update products set category=0,tax=0,round_type=0,product_name=\"花柄マスク\",sales_date=\"2020-05-18\",place=\"大丸\",customer=\"田中\",tanka=100,kosuu=1,tyousei=0,uriage=400,bikou=\"花柄です。\" where id=2;','2020-06-07 07:29:42'),(39,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"あべ\",\"ひろし\",0,2,0,0,0,0,2,\"ろまえ\");','2020-06-07 07:30:10'),(40,'192.168.1.15','members','update members set myouji=\"あべ\",namae=\"ひろし\",sun=0,mon=2,tue=0,wed=0,thu=0,fri=0,sat=2,bikou=\"ろまえ出演\" where id=12;','2020-06-07 07:30:20'),(41,'192.168.1.15','members','delete from members where id=10;','2020-06-07 07:30:27'),(42,'192.168.1.15','members','delete from members where id=10;','2020-06-07 07:30:28'),(43,'192.168.1.15','calendar','insert into calendar(date,todo,memo) values(\"2020-6-7\",\"\",\"あああ\");','2020-06-07 17:50:39'),(44,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"田中\",\"\",0,0,0,0,0,0,0,\"\");','2020-06-07 21:53:08'),(45,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"h\",\"k\",0,2,0,0,0,0,0,\"\");','2020-06-08 16:11:43'),(46,'192.168.1.15','calendar','insert into calendar(date,todo,memo) values(\"2020-6-8\",\"\",\"あああ\");','2020-06-08 20:17:31'),(47,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-6-9\",\"aaa\",\"bbb\");','2020-06-09 16:09:10'),(50,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"undefined\",\"\",\"aaabbb\");','2020-06-09 18:49:32'),(51,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-5-9\",\"ddd\",\"eee\");','2020-06-09 20:35:02'),(52,'192.168.1.15','members','delete from members where id=14;','2020-06-10 06:09:25'),(53,'192.168.1.15','members','delete from members where id=14;','2020-06-10 06:09:26'),(54,'192.168.1.15','members','delete from members where id=13;','2020-06-10 06:09:32'),(55,'192.168.1.15','members','delete from members where id=13;','2020-06-10 06:09:33'),(56,'192.168.1.15','members','update members set myouji=\"あべ\",namae=\"ひろし\",sun=0,mon=2,tue=0,wed=0,thu=0,fri=0,sat=2,bikou=\"ろまえ出演\" where id=12;','2020-06-10 06:16:05'),(57,'192.168.1.15','members','delete from members where id=12;','2020-06-11 05:02:31'),(58,'192.168.1.15','members','delete from members where id=12;','2020-06-11 05:02:32'),(59,'192.168.1.15','members','update members set myouji=\"午後\",namae=\"太郎\",sun=0,mon=3,tue=3,wed=3,thu=3,fri=3,sat=2,bikou=\"午前です。\" where id=9;','2020-06-11 05:03:09'),(61,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(2020-06-14,\"\",\"fff\");','2020-06-14 07:01:10'),(62,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-14\",\"\",\"ffff\");','2020-06-14 07:03:44'),(63,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-08\",\"aaa\",\"bbb\");','2020-06-14 07:14:45'),(64,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-09\",\"\",\"\");','2020-06-14 07:22:29'),(66,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-05-13\",\"\",\"ggggeeee\");','2020-06-14 08:01:17'),(70,'192.168.1.15','calendar','update calendar set date=\"2020-06-14\",yotei=\"\",memo=\"ffffggg\" where id=2020-06-14;','2020-06-14 08:32:50'),(72,'192.168.1.15','calendar','update calendar set date=\"2020-06-14\",yotei=\"\",memo=\"ffffgggggggggggggggg\" where id=2020-06-14;','2020-06-14 08:33:09'),(75,'192.168.1.15','calendar','update calendar set date=\"2020-06-09\",yotei=\"\",memo=\"hhhhhhh\" where date=\"2020-06-09\";','2020-06-14 09:12:28'),(76,'192.168.1.15','calendar','update calendar set date=\"2020-06-09\",yotei=\"\",memo=\"hhhhhhhです。\" where date=\"2020-06-09\";','2020-06-14 09:12:46'),(77,'192.168.1.15','calendar','update calendar set date=\"2020-06-09\",yotei=\"予定です。\",memo=\"hhhhhhhです。\" where date=\"2020-06-09\";','2020-06-14 09:13:08'),(79,'192.168.1.15','calendar','update calendar set date=\"2020-06-14\",yotei=\"\",memo=\"ffff\" where date=\"2020-06-14\";','2020-06-14 09:23:37'),(80,'192.168.1.15','calendar','delete from calendar where id=3;','2020-06-14 15:32:10'),(81,'192.168.1.15','calendar','delete from calendar where id=5;','2020-06-14 15:33:33'),(82,'192.168.1.15','calendar','delete from calendar where id=7;','2020-06-14 15:33:55'),(83,'192.168.1.15','calendar','delete from calendar where id=6;','2020-06-14 15:39:07'),(84,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-14\",\"予定テスト\",\"予定メモ\");','2020-06-14 15:39:33'),(85,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-01\",\"一日\",\"メモ\");','2020-06-14 15:45:10'),(86,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-04\",\"4日の予定\",\"4日のメモ\");','2020-06-14 15:46:41'),(87,'192.168.1.15','calendar','update calendar set date=\"2020-06-01\",yotei=\"１日\",memo=\"メモ\" where date=\"2020-06-01\";','2020-06-14 15:46:52'),(88,'192.168.1.15','calendar','delete from calendar where id=8;','2020-06-14 15:47:13'),(89,'192.168.1.15','calendar','delete from calendar where id=1;','2020-06-14 15:47:27'),(90,'192.168.1.15','calendar','delete from calendar where id=2;','2020-06-14 15:50:09'),(91,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-30\",\"月末\",\"月末メモ\");','2020-06-14 15:50:27'),(92,'192.168.1.15','members','update members set myouji=\"星\",namae=\"健一\",sun=0,mon=1,tue=0,wed=1,thu=0,fri=0,sat=2,bikou=\"利用\" where id=1;','2020-06-14 17:20:15'),(93,'192.168.1.15','members','insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat,bikou) values(\"薬師丸\",\"ひろ子\",0,2,0,2,0,0,2,\"ひげき\");','2020-06-14 17:20:50'),(94,'192.168.1.15','members','delete from members where id=9;','2020-06-14 17:21:03'),(95,'192.168.1.15','members','delete from members where id=9;','2020-06-14 17:21:05'),(96,'192.168.1.15','products','insert into products(category,tax,round_type,product_name,sales_date,place,customer,tanka,kosuu,tyousei,uriage,bikou) values(0,1,0,\"花柄ぼたん\",\"2020-06-14\",\"おりなす\",\"おりなすはなこ\",100,1,0,108,\"うった\");','2020-06-14 17:21:45'),(97,'192.168.1.15','products','delete from products where id=9;','2020-06-14 17:22:16'),(98,'192.168.1.15','products','delete from products where id=9;','2020-06-14 17:22:17'),(99,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2020-05-11\",\"\",\"GWあけ。\");','2020-06-14 17:22:43'),(102,'192.168.1.15','calendar','insert into calendar(date,yotei,memo) values(\"2021-01-02\",\"1/2\",\"1/2\");','2020-06-15 03:57:09'),(103,'192.168.1.15','products','update products set category=0,tax=1,round_type=0,product_name=\"花柄バッグ\",sales_date=\"2020-05-18\",place=\"大丸\",customer=\"田中\",tanka=100,kosuu=1,tyousei=0,uriage=648,bikou=\"売れました。良かった。\" where id=1;','2020-06-15 08:21:56'),(104,'192.168.1.15','calendar','update calendar set date=\"2020-06-14\",yotei=\"予定\",memo=\"予定メモ\" where date=\"2020-06-14\";','2020-06-15 08:25:23'),(105,'192.168.1.15','calendar','update calendar set date=\"2020-06-14\",yotei=\"予定\",memo=\"予定\" where date=\"2020-06-14\";','2020-06-15 08:25:33'),(106,'192.168.1.15','calendar','update calendar set date=\"2020-06-30\",yotei=\"月末予定\",memo=\"月末\" where date=\"2020-06-30\";','2020-06-15 08:25:49');
/*!40000 ALTER TABLE `table_access_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax`
--

DROP TABLE IF EXISTS `tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tax` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tax` tinyint(3) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax`
--

LOCK TABLES `tax` WRITE;
/*!40000 ALTER TABLE `tax` DISABLE KEYS */;
INSERT INTO `tax` VALUES (1,0),(2,8),(3,10);
/*!40000 ALTER TABLE `tax` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `youbi`
--

DROP TABLE IF EXISTS `youbi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `youbi` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `youbi`
--

LOCK TABLES `youbi` WRITE;
/*!40000 ALTER TABLE `youbi` DISABLE KEYS */;
INSERT INTO `youbi` VALUES (1,'日'),(2,'月'),(3,'火'),(4,'水'),(5,'木'),(6,'金'),(7,'土');
/*!40000 ALTER TABLE `youbi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `calendar_join`
--

/*!50001 DROP TABLE IF EXISTS `calendar_join`*/;
/*!50001 DROP VIEW IF EXISTS `calendar_join`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `calendar_join` AS select `calendar`.`id` AS `id`,`calendar`.`date` AS `日付`,`calendar`.`yotei` AS `予定`,`calendar`.`memo` AS `メモ` from `calendar` order by `calendar`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `members_join`
--

/*!50001 DROP TABLE IF EXISTS `members_join`*/;
/*!50001 DROP VIEW IF EXISTS `members_join`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `members_join` AS select `members`.`id` AS `id`,`members`.`myouji` AS `姓`,`members`.`namae` AS `名`,`sun`.`content` AS `日`,`mon`.`content` AS `月`,`tue`.`content` AS `火`,`wed`.`content` AS `水`,`thu`.`content` AS `木`,`fri`.`content` AS `金`,`sat`.`content` AS `土`,`members`.`bikou` AS `備考` from (((((((`members` join `riyou_keitai` `sun` on(`members`.`sun` + 1 = `sun`.`id`)) join `riyou_keitai` `mon` on(`members`.`mon` + 1 = `mon`.`id`)) join `riyou_keitai` `tue` on(`members`.`tue` + 1 = `tue`.`id`)) join `riyou_keitai` `wed` on(`members`.`wed` + 1 = `wed`.`id`)) join `riyou_keitai` `thu` on(`members`.`thu` + 1 = `thu`.`id`)) join `riyou_keitai` `fri` on(`members`.`fri` + 1 = `fri`.`id`)) join `riyou_keitai` `sat` on(`members`.`sat` + 1 = `sat`.`id`)) order by `members`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `products_join`
--

/*!50001 DROP TABLE IF EXISTS `products_join`*/;
/*!50001 DROP VIEW IF EXISTS `products_join`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `products_join` AS select `products`.`id` AS `id`,`category`.`name` AS `カテゴリー`,`tax`.`tax` AS `消費税`,`round_type`.`type` AS `端数処理`,`products`.`product_name` AS `商品名`,`products`.`sales_date` AS `販売日`,`products`.`place` AS `販売場所`,`products`.`customer` AS `顧客名`,`products`.`tanka` AS `商品単価`,`products`.`kosuu` AS `販売個数`,`products`.`tyousei` AS `調整額`,`products`.`uriage` AS `売上額`,`products`.`bikou` AS `備考` from (((`products` join `category` on(`products`.`category` + 1 = `category`.`id`)) join `tax` on(`products`.`tax` + 1 = `tax`.`id`)) join `round_type` on(`products`.`round_type` + 1 = `round_type`.`id`)) order by `products`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-15 17:50:06
