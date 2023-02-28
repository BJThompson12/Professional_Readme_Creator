// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const util = require('util')
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your Project Title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of the project.',
},
{
    type :'input',
    name: 'installation',
    message: 'What are the installation instructions for your application?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Describe the use of your application.',
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0',  'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Ecplise Public License 2.0', 'Mozilla Public License 2.0', 'The Unicense', 'None'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can users contribute to your application?',
},
{
    type: 'input',
    name: 'tests',
    message: 'Would you like to include tests for your application?',
},
{
  type: 'input',
  name: 'github',
  message: 'Enter your GitHub profile link.',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub profile link.',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
}

];

console.log('index running');
// TODO: Create a function to write README file
function writeToFile(answers) {
  const readMe = generateReadMe(answers)
  fs.writeFile('README.md', readMe, (err) =>{
    if(err){
      console.log('Error Found Cound Not Save');
    } else {
      console.log('Success!!');
    }
  })
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
       writeToFile(answers)
        //const readMe = generateReadMe(answers)
        //console.log(readMe);
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