const crewMembers = 40;
const fuelTons = 142.2;
const lightSpeed = 299_899_999; // Using underscore for better readability of large numbers

const infiniteRange = Infinity; // Represents positive infinity
const negativeInfinity = -Infinity; // Represents negative infinity

const notANumber = NaN; // Represents a value that is "Not-a-Number"

// If we convert "Ashutosh" to a number, it will result in NaN

// If we convert "Deepak " to a number, it will also result in NaN

console.log(1/0); // Output: Infinity
console.log(-1/0); // Output: -Infinity

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

console.log(Number.EPSILON); // Output: 2.220446049250313e-16

console.log(Number.isNan); 
console.log(Number.isInteger);
console.log(Number.isFinite); 

// Parsing the Numbers

const fuelReading = "142.2 tons";
const sectorCode = "0xA3";
const countDown = "007";

console.log(parseInt(fuelReading)); // Output: 142
console.log(parseInt(sectorCode)); // Output: 163 (hexadecimal to decimal)

console.log(parseInt(countDown)); // Output: 7 (leading zeros are ignored)

console.log(parseInt("111", 2)); // Output: 7 (binary to decimal)... Here 2 is Base 2

const thrustForce = 4.567;

console.log(Math.round(thrustForce)); // Output: 5 -- rounds to the nearest integer

console.log(Math.floor(thrustForce)); // Output: 4 -- rounds down to the nearest integer

console.log(Math.ceil(thrustForce)); // Output: 5 -- rounds up to the nearest integer

console.log(Math.trunc(thrustForce)); // Output: 4 -- (removes the decimal part)

const temps = [-120, 43, 56, -23];
console.log(Math.min(...temps)); // Output: -120 -- finds the minimum value in the array

console.log(Math.max(...temps)); // Output: 56 -- finds the maximum value in the array

// we put spread operator (...) to spread the array elements as individual arguments to the 
// Math.min and Math.max functions.

console.log(0.1 + 0.2); 
// Output: 0.30000000000000004 -- due to floating-point precision issues

console.log (0.1 + 0.2 === 0.3); 
// Output: false -- because of the precision issue mentioned above

// GOTCHA! in JS
function almostEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
console.log(almostEqual(0.1 + 0.2, 0.3));
// Output: true -- using a function to check for "almost equal" values considering 
// floating-point precision

