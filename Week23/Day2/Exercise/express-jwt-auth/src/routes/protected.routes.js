const router = require('express').Router();
const { authRequired } = require('../middleware/auth');
const { updateProfile } = require('../services/user.service');

router.get('/me', authRequired, (req, res) => {
  res.json({ ok: true, user: req.user });
});

router.patch('/me/profile', authRequired, async (req, res) => {
  try {
    const updated = await updateProfile(req.user.id, req.body || {});
    res.json({ ok: true, user: updated });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;