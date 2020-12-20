-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: steel_scout
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `2020_competitions`
--

DROP TABLE IF EXISTS `2020_competitions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `2020_competitions` (
  `competition_id` int NOT NULL AUTO_INCREMENT,
  `competition_name` varchar(255) DEFAULT NULL,
  `competition_date` varchar(255) DEFAULT NULL,
  `season_id` int DEFAULT NULL,
  PRIMARY KEY (`competition_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `2020_competitions`
--

LOCK TABLES `2020_competitions` WRITE;
/*!40000 ALTER TABLE `2020_competitions` DISABLE KEYS */;
/*!40000 ALTER TABLE `2020_competitions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `2020_pit_scouting`
--

DROP TABLE IF EXISTS `2020_pit_scouting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `2020_pit_scouting` (
  `pit_scouting_id` int NOT NULL AUTO_INCREMENT,
  `scouter_id` int DEFAULT NULL,
  `competition_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `climb` tinyint(1) DEFAULT NULL,
  `adjust_level` tinyint(1) DEFAULT NULL,
  `drive_team_experience` int DEFAULT NULL,
  `inner_port` tinyint(1) DEFAULT NULL,
  `higher_port` tinyint(1) DEFAULT NULL,
  `lower_port` tinyint(1) DEFAULT NULL,
  `defense` tinyint(1) DEFAULT NULL,
  `autonomous_abilities` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`pit_scouting_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `2020_pit_scouting`
--

LOCK TABLES `2020_pit_scouting` WRITE;
/*!40000 ALTER TABLE `2020_pit_scouting` DISABLE KEYS */;
/*!40000 ALTER TABLE `2020_pit_scouting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `2020_scouters`
--

DROP TABLE IF EXISTS `2020_scouters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `2020_scouters` (
  `scouter_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT 'pass',
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`scouter_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `2020_scouters`
--

LOCK TABLES `2020_scouters` WRITE;
/*!40000 ALTER TABLE `2020_scouters` DISABLE KEYS */;
/*!40000 ALTER TABLE `2020_scouters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `2020_scouting`
--

DROP TABLE IF EXISTS `2020_scouting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `2020_scouting` (
  `scouting_id` int NOT NULL AUTO_INCREMENT,
  `scouter_id` int DEFAULT NULL,
  `competition_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `match_number` int DEFAULT NULL,
  `auto_line` tinyint(1) NOT NULL DEFAULT '0',
  `auto_high_target` int DEFAULT NULL,
  `auto_low_target` int DEFAULT NULL,
  `auto_collect_balls` tinyint(1) DEFAULT '0',
  `stage1_high_target` int DEFAULT NULL,
  `stage1_low_target` int DEFAULT NULL,
  `stage1_completed` tinyint(1) NOT NULL DEFAULT '0',
  `stage2_high_target` int DEFAULT NULL,
  `stage2_low_target` int DEFAULT NULL,
  `rotation_control` tinyint(1) NOT NULL DEFAULT '0',
  `stage3_high_target` int DEFAULT NULL,
  `stage3_low_target` int DEFAULT NULL,
  `stage3_completed` tinyint(1) NOT NULL DEFAULT '0',
  `position_control` tinyint(1) NOT NULL DEFAULT '0',
  `end_status` int DEFAULT NULL,
  `shield_gen_level` tinyint(1) DEFAULT '0',
  `finalRP` int DEFAULT NULL,
  `defense` tinyint(1) DEFAULT '0',
  `inner_port` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`scouting_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `2020_scouting`
--

LOCK TABLES `2020_scouting` WRITE;
/*!40000 ALTER TABLE `2020_scouting` DISABLE KEYS */;
/*!40000 ALTER TABLE `2020_scouting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seasons`
--

DROP TABLE IF EXISTS `seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seasons` (
  `season_id` int NOT NULL AUTO_INCREMENT,
  `season_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`season_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seasons`
--

LOCK TABLES `seasons` WRITE;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_number` int DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-26 23:49:16
