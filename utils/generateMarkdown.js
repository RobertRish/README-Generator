// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  const licenseBadge = data.license;
  switch (licenseBadge) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      break;
    case 'None':
      return '';
      break;
  };
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseType = (data.license);
  if (licenseType == 'MIT') {
      var licenseLink = `
        MIT License

        Copyright (c) [year] [fullname]
          
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
          
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
          
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
      `
  } else if (licenseType == 'Apache') {
    var licenseLink = `[Apache](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#apache-license-20)`
  } else if (licenseType == 'BSD') {
    var licenseLink = `[BSD](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#the-bsd-license-case)`
  } else if (licenseType == 'None') {
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
  console.log(data);
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## Table of contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributing](#contributing)
  6. [Test](#test)
  7. [License](#license)
  8. [Questions](#questions)

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
  Visit my GitHub page! [${data.username}](https://github.com/${data.username})
  If you have questions feel free to reach out!: ${data.email} 

`;
}

module.exports = generateMarkdown;
