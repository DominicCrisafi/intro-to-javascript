"use strict";

//Create a program that takes a string and logs whether or not it is a palindrome (a word or phrase that reads the same forward and backwards).
var input = "kayak";

var isPalindrome = true;

for (var i = 0; i < input.length; i++)
{
    if (input[i] !== input[(input.length - 1) - i])
    {
        isPalindrome = false;
    }
}

console.log("'" + input + "' is a palindrome? " + isPalindrome);
