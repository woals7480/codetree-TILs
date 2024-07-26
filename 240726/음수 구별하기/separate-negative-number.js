const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const a = Number(input);

console.log(a)
if(a < 0)
{
    console.log('minus')
}