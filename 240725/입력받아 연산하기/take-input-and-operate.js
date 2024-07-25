const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + 87)
console.log(b % 10)