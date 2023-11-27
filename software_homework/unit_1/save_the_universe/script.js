const controls = document.querySelector(".controls");
const theLog = document.querySelector(".log");
const start = document.getElementById("startGame");

// SHIP OBJECT
class ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.isAlive = true;
  }
  attack(target) {
    // see if it hits
    let attackRoll = Math.random()
    if (attackRoll < this.accuracy) {
      target.hull = target.hull - this.firepower
      logEntry(`${this.name} hits ${target.name} for ${this.firepower} damage.`);
      if (target.hull <= 0) {
        target.isAlive = false;
        logEntry(`${target.name} has been destroyed`);
      }
    }
    else {
        logEntry(`${this.name} tries to hit ${target.name} but misses.`)
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
  aliens[i] = new ship(`alien${i}`, getRandInt(3, 6), getRandInt(2, 4), (getRandInt(600, 800) / 1000))
}

// GAMEPLAY FUNCTIONS
const winCheck = () => {
  for (alien of aliens) {
    if (alien.isAlive == true) {
      return false;
    }
  }
  return true;
}

const logEntry = (string) => {
  const p = document.createElement("p")
  p.textContent = string;
  theLog.appendChild(p);
}

const loseCheck = () => {
  if (USS_Assembly.isAlive == false) {
    return true;
  }
  else {
    return false;
  }
}

const captainsLog = () => {
  if (winCheck() == true) {
    return "We are victorious! The aliens are defeated!";
  }
  if (loseCheck() == true) {
    return "The aliens have defeated us!";
  }
  return `The battle continues. Our hull is at ${USS_Assembly.hull} out of 20 points`;
}

const targetShip = () => {
  return aliens.find((alienShip) => alienShip.isAlive === true);
}

const retreat = () => {
  logEntry("We are retreating!");
  USS_Assembly.alive = false;
}

const attackNextShip = () => {
  logEntry("We are attacking the next alien ship!")
}

// gameplay function
const gameplay = async () => {
  while (winCheck() === false && loseCheck() === false) {
    roundTarget = targetShip()
    USS_Assembly.attack(roundTarget)
    logEntry(captainsLog());
    if (!roundTarget.isAlive) {
        const userChoice = window.confirm("The alien ship has been destroyed! Do you want to retreat?");
        if (userChoice) {
          retreat();
          break;
        } else {
          attackNextShip();
        }
    }
    for (alien of aliens) {
      alien.attack(USS_Assembly)
      logEntry(captainsLog());
      if (!USS_Assembly.isAlive){
        break;
      }
      await delay(1000);
    }
  }
}

start.addEventListener("click", gameplay);

