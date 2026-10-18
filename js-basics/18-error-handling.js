function bootNavigation (mapLoaded) {
    try {
        console.log(`Is Navigation Loaded: ${mapLoaded}`);
        if (!mapLoaded) {
            throw new Error ("Map was not passed in this function");
        }
        return "NAV_OK";
    } catch (error) {
        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
    } finally {
        console.log("Navigation Sequence completed");
    }
}

const status1 = bootNavigation (true);
console.log(status1); /*Is Navigation Loaded: true
                        Navigation Sequence completed
                        NAV_OK*/

const status2 = bootNavigation (false);
console.log(status2); /* Is Navigation Loaded: false
                        Error: Map was not passed in this function 
                        Navigation Failed: Map was not passed in this function
                        Navigation Sequence completed
                        undefined*/

// we also define error types
// Error files are usually centralised

