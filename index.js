// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./develop/utils/generateREADME.js')
const generateMarkdown = require('./develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptProject = portfolioData => {
    console.log(`
  ===========================
  Welcome to README Generator
  ===========================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the title of your project?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please provide a description of the project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Are there any specific installation instructions?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Usage information?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Contribution Guidelines?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Finally, does your application have Test Instructions?'
        },
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };
  



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();