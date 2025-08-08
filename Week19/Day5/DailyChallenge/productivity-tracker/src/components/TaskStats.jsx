import React from 'react';
import { useSelector } from 'react-redux';

const TaskStats = () => {
  const tasks = useSelector((state) => state.tasks);
  const completed = tasks.filter(task => task.completed).length;

  return (
    <div style={{ marginTop: '1rem' }}>
      ✅ Completed Tasks: <strong>{completed}</strong> / {tasks.length}
    </div>
  );
};

export default TaskStats;