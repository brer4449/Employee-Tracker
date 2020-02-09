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

const start = () => {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add Employee",
        "Update Employee Role"
      ]
    })
    .then(answer => {
      switch (answer.choice) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View All Employees by Department":
          viewByDepartment();
          break;
        case "View All Employees by Manager":
          viewByManager();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
      }
    });
};

const viewEmployees = () => {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.table(res);
    endSearch();
  });
};

const viewByDepartment = () => {
  inquirer
    .prompt({
      name: "dept",
      type: "list",
      message: "Please choose which department you want to search:",
      choices: [
        "Management",
        "Sales",
        "Accounting",
        "Quality Assurance",
        "Customer Relations",
        "HR"
      ]
    })
    .then(answer => {
      // console.log(answer.dept);
      connection.query(
        "SELECT first_name, last_name FROM employees WHERE ?",
        [{ role_id: 1 }],
        function(err, res) {
          if (err) throw err;
          console.table(res);
          endSearch();
        }
      );
    });
};

const viewByManager = () => {
  inquirer
    .prompt({
      name: "boss",
      type: "list",
      message:
        "Please pick which manager you'd like to see the underlings for:",
      choices: ["list of managers"]
    })
    .then(answer => {
      console.log(answer.boss);
      endSearch();
    });
};

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
          "1.Management",
          "2.Sales",
          "3.Accounting",
          "4.Quality Assurance",
          "5.Customer Relations",
          "6.HR"
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

endSearch = () => {
  inquirer
    .prompt({
      name: "finish",
      type: "confirm",
      message: "Do you want to keep searching employee database?"
    })
    .then(answer => {
      if (answer.finish === true) {
        start();
      } else {
        console.log("Your search is complete, goodbye.");
        connection.end();
      }
    });
};
