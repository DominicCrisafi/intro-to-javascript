"use strict";

//Create a program that takes the name of a book, number of pages, and current page of the book, and logs the remaining pages.
var book = "Watership Down";
var pages = 478;
var currentPage = 275;

var remainingPages = pages - currentPage;

console.log("I am currently on page " + currentPage + " of " + book + ". Only " + remainingPages + " pages left to read.");
