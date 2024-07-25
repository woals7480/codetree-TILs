const fs = require('fs');
const input = +fs.readFileSync("/dev/stdin").toString()

const ft = 30.48

console.log((input*ft).toFixed(1))