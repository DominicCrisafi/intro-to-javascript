"use strict";

//Create a program that logs the value 1 to 100, replacing any number divisible by three with "fizz",
//any number divisible by 5 with "buzz", and any number divisible by both with "fizzbuzz"
for (var i = 1; i <= 100; i++)
{
    if (i % 3 === 0)
    {
        if (i % 5 === 0)
        {
            console.log("fizzbuzz");
        }
        else
        {
            console.log("fizz");
        }
    }
    else if (i % 5 === 0)
    {
        console.log("buzz");
    }
    else
    {
        console.log(i);
    }
}
