# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

One **PAC** (Parcours d'Activation des Compétences) block application for Éminéo Education:
**CDRH — RNCP 38438 — BC1** ("Gérer l'administration du personnel et la fonction RH").

The student is dropped into a simulated macOS desktop ("Lumio Health", a fictional medtech) with mail,
Safari, Slack, PDF viewer, voice memos, notes, Finder, trash and a deliverable ("livrable") app. They
investigate a fictional case for ~250 minutes, then submit a written deliverable that Claude evaluates
against the RNCP competency grid and emails back as a "portfolio de compétences".

This repo is **one of 18 sibling block apps** (see *Ecosystem* below). They share the same runtime skeleton;
only `data.js`, `spec.json`, `portraits/` and the `BLOC_ID`/`TITRE_CODE` constants differ. Treat generic
runtime files (`desktop.jsx`, `main.jsx`, `app-*.jsx`) as **shared, reusable code** — fixes there are
expected to be portable to the other blocks, so never hardcode narrative into them.

## Build / run / test

There is **no build step, no bundler, no test suite, no linter**. `package.json` has no scripts.
`.jsx` files are compiled **in the browser** by `@babel/standalone`; React 18 comes from unpkg UMD.

```bash
vercel dev            # the only meaningful local run — serves the static root AND api/
python3 -m http.server 8000   # static-only: UI loads, but /api/chat, /api/session, /api/send-portfolio all 404
```

Because there's no test harness, verification is manual in the browser. Two useful hooks exposed on `window`:

- `window.LUMIO_RESET()` — clears the Redis session + `localStorage.lumio_sid` and reloads.
- `window.LUMIO_EXPORT_LOG()` — downloads the `LUMIO_LOG` JSON (trainer-facing session log).

Local session/identity shortcut: the app **redirects to the portal** if there is no `lumio_sid` in
`localStorage` and no portal params in the URL. To reach the desktop locally, open
`http://localhost:3000/?p=Prenom&n=Nom&e=test@example.com`.

Required Vercel env vars: `ANTHROPIC_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`,
`RESEND_API_KEY`, `PAC_BLOC_KEY` (`"titre:bloc"` lowercase, e.g. `cdrh:bc1` — identifies this
deployment; see *Portfolio-send chain* below), optional `PORTFOLIO_FROM`, optional
`PAC_FALLBACK_EMAIL` (CC'd on the portfolio email whenever the student's campus can't be
resolved to a référent pédagogique — see *Portfolio-send chain* below).

## Architecture

### No modules — everything is a `window` global, and load order matters

`index.html` loads scripts in a fixed sequence: `data.js` → `icons.jsx` → all `app-*.jsx` →
`desktop.jsx` → `main.jsx`. There are no imports/exports. Cross-file communication is entirely through
globals, so **adding a file means adding a `<script>` tag to `index.html` in the right position**.

Note the `const { useState: useXxxState } = React` aliasing at the top of each `app-*.jsx` — since all
files share one global scope, every file must alias hooks under a unique name or the redeclaration throws.

The global contract:

| Global | Owner | Role |
|---|---|---|
| `window.LUMIO_DATA` | `data.js` | **All narrative content** (`D` in the apps) |
| `window.PAC_CONFIG` | `data.js` | Block config: competencies, acts timeline, jury prompt, word minimums. `window.PASS_CONFIG` is a legacy alias |
| `window.LUMIO_APPS` | each `app-*.jsx` | `{ appKey: ReactComponent }` registry the window manager renders from |
| `window.<Name>Icon` | `icons.jsx` | SVG icon components referenced by name in `APP_META` |
| `window.LumioDesktop`, `window.useWindows()` | `desktop.jsx` | Desktop root + `{ open(app, props) }` context for apps to open other windows |
| `window.LUMIO_SESSION` | `main.jsx` | `{ save, load, clear }` over `/api/session` |
| `window.LUMIO_TIMER_START` | `main.jsx` | Epoch ms when the case started — drives the timer, fictional clock and act transitions |
| `window.LUMIO_LOG` | various | Trainer-facing event log |
| `window.__on*` callbacks | `desktop.jsx` sets, apps call | Event engine hooks (`__onSlackExchange`, `__onLivrableSubmitted`, `__onAppOpened`, `__onSlackSent`) |

### `data.js` is the content layer — apps must stay narrative-free

Every `app-*.jsx` reads from `LUMIO_DATA` / `PAC_CONFIG` with fallbacks, and the file headers say so
explicitly ("Aucune narration hardcodée"). Keys present in this block: `student`, `contexte`,
`briefEmail`, `jakobEmail`, `theoNote`, `deckBoard`, `yassineVeille`, `camilleVerbatims`,
`pressArticles`, `fausseUne`, `documents`, `slackMessages`, `voiceMemos`, `finder`, `dossiers`,
`guide`, `portraits`.

Keys the runtime *supports but this block omits* (each has a documented fallback):
`mailbox` (falls back to synthesising an inbox from `briefEmail`/`jakobEmail` plus neutral distractors),
`browser`, `notes`, `notepad`, `calendar`, `trash`, `personnages`, `events`, `fictif`, `desktopIcons`,
`kpis`. When porting a fix, check the fallback path — several blocks exercise only one branch.

Runtime-mutated keys are prefixed with `_` (`_mailThreads`, `_bonusEmail`, `_slackExchanges`,
`_livrableSubmitted`, `_timeAlerts`, `_openedApps`, `_note_*`). These live on the global, not in React
state, so they survive window close/reopen.

`{{PRENOM}}`, `{{NOM}}`, `{{EMAIL_ETUDIANT}}` placeholders anywhere in `data.js` are substituted in one
pass by `applyStudent()` (`main.jsx`) — it stringifies `LUMIO_DATA`, replaces, reparses. Student input is
HTML-escaped there because much of the narrative is rendered via `dangerouslySetInnerHTML`.

`spec.json` is **authoring input, never loaded at runtime** — the narrative design brief (competency
grid with `min_mots`/`mots_cles`/`conseil`, `documents_fictifs`, `easter_egg`, elimination criteria) from
which `data.js` and `PAC_CONFIG` are written. Keep it in sync when changing competencies or minimums.

### Window manager (`desktop.jsx`)

`APP_META` maps app keys → title/default size/icon name; `LUMIO_APPS[key]` supplies the component.
Windows are plain objects in `Desktop` state (`x/y/w/h/z/focused/minimized/maximized/props`).

De-duplication is by **target signature** (`winSignature`): `app + '::' + (openDoc|openId|openNote|openPortrait|openFolder|openTab)`.
Same target → focus the existing window; different target → new window. `browser` is special-cased to a
single window that accumulates tabs. Finder passes a generic `docId`, remapped per app via `DOC_PROP`.

### Two clocks

- **Real timer** — `LUMIO_TIMER_START` vs `PAC_CONFIG.dureeMinutes` (250) and `PAC_CONFIG.temps` (the 5 acts) drives `PacTimeline` and act transitions.
- **Fictional clock** — `getFictifTime()` compresses `LUMIO_DATA.fictif.spanDays` (default 18 diegetic days) into the real session duration; exposed as `window.__getFictifTime` for `dayTriggers`.

### Event engine

`Desktop` wires several independent `useEffect` loops, all driven by `LUMIO_DATA.events` with hardcoded
defaults when absent: `onSlackExchange` (also unlocks the livrable after `unlockLivrableAfter` exchanges,
default 1), `dayTriggers` (fictional day), `contextTips` (behaviour-gated hints), `ambient` (wall-clock),
`timeAlerts` (commissioner nudges at % of duration; re-emits only the most recent crossed alert after a
reload), `actTransitions` (act-gated, may inject a bonus email or unlock a note).

Apps that want to notify without touching desktop internals dispatch `window.dispatchEvent(new CustomEvent('pac:notify', { detail: { app, icon, color, title, body, ttl, click: { app, props } } }))`.
`pac:time-alert` is the Slack-side channel for commissioner nudges.

### Claude calls

All Claude usage goes through **`POST /api/chat`** (a thin Anthropic Messages proxy that injects the API
key server-side). `index.html` additionally monkey-patches `window.fetch` to rewrite any
`api.anthropic.com` call to `/api/chat` and to show the `#lumio-api-error` banner on failure.

| Caller | Model | Purpose |
|---|---|---|
| `app-assistant.jsx` (Jefferson) | `claude-haiku-4-5-20251001` | Method guide — never gives case answers |
| `app-slack.jsx` | `claude-sonnet-4-6` | In-character replies from Lumio staff |
| `app-mail.jsx` | `claude-sonnet-4-6` | In-character email reply, delivered after a 45–70 s delay |
| `app-livrable.jsx` | `claude-sonnet-4-6` | Two-pass jury: formative feedback, then final debrief |

The jury system prompt is `PAC_CONFIG.juryPrompt` plus a formative/final suffix. The livrable flow is
`draft → feedback → (revision) → debrief`, gated on per-competency `min_mots` and `livrableMinMots` (520).

### Serverless routes (`api/`)

- **`chat.js`** — Anthropic proxy. Requires `model`, `messages`, `max_tokens`.
- **`session.js`** — Upstash Redis REST at key `lumio:bc1:session:<id>`, 90-day TTL. GET restores, POST merges-then-writes, DELETE resets. Session id is a client-side hash of name + timestamp, cached in `localStorage.lumio_sid`. **The `bc1` in the key prefix is block-specific.**
- **`send-portfolio.js`** — generic across all 18 blocs (see *Portfolio-send chain* below for the
  `PAC_BLOC_KEY` mechanism). Marks completion on the portal (`POST <titre>-pac.vercel.app/api/progress`
  with a sha256-truncated email hash) **before** sending via Resend, so progress survives an email
  failure. CCs the campus référents pédagogiques resolved from the `emineo-campus-rp` hub (titre-scoped
  via `?titre=`), with `PAC_FALLBACK_EMAIL` as the sole fallback if the hub is unreachable or the campus
  is unknown to it. Resend failure returns **200** with `sent: false`.

### Ecosystem / identity chain

```
emineo-pac.vercel.app (hub)
  → cdrh-pac.vercel.app (identification: prénom, nom, email, campus)
      → this app, via ?p=<prénom>&n=<nom>&e=<email>&c=<campus>
```

`readPortalParams()` in `main.jsx` bypasses the local NameScreen/lockscreen when `p` + a valid `e` are
present. `getPortalUrl()` picks the portal from `PAC_CONFIG.titreCode` (`https://<titreCode
lowercased>-pac.vercel.app`, e.g. `CDRH` → `cdrh-pac`), falling back to `emineo-pac` if `titreCode` is
unset, and is where the app redirects on logout or a missing session. This makes `main.jsx` itself
generic — the only per-bloc input is `PAC_CONFIG.titreCode` in `data.js` — unlike the previous
hostname-substring matching, which also silently fell through to `emineo-pac` on `localhost`.

`NameScreen` / `LoginScreen` in `main.jsx` are the pre-portal fallback path — reachable only when there
are no portal params *and* a session exists in Redis without `fromPortal`.

## Portfolio-send chain

`PAC-Emineo-retour-technique.md` (untracked, at repo root) is a black-box production audit of the whole
PAC fleet; two of its findings applied to this repo and are now fixed (branch `corrections-audit`):

1. **Payload contract.** `app-livrable.jsx`'s `sendPortfolio()` posts `{ email, studentName, portfolioHTML, bloc, campus }` — matching what `api/send-portfolio.js` destructures. (It used to post `{ to, html }`, which the handler couldn't read, so the portfolio was never actually sent.)
2. **Campus threading.** `readPortalParams()` (`main.jsx`) reads `c` from the portal URL, normalizes it (`normalizeCampus()`: lowercase, accents stripped, internal whitespace collapsed — the RP registry uses space-separated ids like `le mans`, `la rochelle`) and threads it through `applyStudent()` → `window.LUMIO_SESSION` (`studentCampus`) → `LUMIO_DATA.student.campus`, so it reaches the send-portfolio payload. The fallback `NameScreen` path (no portal params) has no campus source and leaves it empty — that path is already the deprecated/marginal one per the identity chain above.

`api/send-portfolio.js` never sends silently without an institutional recipient, but it also never
blocks the student's own delivery:
- `normalizeCampus()` (a second, byte-identical copy — no module system across the browser/serverless
  boundary) is applied both when building `campusRPMap` from the hub and when resolving the incoming
  `campus`, so casing/accent/whitespace variants match the registry.
- The hub (`emineo-campus-rp`, queried with `?titre=<TITRE_CODE>`) is the **sole** source of truth for
  campus → RP resolution — there is no local fallback map. Verified live: the same campus can resolve to
  a different RP depending on `titre` (e.g. `le mans` differs between `CDRH` and `MSMC`), so the `titre`
  param is load-bearing, not decorative — never drop it.
- If campus resolution fails (empty, or present but unknown to the hub), or the hub itself is
  unreachable/times out (2.5 s), the email still goes to the student; the CC falls back to
  `PAC_FALLBACK_EMAIL` (if configured) instead of an empty CC list, and the response includes
  `campusResolved: false` so the client can show a plain, non-alarming notice ("your work was received, a
  référent will be attached manually").
- Every such case is logged for manual follow-up (`console.warn` plus a best-effort `RPUSH` to Upstash
  Redis, command sent in the POST body as `["RPUSH", key, value]`, never in the URL, since the incident
  contains the student's email/name) as one of two distinct events, so an infrastructure outage doesn't
  get miscounted as N isolated campus problems:
  - `hub_unreachable` — the hub itself didn't respond; affects every send during the outage window.
  - `campus_unresolved` — the hub responded but doesn't know this campus (typo, or genuinely missing from
    the registry — e.g. it was missing a `la rochelle` entry before that was traced to this incident
    stream once).

### Generic across all 18 blocs — `PAC_BLOC_KEY`

`api/send-portfolio.js`, `main.jsx` and `portfolio-card-template.browser.js` are copiable verbatim to
any of the 18 sibling blocs — only `data.js` and `index.html` are expected to diverge. The one
per-deployment input on the serverless side is the `PAC_BLOC_KEY` env var, format `"<titre>:<bloc>"`
lowercase (e.g. `cdrh:bc1`), from which `api/send-portfolio.js` derives everything else:
`TITRE_CODE` (upper-cased, used for the hub's `?titre=` and the progress-portal host), `BLOC_ID` (used
as the `nomBloc` fallback and in the completion POST), the Redis incidents key
(`` `${PAC_BLOC_KEY}:incidents` ``), and `PORTAIL_URL` (`https://<titre>-pac.vercel.app/api/progress` —
verified correct for `cdrh-pac`/`msmc-pac`, not yet confirmed for `mmd-pac`/`mdo-pac`). If
`PAC_BLOC_KEY` is missing, the module logs a startup `console.warn` (a silent default would mean
incidents land in `unknown:incidents`, a channel nobody watches) and everything derived from it falls
back to `'unknown'`. On the client side, the equivalent input is `PAC_CONFIG.titreCode` in `data.js`
(see *Ecosystem / identity chain* above) — `main.jsx` has no env vars available in the browser, so that
value has to live in the one file that's already allowed to diverge.

⚠️ **Trap for the 5 MSMC blocs**: their repos are named `lumio-*` (the shared fictional-universe name,
"Lumio Health" — see *Ecosystem* above), not `msmc-*`. The repo name is **not** the titre code. For
these blocs, `PAC_BLOC_KEY` must still be `msmc:bcN` and `data.js`'s `PAC_CONFIG.titreCode` must still
be `"MSMC"` — never `"LUMIO"` or anything derived from the repo/folder name. Setting either to `LUMIO`
would make `PORTAIL_URL`/`getPortalUrl()` build `https://lumio-pac.vercel.app`, a domain that doesn't
exist (the real MSMC portal is `msmc-pac.vercel.app`), silently breaking completion-marking and portal
redirects for that bloc.

## Other things worth knowing

- **`styles.css` is dead code** — nothing references it. The live CSS is the inline `<style>` in `index.html` (design tokens `--font-display/-sans/-mono`, `--bg`, `--ink*`, `--rule`, `--accent`, plus keyframes) and inline `style={{}}` objects everywhere else. Editing `styles.css` has no effect.
- **`trash` is registered twice** — `app-extras.jsx:178` then `app-trash.jsx:379`. `app-trash.jsx` loads later and wins (it holds the WhatsApp easter egg). Don't "fix" this by reordering the script tags without checking which implementation is intended.
- **`portraits/*.html` are standalone documents** rendered in an `<iframe>` by `app-browser.jsx:88` — full magazine-style pages with their own fonts and CSS, independent of the app's design tokens. `portraits/*.png` are their images.
- **French is the working language** — UI copy, comments, commit history and content are all French. Keep new comments and user-facing strings in French.
- Git history is entirely `Add files via upload` (GitHub web UI); there is no meaningful commit narrative to mine.
