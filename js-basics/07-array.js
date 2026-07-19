const carriage1 = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySets = Array(3);
console.log(threeEmptySets); // [ <3 empty items> ];

console.log(threeEmptySets.length); // 3

const passenger = Array("Veer", "Ayush", "Ravi");

const singlePassenger = Array.of(3);
console.log(singlePassenger); // [ 3 ]

const trainCode = Array.from("DUST");
console.log(trainCode); // Output: [ 'D', 'U', 'S', 'T' ]

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain); // Output: [ 'A', 'B', 'C' ]
// Truncate of array to 3 elements

tempTrain.length = 5;
console.log(tempTrain); // Output: [ 'A', 'B', 'C', <2 empty items> ]
// 2 items are lost and replaced with empty items


// push, pop, shift, unshift, splice (Mutating methods)

// Does splice mutate array? Yes, it does. It changes the original array.

// concat, splice, flat, slice, join (Non-mutating methods - return new array without 
// changing the original array)

//const trainCopy = wholeTrain.slice(); // used to copy

// searching : indexOf, includes, find, findIndex, filter

console.log(typeof []); // Output: object

// To solve this, we get, 

console.log(Array.isArray([])); // Output: true

console.log(Array.isArray("Ravi")); // Output: false

// Key points

// 1. [] -> Always use this (Template literals) and not 
// Array(n) -> do not use this because it creates empty slots in array which drains memory


// 2. Array are 0 based index. If we try to access out of bound index, it returns undefined.

// 3. Mutating Methods: Push, Pop, splice, shift, unshift
// Mutating means it changes the original array. It does not return a new array.

// 4. Non-Mutating Methods: concat, slice, flat, join, flatmap
// copies the array and returns a new array without changing the original array.

// 5. Searching Methods: indexOf (imp), includes (imp), find, findIndex, filter

// 6. To know if input is Array or not, use Array.isArray(input) method. It returns true if input is an array, else false. [DO NOT USE typeof Array.

