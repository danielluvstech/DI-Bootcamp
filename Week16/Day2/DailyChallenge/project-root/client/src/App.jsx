import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch("/api/hello");
      const text = await res.text();
      setMessage(text);
    };

    fetchMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/world", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const text = await res.text();
    setResponse(text);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{message}</h1>

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <p>{response}</p>
    </div>
  );
}

export default App;
