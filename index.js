// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description explaining the whatm why and how of your porject.',
    name: 'description',
  },
];

console.log('index running');
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
        const readMe = generateReadMe(answers)
        console.log(readMe);
        fs.writeFile('README.md', readMe, (err) =>{
          if(err){
            console.log('Error Found Cound Not Save');
          } else {
            console.log('Success!!');
          }
        })
       // return(answers)
    })
    .catch((error) => {
      console.log(error);
    })
}

// Function call to initialize app
init();

/*
inquirer
.prompt([
  {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your languages do you know?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'method',
    },
  ])
  .then((response) =>
    console.log(response.username, response.language, response.method)
  );
*/