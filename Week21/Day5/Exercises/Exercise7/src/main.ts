import "./style.css";
import { formatInput } from "./exercises/formatInput";

const app = document.querySelector<HTMLDivElement>("#app")!;

const samples = [
  "  hello world  ",       // string
  12345,                   // number
  new Date("2025-08-21"),  // Date
  ["Type", "Script"],      // Array
  { toString: () => "CustomThing#42" }, // custom object
];

app.innerHTML = `
  <h1>Exercise 7: Type Assertions & Generic Constraints</h1>
  <p><strong>Goal:</strong> Constrain <code>T</code> to types with <code>toString()</code>, then format as a string.</p>
  <ul>
    ${samples.map(v => `<li><code>${String(v)}</code> → ${formatInput(v as any)}</li>`).join("")}
  </ul>
  <p style="opacity:.75;font-size:13px">
    Note: <code>as string</code> is a <em>type assertion</em> (compile-time only). For a true runtime conversion,
    you could use <code>String(value)</code> before formatting.
  </p>
`;
