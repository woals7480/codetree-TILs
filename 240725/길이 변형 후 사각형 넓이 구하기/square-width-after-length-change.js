const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
a += 8;
b *= 3;

console.log(a)
console.log(b)
console.log(a*b)