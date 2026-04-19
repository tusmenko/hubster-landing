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

## Source export

The original WordPress save is kept as `hubster — IT Services and IT Consulting.html` for reference.
