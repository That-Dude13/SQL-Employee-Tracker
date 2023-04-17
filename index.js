const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require('console.table');
console.table([
 

function init() {
  inquirer
    .prompt
      {
        type: "list",
        message: "Would you like to create a logo?",
        name: "logo",     
        choices: ["yes","no"],

      },

      {
        type: "list",
        message: "What color would you like to display your text?",
        name: "color",
        choices: ["blue", "yellow", "green", "white"],
      },

      {
        type: "list",
        message: "What would you like for your first shape?",
        name: "firstShape",
        choices: ["Triangle", "Circle", "Square"],
      },

      {
        type: "list",
        message: "What color would like the color of your first shape to be?",
        name: "firstShapeColor",
        choices: ["blue", "yellow", "green", "white"],
      },

      {
        type: "list",
        message: "What would you like for your Second shape?",
        name: "secondShape",
        choices: ["Triangle", "Circle", "Square"],
      },

      {
        type: "list",
        message: "What color would like the color of your second shape to be?",
        name: "secondShapeColor",
        choices: ["blue", "yellow", "green", "white"],
      },

      {
        type: "list",
        message: "What would you like for your third shape?",
        name: "thirdShape",
        choices: ["Triangle", "Circle", "Square"],
      },

      {
        type: "list",
        message: "What color would like the color of your third shape to be?",
        name: "thirdShapeColor",
        choices: ["blue", "yellow", "green", "white"],
      },

    
      
    
    ])

    .then (answers => {
      const firstShape = new (eval(answers.firstShape))(answers.firstShapeColor);
      const secondShape = new (eval(answers.secondShape))(answers.secondShapeColor);
      const thirdShape = new (eval(answers.thirdShape))(answers.thirdShapeColor);
    
      const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
          ${firstShape.render()}
          ${secondShape.render()}
          ${thirdShape.render()}
        </svg>
      `;
    

      fs.writeFile("shapes.svg", svgContent, function(err, result) {
        if(err) console.log('error', err);
      });
    })}
  init();
