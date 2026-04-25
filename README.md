# Nufferton Demo

A minimal Next.js 15 starter — set up to deploy as a static site to GitHub Pages.

This is intentionally bare bones so you can verify each piece works before
adding more. No styling beyond a few lines of CSS, no products, no fancy
features. Once it's running and deployed, you build on top.

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you should see the page.

> Next.js uses port **3000** by default (not 5173 like Vite).

---

## Deploy to GitHub Pages

### One-time setup

1. **Create a new repo on GitHub** named `nufferton-demo`
   *(if you use a different name, see "Renaming" below)*

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/nufferton-demo.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

That's it. The workflow in `.github/workflows/deploy.yml` will run on every
push to `main`, build the site, and publish it.

### Every deploy after that

```bash
git add .
git commit -m "your message"
git push
```

Live at: `https://YOUR_USERNAME.github.io/nufferton-demo/`

---

## Renaming the repo

If you don't name your repo `nufferton-demo`, you need to update **one line**
in `next.config.ts`:

```ts
const repoName = "your-actual-repo-name";
```

The dev server doesn't care — this only affects production builds. If you ever
host this on a custom domain or at the root of `username.github.io`, change
`repoName` to an empty string.

---

## Project structure

```
nufferton-demo/
├── .github/workflows/deploy.yml   # GitHub Pages deploy
├── public/.nojekyll               # tells GH Pages not to use Jekyll
├── src/app/
│   ├── layout.tsx                 # root HTML wrapper
│   ├── page.tsx                   # the home page (edit me!)
│   └── globals.css                # global styles
├── next.config.ts                 # Next.js + static export config
├── tsconfig.json
└── package.json
```

---

## What's next

This starter intentionally has nothing in it. Suggested next steps in order:

1. Verify `npm run dev` works
2. Verify it deploys to GitHub Pages
3. Add a product grid (hardcoded data first)
4. Add a `/products/[slug]` dynamic route for product detail pages
5. Move product data into a `lib/products.ts` mock
6. (Later) Replace mock with a real Crystallize GraphQL fetch
