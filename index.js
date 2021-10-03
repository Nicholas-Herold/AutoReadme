// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =  [
    // Project Title
    {
        type: "input",
        message: "Please provide name of project?",
        name: "title",
    },
    // Enter Description
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description",
    },
    // Installation
    {
        type: "input",
        message: "Please provide commands to install any dependencies?",
        name: "installation",
    },
    // Usage information
    {
        type: "input",
        message: "How is this application meant to be used?",
        name: "usage",
    },
    // contribution guidelines
    {
        type: "input",
        message: "contribution guidelines for your project?",
        name: "contribution",
    },
    // test instructions
    {
        type: "input",
        message: "What command should be run for testing?",
        name: "testing",
    },
    // License...change input to options(?)
    // add license badge to top of readme and notice is added to the section of the readme entitled license that explains which license the app is covered under
    {
        type: "list",
        message: "What license should your README have?",
        choices: [
            "MIT",
            "Gnu v3",
            "Unlicense"
        ],
        name: "license",
    },
    // Github username
    {
        type: "input",
        message: "Enter GitHub name:",
        name: "github",
    },
    // email
    {
        type: "input",
        message: "Enter email: ",
        name: "email",
    },

];
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("successfully READMEex.md"));
}

// TODO: Create a function to initialize app
function init() {
    console.log("Please answer the following questions to create readme");
    inquirer.prompt(questions)
    .then(data => {
        const info = generateMarkdown(data);
        
        writeToFile("READMEex.md", info);
})
}

// Function call to initialize app
init();
