import React, { useState } from 'react';

const Phone = () => {
  // State variables using useState hook
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  // Function to change color to blue
  const changeColor = () => {
    setColor('blue');
  };

  return (
    <div>
      <h2>My phone is a {brand}</h2>
      <p>It is a {color} {model} from {year}</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;
