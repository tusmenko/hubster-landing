# hubster static landing

Single static page. **Tailwind is compiled ahead of time** into [`styles.css`](styles.css) and that file is **committed**, so deploys and `python3 -m http.server` need **no** Node, no CDN, and no build on the server.

## Regenerating CSS (when you change markup or `src/input.css`)

After editing [`index.html`](index.html) (Tailwind classes) or [`src/input.css`](src/input.css) (theme or `@layer` components):

```bash
yarn install
yarn build:css
```

Then commit the updated `styles.css`. You only need `yarn install` again when dependencies change.

While iterating on styles, you can run `yarn watch:css` in another terminal.

## Local preview

```bash
python3 -m http.server 8080
```

## Deploy

Ship the repo root as a static site: `index.html`, `styles.css`, `main.js`, and `assets/`. No install step on the host.

### GitHub Pages

1. In the GitHub repo, go to **Settings → Pages → Build and deployment**.
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch” unless you mirror the built site yourself).
3. Push to **`main`**: the workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs `yarn install`, `yarn build:css`, copies `index.html`, `styles.css`, `main.js`, `assets/`, and `arch/` into the published artifact, and deploys it.

The site URL will be **`https://tusmenko.github.io/hubster-landing/`** (project Pages). Logo links use `./` so they resolve under that base path, not the domain root.

## Source export

The original WordPress save and its saved `_files` assets live under [`arch/`](arch/) (same relative paths as when exported, so that HTML still loads its scripts next to it).
