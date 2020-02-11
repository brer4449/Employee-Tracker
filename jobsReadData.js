const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "veryeasypassword",
  database: "jobs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

//Inquirer list to direct what the user wants to do
const start = () => {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role" //,
        // "View All Employees by Manager",
      ]
    })
    .then(answer => {
      //Switch statement to then run corresponding function
      switch (answer.choice) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Departments":
          viewDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDept();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        // case "View All Employees by Manager":
        //   viewByManager();
        //   break;
      }
    });
};

//Displays all employees' first and last names as a table
const viewEmployees = () => {
  connection.query(
    "SELECT title, first_name, last_name FROM employees INNER JOIN roles ON employees.role_id = roles.id",
    function(err, res) {
      if (err) throw err;
      console.table(res);
      endSearch();
    }
  );
};

//Displays all roles that are currently in DB
const viewRoles = () => {
  connection.query("SELECT title, salary FROM roles", function(err, res) {
    if (err) throw err;
    console.table(res);
    endSearch();
  });
};

//Displays all departments that are currently in DB
const viewDepartment = () => {
  connection.query("SELECT dept_name FROM departments", function(err, res) {
    if (err) throw err;
    console.table(res);
    endSearch();
  });
};

//Adds an employee to the DB, as well as their role/dept ID
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the person's first name?"
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the person's last name?"
      },
      {
        name: "position",
        type: "list",
        message: "Please select the most appropriate role for this person: ",
        choices: [
          "1.Sales",
          "2.Accounting",
          "3.Quality Assurance",
          "4.Customer Relations",
          "5.HR",
          "6.Management"
        ]
      }
    ])
    .then(answer => {
      connection.query("INSERT INTO employees SET ?", {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.position[0]
      });
      endSearch();
    });
};

//Adds a role to the DB, as well as a salary that the user sets
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "What role would you like to add?"
      },
      {
        name: "salary",
        type: "number",
        message: "What is the salary of this role?",
        validate: function(value) {
          if (isNaN(value) == false) {
            return true;
          } else {
            return false;
          }
        }
      }
    ])
    .then(answer => {
      connection.query("INSERT INTO roles SET ?", {
        title: answer.role,
        salary: answer.salary
      });
      console.log("Role was successfully added!");
      endSearch();
    });
};

//Adds a department to the DB
addDept = () => {
  inquirer
    .prompt([
      {
        name: "dept",
        type: "input",
        message: "What department would you like to add?"
      }
    ])
    .then(answer => {
      connection.query("INSERT INTO departments SET ?", {
        dept_name: answer.dept
      });
      console.log("Department was successfully added!");
      endSearch();
    });
};

//Intended to update role of employee (by selecting role id and then changing that...?) WIP
const updateRole = () => {
  inquirer
    .prompt({
      name: "promotion",
      type: "list",
      message: "Which employee would you like to promote (or demote)?",
      choices: ["blah"]
    })
    .then(answer => {
      console.log(answer);
    });
};

// Sorts through employees by manager (WIP)
// const viewByManager = () => {
//   inquirer
//     .prompt({
//       name: "boss",
//       type: "list",
//       message:
//         "Please pick which manager you'd like to see the underlings for:",
//       choices: ["list of managers"]
//     })
//     .then(answer => {
//       console.log(answer.boss);
//       endSearch();
//     });
// };

//Asks the user if they want to continue
endSearch = () => {
  inquirer
    .prompt({
      name: "finish",
      type: "confirm",
      message: "Do you want to keep searching employee database?"
    })
    .then(answer => {
      //If yes, bring them back to the start
      if (answer.finish === true) {
        start();
        //If no, end the connection and bid them farewell
      } else {
        console.log("Your search is complete, goodbye.");
        connection.end();
      }
    });
};

/*
inquirer
    .prompt({
      name: "dept",
      type: "list",
      message: "Please choose which department you want to search:",
      choices: [
        "1.Sales",
        "2.Accounting",
        "3.Quality Assurance",
        "4.Customer Relations",
        "5.HR",
        "6.Management"
      ]
    })
    .then(answer => {
      //TO BE SOLVED!
      // console.log(answer.dept);
      console.log(answer.dept[0]);
      connection.query(
        "SELECT title, first_name, last_name FROM employees INNER JOIN roles ON ? = employees.role_id",
        [{ dept_id: answer.dept[0] }],
        function(err, res) {
          if (err) throw err;
          console.table(res);
          endSearch();
        }
      );
    });
*/

/*
-- While you are referencing the correct table.attribute you don't declare how that connection is made.
role_id INTEGER REFERENCES roles(id),
manager_id INTEGER REFERENCES departments(dept_id),
​
-- Here is what we want it to look like
-- First we declare our attribute name, type and options
role_id INT NOT NULL,
manager_id INT,
-- Then we declare our FOREIGN KEY connections
-- Here we declare which attribute will be our connection to another table
--    And we REFERENCE the table and attribute that connects the two pieces 	  of data
FOREIGN KEY (role_id) REFERENCES roles(id),
FOREIGN KEY (manager_id) REFERENCES employees(id)
*/
