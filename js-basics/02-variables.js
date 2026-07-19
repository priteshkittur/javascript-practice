var shipName = "The Amber";
shipName = "The Black Pearl";
console.log(shipName);

let crewCount = 12;
console.log("Crew Count: ",crewCount);
captainName = "Jack Sparrow";
captainName = "Dipesh";
console.log("Captain Name: ",captainName);

if (true) {
    var leakyTreasure = "Gold Coins";
}
console.log("Leaky Treasure: ", leakyTreasure); //Leaky Treasure:  Gold Coins

for (var i = 0; i < 10; i++) {
    // This block will run 10 times, but the variable i is declared with var, which has function scope. Therefore, it will be accessible outside the loop as well. WHICH CREATES A LEAKY VARIABLE PROBLEM.
}

//variable i is accessible outside the loop because it was declared with var, which has function scope. This can lead to unexpected behavior if the variable is used later in the code. To avoid this issue, it's better to use let or const for block-scoped variables. So we can use let instead of var to declare the variable i, which will limit its scope to the block in which it is defined. This will prevent any potential issues with variable leakage and make the code more predictable and easier to maintain.

for (let j = 0; j < 10; j++) {
    // This block will run 10 times, and the variable j is declared with let, which has block scope. Therefore, it will not be accessible outside the loop.
}

let shipSpeed = 22;
let _privatelog = "Secret"; // if variable starts with underscore, it is usually Private.
// let _ = a; // variable _ can be used where we use the value less frequently.

let MONGODB_URI = " ";

let name = "Hitesh Sir"; // we can also use $name = "Hitesh Sir"; as a variable name. But not recommended.

const treasureChest = {
    gold: 100,
    rubies: 50,
    maps: 2
};

treasureChest.gold = 200; // Property Change --  Allowed

treasureChest = {gold: 50}; // This Complete Re-referencing is not allowed.

// In Const we can change properties of the object but we cannot completely re-reference the object to a new object.

const crewRoster = ["Alok", "Abhinav", "Tanish"];
crewRoster.push("Vraj"); // Allowed because we are adding values using push method.

crewRoster[0] = "Shubham"; //Replacing the index elements -- Allowed.

crewRoster = ["Someone"]; // This is Complete Re-referencing -- NOT allowed.


