const db = require('../config/db');
const bcrypt = require('bcrypt');

// Register
exports.register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    await db.transaction(async trx => {
      await trx('users').insert({ email, username, first_name, last_name });
      await trx('hashpwd').insert({ username, password: hash });
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db('hashpwd').where({ username }).first();
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Incorrect password' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db('users');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db('users').where({ id }).first();
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_name } = req.body;

  try {
    const updated = await db('users').where({ id }).update({ email, username, first_name, last_name });
    if (!updated) return res.status(404).json({ error: 'User not found' });

    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
};
