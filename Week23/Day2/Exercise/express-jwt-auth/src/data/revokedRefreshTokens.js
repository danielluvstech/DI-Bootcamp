// naive in-memory revocation store; use a DB in production
const revoked = new Set(); // store jti values

module.exports = { revoked };