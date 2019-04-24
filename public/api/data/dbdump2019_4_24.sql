-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2019 at 09:40 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_search`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE `contact_info` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tracker_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone` bigint(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`id`, `tracker_id`, `name`, `email`, `phone`) VALUES
(1, 1, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(2, 2, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(3, 3, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(4, 4, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(5, 5, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(6, 6, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(7, 7, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(8, 8, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(9, 9, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(10, 10, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(11, 11, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(12, 12, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(13, 13, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(14, 14, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(15, 15, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(16, 16, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(17, 17, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(18, 18, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(19, 19, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(20, 20, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(21, 21, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(22, 22, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(23, 23, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(24, 24, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(25, 25, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(26, 26, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(27, 27, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(28, 28, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(29, 29, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(30, 30, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(31, 31, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(32, 32, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(33, 33, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(34, 34, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(35, 35, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(36, 36, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(37, 37, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(38, 38, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(39, 39, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(40, 40, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(41, 1, 'contact2', 'contact2', 123),
(42, 1, 'contact3', 'contact3', 456),
(43, 1, 'newtest', 'newtest', 123),
(44, 1, 'updater', 'jun@updater.com', 11111111111),
(45, 1, 'updater', 'jun@updater.com', 11111111111),
(46, 1, 'updater', 'jun@updater.com', 11111111111),
(47, 41, 'Mr.Jobs', 'mrjobs@apple.com', 17232322456),
(48, 41, 'Mr.NewJobs', 'mrnewjobs@apple.com', 4567456745),
(49, 42, 'c', 'c', 0),
(50, 42, 'c', 'c', 0),
(51, 42, '3', '3', 3),
(52, 46, 'latestcontacttest1', 'latestcontacttest1', 1),
(54, 47, 'test', 'tes', 13),
(55, 47, 'test', 'test', 2),
(56, 47, 'test', 'test', 3),
(57, 11, 'newcontact', 'newcontact', 1),
(58, 11, 'newcontact', 'newcontact', 1),
(59, 11, 'test', 'test', 1234),
(60, 11, 'asfasdfasf24323', 'adsfasdfafsd23424', 234525435),
(61, 48, 'feature set test', 'feature set test', 1234143),
(62, 48, 'feature set 2', 'feature set 2', 46456),
(63, 11, 'asdfasf', 'adsfafs', 3453455);

-- --------------------------------------------------------

--
-- Table structure for table `note_item`
--

CREATE TABLE `note_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tracker_id` bigint(20) UNSIGNED NOT NULL,
  `created` datetime NOT NULL,
  `input` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `note_item`
--

INSERT INTO `note_item` (`id`, `tracker_id`, `created`, `input`) VALUES
(1, 1, '2019-04-20 22:00:33', 'Just applied today, waiting to hear back in two weeks'),
(2, 2, '2019-04-20 22:00:33', 'Just applied today, waiting to hear back in two weeks'),
(3, 3, '2019-04-20 22:00:34', 'Just applied today, waiting to hear back in two weeks'),
(4, 4, '2019-04-20 22:00:35', 'Just applied today, waiting to hear back in two weeks'),
(5, 5, '2019-04-20 22:00:36', 'Just applied today, waiting to hear back in two weeks'),
(6, 6, '2019-04-20 22:00:42', 'Just applied today, waiting to hear back in two weeks'),
(7, 7, '2019-04-20 22:00:43', 'Just applied today, waiting to hear back in two weeks'),
(8, 8, '2019-04-20 22:00:43', 'Just applied today, waiting to hear back in two weeks'),
(9, 9, '2019-04-20 22:00:44', 'Just applied today, waiting to hear back in two weeks'),
(10, 10, '2019-04-20 22:00:45', 'Just applied today, waiting to hear back in two weeks'),
(12, 12, '2019-04-20 22:00:51', 'Just applied today, waiting to hear back in two weeks'),
(13, 13, '2019-04-20 22:00:51', 'Just applied today, waiting to hear back in two weeks'),
(14, 14, '2019-04-20 22:00:52', 'Just applied today, waiting to hear back in two weeks'),
(15, 15, '2019-04-20 22:00:53', 'Just applied today, waiting to hear back in two weeks'),
(16, 16, '2019-04-20 22:00:58', 'Just applied today, waiting to hear back in two weeks'),
(17, 17, '2019-04-20 22:00:58', 'Just applied today, waiting to hear back in two weeks'),
(18, 18, '2019-04-20 22:00:59', 'Just applied today, waiting to hear back in two weeks'),
(19, 19, '2019-04-20 22:01:00', 'Just applied today, waiting to hear back in two weeks'),
(20, 20, '2019-04-20 22:01:00', 'Just applied today, waiting to hear back in two weeks'),
(21, 21, '2019-04-20 22:01:41', 'Just applied today, waiting to hear back in two weeks'),
(22, 22, '2019-04-20 22:01:42', 'Just applied today, waiting to hear back in two weeks'),
(23, 23, '2019-04-20 22:01:42', 'Just applied today, waiting to hear back in two weeks'),
(24, 24, '2019-04-20 22:01:43', 'Just applied today, waiting to hear back in two weeks'),
(25, 25, '2019-04-20 22:01:44', 'Just applied today, waiting to hear back in two weeks'),
(26, 26, '2019-04-20 22:01:50', 'Just applied today, waiting to hear back in two weeks'),
(27, 27, '2019-04-20 22:01:51', 'Just applied today, waiting to hear back in two weeks'),
(28, 28, '2019-04-20 22:01:51', 'Just applied today, waiting to hear back in two weeks'),
(29, 29, '2019-04-20 22:01:52', 'Just applied today, waiting to hear back in two weeks'),
(30, 30, '2019-04-20 22:01:53', 'Just applied today, waiting to hear back in two weeks'),
(31, 31, '2019-04-20 22:01:56', 'Just applied today, waiting to hear back in two weeks'),
(32, 32, '2019-04-20 22:01:56', 'Just applied today, waiting to hear back in two weeks'),
(33, 33, '2019-04-20 22:01:57', 'Just applied today, waiting to hear back in two weeks'),
(34, 34, '2019-04-20 22:01:58', 'Just applied today, waiting to hear back in two weeks'),
(35, 35, '2019-04-20 22:01:58', 'Just applied today, waiting to hear back in two weeks'),
(36, 36, '2019-04-20 22:02:04', 'Just applied today, waiting to hear back in two weeks'),
(37, 37, '2019-04-20 22:02:05', 'Just applied today, waiting to hear back in two weeks'),
(38, 38, '2019-04-20 22:02:06', 'Just applied today, waiting to hear back in two weeks'),
(39, 39, '2019-04-20 22:02:06', 'Just applied today, waiting to hear back in two weeks'),
(40, 40, '2019-04-20 22:02:07', 'Just applied today, waiting to hear back in two weeks'),
(42, 1, '2019-04-20 22:11:03', 'lets try adding a new note'),
(43, 1, '2019-04-21 01:45:17', 'Lets try adding a new note. A really really long one this time. I hope this doesn\'t look like poop. Hello world.'),
(44, 41, '2019-04-21 17:14:48', 'Just applied today, waiting to hear back in two weeks'),
(45, 42, '2019-04-22 11:30:02', 'contacttest'),
(46, 43, '2019-04-22 13:13:48', 'testcontact'),
(47, 44, '2019-04-22 13:28:54', 'latestcontacttest'),
(48, 45, '2019-04-22 13:31:42', 'latestcontacttest'),
(50, 47, '2019-04-22 16:02:04', 'test'),
(54, 11, '2019-04-23 18:28:13', 'let\'s try to delete thisasdf alsdkfjaklsjfkdlsafasdfasfdf'),
(72, 11, '2019-04-23 21:07:57', 'please delete me'),
(73, 11, '2019-04-23 21:07:58', 'please delete me'),
(74, 11, '2019-04-23 21:08:02', 'please delete me'),
(75, 11, '2019-04-23 21:08:02', 'please delete me3245354'),
(78, 48, '2019-04-24 12:07:31', 'feature set test'),
(79, 48, '2019-04-24 12:09:05', 'new feature set testasdfsafdsf'),
(80, 11, '2019-04-24 12:11:20', 'asdfasdf');

-- --------------------------------------------------------

--
-- Table structure for table `tracker_item`
--

CREATE TABLE `tracker_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `progress` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `link` text COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tracker_item`
--

INSERT INTO `tracker_item` (`id`, `user_id`, `title`, `company`, `progress`, `link`, `created`) VALUES
(1, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:00:33'),
(2, 1, 'Front End Developer With More Words', 'Apple But With A Really Long Name', 'Archived', 'www.apple.com', '2019-04-20 22:00:33'),
(3, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:00:34'),
(4, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:00:35'),
(5, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:00:36'),
(6, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:00:42'),
(7, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:00:43'),
(8, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:00:43'),
(9, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:00:44'),
(10, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:00:45'),
(11, 1, 'Front ', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:00:50'),
(12, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:00:51'),
(13, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:00:51'),
(14, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:00:52'),
(15, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:00:53'),
(16, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:00:58'),
(17, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:00:58'),
(18, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:00:59'),
(19, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:00'),
(20, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:00'),
(21, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:41'),
(22, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:42'),
(23, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:42'),
(24, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:43'),
(25, 1, 'Front End Developer', 'Apple', 'Started Application', 'www.apple.com', '2019-04-20 22:01:44'),
(26, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:01:50'),
(27, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:01:51'),
(28, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:01:51'),
(29, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:01:52'),
(30, 1, 'Front End Developer', 'Apple', 'Waiting for Response', 'www.apple.com', '2019-04-20 22:01:53'),
(31, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:01:56'),
(32, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:01:56'),
(33, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:01:57'),
(34, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:01:58'),
(35, 1, 'Front End Developer', 'Apple', 'Follow-up Needed', 'www.apple.com', '2019-04-20 22:01:58'),
(36, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:02:04'),
(37, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:02:05'),
(38, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:02:06'),
(39, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:02:06'),
(40, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-20 22:02:07'),
(41, 1, 'Front End Developer', 'Apple', 'Archived', 'www.apple.com', '2019-04-21 17:14:48'),
(42, 1, 'contacttest', 'contacttest', 'Waiting for Response', 'www.google.com', '2019-04-22 11:30:02'),
(43, 1, 'testcontact', 'testcontact', 'Archived', 'testcontact', '2019-04-22 13:13:48'),
(44, 1, 'latestcontacttest', 'latestcontacttest', 'Waiting for Response', 'latestcontacttest', '2019-04-22 13:28:54'),
(45, 1, 'latestcontacttest', 'latestcontacttest', 'Waiting for Response', 'latestcontacttest', '2019-04-22 13:31:42'),
(46, 1, 'latestcontacttest', 'latestcontacttest', 'Waiting for Response', 'latestcontacttest', '2019-04-22 13:33:41'),
(47, 1, 'test', 'test', 'Waiting for Response', 'test', '2019-04-22 16:02:04'),
(48, 1, 'feature set test2', 'feature set test2', 'Waiting for Response', 'feature set test2', '2019-04-24 12:07:31'),
(49, 1, 'fluffy bunnies', 'fluffy bunnies', 'Started Application', 'fluffy bunnies', '2019-04-24 12:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`) VALUES
(1, 'Jun Giang', 'e38ad214943daad1d64c102faec29de4afe9da3d', 'jun@email.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `note_item`
--
ALTER TABLE `note_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tracker_item`
--
ALTER TABLE `tracker_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `note_item`
--
ALTER TABLE `note_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `tracker_item`
--
ALTER TABLE `tracker_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
