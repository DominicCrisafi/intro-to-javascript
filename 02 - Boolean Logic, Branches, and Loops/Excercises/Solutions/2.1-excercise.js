"use strict";

//Create a program that logs the factors of each number from 1 to 10
var factors = "";

for (var i = 1; i <= 10; i++)
{
    for (var j = 1; j <= 10; j++)
    {
        factors = factors + (i * j) + " ";
    }

    console.log(factors);
    factors = "";
}
