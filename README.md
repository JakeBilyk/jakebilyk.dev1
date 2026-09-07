# Jake Bilyk's personal website

Static personal engineering website, based on Astral by HTML5 UP.
Open index.html in a browser or serve this directory with any static web server.

## Editing

- index.html contains the intro, resume, projects, and GitHub contact panel.
- assets/css/main.css and noscript.css are the styles loaded by the page.
- assets/sass/main.scss and noscript.scss mirror those styles for Sass users;
  keep the matching CSS and SCSS files in sync when editing.
- assets/js/main.js handles native hash navigation and browser history.
- Keep the existing image assets and template attribution when updating content.

## Responsive refresh validation

Checked in headless Chrome at 320, 390, 736, 768, 1024, and 1440px:
all panels select correctly, unknown hashes fall back to Intro, all images load,
and the page has no horizontal overflow. With JavaScript disabled, all four
panels remain visible. Mobile and desktop intro screenshots were visually reviewed.
Resume images scale to the panel width and link to their full-resolution PNGs.
