const aadhaar_of_mayur = Symbol("Aadhaar"); // Here Aadhaar is label of the symbol
const aadhaar_of_piyush = Symbol("Aadhaar");

console.log(aadhaar_of_mayur); // Symbol(Aadhaar)
console.log(typeof aadhaar_of_mayur); // symbol
console.log(aadhaar_of_mayur === aadhaar_of_piyush); // false

console.log(aadhaar_of_mayur.toString()); // Symbol(Aadhaar)
console.log(aadhaar_of_mayur.description); // Aadhaar (.description returns label)

const nonIndian = Symbol();
console.log(nonIndian); // Symbol()
console.log(nonIndian.description); // undefined

// label name doesn't guarantee that symbol will be same.

const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const citizenRecords = {
    name: "Ved Pandey",
    age: 21, 
    [biometricHash]: "a7yknfky188dn",
    [bloodGroup]: "O+"
}
console.log(Object.keys(citizenRecords)); // [ 'name', 'age' ]

// If we create symbol and pass them as keys in an object then they are not visible.
// Symbols are not visible Properties

console.log(Object.getOwnPropertySymbols(citizenRecords));
// [ Symbol(biometricHash), Symbol(bloodGroup) ]

const rtiQueryBook = {
    queries: ["Infra Budget", "Ration Card", "Education budget", "Startup Laws"],
}

// for (const query of rtiQueryBook){
//     console.log(`Filing RTI: ${query}`); // Error: rtiQueryBook is not iterable
// }

// We cannot directly iterate on objects, so to make it iterable,
const rtiQueryBook1 = {
    queries: ["Infra Budget", "Ration Card", "Education budget", "Startup Laws"],
    [Symbol.iterator] () {
        let index = 0
        const queries = this.queries
        return {
            next () {
                if (index < queries.length){
                    return {value: queries[index++], done: false};
                }
                return {value: undefined, done: true};
            },
        };
    },
};

for (const query of rtiQueryBook1){
    console.log(`RTI Filing: ${query}`);
} /* RTI Filing: Infra Budget
RTI Filing: Ration Card
RTI Filing: Education budget
RTI Filing: Startup Laws */

// Symbol can make objects iterable (Use case of Symbol)

const governmentScheme = {
    name: "PM Kisan Yojana",
    People: 54,
    [Symbol.toPrimitive] (hint) {
        if (hint === "number") return this.name;
        if (hint === "string") return this.name;
    },
};

console.log(+governmentScheme); // NaN - Convert to Number
console.log(`${governmentScheme}`); // PM Kisan Yojana - Convert to String

