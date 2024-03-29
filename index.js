// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const promptProject = () => {
    console.log(`
  ===========================
  Welcome to README Generator
  ===========================
  `);
  
    // If there's no 'projects' array property, create one
    // if (!portfolioData.projects) {
    //   portfolioData.projects = [];
    // }
    return inquirer
      .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Project title:"
        },
        {
            type: 'input',
            name: 'description',
            message: "Project description:"
        },
        {
            type: 'input',
            name: 'installation',
            message: "Installation instruction:"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Usage information:"
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Contribution guidelines:"
        },
        {
            type: 'input',
            name: 'test',
            message: "Test instructions:"
        },
        {
            type: 'list',
            name: 'license',
            message: "Pick the type of license:",
            choices: ['MIT', 'Apache', 'BSD', 'None' ]
        },
        {
            type: 'input',
            name: 'username',
            message: "Please enter your Github username:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email adddress:"
        }])
      // ]).then(projectData => {
      //   portfolioData.projects.push(projectData);
      //   if (projectData.confirmAddProject) {
      //     return promptProject(portfolioData);
      //   } else {
      //     return portfolioData;
      //   }
      // });
  };
  



// TODO: Create a function to initialize app
async function init() {
  var results = await promptProject()
  console.log(results);
  fs.writeFileSync(path.join(__dirname, '/dist/', 'README.md'), generateMarkdown(results))
} 

// Function call to initialize app
init();

// Now the license badge isn't generating