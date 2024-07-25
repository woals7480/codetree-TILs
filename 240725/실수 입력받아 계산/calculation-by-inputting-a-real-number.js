const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const [a, b] = input;

console.log((+a + +b).toFixed(2))