"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `${this.name} - $${this.price.toFixed(2)}`;
    }
}
// Example usage
const p1 = new Product(101, "Wireless Mouse", 89.9);
console.log(p1.getProductInfo()); // Wireless Mouse - $89.90
// Try to modify readonly property (uncomment to see compile error)
// p1.id = 999; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
//# sourceMappingURL=Product.js.map