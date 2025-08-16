// Exercise 1

class Employee {
  private name: string;          // only accessible inside the class
  private salary: number;        // only accessible inside the class
  public position: string;       // accessible anywhere
  protected department: string;  // accessible inside class and subclasses

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  // public method to expose controlled info
  public getEmployeeInfo(): string {
    return `Employee Name: ${this.name}, Position: ${this.position}`;
  }

  // public method to safely access protected/private data
  public getFullDetails(): string {
    return `Name: ${this.name}, Position: ${this.position}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

// Example usage
const emp1 = new Employee("Daniel", 50000, "Developer", "IT");
console.log(emp1.getEmployeeInfo());   // ✅ Allowed
// console.log(emp1.name);             // ❌ Error: 'name' is private
// console.log(emp1.department);       // ❌ Error: 'department' is protected