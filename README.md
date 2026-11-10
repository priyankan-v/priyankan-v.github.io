# Priyankan Vettivel

Personal engineering portfolio featuring robotics, embedded systems, computer vision, professional experience, and education.

Built with React and Vite. Includes responsive layouts, light and dark themes, project filtering, and accessible project dialogs.

## Development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The production files are written to `dist/` and can be deployed to any static host.

## Publish with GitHub Pages

The included `.github/workflows/deploy.yml` installs dependencies, builds the site, and deploys `dist/` whenever changes are pushed to `main`.

For the address `https://priyankan-v.github.io/`:

1. On GitHub, rename the repository to `priyankan-v.github.io` under **Settings → General**.
2. Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Update the local remote after renaming, then commit and push:

```sh
git remote set-url origin https://github.com/priyankan-v/priyankan-v.github.io.git
git add .
git commit -m "Publish engineering portfolio"
git push -u origin main
```

Check the repository's **Actions** tab for the deployment result. Once the workflow succeeds, open `https://priyankan-v.github.io/`. Later pushes to `main` publish updates automatically.

The current asset paths use the domain root. Use the repository name above for this setup. Hosting under a repository subpath requires updating Vite's base path and public image and favicon URLs.

## Content and styling

- `src/data/portfolio.js` — projects, experience, education, skills, and profile links.
- `src/App.jsx` — page structure and interactive features.
- `src/components/` — reusable components and project illustrations.
- `src/App.css` and `src/index.css` — layout, typography, and themes.
- `public/images/` — profile imagery.
- `public/favicon.svg` — vector PV monogram, with an ICO fallback.
- `index.html` — page title and metadata.

Typography uses Manrope and Source Sans 3, with system font fallbacks. Section entrances respect reduced-motion preferences. Project illustrations are conceptual; implementation details are available in the linked repositories.

## Project images

Place project photos or screenshots in `public/images/projects/`. Then set the corresponding project's fields in `src/data/portfolio.js`:

```js
image: '/images/projects/sawyer.jpg',
imageAlt: 'Sawyer robot arm motion-control setup',
```

Use `/images/projects/` in the URL, without the `public` prefix. PNG, JPEG, WebP, and SVG images are supported. The same image appears on the project card and in its details dialog. Cards crop images to fit; dialogs show the full image. Leave `image: null` to keep the conceptual illustration. Save the file to update the local preview.
