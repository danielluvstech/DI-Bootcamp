import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../store';
import { useState } from 'react';

export default function TaskForm({ taskToEdit, clearEdit }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);
  const [taskText, setTaskText] = useState(taskToEdit ? taskToEdit.text : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    if (taskToEdit) {
      dispatch(editTask({ date: selectedDate, id: taskToEdit.id, updatedText: taskText }));
      clearEdit();
    } else {
      dispatch(addTask({ date: selectedDate, task: taskText }));
    }
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="border p-1"
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
      {taskToEdit && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
}
