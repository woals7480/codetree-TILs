const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const [c, a, b] = input;

console.log(c)
console.log(Number(a).toFixed(2))
console.log(Number(b).toFixed(2))