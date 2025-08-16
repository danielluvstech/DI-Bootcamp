"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserDetails(user) {
    const level = user.membershipLevel ?? "N/A";
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Membership: ${level}`);
}
// Demo
const p1 = {
    id: 1,
    name: "Daniel",
    email: "daniel@example.com",
    membershipLevel: "Gold",
};
printUserDetails(p1);
// Uncomment to see readonly error:
// p1.id = 999; // ❌ TS2540: Cannot assign to 'id' because it is a read-only property.
//# sourceMappingURL=Exercise5.js.map