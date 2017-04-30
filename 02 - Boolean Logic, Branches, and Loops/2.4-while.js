"use strict";

var continueLoop = true;
var loopCount = 0;

while (continueLoop)
{
    continueLoop = confirm("Continue Loop?");
    loopCount++;
    console.log("Loop Count: " + loopCount);
}
