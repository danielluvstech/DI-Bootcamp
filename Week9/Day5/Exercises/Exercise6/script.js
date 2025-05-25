/** 1 */

// [2] === [2] // false // false because they are two different objects in memory, even though they look the same.
// {} === {}   // false // different instances

/** 2 */

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5 };

// object1.number = 4;

// console.log(object2.number); // 4
// console.log(object3.number); // 4
// console.log(object4.number); // 5

// object2 and object3 are references to the same object as object1, so when this changes, objject 2 and 3 do as well
// object4 is a new object with the same initial value but a different reference

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
// Output: Moooo I'm a cow, named Lily and I'm brown and white