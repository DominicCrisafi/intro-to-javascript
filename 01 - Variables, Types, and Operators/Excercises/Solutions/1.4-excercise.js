"use strict";

//Create a program that takes an amount of change in cents and logs the number of quarters, dimes, nickles, and cents that makes up the change.
var amount = 95;
var quarters;
var dimes;
var nickles;
var pennies;
var remainder;

quarters = Math.floor(amount / 25);
remainder = amount % 25;

dimes = Math.floor(remainder / 10);
remainder = remainder % 10;

nickles = Math.floor(remainder / 5);
remainder = remainder % 5;

pennies = remainder;

console.log("Change amount: $" + (amount / 100));
console.log("Quarters: " + quarters);
console.log("Dimes: " + dimes);
console.log("Nickles: " + nickles);
console.log("Pennies: " + pennies);
