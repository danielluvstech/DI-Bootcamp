import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const AddTask = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !selectedCategory) return;

    dispatch(addTask({
      id: Date.now(), // simple unique id
      title,
      category: selectedCategory,
      completed: false
    }));

    setTitle('');
  };

  const categories = useSelector(state => state.categories);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <button type="submit" disabled={!selectedCategory}>Add Task</button>
      {!selectedCategory && (
        <div style={{ color: 'red', marginTop: '5px' }}>
          Please select a category before adding a task.
        </div>
      )}
    </form>
  );
};

export default AddTask;