# Entrepreneurship Network – Internship Portal

A production-ready web application connecting students to technology internship opportunities.

## Tech Stack

- Frontend: React + TypeScript (Vite), Tailwind CSS, Framer Motion, AOS
- Backend: Node.js + Express
- Database: Neon PostgreSQL
- Email: Resend API
- Auth: JWT in httpOnly cookies

## Monorepo Structure

- `client/` – React frontend
- `index.js` – Express server entry
- `server/*` – API routes and utilities
- `migrations/*` – SQL migrations and seeding
- `.env.example` – environment template

## Environment Variables

Copy `.env.example` to `.env` and fill:

```
DATABASE_URL="postgresql://username:password@host/database"
RESEND_API_KEY="re_xxx"
JWT_SECRET="your-secure-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:5173"
COOKIE_SECURE="false"
COOKIE_DOMAIN=""
```

## Setup

1. Install dependencies

```
npm install
npm --prefix client install
```

2. Run database migrations and seed internships

```
npm run migrate
npm run seed
```

3. Start servers

- API: `npm run dev` (http://localhost:3000)
- Client: `npm run client:dev` (http://localhost:5173)

The client is configured to proxy `/api/*` to the API during development.

## API Endpoints

Auth
- `POST /api/auth/signup`
- `POST /api/auth/signin`
- `POST /api/auth/logout`
- `GET  /api/auth/me`

Internships
- `GET  /api/internships`
- `GET  /api/internships/:id`
- `GET  /api/internships/category/:category`

User
- `GET  /api/user/profile`
- `PUT  /api/user/profile`

## Security

- Password hashing (bcrypt, 10 rounds)
- JWT expiry: 7 days
- CORS locked to `NEXT_PUBLIC_APP_URL`
- Rate limiting on `/api/auth/*`
- Helmet for secure headers
- Cookies are httpOnly, secure in production

## Deployment

- Frontend: Vercel or Netlify
- Backend: Render/Fly.io/Node host
- Database: Neon PostgreSQL
- Set environment variables in platform settings
- Build client: `npm run client:build`

Serve the built client from a static host or configure your backend to serve `client/dist` in production (optional).

## Testing Checklist

- User registration flow works
- Welcome email sent after signup (Resend)
- Login/logout functionality
- Protected routes redirect to login
- Internships display and modal works
- Google Form opens with prefilled email
- Responsive design across devices
- Smooth animations
- Form validation and graceful errors
- Stable DB connections
