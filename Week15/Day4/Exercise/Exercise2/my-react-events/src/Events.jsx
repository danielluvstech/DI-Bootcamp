import React, { useState } from 'react';

const Events = () => {
  // State variable using useState hook
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Arrow function that alerts when called
  const clickMe = () => {
    alert('I was clicked');
  };

  // Function to handle key down events
  const handleKeyDown = (event) => {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
      alert(`React: ${event.target.value}`);
    }
  };

  // Function to toggle the state variable
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h2>Events Component</h2>
      <button onClick={clickMe}>Click Me!</button>
      <br /><br />
      <input 
        type="text" 
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}
      />
      <br /><br />
      <button onClick={handleToggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;