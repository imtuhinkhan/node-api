-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2022 at 10:59 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `japan`
--

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `login_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `personal_information_enter_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `from_to_enter_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_time_enter_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `amount_enter_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `note_enter_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `gender` int(10) NOT NULL,
  `location_from` int(10) NOT NULL,
  `location_to` int(10) NOT NULL,
  `reservation_date` date NOT NULL,
  `reservation_time` time NOT NULL,
  `amount` varchar(200) NOT NULL,
  `note` text NOT NULL,
  `reservation_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `login_time`, `personal_information_enter_time`, `from_to_enter_time`, `date_time_enter_time`, `amount_enter_time`, `note_enter_time`, `name`, `gender`, `location_from`, `location_to`, `reservation_date`, `reservation_time`, `amount`, `note`, `reservation_id`) VALUES
(1, '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', 'Tuhin Khan', 1, 1, 1, '2008-01-01', '00:00:01', '5000', '<script>alert(\'hello\')</script>', 872602292),
(2, '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', 'Tuhin Khan', 1, 1, 1, '2008-01-01', '00:00:01', '5000', '<script>alert(\'hello\')</script>', 8208680283),
(3, '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', 'Tuhin Khan', 1, 1, 1, '2008-01-01', '00:00:01', '5000', '<script>alert(\'hello\')</script>', 3494667631),
(4, '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', 'Tuhin Khan', 1, 1, 1, '2008-01-01', '00:00:01', '5000', '<script>alert(\'hello\')</script>', 8988921647),
(5, '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', 'Tuhin Khan', 1, 1, 1, '2008-01-01', '00:00:01', '5000', '<script>alert(\'hello\')</script>', 2933222444),
(6, '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', '2007-12-31 18:00:01', 'Tuhin Khan as', 1, 1, 1, '2008-01-01', '00:00:01', '5000', '<script>alert(\'hello\')</script>', 4086565137);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
