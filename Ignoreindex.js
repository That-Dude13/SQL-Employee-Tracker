// // const inquirer = require("inquirer");
// // const fs = require("fs");
// // require('dotenv').config()
// // const cTable = require('console.table');
// // const { off } = require("process");
// // // console.table([
 

// function init() {
//     inquirer
//         .prompt([
//       {
//         type: "list",
//         message: "What would you like to do?",
//         name: "Employees",     
//         choices: ["View All Employees","Add Employee","Update Employee Role","View All Roles","Add Role","View All Departments","Add Department"],

//       },

//       {
//         type: "list",
//         message: "View All Departments",
//         name: "Departments",
//         choices: ["Sales", "Engineering", "Finance", "Legal"],
//       },

//       {
//         type: "list",
//         message: "View All Roles",
//         name: "Roles",
//         choices: ["Sales Lead", "Sales Person", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"],
//       },

//       {
//         type: "list",
//         message: "What color would like the color of your first shape to be?",
//         name: "firstShapeColor",
//         choices: ["blue", "yellow", "green", "white"],
//       },

//       {
//         type: "list",
//         message: "What would you like for your Second shape?",
//         name: "secondShape",
//         choices: ["Triangle", "Circle", "Square"],
//       },

//       {
//         type: "list",
//         message: "What color would like the color of your second shape to be?",
//         name: "secondShapeColor",
//         choices: ["blue", "yellow", "green", "white"],
//       },

//       {
//         type: "list",
//         message: "What would you like for your third shape?",
//         name: "thirdShape",
//         choices: ["Triangle", "Circle", "Square"],
//       },

//       {
//         type: "list",
//         message: "What color would like the color of your third shape to be?",
//         name: "thirdShapeColor",
//         choices: ["blue", "yellow", "green", "white"],
//       },

    
      
    
//     ])
// update 
// selecet 
// insert

// (persist data)
// generate data 
// consolidate data
// send it off
//     // .then (answers => {
//     //   const firstShape = new (eval(answers.firstShape))(answers.firstShapeColor);
//     //   const secondShape = new (eval(answers.secondShape))(answers.secondShapeColor);
//     //   const thirdShape = new (eval(answers.thirdShape))(answers.thirdShapeColor);
    
//     //   const svgContent = `
//     //     <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
//     //       ${firstShape.render()}
//     //       ${secondShape.render()}
//     //       ${thirdShape.render()}
//     //     </svg>
//     //   `;
    

//     //   fs.writeFile("shapes.svg", svgContent, function(err, result) {
//     //     if(err) console.log('error', err);
//     //   });
//     // })}
//   init();