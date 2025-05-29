let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
  };

  // Arrow function to demonstrate pass-by-value vs. pass-by-reference
const cloneGroceries = () => {
  // Pass-by-value: primitive types (like strings)
  let user = client;
  client = "Betty";

  console.log("User:", user); // "John"
  console.log("Client:", client); // "Betty"

  // Pass-by-reference: objects
  let shopping = groceries;
  shopping.totalPrice = "35$";
  shopping.other.paid = false;

  console.log("Groceries total price:", groceries.totalPrice);
  console.log("Groceries paid:", groceries.other.paid);    
};

// Invoke the functions
displayGroceries();
cloneGroceries();