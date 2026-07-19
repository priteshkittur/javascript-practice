//Var is depricated so we use 'let' and 'const'
// age = 65;
// console.log(age); // 65

// let age = 24;
// console.log(age); // 24 
// age = 45;
// console.log(age); // 45

// Is let Hoisted? => Yes 'let' hoists, but as it is in Temporal Dead Zone we can't initialise it.
// TEMPORAL DEAD ZONE (TDZ) - It is specific region in JS in which variables are initialized using 'let' and 'const' throw a reference error when used before declaration scope.
// There is TDZ formed in 'const' too

//const value cannot be changed but let value can be changed
//Assignment to a constant variable throws error

// const age = 24;
// age = 65;
// console.log(age); // Type error: Assignment to a constant variable

//using let and declaring variable creates a TDZ due to which if we do initialization the same variable before let statement, we get an error (TDZ).


// Functions
//A reusable set of instructions or A block of code designed to perform a specific task.

// function functionName () {
//     console.log ();
// }

// function greetUser (name) {
//     console.log('Hey,',name);
// }
// greetUser (Piyush);

//Backtick allows us to interpolate using ${} symbol
// eg: `hey ${x} and ${y}`

//return is last statement of a function we cannot write anything in function after return
// Can function contain another function??   Ans: Yes

// function add (num1, num2) {
//     const result = num1 + num2;
//     return result; 
// }
// const r = add (2, 5);
// for (let i = 0; i < r; i++) {
//     console.log (`value of i is ${i}`);
// }

// function add (num1, num2) {
//     console.log(`Result is ${num1 + num2}`);
// }
// add (2, 5);  // Result is 7

// function cartoon () {
//     function cartoonInsideCartoon () {
//         return 'Naruto 🔥';
//     }
//     return cartoonInsideCartoon;
// }

// const anime = cartoon ();
// anime (); // this returns nothing so,

// const r = anime ();
// console.log(r); // anime is not defined here anime is string not function assigned to r
// Because cartoon returns a function and type of anime is string and we cannot a string

// let cartoon = function () {
//     console.log ('Anime');
// }
// cartoon();

// age = 45;
// console.log ('Value of age is', age , 'Is Allowed?', isAllowedToVote (age));

// var age = 24;
// function isAllowedToVote(age) {
//     return age >= 18;
// }

// age = 45;
// console.log ('Value of age is', age , 'Is Allowed?', isAllowedToVote (age));

// var age = 12;
// var isAllowedToVote = function(age) {
//     return age >= 18;
// }   // Error: isAllowedToVote is not a function


// ARROW Functions
// const isAllowedToVote = (age) => {
//     return age >= 18;
// }
// isAllowedToVote (23)
// console.log(isAllowedToVote(23)); //true

    //function name     param    return
// const isAllowedToVote = (age) => age >= 18;  // can also be written in single line
// console.log(isAllowedToVote(23));

// const isAllowedToVote = (age) => age >= 18;
// const isUserAllowedToOpenAcc = (age, minBal) => age >= 18 && minBal >= 5000;
// console.log (isAllowedToVote (23));              //true
// console.log(isUserAllowedToOpenAcc(23, 6000));   //true

//DATA STRUCTURES 
//nothing... but memory mai data ko ek particular structure mei store karna

//Array
//                 0        1         2       3         4
const fruits = ["apple", "cheeku", "aadu", "santra", "kela"];
// console.log(fruits[4]); // kela
// console.log(fruits[5]); // undefined ....In JS there is no error for out of bound array index

// fruits.push('kiwi'); // adds kiwi at the end of array at index 5
// // new array is fruits = ["apple", "cheeku", "aadu", "santra", "kela", "kiwi"];
// console.log(fruits[5]); // kiwi

// console.log(fruits.length); // 6

// console.log (fruits.includes('aadu')); // true..includes method searches for given element in array
// console.log(fruits.includes('tarbooj')); // false

//shift method removes first element from given array
// const firstElement = fruits.shift();
// console.log(fruits);  // [ 'cheeku', 'aadu', 'santra', 'kela', 'kiwi' ]
// console.log({firstElement}); // { firstElement: 'apple' }

//slice method returns a copy of a section or an array
// const firstElement = fruits.slice(1, 4);
// console.log(fruits);  // [ 'apple', 'cheeku', 'aadu', 'santra', 'kela', 'kiwi' ]
// console.log(firstElement); // [ 'cheeku', 'aadu', 'santra' ]

//unshift method inserts element at start of a given array

// fruits.unshift('1', '2', '3');
// console.log(fruits); /** ['1', '2', '3', 'apple', 'cheeku', 'aadu', 'santra', 'kela', 'kiwi'] */

//pop method removes element from last

// console.log(fruits.pop()); //kiwi
// console.log(fruits); //['1', '2', '3', 'apple', 'cheeku', 'aadu', 'santra', 'kela']

// console.log(fruits.indexOf('aadu')); // 
// console.log(fruits.indexOf('mango')); // -1

// function myFunction(num1){
//     return 2 + 3 + num1;
// }
// console.log(myFunction(5)); // 10

// function myFunction (anotherFunction) {
//     return anotherFunction () + 40;
// }
// function cartoon(){
//     return 10;
// }
// console.log(myFunction(cartoon)); // 50

// function myFunction (anotherFunction) {
//     return anotherFunction () + 40;
// }
// function cartoon () {
//     return 10;
// }
// function oneMoreFunction(){
//     return 100;
// }
// console.log(myFunction(oneMoreFunction)); // 140

// to print every element
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// instead of this in js we do
// function printKaro(element){
//     console.log(element);
// }
// fruits.forEach(printKaro);

// also
// fruits.forEach((elements) => console.log(element));

//MAPS
// const nums = [1, 2, 3, 4, 5, 6];
// const num = nums.map((e) => e*2);
// console.log(num); // [ 2, 4, 6, 8, 10, 12 ]

// const result = [];
// for(let i = 0; i < nums.length; i++){
//     result.push(nums[i] * 2);
// }
// console.log(result); // [ 2, 4, 6, 8, 10, 12 ]

const nums = [3, 10, 24, 90];
const result = nums.map(e => e * 10 + 1);
console.log(result); // [ 31, 101, 241, 901 ]

const nums2 = [3, 10, 24, 90];
const result2 = nums2.forEach(function(e) {
    if (e % 2 === 0){
        console.log(e);
    }
})
console.log(result2); // 10  24  90

