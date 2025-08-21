import "./style.css";
import { someValue, asString, shouted, converted } from "./exercises/castToString";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <h1>Exercise 3: Type Casting</h1>
  <p><strong>someValue (any):</strong> ${String(someValue)}</p>
  <p><strong>asString (asserted):</strong> ${asString}</p>
  <p><strong>shouted (used as string):</strong> ${shouted}</p>
  <hr />
  <p style="opacity:.75;font-size:13px">
    <strong>Note:</strong> <code>as</code> is a <em>type assertion</em> (compile-time only) — it doesn't convert.
    <br/> <code>String(value)</code> is a real runtime conversion.
  </p>
  <p><strong>converted (runtime):</strong> ${converted}</p>
`;
