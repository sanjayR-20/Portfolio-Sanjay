# Sanjay Portfolio

Premium one-page portfolio built with Next.js, Tailwind CSS, Framer Motion, and Lucide React.

## Run Locally

1. Install Node.js 18+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Content Editing

Most content is centralized in:

- `src/lib/portfolio-data.ts`

GitHub project/profile data is fetched live via:

- `src/lib/github.ts`
