import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'work', name: 'Work' },
  { id: 'personal', name: 'Personal' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const category = state.find(cat => cat.id === id);
      if (category) category.name = name;
    },
    deleteCategory: (state, action) => {
      return state.filter(cat => cat.id !== action.payload);
    },
  },
});

export const {
  addCategory,
  editCategory,
  deleteCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;