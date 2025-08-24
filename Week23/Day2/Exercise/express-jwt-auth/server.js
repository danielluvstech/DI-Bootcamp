// server.js
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');

const authRoutes = require('./src/routes/auth.routes');
const protectedRoutes = require('./src/routes/protected.routes');

const app = express();
app.use(express.json());
app.use(cookieParser()); // cookies for httpOnly JWTs

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

app.get('/', (_req, res) => res.send('API is up'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on :${port}`));