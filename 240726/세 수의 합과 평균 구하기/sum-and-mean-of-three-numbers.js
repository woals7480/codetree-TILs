const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a+b+c);
console.log(parseInt((a+b+c)/3))