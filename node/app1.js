// console.log("Hello! Vivek");
// console.log(__filename);
// console.log(__dirname);
// console.log(process);
// //node filename.js - To run the file in terminal

const one = process.argv[2];
const two = process.argv[3];

let message = `Hi, welcome ${one} ${two}`;
console.log(message);