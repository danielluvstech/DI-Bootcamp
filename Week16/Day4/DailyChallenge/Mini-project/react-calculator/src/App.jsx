import { useState } from 'react';
import './index.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    const result = Number(num1) + Number(num2);
    setSum(result);
  };

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={handleAddition}>Add Them</button>
      {sum !== null && <h2>Result: {sum}</h2>}
    </div>
  );
}

export default App;

