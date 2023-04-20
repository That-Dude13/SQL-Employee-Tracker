const cTable = require('console.table');
const inquirer = require("inquirer");
require('dotenv').config()
//get the client
const mysql = require('mysql2');

class EmployeeDB {
    constructor() {
        this.db = mysql.createConnection({
            host: "localhost",
            // Your username
            user: process.env.DB_USER,
            // Your password
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })

        this.db.connect(function (err) {
            if (err) throw err;
        });
    }

    viewAllDepartments() {
        const sql = `SELECT id, name FROM department`;
        return this.db.promise().query(sql);
    }

    viewAllRoles() {
        const sql = `SELECT id,  title  FROM role`;
        return this.db.promise().query(sql);
    }

    viewAllEmployees() {
        const sql = `SELECT id, first_name, last_name AS name FROM employee`;
        return this.db.promise().query(sql);
    }

    addRoles(role, text) {
        const sql = `INSERT INTO role tite,text) VALUES (?, ?)`;
        const params = [role , text];

        return this.db.promise().query(sql,params);
    }

    addEmployee(first_name, last_name, role_id, manager_id, text) {
        const sql = `INSERT INTO employee first_name, last_name, role_id, manager_id, text) VALUES (?, ?, ?, ?)`;
        const params = [first_name, last_name, role_id, manager_id, text];

        return this.db.promise().query(sql,params);
    }

    updateEmployeeRole(employee, role_title, text ) {
        const sql = `INSERT INTO employee role_title, text) VALUES (?, ?, ?)`;
        const params = [employee, role_title, text];

        return this.db.promise().query(sql,params);
    }

}
module.exports = new EmployeeDB();