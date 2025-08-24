const { verifyAccess } = require('../services/token.service');

function authRequired(req, res, next) {
  try {
    // Access token from cookie or Authorization header
    const token = req.cookies?.access_token
      || (req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.slice(7) : null);

    if (!token) return res.status(401).json({ error: 'UNAUTHORIZED' });

    const payload = verifyAccess(token);
    req.user = { id: payload.sub, username: payload.username };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'INVALID_OR_EXPIRED_TOKEN' });
  }
}

module.exports = { authRequired };