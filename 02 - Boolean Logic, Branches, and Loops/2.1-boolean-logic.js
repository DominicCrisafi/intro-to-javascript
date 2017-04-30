"use strict";

var a = true;
var b = true;

console.log(a === b);

b = false;
console.log(a === b);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

a = 2;
b = 5;

console.log(a < b);
console.log(a <= b);
console.log(a > b);
console.log(a >= b);

var c = 6;

console.log(a < b && b < c);
console.log(a < b || b > c);
