export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
    console.log(`Added: "${task}"`);
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
      console.log(`Marked complete: "${this.tasks[index].task}"`);
    } else {
      console.log(`Task at index ${index} not found.`);
    }
  }

  listTasks() {
    console.log("\nTodo List:");
    this.tasks.forEach((t, i) => {
      const status = t.completed ? "✅" : "❌";
      console.log(`${i}: ${t.task} ${status}`);
    });
  }
}