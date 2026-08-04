# THE ONLY ALONSO Portfolio

A responsive single-page marketing portfolio prepared for GitHub Pages.

## Files

- `index.html` — main portfolio
- `styles.css` — all design and responsive styles
- `script.js` — burger menu and current footer year
- `comun-ati.html` — placeholder project page
- `assets/` — replaceable logo, profile, project image, and favicon placeholders

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`, then save.

## Replace the assets

Keep the same filenames to replace them without editing the HTML:

- `assets/logo-placeholder.svg`
- `assets/profile-placeholder.svg`
- `assets/project-placeholder.svg`
- `assets/favicon.svg`

PNG, JPG, or WebP files can also be used, but update the corresponding `src` in `index.html`.

## Neue Montreal

The CSS uses Neue Montreal when it is installed on the visitor's device, then falls back to Helvetica/Arial. To use your licensed webfont, place the font files in `assets/fonts/` and update the `@font-face` rule in `styles.css`.

## Contact form

The form currently points to:

`https://formspree.io/f/your-form-id`

Create a Formspree form and replace `your-form-id`. You can also connect another form service later.

## Phone

Replace both instances of the placeholder phone in the footer link:

`tel:+520000000000`

## Color note

The supplied value `#2f5f4f2` is not a valid hex color. This project uses `#2f5f42` as the forest-green accent. Change `--forest` in `styles.css` if a different color was intended.
