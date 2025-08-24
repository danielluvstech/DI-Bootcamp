const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { createUser, verifyUser } = require('../services/user.service');
const { signAccessToken, signRefreshToken, verifyRefresh } = require('../services/token.service');
const { setAuthCookies, clearAuthCookies } = require('../services/security.service');
const { revoked } = require('../data/revokedRefreshTokens');

const usernameRules = body('username').isString().trim().isLength({ min: 3, max: 50 });
const passwordRules = body('password').isString().isLength({ min: 8 });

router.post('/register', [usernameRules, passwordRules], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: 'VALIDATION', details: errors.array() });

  try {
    const user = await createUser(req.body);
    // auto-login on register (optional)
    const accessToken = signAccessToken(user);
    const { token: refreshToken } = signRefreshToken(user);
    setAuthCookies(res, { accessToken, refreshToken });
    return res.status(201).json({ ok: true, user });
  } catch (e) {
    const code = e.message === 'USERNAME_TAKEN' ? 409 : 400;
    return res.status(code).json({ error: e.message });
  }
});

router.post('/login', [usernameRules, passwordRules], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: 'VALIDATION', details: errors.array() });

  const user = await verifyUser(req.body);
  if (!user) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });

  const accessToken = signAccessToken(user);
  const { token: refreshToken, jti } = signRefreshToken(user);

  // (Optional) store active jti for rotation; here we just don’t put it in revoked
  setAuthCookies(res, { accessToken, refreshToken });
  res.json({ ok: true });
});

router.post('/refresh', (req, res) => {
  try {
    const refreshToken = req.cookies?.refresh_token;
    if (!refreshToken) return res.status(401).json({ error: 'NO_REFRESH_TOKEN' });

    const payload = verifyRefresh(refreshToken);
    if (revoked.has(payload.jti)) return res.status(401).json({ error: 'TOKEN_REVOKED' });

    // rotate: revoke old jti and issue new refresh
    revoked.add(payload.jti);

    const user = { id: payload.sub, username: 'unknown' }; // fetch username if needed from DB
    const accessToken = signAccessToken(user);
    const { token: newRefresh, jti: newJti } = signRefreshToken(user);

    setAuthCookies(res, { accessToken, refreshToken: newRefresh });
    res.json({ ok: true });
  } catch (e) {
    return res.status(401).json({ error: 'INVALID_REFRESH' });
  }
});

router.post('/logout', (req, res) => {
  // revoke presented refresh if present
  try {
    const refreshToken = req.cookies?.refresh_token;
    if (refreshToken) {
      const payload = verifyRefresh(refreshToken);
      revoked.add(payload.jti);
    }
  } catch (_) {}
  clearAuthCookies(res);
  res.json({ ok: true });
});

module.exports = router;