import React from "react";

// Define the props interface
interface GreetingProps {
  name: string;
  messageCount: number;
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name, messageCount }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
};

export default Greeting;