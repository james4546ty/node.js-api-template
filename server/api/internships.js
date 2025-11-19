const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const result = await db.query('SELECT id, title, skills_required, description, category, created_at FROM internships ORDER BY id ASC');
    res.json({ internships: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch internships' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT id, title, skills_required, description, category, created_at FROM internships WHERE id=$1', [req.params.id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ internship: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch internship' });
  }
});

router.get('/category/:category', async (req, res) => {
  try {
    const result = await db.query('SELECT id, title, skills_required, description, category, created_at FROM internships WHERE LOWER(category)=LOWER($1)', [req.params.category]);
    res.json({ internships: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to filter internships' });
  }
});

router.post('/:id/apply', async (req, res) => {
  // Optional: track application clicks
  try {
    const { email } = req.body;
    await db.query('INSERT INTO application_clicks (internship_id, email) VALUES ($1, $2)', [req.params.id, email || null]);
    res.json({ ok: true });
  } catch (err) {
    // If tracking table not present, ignore
    res.json({ ok: true });
  }
});

module.exports = router;