class Cricketer {
    constructor (name, role) {
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100;
    }
    introduce() {
        return `${this.name} the ${this.role} | Matches Played: ${this.matchesPlayed} | Stamina: ${this.stamina}`;
    }
};

const player1 = new Cricketer("virat", "batsman");
const player2 = new Cricketer("bumrah", "bowler");
console.log(player1.hasOwnProperty("name")); // true
console.log(typeof Cricketer); // function

class Debutant {
    constructor (name) {
        this.name = name;
        this.walkOut = () => `${this.name} walks out to bat for first time`;
    }
}

const debutant1 = new Debutant ("Shubman");
const somethingFromLastClass = debutant1.walkOut();
console.log(somethingFromLastClass); // Shubman walks out to bat for first time

const debutant2 = new Debutant ("Yashasvi");
console.log(debutant1.walkOut === debutant2.walkOut); // false
// this is false because both have different reference even though memory is shared


