import React, { useState, useEffect } from 'react';

const Color = () => {
  // State variable with initial value "red"
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect hook - runs after component renders
  useEffect(() => {
    alert("useEffect reached");
  });

  // Function to change favorite color to blue
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Color;