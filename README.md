# KidsTown Conversion

## What This Repo Is
A browser-based JavaScript reimplementation of the original KidsTown website — a children's literacy site that historically ran on server-based Perl CGI. This repo carries over static assets from the original site as-is and rebuilds the interactive locations using client-side JavaScript, removing the server-side dependency.

## Team Information
- Alizah Saqib
- Landry Vewenda
- Ahmed Agina

## Assignment Goal
Migrate the KidsTown website from server-based CGI to browser-based JavaScript. Static assets (graphics, data files, README, etc.) are being carried over directly, but the 9 interactive locations (Home, City Hall, City Park, Library, Museum, School, Township, Toy Store, and Zoo) — currently driven by Perl CGI scripts — must be rebuilt as client-side JavaScript, preserving each location's original content and behavior with no server-side dependency.

## Repo Structure
- `index.html` — the SPA's single entry point
- `js/router.js` — reads the URL hash and renders the matching location into `#app`
- `js/navbar.js` — builds the shared nav bar
- `js/locations/*.js` — one file per location, each registering itself on `KidsTown.locations`
- `css/style.css` — shared styles
- `graphics/`, `data/` — static assets carried over from the original CGI repo, unchanged
- See `ARCHITECTURE.md` for how each of these maps back to the original CGI's files

## How to Run It
This is a static site, no build step or dependencies. Either:
- Open `index.html` directly in a browser, or
- Serve the repo locally (e.g. `python3 -m http.server`) and visit it in a browser

## Status
- Done: Home, City Hall, City Park, Museum, Library, School,Township, Toy Store, Zoo

## AI Resources and Usage

### Giving the AI Context
> Act as a peer teammate. Do not act as a project manager, consultant, instructor, or solution generator unless explicitly asked. Avoid taking ownership of the conversation or producing detailed plans unprompted.
>
> We're converting an old website called KidsTown from server-based CGI to browser-based JavaScript for a class assignment. The original repo (CGI version) is at https://github.com/MetroCS/kidstown_cgi and the new repo (JS version, in progress) is at https://github.com/asaqib1/kidstown. The original uses a single CGI entry script (`cgi-bin/kt.cgi`, driven by `kt.ini`) that dispatches to per-location Perl scripts under `scripts/` to render pages and handle interactivity. We're moving static assets (graphics, data files, README, etc.) over as-is, but rebuilding the 9 interactive locations — Home, City Hall, City Park, Library, Museum, School, Township, Toy Store, and Zoo — as client-side JavaScript, preserving each one's original content, look, and behavior with no server dependency.
