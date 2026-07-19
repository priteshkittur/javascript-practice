// Variable declaration

// var fname = 'Pritesh';
// var lname = 'Kittur';
// console.log(fname + lname);
// console.log(fname + " " + lname);

// Functions
// function addNumbers (num1, num2) {
//     var result = num1 + num2;
//     console.log("Result is:", result);
// }       //Nothing happens till here because function is not called

// addNumbers (5, 2);
// addNumbers (10, 12);

//Functions are made to avoid writing same logic multiple times for single operation everywhere in a codebase. Also if there is a bug in code we just have to fix it once if we use function instead of editing whole codebase.


//Conditionals
// let age = 19;
// console.log (age >= 18); //true
// var age = 18;
// var condition = age >= 18;
// if (condition) {
//     console.log('Vote is allowed');
// }
// else console.log('Vote is not allowed');

// var age = 12;
// var condition = age >= 18;
// var conditionKaUlta = age <= 17;
// if (condition) {
//     console.log('Vote is allowed');
// }
// if (conditionKaUlta){
//     console.log('Vote is not allowed');
// }

//Instead of writing verbose code with 2 if conditions, code has become unnecessarily big so to avoid it, we use else condition

// var age = 12;
// var condition = age >= 18;
// if (condition) {
//     console.log('Vote is allowed');
// }
// else {
//     console.log('Vote is not allowed');
// }
//In if-else we just check one condition

//now categorize conditions as: (0-12 -> Child), (13-19 -> Teen), (20-40 -> Adult), (40+ -> senior)
// var age = 12;
// var childCondition = age <= 12;
// var TeenCondition = age <= 19;
// var AdultCondition = age <= 40;
// var SeniorCondition = age > 40;
// if (childCondition) {
//     console.log("You are a Child");
// }
// if (TeenCondition) {
//     console.log("You are a Teen");
// }
// if (AdultCondition) {
//     console.log("You are a Adult");
// }
// if (SeniorCondition) {
//     console.log("You are a Senior");
// }
// for age = 12 we can see that child, teen, adult conditions are true
// var age = 12;
// var childCondition = age >= 0 && age <= 12;
// var TeenCondition = age >= 13 && age <= 19;
// var AdultCondition = age >= 20 && age <= 40;
// var SeniorCondition = age > 40;
// if (childCondition) {
//     console.log("You are a Child");
// }
// if (TeenCondition) {
//     console.log("You are a Teen");
// }
// if (AdultCondition) {
//     console.log("You are a Adult");
// }
// if (SeniorCondition) {
//     console.log("You are a Senior");
// }

// && condition makes the code less verbose and strict equality


// Loops
//Code which we want to repeat. types of loops in JS: for, while, do while, for each,
// for of, map, for in, iterators, filter, reduce

// FOR Loop

// for (var x = 1; x <= 10; x += 1){
//     console.log("value is:", x);
// }

// we use for loop when we know exactly how many times to run code

//WHILE Loop
//this loop runs code until work is done (basically this only knows conditions but doesn't know how many iterations)
// var fileSize = 1024;
// var currentFileDownload = 0;
// while (currentFileDownload < fileSize) {
//     console.log ("File Ko Download Krte Jao");
//     currentFileDownload = currentFileDownload + 40;
// }

//to get a random number from 20-60 in JS,

// function getRandomNumber (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//DO WHILE Loop
//this loop first executes the code and then checks conditions even if our condition is false Do while runs our code atleast once
// var age = 32;
// console.log('age is:', age);   //32
// age = 14;
// console.log('age is:', age);  //14

// console.log('age is:', age);
// var age = 32;  // undefined
// this is because before we declare value of variable it will be undefined in excution context Memory
//Hoisting in JS is mechanism where variable, function and class declarations are moved to the top of their containing scope during the compilation phase, before code execution.
//ONLY DECLARATIONS ARE HOISTED, NOT INITIALIZATIUONS

// Basically Hoisting allows functions and variables to be used bafore they are formally declared in the code.

// console.log('value of age is:', age);
// var age = 45;
// console.log (addFive (10)); //15
// console.log('value of age is:', age);  //45
// function addFive (number) {
//     let result = number + 5;
//     return result;
// }
