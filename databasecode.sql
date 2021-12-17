CREATE TABLE active_subscriber (
  subscriber_number int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name varchar(256) NOT NULL,
  last_name varchar(256) NOT NULL,
  email varchar(256) NOT NULL
);

INSERT INTO active_subscriber (first_name, last_name, email) VALUES ('Nunni', 'Ukkinuk', 'kukkuk@gmail.com');





CREATE TABLE inactive_subscriber (
  subscriber_number int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  deactivated_subscriber datetime NOT NULL
);




CREATE TABLE subscriber (
  subscriber_number int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  created_subscriber timestamp NULL
);



CREATE TABLE newsletter (
  newsletter_number int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  templateID int(11) DEFAULT NULL,
  created_newsletter datetime DEFAULT NULL,
  pictures longblob DEFAULT NULL,
  sent_amount int(11) DEFAULT NULL,
  sent_date datetime DEFAULT NULL,
  status tinyint(1) DEFAULT NULL
);


CREATE TABLE template (
  templateID int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  logo longblob DEFAULT NULL,
  theme int(11) DEFAULT NULL
);