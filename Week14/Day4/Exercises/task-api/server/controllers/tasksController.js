const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/tasks.json');

const readTasks = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

exports.getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks' });
  }
};

exports.getTaskById = (req, res) => {
  try {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving task' });
  }
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const tasks = readTasks();
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description,
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

exports.updateTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    tasks[index] = { id: tasks[index].id, title, description };
    writeTasks(tasks);
    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

exports.deleteTask = (req, res) => {
  try {
    let tasks = readTasks();
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    tasks.splice(index, 1);
    writeTasks(tasks);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};
