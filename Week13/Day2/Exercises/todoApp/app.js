import { TodoList } from './todo.js';

const myTodos = new TodoList();

// Add tasks
myTodos.addTask("Buy groceries");
myTodos.addTask("Do some laundry");
myTodos.addTask("Finish coding homework");

// Mark some tasks as complete
myTodos.markComplete(1);

// List all tasks
myTodos.listTasks();