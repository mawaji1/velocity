# SEU Velocity — Deployment Guide

Static site built with Astro. Deploys as a subpath under the existing accelerator domain.

- **Production URL:** `https://sportstechaccelerator.seu.edu.sa/velocity`
- **Arabic (default):** `/velocity/ar`
- **English:** `/velocity/en`
- **Build output:** `dist/` (pure static HTML/CSS/JS)

---

## 1. Build locally

```bash
cd velocity-site
npm install      # first time only
npm run build
```

Output goes to `velocity-site/dist/`.

## 2. Upload to the server

Copy the contents of `dist/` to a directory on the nginx server, e.g. `/var/www/velocity/`:

```bash
# from your machine
rsync -avz --delete dist/ user@server:/var/www/velocity/
```

(Replace `user@server` with the real SSH target.)

## 3. nginx configuration

Inside the existing `server { ... }` block for `sportstechaccelerator.seu.edu.sa`, add:

```nginx
location /velocity/ {
    alias /var/www/velocity/;
    index index.html;
    try_files $uri $uri/ $uri/index.html =404;
}

# (Optional) redirect bare /velocity to the Arabic default
location = /velocity {
    return 301 /velocity/ar;
}
```

Then reload nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 4. Verify

Open:
- `https://sportstechaccelerator.seu.edu.sa/velocity/ar`
- `https://sportstechaccelerator.seu.edu.sa/velocity/en`

---

## Common gotchas

- **Asset paths:** everything is already prefixed with `/velocity/` (via Astro's `base` setting in `astro.config.mjs`). Do **not** change the base without rebuilding.
- **Routing:** this is a static site — no Node/PM2 needed on the server. nginx serves files directly.
- **Cache busting:** Astro fingerprints asset filenames automatically. HTML has no hash; set a short cache-control for `.html` if you need faster propagation:

  ```nginx
  location ~* \.(html)$ {
      add_header Cache-Control "no-cache";
  }
  ```

- **SSL/HSTS:** inherited from the main `server` block. Nothing to change.

## Project structure

```
velocity-site/
  astro.config.mjs      # base: '/velocity'
  src/
    i18n/content.ts     # all AR/EN copy
    layouts/Base.astro  # <html>, <head>, fonts
    components/*.astro  # Hero, Tracks, Journey, ...
    pages/
      index.astro       # → redirects to /ar
      ar/index.astro
      en/index.astro
    styles/global.css   # tokens + Tailwind
  public/
    seulogo.svg, favicon.ico, og-image.jpg
  dist/                 # ← upload this
```

## Updating content

Edit `src/i18n/content.ts` — all copy lives there. Rebuild with `npm run build` and re-upload.
