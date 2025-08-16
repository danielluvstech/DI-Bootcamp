"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name; // only accessible inside the class
    salary; // only accessible inside the class
    position; // accessible anywhere
    department; // accessible inside class and subclasses
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    // public method to expose controlled info
    getEmployeeInfo() {
        return `Employee Name: ${this.name}, Position: ${this.position}`;
    }
    // public method to safely access protected/private data
    getFullDetails() {
        return `Name: ${this.name}, Position: ${this.position}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}
// Example usage
const emp1 = new Employee("Daniel", 50000, "Developer", "IT");
console.log(emp1.getEmployeeInfo()); // ✅ Allowed
// console.log(emp1.name);             // ❌ Error: 'name' is private
// console.log(emp1.department);       // ❌ Error: 'department' is protected
//# sourceMappingURL=Employee.js.map