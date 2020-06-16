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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES (1,'2020-06-16','今日の予定','今日のメモ'),(2,'2020-05-29','昨月のテスト','昨月のメモ(5/29 テスト)'),(3,'2020-06-17','17日の予定','17日のメモ');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'バッグ'),(2,'アクセサリ'),(3,'マスク'),(4,'ポーチ'),(5,'お財布'),(6,'服飾');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `index_access_log`
--

LOCK TABLES `index_access_log` WRITE;
/*!40000 ALTER TABLE `index_access_log` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ip_address`
--

LOCK TABLES `ip_address` WRITE;
/*!40000 ALTER TABLE `ip_address` DISABLE KEYS */;
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
  `namae` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password`
--

LOCK TABLES `password` WRITE;
/*!40000 ALTER TABLE `password` DISABLE KEYS */;
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
  `sales_date` date DEFAULT NULL,
  `place` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customer` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` tinyint(4) DEFAULT NULL,
  `product_name` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tanka` int(10) unsigned DEFAULT NULL,
  `kosuu` int(10) unsigned DEFAULT NULL,
  `tax` tinyint(3) unsigned DEFAULT NULL,
  `round_type` tinyint(3) unsigned DEFAULT NULL,
  `tyousei` int(11) DEFAULT NULL,
  `uriage` int(11) DEFAULT NULL,
  `bikou` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_name_index` (`product_name`),
  KEY `products_category_index` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2020-06-16','だいまる','とくになし',0,'花柄バッグ',100,1,2,0,0,5500,'テストです。');
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
  `販売日` tinyint NOT NULL,
  `販売場所` tinyint NOT NULL,
  `顧客名` tinyint NOT NULL,
  `カテゴリー` tinyint NOT NULL,
  `商品名` tinyint NOT NULL,
  `商品単価` tinyint NOT NULL,
  `販売個数` tinyint NOT NULL,
  `消費税` tinyint NOT NULL,
  `端数処理` tinyint NOT NULL,
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `content` (`content`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riyou_keitai`
--

LOCK TABLES `riyou_keitai` WRITE;
/*!40000 ALTER TABLE `riyou_keitai` DISABLE KEYS */;
INSERT INTO `riyou_keitai` VALUES (1,'利用なし'),(3,'午前'),(4,'午後'),(2,'終日');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_access_log`
--

LOCK TABLES `table_access_log` WRITE;
/*!40000 ALTER TABLE `table_access_log` DISABLE KEYS */;
INSERT INTO `table_access_log` VALUES (1,'192.168.10.106','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-16\",\"今日のテスト\",\"今日のメモ\");','2020-06-16 13:24:43'),(2,'192.168.10.106','calendar','insert into calendar(date,yotei,memo) values(\"2020-05-29\",\"昨月のテスト\",\"昨月のメモ(5/29 テスト)\");','2020-06-16 13:25:31'),(3,'192.168.10.106','calendar','update calendar set date=\"2020-06-16\",yotei=\"\",memo=\"今日のメモ\" where date=\"2020-06-16\";','2020-06-16 13:25:54'),(4,'192.168.10.106','calendar','update calendar set date=\"2020-06-16\",yotei=\"今日の予定\",memo=\"今日のメモ\" where date=\"2020-06-16\";','2020-06-16 13:26:05'),(5,'192.168.10.106','calendar','insert into calendar(date,yotei,memo) values(\"2020-06-17\",\"17日の予定\",\"17日のメモ\");','2020-06-16 13:27:16'),(6,'192.168.10.106','products','insert into products(sales_date,place,customer,category,product_name,tanka,kosuu,tax,round_type,tyousei,uriage,bikou) values(\"2020-06-16\",\"だいまる\",\"なし\",0,\"花柄バッグ\",5000,1,2,0,0,5500,\"テスト\");','2020-06-16 14:25:31'),(7,'192.168.10.106','products','update products set sales_date=\"2020-06-16\",place=\"だいまる\",customer=\"とくになし\",category=0,product_name=\"花柄バッグ\",tanka=100,kosuu=1,tax=2,round_type=0,tyousei=0,uriage=5500,bikou=\"テスト\" where id=1;','2020-06-16 14:25:51'),(8,'192.168.10.106','products','update products set sales_date=\"2020-06-16\",place=\"だいまる\",customer=\"とくになし\",category=0,product_name=\"花柄バッグ\",tanka=100,kosuu=1,tax=2,round_type=0,tyousei=0,uriage=5500,bikou=\"テストです。\" where id=1;','2020-06-16 14:26:03');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `youbi`
--

LOCK TABLES `youbi` WRITE;
/*!40000 ALTER TABLE `youbi` DISABLE KEYS */;
INSERT INTO `youbi` VALUES (7,'土'),(1,'日'),(2,'月'),(5,'木'),(4,'水'),(3,'火'),(6,'金');
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
/*!50001 VIEW `products_join` AS select `products`.`id` AS `id`,`products`.`sales_date` AS `販売日`,`products`.`place` AS `販売場所`,`products`.`customer` AS `顧客名`,`category`.`name` AS `カテゴリー`,`products`.`product_name` AS `商品名`,`products`.`tanka` AS `商品単価`,`products`.`kosuu` AS `販売個数`,`tax`.`tax` AS `消費税`,`round_type`.`type` AS `端数処理`,`products`.`tyousei` AS `調整額`,`products`.`uriage` AS `売上額`,`products`.`bikou` AS `備考` from (((`products` join `category` on(`products`.`category` + 1 = `category`.`id`)) join `tax` on(`products`.`tax` + 1 = `tax`.`id`)) join `round_type` on(`products`.`round_type` + 1 = `round_type`.`id`)) order by `products`.`id` */;
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

-- Dump completed on 2020-06-16 14:28:15
