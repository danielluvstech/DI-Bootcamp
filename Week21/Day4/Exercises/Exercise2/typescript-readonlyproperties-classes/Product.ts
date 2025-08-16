class Product {
  public readonly id: number; // immutable after construction
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

// Example usage
const p1 = new Product(101, "Wireless Mouse", 89.9);
console.log(p1.getProductInfo()); // Wireless Mouse - $89.90

// Try to modify readonly property (uncomment to see compile error)
// p1.id = 999; // ❌ Error: Cannot assign to 'id' because it is a read-only property.