let a = 5;
let b = 6;
let c = 7;

const temp = c;
c = b;
b = a;
a = temp;

console.log(a)
console.log(b)
console.log(c)