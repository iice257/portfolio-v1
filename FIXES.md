# portfolio-v1 — Fix Log

All fixes applied against source (note: the live deployment at kingsleyaremu-v1.vercel.app was built from an older commit, so some fixes also cover drift that only exists in the deployed build).

## 1. Theme toggle: first click did nothing in dark mode

**File:** `components/mode-toggle.tsx`

**Root cause:** `useState(theme === "dark")` snapshots its initial value during SSR/first render. `next-themes` cannot know the stored/system theme until it runs on the client, so `theme` is `undefined` at that moment and `isDarkMode` started as `false`. Result: page renders dark, knob renders in the light position. The first click computed `!false → setTheme("dark")` — already dark, so nothing visibly happened; the click was consumed just syncing the knob.

**Fix:** Removed the duplicated mirror state entirely. The toggle now derives from `resolvedTheme` behind a `mounted` guard:

```tsx
const isDarkMode = mounted && resolvedTheme === "dark"
onClick={() => setTheme(isDarkMode ? "light" : "dark")}
```

- Pre-mount: stable light-position render (same as before SSR), then flips to the true position immediately after hydration — matching the background next-themes has already applied.
- Post-mount: every click reads fresh theme state at click time, so toggles always work.

Also added `type="button"` and `aria-label="Toggle theme"` (the button was previously unlabeled).

## 2. OG/Twitter meta pointed at wrong domains

**Files:** `app/layout.tsx`, `app/page.tsx`

- `page.tsx` OG `url` + image pointed to `kingsleyaremu.vercel.app`; layout's OG url pointed at `kingsleyaremu.com`. Neither matches the actual deployment.
- Added `metadataBase: new URL("https://kingsleyaremu-v1.vercel.app")` so relative images resolve correctly; made both OG urls absolute to the real deployment; `page.tsx` og:image switched to relative `/favicon.png`.
- `twitter:creator` changed from `@kingsleyaremu` to `@iice257` (the handle actually linked everywhere else on the site).

Verified in built HTML: all og:url/og:image/twitter:image now resolve against `https://kingsleyaremu-v1.vercel.app`.

## 3. Invalid nested anchors around header logo (+ LCP fix)

**File:** `components/header.tsx`

The logo was `<a href="/"><Button asChild><a href="/" target="_blank">…</a></Button></a>` — an anchor inside an anchor (invalid HTML, hydration hazard), and clicking "home" opened a new tab. Collapsed to a single `<Link href="/">` with `aria-label="Home"`, removed `target="_blank"`. Also added `priority` to the logo `<Image>` — above-fold images were lazy-loading by default (LCP anti-pattern).

## 4. No-JS fallback CSS never actually worked

**File:** `components/noscript-styles.tsx`

The noscript stylesheet targeted `[data-motion="hidden"]` (used nowhere in markup) and `.no-js { display:block }` (class never used). Meanwhile framer-motion SSRs nav/logo items with inline `style="opacity:0;transform:…"` which no selector matched — so the header stayed invisible without JS despite the elaborate fallback.

- Replaced dead selectors with `header [style] { opacity:1 !important; transform:none !important }` — precisely targets framer-motion's inline-style elements, doesn't disturb class-based transforms (e.g. the toggle knob).
- Kept `.animate-in` override, added `animation: none` so cards are instantly visible.
- Removed the dead `.no-js` rule.

Related copy fix in `components/contact.tsx`: the noscript note claimed "Please enable JavaScript to use the form" — but the form is a native POST to Formspree and works fine without JS. Reworded to say so.

## 5. Fragile non-ASCII resume URL

**Files:** `components/hero.tsx`, deleted `public/KingsleyAremuResumé.pdf`

Hero linked `/KingsleyAremuResumé.pdf` (UTF-8 é — percent-encoding/server mismatch risk). Verified `public/resume.pdf` is byte-identical (matching MD5) and repointed the link there. Deleted the é-named duplicate. (`Kingsley Aremu Professional CV.pdf` left untouched — unreferenced.)

## 6. Name-dropped projects with no links

**File:** `components/experience.tsx`

- **GamblePause.com** — site verified live; bullet now hyperlinks to https://gamblepause.com (opens in new tab, styled to match muted text with hover accent).
- **PowerGrid** — checked `github.com/iice257/powergrid` → 404, no public artifact exists, so left as plain text rather than linking something broken.

## 7. Accessibility / UX leftovers

**File:** `components/footer.tsx`

Back-to-top icon link had no accessible name — added `aria-label="Back to top"` (smooth-scroll behavior itself was already correct).

## 8. AI-generator stamp

**File:** `app/layout.tsx` — removed `generator: 'v0.app'` from metadata.

## Additional issues found & fixed along the way

| Issue | Location | Fix |
|---|---|---|
| `import { title } from "process"` — bogus Node builtin import, unused | `components/experience.tsx:4` | Removed |
| Unused imports `ArrowUpCircle`, `Download` | `components/hero.tsx:4` | Removed |
| Unused `usePathname()` / `pathname` variable | `components/header.tsx` | Removed |
| Unused imports `Button`, `Switch`, `Label` | `components/mode-toggle.tsx` | Removed |
| `themeColor` in `metadata` export — unsupported in Next 15, warned on every build | `app/layout.tsx` | Moved to proper `export const viewport: Viewport` |

## Intentionally NOT changed

- **Issue 4 from review (per request):** hardcoded-era copyright (source already uses dynamic year anyway), no canonical tag / JSON-LD schema added, favicon still used as OG image, PNG icon still declared as `image/svg+xml`.
- **Skill list breadth**, `"Confidential Startup"` employer naming — editorial content decisions, owner's call.
- Monospace-everywhere typography, v0-era design choices, dead components (`projects.tsx`, `open-source.tsx`, `socials.tsx` aren't rendered), duplicated `globals.css` import in `layout.tsx`, `Suspense` wrapper — harmless quirks left as-is.
- Large commented-out legacy ModeToggle block kept untouched.

## Verification

- `npm run build` ✓ clean compile, zero warnings, static export succeeds
- Built HTML inspected: correct og/twitter domains, single (non-nested) home anchor, `header [style]` noscript rule present, `.no-js` gone, `resume.pdf` referenced, GamblePause link present, two labeled theme toggles
- Note: repo intentionally has **no committed lockfile**. One was tried initially, but Vercel deployments failed with it present (its install strategy changes when a lockfile exists; the project's legacy peer-dependency tree breaks under that path — local `npm ci` + build pass fine). Removed to restore the previously-working deploy behavior. `.npmrc` with `legacy-peer-deps=true` is kept so fresh clones / `npm ci` still resolve cleanly locally.

## 9. V2 portal panel (hero)

**Files:** \components/v2-portal.tsx\, \pp/globals.css\, \pp/client.tsx\, \components/hero.tsx\

New hero element linking to the current portfolio. Dependency-free ports of v2's signature interactions:
- ShuffleText-style progressive scramble (plays ~600ms after load, replays on hover, width-clipped during shuffle)
- link-underline sweep and magnetic arrow drift; every timing uses v2's cubic-bezier(0.16, 1, 0.3, 1)
- Respects prefers-reduced-motion; renders as plain static text/link without JS

Styled in globals.css (\.v2-portal\ block) with v2's exact tokens (\#0a0a0a\, \#262626\, \#737373\, \#fafafa\, \#7CFFCB\). Panel stays dark in both v1 themes deliberately - it reads as an artifact from the newer site.

Fonts: Inter + IBM Plex Mono self-hosted via next/font as \--v2-font-inter\ / \--v2-font-ibm-plex-mono\.

Note: styled-jsx was tried first and dropped - App Router without a style registry does not server-render styled-jsx styles (verified: even client.tsx's pre-existing global style tag never reaches the exported HTML).

## 9b. Portal revision (per owner review)

White hover glow replaces mint; corners squared (v2 has zero roundness); width is now max-content so each line sits on one line without wrapping; copy changed to top: \"this version of my portfolio is now outdated.\" bottom: \"Go to the newest version\".
