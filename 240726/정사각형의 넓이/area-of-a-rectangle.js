const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

console.log(input*input);
if(input < 5)
{
    console.log('tiny')
}