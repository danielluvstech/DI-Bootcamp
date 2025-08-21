import React, { useState } from "react";
import { describeValue } from "./describeValue";

export default function Exercise2Demo() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string>("");

  const isNumeric = (s: string) =>
    s.trim() !== "" && Number.isFinite(Number(s));

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h1>Exercise 2: Type Guards with Union Types</h1>

      <section style={{ marginBottom: 16 }}>
        <h2>Examples</h2>
        <p><code>describeValue(42)</code> ➜ {describeValue(42)}</p>
        <p><code>describeValue("hello")</code> ➜ {describeValue("hello")}</p>
      </section>

      <section>
        <h2>Try it</h2>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type 123 or "hello"'
          style={{ padding: 8, width: 320, borderRadius: 8, border: "1px solid #ccc" }}
        />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button onClick={() => setResult(describeValue(input))}>
            Pass as string
          </button>
          <button onClick={() => setResult(describeValue(Number(input)))}>
            Pass as number
          </button>
          <button
            onClick={() =>
              setResult(describeValue(isNumeric(input) ? Number(input) : input))
            }
          >
            Auto-detect
          </button>
        </div>
        <p style={{ marginTop: 12 }}>
          <strong>Result:</strong> {result || "—"}
        </p>
      </section>
    </main>
  );
}