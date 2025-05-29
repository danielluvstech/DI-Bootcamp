// // Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// console.log(people)

// people[people.indexOf("James")] = "Jason";
// console.log(people)

// people.push("Daniel");
// console.log(people)

// console.log(people.indexOf("Mary"));

// const peopleCopy = people.slice(1, people.length - 1);
// console.log(peopleCopy)

// console.log(people.indexOf("Foo")); // "Foo" is -1 because it's not part of the array

// const last = people[people.length - 1];
// console.log(last);

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//         break; 
//     }
// }

// Exercise 2

// const colors = ['black', 'blue', 'gold', 'purple', 'orange']

// for (let i = 0; i < colors.length; i++) {
//     console.log(`My #${i + 1} choice is ${colors[i]}`);
// }

// Exercise 3

// let number = prompt("Enter a number:");
// number = Number(number);

// while (number < 10) {
//     number = prompt("This number is too small. Please enter a new number:");
//     number = Number(number);
// }

// console.log(`The last number: ${number}`);

// Exercises 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors)

// const apt1 = building.numberOfAptByFloor.firstFloor;
// const apt3 = building.numberOfAptByFloor.thirdFloor;
// console.log(`Floor 1: ${apt1} apartments, and floor 3: ${apt3} apartments`);

// const secondTenant = building.nameOfTenants[1];
// const rooms = building.numberOfRoomsAndRent.dan[0];
// console.log(`${secondTenant} has ${rooms} rooms`);

// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log("Dan's rent has been increased to 1200.");
// } else {
//     console.log("No rent change.");
// }

// Exercise 5

// const family = {
//     father: "Daniel",
//     mother: "Bracha",
//     son1: "Yochai",
//     son2: "Shachar"
// };

// console.log("Keys:");
// for (let key in family) {
//     console.log(key);
// }

// console.log("Values:");
// for (let key in family) {
//     console.log(family[key]);
// }

// Exercise 6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   };
  
//   let words = [];
  
//   for (let key in details) {
//     words.push(key, details[key]);
//   }
  
//   console.log(words.join(" "));

// Exercise 7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const initials = names.map(name => name[0]);

// initials.sort();

// const secretName = initials.join("");

// console.log(secretName);