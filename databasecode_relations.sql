-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Vært: idathoet.com.mysql.service.one.com:3306
-- Genereringstid: 16. 12 2021 kl. 23:58:05
-- Serverversion: 10.3.32-MariaDB-1:10.3.32+maria~focal
-- PHP-version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `idathoet_comnewsletter_laark`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `active_subscriber`
--

CREATE TABLE `active_subscriber` (
  `first_name` varchar(256) NOT NULL,
  `last_name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `subscriber_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Data dump for tabellen `active_subscriber`
--

INSERT INTO `active_subscriber` (`first_name`, `last_name`, `email`, `subscriber_number`) VALUES
('Jule', 'Mand', 'jm@nordpolen.jul', 1),
('Bat', 'Man', 'bruce@wayne.com', 2),
('Helena', 'Schmidt Meyer', 'hesm@kvuc.dk', 3),
('Henning', 'Friis Karlson', 'henning@henningfriis.dk', 4),
('Wonder', 'Woman', 'ww@justiceleague.com', 5),
('Bruce', 'Wayne', 'im@batman.com', 6),
('Cat', 'Woman', 'crazycatlady@yahoo.com', 7),
('Peter', 'Parker', 'spooder@starkcorp.com', 8),
('Natalia Alianovna', 'Romanoff', 'deffonotblackwidow@avengers.com', 9),
('Matthew', 'Murdock', 'daredevil@marvel.com', 10),
('Kurt', 'Højstrup Clausen', 'kucl@gladsaxegym.dk', 11);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `inactive_subscriber`
--

CREATE TABLE `inactive_subscriber` (
  `deactivated_subscriber` datetime NOT NULL,
  `subscriber_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `newsletter`
--

CREATE TABLE `newsletter` (
  `newsletter_number` int(11) NOT NULL,
  `templateID` int(11) DEFAULT NULL,
  `created_newsletter` datetime DEFAULT NULL,
  `pictures` longblob DEFAULT NULL,
  `sent_amount` int(11) DEFAULT NULL,
  `sent_date` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `subscriber`
--

CREATE TABLE `subscriber` (
  `subscriber_number` int(11) NOT NULL,
  `created_subscriber` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Data dump for tabellen `subscriber`
--

INSERT INTO `subscriber` (`subscriber_number`, `created_subscriber`) VALUES
(1, '2025-12-12 03:14:07'),
(2, '2021-12-12 12:12:12'),
(3, '2021-11-01 12:03:56'),
(4, '2021-10-31 23:01:04'),
(5, '2021-10-11 04:32:49'),
(6, '2027-04-22 17:15:54'),
(7, '2020-12-27 12:00:21'),
(8, '2030-02-24 05:45:33'),
(9, '2021-12-17 00:53:21'),
(10, '2019-07-13 03:23:23'),
(11, '2021-10-22 22:22:22');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `template`
--

CREATE TABLE `template` (
  `templateID` int(11) NOT NULL,
  `logo` longblob DEFAULT NULL,
  `theme` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `active_subscriber`
--
ALTER TABLE `active_subscriber`
  ADD PRIMARY KEY (`subscriber_number`);

--
-- Indeks for tabel `inactive_subscriber`
--
ALTER TABLE `inactive_subscriber`
  ADD PRIMARY KEY (`subscriber_number`);

--
-- Indeks for tabel `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`newsletter_number`),
  ADD KEY `templateID` (`templateID`);

--
-- Indeks for tabel `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`subscriber_number`);

--
-- Indeks for tabel `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`templateID`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `newsletter_number` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `subscriber_number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Tilføj AUTO_INCREMENT i tabel `template`
--
ALTER TABLE `template`
  MODIFY `templateID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `active_subscriber`
--
ALTER TABLE `active_subscriber`
  ADD CONSTRAINT `active_subscriber_ibfk_1` FOREIGN KEY (`subscriber_number`) REFERENCES `subscriber` (`subscriber_number`);

--
-- Begrænsninger for tabel `inactive_subscriber`
--
ALTER TABLE `inactive_subscriber`
  ADD CONSTRAINT `inactive_subscriber_ibfk_1` FOREIGN KEY (`subscriber_number`) REFERENCES `subscriber` (`subscriber_number`);

--
-- Begrænsninger for tabel `newsletter`
--
ALTER TABLE `newsletter`
  ADD CONSTRAINT `newsletter_ibfk_1` FOREIGN KEY (`templateID`) REFERENCES `template` (`templateID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
