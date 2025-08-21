import "./style.css";
import { logLength } from "./genericconstraints/logLength";

const app = document.querySelector<HTMLDivElement>("#app")!;

const s = "hello world";
const arr = [1, 2, 3, 4];
const custom = { length: 10, label: "array-like" as const };

const lenS = logLength(s);
const lenArr = logLength(arr);
const lenCustom = logLength(custom);

// ❌ Uncommenting this will cause a TypeScript error (number has no `length`):
// logLength(123);

app.innerHTML = `
  <h1>Exercise 5: Generic Constraints</h1>
  <p><strong>Goal:</strong> Accept only values with a <code>length</code> property and log it.</p>
  <ul>
    <li><code>logLength("hello world")</code> → ${lenS}</li>
    <li><code>logLength([1,2,3,4])</code> → ${lenArr}</li>
    <li><code>logLength({ length: 10, label: "array-like" })</code> → ${lenCustom}</li>
  </ul>
  <p style="opacity:.75;font-size:13px">
    Open the console to see the logs. Numbers are rejected at compile time.
  </p>
`;
