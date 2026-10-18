const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "Volcanic Glass",
};

//Object = {key : value} ---> objects are simply key-value pairsnpn

//How to get all keys at once?

Object.keys(artifact); // returns an array of all keys in the artifact object

Object.values(artifact); // returns an array of all values in the artifact object

Object.entries(artifact); // returns an array of arrays, each containing a key-value pair from the artifact object

console.log(Object.keys(artifact)); // ["name", "era", "value", "material"]
console.log(Object.values(artifact)); // ["Obsidian Crown", "Ancient", 50000, "Volcanic Glass"]
console.log(Object.entries(artifact)); // [["name", "Obsidian Crown"], ["era", "Ancient"], ["value", 50000], ["material", "Volcanic Glass"]]

for (const [key, value] of Object.entries(artifact)){
    console.log(`key: ${key}, value: ${value}`);
}

const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList); // converts an array of key-value pairs into an object

console.log(priceObject); 
// { "Obsidian Crown": 50000, "Ruby Pendant": 30000, "Iron Shield": 5000 }

const displayCase = {
    artifact: "Obsidian",
    location: "Hall A, Case 3",
    locked: true,
}

// To Make sure nobody changes the object then we use freeze method

Object.freeze(displayCase); // freezes the object, preventing any modifications

delete displayCase.locked; // will not work because the object is frozen

// delete method will not work because the object is frozen

displayCase.newProp = "test";
console.log(displayCase); // { artifact: "Obsidian", location: "Hall A, Case 3", locked: true } - newProp will not be added

// we cannot add new properties or delete existing ones, but we can still modify the values 
// of existing properties in freeze method.

const catelogEntry = {
    id: "ART-001",
    description: "Ancient Crows",
    verified: true,
};
Object.seal(catelogEntry);
// seals the object, preventing new properties from being added and marking existing 
// properties as non-configurable


//Interview Question: What is the difference between Object.freeze() and Object.seal()?
// Ans: Seal() is used when we want to allow edit to existing properties but no structural changes
// while freeze() prevents any changes to the object, including editing existing properties.

const secureArtifacts = {name: "Ruby Pendant"};

Object.defineProperty(secureArtifacts, "catelogId",{
    value: "SEC-999",
    writable: false, // makes the property read-only
    enumerable: true, // makes the property loopable in for in loops
    configurable: false, // prevents the property from being deleted or reconfigured
});
console.log(secureArtifacts.catelogId); // SEC-999

secureArtifacts.catelogId = "HACKED";

console.log(secureArtifacts.catelogId);
 // SEC-999 - the value will not change because writable is set to false

 // The value did not change because configurable is set to false so it fails silently

 // Every Object is not loopable
 // if we add property by Object.defineproperty() method then it cannot be looped through 
 // for in loop unless enumerable is set to true.


 for (const [key, value] of Object.entries(secureArtifacts)){
    console.log(`key: ${key}, value: ${value}`);
    //key: name, value: Ruby Pendant
    // key: catelogId, value: SEC-999
 }


 // if we set enumerable: false in Object.defineProperty() then it will be skipped in loop 
 // and we get only name: Ruby Pendant as output.

//How to check what properties does catelogId has?

const desc = Object.getOwnPropertyDescriptor(secureArtifacts, "catelogId");
console.log(desc);
// { value: 'SEC-999', writable: false, enumerable: true, configurable: false } - shows the 
// property descriptor of catelogId


// Loop key points

// 1. For Loop ---> Most optimized loop,can be used when there is large array of data, but 
// not recommended for objects because it is not readable and can be error-prone.

// 2. while loop ---> Runs till the condition is true.

// 3. do while loop ---> Even if condition is false, it will run at least once.

// 4. for in loop ---> used to loop through keys of an object [AVOID ON ARRAYS]

// 5. for of loop ---> used to loop through values of an iterable object like array, string,
// map, set, etc. [AVOID ON OBJECTS]

// 6. forEach() ---> used to loop through values of an array, but cannot be used on objects
// forEach() doesn't return anything by default.

// 7. map() ---> used to loop through values of an array and returns a new array with the
// results of the callback function applied to each element. It cannot be used on objects.

// 8. filter() ---> used to loop through values of an array and returns a new array with the
// elements that pass the test implemented by the provided function. It cannot be used on 
// objects.

// 9. reduce() ---> used to loop through values of an array and returns a single value that
// is the result of applying a function to each element of the array. It cannot be used on 
// objects.




