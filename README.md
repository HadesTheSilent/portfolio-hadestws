# Portfolio Hadestws

Portfolio com tema cyberpunk listando repositórios do GitHub.

## Setup

```bash
cd site
npm install
npm run dev
```

## Build

```bash
cd site
npm run build
```

## Deploy

Site: [https://portfolio-hadestws.vercel.app](https://portfolio-hadestws.vercel.app)

Deployment automático via GitHub Actions em cada push para `main`.

## Stack

- Vite + React + TypeScript
- GitHub API
- Vercel + GitHub Actions

## Segurança

GitLeaks configurado para detectar secrets em commits.

```bash
gitleaks detect --source . --verbose
```
