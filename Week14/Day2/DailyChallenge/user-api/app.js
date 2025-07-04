const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./server/routes/usersRoutes');

app.use(express.json());
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
