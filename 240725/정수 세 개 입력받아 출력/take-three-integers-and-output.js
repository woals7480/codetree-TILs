const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const [inputA, inputB] = input;
const [a, b] = inputA.split(' ');
const [c] = inputB;

console.log(+a,+b,+c)