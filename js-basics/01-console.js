const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("Clue found: ", clue1);
console.log("Clue found: ", clue2);

const suspectName = "Pritesh";
const suspectAge = 20;
console.log("Suspect: ", suspectName, "|Age: ", suspectAge);

console.warn("Warning: warn Fingerprint evidence detected");
console.error("Warning: err Fingerprint evidence detected");

const evidenceLog = [
    {id: 1, item: "Muddy Footprint", location: "Window sill"},
    {id: 2, item: "Broken Glass", location: "Living Room"},
    {id: 3, item: "Red Fiber Strand", location: "Door handle"}
];

console.table(evidenceLog);

console.group("Groupd starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd("Groupd ends");

// console.time("Time starts now");

// let dnaMatches = 0;
// for (let i = 0; i < 1000000; i++) {
//     dnaMatches++;
// }

// console.timeEnd("Time Ends now");

console.log("ChaiCode");
console.log("ChaiCode");

console.count("ChaiCode"); //ChaiCode: 1
console.count("ChaiCode");  //ChaiCode: 2

console.count("Chaicode"); // Chaicode: 1 .... because count is case sensitive

