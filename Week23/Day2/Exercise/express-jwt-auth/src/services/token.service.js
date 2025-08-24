const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

function signAccessToken(user) {
  const payload = { sub: user.id, username: user.username };
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.ACCESS_TOKEN_TTL || '15m' });
}

function signRefreshToken(user) {
  // include jti so we can revoke/rotate
  const payload = { sub: user.id, jti: uuidv4() };
  const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_TTL || '7d' });
  return { token, jti: payload.jti };
}

function verifyAccess(token) {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
}

function verifyRefresh(token) {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
}

module.exports = { signAccessToken, signRefreshToken, verifyAccess, verifyRefresh };