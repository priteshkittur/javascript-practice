// JS has only one thread (Single Threaded). Eg: if we give it to read file then till the
// file is read the thread will be blocked, So we introduce Promises in JS.

// We had callbacks before promises too like below example,
function prepareOrderCB (dish, cb) {
    setTimeout (() => cb (null, {dish, status: "Prepared"}), 100);
}

function pickupOrderCB (order, cb) {
    setTimeout (() => cb (null, {...order, status: "Picked Up"}), 100);
}

function deliverOrderCB (order, cb) {
    setTimeout (() => cb (null, {...order, status: "Prepared"}), 100);
}

prepareOrderCB ("Biryani", (error, order) => {
    if (error) return console.log(error);
    pickupOrderCB (order, (error, order) => {
        if (error) return console.log(error);
        deliverOrderCB (order, (error, order) => {
            if (error) return console.log(error);
            console.log (`${order.dish} : ${order.status}`); // Biryani : Prepared
        });
    });
});

// this promises code looks too hard to debug which is problematic
// This was Promises in JS (callback) before Promises was Introduced which was very hard
// Promises have simple syntax than this.

// There are 3 stages of Promise : 1. Success (Fullfilled), 2. Fail (Rejected) and 
// 3. Pending (awaiting for response)

// Promises have 2 parts (3 stages and 2 parts): 1. Resolve and 2. Reject

// The above callback code using promises written below:
function prepareOrder (dish) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if(!dish){
                reject (new Error ("No dish is there"))
                return;
            }
            console.log(`${dish} is ready`);
            resolve ({dish, status: "Prepared"});
        }, 100)
    });
}

function pickupOrder (order) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            // if(!dish){
            //     reject (new Error ("No dish is there"))
            //     return;
            // }
            console.log(`${order} is ready`);
            resolve ({...order, status: "Prepared"});
        }, 100)
    });
}

function deliverOrder (order) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            // if(!dish){
            //     reject (new Error ("No dish is there"))
            //     return;
            // }
            console.log(`${order} is ready`);
            resolve ({...order, status: "Prepared"});
        }, 100)
    });
}

prepareOrder ("Paneer Tikka")
    .then (order => pickupOrder(order))
    .then (order => deliverOrder(order))
    .catch() // for Errors

// No matter how many .then() we pass, all errors will be caught in single .catch()
// JS is core language amd DOM is its implementation
// In Production, we use both (try-catch and Promises)
// 1. wherever there are crucial system crashes regarding database, Network, file Reading
// all go in try-catch
// 2. Wherever mostly we ourself design, we can send into promises

