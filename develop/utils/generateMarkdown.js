// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  if (data.license) {
    return `![License](https://img.shields.io/badge/License-${data.license}%20-yellow.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseType = (data.license);
  if (licenseType == 'MIT') {
      var licenseLink = `[MIT](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#mit-license)`
  };
  if (licenseType == 'Apache') {
    var licenseLink = `[Apache](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#apache-license-20)`
  };
  if (licenseType == 'BSD') {
    var licenseLink = `[BSD](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#the-bsd-license-case)`
  };
  if (licenseType == 'None') {
    var licenseLink = `"None"`
  };
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license) {
    return `## License`;
   } else {
     return '';
   }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributing](#contributing)
  6. [Test](#test)
  7. [License](#license)
  8. [Questions](#questions)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Test
  ${data.test}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Questions
  ${data.questions}<br />
  Visit my GitHub page! [${data.username}](https://github.com/${data.username})<br />
  If you have questions feel free to reach out!: ${data.email} <br />

`;
}

module.exports = generateMarkdown;
