// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of your project:',
  },
  // Add more questions as needed
  {
    type: 'editor',
    name: 'installation',
    message: 'Enter how the installation needs to be done:',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Enter the main usage of your project:',
  },
  {
    type: 'editor',
    name: 'tableOfContents',
    message: 'Enter how the installation needs to be done:',
  },
  {
    type: 'rawlist',
    name: 'licenses',
    choices: ['apache', 'eclipse', 'gnu', 'mit', 'mozilla', 'unlicense'],
  },
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then(answers => {
  // Use the answers to generate the README content
  const readmeContent = generateMarkdown(answers)
  // Write the README file
  fs.writeFileSync('README.md', readmeContent)
});

// TODO: Create a function to initialize app
function init() {} 

// Function call to initialize app
init();