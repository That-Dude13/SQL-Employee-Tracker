const cTable = require('console.table');
const inquirer = require("inquirer");
require('dotenv').config()
//get the client
const mysql = require('mysql2');
//Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employee_tracker database.`)
);
  

