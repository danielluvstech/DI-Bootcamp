class Calculator {
  // static method for addition
  public static add(a: number, b: number): number {
    return a + b;
  }

  // static method for subtraction
  public static subtract(a: number, b: number): number {
    return a - b;
  }
}

// ✅ Call static methods directly without creating an instance
console.log("Add:", Calculator.add(10, 5));       // 15
console.log("Subtract:", Calculator.subtract(10, 5)); // 5
