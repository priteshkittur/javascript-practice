const hero = {
    name: "Luna the Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true,
};

// 2 methods to access object properties

// 1. Dot notation
console.log(hero.name); // Output: Luna the Brave
//dot can be used when we 100% know that the property is valid

// 2. Bracket notation
console.log(hero["class"]); // Output: Mage
// if it is response from accumulator or if we are processing data from API, we use bracket.

hero.weapon = "Fire";
console.log(hero.weapon); // Output: Fire

delete hero.level; // to delete a property from an object
console.log(hero.level); // Output: undefined

const ranger = {
    name: "Lakshya the swift",
    agility: 80,
    stealth: undefined
};

console.log("name" in ranger); // Output: true
console.log("stealth" in ranger); // Output: true

//GOTCHA
console.log("toString" in ranger); // Output: true ----> this is prototypal chaining

// .entries method returns Array of Array
// .keys and .values methods return Array of both keys and values respectively

//Prototypal Inheritance shows its true so we get true for "toString" in ranger

//to solve this,

console.log(ranger.hasOwnProperty("toString")); // Output: false

// So, "toString" is ranger's inherited property, not its own property.

