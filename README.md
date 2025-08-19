# MIBUG CREDIT Frontend

This project uses Vite for development and build, and an Express server to serve the production build.

## Quick start

- Install dependencies:
  - `npm install`
- Development server (Vite):
  - `npm run start:dev`
  - Open http://localhost:3000
- Production build:
  - `npm run build`
- Serve production build with Express:
  - `npm start`
  - Default port: 5000 (set `PORT` env to change)

## Scripts

- `start:dev` — start Vite dev server on port 3000
- `build` — Vite production build to the `build/` directory
- `preview` — Vite static preview server (optional)
- `start` — Express server serving `build/` (respects `PORT`, defaults to 5000)
- `lint` / `lint:fix` — ESLint

## Environment variables

The app expects the following variables:

- `REACT_APP_BASE_URL` — backend API base URL
- `REACT_APP_AUTH_TOKEN` — API token

For local development, create a `.env` file in the project root, e.g.:

```
REACT_APP_BASE_URL=https://api.example.com
REACT_APP_AUTH_TOKEN=your-token
```

Vite exposes only the variables configured in `vite.config.ts` (we map the two above). Use `import.meta.env` for new keys.

## SVGs as React components

Vite + vite-plugin-svgr allow importing SVGs as React components using the `?react` suffix:

```
import Logo from './icons/logo.svg?react'

<Logo />
```

Existing CRA-style imports have been updated accordingly.

## Production notes

- Express forces HTTPS only when behind a proxy that sets `x-forwarded-proto`
- Build output remains in `build/` for compatibility

## Security status

After upgrades and migration, `npm audit` shows only 1 Low advisory (non-production-impacting). Keep dependencies up to date by running:

```
npm audit
npm audit fix
```
