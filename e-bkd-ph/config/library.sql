-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 27, 2022 at 01:27 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `settings_cookies`
--

CREATE TABLE IF NOT EXISTS `settings_cookies` (
  `c_key` varchar(45) NOT NULL,
  `c_value` varchar(1000) NOT NULL,
  `domain_allowed` varchar(3000) NOT NULL,
  PRIMARY KEY (`c_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings_cookies`
--

INSERT INTO `settings_cookies` (`c_key`, `c_value`, `domain_allowed`) VALUES
('COOKIE_TOKEN', 'AEf-XMRDVAcIaQK-zWc93ZPdEf8WaSf60ekLGsgbC-Pr_I2B03Ctgx1OPdm0SVtwqtRve-RyPA', 'http://localhost/|http://localhost:8081/');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
