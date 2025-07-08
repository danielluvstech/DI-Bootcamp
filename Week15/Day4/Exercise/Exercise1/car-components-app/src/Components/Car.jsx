import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ carInfo }) => {
  const [color, setColor] = useState('Red');

  return (
    <div>
      <h2>This car is {color} {carInfo.model}</h2>
      {/* Part II - optional color change button */}
      {/*<button onClick={() => setColor('Blue')}>Change Color</button> */}
      
      {/* Part III - integrate Garage component */}
      <Garage size="small" />
    </div>
  );
};

export default Car;