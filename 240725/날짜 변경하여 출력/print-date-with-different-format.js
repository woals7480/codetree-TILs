const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('.');
const [y,m,d] = input;
console.log(`${m}-${d}-${y}`)