DROP DATABASE IF EXISTS jobs_db;
CREATE DATABASE jobs_db;
USE jobs_db;

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

CREATE TABLE employees(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER REFERENCES roles(id),
  PRIMARY KEY(id)
);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Jim", "Halpert", 1);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Pam", "Beasley", 1);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Stanley", "Hudson", 1);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Dwight", "Schrute", 1);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Kevin", "Malone", 2);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Angela", "Martin", 2);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Oscar", "Martinez", 3);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Creed", "Bratton", 4);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Toby", "Flenderson", 5);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Meredith", "Palmer", 6);

INSERT INTO employees( first_name, last_name, role_id)
VALUES("Kelly", "Kapoor", 7);

INSERT INTO employees (first_name, last_name, role_id)
VALUES("Michael", "Scott", 7);

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

INSERT INTO departments (name)
VALUES("Management");

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
