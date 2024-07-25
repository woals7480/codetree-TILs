const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

a += b;
b += a;
console.log(a,b)