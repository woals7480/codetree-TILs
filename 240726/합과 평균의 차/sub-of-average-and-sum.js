const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const p = a+b+c;
const av = p/3;

console.log(p)
console.log(av)
console.log(p-av)