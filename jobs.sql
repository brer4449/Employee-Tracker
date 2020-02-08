DROP DATABASE IF EXISTS jobs_db;
CREATE DATABASE jobs_db;
USE jobs_db;

CREATE TABLE employees(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE roles(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(2),
  PRIMARY KEY(id)
);

CREATE TABLE departments(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

INSERT INTO employees( first_name, last_name)
VALUES("Jim", "Halpert");

INSERT INTO employees( first_name, last_name)
VALUES("Oscar", "Martinez");

INSERT INTO employees( first_name, last_name)
VALUES("Pam", "Beasley");

INSERT INTO employees( first_name, last_name)
VALUES("Dwight", "Schrute");