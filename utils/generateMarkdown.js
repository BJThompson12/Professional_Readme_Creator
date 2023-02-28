// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## 📋 Description
  ${data.description}
  ## 🗄️  Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [How To Contribute](#HowToContribute)
  [Tests](#Tests)
  [Contact Me](#ContactMe)
  ## 🛠️ Installation
  ${data.installation}
  ## 🖥️ Usage
  ${data.usage}
  ## 🔐  License
  ${data.license}
  ## 📝 How To Contribute
  ${data.contributing}
  ## 🧮 Tests
  ${data.tests}
  ## 📞  Contact Me
  [GitHub](${data.github})
  [Email](${data.email})
`;
}

module.exports = generateMarkdown;
