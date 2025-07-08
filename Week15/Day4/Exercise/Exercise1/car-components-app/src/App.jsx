import React from 'react';
import Car from './Components/Car';

const carinfo = { name: "Ford", model: "Mustang" }; // Part I

function App() {
  return (
    <div>
      <h1>Car Information</h1>
      <Car carInfo={carinfo} />
    </div>
  );
}

export default App;
