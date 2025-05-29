// exercise 1

// function displayNumberDivisible() {
//     let sum = 0;

//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i);
//             sum += i;
//         }
//     }

//     console.log('Sum:', sum);
// }

// displayNumberDivisible();

// exercise 2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// };  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }; 

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;

//     for (let item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             total += prices[item];
//         }
//     }

//     return total;
// }

// console.log("total bill:", myBill());

// exercise 3

// function changeEnough(itemPrice, amountOfChange) {
//     const coinValue = [0.25, 0.10, 0.05, 0.01];
//     let total = 0;

//     for (let i = 0; i < amountOfChange.length; i++) {
//         total += amountOfChange[i] * coinValue[i];
//     }

//     return total >= itemPrice;
// }

// console.log(changeEnough(5.25, [25, 20, 5, 0]));
// console.log(changeEnough(17.13, [2, 100, 0, 0]));
// console.log(changeEnough(0.50, [0, 0, 20, 5]));

// exercise 4

// function hotelCost() {
//     let nights = prompt("How many nights are you looking to stay in the hotel?");
    
//     while (nights === "" || nights === null) {
//         nights = prompt("Enter a number of nights:");
//     }

//     return Number(nights) * 140;
// }

// function planeRideCost() {
//     let destination = prompt("Where are you traveling to?");
    
//     while (destination === "" || destination === null) {
//         destination = prompt("Please enter a destination:");
//     }

//     if (destination.toLowerCase() === "london") {
//         return 183;
//     } else if (destination.toLowerCase() === "paris") {
//         return 220;
//     } else {
//         return 300;
//     }
// }

// function rentalCarCost() {
//     let days = prompt("How many days would you like to rent the car?");
    
//     while (days === "" || days === null) {
//         days = prompt("Enter the number of days:");
//     }

//     let cost = Number(days) * 40;

//     if (Number(days) > 10) {
//         cost = cost * 0.95;
//     }

//     return cost;
// }

// function totalVacationCost() {
//     const hotel = hotelCost();
//     const plane = planeRideCost();
//     const car = rentalCarCost();

//     console.log("The car cost: $" + car + ", the hotel cost: $" + hotel + ", the plane tickets cost: $" + plane);
//     return hotel + plane + car;
// }

// totalVacationCost();
