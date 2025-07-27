import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './todoReducer';

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});