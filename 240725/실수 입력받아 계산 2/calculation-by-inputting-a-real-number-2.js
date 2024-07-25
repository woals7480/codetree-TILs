const fs = require('fs');
const input = +fs.readFileSync("/dev/stdin").toString()

console.log((input+1.5).toFixed(2))