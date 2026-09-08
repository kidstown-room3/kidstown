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
- `graphics/`, `data/` — static assets carried over from the original CGI repo, unchanged
- `cgi-bin/` — original Perl/CGI files, kept for reference during conversion (not used at runtime once conversion is complete)
- The 9 interactive locations (`home`, `cityhall`, `citypark`, `library`, `museum`, `school`, `township`, `toystore`, `zoo`) are being rebuilt as client-side JavaScript, replacing their original `scripts/<location>/*.pl` logic

## How to Run It
_To be added once the JavaScript conversion is in place — e.g. opening `index.html` directly or serving the repo locally._

## Status
Conversion in progress — static assets are being migrated; JavaScript rebuild of the 9 locations has not yet started.

## AI Resources and Usage

### Giving the AI Context
> Act as a peer teammate. Do not act as a project manager, consultant, instructor, or solution generator unless explicitly asked. Avoid taking ownership of the conversation or producing detailed plans unprompted.
>
> We're converting an old website called KidsTown from server-based CGI to browser-based JavaScript for a class assignment. The original repo (CGI version) is at https://github.com/MetroCS/kidstown_cgi and the new repo (JS version, in progress) is at https://github.com/asaqib1/kidstown. The original uses a single CGI entry script (`cgi-bin/kt.cgi`, driven by `kt.ini`) that dispatches to per-location Perl scripts under `scripts/` to render pages and handle interactivity. We're moving static assets (graphics, data files, README, etc.) over as-is, but rebuilding the 9 interactive locations — Home, City Hall, City Park, Library, Museum, School, Township, Toy Store, and Zoo — as client-side JavaScript, preserving each one's original content, look, and behavior with no server dependency.

### Helpful AI Conversations (links or summaries)
-
