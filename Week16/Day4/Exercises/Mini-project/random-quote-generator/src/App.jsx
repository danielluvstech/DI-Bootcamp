import { useState } from 'react';
import quotes from './QuotesDatabase';
import './index.css';

const getRandomIndex = (exclude, length) => {
  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === exclude);
  return index;
};

const getRandomColor = () => {
  const colors = ['#16a085', '#e74c3c', '#2980b9', '#8e44ad', '#f39c12', '#2c3e50'];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [color, setColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(quoteIndex, quotes.length);
    setQuoteIndex(newIndex);
    setColor(getRandomColor());
  };

  const { quote, author } = quotes[quoteIndex];

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="quote-box">
        <h1 style={{ color }}>"{quote}"</h1>
        <p>- {author}</p>
        <button style={{ backgroundColor: color }} onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;

