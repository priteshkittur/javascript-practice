const codeName = "Shadow Fox";
const backupName = String("Night Owl");

const templateName = `Agent ${codeName}`;
console.log(templateName); // Output: Agent Shadow Fox

let intercepted = "HELLO";
intercepted[0] = "J"; // Strings are immutable in JavaScript, so this won't change the string
console.log(intercepted); // Output: HELLO

const secretCode = "OMEGA-7";
console.log(secretCode.length); // Output: 7 -- length of the string

console.log(secretCode.charAt(1)); // Output: M -- character at index 1

console.log(secretCode.at(-1)); // Output: 7 -- character at the last index
// .at() method allows negative indexing


console.log(secretCode.charAt(99)); // Output: "" (empty string) -- index out of bounds

console.log(secretCode[99]); // Output: undefined -- index out of bounds

const rawTransmission = "The EAGLE has landed.";
console.log(rawTransmission.toLowerCase()); 
// Output: the eagle has landed. -- converts to lowercase

console.log(rawTransmission.toUpperCase());
// Output: THE EAGLE HAS LANDED. -- converts to uppercase

const message = "The drop point is at dock 7. Repeat: Dock 7.";
console.log(message.indexOf("dock")); // Output: 21 -- first occurrence of "dock"

console.log(message.slice(0,14));
// Output: The drop point -- extracts substring from index 0 to 14 (exclusive)

const orders = "move-north | hold-position | extract-vip";
let orderList = orders.split(" | ");
console.log("split", orderList);
// Output: ["move-north", "hold-position", "extract-vip"] -- splits the string into an array 
// based on the delimiter


console.log("SOS".split("")); // Output: ["S", "O", "S"] -- splits into individual characters

const myDataValue = "SOS".split("");
console.log(typeof myDataValue);
// Output: object -- the result of split is an array, which is of type object

console.log(Array.isArray(myDataValue));
// Output: true -- confirms that myDataValue is indeed an array

const missionNumber = 42;
console.log(missionNumber.toString().padStart(5, "0"));
// Output: 00042 -- converts the number to a string and pads it with leading zeros to ensure 
// a length of 5 


//Template Literals

const spellCard = `
    ++====================++
    | spell: ${myDataValue}         |
    ++====================++`;
console.log(spellCard);

// const profile = `
//     ${checker ? "true-value" : "false-value"}
// `;

// graphql`` --> graphql also uses template literals sometimes


// Tagged Template Literals

console.log(void 0); 
// Output: undefined -- void operator returns undefined

console.log(void "hitesh"); 
// Output: undefined -- void operator ignores the expression and returns undefined

//void always evaluates expressions and returns undefined.

const generalStore = {name: "Kirana", goods: 2};
console.log(generalStore); // Output: {name: "Kirana", goods: 2} -- logs the object

// To Demolish the generalStore object, we use

// generalStore = undefined  or  generalStore = null;




