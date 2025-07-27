import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    selectedDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    tasksByDate: {}
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({ id: Date.now(), text: task });
    },
    editTask: (state, action) => {
      const { date, id, updatedText } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const task = tasks.find(t => t.id === id);
        if (task) task.text = updatedText;
      }
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      if (state.tasksByDate[date]) {
        state.tasksByDate[date] = state.tasksByDate[date].filter(t => t.id !== id);
      }
    }
  }
});

export const { setSelectedDate, addTask, editTask, deleteTask } = tasksSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer
  }
});