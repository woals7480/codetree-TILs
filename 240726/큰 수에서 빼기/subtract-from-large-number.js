const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

if(a < b)
{
    console.log(b - a);
}
else if(a > b)
{
    console.log(a - b)
}