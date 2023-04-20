const cTable = require('console.table');
const inquirer = require("inquirer");
require('dotenv').config()
//get the client
const db = require("./db/dbindex");

// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);
  
  
async function userActionPrompt(){
    const response = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Departments",
                    value: "viewAllDepartments"
                },
                {
                    name: "View All Roles",
                    value: "viewAllRoles"
                },
                {
                    name: "View All Employees",
                    value: "viewAllEmployees"
                },{
                name: "Add a Role",
                value: "addRole"
            },
                {
                    name: "Add an Employee",
                    value: "addEmployee"
                },
                {
                    name: "Update Employee Role",
                    value: "updateEmployeeRole"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]);

 

    switch(response.choice){
        case "viewAllDepartments":
            await viewAllDepartments();
            break;
        case "viewAllRoles":
            await viewAllRoles();
            break;
        case "viewAllEmployees":
            await viewAllEmployees();
            break;
            case "addRoles":
                await addRoles();
                break;
            case "addEmployee":
                await addEmployee();
                break;
            case "updateEmployeeRole":
                await updateEmployeeRole();
                break;
        default:
            console.log("Good Bye");
            return;
    }

    await userActionPrompt();
}

async function viewAllDepartments(){
    const [rows] = await db.viewAllDepartments();

    console.table(rows);
}



async function viewAllRoles(){
    const [rows] = await db.viewAllRoles();

    console.table(rows);
}

async function viewAllEmployees(){
    const [rows] = await db.viewAllEmployees();

    console.table(rows);
}

async function addRoles(){
    const [rows] = await db.addRole();

    console.table(rows);
}

async function addEmployee(){
    const [rows] = await db.addEmployee();

    console.table(rows);
}

async function updateEmployeeRole(){
    const [rows] = await db.updateEmployeeRole();

    console.table(rows);
}


userActionPrompt();