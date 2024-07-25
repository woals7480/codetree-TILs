const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');

const [b, a] = input;

console.log(+a, +b)