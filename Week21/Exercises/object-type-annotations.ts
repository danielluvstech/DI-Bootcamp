// Define the Person type
type Person = {
    name: string;
    age: number;
};

// Function to create a person
function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

// Test the function by creating a person and logging the result
const person1 = createPerson("Alice", 30);
console.log(person1);  // Output: { name: 'Alice', age: 30 }
