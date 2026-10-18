function TataCar(chasisNumber, ModelName){
    this.chasisNumber = chasisNumber,
    this.ModelName = ModelName,
    this.fuelLevel = 100
}

TataCar.prototype.status = function(){
    return `Tata ${this.ModelName} # ${this.chasisNumber} | Fuel: ${this.fuelLevel}`
}
// Function is also an object, Hence we can access the this from above function

const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");

console.log(car1.status()); // Tata Nexon # MH-101 | Fuel: 100
console.log(car2.status()); // Tata Harrier # DL-202 | Fuel: 100

// if we put a new keyword then it shows a typeError

// How Does new keyword works in JS? (4 steps)
// 1. When we use this keyword then an empty object is made
// 2. Every Function has its prototype and empty object is linked to that prototype 
// function
// 3. this keyword binds to whoever calls it (New Object) -> this Binding
// 4. returns explicit object

//FACTORY FUNCTION
function createAutoRickshaw(id, route){
    return {
        id,
        route,
        run(){
            return `Auto Rickshaw ${this.id} is running on route ${this.route}`
        }
    }
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow to Kanpur");
const auto2 = createAutoRickshaw("UP-2", "Agra to Mathura");

console.log(auto1.run()); // Auto Rickshaw UP-1 is running on route Lucknow to Kanpur
console.log(auto2.run()); // Auto Rickshaw UP-2 is running on route Agra to Mathura

// This also gets logged and tatacar also gets logged then why use 'new'??
// Because each instance gets its own copy of Reference

// factory functions cost more memory compared to TataCars like functions

// In factory function, everyone can have full reference
// In TataCar like functions, instance are created with class (not so memory logged)

// Constructors: new keyword is involved and we use shared memory in case of constructors

// Factory Function has per Instance (eg: auto1 is an instance, auto2 is another)

// In case of this, we have to ask interviewer which environment is 
// code running in, because this is a keyword and it depends on the 
// environment. In case of browser, this refers to window object. 
// In case of node, this refers to global object. In case of strict 
// mode, this refers to undefined.

