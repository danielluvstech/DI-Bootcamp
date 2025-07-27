import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store';

export default function TaskList({ onEdit }) {
  const dispatch = useDispatch();
  const { selectedDate, tasksByDate } = useSelector(state => state.tasks);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <div>
      {tasks.length === 0 && <p>No tasks for this day.</p>}
      {tasks.map(task => (
        <div key={task.id} className="flex items-center gap-2">
          <span>{task.text}</span>
          <button onClick={() => onEdit(task)}>✏️ Edit</button>
          <button onClick={() => dispatch(deleteTask({ date: selectedDate, id: task.id }))}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
}