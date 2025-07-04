const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const filePath = path.join(__dirname, '../data/users.json');

const readUsers = () => JSON.parse(fs.readFileSync(filePath, 'utf-8'));
const writeUsers = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

exports.getAllUsers = (req, res) => {
  try {
    const users = readUsers();
    res.json(users);
  } catch {
    res.status(500).json({ error: 'Failed to read users' });
  }
};

exports.getUserById = (req, res) => {
  try {
    const users = readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ error: 'User not found' });
  } catch {
    res.status(500).json({ error: 'Failed to get user' });
  }
};

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const users = readUsers();

    const userExists = users.some(
      (u) => u.username === username || u.email === email
    );

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      firstName,
      lastName,
      email,
      username,
      password: hashPassword
    };

    users.push(newUser);
    writeUsers(users);
    res.status(201).json({ message: 'register' });
  } catch {
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const users = readUsers();
    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: `Hi ${user.firstName} welcome back!` });
  } catch {
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.updateUser = (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const users = readUsers();
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'User not found' });

    users[index] = { ...users[index], firstName, lastName, email };
    writeUsers(users);
    res.json(users[index]);
  } catch {
    res.status(500).json({ error: 'Update failed' });
  }
};
