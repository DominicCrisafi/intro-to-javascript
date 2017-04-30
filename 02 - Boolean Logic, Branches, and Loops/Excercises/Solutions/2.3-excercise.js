"use strict";

//Create a program that prompts the user for item values and adds them to the check until the user presses cancel and then logs the final check value.
var check = 0;
var addingItem = true;

var currentValue;

while (addingItem)
{
    currentValue = prompt("Add item value to check");

    if (currentValue === null)
    {
        addingItem = false;
    }
    else if (!isNaN(Number(currentValue)))
    {
        check = check + Number(currentValue);
    }
}

console.log("The check is $" + check);
