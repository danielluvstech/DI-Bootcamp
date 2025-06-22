const products = require('./products');

function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log(`Product Found:
    Name: ${product.name}
    Price: $${product.price}
    Category: ${product.category}`);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

// Test the function with different names
findProductByName("Computer");
findProductByName("Pants");
findProductByName("Pencil");
findProductByName("Pen"); // not in list