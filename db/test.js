// call once somewhere in the beginning of the app
const cTable = require("console.table");
require("dotenv").config();
const mysql = require("mysql2");
//Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: process.env.DB_USER,
  // MySQL password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to database
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the employee_tracker database.");

  // Execute SELECT query
  db.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    console.table(results);
  });

  db.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    console.table(results);
  });

  db.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    console.table(results);
  });
});
