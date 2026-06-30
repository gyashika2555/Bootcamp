# login/signup — Login/Signup Full Stack App

A premium light-theme authentication app: Node/Express backend + React (Vite) frontend.

## Structure
```
project/
  backend/    Express + JWT + bcrypt API
  frontend/   React (Vite) UI
```

## Run the backend
```
cd backend
npm install
npm run dev      # nodemon, http://localhost:8888
```
Endpoints (base `/pages`):
- `POST /pages/register` — { name, email, password }
- `POST /pages/login` — { email, password }
- `GET /pages/dashboard` — requires `Authorization: Bearer <token>`

Note: users are stored in memory and reset whenever the server restarts.

## Run the frontend
```
cd frontend
npm install
cp .env.example .env   # optional, defaults to http://localhost:8888/pages
npm run dev             # http://localhost:5173
```

## What's inside
- Split-screen auth layout (Login/Signup) with a custom "ledger card" signature illustration
- JWT stored client-side, attached to protected requests
- Dashboard re-verifies the token against the backend on load
- Light, premium palette (ivory background, deep navy ink, muted gold accent), Fraunces + Inter type pairing
