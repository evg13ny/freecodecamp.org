function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log('woof woof woof');
    },
    describe: function () {
        console.log('My name is ' + this.name);
    }
};

let bulldog = new Dog('Spike');
console.log(bulldog.name);
console.log(bulldog.numLegs);
bulldog.eat();
bulldog.describe();