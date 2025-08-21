import "./style.css";
import { getFirstElement, getFirstElementSafe } from "./exercises/getFirstElement";

const app = document.querySelector<HTMLDivElement>("#app")!;

const a1 = ["hello", 99];
const a2 = [123, "world"];
const a3 = ["only", "strings"];

app.innerHTML = `
  <h1>Exercise 4: Type Assertions with Union Types</h1>
  <p><code>getFirstElement</code> returns the first item <strong>as a string</strong> using a type assertion.</p>

  <h2>Tests</h2>
  <ul>
    <li>
      <div><strong>Input:</strong> <code>["hello", 99]</code></div>
      <div><strong>assert:</strong> ${getFirstElement(a1)}</div>
      <div><strong>safe:</strong> ${getFirstElementSafe(a1)}</div>
    </li>
    <li>
      <div><strong>Input:</strong> <code>[123, "world"]</code></div>
      <div><strong>assert:</strong> ${getFirstElement(a2)}</div>
      <div><strong>safe:</strong> ${getFirstElementSafe(a2)}</div>
    </li>
    <li>
      <div><strong>Input:</strong> <code>["only", "strings"]</code></div>
      <div><strong>assert:</strong> ${getFirstElement(a3)}</div>
      <div><strong>safe:</strong> ${getFirstElementSafe(a3)}</div>
    </li>
  </ul>

  <hr />
  <p style="opacity:.75;font-size:13px">
    Note: <code>as string</code> is a <em>type assertion</em> (compile-time only) — it doesn't convert numbers.
    The "safe" version converts numbers via <code>String(...)</code>.
  </p>
`;
