"use strict";

var minRange = 6;
var maxRange = 12;
var start = 0;
var end = 20;
var value;

for (value = start; value <= end; value++)
{
    if (value < minRange || value > maxRange)
    {
        console.log("Value out of range: " + value);
    }
    else
    {
        console.log("Value in range: " + value);
    }
}
