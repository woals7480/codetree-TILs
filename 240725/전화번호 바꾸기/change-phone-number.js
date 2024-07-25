const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('-');
const [a,b,c] = input;
console.log(`${a}-${c}-${b}`)