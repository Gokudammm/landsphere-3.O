# LandSphere — Vercel-ready project

This repository contains the LandSphere frontend and Express backend in one project.

## Structure
- `index.html` — frontend entry point
- `api/index.js` — Vercel serverless entry point
- `backend/src/routes/` — API route modules
- `backend/src/middleware/authMiddleware.js` — authentication middleware
- `backend/src/routes/authRoutes.js` — authentication routes
- `backend/src/models/` — MongoDB models
- `backend/src/services/aiAssistant.js` — prototype land-governance AI assistant
- `vercel.json` — Vercel routing configuration
- `package.json` — root deployment dependencies

The authentication middleware and authentication route deliberately have different filenames to avoid confusion.

## Vercel
Import the GitHub repository and leave **Root Directory** at the repository root (`./`). Do not set it to `backend`.

Add these environment variables in Vercel when using the corresponding features:
- `MONGODB_URI`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

The prototype UI can load without Firebase credentials. Database-backed API calls require `MONGODB_URI`.

All sample land records in this prototype are fictional.
