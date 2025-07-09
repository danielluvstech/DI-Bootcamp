import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 2 },
    { name: "Python", votes: 4 },
    { name: "JavaSript", votes: 5 },
    { name: "Java", votes: 1 }
  ]);

  const voteLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      {languages.map((lang, index) => (
        <div className="vote-box" key={index}>
          <span>{lang.votes}</span>
          <span>{lang.name}</span>
          <button onClick={() => voteLanguage(index)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;

