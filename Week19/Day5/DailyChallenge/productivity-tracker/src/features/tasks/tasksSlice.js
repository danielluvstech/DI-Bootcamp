import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Write report', category: 'work', completed: false },
  { id: 2, title: 'Buy groceries', category: 'personal', completed: true },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.title = title;
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
} = tasksSlice.actions;

export default tasksSlice.reducer;