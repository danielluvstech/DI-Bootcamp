import "./style.css";
import { describeEmployee } from "./exercises/employee";
import type { Employee } from "./exercises/employee";

const app = document.querySelector<HTMLDivElement>("#app")!;

// Test data
const manager: Employee = {
  name: "Rachel",
  age: 38,
  position: "Manager",
  department: "Sales",
  teamSize: 12,
};

const developer: Employee = {
  name: "Eitan",
  age: 27,
  position: "Developer",
  department: "Platform",
  languages: ["TypeScript", "Node.js", "React"],
};

app.innerHTML = `
  <h1>Exercise 6: Intersection Types & Type Guards</h1>
  <ul>
    <li>${describeEmployee(manager)}</li>
    <li>${describeEmployee(developer)}</li>
  </ul>
  <p style="opacity:.75;font-size:13px">
    <code>Employee = Person & Job</code>, where <code>Job</code> is a union of <code>Manager</code> or <code>Developer</code>.
    Type guards refine at runtime for a safe, specific message.
  </p>
`;

// ❌ Try uncommenting to see compile-time help:
// const wrong: Employee = { name: "Nope", age: 40, position: "Boss", department: "Ops" }; // position must be "Manager" or "Developer"
