const express = require('express');
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const { Resend } = require('resend');
const db = require('../db');
const { signToken } = require('../utils/jwt');

const router = express.Router();
const resendKey = process.env.RESEND_API_KEY || '';
const resend = resendKey ? new Resend(resendKey) : null;

const setAuthCookie = (res, token) => {
  const isProd = process.env.NODE_ENV === 'production';
  const secure = (process.env.COOKIE_SECURE || '').toLowerCase() === 'true' || isProd;
  const domain = process.env.COOKIE_DOMAIN || undefined;

  res.setHeader('Set-Cookie', cookie.serialize('token', token, {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
    domain
  }));
};

router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existing = await db.query('SELECT id FROM users WHERE email=$1', [email]);
    if (existing.rowCount > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const result = await db.query(
      'INSERT INTO users (name, email, phone, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, name, email, phone, created_at',
      [name, email, phone, password_hash]
    );
    const user = result.rows[0];

    const token = signToken({ id: user.id, email: user.email, name: user.name });
    setAuthCookie(res, token);

    // Send welcome email (optional, only if API key configured)
    if (resend) {
      try {
        const from = process.env.RESEND_FROM || 'onboarding@resend.dev';
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173';
        const { id } = await resend.emails.send({
          from,
          to: email,
          subject: 'Welcome to Entrepreneurship Network! 🚀',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                           color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                  .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .button { display: inline-block; background: #667eea; color: white;
                           padding: 12px 30px; text-decoration: none; border-radius: 5px;
                           margin-top: 20px; }
                  .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Welcome to Entrepreneurship Network!</h1>
                  </div>
                  <div class="content">
                    <h2>Hi ${user.name},</h2>
                    <p>We're thrilled to have you join our community of aspiring tech professionals!</p>
                    <p>Your journey towards an exciting internship starts here. With Entrepreneurship Network, you'll have access to:</p>
                    <ul>
                      <li>24+ Technology Internship Opportunities</li>
                      <li>Industry-Leading Companies</li>
                      <li>Real-World Project Experience</li>
                      <li>Career Growth & Mentorship</li>
                    </ul>
                    <p><strong>Ready to start your internship search?</strong></p>
                    <a href="${appUrl}/internships" class="button">Browse Internships</a>
                    <p style="margin-top: 30px;">If you have any questions, feel free to reach out to our support team.</p>
                    <p>Best regards,<br>The Entrepreneurship Network Team</p>
                  </div>
                  <div class="footer">
                    <p>© 2024 Entrepreneurship Network. All rights reserved.</p>
                  </div>
                </div>
              </body>
            </html>
          `
        });
        if (!id) {
          console.warn('Resend did not return an email id (check domain verification and API key)');
        }
      } catch (e) {
        console.warn('Resend email failed:', e?.message);
      }
    } else {
      console.warn('RESEND_API_KEY not configured, skipping welcome email');
    }

    return res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await db.query('SELECT id, name, email, phone, password_hash FROM users WHERE email=$1', [email]);
    if (result.rowCount === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = result.rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken({ id: user.id, email: user.email, name: user.name });
    setAuthCookie(res, token);

    return res.json({ user: { id: user.id, name: user.name, email: user.email, phone: user.phone } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.post('/logout', async (_req, res) => {
  res.clearCookie('token', { path: '/' });
  return res.json({ message: 'Logged out' });
});

router.get('/me', async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const result = await db.query('SELECT id, name, email, phone, created_at FROM users WHERE id=$1', [decoded.id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'User not found' });
    return res.json({ user: result.rows[0] });
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;