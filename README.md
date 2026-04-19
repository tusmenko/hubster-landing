# hubster static landing

WordPress-free single-page site: open `index.html` in a browser after serving the folder (recommended), or deploy the repository root as a static site.

## Local preview

From this directory:

```bash
npx --yes serve .
```

Then open the URL shown in the terminal (for example `http://localhost:3000`).

Alternatively:

```bash
python3 -m http.server 8080
```

## Deploy

Upload or connect the project root (the folder that contains `index.html`, `styles.css`, `main.js`, and `assets/`) to any static host, such as Vercel, Netlify, or Cloudflare Pages. No build step is required.

## Source export

The original saved WordPress page is kept as `hubster — IT Services and IT Consulting.html` for reference. The live site uses only `index.html` and the files linked from it.
