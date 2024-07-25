const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('-');
const [m,d,y] = input;

console.log(`${+y}.${+m}.${+d}`)