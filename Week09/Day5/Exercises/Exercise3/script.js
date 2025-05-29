const users = { user1: 18273, user2: 92833, user3: 90315 }

const userArray = Object.entries(users);
console.log(userArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

const updatedUsers = userArray.map(([key, value]) => [key, value * 2]);
console.log(updatedUsers);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]