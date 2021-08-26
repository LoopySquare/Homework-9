// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
// TODO: Create an array of questions for user input
// const questions = [];
var questions = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the name of this readMe?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },
        {
            type: "input",
            name: "instructions",
            message: "Provide instructions for use."
        },
        {
            type: "input",
            name: "examples",
            message: "Provide examples for use by sumbitting screenshots. Include file desintation and name. (ex: .assets/img/example.png)"
        },
        {
            type: "list",
            name: "license",
            message: "Which license is used in this repository?",
            choices: ['Apache 2.0', 'GNU v3.0', 'GNU Affero v3.0', 'GNU v2.0', 'GNU Lesser v2.1', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero v1.0', 'Eclipse', 'Mozilla 2.0']
        },
        {
            type: "input",
            name: "tests",
            message: "Proivde any tests written for your application. Provide examples on how to run them."
        },
        {
            type: "input",
            name: "email",
            message: "what is your email address?"
        },
        {
            type: "input",
            name: "account",
            message: "what is your github account name?"
        },
        {
            type: "input",
            name: "contributions",
            message: "List all of your contributors with links to their Github profiles. (ex: Tommy Jobin - https://github.com/loopysquare"
        },
        
    ])
    )
});





questions.then(function(data){
    const readMe = 
    `# ${data.name}
## Description
### ${data.description}
<br><br>
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
<br><br>
## Installation
### ${data.installation}
<br><br>
## Usage
### ${data.instructions}
![example picture](${data.examples})
<br><br>
## License
### ${data.license}
<br><br>
## Contributing
### ${data.contributions}
<br><br>
## Tests
### ${data.tests}
<br><br>
## Questions
### If you have any questions please reach out to me via email: ${data.email} or through my github account: [${data.account}](https://github.com/${data.account})
    `
//  const html = 
//     `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.css" />
//         <link rel="stylesheet" type="text/css" href="./style.css">
//     </head>
//     <body>
//         <section class="hero is-success is-halfheight has-text-centered">
//             <div class="hero-body">
//                 <div class="">
//                 <p class="title">
//                     Hello, my name is
//                 </p>
//                 <p class="title">
//                     ${data.name}
//                 </p>
//                 <p class="subtitle">
//                     I am a ${data.title}
//                 </p>
//                 </div>
//             </div>
//         </section>
//     <h1 class="profile">${data.name}</h1>
//     <div class="profile">${data.title}</div>
//     <div class="profile">${data.age}</div>
//     <div class="profile">${data.location}</div>
//     <div class="profile">${data.bio}</div>
//     <script type="text/javascript" src="script.js"></script>
//     </body>
//     </html>  
// `;
    fs.writeFile('README.md', readMe, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
})

