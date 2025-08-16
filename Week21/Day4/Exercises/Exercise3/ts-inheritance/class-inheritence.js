"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Base class
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `${this.name} makes a sound.`;
    }
}
// Subclass
class Dog extends Animal {
    constructor(name) {
        super(name); // call base class constructor
    }
    // override method
    makeSound() {
        return `${this.name} says: bark 🐶`;
    }
}
// Example usage
const dog = new Dog("Rex");
console.log(dog.makeSound()); // Rex says: bark 🐶
//# sourceMappingURL=class-inheritence.js.map