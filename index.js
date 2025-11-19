require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./server/api/auth');
const internshipsRoutes = require('./server/api/internships');
const userRoutes = require('./server/api/user');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173';

app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/auth', authLimiter);

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/internships', internshipsRoutes);
app.use('/api/user', userRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Entrepreneurship Network API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
