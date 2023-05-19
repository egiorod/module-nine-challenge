// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArray = [
  {
    name: 'Apache',
    license: 'apache',
    badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    license: 'apache',
    badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0'
  }];
function renderLicenseBadge(license) {
  '[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)'
}  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseArray = [
    {
      license: 'apache',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      link: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
      license: 'apache',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      link: 'https://opensource.org/licenses/Apache-2.0'
    }
  ] 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n
  ## ${data.description}\n
  ### Table of Contents\n
  \t- [Installation](#installation)\n
  \t- [Usage](#usage)\n
  \t- [Credits](#credits)\n
  \t- [License](#license)\n
  ## Installation
  TO DO
  ## Usage
  TO DO
  ## Credits
  TO DO 
  ## License
  TO DO
  `;
}
module.exports = generateMarkdown;
