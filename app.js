// const area = require("./circle");

// console.log(area(4));

const fs = require('fs');

let text = fs.readFileSync('./files/input.txt', 'utf-8');
console.log(text); 

let outputText = `Output Text: ${text}`; 

fs.writeFileSync('./files/output.txt', outputText); 