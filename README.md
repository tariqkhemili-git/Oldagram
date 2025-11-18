# Oldagram

Oldagram is a simple, lightweight Instagram-style feed built with plain HTML, CSS and vanilla JavaScript. It demonstrates layout, fixed header behavior, accessibility options, and dynamic DOM rendering for a responsive, single-page feed.

## Features

- Clean, mobile-friendly layout with a fixed header and centered content
- Dynamic post generation from a JavaScript array (`script.js`), rendering `.post` elements into `main#main`
- Accessible images and actions (alt text and `aria-label` on buttons)
- Minimal, dependency-free project that's easy to customize for learning or small demos

## Demo / Preview

Open `index.html` in your browser to view the app. Because this is a static site, you can simply open the file or serve it from a local HTTP server.

## Getting Started

1. Clone the repository:

```bash
git clone <repo-url>
cd oldagram
```

2. Open `index.html` in your browser or serve it locally for a better dev experience:

```bash
# Python 3
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## Project Structure

- `index.html` — Main HTML containing the layout and header. The page markup includes the header and a `main#main` container for posts.
- `styles.css` — Styling, layout and the fixed header implementation with a `--header-height` CSS variable.
- `script.js` — Generates and injects posts into `main#main` using the `posts` array.
- `images/` — Contains avatars, logo and post images used throughout the demo.

## How the JS works

The `script.js` file contains a `posts` array holding simple objects with `name`, `username`, `location`, `avatar`, `post`, `comment`, and `likes` fields. The script:

1. Ensures `main#main` exists (creating it if necessary).
2. Clears any existing posts in `main#main` so the script's dynamic rendering doesn't duplicate the static markup.
3. Loops through the `posts` array to generate HTML for each post with the same structure and classes used in `index.html`.
4. Applies `id="last-post"` to the last generated `.post` element to match the static HTML structure.

Edit the `posts` array to add, remove or update posts.

## Fixed header and layout

The header is fixed using `position: fixed` in `styles.css`. To prevent overlapping content, the site uses a CSS variable `--header-height`, defaulting to `35px`. If you change the header height, update this variable.

## Accessibility

- Images include `alt` attributes, and interactive buttons include `aria-labels` for screen readers.
- For keyboard support, buttons can be focused and triggered with Enter/Space.

## Customization

- Modify `styles.css` to change theme colors, spacing and layout.
- Edit `script.js` to change how posts are generated, or to fetch posts from an API instead of a static array.

## Contributing

This is a small learning/demo repository. Contributions are welcome.
