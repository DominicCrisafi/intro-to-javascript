"use strict";

var factors = "";

for (var i = 1; i <= 10; i++)
{
    for (i = 1; i <= 10; i++)
    {
        factors = factors + (i * i) + " ";
    }

    console.log(factors);
}
