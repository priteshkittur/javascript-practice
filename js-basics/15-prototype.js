const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish(){
        return `${this.name} cooks an ancient family recipe`;
    },
};

// Most Important use of prototypes is Inheritance (Transferring 
// properties).

const raj = Object.create(prithviraj);
// Create trandfers all properties of prithviraj to raj.
// Problem is Raj name is also prithviraj. So we need to change it.

console.log(raj); // Output: {}

console.log(raj.name); // Output: Prithviraj

raj.name = "Raj"; // Changing the name property of raj object.
raj.generation = "father";
raj.runBusiness = function () {
    return `${this.name} runs the family business`;
};

console.log(raj); /*Output: {
  name: 'Raj',
  generation: 'father',
  runBusiness: [Function (anonymous)]
}*/

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
    return `${this.name} directs blockbuster movies`;
};

console.log(ranbir.makeFilm()); // ranbir directs blockbuster movies
console.log(ranbir.runBusiness()); // ranbir runs the family 
// business
console.log(ranbir.cookTraditionalDish()); // ranbir cooks an ancient family recipe

// Q: does prototype and Object.create() exist with everyone?
// Yes, even strings, functions have prototypes (Object.create()). 
// Because is JS, everything inherits object hence they have 
// prototypal Inheritance.

// Array's Prototype's Datatype will be object

Array.prototype.last = function () {
    return this[this.length - 1]; // returns last element of given array
}

console.log([1, 2, 3].last()); // 3
console.log(["Ani", "hitesh", "Akash"].last()); // Akash

// TASK: to understand polyphills better write your own map, reduce,
// and ForEach

// own ForEach:
// for each basically performs an operation on each element of the
// array and modifies the original array. It does not return 
// anything.

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
};

let num = [1, 2, 3, 4];
function callback(element, index, array) {
    array[index] = element * 2;
}
num.myForEach(callback);
console.log(num); // Output: [2, 4, 6, 8]


// own map:

// when we use map an operation is performed on each element of the 
// array and a new array is returned. The original array remains 
// unchanged.

// value returned by callback gets stored in new array inplace of //
// current index

Array.prototype.MyMap = function (callback2){
    newArray = [];
    for (let i = 0; i < this.length; i++){
        let elmt = callback2 (this[i], i, this);
        newArray[i] = elmt;
    }
    return newArray;
}

let nums = [1, 2, 3, 4]; 
function callback2(element, index, array) {
    return element * 3;
}
console.log(nums.MyMap(callback2)); // Output: [3, 6, 9, 12]

// own reduce:



