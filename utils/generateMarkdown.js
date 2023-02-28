function renderLicenseBadge(license) {
  switch (license.license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'

    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'

    case 'MIT':
      return '[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)'
      
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' 

    case 'The Unicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  
    default: ''
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return 'https://opensource.org/license/mit/'

    default: ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
   

    default: ''
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data)

  console.log(badge);

  return `
  ${badge}
  # ${data.title}
  ## 📋 Description
  ${data.description}
  ## 🗄️  Table of Contents
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [License](#License)
 - [How To Contribute](#HowToContribute)
 - [Tests](#Tests)
 - [Questions](#Questions)
 - [Contact Me](#ContactMe)
  ## Installation 🛠️ 
  ${data.installation}
  ## Usage 🖥️ 
  ${data.usage}
  ## License 🔐  
  ${data.license}
  ## Contributing 📝 
  ${data.contributing}
  ## Tests 🧮
  ${data.tests}
  ## Questions ❓
  [GitHub Profile](github.com/${data.github}/)
  I can be reached at ${data.email} for any questions.
`;
}

module.exports = generateMarkdown;
