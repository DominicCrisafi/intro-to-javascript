"use strict";

//Character Generator - Create an app that allows a player to create a tabletop RPG character.
//Characters should have a name, race, class, level, experience points, health points, and stats (Strength, Dexterity, Intelligence, etc).
//Level should be calculated based on experience (Level 1: 0 experience, Level 2: 300 experience, etc).
//Health points should be calculated as the product of the current level and a coefficient between 6 and 12.
//Stats should be generated as a value between 4 and 24.
//Log each of the chracters properties (name, race, class, etc).
//Hint:  Use the following to generate values between two numbers - Math.floor(Math.random() * (max - min + 1)) + min

var name = "Liliana Vess";
var race = "Human";
var characterClass = "Necromancer";
var level;
var exp = 1029;
var hp;
var strength;
var dexterity;
var intelligence;
var constitution;
var wisdom;
var charisma;

level = Math.floor(exp / 300);
hp = level * (Math.floor(Math.random() * (12 - 6 + 1)) + 6);
strength = Math.floor(Math.random() * (24 - 4 + 1)) + 4;
dexterity = Math.floor(Math.random() * (24 - 4 + 1)) + 4;
intelligence = Math.floor(Math.random() * (24 - 4 + 1)) + 4;
constitution = Math.floor(Math.random() * (24 - 4 + 1)) + 4;
wisdom = Math.floor(Math.random() * (24 - 4 + 1)) + 4;
charisma = Math.floor(Math.random() * (24 - 4 + 1)) + 4;

console.log("Charater Name: " + name);
console.log("Character Race: " + race);
console.log("Character Class: " + characterClass);
console.log("Character Level: " + level);
console.log("Character Experience: " + exp);
console.log("Chracter Health Points: " + hp);
console.log("Character Strength: " + strength);
console.log("Character Dexterity: " + dexterity);
console.log("Character Intelligence: " + intelligence);
console.log("Character Constitution: " + constitution);
console.log("Character Wisdom: " + wisdom);
console.log("Character Charisma: " + charisma);
