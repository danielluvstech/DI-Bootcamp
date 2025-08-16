interface User {
  readonly id: number;   // cannot be changed after creation
  name: string;
  email: string;
}

interface PremiumUser extends User {
  // optional (may be absent); restrict to a few known levels
  membershipLevel?: "Silver" | "Gold" | "Platinum";
}

function printUserDetails(user: PremiumUser): void {
  const level = user.membershipLevel ?? "N/A";
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Membership: ${level}`);
}

// Demo
const p1: PremiumUser = {
  id: 1,
  name: "Daniel",
  email: "daniel@example.com",
  membershipLevel: "Gold",
};
printUserDetails(p1);

// Uncomment to see readonly error:
// p1.id = 999; // ❌ TS2540: Cannot assign to 'id' because it is a read-only property.