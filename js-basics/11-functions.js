console.log(brewPotion("Healing Herb", 3));
function brewPotion(ingredient, dose) {
    return `Brewing Potion with ${ingredient} (x${dose})... Potion Ready`;
};

// Why does the function work even though it is called before it is defined?
//Because in Global Execution Context, the function declarations are hoisted with no initial 
// value in memory phase.

const minElixir = function(ingredient){
    return `Mixing elixir with ${ingredient}`;
};

// or

const distilEssence = (ingredient) => {
    return `Distilling essence from ${ingredient}`;
};

// In arrow functions, syntax is more consize but problem is that it does not have its own 
// 'this' keyword, no arguments object, and cannot be used as constructors.

//Every Function has its own Arguments but Arrow functions do not have their own arguments

function oldBrewingLogs(){
    console.log("Type: ", typeof arguments); // output: Type:  object

    console.log(arguments); // output: [Arguments] { '0': 'Sage', '1': 'Rosemary' }
    //here in output arguments is an array but type is logged as object because arguments is 
    // not a real array but an array-like object.

    console.log("Is Array: ", Array.isArray(arguments)); // output: Is Array:  false
    // So arguments is not a real array but an array-like object.
}

oldBrewingLogs("Sage", "Rosemary");

const argsArray = Array.from(arguments); // convert arguments to a real array
console.log(argsArray); // output: [ 'Sage', 'Rosemary' ]


// const arrowBrew = () = {
//     console.log(arguments);
// };
// arrowBrew();

// This gives an error (program crashed).... How to handle this?
// using try-catch method

const arrorBrew = () => {
    try{
        console.log(arguments);
    } catch(err){
        console.log("Error: ", err.message);
        console.log(err);
    }
};

// Pure and Impure Functions

let globalCount = 0; // global variable

function brewAndCount(name){
    globalCount++; // modifies the global variable`
}
// This function changes the global value, so it is called an impure function.
// It has a side effect of changing the global variable.

// Impure function is the function that mutates external/global value

// Pure function is the function that does not mutate/change any external/global scopic 
// value and always returns the same output for the same input. [WORKS WITHIN ITS OWN SCOPE]

//IIFE (Immediately Invoked Function Expression)
// const potionShop = (function(){ }) ()
// here we place parenthesis just after creating function so that it should run immediately

// Just like we can pass numbers, strings in parameter of function. the same way. we can
// also pass functions as parameter to another function. This is called Higher Order 
// Function (HOF).

// Higher Order Function

function anotherFunctionForClass(brewCount){
    return newBrew();
}
        // Here we are passing reference of one function

        // If we write like this,
        //anotherFunctionForClass(brewAndCount()){};
        // here we are passing whole function which gets executed

function newBrew(){
    //does something
}

// or we can also write like this

return function newBrew(){
    //does something
}

//Higher order functions are functions that operate on other functions by either taking 
// them as arguments (callbacks) or by returning them as results.

//const receipt = orders.map(10) => `${o.dish}: ${o.price}`;
// In map we are passing arguments so it is a higher order functions.

// Map, Reduce, Filter are all higher order functions

//IIFE
// syntax: (function(){})();

//or

// (() => {})();
// we can also make arrow function as IIFE

const potionShop = (function(){
    let inventory = 0;
    // when we make a variable like this, we cannot use it outside the function
    return {
        brew(){
            inventory++;
            return `Potion brewed. Total potions: ${inventory}`;
        }, 
        getStock(){
            return inventory;
        },
    };
})();

console.log(potionShop.brew()); // output: {brew: [Function: brew], getStock: [Function: getStock]} --- so potionShop holds 2 function-definitions

//Q: If we wanna access brew how do we write? only brew or brew ()?
// we write
console.log(potionShop.brew()); // output: Potion brewed. Total potions: 1
// we write with parenthesis


//Q: Can we access inventory by, 
console.log(potionShop.inventory); // output: undefined
//Ans: It shows undefined because its a private variable (CLOSURES)

//usually when a function returns , it carries variables/bag with it but only one exception:
//In IIFE carry variables is not allowed

//Closures:

function makeFunction(){
    const name = "Morzilla";
    function displayName(){
        console.log(name);
    }
    return displayName; 
    // after returning, the name variable should have been erased but it in closures
    // javascript keeps the variable if ANY FUNCTION is accessing it.
    //That ANY FUNCTION should be a function inside our main function
}


const myFunc = makeFunction();
myFunc(); // output: Morzilla

