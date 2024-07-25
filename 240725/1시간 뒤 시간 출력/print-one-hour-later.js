const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(':');
const [h,m] = input;
console.log(`${Number(h)+1}:${m}`)