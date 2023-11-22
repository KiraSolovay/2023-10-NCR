// HAMSTER
class Hamster {
    constructor (name){
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

// PERSON
class Person {
    constructor (name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters= [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`${this.name} says hi!`)
    }
    eat(num) {
        for (let i = 0; i < num; i++) {
            this.weight++;
            this.mood++;
        }
    }
    exercise(num) {
        for (let i = 0; i < num; i++) {
            this.weight--;
        }
    }
    ageUp(num) {
        for (let i = 0; i < num; i++) {
            this.age++;
            this.height++;
            this.weight++;
            this.mood--;
            this.bankAccount += 10;
        }
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.price;
    }
}

// CREATE A STORY WITH YOUR PERSON CLASS
// instantiate a new Person named Timmy
const Timmy = new Person("Timmy");

// age Timmy five years
Timmy.ageUp(5);

// have Timmy eat five times
Timmy.eat(5);

// have Timmy exercise five times
Timmy.exercise(5);

// age Timmy nine years
Timmy.ageUp(9);

// create a Hamster named Gus
const Gus = new Hamster("Gus");

// set Gus' owner to "Timmy"
Gus.owner = "Timmy";

// Timmy buys Gus
Timmy.buyHamster(Gus);

// age Timmy 15 years
Timmy.ageUp(15);

// Timmy eats 2 times
Timmy.eat(2);

// Timmy exercises twice
Timmy.exercise(2);

console.log(Timmy);

// CHEF MAKE DINNERS
class Dinner{
    constructor(appetizer, entree, dessert) {
        this.appteizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef{
    static makeDinner(appetizer, entree, dessert){
        return new Dinner(appetizer, entree, dessert);
    }
}

const dinner1 = Chef.makeDinner('Salad', 'Steak', 'Cake');
const dinner2 = Chef.makeDinner('Soup', 'Pasta', 'Ice Cream');
const dinner3 = Chef.makeDinner('Bruschetta', 'Grilled Salmon', 'Tiramisu');

console.log('Dinner 1:', dinner1);
console.log('Dinner 2:', dinner2);
console.log('Dinner 3:', dinner3);