var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "".concat(this.name, " - $").concat(this.price.toFixed(2));
    };
    return Product;
}());
// Example usage
var p1 = new Product(101, "Wireless Mouse", 89.9);
console.log(p1.getProductInfo()); // Wireless Mouse - $89.90
// Try to modify readonly property (uncomment to see compile error)
// p1.id = 999; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
