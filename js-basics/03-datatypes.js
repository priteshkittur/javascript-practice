const weaponName = "Flame Sword"; // String datatype

console.log("Weapon Name:", weaponName, "|type: ", typeof weaponName); 
// Output: Weapon Name: Flame Sword |type:  string

const attackPower = 75; // Number datatype
const attackUpgrade = 1.5; // Number datatype

console.log(typeof attackPower); // Output: number
console.log(typeof attackUpgrade); // Output: number

//const attackPower = 75n; // BigInt datatype

// if we add n in front of any number it becomes a BigInt datatype.

const isloggedIn = true; // Boolean datatype

let bonusEffect; //value of bonusEffect is undefined.

let curseStatus = null; // value is intentionally absent.

let weatherAPIresponse = null;
console.log(weatherAPIresponse); // Output: null

const uniqueRuneID = Symbol("rune_of_fire"); // Symbol datatype
console.log(uniqueRuneID);

//In symbol if we give 2 different variables then it will be considered as 2 different values.

console.log("Rune: ", uniqueRuneID.toString()); // Output: Rune:  Symbol(rune_of_fire)
//.toString() is used for safety concern.

//Symbol guarantees unique and immutability of any datatype.

const heroStats = {
    name: "Deepak",
    level: 12,
    class: "Ranger"
};

console.log("Hero: ", heroStats, "|type: ", typeof heroStats);
// Output: Hero:  { name: 'Deepak', level: 12, class: 'Ranger' } |type:  object

const inventory = ["FlameSword", "Heal Potion", "shield"]; // Array datatype
console.log("Inventory: ", inventory, "|type: ", typeof inventory);
// Output: Inventory:  [ 'FlameSword', 'Heal Potion', 'shield' ] |type:  object

function castSpell(){return "Fireball"};
console.log("Spell type: ", typeof castSpell); // Output: Spell type:  function

//Even though typeof function is function...but it is an object in Javascript

console.log(typeof "Hello"); // Output: string

console.log(typeof 42); // Output: number

console.log(typeof 42n); // Output: bigint

console.log(typeof true); // Output: boolean

console.log(typeof undefined); // Output: undefined

console.log(typeof null); // Output: object (this is a Official BUG in JavaScript)

console.log(typeof Symbol()); // Output: symbol

console.log(typeof {}); // Output: object

console.log(typeof []); // Output: object 

console.log(typeof function(){}); // Output: function

// when we use on-click events on DOM then they need handler function, there we cannot use
// function as object. Hence typeof function is function but it is an object in Javascript.

//Copy in JS

let originalHP = 100;
let cloneHP = originalHP; // primitive datatype copy

cloneHP = 80;
console.log("Original HP:", originalHP); // Output: Original HP: 100
console.log("Clone HP:", cloneHP); // Output: Clone HP: 80

//Changing value of copy does not change value of original. 
// This type of copy is called as independent copy.

const originalSword = {
    name = "Flame Sword",
    damage: 75,
    typeOfW = "fire"
};

const cloneSword = originalSword; // reference datatype copy
cloneSword.damage = 100;
console.log("Original Sword Damage:", originalSword.damage); 
// Output: Original Sword Damage: 100

//If we copy the object then the object remains same but reference is copied.

// To avoid refernce copying we need to follow syntax:

const armorOriginal = {
    name: "Iron plate",
    defense: 80,
    buff : {
        fire: 10
    },
};

// to copy this, 

const armorCopy = {...armorOriginal}; // shallow copy
armorCopy.buff.fire = 90;

console.log("Original Armor Buff:", armorOriginal.buff.fire);
// Output: Original Armor Buff: 90

//After using spread operator {...}, we can change name and defence but we cannot change //
// buff value because it is a nested object. If we change buff it changes original as well. 

const potionOriginal = {name: "Health", effects: {heal: 40, mana: 30}};
const potionCopy = structuredClone(potionOriginal); // deep copy

//Structured clone copies everything including all nested objects.
// So even making changes to nested objects of clone will not affect the original object.


// {...object_name} -- Spread Operator --> Shallow Copy

// structuredClone(object_name) -- Structured Clone --> Deep Copy


