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

--EMPLOYEES--
INSERT INTO employees( first_name, last_name)
VALUES("Jim", "Halpert");

INSERT INTO employees( first_name, last_name)
VALUES("Oscar", "Martinez");

INSERT INTO employees( first_name, last_name)
VALUES("Pam", "Beasley");

INSERT INTO employees( first_name, last_name)
VALUES("Dwight", "Schrute");

INSERT INTO employees( first_name, last_name)
VALUES("Kevin", "Malone");

INSERT INTO employees( first_name, last_name)
VALUES("Angela", "Martin");

INSERT INTO employees( first_name, last_name)
VALUES("Stanley", "Hudson");

INSERT INTO employees( first_name, last_name)
VALUES("Toby", "Flenderson");

INSERT INTO employees( first_name, last_name)
VALUES("Creed", "Bratton");

INSERT INTO employees( first_name, last_name)
VALUES("Meredith", "Palmer");

INSERT INTO employees( first_name, last_name)
VALUES("Kelly", "Kapoor");

--ROLES--
INSERT INTO roles( title, salary)
VALUES("Sales Rep", 10.5);

INSERT INTO roles( title, salary)
VALUES("Accountant", 10.5);

INSERT INTO roles( title, salary)
VALUES("Head Accountant", 10.5);

INSERT INTO roles( title, salary)
VALUES("Quality Assurance Director", 10.5);

INSERT INTO roles( title, salary)
VALUES("Head of Human Resources", 10.5);

INSERT INTO roles( title, salary)
VALUES("Supplier Relations Rep", 10.5);

INSERT INTO roles( title, salary)
VALUES("Customer Service Rep", 10.5);

--DEPARTMENTS--
INSERT INTO departments( name)
VALUES("Sales");

INSERT INTO departments( name)
VALUES("Accounting");

INSERT INTO departments( name)
VALUES("Quality Assurance");

INSERT INTO departments( name)
VALUES("Customer Relations");

INSERT INTO departments( name)
VALUES("HR");
