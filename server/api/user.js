const express = require('express');
const db = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/profile', auth, async (req, res) => {
  try {
    const result = await db.query('SELECT id, name, email, phone, created_at, updated_at FROM users WHERE id=$1', [req.user.id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

router.put('/profile', auth, async (req, res) => {
  try {
    const { name, phone } = req.body;
    const result = await db.query(
      'UPDATE users SET name=$1, phone=$2, updated_at=NOW() WHERE id=$3 RETURNING id, name, email, phone, created_at, updated_at',
      [name, phone, req.user.id]
    );
    res.json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

module.exports = router;