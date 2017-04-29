"use strict";

//Create a tip calculator that takes a check amount, a tax percent, and tip percent and logs out the tax amount, tip amount, and total check.
var check = 10.99;
var taxPercent = 0.06;
var tipPercent = 0.20;

var tax = check * taxPercent;
var tip = check * tipPercent;
var total = check + tip + tax;

console.log("Check is $" + check);
console.log("Sales tax at " + (taxPercent * 100) + "% is $" + tax);
console.log("Tip at " + (tipPercent * 100) + "% is $" + tip);
console.log("Total check is $" + total);
