import React, { useState } from "react";

// Define possible last actions as a union type
type Action = "Incremented" | "Decremented" | "None";

const Counter: React.FC = () => {
  // Typed state for counter (number)
  const [count, setCount] = useState<number>(0);

  // Typed state for last action (union type)
  const [lastAction, setLastAction] = useState<Action>("None");

  // Increment function
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    setLastAction("Incremented");
  };

  // Decrement function
  const handleDecrement = () => {
    setCount(prev => prev - 1);
    setLastAction("Decremented");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <p>Last Action: {lastAction}</p>
      <button onClick={handleIncrement}>➕ Increment</button>
      <button onClick={handleDecrement}>➖ Decrement</button>
    </div>
  );
};

export default Counter;