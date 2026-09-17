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

## Library (`scripts/library/*.pl` → `js/locations/library.js`)

The Library migration is data-driven rather than one JavaScript file per
state/activity.

### Main and regional pages

| Original KEY | Original script | SPA representation |
|---|---|---|
| 6000 | `library.pl` | `LIBRARY_MAIN` / `#library` |
| 6010 | `NorthWest.pl` | `LIBRARY_REGION_PAGES` |
| 6020 | `SouthWest.pl` | `LIBRARY_REGION_PAGES` |
| 6030 | `NorthCentral.pl` | `LIBRARY_REGION_PAGES` |
| 6040 | `SouthCentral.pl` | `LIBRARY_REGION_PAGES` |
| 6050 | `SouthEast.pl` | `LIBRARY_REGION_PAGES` |
| 6060 | `MidAtlantic.pl` | `LIBRARY_REGION_PAGES` |
| 6070 | `NewEngland.pl` | `LIBRARY_REGION_PAGES` |
| 6100 | `statepage.pl` | `libraryState()` / `#library/state/<state>` |

`LIBRARY_STATES` contains the state information and `LIBRARY_REGIONS`
contains the regional navigation data.

### Activities

| Original | SPA |
|---|---|
| `srchpass.pl` (KEY 6200) | Library activity routing/data |
| `b_wi_tale.pl` / `witale.pl` (6300/6400) | `LIBRARY_TALES` + `libraryTale()` |
| `b_or_tale.pl` / `ortale.pl` (6500/6600) | `LIBRARY_TALES` + `libraryTale()` |
| `b_ct_tale.pl` / `ctale.pl` (6700/6800) | `LIBRARY_TALES` + `libraryTale()` |
| `b_ny_fillin_db.pl` (6900) | `LIBRARY_FILLINS` + `libraryFillin()` |
| `b_fillin_db.pl` (6910) | `LIBRARY_FILLINS` + `libraryFillin()` |
| `b_dc_fillin_db.pl` (6920) | `LIBRARY_FILLINS` + `libraryFillin()` |
| `b_ak_wrdsrch.pl` / answer script | `LIBRARY_WORDSEARCH` + `libraryWordSearch()` |
| `b_az_wrdsrch.pl` / answer script | `LIBRARY_WORDSEARCH` + `libraryWordSearch()` |
| `b_ne_wdsrch.pl` / answer script | `LIBRARY_WORDSEARCH` + `libraryWordSearch()` |

The original state maps, flags, state graphics, tales, fill-in activities, and
word-search material are kept as data in `library.js` and rendered by a
smaller set of reusable functions.

Routes use descriptive SPA paths such as:

- `#library/state/CO`
- `#library/game/wi-tale`
- `#library/game/wi-tale/answer`
- `#library/game/ny-fillin`
- `#library/game/ak-wordsearch`

The original numeric keys remain represented in the data/mapping so the CGI
implementation can still be used as the reference.

## Museum (`scripts/museum/*.pl` → `js/locations/museum.js`)

The Museum combines several groups of original CGI pages.

| Original KEY | Original scripts | SPA |
|---|---|---|
| 8000 | `museum.pl` | `MUSEUM_PAGES["8000"]` |
| 8010 | `Welcolsec.pl` | `MUSEUM_PAGES["8010"]` |
| 8100–8150 | `Rainbowstory.pl`, `page2.pl`–`page6.pl` | `MUSEUM_PAGES` |
| 8500 | `wizard.pl` + `planetnav.pl` | Planetarium entry |
| 8510 | `wizard.pl data=ss1.dat` | `museumQuiz("basic")` |
| 8520 | `wizard.pl data=ss2.dat` | `museumQuiz("advanced")` |
| 8540 | `wizhelp.pl` + `planetnav.pl` | Planetarium help |
| 8550 | `planet.pl` | Planetarium page |

`museumStatic()` renders the static exhibit/story pages from
`MUSEUM_PAGES`.

`museumQuiz()` replaces the interactive CGI wizard. The question state is
kept in JavaScript, answers are handled with click listeners, and the user
can skip to another question or request help without a server request.

## School (`scripts/school/*.pl` → `js/locations/school.js`)

The School module combines the regular School page, the Word Fun activity,
the Word Scramble activity, and Zeek's Farm.

### School and games

| Original KEY | Original script | SPA |
|---|---|---|
| 4000 | `mainPage.pl` | `SCHOOL_PAGES["4000"]` |
| 4001 | `wordfun.pl` | `wordFun()` |
| 4002 | `e_scramble.pl` | `scramble()` |
| 4003 | `open.pl` | `SCHOOL_PAGES["4003"]` |
| 4004 | `wordfunhelp.pl` | `SCHOOL_PAGES["4004"]` |

`schoolLevelChoice()` replaces the original game-entry pages by presenting
the difficulty choices directly in the browser.

`SCHOOL_WORDS` holds the word/sentence/graphic records used by the games.
`pickWord()` selects a word for a new game.

The Word Fun activity tracks guessed letters in browser memory. The Word
Scramble activity tracks the current scrambled word and number of tries.
Correct/incorrect feedback is handled entirely with DOM event listeners.

### Zeek's Farm

| Original | SPA |
|---|---|
| `FarmTown1.pl` (4500) | `SCHOOL_PAGES["4500"]` |
| `FarmTown2.pl` and `FarmTown2-1.pl` … `FarmTown2-7.pl` (4510–4517) | `SCHOOL_PAGES` |
| `FarmTown3.pl` (4530) | `SCHOOL_PAGES["4530"]` |
| `FarmTown4.pl` and crop pages (4540–4548) | `SCHOOL_PAGES` |
| `FarmTown5.pl` (4560) | `SCHOOL_PAGES["4560"]` |
| `FarmTownAniNav.pl`, `FarmTownNav.pl`, `FarmTownPltNav.pl` | embedded `farm-nav` links in the page data |

The farm navigation is therefore represented as part of the page data rather
than separate server-side navigation scripts.