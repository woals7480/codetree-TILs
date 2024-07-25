const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const [a, b, c] = input;

console.log(Number(a).toFixed(3))
console.log(Number(b).toFixed(3))
console.log(Number(c).toFixed(3))