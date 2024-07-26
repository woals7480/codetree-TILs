const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const h = Number(input[0]);
const w = Number(input[1]);

const b = (10000 * w) / (h * h)

console.log(parseInt(b))
if(b >= 25)
{
    console.log('Obesity')
}