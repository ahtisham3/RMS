-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 22, 2023 at 11:44 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poss`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `company_location` varchar(255) NOT NULL,
  `company_logo_url` varchar(255) NOT NULL,
  `company_phone_no` varchar(20) NOT NULL,
  `company_email` varchar(255) NOT NULL,
  `company_username` varchar(255) NOT NULL,
  `company_password` varchar(255) NOT NULL,
  `company_status` int(1) NOT NULL DEFAULT '1',
  `company_pack` int(1) NOT NULL DEFAULT '1',
  `company_expiry` date NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_location`, `company_logo_url`, `company_phone_no`, `company_email`, `company_username`, `company_password`, `company_status`, `company_pack`, `company_expiry`) VALUES
(1, 'Hak barb q and Resturent', 'Addres 456 Street 485', '', '0336556588', 'rizwanzahid@gmail.com', 'hass', '81dc9bdb52d04dc20036dbd8313ed055', 1, 1, '2020-10-06'),
(2, 'La Sortie', '', '', '0336556588', 'rizwanzahid@gmail.com', 'rizwan123', '827ccb0eea8a706c4c34a16891f84e7b', 1, 1, '2020-10-24'),
(3, 'HAQ BAR B Q & Resturent', '', '', '0336556588', 'rizwanzahid@gmail.com', 'rizwanzahid', '81dc9bdb52d04dc20036dbd8313ed055', 1, 1, '2020-11-12');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `EmpId` int(11) NOT NULL AUTO_INCREMENT,
  `emp_picurl` varchar(255) NOT NULL,
  `ExpiryDate` varchar(255) NOT NULL,
  `Status` int(1) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` varchar(255) NOT NULL,
  `CreatedBy` int(11) NOT NULL,
  `CreatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  `MobileNo` varchar(20) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`EmpId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `expense`
--

DROP TABLE IF EXISTS `expense`;
CREATE TABLE IF NOT EXISTS `expense` (
  `expense_id` int(11) NOT NULL AUTO_INCREMENT,
  `expense_type` int(2) NOT NULL DEFAULT '1',
  `expense_name` varchar(255) NOT NULL,
  `expense_description` varchar(255) NOT NULL,
  `expense_amount` varchar(255) NOT NULL,
  `expense_month` varchar(255) NOT NULL,
  `expense_year` varchar(255) NOT NULL,
  `expense_paid_date` datetime NOT NULL,
  `expense_utility_type` int(2) NOT NULL,
  `expense_date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expense_status` int(1) NOT NULL DEFAULT '1',
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`expense_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) NOT NULL,
  `item_status` int(1) NOT NULL DEFAULT '1',
  `item_description` varchar(1000) NOT NULL,
  `item_price` int(11) NOT NULL,
  `item_code` varchar(255) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `item_name`, `item_status`, `item_description`, `item_price`, `item_code`, `company_id`) VALUES
(1, 'Bhindi', 1, 'Yummmy bhindi', 150, 'CBD', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
CREATE TABLE IF NOT EXISTS `sale` (
  `sale_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) NOT NULL,
  `sale_amount` int(11) NOT NULL,
  `sale_discount` int(11) NOT NULL,
  `sale_total` int(11) NOT NULL,
  `sale_by` int(11) NOT NULL,
  `sale_status` int(1) NOT NULL DEFAULT '1',
  `sale_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`sale_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sale`
--

INSERT INTO `sale` (`sale_id`, `customer_name`, `sale_amount`, `sale_discount`, `sale_total`, `sale_by`, `sale_status`, `sale_created`, `company_id`) VALUES
(1, 'Sample', 150, 0, 150, 1, 1, '2020-10-03 15:29:39', 1),
(2, 'Sample', 150, 0, 150, 1, 1, '2020-10-03 15:29:44', 1),
(3, 'Sample', 300, 0, 300, 1, 1, '2020-10-03 15:29:49', 1),
(4, 'Sample', 150, 0, 150, 1, 1, '2020-10-03 15:29:52', 1),
(5, 'Sample', 600, 0, 600, 1, 1, '2020-10-03 15:29:57', 1),
(6, 'Sample', 1500, 0, 1500, 1, 1, '2020-10-03 15:30:03', 1),
(7, 'Sample', 1500, 0, 1500, 1, 0, '2020-10-03 15:30:08', 1),
(8, 'Sample', 150, 0, 150, 1, 1, '2020-10-03 15:30:12', 1),
(9, 'Sample', 300, 0, 300, 1, 1, '2020-10-03 15:30:16', 1),
(10, 'Sample', 150, 0, 150, 1, 1, '2020-10-03 15:30:20', 1),
(11, 'Sample', 300, 0, 300, 1, 1, '2020-10-03 15:30:25', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sale_detail`
--

DROP TABLE IF EXISTS `sale_detail`;
CREATE TABLE IF NOT EXISTS `sale_detail` (
  `sale_id` int(11) NOT NULL,
  `sale_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `salerow_item_id` int(11) NOT NULL,
  `salerow_item_name` varchar(255) NOT NULL,
  `salerow_item_price` int(11) NOT NULL,
  `salerow_item_quantity` int(11) NOT NULL,
  `salerow_item_row_total` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`sale_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sale_detail`
--

INSERT INTO `sale_detail` (`sale_id`, `sale_detail_id`, `salerow_item_id`, `salerow_item_name`, `salerow_item_price`, `salerow_item_quantity`, `salerow_item_row_total`, `company_id`) VALUES
(1, 1, 1, 'CBD - Bhindi', 150, 1, 150, 1),
(2, 2, 1, 'CBD - Bhindi', 150, 1, 150, 1),
(3, 3, 1, 'CBD - Bhindi', 150, 2, 300, 1),
(4, 4, 1, 'CBD - Bhindi', 150, 1, 150, 1),
(5, 5, 1, 'CBD - Bhindi', 150, 4, 600, 1),
(6, 6, 1, 'CBD - Bhindi', 150, 10, 1500, 1),
(7, 7, 1, 'CBD - Bhindi', 150, 10, 1500, 1),
(8, 8, 1, 'CBD - Bhindi', 150, 1, 150, 1),
(9, 9, 1, 'CBD - Bhindi', 150, 2, 300, 1),
(10, 10, 1, 'CBD - Bhindi', 150, 1, 150, 1),
(11, 11, 1, 'CBD - Bhindi', 150, 2, 300, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `user_BName` varchar(255) NOT NULL,
  `company_id` int(11) NOT NULL,
  `superadmin` int(1) NOT NULL DEFAULT '0',
  `active` int(1) NOT NULL DEFAULT '1',
  `expiry` date NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_name`, `user_password`, `user_username`, `user_BName`, `company_id`, `superadmin`, `active`, `expiry`) VALUES
(1, 'rizwanzahid@gmail.com', 'Hak barb q and Resturent', '81dc9bdb52d04dc20036dbd8313ed055', 'rizwan1234', 'Hak barb q and Resturent', 1, 1, 1, '2020-10-06'),
(2, 'rizwanzahid@gmail.com', 'La Sortie', '827ccb0eea8a706c4c34a16891f84e7b', 'rizwan123', 'La Sortie', 2, 1, 1, '2020-10-26'),
(3, 'rizwanzahid@gmail.com', 'HAQ BAR B Q & Resturent', '81dc9bdb52d04dc20036dbd8313ed055', 'rizwanzahid', 'HAQ BAR B Q & Resturent', 3, 1, 1, '2020-11-19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
