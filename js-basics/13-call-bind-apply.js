// call and apply -> Basic Chef (Kitchen) -> Cooks Immediately

// Bind -> Delegation -> always returns a new function

function cookDish(ingredient, style) {
    return `${this.name} prepares ${ingredient} in ${style} style!`;
}

const sharmaKitchen = {name: "Sharma Ji's Kitchen"};
const guptaKitchen = {name: "Gupta Ji's Kitchen"};

console.log(cookDish.call(sharmaKitchen, "Paneer & Spices", "Mughlai"));
// Output: Sharma Ji's Kitchen prepares Paneer & Spices in Mughlai style!
// Every Method has its own call, bind and apply methods

const guptaOrder = ["Chole Kulche", "Punjabi Dhaba"];

console.log(cookDish.apply(guptaKitchen, guptaOrder));
// Output: Gupta Ji's Kitchen prepares Chole Kulche in Punjabi Dhaba style!

// Whenever we have to pass an array as argument, we use apply()method.
// apply() method takes an array as an argument and passes them as function parameters.

const bills = [100, 30, 45, 50];
console.log(Math.max.apply(null, bills)); // 100

console.log(Math.max(...bills)); // 100 
// instead of apply we can also use spread operator to pass an array as function 
// parameters.

// Apply and Call always return results of the function, but bind always returns a new 
// function.

// NOTE: call, bind and apply overwrites the 'this' keyword of the function

function reportDelivery (location, status) {
    return `${this.name} at ${location} : ${status}`;
}
//const deliveryBoy = "Ranveer";
const deliveryBoy = {name: "Ranveer"};
console.log("call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "pick Up"]));
console.log("bind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT"));

// Output: call:  undefined at Lyari : Ordered
// Output: apply:  undefined at Mars : pick Up
// Output: bind:  [Function: bound reportDelivery]
// Problem in these?

// in deliveryBoy we have just passed a string, but in the function we are trying to 
// access the name property of the object.

// after changing the deliveryBoy to an object we get output:
// call:  Ranveer at Lyari : Ordered
// apply:  Ranveer at Mars : pick Up
// bind:  [Function: bound reportDelivery]

// but we still get Function: bound reportDelivery so we do,

// 1
const boundReport = reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT");
console.log("bind: ", boundReport()); // bind:  Ranveer at Haridwar : WHAT

// we can pass one argument like this,
// 2

const bindReport2 = reportDelivery.bind(deliveryBoy, "Haridwar");
console.log("bind: ", bindReport2("WHAT")); // bind:  Ranveer at Haridwar : WHAT

// we can also pass both the arguments later like this,

// 3
const bindReport3 = reportDelivery.bind(deliveryBoy);
console.log("bind: ", bindReport3("Haridwar", "WHAT")); // bind:  Ranveer at Haridwar : WHAT

// Still Runs

// Always Prefer to pass all arguments at once as shown in 1, because it is more readable 
// and easy to understand.



