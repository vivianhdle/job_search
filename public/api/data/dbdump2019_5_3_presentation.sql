-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 03, 2019 at 07:29 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
(1, 11, 'Emil Eifrem', 'Eifrem@gmail.com', 0),
(2, 12, 'Mr.Codyer', 'Coder@email.com', 62342123123),
(3, 14, 'Panasonic CEO ', 'ceo@email.com', 73451231123),
(4, 18, 'Luke Mondronal', 'luke@email.com', 215700481),
(5, 22, 'Mark Z', 'mZuck@email.com', 71203981723),
(6, 23, 'John Akkara', 'Akkara@smoothstack.com', 7141987832),
(7, 25, 'Robert A. Kotick', 'Kotick@activision.com', 0),
(8, 32, 'Darren', 'darren@email.com', 123123123),
(10, 13, 'RunerMan', 'runnerman@email.com', 777777777);

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
(1, 11, '2019-05-03 05:14:08', 'We had a great talk about Graph databases; however, I do not plan to more forward in the hiring process.'),
(2, 12, '2019-05-03 05:14:59', 'Met this guy in the elevator of a meet up'),
(3, 13, '2019-05-03 05:17:29', 'This company is the type of company I\'d be lucky to work at because of my interest in outdoorsy events'),
(4, 14, '2019-05-03 05:19:22', 'Went to one of their meetups and met the CEO, he likes puppies and dogs in general'),
(5, 15, '2019-05-03 05:19:57', 'Just started my application, can\'t wait to hear back!'),
(6, 16, '2019-05-03 05:21:31', 'I just applied online! Can\'t wait to meet them in person.'),
(7, 17, '2019-05-03 05:21:58', 'They focus on investments and on spending smarter'),
(8, 20, '2019-05-03 05:25:58', 'This company focuses on marketing teams and creating content'),
(9, 21, '2019-05-03 05:37:42', 'Need to follow up ASAP because he reached out to contact me'),
(10, 22, '2019-05-03 05:40:16', 'I have an appointment with Mark next Thursday at 10AM'),
(11, 23, '2019-05-03 05:41:33', 'IT incubator, focus on training skills. Potentially a recruitment scam?'),
(12, 24, '2019-05-03 05:42:31', '$50-65 an hour, heavily focuses on data science'),
(13, 25, '2019-05-03 05:42:59', 'Massive game development company!'),
(14, 26, '2019-05-03 05:44:14', 'Can pay from $67k-72k'),
(15, 29, '2019-05-03 05:45:23', 'Looking for a heavy front end related person'),
(16, 30, '2019-05-03 05:46:07', 'focus on cloud techonology'),
(17, 31, '2019-05-03 05:46:50', 'Health tech industries'),
(18, 32, '2019-05-03 05:46:52', 'Working with mostly ASP.NET and MVC websites\n');

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
(1, 2, '1', '1', 'Started Application', '', '2019-05-03 04:57:30'),
(2, 2, '2', '2', 'Started Application', '', '2019-05-03 04:57:35'),
(3, 2, '3', '3', 'Started Application', '', '2019-05-03 04:57:39'),
(4, 2, '4', '4', 'Started Application', '', '2019-05-03 04:57:45'),
(5, 2, '5', '5', 'Started Application', '', '2019-05-03 04:57:50'),
(6, 2, '6', '6', 'Started Application', '', '2019-05-03 04:57:55'),
(7, 2, '7', '7', 'Started Application', '', '2019-05-03 04:58:01'),
(8, 2, '8', '8', 'Started Application', '', '2019-05-03 04:58:06'),
(9, 2, '9', '9', 'Started Application', '', '2019-05-03 04:58:10'),
(10, 2, '10', '10', 'Started Application', '', '2019-05-03 04:58:16'),
(11, 1, 'Database Core Engineer', 'Neo4j', 'Archived', 'https://hire.withgoogle.com/public/jobs/neotechnologycom/view/P_AAAAAACAAHHA9UM6HJSXd_', '2019-05-03 05:14:08'),
(12, 1, 'Front End Developer', 'Cyber Coders', 'Waiting for Response', 'https://www.google.com/search?q=front+end+developer+jobs&oq=front+end+developer+jobs&aqs=chrome..69i57j0j69i60j0l3.5495j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwilyr3rzP7hAhVQ7lQKHR6PBKEQiYsCKAF6BAgJECU#fpstate=tldetail&htidocid=FL1pF2Md3e3kbjJjAAAAAA%3D%3D&htivrt=jobs', '2019-05-03 05:14:59'),
(13, 1, 'Software Engineer Intern', 'REI', 'Waiting for Response', 'https://www.glassdoor.com/job-listing/software-engineer-rei-JV_IC1150442_KO0,17_KE18,21.htm?jl=3063789216&ctt=1556860614839&srs=EI_JOBS', '2019-05-03 05:17:29'),
(14, 1, 'Full Stack Developer', 'Panasonic', 'Waiting for Response', 'https://www.panasonic.com/global/corporate/careers.html', '2019-05-03 05:19:22'),
(15, 1, 'Web Developer', 'SendGrid', 'Follow-up Needed', 'https://sendgrid.com', '2019-05-03 05:19:57'),
(16, 1, 'Junior Game Developer', 'Blizzard Entertainment', 'Started Application', 'https://www.blizzard.com/en-us/', '2019-05-03 05:21:31'),
(17, 1, 'Web Developer', 'Acorns', 'Waiting for Response', 'https://www.acorns.com/', '2019-05-03 05:21:58'),
(18, 1, 'Full Stack Web Developer', 'FRG', 'Waiting for Response', 'https://www.google.com/search?q=web+developer+jobs&oq=web+developer+jobs&aqs=chrome..69i57j69i60l3j0l2.2455j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwje6pWAz_7hAhUX7J4KHWmrD5AQp4wCMAB6BAgJEBE#htidocid=r_URL2yZj-qYeHsxAAAAAA%3D%3D', '2019-05-03 05:23:38'),
(19, 1, 'Software QA Engineer', 'Sony', 'Waiting for Response', 'https://www.sonyjobs.com/jobs.html', '2019-05-03 05:23:40'),
(20, 1, 'UI/UX Developer', 'Creative', 'Waiting for Response', 'https://www.google.com/search?q=web+developer+jobs&oq=web+developer+jobs&aqs=chrome..69i57j69i60l3j0l2.2455j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwje6pWAz_7hAhUX7J4KHWmrD5AQp4wCMAB6BAgJEBE#fpstate=tldetail&htidocid=TQ6UZFd2VDGsRlb6AAAAAA%3D%3D&htivrt=jobs', '2019-05-03 05:25:58'),
(21, 1, 'Web Developer', 'Digital Intelligence BV', 'Follow-up Needed', 'https://www.google.com/search?q=web+developer+jobs&oq=web+de&aqs=chrome.0.69i59j69i60l3j69i57j0.212223j0j7&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwjgrJCP0v7hAhWrrlQKHaG0BAwQiYsCKAF6BAgJECY#fpstate=tldetail&htidocid=r_URL2yZj-qYeHsxAAAAAA%3D%3D&htivrt=jobs', '2019-05-03 05:37:42'),
(22, 1, 'Lead UI/UX Web Developer', 'Facebook', 'Started Application', 'https://www.facebook.com/careers/', '2019-05-03 05:40:16'),
(23, 1, 'Entry Level Software Developer', 'Smoothstack', 'Started Application', 'https://www.smoothstack.com/', '2019-05-03 05:41:33'),
(24, 1, 'Software Engineer Web Development', 'Randstad US', 'Waiting for Response', 'https://www.google.com/search?q=web+developer+jobs&oq=web+developer+jobs&aqs=chrome..69i57j69i60l3j0l2.2455j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwje6pWAz_7hAhUX7J4KHWmrD5AQp4wCMAB6BAgJEBE#fpstate=tldetail&htidocid=Y8-WiT1lKLnlhHfWAAAAAA%3D%3D&htivrt=jobs', '2019-05-03 05:42:31'),
(25, 1, 'Junior Game Developer', 'Activision', 'Started Application', 'https://www.activision.com/', '2019-05-03 05:42:59'),
(26, 1, 'Back End Developer', 'Slack', 'Waiting for Response', 'https://www.google.com/search?q=web+developer+jobs&oq=web+developer+jobs&aqs=chrome..69i57j69i60l3j0l2.2455j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwje6pWAz_7hAhUX7J4KHWmrD5AQp4wCMAB6BAgJEBE#fpstate=tldetail&htidocid=nQy0y-zhnCK33_t8AAAAAA%3D%3D&htivrt=jobs', '2019-05-03 05:44:14'),
(27, 1, 'Software Developer', 'Comcast', 'Started Application', 'https://corporate.comcast.com/', '2019-05-03 05:44:45'),
(28, 1, 'Software Developer', 'Broadcom', 'Started Application', '', '2019-05-03 05:45:03'),
(29, 1, 'Web Developer', 'Shopify', 'Follow-up Needed', 'https://www.google.com/search?q=web+developer+jobs&oq=web+developer+jobs&aqs=chrome..69i57j69i60l3j0l2.2455j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwje6pWAz_7hAhUX7J4KHWmrD5AQp4wCMAB6BAgJEBE#fpstate=tldetail&htidocid=b03PHh93UzO2EwKTAAAAAA%3D%3D&htivrt=jobs', '2019-05-03 05:45:23'),
(30, 1, 'Cloud Developer', 'Ephesoft', 'Started Application', '', '2019-05-03 05:46:07'),
(31, 1, 'Database Management', 'Kareo', 'Started Application', '', '2019-05-03 05:46:50'),
(32, 1, 'Back End Developer', 'Applied Medical', 'Follow-up Needed', 'https://www.google.com/search?ei=idXLXNmHEKGT0gLNpKD4Dg&q=back+end+developer+jobs&oq=back+end+developer+jobs&gs_l=psy-ab.3..0i20i263j0l4j0i22i30l5.2589.3764..3879...1.0..0.105.489.5j1......0....1..gws-wiz.......0i71j0i67.ZBSO4SgqwZM&ibp=htl;jobs&sa=X&ved=2ahUKEwj65Pea1P7hAhUjilQKHSV1CZsQp4wCMAJ6BAgJEB8#htidocid=vQX9UGAYAs8aV-v2AAAAAA%3D%3D', '2019-05-03 05:46:52');

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
(1, 'Daniel Paschal', '2beb0192eb1ca5a8756bc89a09b93036e1854049', 'dandan@jobsearch.com'),
(2, 'Guest', '35675e68f4b5af7b995d9205ad0fc43842f16450', 'guest');

-- --------------------------------------------------------

--
-- Table structure for table `user_connection`
--

CREATE TABLE `user_connection` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `token` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `ip_address` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_connection`
--

INSERT INTO `user_connection` (`id`, `user_id`, `token`, `ip_address`, `created`) VALUES
(1, 2, 'ccc956e91ce9b9b2b51de2f015af574f333ce3cb', '107.185.177.48', '2019-05-03 04:46:57'),
(2, 15, '7cb15a405f6e3a25c21852cf065fd5c8d1d3d82b', '68.4.254.130', '2019-05-03 04:56:16'),
(3, 1, '86f78b8e022299dd551b80e5d28f3aefe5241db3', '68.4.254.130', '2019-05-03 04:57:08'),
(4, 2, 'c09447e1a7a909fa34c1cf5c8c083f871eb5454b', '47.154.5.76', '2019-05-03 05:07:51'),
(5, 1, 'ada51d280a20b53ba0b9249c58dd2fb6a15e9441', '47.154.5.76', '2019-05-03 05:09:33'),
(6, 1, 'fca7f9d47189c3d7471be416dc2a175578150713', '107.185.177.48', '2019-05-03 05:34:49'),
(7, 2, 'd8ae7b6f1dc9640279ea16d3a73086d93f630100', '107.185.177.48', '2019-05-03 06:29:57'),
(8, 2, 'ae42c294f6e20f0788bcb3c13bb4fd038c20a36d', '107.185.177.48', '2019-05-03 06:29:57'),
(9, 2, '9c1bb03c3c9ab2e479b3ce52d32eff6fdeecb522', '107.185.177.48', '2019-05-03 06:29:57'),
(10, 1, '04c50398aff0c03d9a1bf0717596851fd6328f7a', '107.185.177.48', '2019-05-03 06:30:19'),
(11, 2, 'ee691dd64bb2e9be7823cdd332562bbf01765084', '107.185.177.48', '2019-05-03 06:34:06'),
(12, 1, '3855f88636a5dec6c46cc2534ba055ddebb3be3a', '107.185.177.48', '2019-05-03 06:34:21'),
(13, 15, '2042abf93ba61fa64688aec560099b8d616f9498', '68.4.254.130', '2019-05-03 06:41:44'),
(14, 15, 'ecf54d6a738d9560c69bd48b96b039959d1b7b25', '68.4.254.130', '2019-05-03 06:41:44'),
(15, 17, '405d2348e2c0f0279663382cd522ba14424b051b', '68.4.254.130', '2019-05-03 06:41:53'),
(16, 1, 'e2cfd662e2e078557b566c30a4c1a05b3be9a1dc', '68.4.254.130', '2019-05-03 06:42:14'),
(17, 2, '699c7255576287f9cfc811f4136ff548b2cb55c8', '107.185.177.48', '2019-05-03 06:43:42'),
(18, 1, 'dfe21c0c6bc76858721d12f1aea1deacb0977ee0', '107.185.177.48', '2019-05-03 06:46:50');

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
-- Indexes for table `user_connection`
--
ALTER TABLE `user_connection`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `note_item`
--
ALTER TABLE `note_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `tracker_item`
--
ALTER TABLE `tracker_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `user_connection`
--
ALTER TABLE `user_connection`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
