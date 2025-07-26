import { useRef, useState } from "react";

export default function App() {
  const inputRef = useRef(null);    // reference to the input field
  const [count, setCount] = useState(0); // state for character count

  const handleInput = () => {
    setCount(inputRef.current.value.length);  // useRef to get current value length
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <h1>Character Counter</h1>

      {/* Text Input */}
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      {/* Character Counter Display */}
      <p>Characters: <b>{count}</b></p>
    </div>
  );
}
