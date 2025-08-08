import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import AddTask from './components/AddTask';
import TaskStats from './components/TaskStats';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 Productivity Tracker</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Filter by category: </label>
        <CategorySelector
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <AddTask selectedCategory={selectedCategory} />
      <TaskList selectedCategory={selectedCategory} />
      <TaskStats />
    </div>
  );
}

export default App;