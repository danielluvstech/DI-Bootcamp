const bcrypt = require('bcrypt');

// In-memory users: replace with real DB later
const users = []; // { id, username, passwordHash, profile: {...} }
let seq = 1;

async function createUser({ username, password }) {
  const exists = users.find(u => u.username === username.toLowerCase());
  if (exists) throw new Error('USERNAME_TAKEN');
  const passwordHash = await bcrypt.hash(password, 12);
  const user = { id: String(seq++), username: username.toLowerCase(), passwordHash, profile: { bio: '' } };
  users.push(user);
  return { id: user.id, username: user.username };
}

async function verifyUser({ username, password }) {
  const user = users.find(u => u.username === username.toLowerCase());
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}

async function updateProfile(userId, patch) {
  const user = users.find(u => u.id === userId);
  if (!user) throw new Error('NOT_FOUND');
  user.profile = { ...user.profile, ...patch };
  return { id: user.id, username: user.username, profile: user.profile };
}

module.exports = { createUser, verifyUser, updateProfile };