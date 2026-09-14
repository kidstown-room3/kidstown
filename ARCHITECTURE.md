# Architecture: CGI → SPA mapping

How the original Perl/CGI site's pieces map to this repo's JavaScript SPA.
Covers the shared infrastructure and the locations built so far (Home,
City Hall, City Park). Add a row here as each remaining location gets built.

## Dispatch / routing

| Original (CGI) | This repo (SPA) |
|---|---|
| `cgi-bin/kt.cgi` — reads a `KEY` query param, dispatches to a script | `js/router.js` — reads the URL hash, dispatches to a location |
| `cgi-bin/kt.ini` — config (script paths, graphics paths, etc.) | not needed — paths are just relative URLs (`graphics/...`) |
| `cgi-bin/kt.db` — table of `KEY` → script(s) to run for that page | `KidsTown.locations` — object each location registers itself on |
| A link: `kt.cgi?KEY=5010` | A link: `#cityhall/5010` |
| Sub-pages within a location, dispatched by their own `KEY` | Sub-routes: `#<location>/<subRoute>`, passed to that location's `render(container, subRoute)` |

## Shared UI

| Original | This repo |
|---|---|
| `scripts/home/navbar.pl` — prints the nav bar HTML on every page | `js/navbar.js` — renders the same nav bar into `#navbar` |
| Inline `<BODY BGCOLOR=...>` per page | `css/style.css`'s `body.loc-*` rules, toggled by `router.js` |

## Home (`scripts/home/*.pl` → `js/locations/home.js`)

| Original script | KEY | Rendered as |
|---|---|---|
| `mainPgHdr.pl`, `ktmap.pl`, `mainPgTxt.pl`, `mainPgFtr.pl` | 1000 | `#home` |
| `about.pl` | 1100 | `#about` |
| `participants.pl` | 1200 | `#participants` |
| `helphdr.pl`, `helptxt.pl` | 1010 | `#help` |

The image map's polygon coordinates in `ktmap.pl` were copied as-is into
`HOME_MAP_AREAS`, just pointed at hash routes instead of `KEY=` links.

## City Hall (`scripts/cityhall/*.pl` → `js/locations/cityhall.js`)

Every page's `KEY` from `cgi-bin/kt.db` became a key in `CITYHALL_NODES`, so
the routing is 1:1: `kt.cgi?KEY=5010` → `#cityhall/5010`. Each node holds
the page's text, image, and its "next page" link(s) as data, rendered by
one shared function instead of one script per page.

## City Park (`scripts/citypark/*.pl` + `data/citypark/*` → `js/locations/citypark.js`)

| Original | This repo |
|---|---|
| `main.pl` (KEY 2000) — name entry form | `#citypark` |
| `page.pl` (KEY 2010) + `data/citypark/page1..18` — reads a page file, substitutes `#name#` | `#citypark/<n>` — `CITYPARK_PAGES[n]`, `{{NAME}}` substituted at render time |

The visitor's name is kept in `sessionStorage` instead of being passed
around in the URL on every link.
