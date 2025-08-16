// Base class
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return `${this.name} makes a sound.`;
  }
}

// Subclass
class Dog extends Animal {
  constructor(name: string) {
    super(name); // call base class constructor
  }

  // override method
  public makeSound(): string {
    return `${this.name} says: bark 🐶`;
  }
}

// Example usage
const dog = new Dog("Rex");
console.log(dog.makeSound()); // Rex says: bark 🐶
