// call once somewhere in the beginning of the app
const cTable = require('console.table');
require('dotenv').config()
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


cTable([
   db.connect(function(err) {
        if (err) throw err;
        db.query("SELECT * FROM department", function (err, result, name) {
          if (err) throw err;
          //Return the fields object:
          console.table(department);
        });
      
    })
    
    ])
