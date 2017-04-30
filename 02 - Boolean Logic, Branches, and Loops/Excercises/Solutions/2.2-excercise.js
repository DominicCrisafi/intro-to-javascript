"use strict";

//Create a program that takes an array of values and logs the sum, minimum, maximum, and average of the values.
var numbers = [1, 23, 42, 3, 12, 42];

var sum = 0;
var min;
var max;
var average;

for (var i = 0; i < numbers.length; i++)
{
    sum = sum + numbers[i];
    if (typeof min === "undefined" || numbers[i] < min )
    {
        min = numbers[i];
    }
    if (typeof max === "undefined" || numbers[i] > max)
    {
        max = numbers[i];
    }
}
average = sum / numbers.length;

console.log("Sum of values: " + sum);
console.log("Min of values: " + min);
console.log("Max of values: " + max);
console.log("Average of values: " + average);
