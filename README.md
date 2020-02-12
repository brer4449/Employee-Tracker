<!-- Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development -->

<!--
department:
id - INT PRIMARY KEY

name - VARCHAR(30) to hold department name✓

role:
id - INT PRIMARY KEY✓

title -  VARCHAR(30) to hold role title✓

salary -  DECIMAL to hold role salary✓

department_id -  INT to hold reference to department role belongs to

employee:
id - INT PRIMARY KEY✓

first_name - VARCHAR(30) to hold employee first name✓

last_name - VARCHAR(30) to hold employee last name✓

role_id - INT to hold reference to role employee has

manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

Build a command-line application that at a minimum allows the user to:

Add departments, ✓
Add roles, ✓
Add employees ✓

View departments, ✓
View roles, ✓
View employees ✓

Update employee roles

Bonus points if you're able to:

Update employee managers

View employees by manager

Delete departments, roles, and employees

View the total utilized budget of a department -- ie the combined salaries of all employees in that department

Hints

You may wish to include a seed.sql file to pre-populate your database. This will make development of individual features much easier.

Focus on getting the basic functionality completed before working on more advanced features.

Review the week's activities for a refresher on MySQL.

Check out SQL Bolt for some extra MySQL help.

Minimum Requirements

Functional application.

GitHub repository with a unique name and a README describing the project.
-->
