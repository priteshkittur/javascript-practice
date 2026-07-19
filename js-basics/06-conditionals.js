const playerHealth = 75;
const hasShield = true;
const hasSword = false;

if (playerHealth < 30 && hasShield) {
    console.log("You are in critical condition, but your shield will protect you!");
}
const isLoggedIn = true;
const hasCourseAccess = false;

if (isLoggedIn && hasCourseAccess) {
    //allow access to the course
}

const courseLaunched = true;

const chosenPath = "left";

switch (chosenPath) {
    case "right":
        console.log("You have chosen the right path. You encounter a friendly merchant.");
        break;
    case "left":
        console.log("You have chosen the left path. You encounter a wild beast!");
        break;
    default:
        console.log("You have chosen an unknown path. You find yourself lost in the wilderness.");
}
