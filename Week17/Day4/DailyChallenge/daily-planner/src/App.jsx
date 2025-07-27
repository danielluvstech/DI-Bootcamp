import { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">📅 Daily Planner</h1>
      <DatePicker />
      <TaskForm 
        taskToEdit={taskToEdit} 
        clearEdit={() => setTaskToEdit(null)} 
      />
      <TaskList onEdit={(task) => setTaskToEdit(task)} />
    </div>
  );
}
