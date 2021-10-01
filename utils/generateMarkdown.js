// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "GNU v3" : "https://img.shields.io/badge/License-GPLv3-blue.svg",

  }
  if (license in badge){
    return `[![License: ${license}](${badge[license]})](${renderLicenseLink(license)})`;
  } else 
  // if unlicensed
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return {
    "MIT" : "https://opensource.org/licenses/MIT",
    "GNU v3" : "https://www.gnu.org/licenses/gpl-3.0",
  }[license]
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(license != "Unlicense"){
//     return `This repository is under the [${license}](${renderLicenseLink(license)}).`
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

//   return `# ${data.title}

//   ${renderLicenseBadge(data.license)}
//     ## Description
//    ${data.description}

//   ## Table of Contents
//   * [Installation](#installation)
//   * [Usage](#usage)
//   * [Contribution](#contribution)
//   * [License](#license)
//   * [Testing](#testing)
//   * [Question](#questions)
  
//   ## Installation
//   ${data.installation}
  
//   ## Usage
//   ${data.usage}
  
//   ## License
//   ${renderLicenseSection(data.license)}
  
//   ## Contribution
//   ${data.contribution}
  
//   ## Testing
//   ${data.testing}
//   ## Questions
  
//   Please contact me at [${data.email}](mailto:${data.email}).  [${data.github}](https://github.com/${data.github}).
  

// `;
// }

// module.exports = generateMarkdown:
