import { useMemo } from 'react';
import { handleData } from './handleData';
import type { User, Product, Order } from './types'; // ✅ type-only

// Optional: define a local union so you don't need Entity at all
type Entity = User | Product | Order;

function App() {
  const data: (Entity | unknown)[] = [
    { type: 'user', name: 'Leah', age: 28 },
    { type: 'product', id: 101, price: 59.99 },
    { type: 'order', orderId: 'ORD-9A2', amount: 149.5 },
    { type: 'user', name: 'Bad User (missing age)' }, // malformed
    { foo: 'bar' },
    'just a string',
  ];

  const messages = useMemo(() => handleData(data), [data]);

  return (
    <main>
      <h1>Type Guard Demo</h1>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </main>
  );
}

export default App;
