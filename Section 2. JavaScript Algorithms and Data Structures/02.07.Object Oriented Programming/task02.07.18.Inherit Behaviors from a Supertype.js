function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype);; // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
duck.eat();
console.log(beagle instanceof Animal);