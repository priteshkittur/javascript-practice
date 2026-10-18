console.log(this);

function ranveerOnGlobalStage(){
    return typeof this;
}
console.log(ranveerOnGlobalStage()); // object 

function ranveerWithNoScript(){
    "use strict";
    return this; // "undefined" in strict mode, "object" in non-strict mode
}

console.log(ranveerWithNoScript()); // undefined


// Interview Question: 
// In strict mode, 'this' is undefined
// Without strict mode, 'this' refers to the global object (window in browsers, global in 
// Node.js).

// window is browser's global object, and global is Node.js's global object.

const bollywoodFilm = {
    name: "Bajirao Mastani",
    lead: "Ranveer Singh",
    introduce(){
        return `${this.lead} performs in ${this.name}`;
    },
};

const bollywoodFilm2 = {
    name: "Dhurandar",
    lead: "Ranveer Singh",
    introduce(){
        return `${this.lead} performs in ${this.name}`;
    },
};

console.log(bollywoodFilm.introduce()); // Ranveer Singh performs in Bajirao Mastani

console.log(bollywoodFilm2.introduce()); // Ranveer Singh performs in Dhurandar

// Every Object has a this. So, inside introduce we write return, it points to the object
// (bollywoodFilm). More Specifically, it points to scope of BollywoodFilm

// In case of regular function like bollywoodFilm it is fine and works well

// What if we write an arrow function instead of regular function? Let's see:

const filmDirector = {
    name: "Sanjay Leela Bhansali",
    cast: ["Ranveer Singh", "Deepika Padukone", "Priyanka Chopra"],
    announceCast() {
        this.cast.forEach((actor) => {
            console.log(`${this.name} introduces ${actor}`);
        });
    }
};

filmDirector.announceCast(); // Sanjay Leela Bhansali introduces Ranveer Singh
                             // Sanjay Leela Bhansali introduces Deepika Padukone
                            // Sanjay Leela Bhansali introduces Priyanka Chopra

// What happens here? Because arrow function do not have their own 'this' so it inherits 
// 'this' from parent scope

const filmSet = {
    crew: "Spot Boys",
    prepareProps () {
        console.log(`outer this.crew: ${this.crew}`); // Spot Boys

        function arrangeChairs(){
            console.log(`inner this.crew: ${this.crew}`); // undefined
        }

        arrangeChairs();

        const arrangeLights = () => {
            console.log(`Arrow this.crew: ${this.crew}`); // Spot Boys
        }
        arrangeLights();
    }

};


// Detached Methods

const actor = {
    name: "Ranveer Singh",
    bow () {
        return `${this.name} takes a bow`;
    }

};

const detachedBow = actor.bow;
console.log(detachedBow()); // undefined takes a bow


// In closures if we pass function reference it also gets other variable access.
// But in 'this' keyword case, we do not get access to the object.

const myFunctionOne = function() {
    console.log(this);
}

const myFunctionTwo = () => {
    console.log(this);
}

myFunctionOne(); // global object (in IDE) or Window Object (in Browser)
myFunctionTwo(); // {} - empty object (in IDE) or Window Object (in Browser)

// Arrow function does not have its own 'this', so it can just reference outer 'this'
// or can return empty object

