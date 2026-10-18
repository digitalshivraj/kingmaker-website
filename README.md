# kingmakerenterprises.in

Website of Kingmaker Enterprises, Parbhani. Static site built with Astro, published free on GitHub Pages.

- Pages: home, services (12), products (8) plus the full project list, government and GeM, about, blog, contact, privacy, terms.
- Content lives in `src/content/` (markdown) and `src/data/` (TypeScript). See `CONTENT_GUIDE.md` to add blog posts, services, products or projects.
- Every push to `main` runs `.github/workflows/deploy.yml`, builds the site and publishes it to GitHub Pages at the custom domain in `public/CNAME`.

## Run locally

```
npm install
npm run dev
```

## Deploy

Push to `main`. The GitHub Actions workflow does the rest. In the repository settings, Pages must be set to "GitHub Actions" as the source and the custom domain set to `kingmakerenterprises.in`.

## DNS at the domain registrar

| Type  | Host | Value                       |
| ----- | ---- | --------------------------- |
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |
| CNAME | www  | digitalshivraj.github.io    |

After the records propagate, turn on "Enforce HTTPS" in the Pages settings.
