import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion } from '../features/tasks/tasksSlice';

const TaskList = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) =>
    selectedCategory
      ? state.tasks.filter((task) => task.category === selectedCategory)
      : state.tasks
  );

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTaskCompletion(task.id))}
          />
          <span style={{ marginLeft: '8px', textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;