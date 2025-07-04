const express = require('express');
const app = express();
const tasksRoutes = require('./server/routes/tasksRoutes');

app.use(express.json());
app.use('/tasks', tasksRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
