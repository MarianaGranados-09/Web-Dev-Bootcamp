// node boilerplate.js Project 

//Async version:
//fs object:
const fs = require('fs')
const folderName = process.argv[2] || 'Project'
// fs.mkdir('Dogs' , {recursive: true}, (err) => {
//     console.log('In callback');
//     if(err) throw err;
// });

// console.log('After mkdir');

//Sync version:
fs.mkdirSync(folderName)
//enter in bash: node file.js 'Name of folder'
//or by default to name the project folder: node file.js

//Now to make files:
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)
