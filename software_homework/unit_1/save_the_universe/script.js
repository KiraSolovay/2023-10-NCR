class ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
    attack(target){
        // see if it hits
        let attackRoll = Math.random()
        if(attackRoll < this.accuracy) {
            target.hull = target.hull - this.firepower
            console.log(`${this.name} hits ${target.name} for ${this.firepower} damage.`)
            if (target.hull <= 0) {
                target.alive = false
                console.log(`${target.name} has been destroyed`)
            }
        }
    }
}
// helpful function for getting random hull, firepower, and accuracies
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// GAME SETUP: MAKE SHIPS
const USS_Assembly = new ship("USS Assembly", 20, 5, .7)
const numOfAliens = 6;
let aliens = [];
for (let i = 0; i < numOfAliens; i++) {
    aliens[i] = new ship (`alien${i}`, getRandInt(3, 6), getRandInt(2, 4), (getRandInt(600, 800)/1000))
}
console.log(USS_Assembly)
console.log(aliens);
